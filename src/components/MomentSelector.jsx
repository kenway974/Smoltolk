import React from "react";
import { Sunrise, Sun, CloudSun, Sunset, Moon } from "lucide-react";

const MOMENT_OPTIONS = [
  { value: "Matin",      label: "Matin",      icon: Sunrise,  color: "bg-orange-100 text-orange-700 border-orange-300",   activeColor: "bg-orange-500 text-white border-orange-500" },
  { value: "Midi",       label: "Midi",        icon: Sun,      color: "bg-yellow-100 text-yellow-700 border-yellow-300",   activeColor: "bg-yellow-500 text-white border-yellow-500" },
  { value: "Après-midi", label: "Après-midi",  icon: CloudSun, color: "bg-sky-100 text-sky-700 border-sky-300",            activeColor: "bg-sky-500 text-white border-sky-500" },
  { value: "Soir",       label: "Soir",        icon: Sunset,   color: "bg-indigo-100 text-indigo-700 border-indigo-300",   activeColor: "bg-indigo-600 text-white border-indigo-600" },
  { value: "Nuit",       label: "Nuit",        icon: Moon,     color: "bg-slate-200 text-slate-600 border-slate-300",      activeColor: "bg-slate-700 text-white border-slate-700" },
];

export default function MomentSelector({ selected, onChange }) {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-0.5">
      {MOMENT_OPTIONS.map(({ value, label, icon: Icon, color, activeColor }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            onClick={() => onChange(isActive ? null : value)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl border-2 font-semibold text-xs transition-all duration-150 active:scale-95 ${isActive ? activeColor : color}`}
          >
            <Icon size={14} strokeWidth={2} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
