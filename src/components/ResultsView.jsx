import React from "react";
import { RotateCcw, MessageCircle, MapPin, Sparkles, Users, Zap, Target } from "lucide-react";
import SituationCard from "./SituationCard";
import { INTENTION_BY_LABEL } from "../data/intentions";

const VIBE_LABEL   = { Ouvert: "😊 Ouvert", Neutre: "😐 Neutre", Fermé: "😑 Fermé" };
const PROX_EMOJI   = { Inconnu: "🤝", Croisé: "👀", Connaissance: "👋", Habitué: "💬", Proche: "😊" };
const AUDACE_LABEL = { 1: "😌 Prudent", 2: "😎 Confiant", 3: "🔥 Audacieux" };

function CriterionChip({ icon: Icon, label, color }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${color}`}>
      {Icon && <Icon size={11} strokeWidth={2.5} />}
      {label}
    </span>
  );
}

export default function ResultsView({ situations, criteria, onRestart }) {
  const { lieu, moi, avatar, contexte, interet, intention } = criteria || {};
  const { ageGroupe, genre, vibe } = avatar || {};
  const { proximite, audace } = contexte || {};
  const moiLabel = [moi?.ageGroupe, moi?.genre].filter(Boolean).join(" · ");

  const hasAnyFilter = lieu || interet || ageGroupe || genre || vibe || proximite || audace || intention || moiLabel;

  return (
    <div className="flex flex-col min-h-svh bg-stone-100">

      {/* ── Header ── */}
      <header className="bg-stone-900 text-white px-5 pt-5 pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MessageCircle size={18} strokeWidth={2} className="text-blue-400" />
            <span className="text-sm font-black tracking-tight">Small Talk Coach</span>
          </div>
          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-800 text-stone-300 text-xs font-bold active:scale-95 transition-all duration-150 hover:bg-stone-700"
          >
            <RotateCcw size={12} strokeWidth={2.5} />
            Recommencer
          </button>
        </div>

        {/* Active criteria chips */}
        {hasAnyFilter && (
          <div className="flex flex-wrap gap-2">
            {lieu && (
              <CriterionChip icon={MapPin} label={lieu} color="bg-blue-900/60 text-blue-300" />
            )}
            {intention && (
              <CriterionChip
                label={`${INTENTION_BY_LABEL[intention]?.emoji ?? "🎯"} ${intention}`}
                color="bg-amber-900/60 text-amber-200"
              />
            )}
            {moiLabel && (
              <CriterionChip icon={Target} label={`Moi : ${moiLabel}`} color="bg-indigo-900/60 text-indigo-300" />
            )}
            {(ageGroupe || genre || vibe) && (
              <CriterionChip
                icon={Users}
                label={[
                  ageGroupe && ageGroupe !== "Peu importe" ? ageGroupe : null,
                  genre && genre !== "Peu importe" ? genre : null,
                  vibe ? VIBE_LABEL[vibe] : null,
                ].filter(Boolean).join(" · ")}
                color="bg-violet-900/60 text-violet-300"
              />
            )}
            {(proximite || audace) && (
              <CriterionChip
                icon={Zap}
                label={[
                  proximite ? `${PROX_EMOJI[proximite]} ${proximite}` : null,
                  audace ? AUDACE_LABEL[audace] : null,
                ].filter(Boolean).join(" · ")}
                color="bg-amber-900/60 text-amber-300"
              />
            )}
            {interet && (
              <CriterionChip icon={Sparkles} label={interet} color="bg-rose-900/60 text-rose-300" />
            )}
          </div>
        )}
      </header>

      {/* ── Count ── */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold text-stone-500">
          {situations.length === 0
            ? "Aucune conversation trouvée"
            : situations.length === 1
            ? "1 conversation trouvée"
            : `${situations.length} conversations trouvées`}
        </p>
        {hasAnyFilter && situations.length > 0 && !situations.some(s => s.__exact) && (
          <p className="mt-1.5 text-[11px] text-amber-600 leading-snug">
            Pas de correspondance exacte pour ces critères — voici les situations les plus proches.
          </p>
        )}
      </div>

      {/* ── Cards ── */}
      <main className="flex-1 px-5 pb-12 pt-2 space-y-4">
        {situations.length > 0 ? (
          situations.map((situation, index) => (
            <SituationCard key={situation.id} situation={situation} index={index} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400 animate-fade-in">
            <MessageCircle size={44} strokeWidth={1.5} className="mb-4 opacity-30" />
            <p className="text-sm font-bold text-stone-500">Aucune situation trouvée</p>
            <p className="text-xs mt-2 text-stone-400 text-center px-6">
              Essaie avec moins de critères ou clique sur "Recommencer".
            </p>
            <button
              onClick={onRestart}
              className="mt-5 flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 text-white text-sm font-bold active:scale-95 transition-all"
            >
              <RotateCcw size={14} strokeWidth={2.5} />
              Recommencer
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
