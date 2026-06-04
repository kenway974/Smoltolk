import React from "react";
import { RotateCcw, MessageCircle, MapPin, Sparkles, Users } from "lucide-react";
import SituationCard from "./SituationCard";

const VIBE_LABEL = { Ouvert: "😊 Ouvert", Neutre: "😐 Neutre", Fermé: "😑 Fermé" };
const AGE_LABEL  = { Jeune: "Jeune", Adulte: "Adulte", Senior: "Senior" };

function CriterionChip({ icon: Icon, label, color }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${color}`}>
      {Icon && <Icon size={11} strokeWidth={2.5} />}
      {label}
    </span>
  );
}

export default function ResultsView({ situations, criteria, onRestart }) {
  const { lieu, avatar, interet } = criteria || {};
  const { ageGroupe, genre, vibe } = avatar || {};

  const hasAnyFilter = lieu || interet || ageGroupe || genre || vibe;

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

        {/* Active criteria */}
        {hasAnyFilter && (
          <div className="flex flex-wrap gap-2">
            {lieu && (
              <CriterionChip icon={MapPin} label={lieu} color="bg-blue-900/60 text-blue-300" />
            )}
            {(ageGroupe || genre || vibe) && (
              <CriterionChip
                icon={Users}
                label={[
                  ageGroupe && ageGroupe !== "Peu importe" ? AGE_LABEL[ageGroupe] : null,
                  genre && genre !== "Peu importe" ? genre : null,
                  vibe ? VIBE_LABEL[vibe] : null,
                ].filter(Boolean).join(" · ")}
                color="bg-violet-900/60 text-violet-300"
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
