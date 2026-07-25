import React, { useState } from "react";
import { ArrowLeft, MessageSquare, RotateCcw, ChevronRight, Check, Minus, X } from "lucide-react";
import { SIMULATIONS } from "../data/simulations";

const QUALITY = {
  green: { ring: "border-emerald-500 bg-emerald-50", dot: "text-emerald-600", icon: Check, label: "text-emerald-700" },
  amber: { ring: "border-amber-500 bg-amber-50",     dot: "text-amber-600",   icon: Minus, label: "text-amber-700" },
  red:   { ring: "border-rose-500 bg-rose-50",       dot: "text-rose-600",    icon: X,     label: "text-rose-700" },
};
const VERDICT = {
  "réussi":  { emoji: "🎯", tint: "text-emerald-600" },
  "correct": { emoji: "🙂", tint: "text-sky-600" },
  "raté":    { emoji: "🫡", tint: "text-rose-600" },
};

export default function SimulateurView({ onBack }) {
  const [sim, setSim] = useState(null);
  const [nodeId, setNodeId] = useState(null);
  const [picked, setPicked] = useState(null); // option chosen, awaiting "continuer"

  const start = (s) => { setSim(s); setNodeId(s.start); setPicked(null); };
  const quit = () => { setSim(null); setNodeId(null); setPicked(null); };
  const replay = () => { setNodeId(sim.start); setPicked(null); };

  // ---- Menu ----
  if (!sim) {
    return (
      <div className="min-h-svh">
        <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
          <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
            <ArrowLeft size={17} strokeWidth={2} />
          </button>
          <span className="text-sm font-semibold text-stone-900">Simulateur</span>
        </header>
        <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
          <h1 className="font-serif-guide text-[26px] font-semibold text-stone-900 leading-tight tracking-tight">Entraîne-toi pour de faux.</h1>
          <p className="mt-2 text-[14px] text-stone-500 leading-relaxed">Une conversation, tu choisis tes répliques, tu vois où ça mène. Zéro risque — et tu apprends à lire les embranchements.</p>
          <div className="mt-6 flex flex-col gap-3">
            {SIMULATIONS.map((s) => (
              <button key={s.id} onClick={() => start(s)} className="group w-full text-left rounded-2xl border border-stone-200 bg-white p-4 flex items-center gap-3 active:scale-[0.99] transition-colors hover:border-stone-300">
                <span className={`flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0 text-[22px] ${s.tint}`}>{s.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold text-stone-900 leading-tight">{s.titre}</p>
                  <p className="text-[12px] text-stone-500 leading-snug mt-0.5">{s.contexte}</p>
                </div>
                <ChevronRight size={17} strokeWidth={2} className="text-stone-300 group-hover:text-stone-600 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const node = sim.nodes[nodeId];
  const ending = node?.ending;

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={quit} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900 flex-1 truncate">{sim.titre}</span>
        <button onClick={replay} className="text-stone-400 hover:text-stone-700 transition-colors" title="Recommencer"><RotateCcw size={16} strokeWidth={2} /></button>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        {/* Réplique du PNJ / beat */}
        {node?.pnj && (
          <div className="flex items-start gap-2.5 mb-5">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-200 text-stone-500 flex-shrink-0"><MessageSquare size={16} strokeWidth={2} /></span>
            <div className="rounded-2xl rounded-tl-sm bg-white border border-stone-200 px-4 py-3">
              <p className="text-[15px] text-stone-800 leading-relaxed">{node.pnj}</p>
            </div>
          </div>
        )}

        {ending ? (
          <div className="mt-2 rounded-2xl border border-stone-200 bg-white p-5 text-center">
            <span className="text-5xl">{VERDICT[ending.verdict]?.emoji ?? "🙂"}</span>
            <p className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] ${VERDICT[ending.verdict]?.tint ?? "text-stone-500"}`}>{ending.verdict}</p>
            <h2 className="font-serif-guide text-[22px] font-semibold text-stone-900 mt-1 leading-snug">{ending.titre}</h2>
            <p className="mt-2 text-[14px] text-stone-600 leading-relaxed max-w-[44ch] mx-auto">{ending.texte}</p>
            <div className="mt-6 flex flex-col gap-2.5">
              <button onClick={replay} className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"><RotateCcw size={16} strokeWidth={2.2} /> Rejouer ce scénario</button>
              <button onClick={quit} className="w-full px-5 py-3 rounded-2xl border border-stone-200 bg-white text-stone-600 text-[14px] font-semibold active:scale-[0.98] transition-transform">Un autre scénario</button>
            </div>
          </div>
        ) : picked ? (
          // Feedback après un choix
          (() => {
            const q = QUALITY[picked.quality] || QUALITY.amber;
            const Icon = q.icon;
            return (
              <div className="animate-fade-in">
                <div className={`rounded-2xl border-l-4 ${q.ring} border border-stone-200 p-4`}>
                  <p className="text-[14px] text-stone-800 leading-relaxed mb-2">« {picked.texte} »</p>
                  <div className={`flex items-start gap-2 text-[13px] ${q.label}`}>
                    <Icon size={15} strokeWidth={2.5} className="mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{picked.feedback}</span>
                  </div>
                </div>
                <button onClick={() => { const to = picked.to; setPicked(null); setNodeId(to); }} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold hover:bg-stone-800 active:scale-[0.98] transition-colors">
                  Continuer <ChevronRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            );
          })()
        ) : (
          <div className="flex flex-col gap-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400 mb-1">Tu réponds…</p>
            {node?.options?.map((o, k) => (
              <button key={k} onClick={() => setPicked(o)} className="w-full text-left rounded-2xl border border-stone-200 bg-white p-4 text-[15px] text-stone-800 leading-relaxed active:scale-[0.99] transition-colors hover:border-stone-400">
                « {o.texte} »
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
