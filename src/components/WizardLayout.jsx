import React from "react";
import { ArrowLeft } from "lucide-react";

export default function WizardLayout({ step, total = 4, children, onBack }) {
  const steps = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="min-h-svh flex flex-col">
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-5 pt-6 pb-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors duration-200"
          aria-label="Retour"
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>

        {/* Progress */}
        <div className="flex items-center gap-1.5">
          {steps.map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                s === step ? "w-5 bg-stone-900" : s < step ? "w-1.5 bg-stone-900" : "w-1.5 bg-stone-300"
              }`}
            />
          ))}
        </div>

        <div className="w-9" />
      </div>

      {/* ── Step indicator ── */}
      <p className="text-center text-[11px] font-medium text-stone-400 tracking-[0.15em] uppercase mb-4">
        Étape {step} / {total}
      </p>

      {/* ── Content ── */}
      <div className="flex-1 animate-fade-in">{children}</div>
    </div>
  );
}
