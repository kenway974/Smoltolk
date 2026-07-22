import React from "react";
import { User, Users, ArrowRight, SmilePlus, Meh, MinusCircle } from "lucide-react";

const MOI_AGE     = ["Jeune", "Adulte", "Senior"];
const MOI_GENRE   = ["Homme", "Femme"];
const AUTRE_AGE   = ["Jeune", "Adulte", "Senior", "Peu importe"];
const AUTRE_GENRE = ["Homme", "Femme", "Peu importe"];

const VIBE_OPTIONS = [
  { value: "Ouvert", label: "Ouvert", icon: SmilePlus },
  { value: "Neutre", label: "Neutre", icon: Meh },
  { value: "Fermé", label: "Fermé", icon: MinusCircle },
];

function ChipGroup({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(isActive ? null : opt)}
            className={`px-3.5 py-2 rounded-xl border text-sm font-medium transition-colors duration-200 active:scale-[0.98] ${
              isActive
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Panel({ icon: Icon, label, children }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 flex flex-col gap-3.5">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-stone-100 text-stone-400">
          <Icon size={13} strokeWidth={2} />
        </span>
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-[0.12em]">{label}</p>
      </div>
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-medium text-stone-400 uppercase tracking-[0.1em]">{label}</p>
      {children}
    </div>
  );
}

export default function StepDuo({ moi = {}, avatar = {}, onChangeMoi, onChangeAvatar, onNext, onSkip }) {
  const updateMoi    = (key, val) => onChangeMoi({ ...moi, [key]: val });
  const updateAvatar = (key, val) => onChangeAvatar({ ...avatar, [key]: val });

  const hasAny = moi.ageGroupe || moi.genre || avatar.ageGroupe || avatar.genre || avatar.vibe;

  return (
    <div className="px-5 pb-8 flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-stone-100 text-stone-400">
            <Users size={16} strokeWidth={2} />
          </span>
          <h2 className="text-xl font-semibold text-stone-900 tracking-tight">Qui parle à qui&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-400 ml-[42px]">Toi d'un côté, la personne en face de l'autre</p>
      </div>

      <Panel icon={User} label="Moi">
        <Field label="Âge">
          <ChipGroup options={MOI_AGE} value={moi.ageGroupe} onChange={(v) => updateMoi("ageGroupe", v)} />
        </Field>
        <Field label="Genre">
          <ChipGroup options={MOI_GENRE} value={moi.genre} onChange={(v) => updateMoi("genre", v)} />
        </Field>
      </Panel>

      <Panel icon={Users} label="En face">
        <Field label="Âge">
          <ChipGroup options={AUTRE_AGE} value={avatar.ageGroupe} onChange={(v) => updateAvatar("ageGroupe", v)} />
        </Field>
        <Field label="Genre">
          <ChipGroup options={AUTRE_GENRE} value={avatar.genre} onChange={(v) => updateAvatar("genre", v)} />
        </Field>
        <Field label="Vibe">
          <div className="flex gap-2">
            {VIBE_OPTIONS.map(({ value: v, label, icon: Icon }) => {
              const isActive = avatar.vibe === v;
              return (
                <button
                  key={v}
                  onClick={() => updateAvatar("vibe", isActive ? null : v)}
                  className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border text-sm font-medium transition-colors duration-200 active:scale-[0.98] ${
                    isActive
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </Field>
      </Panel>

      {/* Actions */}
      <div className="flex gap-2.5 mt-1">
        <button
          onClick={onSkip}
          className="flex-1 py-3.5 rounded-xl border border-stone-200 bg-white text-stone-400 font-medium text-sm transition-colors duration-200 active:scale-[0.98] hover:bg-stone-50"
        >
          Passer
        </button>
        <button
          onClick={onNext}
          disabled={!hasAny}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200 active:scale-[0.98] ${
            hasAny ? "bg-stone-900 text-white hover:bg-stone-800" : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          Suivant
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
