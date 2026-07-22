import React from "react";
import { User, Users, ArrowRight, SmilePlus, Meh, MinusCircle } from "lucide-react";

const MOI_AGE     = ["Jeune", "Adulte", "Senior"];
const MOI_GENRE   = ["Homme", "Femme"];
const AUTRE_AGE   = ["Jeune", "Adulte", "Senior", "Peu importe"];
const AUTRE_GENRE = ["Homme", "Femme", "Peu importe"];

const VIBE_OPTIONS = [
  { value: "Ouvert", label: "Ouvert", icon: SmilePlus,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    activeColor: "bg-emerald-500 text-white border-emerald-500 shadow-emerald-200 shadow-md" },
  { value: "Neutre", label: "Neutre", icon: Meh,
    color: "bg-stone-100 text-stone-600 border-stone-200",
    activeColor: "bg-stone-600 text-white border-stone-600 shadow-stone-200 shadow-md" },
  { value: "Fermé", label: "Fermé", icon: MinusCircle,
    color: "bg-rose-50 text-rose-600 border-rose-200",
    activeColor: "bg-rose-500 text-white border-rose-500 shadow-rose-200 shadow-md" },
];

function ChipGroup({ options, value, onChange, activeColor }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(isActive ? null : opt)}
            className={`px-3.5 py-2 rounded-2xl border-2 font-bold text-sm transition-all duration-200 active:scale-95 ${
              isActive
                ? activeColor ?? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export default function StepDuo({ moi = {}, avatar = {}, onChangeMoi, onChangeAvatar, onNext, onSkip }) {
  const updateMoi    = (key, val) => onChangeMoi({ ...moi, [key]: val });
  const updateAvatar = (key, val) => onChangeAvatar({ ...avatar, [key]: val });

  const hasAny = moi.ageGroupe || moi.genre || avatar.ageGroupe || avatar.genre || avatar.vibe;

  return (
    <div className="px-4 pb-8 flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-violet-100 text-violet-600">
            <Users size={18} strokeWidth={2.5} />
          </span>
          <h2 className="text-2xl font-black text-stone-900 tracking-tight">Qui parle à qui&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-500 ml-11">
          Toi d'un côté, la personne en face de l'autre
        </p>
      </div>

      {/* ── MOI ── */}
      <div className="rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-indigo-500 text-white">
            <User size={15} strokeWidth={2.5} />
          </span>
          <p className="text-sm font-black text-indigo-900 uppercase tracking-wide">Moi</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest">Âge</p>
          <ChipGroup options={MOI_AGE} value={moi.ageGroupe}
            onChange={(v) => updateMoi("ageGroupe", v)}
            activeColor="bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest">Genre</p>
          <ChipGroup options={MOI_GENRE} value={moi.genre}
            onChange={(v) => updateMoi("genre", v)}
            activeColor="bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200" />
        </div>
      </div>

      {/* ── EN FACE ── */}
      <div className="rounded-3xl border-2 border-violet-200 bg-violet-50/50 p-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-violet-500 text-white">
            <User size={15} strokeWidth={2.5} />
          </span>
          <p className="text-sm font-black text-violet-900 uppercase tracking-wide">En face</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-bold text-violet-400 uppercase tracking-widest">Âge</p>
          <ChipGroup options={AUTRE_AGE} value={avatar.ageGroupe}
            onChange={(v) => updateAvatar("ageGroupe", v)}
            activeColor="bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-bold text-violet-400 uppercase tracking-widest">Genre</p>
          <ChipGroup options={AUTRE_GENRE} value={avatar.genre}
            onChange={(v) => updateAvatar("genre", v)}
            activeColor="bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-bold text-violet-400 uppercase tracking-widest">Vibe</p>
          <div className="flex gap-2.5">
            {VIBE_OPTIONS.map(({ value: v, label, icon: Icon, color, activeColor }) => {
              const isActive = avatar.vibe === v;
              return (
                <button
                  key={v}
                  onClick={() => updateAvatar("vibe", isActive ? null : v)}
                  className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-2xl border-2 font-bold text-sm transition-all duration-200 active:scale-95 ${
                    isActive ? activeColor : color
                  }`}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-1">
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
