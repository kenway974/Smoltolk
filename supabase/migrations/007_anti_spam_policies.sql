-- Require verified email before inserting activities
create or replace function check_email_verified()
returns boolean language sql security definer as $$
  select exists (
    select 1 from auth.users
    where id = auth.uid()
    and email_confirmed_at is not null
  );
$$;

-- Drop old insert policy and replace with stricter one
drop policy if exists "activities: insert auth" on activities;

create policy "activities: insert verified" on activities
  for insert with check (
    auth.uid() = user_id and
    check_email_verified()
  );

-- Max 5 pending activities per user
create or replace function count_pending_activities(uid uuid)
returns integer language sql security definer as $$
  select count(*)::integer from activities
  where user_id = uid and status = 'pending';
$$;

create or replace function enforce_pending_limit()
returns trigger language plpgsql as $$
begin
  if new.status = 'pending' and count_pending_activities(new.user_id) >= 5 then
    raise exception 'Vous avez atteint la limite de 5 activités en attente.';
  end if;
  return new;
end;
$$;

create trigger activities_pending_limit
  before insert on activities
  for each row execute function enforce_pending_limit();
