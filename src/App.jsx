import React, { useState, useMemo } from "react";
import { MessageCircle, SlidersHorizontal, ChevronDown, RotateCcw } from "lucide-react";
import { SITUATIONS_DATA } from "./data/situations";
import EnergySelector from "./components/EnergySelector";
import MomentSelector from "./components/MomentSelector";
import ProfilSelector, { matchesProfil } from "./components/ProfilSelector";
import FilterBar from "./components/FilterBar";
import SituationCard from "./components/SituationCard";

const ALL_ENVIRONMENTS = [...new Set(SITUATIONS_DATA.map(s => s.environnement))].sort();
const ALL_INTERETS    = [...new Set(SITUATIONS_DATA.map(s => s.centreInteret))].sort();

export default function App() {
  const [energyFilter, setEnergyFilter]   = useState(null);
  const [momentFilter, setMomentFilter]   = useState(null);
  const [profilFilter, setProfilFilter]   = useState(null);
  const [interetFilter, setInteretFilter] = useState("");
  const [searchText, setSearchText]       = useState("");
  const [envFilter, setEnvFilter]         = useState("");
  const [filtersOpen, setFiltersOpen]     = useState(false);

  const activeFilterCount = [
    energyFilter !== null,
    momentFilter !== null,
    profilFilter !== null,
    interetFilter !== "",
    envFilter !== "",
    searchText !== "",
  ].filter(Boolean).length;

  const hasActiveFilters = activeFilterCount > 0;

  const resetFilters = () => {
    setEnergyFilter(null);
    setMomentFilter(null);
    setProfilFilter(null);
    setInteretFilter("");
    setSearchText("");
    setEnvFilter("");
  };

  const filteredSituations = useMemo(() => {
    return SITUATIONS_DATA.filter(s => {
      if (energyFilter && s.energie !== energyFilter) return false;
      if (momentFilter && s.moment !== momentFilter) return false;
      if (profilFilter && !matchesProfil(s.profil, profilFilter)) return false;
      if (interetFilter && s.centreInteret !== interetFilter) return false;
      if (envFilter && s.environnement !== envFilter) return false;
      if (searchText.trim()) {
        const needle   = searchText.toLowerCase();
        const haystack = `${s.environnement} ${s.profil} ${s.theme} ${s.centreInteret}`.toLowerCase();
        if (!haystack.includes(needle)) return false;
      }
      return true;
    });
  }, [energyFilter, momentFilter, profilFilter, interetFilter, envFilter, searchText]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-100">

      {/* ── Header ── */}
      <header className="sticky top-0 z-20 bg-stone-900 text-white px-5 pt-5 pb-4 shadow-xl">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2.5">
            <MessageCircle size={20} strokeWidth={2} className="text-blue-400" />
            <h1 className="text-base font-black tracking-tight">Small Talk Coach</h1>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-stone-700 text-stone-200 font-bold">
            {filteredSituations.length}/{SITUATIONS_DATA.length}
          </span>
        </div>

        {/* ── Filter toggle row ── */}
        <div className="flex items-center justify-between mt-2.5">
          <button
            onClick={() => setFiltersOpen(v => !v)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-800 text-stone-200 text-xs font-bold active:scale-95 transition-all duration-150"
          >
            <SlidersHorizontal size={13} strokeWidth={2.5} />
            Filtres
            {activeFilterCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-xs font-black leading-none">
                {activeFilterCount}
              </span>
            )}
            <ChevronDown
              size={13}
              strokeWidth={2.5}
              className={`transition-transform duration-200 ${filtersOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-900/60 text-rose-300 text-xs font-bold active:scale-95 transition-all duration-150"
            >
              <RotateCcw size={12} strokeWidth={2.5} />
              Réinitialiser
            </button>
          )}
        </div>
      </header>

      {/* ── Collapsible filter panel ── */}
      {filtersOpen && (
        <div className="sticky top-[100px] z-10 bg-stone-100/97 backdrop-blur-sm px-5 pt-4 pb-5 border-b border-stone-200 space-y-4 animate-expand-in shadow-md">

          <div>
            <p className="text-xs font-black text-stone-500 uppercase tracking-widest mb-2.5">Mon Énergie</p>
            <EnergySelector selected={energyFilter} onChange={setEnergyFilter} />
          </div>

          <div>
            <p className="text-xs font-black text-stone-500 uppercase tracking-widest mb-2.5">Moment de la journée</p>
            <MomentSelector selected={momentFilter} onChange={setMomentFilter} />
          </div>

          <div>
            <p className="text-xs font-black text-stone-500 uppercase tracking-widest mb-2.5">Avec qui ?</p>
            <ProfilSelector selected={profilFilter} onChange={setProfilFilter} />
          </div>

          <FilterBar
            searchText={searchText}
            onSearchChange={setSearchText}
            envFilter={envFilter}
            onEnvChange={setEnvFilter}
            environments={ALL_ENVIRONMENTS}
            interetFilter={interetFilter}
            onInteretChange={setInteretFilter}
            interets={ALL_INTERETS}
            onReset={resetFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>
      )}

      {/* ── Cards ── */}
      <main className="flex-1 px-5 pb-12 pt-4 space-y-4">
        {filteredSituations.length > 0 ? (
          filteredSituations.map((situation, index) => (
            <SituationCard key={situation.id} situation={situation} index={index} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-stone-400 animate-fade-in">
            <MessageCircle size={44} strokeWidth={1.5} className="mb-4 opacity-30" />
            <p className="text-sm font-bold text-stone-500">Aucune situation trouvée</p>
            <p className="text-xs mt-1.5 text-stone-400">Essayez d'élargir vos filtres</p>
            <button
              onClick={resetFilters}
              className="mt-4 text-xs text-blue-600 font-bold underline underline-offset-2"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </main>

    </div>
  );
}
