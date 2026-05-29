import React, { useState, useCallback } from "react";
import { ArrowLeft, Shuffle, X, MessageCircle } from "lucide-react";
import SituationCard from "./SituationCard";
import { useFavorites } from "../hooks/useFavorites";

const ENERGY_LABEL = {
  Haute: { label: "Motivé", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
  Basse: { label: "Tranquille", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
  Fatigué: { label: "Épuisé", color: "bg-violet-500/20 text-violet-300 border-violet-500/40" },
};

export default function ResultsView({ wizardData, situations, onBack }) {
  const { favorites, toggleFavorite } = useFavorites();
  const [challengeId, setChallengeId] = useState(null);
  const [shuffleSpin, setShuffleSpin] = useState(false);

  const { location, profile, energie } = wizardData;

  const energyInfo = ENERGY_LABEL[energie] ?? { label: energie, color: "bg-slate-700 text-slate-300 border-slate-600" };

  const handleDefi = useCallback(() => {
    if (situations.length === 0) return;
    const pool = situations.filter((s) => s.id !== challengeId);
    const arr = pool.length > 0 ? pool : situations;
    const random = arr[Math.floor(Math.random() * arr.length)];
    setChallengeId(random.id);
    setShuffleSpin(true);
    setTimeout(() => setShuffleSpin(false), 500);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [situations, challengeId]);

  const challengeSituation = challengeId
    ? situations.find((s) => s.id === challengeId)
    : null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      {/* Sticky header */}
      <header className="sticky top-0 z-20 bg-slate-950 border-b border-slate-800/80 px-4 pt-4 pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 active:bg-slate-700 transition-colors shrink-0"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-100 truncate">
              {profile ?? "Toutes situations"}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              {location && (
                <span className="text-xs text-slate-500 truncate">{location}</span>
              )}
              {location && energie && (
                <span className="text-xs text-slate-700">&middot;</span>
              )}
              {energie && (
                <span
                  className={`inline-flex items-center px-1.5 py-0.5 rounded-full border text-xs font-semibold ${energyInfo.color}`}
                >
                  {energyInfo.label}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleDefi}
            disabled={situations.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold active:scale-90 active:bg-yellow-500/20 transition-all duration-150 disabled:opacity-30 shrink-0"
          >
            <Shuffle size={13} strokeWidth={2.5} className={shuffleSpin ? "spin-once" : "spin-rest"} />
            D&eacute;fi
          </button>
        </div>
      </header>

      {/* Challenge card */}
      {challengeSituation && (
        <div className="mx-4 mt-4 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-2 px-1">
            <Shuffle size={13} className="text-yellow-400" />
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
              D&eacute;fi Al&eacute;atoire
            </span>
            <button
              onClick={() => setChallengeId(null)}
              className="ml-auto p-0.5 text-slate-600 active:text-slate-400 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
          <SituationCard
            situation={challengeSituation}
            isFavorite={favorites.has(challengeSituation.id)}
            onToggleFavorite={() => toggleFavorite(challengeSituation.id)}
            isChallenge
          />
        </div>
      )}

      {/* Results list */}
      <main className="flex-1 px-4 pb-10 pt-3">
        {situations.length > 0 ? (
          <>
            <p className="text-xs text-slate-600 mb-3 animate-fade-in">
              {(() => {
                const phrases = situations.reduce(
                  (n, s) => n + (s.optionA?.length || 0) + (s.optionB?.length || 0),
                  0
                );
                const relances = situations.reduce((n, s) => n + (s.relances?.length || 0), 0);
                return `${phrases} accroches · ${relances} relances pour ce profil`;
              })()}
            </p>
            <div className="space-y-3">
              {situations.map((situation, i) => (
                <SituationCard
                  key={situation.id}
                  index={i}
                  situation={situation}
                  isFavorite={favorites.has(situation.id)}
                  onToggleFavorite={() => toggleFavorite(situation.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-600 animate-fade-in-up">
            <MessageCircle size={40} strokeWidth={1.5} className="mb-4 opacity-30" />
            <p className="text-sm font-medium text-slate-500 mb-1">Aucune situation trouv&eacute;e</p>
            <p className="text-xs text-slate-600 text-center mb-5">
              Essaie d&rsquo;autres crit&egrave;res pour voir plus de r&eacute;sultats
            </p>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-sm font-semibold text-slate-300 active:scale-95 transition-all duration-150"
            >
              <ArrowLeft size={15} strokeWidth={2.5} />
              Modifier les crit&egrave;res
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
