import React from "react";
import { Search, ChevronDown, RotateCcw, Star } from "lucide-react";

export default function FilterBar({
  searchText,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  categories,
  showFavoritesOnly,
  onToggleFavorites,
  favoritesCount,
  onReset,
  hasActiveFilters,
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={searchText}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="Lieu, profil, thème…"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
        />
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <select
            value={categoryFilter}
            onChange={e => onCategoryChange(e.target.value)}
            className="w-full appearance-none pl-3 pr-8 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
          >
            <option value="">Toutes les catégories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        </div>

        <button
          onClick={onToggleFavorites}
          className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-sm font-medium active:scale-95 transition-all duration-150 ${
            showFavoritesOnly
              ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
              : "bg-slate-800 border-slate-700 text-slate-500"
          }`}
        >
          <Star
            size={15}
            strokeWidth={showFavoritesOnly ? 0 : 2}
            fill={showFavoritesOnly ? "currentColor" : "none"}
          />
          {favoritesCount > 0 && (
            <span className="text-xs font-bold">{favoritesCount}</span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 px-3 py-2.5 rounded-xl border border-rose-800/60 bg-rose-950/50 text-rose-400 text-sm font-medium active:scale-95 transition-all duration-150"
          >
            <RotateCcw size={14} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
}
