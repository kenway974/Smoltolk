import React, { useState, useMemo } from "react";
import { ArrowLeft, Check, X, RotateCcw } from "lucide-react";
import { DRILLS } from "../data/entrainement";

// On réutilise les réactions des cartes d'entraînement : deviner le ton
// (chaleureux / neutre / froid) entraîne la lecture des signaux, la compétence
// centrale du guide.
const TONS = [
  { key: "chaleureux", label: "Chaleureux", emoji: "😊", active: "bg-emerald-600 border-emerald-600 text-white" },
  { key: "neutre",     label: "Neutre",     emoji: "😐", active: "bg-amber-500 border-amber-500 text-white" },
  { key: "froid",      label: "Froid",      emoji: "🧊", active: "bg-rose-500 border-rose-500 text-white" },
];

function buildPool() {
  const pool = [];
  for (const d of DRILLS) {
    for (const r of d.reactions) pool.push({ elle: r.elle, ton: r.ton, move: r.move, contexte: d.contexte });
  }
  // Mélange (dans un handler / init, Math.random autorisé).
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 12);
}

export default function LisSignalView({ onBack }) {
  const [pool, setPool] = useState(buildPool);
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const item = pool[i];
  const done = i >= pool.length;

  const choose = (ton) => {
    if (answer) return;
    setAnswer(ton);
    if (ton === item.ton) setScore((s) => s + 1);
  };
  const next = () => { setAnswer(null); setI((v) => v + 1); };
  const restart = () => { setPool(buildPool()); setI(0); setAnswer(null); setScore(0); };

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900 flex-1">Lis le signal</span>
        {!done && <span className="text-[11px] font-medium text-stone-400">{i + 1} / {pool.length}</span>}
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        {done ? (
          <div className="flex flex-col items-center text-center py-16">
            <span className="text-5xl mb-3">{score >= pool.length * 0.7 ? "🎯" : "💪"}</span>
            <h1 className="font-serif-guide text-[26px] font-semibold text-stone-900">{score} / {pool.length}</h1>
            <p className="mt-2 text-[14px] text-stone-500 max-w-[34ch] leading-relaxed">
              {score >= pool.length * 0.7 ? "Belle lecture — tu repères vite le ton en face. C'est ça qui te dit quand monter et quand lâcher." : "Ça se muscle. Lire le ton, c'est la moitié du jeu : refais un tour, tu vas voir."}
            </p>
            <button onClick={restart} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold active:scale-[0.98] transition-transform">
              <RotateCcw size={16} strokeWidth={2.2} /> Recommencer
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400">Elle répond…</p>
              <span className="text-[12px] font-semibold text-emerald-600">{score} bon{score > 1 ? "s" : ""}</span>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              {item.contexte && <p className="text-[12px] text-stone-400 mb-2 leading-snug">{item.contexte}</p>}
              <p className="font-serif-guide text-[19px] text-stone-800 leading-relaxed">« {item.elle} »</p>
            </div>

            <p className="mt-5 mb-2.5 text-[13px] text-stone-500 text-center">C'est quel ton ?</p>
            <div className="grid grid-cols-3 gap-2.5">
              {TONS.map((t) => {
                const chosen = answer === t.key;
                const isCorrect = item.ton === t.key;
                let cls = "bg-white border-stone-200 text-stone-700";
                if (answer) {
                  if (isCorrect) cls = "bg-emerald-600 border-emerald-600 text-white";
                  else if (chosen) cls = "bg-rose-500 border-rose-500 text-white";
                  else cls = "bg-white border-stone-200 text-stone-300";
                }
                return (
                  <button key={t.key} onClick={() => choose(t.key)} disabled={!!answer} className={`rounded-2xl border-2 py-4 flex flex-col items-center gap-1 transition-colors active:scale-95 ${cls}`}>
                    <span className="text-[22px]">{t.emoji}</span>
                    <span className="text-[12px] font-semibold">{t.label}</span>
                  </button>
                );
              })}
            </div>

            {answer && (
              <div className="mt-5 animate-fade-in">
                <div className={`inline-flex items-center gap-1.5 text-[13px] font-semibold mb-2 ${answer === item.ton ? "text-emerald-600" : "text-rose-500"}`}>
                  {answer === item.ton ? <><Check size={15} strokeWidth={2.5} /> Bien vu</> : <><X size={15} strokeWidth={2.5} /> C'était « {TONS.find((t) => t.key === item.ton)?.label.toLowerCase()} »</>}
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <p className="text-[13px] text-stone-600 leading-relaxed"><span className="font-semibold text-stone-800">Le bon réflexe : </span>{item.move}</p>
                </div>
                <button onClick={next} className="mt-4 w-full px-5 py-3.5 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold hover:bg-stone-800 active:scale-[0.98] transition-colors">
                  {i + 1 >= pool.length ? "Voir mon score" : "Suivant"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
