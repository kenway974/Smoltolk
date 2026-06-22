import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async () => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  const now = new Date().toISOString()

  // Clean expired activity stories
  const { data: expiredActivity } = await supabase
    .from('activity_stories')
    .select('storage_path')
    .lt('expires_at', now)

  if (expiredActivity && expiredActivity.length > 0) {
    const paths = expiredActivity.map((s: { storage_path: string }) => s.storage_path)
    await supabase.storage.from('stories').remove(paths)
    await supabase.from('activity_stories').delete().lt('expires_at', now)
  }

  // Clean expired global stories
  const { data: expiredGlobal } = await supabase
    .from('global_stories')
    .select('storage_path')
    .lt('expires_at', now)

  if (expiredGlobal && expiredGlobal.length > 0) {
    const paths = expiredGlobal.map((s: { storage_path: string }) => s.storage_path)
    await supabase.storage.from('global-stories').remove(paths)
    await supabase.from('global_stories').delete().lt('expires_at', now)
  }

  return new Response(
    JSON.stringify({ ok: true, cleaned: (expiredActivity?.length || 0) + (expiredGlobal?.length || 0) }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})
