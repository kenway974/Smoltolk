import React, { useState } from "react";
import { MapPin, User, Heart, Tag, Copy, Check, ChevronDown, ChevronUp, ZoomIn, ZoomOut, Crosshair } from "lucide-react";

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
    sub: "La personne",
    Icon: ZoomIn,
    box: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-900",
  },
  {
    key: "contexte",
    label: "Contexte",
    sub: "Le lieu",
    Icon: Crosshair,
    box: "bg-sky-50 border-sky-200",
    text: "text-sky-900",
  },
  {
    key: "zoomOut",
    label: "Zoom Out",
    sub: "L'instant",
    Icon: ZoomOut,
    box: "bg-violet-50 border-violet-200",
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
      className={`p-1.5 rounded-lg transition-all duration-150 active:scale-90 ${copied ? "bg-green-100 text-green-600" : "bg-stone-100 text-stone-500 hover:bg-stone-200"}`}
      title="Copier"
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  );
}

export default function SituationCard({ situation }) {
  const [activeLevel, setActiveLevel] = useState("zoomIn");
  const [relanceOpen, setRelanceOpen] = useState(false);

  const level = LEVELS.find(l => l.key === activeLevel);
  const data = situation[activeLevel];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">

      {/* Card header */}
      <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-3">
        <div className="flex flex-wrap gap-1.5 flex-1">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
            <MapPin size={11} strokeWidth={2.5} />
            {situation.environnement}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
            <User size={11} strokeWidth={2.5} />
            {situation.profil}
          </span>
        </div>
        {/* Energy dot + label */}
        <span className="flex items-center gap-1.5 shrink-0 mt-0.5">
          <span className={`w-2.5 h-2.5 rounded-full ${ENERGY_DOT[situation.energie]}`} />
          <span className="text-xs text-stone-500 font-medium">{ENERGY_LABEL[situation.energie]}</span>
        </span>
      </div>

      {/* Card sub-info */}
      <div className="flex gap-3 px-4 pb-3 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <Heart size={11} strokeWidth={2} />
          {situation.humeur}
        </span>
        <span className="flex items-center gap-1">
          <Tag size={11} strokeWidth={2} />
          {situation.theme}
        </span>
      </div>

      {/* Level switcher — pyramide Zoom In / Contexte / Zoom Out */}
      <div className="flex mx-4 mb-2 rounded-lg bg-stone-100 p-0.5">
        {LEVELS.map(({ key, label, sub, Icon }) => {
          const active = activeLevel === key;
          return (
            <button
              key={key}
              onClick={() => { setActiveLevel(key); setRelanceOpen(false); }}
              className={`flex-1 flex flex-col items-center gap-0.5 py-1.5 rounded-md transition-all duration-150 ${active ? "bg-white shadow-sm" : ""}`}
            >
              <span className={`flex items-center gap-1 text-xs font-semibold ${active ? "text-stone-800" : "text-stone-500"}`}>
                <Icon size={12} strokeWidth={2.5} />
                {label}
              </span>
              <span className={`text-[10px] leading-none ${active ? "text-stone-400" : "text-stone-300"}`}>
                {sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Accroche display */}
      <div className={`mx-4 mb-3 px-3 py-3 rounded-xl flex items-start gap-2 border ${level.box}`}>
        <p className={`flex-1 text-sm font-medium leading-snug ${level.text}`}>
          « {data.accroche} »
        </p>
        <CopyButton text={data.accroche} />
      </div>

      {/* Relance section — réflexe « Rebond + Ouverture » */}
      <div className="mx-4 mb-4">
        <button
          onClick={() => setRelanceOpen(v => !v)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold active:bg-rose-100 transition-colors"
        >
          <span>💬 Rebond + Ouverture</span>
          {relanceOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {relanceOpen && (
          <div className="flex items-start gap-2 mt-1.5 px-3 py-2.5 rounded-xl bg-rose-50 border border-rose-200">
            <p className="flex-1 text-sm text-rose-800 leading-snug italic">
              « {data.relance} »
            </p>
            <CopyButton text={data.relance} />
          </div>
        )}
      </div>

    </div>
  );
}
