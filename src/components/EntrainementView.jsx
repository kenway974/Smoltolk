import React, { useState, useMemo } from "react";
import { ArrowLeft, Dumbbell, MapPin, MessageSquare, ChevronRight, Eye, Key } from "lucide-react";
import { DRILLS, NIVEAUX } from "../data/entrainement";

const TONE = {
  chaleureux: { label: "Chaleureux", emoji: "😊", chip: "bg-emerald-100 text-emerald-700 border-emerald-200", rail: "border-l-emerald-400", btn: "text-emerald-600" },
  neutre:     { label: "Neutre",     emoji: "😐", chip: "bg-amber-100 text-amber-700 border-amber-200",       rail: "border-l-amber-400",   btn: "text-amber-600" },
  froid:      { label: "Froid",      emoji: "🧊", chip: "bg-rose-100 text-rose-700 border-rose-200",          rail: "border-l-rose-400",    btn: "text-rose-600" },
};

function Reaction({ r }) {
  const [open, setOpen] = useState(false);
  const t = TONE[r.ton];
  return (
    <div className={`rounded-xl border border-stone-200 border-l-4 ${t.rail} bg-white overflow-hidden`}>
      <div className="p-3.5">
        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border mb-2 ${t.chip}`}>{t.emoji} {t.label}</span>
        <p className="text-[14px] text-stone-700 leading-relaxed">« {r.elle} »</p>
      </div>
      {open ? (
        <div className="px-3.5 pb-3.5 pt-1 border-t border-dashed border-stone-200">
          <p className="text-[13px] text-stone-600 leading-relaxed"><span className="font-semibold text-stone-800">Ta réaction : </span>{r.move}</p>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className={`w-full flex items-center justify-center gap-1.5 py-2.5 border-t border-dashed border-stone-200 text-[12px] font-semibold ${t.btn} hover:bg-stone-50 transition-colors active:scale-[0.99]`}>
          <Eye size={13} strokeWidth={2.5} /> Que faire ?
        </button>
      )}
    </div>
  );
}

export default function EntrainementView({ onBack }) {
  const [niveau, setNiveau] = useState("all");
  const [i, setI] = useState(0);

  const pool = useMemo(() => (niveau === "all" ? DRILLS : DRILLS.filter((d) => d.niveau === niveau)), [niveau]);
  const drill = pool[Math.min(i, pool.length - 1)];
  const idx = Math.min(i, pool.length - 1);

  const pick = (key) => { setNiveau(key); setI(0); };
  const next = () => setI((v) => (v + 1) % pool.length);

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900 flex-1">Cartes d'entraînement</span>
        <span className="text-[11px] font-medium text-stone-400">{idx + 1} / {pool.length}</span>
      </header>

      <div className="px-5 pb-24 pt-5 max-w-[720px] mx-auto">
        <p className="text-[14px] text-stone-500 leading-relaxed mb-4">
          « Et si elle répond ça ? » — entraîne-toi à réagir <em>avant</em> le réel. Lis la scène, imagine ta réaction, puis révèle le bon réflexe.
        </p>

        {/* Filtres niveau */}
        <div className="flex flex-wrap gap-2 mb-5">
          <button onClick={() => pick("all")} className={`px-3 py-1.5 rounded-full text-[13px] font-medium border transition-colors active:scale-95 ${niveau === "all" ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"}`}>Tout</button>
          {NIVEAUX.map((n) => (
            <button key={n.key} onClick={() => pick(n.key)} className={`px-3 py-1.5 rounded-full text-[13px] font-medium border transition-colors active:scale-95 ${niveau === n.key ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"}`}>{n.label}</button>
          ))}
        </div>

        {drill && (
          <div key={drill.id} className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
            {/* Contexte */}
            <div className="px-5 pt-5 pb-4 bg-gradient-to-b from-sky-50/70 to-transparent">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-sky-600 mb-2"><MapPin size={12} strokeWidth={2.5} /> La scène</span>
              <p className="text-[15px] text-stone-700 leading-relaxed">{drill.contexte}</p>
              <div className="mt-3.5 flex items-start gap-2 rounded-xl bg-stone-900 text-white px-4 py-3">
                <MessageSquare size={15} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-white/60" />
                <p className="text-[15px] leading-relaxed font-serif-guide">« {drill.toiDis} »</p>
              </div>
            </div>

            {/* Réactions */}
            <div className="px-5 py-4 space-y-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">Elle répond…</p>
              {drill.reactions.map((r, k) => <Reaction key={drill.id + k} r={r} />)}
            </div>

            {/* Clé */}
            <div className="px-5 pb-5">
              <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                <Key size={15} strokeWidth={2} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-[13px] text-stone-700 leading-relaxed font-medium">{drill.cle}</p>
              </div>
            </div>
          </div>
        )}

        {/* Suivant */}
        {pool.length > 1 && (
          <button onClick={next} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold hover:bg-stone-800 active:scale-[0.98] transition-colors">
            Carte suivante <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        )}

        <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-[12px] text-stone-400">
          <Dumbbell size={13} strokeWidth={2} /> S'entraîner au calme rend le réel moins impressionnant.
        </p>
      </div>
    </div>
  );
}
