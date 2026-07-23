// Récupère l'actualité depuis PLUSIEURS médias FR (agrégés par rubrique) et écrit
// public/news.json. Aucune dépendance : fetch natif + mini-parseur RSS/Atom.
// Chaque actu porte sa source. N'affiche que titres + résumé court + lien (pas d'articles).

import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public/news.json");

// Chaque rubrique agrège plusieurs sources. franceinfo sert de filet (fiable),
// les autres apportent la diversité (Le Monde, 20 Minutes, France 24, BFMTV, Les Échos,
// Numerama, Futura, 01net, RMC…). Une source qui échoue est simplement ignorée.
const RUBRIQUES = [
  { key: "une", label: "À la une", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/titres.rss" },
    { source: "Le Monde",    url: "https://www.lemonde.fr/rss/une.xml" },
    { source: "20 Minutes",  url: "https://www.20minutes.fr/feeds/rss-une.xml" },
    { source: "France 24",   url: "https://www.france24.com/fr/rss" },
    { source: "BFMTV",       url: "https://www.bfmtv.com/rss/news-24-7/" },
  ]},
  { key: "monde", label: "Monde", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/monde.rss" },
    { source: "Le Monde",    url: "https://www.lemonde.fr/international/rss_full.xml" },
    { source: "France 24",   url: "https://www.france24.com/fr/rss" },
    { source: "BFMTV",       url: "https://www.bfmtv.com/rss/international/" },
  ]},
  { key: "politique", label: "Politique", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/politique.rss" },
    { source: "Le Monde",    url: "https://www.lemonde.fr/politique/rss_full.xml" },
    { source: "BFMTV",       url: "https://www.bfmtv.com/rss/politique/" },
  ]},
  { key: "economie", label: "Éco & argent", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/economie.rss" },
    { source: "Le Monde",    url: "https://www.lemonde.fr/economie/rss_full.xml" },
    { source: "Les Échos",   url: "https://services.lesechos.fr/rss/les-echos-economie.xml" },
    { source: "BFMTV",       url: "https://www.bfmtv.com/rss/economie/" },
  ]},
  { key: "sport", label: "Sport", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/sports.rss" },
    { source: "20 Minutes",  url: "https://www.20minutes.fr/feeds/rss-sport.xml" },
    { source: "BFMTV",       url: "https://www.bfmtv.com/rss/sport/" },
    { source: "RMC Sport",   url: "https://rmcsport.bfmtv.com/rss/" },
  ]},
  { key: "culture", label: "Culture & ciné", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/culture.rss" },
    { source: "Le Monde",    url: "https://www.lemonde.fr/culture/rss_full.xml" },
    { source: "20 Minutes",  url: "https://www.20minutes.fr/feeds/rss-culture.xml" },
  ]},
  { key: "sciences", label: "Sciences", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/sciences.rss" },
    { source: "Numerama",    url: "https://www.numerama.com/sciences/feed/" },
    { source: "Futura",      url: "https://www.futura-sciences.com/rss/actualites.xml" },
  ]},
  { key: "sante", label: "Santé", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/sante.rss" },
    { source: "Le Monde",    url: "https://www.lemonde.fr/sante/rss_full.xml" },
    { source: "20 Minutes",  url: "https://www.20minutes.fr/feeds/rss-sante.xml" },
  ]},
  { key: "societe", label: "Société", feeds: [
    { source: "franceinfo",  url: "https://www.francetvinfo.fr/societe.rss" },
    { source: "20 Minutes",  url: "https://www.20minutes.fr/feeds/rss-france.xml" },
    { source: "BFMTV",       url: "https://www.bfmtv.com/rss/societe/" },
  ]},
  { key: "tech", label: "Tech & insolite", feeds: [
    { source: "Numerama",    url: "https://www.numerama.com/feed/" },
    { source: "01net",       url: "https://www.01net.com/feed/" },
    { source: "BFMTV",       url: "https://www.bfmtv.com/rss/tech/" },
    { source: "Le Monde",    url: "https://www.lemonde.fr/pixels/rss_full.xml" },
  ]},
];

const MAX_PER_RUBRIQUE = 7;
const TAKE_PER_FEED = 10;
const SUMMARY_MAX = 180;

const decode = (s = "") =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&(?:apos|#39);/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/\s+/g, " ").trim();

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
const toIso = (s) => { if (!s) return null; const d = new Date(s); return isNaN(d.getTime()) ? null : d.toISOString(); };

async function fetchFeed({ source, url }) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Smoltolk news bot)", Accept: "application/rss+xml, application/xml, text/xml, */*" },
      signal: AbortSignal.timeout(10000),
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
      const pubDate = toIso(tagText(b, "pubDate") || tagText(b, "published") || tagText(b, "updated") || tagText(b, "dc:date"));
      items.push({ title, link, summary: desc ? truncate(desc, SUMMARY_MAX) : "", pubDate, source });
      if (items.length >= TAKE_PER_FEED) break;
    }
    return { source, ok: items.length > 0, items };
  } catch (e) {
    return { source, ok: false, items: [], error: e.message };
  }
}

const normTitle = (t) => t.toLowerCase().replace(/[^a-z0-9àâäéèêëïîôöùûüç ]/gi, "").replace(/\s+/g, " ").trim();

async function main() {
  const categories = [];
  const usedSources = new Set();

  for (const rub of RUBRIQUES) {
    const results = await Promise.all(rub.feeds.map(fetchFeed));
    const okSources = results.filter(r => r.ok).map(r => r.source);
    const failSources = results.filter(r => !r.ok).map(r => `${r.source}(${r.error})`);

    // Fusion + dédup par titre + tri par date décroissante
    const seen = new Set();
    const merged = results
      .flatMap(r => r.items)
      .filter(it => { const k = normTitle(it.title); if (seen.has(k)) return false; seen.add(k); return true; })
      .sort((a, b) => (b.pubDate ? Date.parse(b.pubDate) : 0) - (a.pubDate ? Date.parse(a.pubDate) : 0))
      .slice(0, MAX_PER_RUBRIQUE);

    if (merged.length) {
      merged.forEach(it => usedSources.add(it.source));
      categories.push({ key: rub.key, label: rub.label, items: merged });
      console.log(`✓ ${rub.label} — ${merged.length} actus | sources: ${okSources.join(", ")}${failSources.length ? " | échecs: " + failSources.join(", ") : ""}`);
    } else {
      console.warn(`⚠ ${rub.label} — vide | échecs: ${failSources.join(", ")}`);
    }
  }

  if (categories.length === 0) {
    console.warn("Aucun flux récupéré — on conserve le news.json existant.");
    if (existsSync(OUT)) return;
  }

  const payload = { generatedAt: new Date().toISOString(), categories };
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(payload, null, 2), "utf8");
  const total = categories.reduce((n, c) => n + c.items.length, 0);
  console.log(`✅ ${categories.length} rubriques, ${total} actus, ${usedSources.size} sources : ${[...usedSources].join(", ")}`);
}

main().catch((e) => { console.error("Erreur:", e); process.exit(1); });
