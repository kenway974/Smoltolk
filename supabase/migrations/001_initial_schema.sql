-- Enable extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm";

-- Profiles
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  display_name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'admin')),
  bassin_preference text,
  category_interests text[] default '{}',
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;
create policy "profiles: own read" on profiles for select using (auth.uid() = id);
create policy "profiles: own update" on profiles for update using (auth.uid() = id);
create policy "profiles: insert on signup" on profiles for insert with check (auth.uid() = id);

-- Activities
create table activities (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  category text not null,
  bassin text not null,
  start_date timestamptz not null,
  end_date timestamptz,
  start_time text,
  end_time text,
  location text,
  price numeric(10,2),
  is_free boolean not null default false,
  is_outdoor boolean not null default true,
  image_url text,
  source_url text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  moderation_note text,
  user_id uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table activities enable row level security;
create policy "activities: public read approved" on activities for select using (status = 'approved');
create policy "activities: own read" on activities for select using (auth.uid() = user_id);
create policy "activities: insert auth" on activities for insert with check (auth.uid() = user_id);
create policy "activities: own update" on activities for update using (auth.uid() = user_id and status = 'pending');
create policy "activities: admin all" on activities using (exists (
  select 1 from profiles where id = auth.uid() and role = 'admin'
));

-- Favorites
create table favorites (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  activity_id uuid references activities(id) on delete cascade not null,
  created_at timestamptz not null default now(),
  unique(user_id, activity_id)
);

alter table favorites enable row level security;
create policy "favorites: own crud" on favorites using (auth.uid() = user_id);

-- Registrations
create table registrations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  activity_id uuid references activities(id) on delete cascade not null,
  created_at timestamptz not null default now(),
  unique(user_id, activity_id)
);

alter table registrations enable row level security;
create policy "registrations: own crud" on registrations using (auth.uid() = user_id);
create policy "registrations: count read" on registrations for select using (true);

-- Collections
create table collections (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  description text,
  is_public boolean not null default false,
  created_at timestamptz not null default now()
);

alter table collections enable row level security;
create policy "collections: own crud" on collections using (auth.uid() = user_id);
create policy "collections: public read" on collections for select using (is_public = true);

create table collection_items (
  id uuid default uuid_generate_v4() primary key,
  collection_id uuid references collections(id) on delete cascade not null,
  activity_id uuid references activities(id) on delete cascade not null,
  added_at timestamptz not null default now(),
  unique(collection_id, activity_id)
);

alter table collection_items enable row level security;
create policy "collection_items: owner crud" on collection_items using (
  exists (select 1 from collections where id = collection_id and user_id = auth.uid())
);

-- Reviews
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  activity_id uuid references activities(id) on delete cascade not null,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz not null default now(),
  unique(user_id, activity_id)
);

alter table reviews enable row level security;
create policy "reviews: public read" on reviews for select using (true);
create policy "reviews: own crud" on reviews using (auth.uid() = user_id);

-- Push subscriptions
create table push_subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  endpoint text not null unique,
  keys jsonb not null,
  created_at timestamptz not null default now()
);

alter table push_subscriptions enable row level security;
create policy "push_subscriptions: own crud" on push_subscriptions using (auth.uid() = user_id);

-- Notifications
create table notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  message text not null,
  type text not null default 'system' check (type in ('reminder', 'new_activity', 'moderation', 'system')),
  read boolean not null default false,
  created_at timestamptz not null default now()
);

alter table notifications enable row level security;
create policy "notifications: own crud" on notifications using (auth.uid() = user_id);

-- Reports
create table reports (
  id uuid default uuid_generate_v4() primary key,
  reporter_id uuid references profiles(id) on delete cascade not null,
  content_id uuid not null,
  content_type text not null check (content_type in ('activity', 'review', 'story')),
  reason text not null check (reason in ('spam', 'inappropriate', 'misleading', 'other')),
  details text,
  created_at timestamptz not null default now()
);

alter table reports enable row level security;
create policy "reports: own insert" on reports for insert with check (auth.uid() = reporter_id);
create policy "reports: admin read" on reports for select using (
  exists (select 1 from profiles where id = auth.uid() and role = 'admin')
);

-- Function to update updated_at
create or replace function update_updated_at_column()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger activities_updated_at
  before update on activities
  for each row execute function update_updated_at_column();
