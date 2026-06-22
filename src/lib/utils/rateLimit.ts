import { NextResponse } from "next/server";

interface RateLimitStore {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitStore>();

export function rateLimit(
  key: string,
  { limit = 60, windowSecs = 60 }: { limit?: number; windowSecs?: number } = {}
): NextResponse | null {
  const now = Date.now();
  const entry = store.get(key);
  if (!entry || entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowSecs * 1000 });
    return null;
  }
  entry.count++;
  if (entry.count > limit) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  return null;
}

export function getRateLimitKey(request: Request, prefix: string): string {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  return `${prefix}:${ip}`;
}
