import React from "react";
import { Search, ChevronDown, RotateCcw } from "lucide-react";

export default function FilterBar({ searchText, onSearchChange, envFilter, onEnvChange, environments, interetFilter, onInteretChange, interets, onReset, hasActiveFilters }) {
  return (
    <div className="flex flex-col gap-2.5">

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" strokeWidth={2} />
        <input
          type="text"
          value={searchText}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Chercher par lieu, profil, thème…"
          className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-stone-200 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-0 focus:border-blue-400 transition-colors duration-200"
        />
      </div>

      {/* Dropdowns */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <select
            value={envFilter}
            onChange={e => onEnvChange(e.target.value)}
            className={`w-full appearance-none pl-3.5 pr-8 py-3 rounded-2xl border-2 text-sm transition-colors duration-200 focus:outline-none ${
              envFilter
                ? "border-blue-400 bg-blue-50 text-blue-800 font-semibold"
                : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <option value="">Tous les lieux</option>
            {environments.map(env => (
              <option key={env} value={env}>{env}</option>
            ))}
          </select>
          <ChevronDown size={15} className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ${envFilter ? "text-blue-500" : "text-stone-400"}`} />
        </div>

        <div className="relative flex-1">
          <select
            value={interetFilter}
            onChange={e => onInteretChange(e.target.value)}
            className={`w-full appearance-none pl-3.5 pr-8 py-3 rounded-2xl border-2 text-sm transition-colors duration-200 focus:outline-none ${
              interetFilter
                ? "border-violet-400 bg-violet-50 text-violet-800 font-semibold"
                : "border-stone-200 bg-white text-stone-600"
            }`}
          >
            <option value="">Tous les intérêts</option>
            {interets.map(i => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
          <ChevronDown size={15} className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ${interetFilter ? "text-violet-500" : "text-stone-400"}`} />
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-3 rounded-2xl border-2 border-rose-300 bg-rose-50 text-rose-600 text-sm font-bold active:scale-95 transition-all duration-200 hover:bg-rose-100"
          >
            <RotateCcw size={14} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
}
