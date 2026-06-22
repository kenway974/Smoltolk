INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('avatars',          'avatars',          true, 5242880,  ARRAY['image/jpeg','image/png','image/webp']),
  ('activity-photos',  'activity-photos',  true, 10485760, ARRAY['image/jpeg','image/png','image/webp'])
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "avatars_public_read"    ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "avatars_auth_insert"    ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "activity_photos_public" ON storage.objects FOR SELECT USING (bucket_id = 'activity-photos');
CREATE POLICY "activity_photos_auth"   ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'activity-photos' AND auth.uid() IS NOT NULL);
