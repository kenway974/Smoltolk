import React from "react";
import { ArrowLeft } from "lucide-react";

export default function WizardLayout({ step, children, onBack }) {
  return (
    <div className="min-h-svh bg-stone-100 flex flex-col">
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-2xl bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 active:scale-95 transition-all duration-200 shadow-sm"
          aria-label="Retour"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`rounded-full transition-all duration-300 ${
                s < step
                  ? "w-6 h-2.5 bg-blue-600"
                  : s === step
                  ? "w-6 h-2.5 bg-blue-600 opacity-100"
                  : "w-2.5 h-2.5 bg-stone-300"
              }`}
            />
          ))}
        </div>

        {/* Spacer to balance the back button */}
        <div className="w-10" />
      </div>

      {/* ── Step indicator ── */}
      <p className="text-center text-xs font-semibold text-stone-400 tracking-widest uppercase mb-2">
        Étape {step} / 3
      </p>

      {/* ── Content ── */}
      <div className="flex-1 animate-fade-in">
        {children}
      </div>
    </div>
  );
}
