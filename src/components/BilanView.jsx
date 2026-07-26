import React, { useMemo } from "react";
import { ArrowLeft, CalendarDays, Star, Flame, MapPin, TrendingUp } from "lucide-react";
import { useJournal, computeStats, RESULTAT_BY_KEY } from "../utils/journal";

const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

export default function BilanView({ onBack }) {
  const entries = useJournal();
  const stats = useMemo(() => computeStats(entries), [entries]);

  const data = useMemo(() => {
    const now = new Date();
    const thisMonth = now.getMonth(), thisYear = now.getFullYear();
    let moisCount = 0, anneeCount = 0;
    const byResultat = {};
    const byLieu = {};
    // 6 derniers mois
    const months = [];
    for (let k = 5; k >= 0; k--) {
      const d = new Date(thisYear, thisMonth - k, 1);
      months.push({ y: d.getFullYear(), m: d.getMonth(), label: MOIS[d.getMonth()], count: 0 });
    }
    for (const e of entries) {
      const d = new Date(e.at);
      if (d.getMonth() === thisMonth && d.getFullYear() === thisYear) moisCount++;
      if (d.getFullYear() === thisYear) anneeCount++;
      if (e.resultat) byResultat[e.resultat] = (byResultat[e.resultat] || 0) + 1;
      const l = (e.lieu || "").trim();
      if (l) byLieu[l] = (byLieu[l] || 0) + 1;
      const mm = months.find((x) => x.y === d.getFullYear() && x.m === d.getMonth());
      if (mm) mm.count++;
    }
    const maxMonth = Math.max(1, ...months.map((m) => m.count));
    const topLieux = Object.entries(byLieu).sort((a, b) => b[1] - a[1]).slice(0, 3);
    return { moisCount, anneeCount, months, maxMonth, byResultat, topLieux, year: thisYear };
  }, [entries]);

  const empty = entries.length === 0;

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Ton bilan</span>
      </header>

      <div className="px-5 pb-24 pt-5 max-w-[720px] mx-auto">
        {empty ? (
          <p className="text-center text-[14px] text-stone-400 py-20 max-w-[34ch] mx-auto leading-relaxed">Ton bilan se remplira au fil de tes tentatives consignées dans le cahier de bord.</p>
        ) : (
          <>
            {/* Chiffres clés */}
            <div className="rounded-2xl p-5 text-white mb-4" style={{ backgroundImage: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70">Cette année {data.year}</p>
              <p className="font-serif-guide text-[40px] font-semibold leading-none mt-1">{data.anneeCount}</p>
              <p className="text-[13px] text-white/80 mt-1">tentative{data.anneeCount > 1 ? "s" : ""} — dont <b>{data.moisCount}</b> ce mois-ci</p>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-3.5 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-orange-100 text-orange-600 mb-1.5"><Flame size={16} strokeWidth={2.2} /></span>
                <p className="text-[20px] font-serif-guide font-semibold text-stone-900 leading-none">{stats.bestStreak}</p>
                <p className="text-[11px] text-stone-400 mt-1">record de jours</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-3.5 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-600 mb-1.5"><Star size={16} strokeWidth={2.2} /></span>
                <p className="text-[20px] font-serif-guide font-semibold text-stone-900 leading-none">{stats.avgRessenti ? stats.avgRessenti.toFixed(1) : "—"}</p>
                <p className="text-[11px] text-stone-400 mt-1">ressenti moyen</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-3.5 text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 mb-1.5"><TrendingUp size={16} strokeWidth={2.2} /></span>
                <p className="text-[20px] font-serif-guide font-semibold text-stone-900 leading-none">{stats.total}</p>
                <p className="text-[11px] text-stone-400 mt-1">en tout</p>
              </div>
            </div>

            {/* Par mois */}
            <div className="rounded-2xl border border-stone-200 bg-white p-4 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-indigo-600 mb-4"><CalendarDays size={13} strokeWidth={2.5} /> Les 6 derniers mois</span>
              <div className="flex items-end justify-between gap-2 h-28">
                {data.months.map((m, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1.5 h-full">
                    <span className="text-[11px] font-semibold text-stone-600">{m.count || ""}</span>
                    <div className="w-full rounded-t-md bg-indigo-500 transition-all" style={{ height: `${(m.count / data.maxMonth) * 100}%`, minHeight: m.count ? 4 : 0 }} />
                    <span className="text-[10px] text-stone-400">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Répartition résultats */}
            {Object.keys(data.byResultat).length > 0 && (
              <div className="rounded-2xl border border-stone-200 bg-white p-4 mb-4">
                <span className="text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-3 block">Comment ça s'est passé</span>
                <div className="flex flex-col gap-2">
                  {Object.entries(data.byResultat).sort((a, b) => b[1] - a[1]).map(([k, n]) => {
                    const r = RESULTAT_BY_KEY[k];
                    const pct = Math.round((n / stats.total) * 100);
                    return (
                      <div key={k}>
                        <div className="flex items-center justify-between text-[12px] mb-1">
                          <span className="text-stone-700">{r?.emoji} {r?.label}</span>
                          <span className="text-stone-400">{n} · {pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-stone-100 overflow-hidden"><div className="h-full rounded-full bg-stone-400" style={{ width: `${pct}%` }} /></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Top lieux */}
            {data.topLieux.length > 0 && (
              <div className="rounded-2xl border border-stone-200 bg-white p-4">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-sky-600 mb-3"><MapPin size={13} strokeWidth={2.5} /> Tes terrains de jeu</span>
                <div className="flex flex-wrap gap-2">
                  {data.topLieux.map(([lieu, n]) => (
                    <span key={lieu} className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-200 px-3 py-1.5 text-[13px] font-medium text-sky-700">{lieu} <span className="text-sky-400">· {n}</span></span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
