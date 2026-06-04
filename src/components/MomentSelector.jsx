import React from "react";
import { Sunrise, Sun, CloudSun, Sunset, Moon } from "lucide-react";

const MOMENT_OPTIONS = [
  { value: "Matin",      label: "Matin",      icon: Sunrise,  color: "bg-orange-50 text-orange-700 border-orange-200",   activeColor: "bg-orange-500 text-white border-orange-500 shadow-orange-200 shadow-md" },
  { value: "Midi",       label: "Midi",        icon: Sun,      color: "bg-yellow-50 text-yellow-700 border-yellow-200",   activeColor: "bg-yellow-500 text-white border-yellow-500 shadow-yellow-200 shadow-md" },
  { value: "Après-midi", label: "Après-midi",  icon: CloudSun, color: "bg-sky-50 text-sky-700 border-sky-200",            activeColor: "bg-sky-500 text-white border-sky-500 shadow-sky-200 shadow-md" },
  { value: "Soir",       label: "Soir",        icon: Sunset,   color: "bg-indigo-50 text-indigo-700 border-indigo-200",   activeColor: "bg-indigo-600 text-white border-indigo-600 shadow-indigo-200 shadow-md" },
  { value: "Nuit",       label: "Nuit",        icon: Moon,     color: "bg-slate-100 text-slate-600 border-slate-200",     activeColor: "bg-slate-700 text-white border-slate-700 shadow-slate-300 shadow-md" },
];

export default function MomentSelector({ selected, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      {MOMENT_OPTIONS.map(({ value, label, icon: Icon, color, activeColor }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            onClick={() => onChange(isActive ? null : value)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 font-bold text-xs transition-all duration-200 active:scale-95 ${isActive ? activeColor : color}`}
          >
            <Icon size={15} strokeWidth={isActive ? 2.5 : 2} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
