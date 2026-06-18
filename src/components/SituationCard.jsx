import React, { useState } from "react";
import { Copy, Check, Plus, ZoomIn, ZoomOut, Crosshair } from "lucide-react";

const ENERGY_DOT = {
  Haute:   "bg-blue-500",
  Basse:   "bg-amber-400",
  Fatigué: "bg-violet-500",
};

const ENERGY_LABEL = {
  Haute:   "Haute",
  Basse:   "Basse",
  Fatigué: "Épuisé",
};

// Les 3 niveaux de la pyramide du contexte « Zoom In / Zoom Out ».
const LEVELS = [
  {
    key: "zoomIn",
    label: "Zoom In",
    hint: "Un détail visible sur la personne",
    Icon: ZoomIn,
    activeText: "text-emerald-700",
    box: "bg-emerald-50/70 border-emerald-100",
    text: "text-emerald-900",
  },
  {
    key: "contexte",
    label: "Contexte",
    hint: "Le lieu, l'instant que vous partagez",
    Icon: Crosshair,
    activeText: "text-sky-700",
    box: "bg-sky-50/70 border-sky-100",
    text: "text-sky-900",
  },
  {
    key: "zoomOut",
    label: "Zoom Out",
    hint: "L'énergie générale du moment",
    Icon: ZoomOut,
    activeText: "text-violet-700",
    box: "bg-violet-50/70 border-violet-100",
    text: "text-violet-900",
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback silently
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`shrink-0 p-1.5 rounded-lg transition-all duration-150 active:scale-90 ${copied ? "text-emerald-600" : "text-stone-400 hover:text-stone-700 hover:bg-stone-100"}`}
      title="Copier"
    >
      {copied ? <Check size={15} strokeWidth={2.5} /> : <Copy size={15} strokeWidth={2} />}
    </button>
  );
}

export default function SituationCard({ situation }) {
  const [activeLevel, setActiveLevel] = useState("zoomIn");
  const [relanceOpen, setRelanceOpen] = useState(false);

  const level = LEVELS.find(l => l.key === activeLevel);
  const data = situation[activeLevel];

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 shadow-[0_1px_2px_rgba(28,25,23,0.04)] p-4">

      {/* Méta : environnement + énergie */}
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 truncate">
          {situation.environnement}
        </p>
        <span className="flex items-center gap-1.5 shrink-0 text-[11px] font-medium text-stone-400">
          <span className={`w-1.5 h-1.5 rounded-full ${ENERGY_DOT[situation.energie]}`} />
          {ENERGY_LABEL[situation.energie]}
        </span>
      </div>

      {/* La personne en face */}
      <h3 className="mt-1 text-[17px] font-semibold text-stone-800 leading-tight">
        {situation.profil}
      </h3>
      <p className="mt-0.5 text-xs text-stone-400">
        {situation.humeur} · {situation.theme}
      </p>

      {/* Sélecteur de niveau — pyramide Zoom In / Contexte / Zoom Out */}
      <div className="mt-3.5 flex gap-1 rounded-xl bg-stone-100 p-1">
        {LEVELS.map(({ key, label, Icon, activeText }) => {
          const active = activeLevel === key;
          return (
            <button
              key={key}
              onClick={() => { setActiveLevel(key); setRelanceOpen(false); }}
              className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                active ? `bg-white shadow-sm ${activeText}` : "text-stone-500"
              }`}
            >
              <Icon size={13} strokeWidth={2.5} />
              {label}
            </button>
          );
        })}
      </div>

      {/* Indice pédagogique du niveau actif */}
      <p className="mt-2.5 text-[11px] text-stone-400 text-center">{level.hint}</p>

      {/* L'accroche — le héros de la carte */}
      <div className={`mt-2 rounded-xl border px-4 py-3.5 ${level.box}`}>
        <div className="flex items-start gap-2">
          <p className={`flex-1 text-[15px] font-medium leading-relaxed ${level.text}`}>
            {data.accroche}
          </p>
          <CopyButton text={data.accroche} />
        </div>
      </div>

      {/* Relance — réflexe « Rebond + Ouverture » */}
      <button
        onClick={() => setRelanceOpen(v => !v)}
        className={`mt-2.5 w-full flex items-center gap-1.5 text-xs font-medium transition-colors ${
          relanceOpen ? "text-stone-700" : "text-stone-400 hover:text-stone-600"
        }`}
      >
        <Plus
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${relanceOpen ? "rotate-45" : ""}`}
        />
        Rebond + Ouverture
      </button>

      {relanceOpen && (
        <div className="mt-2 flex items-start gap-2 rounded-xl bg-stone-50 border border-stone-100 px-4 py-3">
          <p className="flex-1 text-sm text-stone-600 leading-relaxed italic">
            {data.relance}
          </p>
          <CopyButton text={data.relance} />
        </div>
      )}

    </div>
  );
}
