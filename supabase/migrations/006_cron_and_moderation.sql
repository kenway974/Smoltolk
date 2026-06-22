-- moderation_note already in schema (001)
-- pg_cron scheduled jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Cleanup stories every hour
SELECT cron.schedule('cleanup-stories-hourly', '0 * * * *', $$
  SELECT net.http_post(
    url     := current_setting('app.supabase_url') || '/functions/v1/cleanup-stories',
    headers := jsonb_build_object('Authorization', 'Bearer ' || current_setting('app.service_role_key'), 'Content-Type', 'application/json'),
    body    := '{}'
  );
$$);

-- Send reminders daily at 06:00 UTC (10:00 Réunion)
SELECT cron.schedule('send-reminders-daily', '0 6 * * *', $$
  SELECT net.http_post(
    url     := current_setting('app.supabase_url') || '/functions/v1/send-reminders',
    headers := jsonb_build_object('Authorization', 'Bearer ' || current_setting('app.service_role_key'), 'Content-Type', 'application/json'),
    body    := '{}'
  );
$$);
