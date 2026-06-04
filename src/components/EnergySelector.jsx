import React from "react";
import { Zap, Coffee, BatteryLow } from "lucide-react";

const ENERGY_OPTIONS = [
  { value: "Haute",   label: "Haute",  icon: Zap,        color: "bg-blue-50 text-blue-700 border-blue-200",     activeColor: "bg-blue-600 text-white border-blue-600 shadow-blue-200 shadow-md" },
  { value: "Basse",   label: "Basse",  icon: Coffee,     color: "bg-amber-50 text-amber-700 border-amber-200",  activeColor: "bg-amber-500 text-white border-amber-500 shadow-amber-200 shadow-md" },
  { value: "Fatigué", label: "Épuisé", icon: BatteryLow, color: "bg-violet-50 text-violet-700 border-violet-200", activeColor: "bg-violet-600 text-white border-violet-600 shadow-violet-200 shadow-md" },
];

export default function EnergySelector({ selected, onChange }) {
  return (
    <div className="flex gap-2.5">
      {ENERGY_OPTIONS.map(({ value, label, icon: Icon, color, activeColor }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            onClick={() => onChange(isActive ? null : value)}
            className={`flex-1 flex flex-col items-center gap-1.5 py-3.5 rounded-2xl border-2 font-bold text-sm transition-all duration-200 active:scale-95 ${isActive ? activeColor : color}`}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
