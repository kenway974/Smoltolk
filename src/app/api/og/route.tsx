import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const CATEGORY_EMOJI: Record<string, string> = {
  soirees: "🎉", concerts: "🎵", expositions: "🎨", restaurants: "🍽️",
  bars: "🍹", sport: "⚽", culture: "🏛️", famille: "👨‍👩‍👧",
  "open-air-plage": "🏖️", "marches-forains": "🛒", "rando-sport": "🥾",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "SortiesRéunion";
  const category = searchParams.get("category") ?? "";
  const emoji = CATEGORY_EMOJI[category] ?? "🌴";

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 100%)", color: "white", padding: 60 }}>
      <div style={{ fontSize: 80, marginBottom: 24 }}>{emoji}</div>
      <div style={{ fontSize: 48, fontWeight: "bold", textAlign: "center", lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: 24, marginTop: 20, opacity: 0.7 }}>SortiesRéunion · 974</div>
    </div>,
    { width: 1200, height: 630 }
  );
}
