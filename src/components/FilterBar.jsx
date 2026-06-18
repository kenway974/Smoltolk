import React from "react";
import { Search, ChevronDown, X } from "lucide-react";

export default function FilterBar({ searchText, onSearchChange, envFilter, onEnvChange, environments, onReset, hasActiveFilters }) {
  return (
    <div className="flex flex-col gap-2">
      {/* Search input */}
      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" strokeWidth={2} />
        <input
          type="text"
          value={searchText}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Chercher un lieu, un profil, un thème…"
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition"
        />
      </div>

      {/* Environment dropdown + reset */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <select
            value={envFilter}
            onChange={e => onEnvChange(e.target.value)}
            className="w-full appearance-none pl-3.5 pr-9 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition"
          >
            <option value="">Tous les environnements</option>
            {environments.map(env => (
              <option key={env} value={env}>{env}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 px-3 py-2.5 rounded-xl text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors"
          >
            <X size={15} strokeWidth={2.5} />
            Effacer
          </button>
        )}
      </div>
    </div>
  );
}
