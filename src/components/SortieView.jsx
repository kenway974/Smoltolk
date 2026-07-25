import React, { useState, useMemo } from "react";
import { ArrowLeft, Wind, Trophy, Copy, Check, RefreshCw, Sparkles, DoorOpen } from "lucide-react";
import { SITUATIONS_DATA } from "../data/situations";
import { useDoneMissions, computeDailyMission } from "../utils/journal";
import { TIER_BY_KEY } from "../data/missions";

// Accroches universelles (environnement "Partout") : marchent en toute situation.
const UNIVERSELLES = SITUATIONS_DATA.filter((s) => s.environnement === "Partout");
const FALLBACK = SITUATIONS_DATA;

function pick3(seed) {
  const pool = UNIVERSELLES.length >= 3 ? UNIVERSELLES : FALLBACK;
  const out = [];
  const used = new Set();
  let i = 0;
  while (out.length < 3 && used.size < pool.length) {
    const idx = (seed * 7 + i * 13) % pool.length;
    i++;
    if (used.has(idx)) continue;
    used.add(idx);
    const s = pool[idx];
    const arr = s.zoomIn && s.zoomIn.length ? s.zoomIn : null;
    if (!arr) continue;
    const v = arr[(seed + idx) % arr.length];
    if (v && v.accroche) out.push(v.accroche);
  }
  return out;
}

function AccrocheCard({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = () => navigator.clipboard?.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }).catch(() => {});
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 flex items-start gap-3">
      <p className="flex-1 font-serif-guide text-[16px] text-stone-800 leading-relaxed">« {text} »</p>
      <button onClick={copy} className={`p-2 rounded-lg transition-colors active:scale-90 flex-shrink-0 ${copied ? "bg-stone-900 text-white" : "text-stone-300 hover:text-stone-600 hover:bg-stone-100"}`} title="Copier">
        {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
      </button>
    </div>
  );
}

export default function SortieView({ onBack, onLog }) {
  const doneMissions = useDoneMissions();
  const daily = useMemo(() => computeDailyMission(doneMissions), [doneMissions]);
  const [seed, setSeed] = useState(1);
  const accroches = useMemo(() => pick3(seed), [seed]);
  const tier = daily ? TIER_BY_KEY[daily.tier] : null;

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Mode sortie</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        <h1 className="font-serif-guide text-[26px] font-semibold text-stone-900 leading-tight tracking-tight">
          Tu sors ? On se cale en 30 secondes.
        </h1>
        <p className="mt-2 text-[14px] text-stone-500 leading-relaxed">
          L'essentiel, prêt à l'emploi, hors-ligne. Rien à préparer d'intelligent — juste y aller.
        </p>

        {/* Ancrage */}
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50/60 p-4 flex items-start gap-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex-shrink-0"><Wind size={18} strokeWidth={2.2} /></span>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-stone-900">Respire, épaules basses</p>
            <p className="text-[13px] text-stone-600 leading-relaxed mt-0.5">Le trac, c'est ton corps prêt, pas un danger. Une respiration lente, et tu comptes trois secondes avant d'y aller — avant que la tête invente une excuse.</p>
          </div>
        </div>

        {/* Défi du jour */}
        {daily && (
          <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4 flex items-start gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500 text-white flex-shrink-0"><Trophy size={18} strokeWidth={2.2} /></span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-600">Ton défi</span>
                {tier && <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${tier.tint}`}>{tier.emoji} {tier.label}</span>}
              </div>
              <p className="text-[15px] font-semibold text-stone-900 leading-snug mt-0.5">{daily.titre}</p>
              <p className="text-[12px] text-stone-500 leading-snug mt-0.5">{daily.desc}</p>
            </div>
          </div>
        )}

        {/* 3 accroches prêtes */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-blue-600"><Sparkles size={13} strokeWidth={2.5} /> Trois portes d'entrée</span>
            <button onClick={() => setSeed((s) => s + 1)} className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-400 hover:text-stone-700 transition-colors active:scale-95">
              <RefreshCw size={12} strokeWidth={2} /> autres
            </button>
          </div>
          <div className="flex flex-col gap-2.5">
            {accroches.map((a, i) => <AccrocheCard key={seed + "-" + i} text={a} />)}
          </div>
        </div>

        {/* Rappel de sortie */}
        <div className="mt-6 rounded-2xl bg-stone-900 text-stone-100 px-5 py-4 flex items-start gap-3">
          <DoorOpen size={18} strokeWidth={2} className="text-amber-300 flex-shrink-0 mt-0.5" />
          <p className="text-[14px] leading-relaxed">
            Laisse toujours une porte de sortie ouverte à l'autre — c'est ça qui met à l'aise, et paradoxalement ce qui donne envie de rester.
          </p>
        </div>

        {onLog && (
          <button onClick={onLog} className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 text-white text-[15px] font-semibold hover:bg-emerald-700 active:scale-[0.98] transition-colors">
            <Check size={18} strokeWidth={2.5} /> Je l'ai fait — consigner
          </button>
        )}
      </div>
    </div>
  );
}
