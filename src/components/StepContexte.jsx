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
  { value: 1, emoji: "😌", label: "Prudent",    desc: "Sûr, sans prise de risque" },
  { value: 2, emoji: "😎", label: "Confiant",   desc: "Original, légèrement décalé" },
  { value: 3, emoji: "🔥", label: "Audacieux",  desc: "Direct, surprenant, mémorable" },
];

export default function StepContexte({ value = {}, onChange, onNext, onSkip }) {
  const { proximite = null, audace = null } = value || {};

  const update = (key, val) => onChange({ ...value, [key]: val });

  const hasAny = proximite || audace !== null;

  return (
    <div className="px-4 pb-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-amber-100 text-amber-600">
            <Zap size={18} strokeWidth={2.5} />
          </span>
          <h2 className="text-2xl font-black text-stone-900 tracking-tight">Le contexte</h2>
        </div>
        <p className="text-sm text-stone-500 ml-11">
          Ta relation avec cette personne et ton niveau d'aise
        </p>
      </div>

      {/* Proximité */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
          Tu connais comment cette personne ?
        </p>
        <div className="flex flex-col gap-2">
          {PROXIMITE_OPTIONS.map(({ value: v, emoji, label, desc }) => {
            const isActive = proximite === v;
            return (
              <button
                key={v}
                onClick={() => update("proximite", isActive ? null : v)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 text-left transition-all duration-200 active:scale-[0.98] ${
                  isActive
                    ? "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-200"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
                }`}
              >
                <span className="text-lg leading-none flex-shrink-0">{emoji}</span>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-sm">{label}</span>
                  <span className={`text-xs leading-snug ${isActive ? "text-amber-100" : "text-stone-400"}`}>
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
        <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">
          Ton niveau d'audace aujourd'hui ?
        </p>
        <div className="flex gap-2.5">
          {AUDACE_OPTIONS.map(({ value: v, emoji, label, desc }) => {
            const isActive = audace === v;
            return (
              <button
                key={v}
                onClick={() => update("audace", isActive ? null : v)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-2xl border-2 font-bold text-xs transition-all duration-200 active:scale-95 ${
                  isActive
                    ? "bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200"
                    : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
                }`}
              >
                <span className="text-xl leading-none">{emoji}</span>
                <span className="text-center">{label}</span>
                <span className={`text-center font-normal leading-tight ${isActive ? "text-rose-100" : "text-stone-400"}`}>
                  {desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={onSkip}
          className="flex-1 py-3.5 rounded-2xl border-2 border-stone-200 bg-white text-stone-500 font-bold text-sm transition-all duration-200 active:scale-95 hover:bg-stone-50"
        >
          Passer →
        </button>
        <button
          onClick={onNext}
          disabled={!hasAny}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 active:scale-95 ${
            hasAny
              ? "bg-blue-600 text-white shadow-md shadow-blue-200 hover:bg-blue-700"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          Suivant
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
