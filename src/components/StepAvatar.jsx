import React from "react";
import { Users, ArrowRight, SmilePlus, Meh, MinusCircle } from "lucide-react";

const AGE_OPTIONS = ["Jeune", "Adulte", "Senior", "Peu importe"];
const GENRE_OPTIONS = ["Homme", "Femme", "Peu importe"];
const VIBE_OPTIONS = [
  {
    value: "Ouvert",
    label: "Ouvert",
    icon: SmilePlus,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    activeColor: "bg-emerald-500 text-white border-emerald-500 shadow-emerald-200 shadow-md",
  },
  {
    value: "Neutre",
    label: "Neutre",
    icon: Meh,
    color: "bg-stone-100 text-stone-600 border-stone-200",
    activeColor: "bg-stone-600 text-white border-stone-600 shadow-stone-200 shadow-md",
  },
  {
    value: "Fermé",
    label: "Fermé",
    icon: MinusCircle,
    color: "bg-rose-50 text-rose-600 border-rose-200",
    activeColor: "bg-rose-500 text-white border-rose-500 shadow-rose-200 shadow-md",
  },
];

function ChipGroup({ options, value, onChange, colorActive, colorInactive }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(isActive ? null : opt)}
            className={`px-4 py-2.5 rounded-2xl border-2 font-bold text-sm transition-all duration-200 active:scale-95 ${
              isActive
                ? colorActive ?? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                : colorInactive ?? "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function StepAvatar({ value = {}, onChange, onNext, onSkip }) {
  const { genre = null, ageGroupe = null, vibe = null } = value || {};

  const update = (key, val) => onChange({ ...value, [key]: val });

  const hasAny = genre || ageGroupe || vibe;

  return (
    <div className="px-4 pb-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-violet-100 text-violet-600">
            <Users size={18} strokeWidth={2.5} />
          </span>
          <h2 className="text-2xl font-black text-stone-900 tracking-tight">Avec qui&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-500 ml-11">
          Décris la personne en face de toi
        </p>
      </div>

      {/* Âge */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">Âge</p>
        <ChipGroup
          options={AGE_OPTIONS}
          value={ageGroupe}
          onChange={(v) => update("ageGroupe", v)}
        />
      </div>

      {/* Genre */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">Genre</p>
        <ChipGroup
          options={GENRE_OPTIONS}
          value={genre}
          onChange={(v) => update("genre", v)}
        />
      </div>

      {/* Vibe */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">Vibe</p>
        <div className="flex gap-2.5">
          {VIBE_OPTIONS.map(({ value: v, label, icon: Icon, color, activeColor }) => {
            const isActive = vibe === v;
            return (
              <button
                key={v}
                onClick={() => update("vibe", isActive ? null : v)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3.5 rounded-2xl border-2 font-bold text-sm transition-all duration-200 active:scale-95 ${
                  isActive ? activeColor : color
                }`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <button
          onClick={onSkip}
          className="flex-1 py-3.5 rounded-2xl border-2 border-stone-200 bg-white text-stone-500 font-bold text-sm transition-all duration-200 active:scale-95 hover:bg-stone-50"
        >
          Passer →
        </button>
        <button
          onClick={onNext}
          disabled={!hasAny}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 active:scale-95 ${
            hasAny
              ? "bg-blue-600 text-white shadow-md shadow-blue-200 hover:bg-blue-700"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          Suivant
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
