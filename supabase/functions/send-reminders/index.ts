// Edge Function: send-reminders
// Envoie un Web Push "J-1" aux utilisateurs pour les activités qu'ils ont ajoutées
// en favoris et qui ont lieu demain. Tourne via pg_cron quotidiennement.

import { createClient } from "npm:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

Deno.serve(async () => {
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  webpush.setVapidDetails(
    Deno.env.get("VAPID_SUBJECT")!,
    Deno.env.get("VAPID_PUBLIC_KEY")!,
    Deno.env.get("VAPID_PRIVATE_KEY")!
  );

  // Réunion = UTC+4 ; "demain" en heure locale
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 4 * 3600 * 1000 + 86400000);
  const tomorrowDate = tomorrow.toISOString().slice(0, 10);

  const { data: favorites } = await supabase
    .from("favorites")
    .select("user_id, activity:activities(id,title,date_start)")
    .eq("activities.status", "approved")
    .eq("activities.date_start", tomorrowDate);

  if (!favorites?.length) return new Response(JSON.stringify({ sent: 0 }), { status: 200 });

  let sent = 0;
  for (const fav of favorites) {
    const { data: sub } = await supabase.from("push_subscriptions").select("subscription").eq("user_id", fav.user_id).single();
    if (!sub) continue;
    try {
      await webpush.sendNotification(sub.subscription, JSON.stringify({
        title: "Rappel J-1 🌴",
        body: `N'oubliez pas : ${(fav.activity as any).title} demain !`,
      }));
      sent++;
    } catch {}
  }

  return new Response(JSON.stringify({ sent }), { status: 200 });
});
