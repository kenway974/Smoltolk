-- Activity stories
create table activity_stories (
  id uuid default uuid_generate_v4() primary key,
  activity_id uuid references activities(id) on delete cascade not null,
  user_id uuid references profiles(id) on delete cascade not null,
  image_url text not null,
  storage_path text not null,
  caption text,
  expires_at timestamptz not null default (now() + interval '24 hours'),
  created_at timestamptz not null default now()
);

alter table activity_stories enable row level security;
create policy "activity_stories: public read" on activity_stories for select using (expires_at > now());
create policy "activity_stories: own insert" on activity_stories for insert with check (auth.uid() = user_id);
create policy "activity_stories: own delete" on activity_stories for delete using (auth.uid() = user_id);

-- Stories storage bucket
insert into storage.buckets (id, name, public) values ('stories', 'stories', true)
  on conflict do nothing;

create policy "stories: public read" on storage.objects
  for select using (bucket_id = 'stories');

create policy "stories: auth upload" on storage.objects
  for insert with check (
    bucket_id = 'stories' and
    auth.uid() is not null and
    (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "stories: own delete" on storage.objects
  for delete using (
    bucket_id = 'stories' and
    (storage.foldername(name))[1] = auth.uid()::text
  );
