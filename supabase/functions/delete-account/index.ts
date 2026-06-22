// Edge Function: delete-account
// RGPD — suppression du compte. Un utilisateur ne peut supprimer QUE son propre compte.
// Anonymise ses activités approuvées (communautaires), puis supprime l'utilisateur auth
// (cascade sur toutes les données personnelles).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

Deno.serve(async (req) => {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return new Response("Unauthorized", { status: 401 });

  const userSupabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } }
  );

  const { data: { user }, error: authError } = await userSupabase.auth.getUser();
  if (authError || !user) return new Response("Unauthorized", { status: 401 });

  const adminSupabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  // Anonymise les activités approuvées (elles restent dans la communauté)
  await adminSupabase
    .from("activities")
    .update({ creator_id: null })
    .eq("creator_id", user.id)
    .eq("status", "approved");

  // Supprime le compte auth (cascade DB)
  const { error } = await adminSupabase.auth.admin.deleteUser(user.id);
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500 });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
});
