import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async () => {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  // Find activities happening tomorrow
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0]

  const { data: activities } = await supabase
    .from('activities')
    .select('id, title')
    .eq('status', 'approved')
    .gte('start_date', `${tomorrowStr}T00:00:00`)
    .lt('start_date', `${tomorrowStr}T23:59:59`)

  if (!activities || activities.length === 0) {
    return new Response(JSON.stringify({ ok: true, sent: 0 }))
  }

  let sent = 0
  for (const activity of activities) {
    // Get all users who favorited this activity
    const { data: favorites } = await supabase
      .from('favorites')
      .select('user_id')
      .eq('activity_id', activity.id)

    if (!favorites) continue

    for (const { user_id } of favorites) {
      // Get push subscription
      const { data: sub } = await supabase
        .from('push_subscriptions')
        .select('endpoint, keys')
        .eq('user_id', user_id)
        .single()

      if (!sub) continue

      // Send push notification (simplified - in production use web-push library)
      try {
        await fetch(sub.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'Rappel Sorties Réunion',
            body: `Demain : ${activity.title}`,
          }),
        })
        sent++
      } catch {
        // continue
      }
    }
  }

  return new Response(JSON.stringify({ ok: true, sent }), {
    headers: { 'Content-Type': 'application/json' },
  })
})
