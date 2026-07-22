import React from "react";
import { Target, ArrowRight, Sparkles } from "lucide-react";
import { INTENTIONS } from "../data/intentions";

export default function StepIntention({ value, suggested, onChange, onNext, onSkip }) {
  return (
    <div className="px-4 pb-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-amber-100 text-amber-600">
            <Target size={18} strokeWidth={2.5} />
          </span>
          <h2 className="text-2xl font-black text-stone-900 tracking-tight">Ton intention&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-500 ml-11">
          Ce que tu cherches à faire en l'abordant
        </p>
      </div>

      {/* Intentions */}
      <div className="flex flex-col gap-2.5">
        {INTENTIONS.map(({ key, label, emoji, hint, activeColor, color }) => {
          const isActive = value === label;
          const isSuggested = suggested === label;
          return (
            <button
              key={key}
              onClick={() => onChange(isActive ? null : label)}
              className={`relative text-left px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 active:scale-[0.98] ${
                isActive ? activeColor : color
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl leading-none">{emoji}</span>
                <div className="flex-1">
                  <p className="font-black text-[15px] leading-tight">{label}</p>
                  <p className={`text-xs mt-0.5 leading-snug ${isActive ? "opacity-90" : "opacity-70"}`}>
                    {hint}
                  </p>
                </div>
                {isSuggested && !isActive && (
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 text-amber-700 text-[10px] font-black uppercase tracking-wide shadow-sm">
                    <Sparkles size={10} strokeWidth={2.5} /> Suggéré
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-1">
        <button
          onClick={onSkip}
          className="flex-1 py-3.5 rounded-2xl border-2 border-stone-200 bg-white text-stone-500 font-bold text-sm transition-all duration-200 active:scale-95 hover:bg-stone-50"
        >
          Passer →
        </button>
        <button
          onClick={onNext}
          disabled={!value}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 active:scale-95 ${
            value
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
