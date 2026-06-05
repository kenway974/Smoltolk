import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const EMOJI_MAP = {
  "Mode": "👗",
  "Gastronomie": "🍽️",
  "Sport": "⚽",
  "Voyage": "✈️",
  "Tech": "💻",
  "Culture": "🎭",
  "Musique": "🎵",
  "Nature": "🌿",
  "Travail": "💼",
  "Famille": "👨‍👩‍👧",
  "Bien-être": "🧘",
  "Art": "🎨",
  "Cinéma": "🎬",
  "Sortie": "🍸",
  "Quotidien": "☕",
  "Philosophie": "🧠",
  "Actualité": "📰",
  "Débat": "⚡",
  "Insolite": "🦄",
  "Anecdote": "📖",
  "Sciences": "🔬",
  "Humour": "😂",
  "Développement": "🌱",
};

export default function StepInteret({ value, onChange, onNext, onSkip, options = [] }) {
  return (
    <div className="px-4 pb-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-rose-100 text-rose-500">
            <Sparkles size={18} strokeWidth={2.5} />
          </span>
          <h2 className="text-2xl font-black text-stone-900 tracking-tight">Quel sujet&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-500 ml-11">
          Un intérêt en commun ou un sujet à creuser
        </p>
      </div>

      {/* Grid 3 columns */}
      <div className="grid grid-cols-3 gap-2">
        {options.map((interet) => {
          const isActive = value === interet;
          const emoji = EMOJI_MAP[interet] ?? "✨";
          return (
            <button
              key={interet}
              onClick={() => onChange(isActive ? null : interet)}
              className={`flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-2xl border-2 font-bold text-xs transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                  : "bg-white text-stone-700 border-stone-200 hover:border-stone-300"
              }`}
            >
              <span className="text-xl leading-none">{emoji}</span>
              <span className="text-center leading-tight">{interet}</span>
            </button>
          );
        })}
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
          disabled={!value}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 active:scale-95 ${
            value
              ? "bg-blue-600 text-white shadow-md shadow-blue-200 hover:bg-blue-700"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          Voir mes conversations
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
