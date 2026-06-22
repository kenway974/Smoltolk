-- SortiesRéunion — Schéma initial
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- PROFILES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username    TEXT UNIQUE,
  full_name   TEXT,
  avatar_url  TEXT,
  bio         TEXT,
  website     TEXT,
  role        TEXT NOT NULL DEFAULT 'user',
  interests   TEXT[] DEFAULT '{}',
  preferred_bassins TEXT[] DEFAULT '{}',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id) VALUES (NEW.id)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ============================================================
-- ACTIVITIES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.activities (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title           TEXT NOT NULL,
  description     TEXT NOT NULL,
  category        TEXT NOT NULL,
  date_start      DATE NOT NULL,
  date_end        DATE,
  time_start      TIME,
  time_end        TIME,
  location        TEXT,
  address         TEXT,
  bassin          TEXT,                 -- 'nord'|'ouest'|'sud'|'est'
  lat             NUMERIC,
  lng             NUMERIC,
  price_type      TEXT NOT NULL DEFAULT 'free',
  price_detail    TEXT,
  is_outdoor      BOOLEAN DEFAULT false,
  image_url       TEXT,
  external_url    TEXT,
  creator_id      UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  source          TEXT,                 -- 'user'|connector slug
  external_id     TEXT,
  status          TEXT NOT NULL DEFAULT 'pending',
  moderation_note TEXT,
  going_count     INTEGER NOT NULL DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(source, external_id),
  CONSTRAINT activities_category_check CHECK (category IN (
    'soirees','concerts','expositions','restaurants','bars','sport','culture',
    'famille','etudiants','networking','loisirs','salons',
    'open-air-plage','marches-forains','rando-sport','outdoor'
  )),
  CONSTRAINT activities_status_check CHECK (status IN ('pending','approved','rejected')),
  CONSTRAINT activities_price_check CHECK (price_type IN ('free','paid','suggested')),
  CONSTRAINT activities_bassin_check CHECK (bassin IS NULL OR bassin IN ('nord','ouest','sud','est'))
);

CREATE INDEX idx_activities_status_date ON public.activities(status, date_start);
CREATE INDEX idx_activities_category ON public.activities(category);
CREATE INDEX idx_activities_bassin ON public.activities(bassin);
CREATE INDEX idx_activities_source ON public.activities(source, external_id);

-- ============================================================
-- FAVORITES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.favorites (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  activity_id UUID NOT NULL REFERENCES public.activities(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, activity_id)
);

-- ============================================================
-- REGISTRATIONS (J'y vais)
-- ============================================================
CREATE TABLE IF NOT EXISTS public.registrations (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  activity_id UUID NOT NULL REFERENCES public.activities(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, activity_id)
);

CREATE OR REPLACE FUNCTION public.update_going_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.activities SET going_count = going_count + 1 WHERE id = NEW.activity_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.activities SET going_count = GREATEST(0, going_count - 1) WHERE id = OLD.activity_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trg_going_count
  AFTER INSERT OR DELETE ON public.registrations
  FOR EACH ROW EXECUTE PROCEDURE public.update_going_count();

-- ============================================================
-- COLLECTIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.collections (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name         TEXT NOT NULL,
  description  TEXT,
  activity_ids UUID[] DEFAULT '{}',
  is_public    BOOLEAN DEFAULT false,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- REVIEWS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.reviews (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  activity_id UUID NOT NULL REFERENCES public.activities(id) ON DELETE CASCADE,
  rating      INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  body        TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, activity_id)
);

-- ============================================================
-- PUSH SUBSCRIPTIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.push_subscriptions (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  subscription JSONB NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- ============================================================
-- NOTIFICATIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.notifications (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type       TEXT NOT NULL,
  payload    JSONB NOT NULL DEFAULT '{}',
  read       BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- REPORTS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.reports (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reporter_id  UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  content_type TEXT NOT NULL,
  content_id   UUID NOT NULL,
  reason       TEXT NOT NULL,
  detail       TEXT,
  status       TEXT NOT NULL DEFAULT 'pending',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT reports_reason_check CHECK (reason IN ('spam','inappropriate','misleading','other')),
  CONSTRAINT reports_status_check CHECK (status IN ('pending','reviewed','dismissed'))
);

-- ============================================================
-- RLS
-- ============================================================
ALTER TABLE public.profiles            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activities          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.push_subscriptions  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports             ENABLE ROW LEVEL SECURITY;

-- Activities: public read of approved; authenticated insert; owner update/delete
CREATE POLICY "activities_public_read"   ON public.activities FOR SELECT USING (status = 'approved');
CREATE POLICY "activities_auth_insert"   ON public.activities FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "activities_owner_update"  ON public.activities FOR UPDATE USING (creator_id = auth.uid());
CREATE POLICY "activities_owner_delete"  ON public.activities FOR DELETE USING (creator_id = auth.uid());

-- Profiles
CREATE POLICY "profiles_public_read"  ON public.profiles FOR SELECT USING (true);
CREATE POLICY "profiles_owner_write"  ON public.profiles FOR ALL USING (auth.uid() = id);

-- Favorites / Registrations / Collections / Reviews / Push / Notifications / Reports
CREATE POLICY "favorites_owner"           ON public.favorites          FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "registrations_owner"       ON public.registrations      FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "collections_owner"         ON public.collections        FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "reviews_owner"             ON public.reviews            FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "push_subscriptions_owner"  ON public.push_subscriptions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "notifications_owner"       ON public.notifications      FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "reports_auth_insert"       ON public.reports            FOR INSERT WITH CHECK (auth.uid() = reporter_id);
