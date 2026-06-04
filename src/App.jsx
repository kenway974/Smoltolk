import React, { useState, useMemo } from "react";
import { MessageCircle } from "lucide-react";
import { SITUATIONS_DATA } from "./data/situations";
import EnergySelector from "./components/EnergySelector";
import MomentSelector from "./components/MomentSelector";
import FilterBar from "./components/FilterBar";
import SituationCard from "./components/SituationCard";

const ALL_ENVIRONMENTS = [...new Set(SITUATIONS_DATA.map(s => s.environnement))].sort();
const ALL_INTERETS    = [...new Set(SITUATIONS_DATA.map(s => s.centreInteret))].sort();

export default function App() {
  const [energyFilter, setEnergyFilter]   = useState(null);
  const [momentFilter, setMomentFilter]   = useState(null);
  const [interetFilter, setInteretFilter] = useState("");
  const [searchText, setSearchText]       = useState("");
  const [envFilter, setEnvFilter]         = useState("");

  const hasActiveFilters = energyFilter !== null || momentFilter !== null || interetFilter !== "" || searchText !== "" || envFilter !== "";

  const resetFilters = () => {
    setEnergyFilter(null);
    setMomentFilter(null);
    setInteretFilter("");
    setSearchText("");
    setEnvFilter("");
  };

  const filteredSituations = useMemo(() => {
    return SITUATIONS_DATA.filter(s => {
      if (energyFilter && s.energie !== energyFilter) return false;
      if (momentFilter && s.moment !== momentFilter) return false;
      if (interetFilter && s.centreInteret !== interetFilter) return false;
      if (envFilter && s.environnement !== envFilter) return false;
      if (searchText.trim()) {
        const needle   = searchText.toLowerCase();
        const haystack = `${s.environnement} ${s.profil} ${s.theme} ${s.centreInteret}`.toLowerCase();
        if (!haystack.includes(needle)) return false;
      }
      return true;
    });
  }, [energyFilter, momentFilter, interetFilter, envFilter, searchText]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-100">

      {/* ── Header ── */}
      <header className="sticky top-0 z-20 bg-stone-900 text-white px-5 pt-6 pb-5 shadow-xl">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2.5">
            <MessageCircle size={22} strokeWidth={2} className="text-blue-400" />
            <h1 className="text-lg font-black tracking-tight">Small Talk Coach</h1>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-stone-700 text-stone-200 font-bold">
            {SITUATIONS_DATA.length} situations
          </span>
        </div>
        <p className="text-xs text-stone-400 font-medium">Scripts de terrain pour chaque micro-situation</p>
      </header>

      {/* ── Sticky filters ── */}
      <div className="sticky top-[85px] z-10 bg-stone-100/95 backdrop-blur-sm px-5 pt-5 pb-4 border-b border-stone-200 space-y-4">

        <div>
          <p className="text-xs font-black text-stone-500 uppercase tracking-widest mb-2.5">Mon Énergie</p>
          <EnergySelector selected={energyFilter} onChange={setEnergyFilter} />
        </div>

        <div>
          <p className="text-xs font-black text-stone-500 uppercase tracking-widest mb-2.5">Moment de la journée</p>
          <MomentSelector selected={momentFilter} onChange={setMomentFilter} />
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

      {/* ── Result count ── */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-xs font-semibold text-stone-500">
          {filteredSituations.length === SITUATIONS_DATA.length
            ? `Toutes les ${SITUATIONS_DATA.length} situations`
            : `${filteredSituations.length} situation${filteredSituations.length !== 1 ? "s" : ""} trouvée${filteredSituations.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      {/* ── Cards ── */}
      <main className="flex-1 px-5 pb-12 pt-2 space-y-4">
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
