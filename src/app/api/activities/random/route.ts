import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { rateLimit, getRateLimitKey } from "@/lib/utils/rateLimit";
import { futureOrClause } from "@/lib/utils/reunionTime";

export async function GET(request: Request) {
  const limited = rateLimit(getRateLimitKey(request, "random"), { limit: 20, windowSecs: 60 });
  if (limited) return limited;
  const supabase = await createClient();
  const { data } = await supabase.from("activities").select("id").eq("status", "approved").or(futureOrClause());
  if (!data || data.length === 0) return NextResponse.json({ error: "No activities" }, { status: 404 });
  const { id } = data[Math.floor(Math.random() * data.length)];
  return NextResponse.json({ id });
}
