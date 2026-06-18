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
      if (energyFilter && s.energie !== energyFilter) return false;
      if (envFilter && s.environnement !== envFilter) return false;
      if (searchText.trim()) {
        const needle   = searchText.toLowerCase();
        const haystack = `${s.environnement} ${s.profil} ${s.theme}`.toLowerCase();
        if (!haystack.includes(needle)) return false;
      }
      return true;
    });
  }, [energyFilter, envFilter, searchText]);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Header (léger, sticky) ── */}
      <header className="sticky top-0 z-20 bg-[#f7f6f3]/90 backdrop-blur-md border-b border-stone-200/70 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <MessageCircle size={20} strokeWidth={2} className="text-stone-800" />
          <h1 className="text-[15px] font-bold tracking-tight text-stone-900">Small Talk Coach</h1>
        </div>
      </header>

      {/* ── Zone de filtres ── */}
      <div className="px-5 pt-4 space-y-3">
        <div>
          <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">Mon énergie</p>
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

      {/* ── Comptage discret ── */}
      <div className="px-5 pt-4 pb-1">
        <p className="text-xs text-stone-400">
          {filteredSituations.length === SITUATIONS_DATA.length
            ? `${SITUATIONS_DATA.length} situations`
            : `${filteredSituations.length} sur ${SITUATIONS_DATA.length}`}
        </p>
      </div>

      {/* ── Liste des cartes ── */}
      <main className="flex-1 px-5 pb-10 space-y-3 pt-1">
        {filteredSituations.length > 0 ? (
          filteredSituations.map(situation => (
            <SituationCard key={situation.id} situation={situation} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400">
            <MessageCircle size={36} strokeWidth={1.5} className="mb-3 opacity-30" />
            <p className="text-sm font-medium text-stone-500">Aucune situation trouvée</p>
            <button
              onClick={resetFilters}
              className="mt-3 text-xs text-stone-600 font-semibold underline underline-offset-2 hover:text-stone-900"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </main>

    </div>
  );
}
