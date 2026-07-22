import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

export default function StepLieu({ value, onChange, onNext, onSkip, options = [] }) {
  return (
    <div className="px-5 pb-8 flex flex-col gap-7">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-stone-100 text-stone-400">
            <MapPin size={16} strokeWidth={2} />
          </span>
          <h2 className="text-xl font-semibold text-stone-900 tracking-tight">Où es-tu&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-400 ml-[42px]">Choisis l'endroit où tu te trouves</p>
      </div>

      {/* Grid of chips */}
      <div className="grid grid-cols-2 gap-2">
        {options.map((lieu) => {
          const isActive = value === lieu;
          return (
            <button
              key={lieu}
              onClick={() => onChange(isActive ? null : lieu)}
              className={`flex items-center justify-center text-center px-3 py-3 rounded-xl border text-sm font-medium transition-colors duration-200 active:scale-[0.98] ${
                isActive
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              {lieu}
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
