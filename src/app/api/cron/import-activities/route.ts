// Cron trigger: calls the connector Edge Functions once they exist.
// Add each connector's Edge Function URL here.
export const runtime = "edge";

export async function GET(request: Request) {
  const auth = request.headers.get("authorization");
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) return new Response("Unauthorized", { status: 401 });

  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const headers = { "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json" };

  // TODO: add connector Edge Function calls here as sources are implemented
  // Example:
  // const [sourceA] = await Promise.allSettled([
  //   fetch(`${base}/functions/v1/import-source-a`, { method: "POST", headers, body: "{}" }),
  // ]);

  return Response.json({ ok: true, message: "No connectors configured yet" });
}
