import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { activityId } = await req.json()

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  const { data: activity } = await supabase
    .from('activities')
    .select('title, description')
    .eq('id', activityId)
    .single()

  if (!activity) {
    return new Response(JSON.stringify({ error: 'Activity not found' }), { status: 404 })
  }

  const anthropicKey = Deno.env.get('ANTHROPIC_API_KEY')!
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': anthropicKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: `Analyze this activity listing for La Réunion island. Is it appropriate, non-spam, and relevant to activities/events on La Réunion?

Title: ${activity.title}
Description: ${activity.description}

Respond with JSON only: {"approved": true/false, "reason": "brief reason"}`,
        },
      ],
    }),
  })

  const aiResult = await response.json()
  const text = aiResult.content?.[0]?.text || '{}'

  let decision = { approved: false, reason: 'Moderation error' }
  try {
    decision = JSON.parse(text)
  } catch {
    // keep default
  }

  await supabase
    .from('activities')
    .update({
      status: decision.approved ? 'approved' : 'rejected',
      moderation_note: decision.reason,
    })
    .eq('id', activityId)

  return new Response(JSON.stringify(decision), {
    headers: { 'Content-Type': 'application/json' },
  })
})
