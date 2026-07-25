import React, { useState } from "react";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { SECOURS } from "../data/secours";

/* ── Ligne « phrase à dégainer » avec bouton copier ── */
function PhraseRow({ phrase }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard indisponible : on ignore silencieusement */
    }
  };

  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-stone-50 border border-stone-100 px-3 py-2.5">
      <p className="min-w-0 flex-1 text-[15px] text-stone-700 leading-snug">
        {phrase}
      </p>
      <button
        onClick={handleCopy}
        aria-label={copied ? "Copié" : "Copier la phrase"}
        className={`flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 border active:scale-95 transition-colors ${
          copied
            ? "bg-emerald-50 border-emerald-200 text-emerald-600"
            : "bg-white border-stone-200 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
        }`}
      >
        {copied ? (
          <Check size={15} strokeWidth={2.4} />
        ) : (
          <Copy size={15} strokeWidth={2} />
        )}
      </button>
    </div>
  );
}

/* ── Carte d'une situation ── */
function SecoursCard({ situation }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4">
      <div className="flex items-start gap-3 mb-3">
        <span
          className={`flex items-center justify-center w-11 h-11 rounded-2xl flex-shrink-0 text-[22px] leading-none ${situation.tint}`}
          aria-hidden="true"
        >
          {situation.emoji}
        </span>
        <div className="min-w-0 pt-0.5">
          <h2 className="font-serif-guide text-[19px] font-semibold text-stone-900 leading-tight">
            {situation.titre}
          </h2>
          <p className="text-[13px] text-stone-500 leading-snug mt-1">
            {situation.quoiFaire}
          </p>
        </div>
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-400 mb-2">
        À dégainer
      </p>
      <div className="flex flex-col gap-2">
        {situation.phrases.map((phrase, i) => (
          <PhraseRow key={i} phrase={phrase} />
        ))}
      </div>
    </div>
  );
}

export default function SecoursView({ onBack }) {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors"
          aria-label="Retour"
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Sorties de secours</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        <p className="text-[15px] text-stone-500 leading-relaxed max-w-[52ch] mb-6">
          Ça coince ? Voici quoi dire, tout de suite, sans réfléchir. Repère ta
          situation, dégaine une phrase, respire.
        </p>

        <div className="flex flex-col gap-3">
          {SECOURS.map((situation) => (
            <SecoursCard key={situation.id} situation={situation} />
          ))}
        </div>
      </div>
    </div>
  );
}
