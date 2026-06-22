-- Global stories (community feed)
create table global_stories (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  image_url text not null,
  storage_path text,
  caption text,
  expires_at timestamptz not null default (now() + interval '24 hours'),
  created_at timestamptz not null default now()
);

alter table global_stories enable row level security;
create policy "global_stories: public read" on global_stories for select using (expires_at > now());
create policy "global_stories: own insert" on global_stories for insert with check (auth.uid() = user_id);
create policy "global_stories: own delete" on global_stories for delete using (auth.uid() = user_id);

-- Global stories storage bucket
insert into storage.buckets (id, name, public) values ('global-stories', 'global-stories', true)
  on conflict do nothing;

create policy "global-stories: public read" on storage.objects
  for select using (bucket_id = 'global-stories');

create policy "global-stories: auth upload" on storage.objects
  for insert with check (
    bucket_id = 'global-stories' and
    auth.uid() is not null and
    (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "global-stories: own delete" on storage.objects
  for delete using (
    bucket_id = 'global-stories' and
    (storage.foldername(name))[1] = auth.uid()::text
  );
