import React, { useState } from "react";
import { MapPin, User, Tag, Copy, Check, ChevronDown, ChevronLeft, ChevronRight, Sparkles, ZoomIn, ZoomOut, Crosshair } from "lucide-react";

const VIBE_STYLE = {
  Ouvert:  "bg-emerald-100 text-emerald-700",
  Neutre:  "bg-stone-100 text-stone-600",
  Fermé:   "bg-rose-100 text-rose-700",
};
const VIBE_EMOJI  = { Ouvert: "😊", Neutre: "😐", Fermé: "😑" };
const PROX_EMOJI  = { Inconnu: "🤝", Croisé: "👀", Connaissance: "👋", Habitué: "💬", Proche: "😊" };
const AUDACE_DATA = {
  1: { emoji: "😌", label: "Prudent",   style: "bg-slate-100 text-slate-600" },
  2: { emoji: "😎", label: "Confiant",  style: "bg-violet-100 text-violet-700" },
  3: { emoji: "🔥", label: "Audacieux", style: "bg-red-100 text-red-700" },
};

const LEVELS = [
  {
    key: "zoomIn",
    label: "Zoom In",
    hint: "Un détail visible sur la personne",
    Icon: ZoomIn,
    activeText: "text-emerald-700",
    box: "bg-emerald-50 border-2 border-emerald-200",
    text: "text-emerald-900",
  },
  {
    key: "contexte",
    label: "Contexte",
    hint: "Le lieu, l'instant que vous partagez",
    Icon: Crosshair,
    activeText: "text-sky-700",
    box: "bg-sky-50 border-2 border-sky-200",
    text: "text-sky-900",
  },
  {
    key: "zoomOut",
    label: "Zoom Out",
    hint: "L'énergie générale du moment",
    Icon: ZoomOut,
    activeText: "text-violet-700",
    box: "bg-violet-50 border-2 border-violet-200",
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
    } catch { /* fallback silently */ }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-xl transition-all duration-200 active:scale-90 flex-shrink-0 ${
        copied
          ? "bg-green-100 text-green-600"
          : "bg-stone-100 text-stone-400 hover:bg-stone-200 hover:text-stone-600"
      }`}
      title="Copier"
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  );
}

export default function SituationCard({ situation, index = 0 }) {
  const [activeLevel, setActiveLevel] = useState("zoomIn");
  const [variantIndex, setVariantIndex] = useState(0);
  const [relanceOpen, setRelanceOpen] = useState(false);

  const level = LEVELS.find(l => l.key === activeLevel);
  // Chaque niveau peut contenir plusieurs variantes d'accroche.
  const raw = situation[activeLevel];
  const variants = Array.isArray(raw) ? raw : [raw];
  const idx = Math.min(variantIndex, variants.length - 1);
  const data = variants[idx];
  const hasVariants = variants.length > 1;

  const goToLevel = (key) => { setActiveLevel(key); setVariantIndex(0); setRelanceOpen(false); };
  const cycleVariant = (dir) => {
    setVariantIndex(i => (i + dir + variants.length) % variants.length);
    setRelanceOpen(false);
  };

  const audaceInfo = situation.audace ? AUDACE_DATA[situation.audace] : null;

  return (
    <div
      className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow animate-card-enter"
      style={{ animationDelay: `${Math.min(index * 45, 360)}ms` }}
    >
      {/* ── Card header ── */}
      <div className="px-5 pt-5 pb-3">

        {/* Badges row */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
            <MapPin size={11} strokeWidth={2.5} />
            {situation.environnement}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">
            <Sparkles size={11} strokeWidth={2.5} />
            {situation.centreInteret}
          </span>
          {situation.vibe && (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${VIBE_STYLE[situation.vibe]}`}>
              {VIBE_EMOJI[situation.vibe]} {situation.vibe}
            </span>
          )}
          {situation.proximite && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
              {PROX_EMOJI[situation.proximite]} {situation.proximite}
            </span>
          )}
          {audaceInfo && (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${audaceInfo.style}`}>
              {audaceInfo.emoji} {audaceInfo.label}
            </span>
          )}
        </div>

        {/* Objectif — card title */}
        <p className="text-base font-bold text-stone-900 leading-snug mb-3">
          {situation.objectif}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <User size={12} strokeWidth={2} />
            {situation.profil}
            {situation.ageGroupe && situation.ageGroupe !== "Tous" && (
              <span className="text-stone-400">· {situation.ageGroupe}</span>
            )}
            {situation.genre && situation.genre !== "Indéfini" && (
              <span className="text-stone-400">· {situation.genre}</span>
            )}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag size={12} strokeWidth={2} />
            {situation.theme}
          </span>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-5 border-t border-stone-100" />

      {/* ── Zoom level switcher ── */}
      <div className="flex mx-5 mt-4 mb-1 rounded-2xl bg-stone-100 p-1 gap-1">
        {LEVELS.map(({ key, label, Icon, activeText }) => {
          const active = activeLevel === key;
          return (
            <button
              key={key}
              onClick={() => goToLevel(key)}
              className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                active ? `bg-white shadow-sm ${activeText}` : "text-stone-500"
              }`}
            >
              <Icon size={13} strokeWidth={2.5} />
              {label}
            </button>
          );
        })}
      </div>

      {/* Level hint */}
      <p className="mx-5 mb-3 text-[11px] text-stone-400 text-center">{level.hint}</p>

      {/* ── Accroche ── */}
      <div
        key={`${activeLevel}-${idx}`}
        className={`mx-5 mb-2 px-4 py-4 rounded-2xl flex items-start gap-3 animate-phrase-swap ${level.box}`}
      >
        <p className={`flex-1 text-sm font-semibold leading-relaxed ${level.text}`}>
          « {data.accroche} »
        </p>
        <CopyButton text={data.accroche} />
      </div>

      {/* Navigation entre variantes d'accroche */}
      {hasVariants && (
        <div className="mx-5 mb-4 flex items-center justify-center gap-3">
          <button
            onClick={() => cycleVariant(-1)}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors active:scale-90"
            aria-label="Formulation précédente"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>
          <div className="flex items-center gap-1.5">
            {variants.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === idx ? "w-4 bg-stone-500" : "w-1.5 bg-stone-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => cycleVariant(1)}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors active:scale-90"
            aria-label="Autre formulation"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      )}

      {/* ── Relance (Rebond + Ouverture) ── */}
      <div className="mx-5 mb-5">
        <button
          onClick={() => setRelanceOpen(v => !v)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-stone-100 text-xs font-bold tracking-wide transition-all duration-200 active:scale-[0.98] ${
            relanceOpen ? "text-stone-700" : "text-stone-500"
          }`}
        >
          <span>Rebond + Ouverture</span>
          <ChevronDown
            size={15}
            strokeWidth={2.5}
            className={`transition-transform duration-200 ${relanceOpen ? "rotate-180" : ""}`}
          />
        </button>
        {relanceOpen && (
          <div className="flex items-start gap-3 mt-2 px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-100 animate-expand-in">
            <p className="flex-1 text-sm text-stone-600 leading-relaxed italic">
              « {data.relance} »
            </p>
            <CopyButton text={data.relance} />
          </div>
        )}
      </div>
    </div>
  );
}
