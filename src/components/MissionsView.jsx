import React, { useMemo } from "react";
import { ArrowLeft, Check, Trophy } from "lucide-react";
import { MISSIONS, TIERS, MISSION_BY_ID } from "../data/missions";
import { useDoneMissions, toggleMission } from "../utils/journal";

const TOTAL_XP = MISSIONS.reduce((s, m) => s + m.xp, 0);

export default function MissionsView({ onBack }) {
  const done = useDoneMissions();

  const { xp, count } = useMemo(() => {
    let xp = 0, count = 0;
    for (const id of Object.keys(done)) {
      const m = MISSION_BY_ID[id];
      if (m) { xp += m.xp; count++; }
    }
    return { xp, count };
  }, [done]);

  const pct = Math.round((xp / TOTAL_XP) * 100);

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900 flex-1">Mes défis</span>
        <span className="inline-flex items-center gap-1 text-[12px] font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1">
          <Trophy size={13} strokeWidth={2.5} /> {xp} pts
        </span>
      </header>

      <div className="px-5 pb-24 pt-5 max-w-[720px] mx-auto">
        {/* Résumé */}
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <div className="flex items-end justify-between mb-2">
            <div>
              <p className="font-serif-guide text-[22px] font-semibold text-stone-900 leading-none">{count}<span className="text-stone-400 text-[16px]"> / {MISSIONS.length}</span></p>
              <p className="mt-1 text-[12px] text-stone-400">défis relevés</p>
            </div>
            <p className="text-[13px] font-semibold text-amber-600">{pct}%</p>
          </div>
          <div className="h-2.5 rounded-full bg-stone-100 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundImage: "linear-gradient(90deg,#10b981,#0ea5e9,#f59e0b,#7c3aed)" }} />
          </div>
          <p className="mt-3 text-[13px] text-stone-500 leading-relaxed">
            Coche un défi quand tu l'as fait dans la vraie vie. Pas de chrono, pas de note — juste la preuve que tu avances, un cran à la fois.
          </p>
        </div>

        {/* Paliers */}
        {TIERS.map((tier, ti) => {
          const missions = MISSIONS.filter((m) => m.tier === tier.key);
          const tierDone = missions.filter((m) => done[m.id]).length;
          return (
            <section key={tier.key} className="mt-7">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-[20px] leading-none">{tier.emoji}</span>
                <div className="flex-1">
                  <h2 className="font-serif-guide text-[19px] font-semibold text-stone-900 leading-none">{tier.label}</h2>
                  <p className="text-[11px] text-stone-400 mt-1">Palier {ti + 1} · {tierDone}/{missions.length}</p>
                </div>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${tier.tint}`}>{tierDone === missions.length ? "Complet ✓" : `${missions.length - tierDone} restants`}</span>
              </div>

              <div className="flex flex-col gap-2.5">
                {missions.map((m) => {
                  const isDone = !!done[m.id];
                  return (
                    <button
                      key={m.id}
                      onClick={() => toggleMission(m.id)}
                      className={`group w-full text-left rounded-2xl border p-4 flex items-start gap-3 active:scale-[0.99] transition-all ${
                        isDone ? "border-transparent bg-stone-900 text-white" : "border-stone-200 bg-white hover:border-stone-300"
                      }`}
                    >
                      <span className={`mt-0.5 flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 border-2 transition-colors ${
                        isDone ? "bg-emerald-500 border-emerald-500 text-white" : "border-stone-300 text-transparent group-hover:border-stone-400"
                      }`}>
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className={`text-[15px] font-semibold leading-snug ${isDone ? "text-white" : "text-stone-900"}`}>{m.titre}</p>
                          <span className={`ml-auto flex-shrink-0 text-[11px] font-bold ${isDone ? "text-amber-300" : "text-amber-500"}`}>+{m.xp}</span>
                        </div>
                        <p className={`mt-1 text-[13px] leading-relaxed ${isDone ? "text-white/70" : "text-stone-500"}`}>{m.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}

        <p className="mt-10 text-center font-serif-guide italic text-[15px] text-stone-400 leading-relaxed max-w-[42ch] mx-auto">
          L'ordre est indicatif. Prends le prochain défi qui te fait un peu peur — c'est le bon.
        </p>
      </div>
    </div>
  );
}
