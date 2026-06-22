-- Support for automated imports: source + external_id already in schema (001).
-- This migration adds the pg_net extension needed by pg_cron → Edge Functions.
CREATE EXTENSION IF NOT EXISTS pg_net;
