import React from "react";
import { Zap, Coffee, BatteryLow } from "lucide-react";

const ENERGY_OPTIONS = [
  { value: "Haute",   label: "Haute",   icon: Zap,        color: "bg-blue-100 text-blue-700 border-blue-300",   activeColor: "bg-blue-600 text-white border-blue-600" },
  { value: "Basse",   label: "Basse",   icon: Coffee,     color: "bg-amber-100 text-amber-700 border-amber-300", activeColor: "bg-amber-500 text-white border-amber-500" },
  { value: "Fatigué", label: "Épuisé",  icon: BatteryLow, color: "bg-violet-100 text-violet-700 border-violet-300", activeColor: "bg-violet-600 text-white border-violet-600" },
];

export default function EnergySelector({ selected, onChange }) {
  return (
    <div className="flex gap-2">
      {ENERGY_OPTIONS.map(({ value, label, icon: Icon, color, activeColor }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            onClick={() => onChange(isActive ? null : value)}
            className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-150 active:scale-95 ${isActive ? activeColor : color}`}
          >
            <Icon size={20} strokeWidth={2} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
