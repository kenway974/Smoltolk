import React, { useState, useMemo } from "react";
import { ArrowLeft, Search, Copy, Check } from "lucide-react";
import { SITUATIONS_DATA } from "../data/situations";
import { THEMES } from "../data/questions";
import { SECOURS } from "../data/secours";
import { SCENARIOS } from "../data/scenarios";

// Index de tout le contenu textuel cherchable (construit une fois).
const INDEX = (() => {
  const out = [];
  for (const s of SITUATIONS_DATA) {
    const lieu = s.environnement === "Partout" ? "Universel" : s.environnement;
    for (const lvl of ["zoomIn", "contexte", "zoomOut"]) {
      for (const v of s[lvl] || []) {
        if (v?.accroche) out.push({ texte: v.accroche, src: "Accroche", meta: lieu, color: "bg-blue-100 text-blue-700" });
      }
    }
  }
  for (const t of THEMES) for (const q of t.questions) out.push({ texte: q, src: "Question", meta: t.titre, color: "bg-sky-100 text-sky-700" });
  for (const s of SECOURS) for (const p of s.phrases) out.push({ texte: p, src: "Secours", meta: s.titre, color: "bg-rose-100 text-rose-700" });
  for (const sc of SCENARIOS) for (const p of sc.phrasesCles || []) out.push({ texte: p, src: "Scénario", meta: sc.titre, color: "bg-indigo-100 text-indigo-700" });
  return out;
})();

function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

function ResultRow({ r }) {
  const [copied, setCopied] = useState(false);
  const copy = () => navigator.clipboard?.writeText(r.texte).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }).catch(() => {});
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-3.5 flex items-start gap-3">
      <div className="min-w-0 flex-1">
        <p className="text-[14px] text-stone-800 leading-relaxed">« {r.texte} »</p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${r.color}`}>{r.src}</span>
          <span className="text-[11px] text-stone-400">{r.meta}</span>
        </div>
      </div>
      <button onClick={copy} className={`p-2 rounded-lg transition-colors active:scale-90 flex-shrink-0 ${copied ? "bg-stone-900 text-white" : "text-stone-300 hover:text-stone-600 hover:bg-stone-100"}`} title="Copier">
        {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
      </button>
    </div>
  );
}

export default function RechercheView({ onBack }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const query = norm(q.trim());
    if (query.length < 2) return [];
    const out = [];
    for (const item of INDEX) {
      if (norm(item.texte).includes(query)) { out.push(item); if (out.length >= 60) break; }
    }
    return out;
  }, [q]);

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Recherche</span>
      </header>

      <div className="px-5 pb-24 pt-5 max-w-[720px] mx-auto">
        <div className="relative mb-4">
          <Search size={16} strokeWidth={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Un mot, un thème, une situation…"
            className="w-full rounded-2xl border border-stone-200 bg-white pl-10 pr-4 py-3 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-400"
          />
        </div>

        {q.trim().length < 2 ? (
          <p className="text-center text-[13px] text-stone-400 py-10 max-w-[36ch] mx-auto leading-relaxed">Cherche dans toutes les accroches, questions, phrases de secours et scénarios — d'un coup.</p>
        ) : results.length === 0 ? (
          <p className="text-center text-[13px] text-stone-400 py-10">Rien trouvé pour « {q} ».</p>
        ) : (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400 mb-2.5">{results.length >= 60 ? "60+ résultats" : `${results.length} résultat${results.length > 1 ? "s" : ""}`}</p>
            <div className="flex flex-col gap-2.5">
              {results.map((r, i) => <ResultRow key={i} r={r} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
