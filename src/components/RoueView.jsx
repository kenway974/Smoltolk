import React, { useState } from "react";
import { ArrowLeft, Dices, MapPin, Sparkles, Check } from "lucide-react";
import { SITUATIONS_DATA } from "../data/situations";
import { INTENTIONS } from "../data/intentions";
import { MISSIONS } from "../data/missions";

const LIEUX = [...new Set(SITUATIONS_DATA.map((s) => s.environnement))].filter((e) => e !== "Partout");
// On tire surtout des missions faciles/moyennes pour rester faisable sur un coup de tête.
const ACTIONS = MISSIONS.filter((m) => m.tier === "echauffement" || m.tier === "contact");

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

export default function RoueView({ onBack, onLog }) {
  const [tirage, setTirage] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    setTimeout(() => {
      setTirage({ lieu: rand(LIEUX), intention: rand(INTENTIONS), action: rand(ACTIONS) });
      setSpinning(false);
    }, 450);
  };

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">La roue du hasard</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        <h1 className="font-serif-guide text-[26px] font-semibold text-stone-900 leading-tight tracking-tight">Un défi surprise ?</h1>
        <p className="mt-2 text-[14px] text-stone-500 leading-relaxed">Laisse le hasard décider — un lieu, une intention, une action. Souvent, le plus dur c'est de choisir. Là, tu n'as plus qu'à y aller.</p>

        <div className={`mt-6 rounded-3xl border-2 border-dashed p-6 transition-colors ${tirage ? "border-violet-300 bg-violet-50/50" : "border-stone-200 bg-white"}`}>
          {!tirage ? (
            <div className="flex flex-col items-center text-center py-8">
              <Dices size={44} strokeWidth={1.6} className={`text-stone-300 ${spinning ? "animate-spin" : ""}`} />
              <p className="mt-4 text-[14px] text-stone-400">Tourne la roue pour ton défi du moment.</p>
            </div>
          ) : (
            <div className={spinning ? "opacity-0" : "animate-fade-in"}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-500 mb-4">Ta mission</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex-shrink-0"><MapPin size={17} strokeWidth={2} /></span>
                  <div><p className="text-[11px] text-stone-400">Où</p><p className="text-[15px] font-semibold text-stone-900">{tirage.lieu}</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex-shrink-0 text-[18px]">{tirage.intention.emoji}</span>
                  <div><p className="text-[11px] text-stone-400">Intention</p><p className="text-[15px] font-semibold text-stone-900">{tirage.intention.label}</p></div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex-shrink-0"><Sparkles size={17} strokeWidth={2} /></span>
                  <div><p className="text-[11px] text-stone-400">Action</p><p className="text-[15px] font-semibold text-stone-900">{tirage.action.titre}</p></div>
                </div>
              </div>
              <p className="mt-4 text-[13px] text-stone-500 leading-relaxed italic">{tirage.action.desc}</p>
            </div>
          )}
        </div>

        <button onClick={spin} disabled={spinning} className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold hover:bg-stone-800 active:scale-[0.98] transition-colors disabled:opacity-60">
          <Dices size={18} strokeWidth={2.2} /> {tirage ? "Retourner la roue" : "Tourner la roue"}
        </button>

        {tirage && onLog && (
          <button onClick={onLog} className="mt-3 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-[14px] font-semibold active:scale-[0.98] transition-transform">
            <Check size={16} strokeWidth={2.5} /> Je l'ai fait — consigner
          </button>
        )}
      </div>
    </div>
  );
}
