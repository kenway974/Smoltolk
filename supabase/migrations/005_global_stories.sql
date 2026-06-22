INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('global-stories', 'global-stories', true, 52428800, ARRAY['image/jpeg','image/png','image/webp','video/mp4','video/quicktime','video/webm'])
ON CONFLICT (id) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.global_stories (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  media_url  TEXT NOT NULL,
  caption    TEXT,
  status     TEXT NOT NULL DEFAULT 'active',
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + INTERVAL '24 hours'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.global_stories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "global_stories_public_read"  ON public.global_stories FOR SELECT USING (expires_at > now() AND status = 'active');
CREATE POLICY "global_stories_auth_insert"  ON public.global_stories FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "global_stories_owner_delete" ON public.global_stories FOR DELETE USING (auth.uid() = user_id);
