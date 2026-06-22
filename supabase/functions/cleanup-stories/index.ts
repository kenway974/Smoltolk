// Edge Function: cleanup-stories
// Supprime les stories expirées et leurs fichiers storage. Tourne chaque heure.

import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async () => {
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  const { data: expired } = await supabase
    .from("activity_stories")
    .select("id, media_url")
    .lt("expires_at", new Date().toISOString());

  if (expired?.length) {
    const paths = expired.map((s) => new URL(s.media_url).pathname.replace("/storage/v1/object/public/stories/", ""));
    await supabase.storage.from("stories").remove(paths);
    await supabase.from("activity_stories").delete().in("id", expired.map((s) => s.id));
  }

  const { data: expiredGlobal } = await supabase
    .from("global_stories")
    .select("id, media_url")
    .lt("expires_at", new Date().toISOString());

  if (expiredGlobal?.length) {
    const paths = expiredGlobal.map((s) => new URL(s.media_url).pathname.replace("/storage/v1/object/public/global-stories/", ""));
    await supabase.storage.from("global-stories").remove(paths);
    await supabase.from("global_stories").delete().in("id", expiredGlobal.map((s) => s.id));
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
});
