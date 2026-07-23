// Récupère l'actualité depuis des flux RSS de médias FR et écrit public/news.json.
// Aucune dépendance : fetch natif + mini-parseur RSS/Atom.
// N'affiche que titres + résumé court + lien vers la source (pas de reproduction d'articles).

import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/news.json");

const FEEDS = [
  { key: "une",     label: "À la une",       source: "franceinfo", url: "https://www.francetvinfo.fr/titres.rss" },
  { key: "sport",   label: "Sport",          source: "franceinfo", url: "https://www.francetvinfo.fr/sports.rss" },
  { key: "culture", label: "Culture & ciné", source: "franceinfo", url: "https://www.francetvinfo.fr/culture.rss" },
  { key: "tech",    label: "Tech & insolite",source: "Numerama",   url: "https://www.numerama.com/feed/" },
];

const MAX_PER_FEED = 8;
const SUMMARY_MAX = 180;

const decode = (s = "") =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&(?:apos|#39);/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const tagText = (block, name) => {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i"));
  return m ? decode(m[1]) : "";
};

const linkOf = (block) => {
  let m = block.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
  if (m && /^https?:/i.test(m[1].trim())) return m[1].trim();
  m = block.match(/<link[^>]*href="([^"]+)"[^>]*\/?>/i);
  if (m) return m[1];
  const g = block.match(/<guid[^>]*>([\s\S]*?)<\/guid>/i);
  if (g && /^https?:/i.test(g[1].trim())) return g[1].trim();
  return "";
};

const truncate = (s, n) => (s.length > n ? s.slice(0, n).replace(/\s+\S*$/, "") + "…" : s);

const toIso = (s) => {
  if (!s) return null;
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d.toISOString();
};

async function fetchFeed(feed) {
  const res = await fetch(feed.url, {
    headers: { "User-Agent": "Mozilla/5.0 (Smoltolk news bot)", Accept: "application/rss+xml, application/xml, text/xml, */*" },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const xml = await res.text();
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
  const items = [];
  for (const b of blocks) {
    const title = tagText(b, "title");
    const link = linkOf(b);
    if (!title || !link) continue;
    const desc = tagText(b, "description") || tagText(b, "summary") || tagText(b, "content");
    const pub = toIso(tagText(b, "pubDate") || tagText(b, "published") || tagText(b, "updated") || tagText(b, "dc:date"));
    items.push({ title, link, summary: desc ? truncate(desc, SUMMARY_MAX) : "", pubDate: pub });
    if (items.length >= MAX_PER_FEED) break;
  }
  return items;
}

async function main() {
  const categories = [];
  for (const feed of FEEDS) {
    try {
      const items = await fetchFeed(feed);
      if (items.length) {
        categories.push({ key: feed.key, label: feed.label, source: feed.source, items });
        console.log(`✓ ${feed.label} (${feed.source}) — ${items.length} items`);
      } else {
        console.warn(`⚠ ${feed.label} — 0 item`);
      }
    } catch (e) {
      console.warn(`⚠ ${feed.label} — échec : ${e.message}`);
    }
  }

  if (categories.length === 0) {
    console.warn("Aucun flux récupéré — on conserve le news.json existant s'il y en a un.");
    if (existsSync(OUT)) { console.log("news.json inchangé."); return; }
  }

  const payload = { generatedAt: new Date().toISOString(), categories };
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(payload, null, 2), "utf8");
  const total = categories.reduce((n, c) => n + c.items.length, 0);
  console.log(`✅ public/news.json écrit — ${categories.length} rubriques, ${total} actus.`);
}

main().catch((e) => { console.error("Erreur:", e); process.exit(1); });
