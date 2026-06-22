-- Enable pg_net for HTTP calls from database
create extension if not exists pg_net;

-- Import sources table for connector tracking
create table if not exists import_sources (
  id uuid default uuid_generate_v4() primary key,
  name text not null unique,
  last_imported_at timestamptz,
  last_count integer default 0,
  created_at timestamptz not null default now()
);
