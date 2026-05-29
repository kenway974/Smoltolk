import React, { useState, useMemo, useCallback } from "react";
import { MessageCircle, Shuffle, X } from "lucide-react";
import { SITUATIONS_DATA } from "./data/situations";
import { useFavorites } from "./hooks/useFavorites";
import EnergySelector from "./components/EnergySelector";
import FilterBar from "./components/FilterBar";
import SituationCard from "./components/SituationCard";

const ALL_CATEGORIES = [...new Set(SITUATIONS_DATA.map(s => s.categorie))].sort();

export default function App() {
  const [energyFilter, setEnergyFilter] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [challengeId, setChallengeId] = useState(null);

  const { favorites, toggleFavorite } = useFavorites();

  const hasActiveFilters =
    energyFilter !== null ||
    searchText !== "" ||
    categoryFilter !== "" ||
    showFavoritesOnly;

  const resetFilters = useCallback(() => {
    setEnergyFilter(null);
    setSearchText("");
    setCategoryFilter("");
    setShowFavoritesOnly(false);
    setChallengeId(null);
  }, []);

  const filteredSituations = useMemo(() => {
    return SITUATIONS_DATA.filter(s => {
      if (energyFilter && s.energie !== energyFilter) return false;
      if (categoryFilter && s.categorie !== categoryFilter) return false;
      if (showFavoritesOnly && !favorites.has(s.id)) return false;
      if (searchText.trim()) {
        const needle = searchText.toLowerCase();
        const haystack = `${s.environnement} ${s.profil} ${s.theme} ${s.categorie} ${s.objectif}`.toLowerCase();
        if (!haystack.includes(needle)) return false;
      }
      return true;
    });
  }, [energyFilter, categoryFilter, searchText, showFavoritesOnly, favorites]);

  const handleRandomChallenge = useCallback(() => {
    if (filteredSituations.length === 0) return;
    const pool = filteredSituations.filter(s => s.id !== challengeId);
    const arr = pool.length > 0 ? pool : filteredSituations;
    const random = arr[Math.floor(Math.random() * arr.length)];
    setChallengeId(random.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [filteredSituations, challengeId]);

  const challengeSituation = challengeId
    ? SITUATIONS_DATA.find(s => s.id === challengeId)
    : null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">

      {/* Header */}
      <header className="sticky top-0 z-20 bg-slate-950 border-b border-slate-800/80 px-4 pt-5 pb-3">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-center gap-2">
            <MessageCircle size={21} strokeWidth={2} className="text-blue-400" />
            <h1 className="text-base font-bold tracking-tight">Small Talk Universel</h1>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-500 font-medium">
            {SITUATIONS_DATA.length} situations
          </span>
        </div>
        <p className="text-xs text-slate-600">Scripts de terrain pour chaque micro-situation</p>
      </header>

      {/* Sticky filters */}
      <div className="sticky top-[68px] z-10 bg-slate-950 border-b border-slate-800/80 px-4 pt-3 pb-3 space-y-2.5">
        <div>
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Mon Énergie</p>
          <EnergySelector selected={energyFilter} onChange={setEnergyFilter} />
        </div>
        <FilterBar
          searchText={searchText}
          onSearchChange={setSearchText}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          categories={ALL_CATEGORIES}
          showFavoritesOnly={showFavoritesOnly}
          onToggleFavorites={() => setShowFavoritesOnly(v => !v)}
          favoritesCount={favorites.size}
          onReset={resetFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Challenge banner */}
      {challengeSituation && (
        <div className="mx-4 mt-4">
          <div className="flex items-center gap-2 mb-2 px-1">
            <Shuffle size={13} className="text-yellow-400" />
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
              Défi Aléatoire
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

      {/* Count + shuffle row */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <p className="text-xs text-slate-600">
          {filteredSituations.length === SITUATIONS_DATA.length
            ? `${SITUATIONS_DATA.length} situations`
            : `${filteredSituations.length} situation${filteredSituations.length !== 1 ? "s" : ""}`}
        </p>
        <button
          onClick={handleRandomChallenge}
          disabled={filteredSituations.length === 0}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold active:scale-95 active:bg-yellow-500/20 transition-all duration-150 disabled:opacity-30"
        >
          <Shuffle size={12} strokeWidth={2.5} />
          Défi Aléatoire
        </button>
      </div>

      {/* Card list */}
      <main className="flex-1 px-4 pb-10 space-y-3 pt-2">
        {filteredSituations.length > 0 ? (
          filteredSituations.map(situation => (
            <SituationCard
              key={situation.id}
              situation={situation}
              isFavorite={favorites.has(situation.id)}
              onToggleFavorite={() => toggleFavorite(situation.id)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-slate-600">
            <MessageCircle size={36} strokeWidth={1.5} className="mb-3 opacity-30" />
            <p className="text-sm font-medium text-slate-500">Aucune situation trouvée</p>
            <button
              onClick={resetFilters}
              className="mt-3 text-xs text-blue-400 font-semibold"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </main>

    </div>
  );
}
