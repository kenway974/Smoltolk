import React, { useState } from "react";
import { MapPin, Copy, Check, ChevronDown, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Crosshair, ArrowRight } from "lucide-react";
import { INTENTION_BY_LABEL } from "../data/intentions";
import { ROLE_BY_LABEL } from "../data/roles";
import { guidePalier, PALIERS_INFO } from "../data/guideMap";

const LEVELS = [
  { key: "zoomIn",   label: "Zoom In",  hint: "Un détail visible sur la personne", Icon: ZoomIn },
  { key: "contexte", label: "Contexte", hint: "Le lieu, l'instant que vous partagez", Icon: Crosshair },
  { key: "zoomOut",  label: "Zoom Out", hint: "L'énergie générale du moment", Icon: ZoomOut },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* silencieux */ }
  };
  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-lg transition-colors duration-200 active:scale-90 flex-shrink-0 ${
        copied ? "bg-stone-900 text-white" : "text-stone-300 hover:text-stone-600 hover:bg-stone-100"
      }`}
      title="Copier"
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  );
}

export default function SituationCard({ situation, index = 0, onOpenGuide }) {
  const [activeLevel, setActiveLevel] = useState("zoomIn");
  const [variantIndex, setVariantIndex] = useState(0);
  const [relanceOpen, setRelanceOpen] = useState(false);

  const level = LEVELS.find(l => l.key === activeLevel);
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

  const intentionEmoji = INTENTION_BY_LABEL[situation.intention]?.emoji;
  const roleInfo = situation.role && situation.role !== "Tous" ? ROLE_BY_LABEL[situation.role] : null;
  const palierKey = guidePalier(situation);
  const palier = PALIERS_INFO[palierKey];

  // Ligne de méta discrète (remplace les pastilles colorées)
  const meta = [
    situation.profil,
    situation.humeur,
    situation.ageGroupe && situation.ageGroupe !== "Tous" ? situation.ageGroupe : null,
    situation.genre && situation.genre !== "Indéfini" ? situation.genre : null,
    situation.vibe,
    situation.proximite,
  ].filter(Boolean).join(" · ");

  return (
    <div
      className="bg-white rounded-2xl border border-stone-200 overflow-hidden animate-card-enter"
      style={{ animationDelay: `${Math.min(index * 40, 320)}ms` }}
    >
      {/* ── Header ── */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 pt-1">
            <MapPin size={12} strokeWidth={2} className="text-stone-400" />
            {situation.environnement}
          </span>
          <div className="flex flex-wrap justify-end gap-1.5">
            {roleInfo && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 text-stone-500 text-xs font-medium">
                {roleInfo.emoji} {situation.role}
              </span>
            )}
            {situation.intention && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
                {intentionEmoji} {situation.intention}
              </span>
            )}
          </div>
        </div>

        <p className="text-[17px] font-semibold text-stone-900 leading-snug">{situation.objectif}</p>

        <p className="mt-2 text-xs text-stone-400 leading-relaxed">
          {meta}
          {situation.theme && <span className="text-stone-300"> · {situation.theme}</span>}
        </p>
      </div>

      {/* ── Zoom level switcher ── */}
      <div className="flex mx-5 rounded-xl bg-stone-100 p-1 gap-1">
        {LEVELS.map(({ key, label, Icon }) => {
          const active = activeLevel === key;
          return (
            <button
              key={key}
              onClick={() => goToLevel(key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                active ? "bg-white text-stone-900 shadow-sm" : "text-stone-400"
              }`}
            >
              <Icon size={13} strokeWidth={2} />
              {label}
            </button>
          );
        })}
      </div>

      <p className="mx-5 mt-2.5 mb-3 text-[11px] text-stone-400 text-center">{level.hint}</p>

      {/* ── Accroche ── */}
      <div
        key={`${activeLevel}-${idx}`}
        className="mx-5 mb-2.5 px-4 py-4 rounded-xl bg-stone-50 border border-stone-100 flex items-start gap-3 animate-phrase-swap"
      >
        <p className="flex-1 text-[15px] text-stone-800 leading-relaxed">« {data.accroche} »</p>
        <CopyButton text={data.accroche} />
      </div>

      {/* Navigation entre variantes */}
      {hasVariants && (
        <div className="mx-5 mb-4 flex items-center justify-center gap-3">
          <button
            onClick={() => cycleVariant(-1)}
            className="p-1 rounded-lg text-stone-300 hover:text-stone-700 hover:bg-stone-100 transition-colors active:scale-90"
            aria-label="Formulation précédente"
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </button>
          <div className="flex items-center gap-1.5">
            {variants.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === idx ? "w-4 bg-stone-800" : "w-1.5 bg-stone-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => cycleVariant(1)}
            className="p-1 rounded-lg text-stone-300 hover:text-stone-700 hover:bg-stone-100 transition-colors active:scale-90"
            aria-label="Autre formulation"
          >
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      )}

      {/* ── Relance ── */}
      <div className="mx-5 mb-5">
        <button
          onClick={() => setRelanceOpen(v => !v)}
          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-colors duration-200 active:scale-[0.99] ${
            relanceOpen ? "text-stone-700 bg-stone-100" : "text-stone-400 hover:bg-stone-50"
          }`}
        >
          <span>Rebond + Ouverture</span>
          <ChevronDown
            size={15}
            strokeWidth={2}
            className={`transition-transform duration-200 ${relanceOpen ? "rotate-180" : ""}`}
          />
        </button>
        {relanceOpen && (
          <div className="flex items-start gap-3 mt-2 px-4 py-3.5 rounded-xl bg-stone-50 border border-stone-100 animate-expand-in">
            <p className="flex-1 text-sm text-stone-500 leading-relaxed italic">« {data.relance} »</p>
            <CopyButton text={data.relance} />
          </div>
        )}
      </div>

      {/* ── Et après ? → palier du guide ── */}
      {onOpenGuide && (
        <button
          onClick={() => onOpenGuide(palierKey)}
          className="w-full flex items-center justify-between gap-2 px-5 py-3.5 border-t border-stone-100 text-left group active:bg-stone-50 transition-colors"
        >
          <span className="flex flex-col">
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-stone-400">Et après&nbsp;?</span>
            <span className="text-sm font-semibold text-stone-800">
              {palier.label} <span className="font-normal text-stone-400">· {palier.tagline}</span>
            </span>
          </span>
          <ArrowRight size={16} strokeWidth={2} className="text-stone-300 group-hover:text-stone-700 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
        </button>
      )}
    </div>
  );
}
