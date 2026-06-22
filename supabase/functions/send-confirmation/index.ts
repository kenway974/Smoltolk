// Edge Function: send-confirmation
// Envoie un email de confirmation quand un utilisateur s'inscrit à un événement.
// POST { userId, activityId }

import { createClient } from "npm:@supabase/supabase-js";

Deno.serve(async (req) => {
  const { userId, activityId } = await req.json();
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  const [{ data: profile }, { data: activity }] = await Promise.all([
    supabase.from("profiles").select("username").eq("id", userId).single(),
    supabase.from("activities").select("title, date_start, location, bassin").eq("id", activityId).single(),
  ]);

  if (!profile || !activity) return new Response("Not found", { status: 404 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "SortiesRéunion <noreply@sortiesreunion.fr>",
      to: [userId],
      subject: `Inscription confirmée : ${activity.title}`,
      html: `<p>Bonjour ${profile.username ?? ""},</p><p>Votre inscription à <strong>${activity.title}</strong> le <strong>${activity.date_start}</strong>${activity.location ? ` à ${activity.location}` : ""} est confirmée.</p><p>À bientôt sur SortiesRéunion 🌴</p>`,
    }),
  });

  return new Response(JSON.stringify({ ok: res.ok }), { status: 200 });
});
