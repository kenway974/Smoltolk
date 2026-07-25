import React, { useState, useEffect } from "react";
import { ArrowLeft, Play, Pause } from "lucide-react";

// Respiration apaisante : inspire 4s · retiens 2s · expire 6s.
// L'expiration plus longue active le frein parasympathique — ça calme, vite.
const PHASES = [
  { key: "inspire", label: "Inspire", dur: 4000, scale: 1 },
  { key: "retiens", label: "Retiens", dur: 2000, scale: 1 },
  { key: "expire",  label: "Expire",  dur: 6000, scale: 0.5 },
];

export default function RespirationView({ onBack }) {
  const [running, setRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => {
      setPhase((p) => {
        const next = (p + 1) % PHASES.length;
        if (next === 0) setCycles((c) => c + 1);
        return next;
      });
    }, PHASES[phase].dur);
    return () => clearTimeout(t);
  }, [running, phase]);

  const toggle = () => {
    if (running) { setRunning(false); }
    else { setPhase(0); setRunning(true); }
  };

  const cur = PHASES[phase];

  return (
    <div className="min-h-svh flex flex-col">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Respiration</span>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-5 pb-24">
        <p className="text-[14px] text-stone-500 text-center max-w-[30ch] mb-10 leading-relaxed">
          Avant d'y aller : cale-toi sur le cercle. L'expiration longue calme, physiquement.
        </p>

        {/* Cercle animé */}
        <div className="relative flex items-center justify-center w-64 h-64">
          <span
            className="absolute rounded-full"
            style={{
              width: 220, height: 220,
              backgroundImage: "linear-gradient(135deg,#0ea5e9,#10b981)",
              opacity: running ? 0.18 : 0.1,
              transform: `scale(${running ? cur.scale : 0.7})`,
              transition: `transform ${running ? cur.dur : 400}ms ease-in-out, opacity 400ms`,
            }}
          />
          <span
            className="absolute rounded-full border-2 border-sky-400/40"
            style={{
              width: 220, height: 220,
              transform: `scale(${running ? cur.scale : 0.7})`,
              transition: `transform ${running ? cur.dur : 400}ms ease-in-out`,
            }}
          />
          <div className="relative text-center">
            <p className="font-serif-guide text-[26px] font-semibold text-stone-800">{running ? cur.label : "Prêt ?"}</p>
            {running && <p className="text-[12px] text-stone-400 mt-1">{cycles} cycle{cycles > 1 ? "s" : ""}</p>}
          </div>
        </div>

        <button onClick={toggle} className="mt-12 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 text-white text-[15px] font-semibold hover:bg-stone-800 active:scale-95 transition-transform">
          {running ? <><Pause size={18} strokeWidth={2.2} /> Pause</> : <><Play size={18} strokeWidth={2.2} /> Commencer</>}
        </button>
        <p className="mt-4 text-[12px] text-stone-400">Inspire 4s · retiens 2s · expire 6s</p>
      </div>
    </div>
  );
}
