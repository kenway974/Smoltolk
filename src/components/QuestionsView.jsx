import React, { useState } from "react";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { THEMES } from "../data/questions";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() =>
        navigator.clipboard
          ?.writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          })
          .catch(() => {})
      }
      className={`p-2 rounded-lg transition-colors active:scale-90 flex-shrink-0 ${
        copied ? "bg-stone-900 text-white" : "text-stone-300 hover:text-stone-600 hover:bg-stone-100"
      }`}
      aria-label="Copier la question"
      title="Copier"
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  );
}

export default function QuestionsView({ onBack }) {
  const [actif, setActif] = useState("tout");
  const themesVisibles = actif === "tout" ? THEMES : THEMES.filter((t) => t.id === actif);

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
        <span className="text-sm font-semibold text-stone-900">Banque de questions</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        <p className="text-sm text-stone-500 leading-relaxed mb-5">
          Des questions ouvertes pour relancer une conversation, du plus léger au plus profond. Choisis un thème et copie celle qui te parle.
        </p>

        <div className="flex flex-wrap gap-2 mb-7">
          <button
            onClick={() => setActif("tout")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors active:scale-95 border ${
              actif === "tout"
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-500 border-stone-200 hover:bg-stone-50"
            }`}
          >
            Tout
          </button>
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setActif(t.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors active:scale-95 border inline-flex items-center gap-1.5 ${
                actif === t.id
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
              }`}
            >
              <span aria-hidden="true">{t.emoji}</span>
              {t.titre}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {themesVisibles.map((t) => (
            <section key={t.id}>
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className={`flex items-center justify-center w-9 h-9 rounded-xl text-lg ${t.tint}`}
                  aria-hidden="true"
                >
                  {t.emoji}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif-guide text-lg text-stone-900 leading-tight">{t.titre}</h2>
                  <span className="text-[10px] font-medium uppercase tracking-wide text-stone-400">
                    {t.questions.length} questions
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide ${t.tint}`}
                >
                  {t.niveau}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {t.questions.map((q, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3"
                  >
                    <span
                      className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${t.tint}`}
                      aria-hidden="true"
                    />
                    <p className="flex-1 text-[15px] text-stone-700 leading-relaxed">{q}</p>
                    <CopyButton text={q} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
