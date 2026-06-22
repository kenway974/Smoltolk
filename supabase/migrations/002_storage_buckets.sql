-- Avatars bucket
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true)
  on conflict do nothing;

create policy "avatars: public read" on storage.objects
  for select using (bucket_id = 'avatars');

create policy "avatars: auth upload" on storage.objects
  for insert with check (
    bucket_id = 'avatars' and
    auth.uid() is not null and
    (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "avatars: own delete" on storage.objects
  for delete using (
    bucket_id = 'avatars' and
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Activity photos bucket
insert into storage.buckets (id, name, public) values ('activity-photos', 'activity-photos', true)
  on conflict do nothing;

create policy "activity-photos: public read" on storage.objects
  for select using (bucket_id = 'activity-photos');

create policy "activity-photos: auth upload" on storage.objects
  for insert with check (
    bucket_id = 'activity-photos' and
    auth.uid() is not null
  );
