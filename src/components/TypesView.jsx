import React from "react";
import { ArrowLeft, Check, X } from "lucide-react";
import { TYPES } from "../data/typesPersonnes";

function MiniList({ label, items, tone }) {
  const tones = {
    stone:   { dot: "bg-stone-300",  label: "text-stone-500" },
    emerald: { dot: "bg-emerald-400", label: "text-emerald-600" },
    rose:    { dot: "bg-rose-400",   label: "text-rose-600" },
  };
  const t = tones[tone] || tones.stone;
  return (
    <div>
      <p className={`text-[11px] font-semibold uppercase tracking-wide ${t.label} mb-1.5`}>{label}</p>
      <ul className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-stone-600 leading-snug">
            {tone === "emerald" ? (
              <Check size={14} strokeWidth={2.4} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            ) : tone === "rose" ? (
              <X size={14} strokeWidth={2.4} className="text-rose-500 flex-shrink-0 mt-0.5" />
            ) : (
              <span className={`w-1.5 h-1.5 rounded-full ${t.dot} flex-shrink-0 mt-1.5`} />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TypesView({ onBack }) {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour"><ArrowLeft size={17} strokeWidth={2} /></button>
        <span className="text-sm font-semibold text-stone-900">Types de personnes</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        <p className="text-[15px] text-stone-600 leading-relaxed mb-6">
          Pas des étiquettes — des états passagers. Voici comment t'ajuster, avec bienveillance, à qui tu as en face.
        </p>

        <div className="flex flex-col gap-3">
          {TYPES.map((type) => (
            <article key={type.id} className="rounded-2xl border border-stone-200 bg-white p-4">
              <div className="flex items-center gap-3 mb-3.5">
                <span className={`flex items-center justify-center w-11 h-11 rounded-2xl flex-shrink-0 text-[22px] ${type.tint}`} aria-hidden="true">{type.emoji}</span>
                <h2 className="font-serif-guide text-[19px] font-semibold text-stone-900 leading-tight">{type.titre}</h2>
              </div>

              <div className="flex flex-col gap-3.5">
                <MiniList label="Tu le repères à" items={type.signes} tone="stone" />
                <MiniList label="Ce qui marche" items={type.approche} tone="emerald" />
                <MiniList label="À éviter" items={type.aEviter} tone="rose" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[12px] text-stone-400 leading-relaxed text-center">
          Ce sont des humeurs du moment, jamais des jugements. La même personne peut être pressée un jour et bavarde le lendemain.
        </p>
      </div>
    </div>
  );
}
