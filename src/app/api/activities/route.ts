import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { futureOrClause } from "@/lib/utils/reunionTime";
import { rateLimit, getRateLimitKey } from "@/lib/utils/rateLimit";

const FiltersSchema = z.object({
  category: z.string().optional(),
  bassin: z.string().optional(),
  price: z.enum(["free", "paid", "all"]).optional(),
  date: z.enum(["today", "this_week", "this_weekend", "this_month", "all"]).optional(),
  is_outdoor: z.enum(["true", "false"]).optional(),
  q: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(24),
});

export async function GET(request: NextRequest) {
  const limited = rateLimit(getRateLimitKey(request, "activities"), { limit: 120, windowSecs: 60 });
  if (limited) return limited;

  const { searchParams } = new URL(request.url);
  const params = FiltersSchema.safeParse(Object.fromEntries(searchParams));
  if (!params.success) return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });

  const cookieStore = await cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} },
  });

  const { category, bassin, price, date, is_outdoor, q, page, limit } = params.data;
  const offset = (page - 1) * limit;

  let query = supabase
    .from("activities")
    .select("*", { count: "exact" })
    .eq("status", "approved")
    .or(futureOrClause())
    .order("date_start", { ascending: true })
    .range(offset, offset + limit - 1);

  if (category && category !== "all") query = query.eq("category", category);
  if (bassin && bassin !== "all") query = query.eq("bassin", bassin);
  if (price === "free") query = query.eq("price_type", "free");
  if (price === "paid") query = query.neq("price_type", "free");
  if (is_outdoor === "true") query = query.eq("is_outdoor", true);
  if (is_outdoor === "false") query = query.eq("is_outdoor", false);
  if (q) query = query.ilike("title", `%${q}%`);

  const { data, error, count } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data, count, page, limit });
}
