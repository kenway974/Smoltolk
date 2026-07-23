import React, { useEffect, useState } from "react";
import { ArrowLeft, Newspaper, ExternalLink, Copy, Check, RefreshCw } from "lucide-react";

const CAT_EMOJI = {
  une: "📰", monde: "🌍", politique: "🏛️", economie: "💶", sport: "⚽",
  culture: "🎬", sciences: "🔬", sante: "🩺", societe: "👥", tech: "💡",
};

function timeAgo(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return "à l'instant";
  if (diff < 3600) return `il y a ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `il y a ${Math.floor(diff / 3600)} h`;
  return `il y a ${Math.floor(diff / 86400)} j`;
}

// Modèles d'accroche pour lancer la conversation sur une actu (le titre sert d'amorce).
const OPENERS = [
  (t) => `T'as vu passer ça ? « ${t} ». Ça t'inspire quoi, toi ?`,
  (t) => `Je suis tombé sur cette actu : « ${t} ». T'en avais entendu parler ?`,
  (t) => `Petit sujet du jour : « ${t} ». T'es plutôt intéressé ou ça te passe au-dessus ?`,
  (t) => `Ça fait parler en ce moment : « ${t} ». T'en penses quoi ?`,
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={(e) => { e.stopPropagation(); navigator.clipboard?.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(() => {}); }}
      className={`p-2 rounded-lg transition-colors active:scale-90 flex-shrink-0 ${copied ? "bg-stone-900 text-white" : "text-stone-300 hover:text-stone-600 hover:bg-stone-100"}`}
      title="Copier l'accroche"
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  );
}

function NewsItem({ item, index }) {
  const opener = OPENERS[index % OPENERS.length](item.title);
  return (
    <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
      <div className="px-4 pt-4 pb-3">
        <p className="text-[15px] font-semibold text-stone-900 leading-snug">{item.title}</p>
        {item.summary && <p className="mt-1.5 text-sm text-stone-500 leading-relaxed">{item.summary}</p>}
        <div className="mt-2.5 flex items-center gap-2 text-[11px] text-stone-400">
          {item.pubDate && <span>{timeAgo(item.pubDate)}</span>}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-stone-500 hover:text-stone-800"
          >
            Lire la source <ExternalLink size={11} strokeWidth={2} />
          </a>
        </div>
      </div>
      <div className="flex items-start gap-2 px-4 py-3 border-t border-stone-100 bg-stone-50">
        <div className="flex-1">
          <span className="block text-[10px] font-medium uppercase tracking-[0.1em] text-stone-400 mb-1">Lancer la conversation</span>
          <p className="text-sm text-stone-700 leading-relaxed">« {opener} »</p>
        </div>
        <CopyButton text={opener} />
      </div>
    </div>
  );
}

export default function NewsView({ onBack }) {
  const [state, setState] = useState({ status: "loading", data: null });

  const load = () => {
    setState({ status: "loading", data: null });
    fetch(`/news.json?t=${Date.now()}`, { cache: "no-store" })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data) => setState({ status: "ok", data }))
      .catch(() => setState({ status: "error", data: null }));
  };

  useEffect(load, []);

  const cats = state.data?.categories || [];
  const isEmpty = state.status === "ok" && cats.every((c) => !c.items?.length);

  return (
    <div className="min-h-svh">
      {/* Barre supérieure */}
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors"
          aria-label="Retour"
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900 flex-1">News</span>
        {state.data?.generatedAt && (
          <span className="text-[11px] text-stone-400">maj {timeAgo(state.data.generatedAt)}</span>
        )}
      </header>

      <div className="px-5 pb-16 pt-5 max-w-[720px] mx-auto">
        <p className="text-[15px] text-stone-500 leading-relaxed mb-6 max-w-[52ch]">
          De l'actu fraîche pour lancer une conversation. Choisis un sujet qui te parle, copie l'accroche, à toi de jouer.
        </p>

        {state.status === "loading" && (
          <div className="flex items-center gap-2 text-stone-400 text-sm py-16 justify-center">
            <RefreshCw size={16} className="animate-spin" strokeWidth={2} /> Chargement de l'actu…
          </div>
        )}

        {(state.status === "error" || isEmpty) && (
          <div className="flex flex-col items-center text-center text-stone-400 py-16">
            <Newspaper size={40} strokeWidth={1.5} className="mb-4 opacity-30" />
            <p className="text-sm font-medium text-stone-500">L'actu n'est pas encore disponible</p>
            <p className="text-xs mt-2 max-w-[38ch]">
              La première récupération se fait automatiquement (toutes les 3 h). Elle apparaîtra ici juste après.
            </p>
            <button onClick={load} className="mt-5 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-600 text-sm font-medium hover:bg-stone-50 active:scale-95 transition-colors">
              <RefreshCw size={14} strokeWidth={2} /> Réessayer
            </button>
          </div>
        )}

        {state.status === "ok" && !isEmpty && (
          <div className="flex flex-col gap-8">
            {cats.filter((c) => c.items?.length).map((cat) => (
              <section key={cat.key}>
                <div className="flex items-baseline gap-2 mb-3">
                  <h2 className="text-lg font-semibold text-stone-900">
                    {CAT_EMOJI[cat.key] || "•"} {cat.label}
                  </h2>
                  {cat.source && <span className="text-[11px] text-stone-400">via {cat.source}</span>}
                </div>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item, i) => <NewsItem key={item.link || i} item={item} index={i} />)}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
