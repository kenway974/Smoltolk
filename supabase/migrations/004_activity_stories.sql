INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('stories', 'stories', true, 52428800, ARRAY['image/jpeg','image/png','image/webp','video/mp4','video/quicktime','video/webm'])
ON CONFLICT (id) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.activity_stories (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  activity_id UUID NOT NULL REFERENCES public.activities(id) ON DELETE CASCADE,
  user_id     UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  media_url   TEXT NOT NULL,
  caption     TEXT,
  expires_at  TIMESTAMPTZ NOT NULL DEFAULT (now() + INTERVAL '24 hours'),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.activity_stories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "activity_stories_public_read" ON public.activity_stories FOR SELECT USING (expires_at > now());
CREATE POLICY "activity_stories_auth_insert" ON public.activity_stories FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "activity_stories_owner_delete" ON public.activity_stories FOR DELETE USING (auth.uid() = user_id);
