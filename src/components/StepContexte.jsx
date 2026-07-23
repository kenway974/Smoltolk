import React from "react";
import { Zap, ArrowRight } from "lucide-react";

const PROXIMITE_OPTIONS = [
  { value: "Inconnu",      emoji: "🤝", label: "Inconnu",      desc: "On ne s'est jamais vus ni parlé" },
  { value: "Croisé",       emoji: "👀", label: "Croisé",       desc: "On se voit souvent mais jamais parlé" },
  { value: "Connaissance", emoji: "👋", label: "Connaissance", desc: "On s'est dit bonjour, échangé quelques mots" },
  { value: "Habitué",      emoji: "💬", label: "Habitué",      desc: "On se parle de temps en temps" },
  { value: "Proche",       emoji: "😊", label: "Proche",       desc: "Ami ou contact régulier, on se connaît bien" },
];

const AUDACE_OPTIONS = [
  { value: 1, emoji: "😌", label: "Prudent",   desc: "Sûr, sans risque" },
  { value: 2, emoji: "😎", label: "Confiant",  desc: "Légèrement décalé" },
  { value: 3, emoji: "🔥", label: "Audacieux", desc: "Direct, mémorable" },
];

export default function StepContexte({ value = {}, onChange, onNext, onSkip }) {
  const { proximite = null, audace = null } = value || {};
  const update = (key, val) => onChange({ ...value, [key]: val });
  const hasAny = proximite || audace !== null;

  return (
    <div className="px-5 pb-8 flex flex-col gap-7">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-100 text-amber-600">
            <Zap size={16} strokeWidth={2} />
          </span>
          <h2 className="text-xl font-semibold text-stone-900 tracking-tight">Le contexte</h2>
        </div>
        <p className="text-sm text-stone-400 ml-[42px]">Ta relation avec cette personne et ton niveau d'aise</p>
      </div>

      {/* Proximité */}
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-[0.12em]">
          Tu connais comment cette personne ?
        </p>
        <div className="flex flex-col gap-2">
          {PROXIMITE_OPTIONS.map(({ value: v, emoji, label, desc }) => {
            const isActive = proximite === v;
            return (
              <button
                key={v}
                onClick={() => update("proximite", isActive ? null : v)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 active:scale-[0.99] ${
                  isActive
                    ? "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-200"
                    : "bg-white text-stone-800 border-stone-200 hover:border-amber-300"
                }`}
              >
                <span className="text-base leading-none flex-shrink-0">{emoji}</span>
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-sm">{label}</span>
                  <span className={`text-xs leading-snug ${isActive ? "text-white/80" : "text-stone-400"}`}>
                    {desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Audace */}
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-[0.12em]">
          Ton niveau d'audace aujourd'hui ?
        </p>
        <div className="flex gap-2">
          {AUDACE_OPTIONS.map(({ value: v, emoji, label, desc }) => {
            const isActive = audace === v;
            return (
              <button
                key={v}
                onClick={() => update("audace", isActive ? null : v)}
                className={`flex-1 flex flex-col items-center gap-1 py-3.5 px-2 rounded-xl border text-xs font-medium transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? "bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200"
                    : "bg-white text-stone-800 border-stone-200 hover:border-rose-300"
                }`}
              >
                <span className="text-lg leading-none">{emoji}</span>
                <span className="text-center font-semibold">{label}</span>
                <span className={`text-center font-normal leading-tight ${isActive ? "text-white/80" : "text-stone-400"}`}>
                  {desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2.5 mt-1">
        <button
          onClick={onSkip}
          className="flex-1 py-3.5 rounded-xl border border-stone-200 bg-white text-stone-400 font-medium text-sm transition-colors duration-200 active:scale-[0.98] hover:bg-stone-50"
        >
          Passer
        </button>
        <button
          onClick={onNext}
          disabled={!hasAny}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200 active:scale-[0.98] ${
            hasAny ? "bg-stone-900 text-white hover:bg-stone-800" : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          Suivant
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
