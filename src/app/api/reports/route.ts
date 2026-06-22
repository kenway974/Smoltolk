import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { rateLimit, getRateLimitKey } from "@/lib/utils/rateLimit";

const Schema = z.object({
  contentType: z.enum(["activity", "review", "story"]),
  contentId: z.string().uuid(),
  reason: z.enum(["spam", "inappropriate", "misleading", "other"]),
  detail: z.string().max(500).optional(),
});

export async function POST(request: NextRequest) {
  const limited = rateLimit(getRateLimitKey(request, "reports"), { limit: 5, windowSecs: 60 });
  if (limited) return limited;
  const body = await request.json().catch(() => null);
  const parsed = Schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid" }, { status: 400 });
  const cookieStore = await cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await supabase.from("reports").insert({ reporter_id: user.id, content_type: parsed.data.contentType, content_id: parsed.data.contentId, reason: parsed.data.reason, detail: parsed.data.detail });
  return NextResponse.json({ ok: true });
}
