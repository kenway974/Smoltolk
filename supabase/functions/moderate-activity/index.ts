// Edge Function: moderate-activity
// Modération IA (Claude Haiku) pour les nouvelles propositions d'activités.
// Appelée via un webhook DB (ou directement depuis l'API propose) avec POST { activityId }.

import { createClient } from "npm:@supabase/supabase-js@2";

Deno.serve(async (req) => {
  const { activityId } = await req.json();
  if (!activityId) return new Response("Missing activityId", { status: 400 });

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: activity, error } = await supabase.from("activities").select("title,description,category").eq("id", activityId).single();
  if (error || !activity) return new Response("Not found", { status: 404 });

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": Deno.env.get("ANTHROPIC_API_KEY")!,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 256,
      messages: [{
        role: "user",
        content: `Modère cet événement soumis sur SortiesRéunion (La Réunion, 974).
Titre: ${activity.title}
Description: ${activity.description}
Catégorie: ${activity.category}

Réponds UNIQUEMENT par un JSON: {"decision":"approved"|"rejected","reason":"courte explication"}
Approuve si c'est un vrai événement local (concert, rando, expo, soirée, marché...).
Rejette si c'est du spam, de la pub ou du contenu inapproprié.`
      }],
    }),
  });

  const ai = await response.json();
  let decision = "pending";
  let reason = "";
  try {
    const parsed = JSON.parse(ai.content[0].text);
    decision = parsed.decision;
    reason = parsed.reason;
  } catch {}

  if (decision === "approved" || decision === "rejected") {
    await supabase.from("activities").update({ status: decision, moderation_note: reason }).eq("id", activityId);
  }

  return new Response(JSON.stringify({ decision, reason }), { status: 200 });
});
