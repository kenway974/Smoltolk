import React, { useState, useMemo } from "react";
import { MessageCircle } from "lucide-react";
import { SITUATIONS_DATA } from "./data/situations";
import EnergySelector from "./components/EnergySelector";
import FilterBar from "./components/FilterBar";
import SituationCard from "./components/SituationCard";

// Deduplicated, sorted list of environments for the dropdown
const ALL_ENVIRONMENTS = [...new Set(SITUATIONS_DATA.map(s => s.environnement))].sort();

export default function App() {
  const [energyFilter, setEnergyFilter] = useState(null);
  const [searchText, setSearchText]     = useState("");
  const [envFilter, setEnvFilter]       = useState("");

  const hasActiveFilters = energyFilter !== null || searchText !== "" || envFilter !== "";

  const resetFilters = () => {
    setEnergyFilter(null);
    setSearchText("");
    setEnvFilter("");
  };

  // Cumulative filter: all active conditions must match (AND logic)
  // useMemo avoids re-scanning the array on unrelated renders
  const filteredSituations = useMemo(() => {
    return SITUATIONS_DATA.filter(s => {
      // 1. Energy quick-select
      if (energyFilter && s.energie !== energyFilter) return false;

      // 2. Environment dropdown
      if (envFilter && s.environnement !== envFilter) return false;

      // 3. Free-text across three searchable fields
      if (searchText.trim()) {
        const needle    = searchText.toLowerCase();
        const haystack  = `${s.environnement} ${s.profil} ${s.theme}`.toLowerCase();
        if (!haystack.includes(needle)) return false;
      }

      return true;
    });
  }, [energyFilter, envFilter, searchText]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-100">

      {/* ── Fixed Header ── */}
      <header className="sticky top-0 z-20 bg-stone-900 text-white px-4 pt-5 pb-4 shadow-lg">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <MessageCircle size={22} strokeWidth={2} className="text-blue-400" />
            <h1 className="text-lg font-bold tracking-tight">Small Talk Coach</h1>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-stone-700 text-stone-300 font-medium">
            {SITUATIONS_DATA.length} situations
          </span>
        </div>
        <p className="text-xs text-stone-400">Scripts de terrain pour chaque micro-situation</p>
      </header>

      {/* ── Sticky filter zone ── */}
      <div className="sticky top-[76px] z-10 bg-stone-100 px-4 pt-4 pb-3 border-b border-stone-200 space-y-3">

        <div>
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Mon Énergie</p>
          <EnergySelector selected={energyFilter} onChange={setEnergyFilter} />
        </div>

        <FilterBar
          searchText={searchText}
          onSearchChange={setSearchText}
          envFilter={envFilter}
          onEnvChange={setEnvFilter}
          environments={ALL_ENVIRONMENTS}
          onReset={resetFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* ── Result count ── */}
      <div className="px-4 pt-3 pb-1">
        <p className="text-xs text-stone-500">
          {filteredSituations.length === SITUATIONS_DATA.length
            ? `Toutes les ${SITUATIONS_DATA.length} situations`
            : `${filteredSituations.length} situation${filteredSituations.length !== 1 ? "s" : ""} trouvée${filteredSituations.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      {/* ── Card stream ── */}
      <main className="flex-1 px-4 pb-8 space-y-3 pt-2">
        {filteredSituations.length > 0 ? (
          filteredSituations.map(situation => (
            <SituationCard key={situation.id} situation={situation} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-stone-400">
            <MessageCircle size={40} strokeWidth={1.5} className="mb-3 opacity-40" />
            <p className="text-sm font-medium">Aucune situation trouvée</p>
            <p className="text-xs mt-1">Modifiez vos filtres ou</p>
            <button
              onClick={resetFilters}
              className="mt-3 text-xs text-blue-600 font-semibold underline underline-offset-2"
            >
              réinitialisez les filtres
            </button>
          </div>
        )}
      </main>

    </div>
  );
}
