-- Require verified email before proposing an activity
CREATE POLICY "require verified email to propose"
  ON public.activities
  FOR INSERT
  WITH CHECK (
    auth.uid() IS NOT NULL AND
    EXISTS (SELECT 1 FROM auth.users WHERE id = auth.uid() AND email_confirmed_at IS NOT NULL)
  );

-- Rate-limit: max 5 pending activities per user
CREATE POLICY "max pending activities per user"
  ON public.activities
  FOR INSERT
  WITH CHECK (
    (SELECT COUNT(*) FROM public.activities WHERE creator_id = auth.uid() AND status = 'pending') < 5
  );
