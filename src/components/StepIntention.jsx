import React from "react";
import { Target, ArrowRight, Sparkles } from "lucide-react";
import { INTENTIONS } from "../data/intentions";

export default function StepIntention({ value, suggested, onChange, onNext, onSkip }) {
  return (
    <div className="px-5 pb-8 flex flex-col gap-7">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-stone-100 text-stone-400">
            <Target size={16} strokeWidth={2} />
          </span>
          <h2 className="text-xl font-semibold text-stone-900 tracking-tight">Ton intention&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-400 ml-[42px]">Ce que tu cherches à faire en l'abordant</p>
      </div>

      {/* Intentions */}
      <div className="flex flex-col gap-2">
        {INTENTIONS.map(({ key, label, emoji, hint }) => {
          const isActive = value === label;
          const isSuggested = suggested === label;
          return (
            <button
              key={key}
              onClick={() => onChange(isActive ? null : label)}
              className={`relative text-left px-4 py-3.5 rounded-xl border transition-colors duration-200 active:scale-[0.99] ${
                isActive
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-800 border-stone-200 hover:border-stone-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl leading-none">{emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[15px] leading-tight">{label}</p>
                  <p className={`text-xs mt-0.5 leading-snug ${isActive ? "text-stone-300" : "text-stone-400"}`}>
                    {hint}
                  </p>
                </div>
                {isSuggested && !isActive && (
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] font-semibold uppercase tracking-wide">
                    <Sparkles size={10} strokeWidth={2} /> Suggéré
                  </span>
                )}
              </div>
            </button>
          );
        })}
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
          disabled={!value}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200 active:scale-[0.98] ${
            value ? "bg-stone-900 text-white hover:bg-stone-800" : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          Suivant
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
