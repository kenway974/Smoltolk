import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  const { userId, activityId } = await req.json()

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  const [{ data: profile }, { data: activity }] = await Promise.all([
    supabase.from('profiles').select('email, display_name').eq('id', userId).single(),
    supabase.from('activities').select('title, start_date, location').eq('id', activityId).single(),
  ])

  if (!profile || !activity) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
  }

  const resendKey = Deno.env.get('RESEND_API_KEY')!
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Sorties Réunion <no-reply@sorties-reunion.re>',
      to: [profile.email],
      subject: `Confirmation : ${activity.title}`,
      html: `
        <h2>Inscription confirmée !</h2>
        <p>Bonjour ${profile.display_name || ''},</p>
        <p>Votre inscription à <strong>${activity.title}</strong> est bien enregistrée.</p>
        <p>Date : ${new Date(activity.start_date).toLocaleDateString('fr-RE')}</p>
        ${activity.location ? `<p>Lieu : ${activity.location}</p>` : ''}
      `,
    }),
  })

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
})
