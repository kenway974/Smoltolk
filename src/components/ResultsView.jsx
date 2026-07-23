import React from "react";
import { RotateCcw, MessageCircle, BookOpen } from "lucide-react";
import SituationCard from "./SituationCard";
import { INTENTION_BY_LABEL } from "../data/intentions";
import { ROLE_BY_LABEL } from "../data/roles";

const VIBE_LABEL   = { Ouvert: "Ouvert", Neutre: "Neutre", Fermé: "Fermé" };
const AUDACE_LABEL = { 1: "Prudent", 2: "Confiant", 3: "Audacieux" };

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-medium text-stone-500">
      {label}
    </span>
  );
}

export default function ResultsView({ situations, criteria, onRestart, onOpenGuide }) {
  const { lieu, moi, avatar, contexte, interet, intention, role } = criteria || {};
  const { ageGroupe, genre, vibe } = avatar || {};
  const { proximite, audace } = contexte || {};
  const moiLabel = [moi?.ageGroupe, moi?.genre].filter(Boolean).join(" · ");

  const enFace = [
    ageGroupe && ageGroupe !== "Peu importe" ? ageGroupe : null,
    genre && genre !== "Peu importe" ? genre : null,
    vibe ? VIBE_LABEL[vibe] : null,
  ].filter(Boolean).join(" · ");

  const ctx = [
    proximite || null,
    audace ? AUDACE_LABEL[audace] : null,
  ].filter(Boolean).join(" · ");

  const hasAnyFilter = lieu || interet || enFace || proximite || audace || intention || moiLabel || role;

  return (
    <div className="flex flex-col min-h-svh">
      {/* ── Header ── */}
      <header className="bg-[#f5f3ef]/95 backdrop-blur-sm sticky top-0 z-10 px-5 pt-6 pb-4 border-b border-stone-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MessageCircle size={17} strokeWidth={2} className="text-stone-400" />
            <span className="text-sm font-semibold tracking-tight text-stone-900">Smoltolk</span>
          </div>
          <div className="flex items-center gap-2">
            {onOpenGuide && (
              <button
                onClick={onOpenGuide}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-500 text-xs font-medium active:scale-95 transition-colors duration-150 hover:bg-stone-50"
              >
                <BookOpen size={12} strokeWidth={2} />
                Guide
              </button>
            )}
            <button
              onClick={onRestart}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-500 text-xs font-medium active:scale-95 transition-colors duration-150 hover:bg-stone-50"
            >
              <RotateCcw size={12} strokeWidth={2} />
              Recommencer
            </button>
          </div>
        </div>

        {hasAnyFilter && (
          <div className="flex flex-wrap gap-1.5">
            {lieu && <Chip label={lieu} />}
            {intention && <Chip label={`${INTENTION_BY_LABEL[intention]?.emoji ?? ""} ${intention}`.trim()} />}
            {moiLabel && <Chip label={`Moi : ${moiLabel}`} />}
            {role && <Chip label={`${ROLE_BY_LABEL[role]?.emoji ?? ""} ${role}`.trim()} />}
            {enFace && <Chip label={`En face : ${enFace}`} />}
            {ctx && <Chip label={ctx} />}
            {interet && <Chip label={interet} />}
          </div>
        )}
      </header>

      {/* ── Count ── */}
      <div className="px-5 pt-4 pb-1">
        <p className="text-xs font-medium text-stone-400">
          {situations.length === 0
            ? "Aucune conversation trouvée"
            : situations.length === 1
            ? "1 conversation"
            : `${situations.length} conversations`}
        </p>
        {hasAnyFilter && situations.length > 0 && !situations.some(s => s.__exact) && (
          <p className="mt-1.5 text-[11px] text-stone-400 leading-snug">
            Pas de correspondance exacte — voici les situations les plus proches.
          </p>
        )}
      </div>

      {/* ── Cards ── */}
      <main className="flex-1 px-5 pb-12 pt-2 space-y-3">
        {situations.length > 0 ? (
          situations.map((situation, index) => (
            <SituationCard key={situation.id} situation={situation} index={index} onOpenGuide={onOpenGuide} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400 animate-fade-in">
            <MessageCircle size={40} strokeWidth={1.5} className="mb-4 opacity-30" />
            <p className="text-sm font-medium text-stone-500">Aucune situation trouvée</p>
            <p className="text-xs mt-2 text-stone-400 text-center px-6">
              Essaie avec moins de critères ou recommence.
            </p>
            <button
              onClick={onRestart}
              className="mt-5 flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 text-white text-sm font-semibold active:scale-95 transition-colors"
            >
              <RotateCcw size={14} strokeWidth={2} />
              Recommencer
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
