import React from "react";
import { Zap, Coffee, BatteryLow } from "lucide-react";

const ENERGY_OPTIONS = [
  {
    value: "Haute",
    label: "Haute",
    icon: Zap,
    inactive: "bg-blue-950/60 text-blue-400 border-blue-800/60",
    active: "bg-blue-600 text-white border-blue-500",
  },
  {
    value: "Basse",
    label: "Basse",
    icon: Coffee,
    inactive: "bg-amber-950/60 text-amber-400 border-amber-800/60",
    active: "bg-amber-500 text-white border-amber-400",
  },
  {
    value: "Fatigué",
    label: "Épuisé",
    icon: BatteryLow,
    inactive: "bg-violet-950/60 text-violet-400 border-violet-800/60",
    active: "bg-violet-600 text-white border-violet-500",
  },
];

export default function EnergySelector({ selected, onChange }) {
  return (
    <div className="flex gap-2">
      {ENERGY_OPTIONS.map(({ value, label, icon: Icon, inactive, active }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            onClick={() => onChange(isActive ? null : value)}
            className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border-2 font-semibold transition-all duration-150 active:scale-95 ${isActive ? `${active} animate-pop` : inactive}`}
          >
            <Icon size={18} strokeWidth={2} />
            <span className="text-xs">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
