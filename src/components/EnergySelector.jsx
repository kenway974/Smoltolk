import React from "react";

// Pastilles neutres : seule la couleur du point trahit le niveau d'énergie.
const ENERGY_OPTIONS = [
  { value: "Haute",   label: "Haute",  dot: "bg-blue-500" },
  { value: "Basse",   label: "Basse",  dot: "bg-amber-400" },
  { value: "Fatigué", label: "Épuisé", dot: "bg-violet-500" },
];

export default function EnergySelector({ selected, onChange }) {
  return (
    <div className="flex gap-2">
      {ENERGY_OPTIONS.map(({ value, label, dot }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            onClick={() => onChange(isActive ? null : value)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border text-sm font-medium transition-all duration-150 active:scale-95 ${
              isActive
                ? "border-stone-900 bg-stone-900 text-white"
                : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${dot}`} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
