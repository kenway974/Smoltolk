import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const EMOJI_MAP = {
  "Mode":         "👗",
  "Gastronomie":  "🍽️",
  "Sport":        "⚽",
  "Voyage":       "✈️",
  "Tech":         "💻",
  "Culture":      "🎭",
  "Musique":      "🎵",
  "Nature":       "🌿",
  "Travail":      "💼",
  "Famille":      "👨‍👩‍👧",
  "Bien-être":    "🧘",
  "Art":          "🎨",
  "Cinéma":       "🎬",
  "Sortie":       "🍸",
  "Quotidien":    "☕",
  "Philosophie":  "🧠",
  "Actualité":    "📰",
  "Débat":        "⚡",
  "Insolite":     "🦄",
  "Anecdote":     "📖",
  "Sciences":     "🔬",
  "Humour":       "😂",
  "Développement":"🌱",
  "Santé":        "💊",
  "Social":       "🤝",
  "Animaux":      "🐾",
  "Jeux vidéo":   "🎮",
  "Lecture":      "📚",
  "Argent":       "💰",
  "Séries":       "📺",
};

export default function StepInteret({ value, onChange, onNext, onSkip, options = [] }) {
  return (
    <div className="px-5 pb-8 flex flex-col gap-7">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-rose-100 text-rose-500">
            <Sparkles size={16} strokeWidth={2} />
          </span>
          <h2 className="text-xl font-semibold text-stone-900 tracking-tight">Quel sujet&nbsp;?</h2>
        </div>
        <p className="text-sm text-stone-400 ml-[42px]">Un intérêt en commun ou un sujet à creuser</p>
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
              className={`flex flex-col items-center gap-1.5 py-3.5 px-2 rounded-xl border text-xs font-medium transition-colors duration-200 active:scale-[0.98] ${
                isActive
                  ? "bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200"
                  : "bg-white text-stone-600 border-stone-200 hover:border-rose-300"
              }`}
            >
              <span className="text-xl leading-none">{emoji}</span>
              <span className="text-center leading-tight">{interet}</span>
            </button>
          );
        })}
      </div>

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
          disabled={!value}
          className={`flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-200 active:scale-[0.98] ${
            value ? "bg-stone-900 text-white hover:bg-stone-800" : "bg-stone-200 text-stone-400 cursor-not-allowed"
          }`}
        >
          Voir mes conversations
          <ArrowRight size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
