import React, { useState } from "react";
import { MapPin, User, Tag, Copy, Check, ChevronDown, ChevronUp, RotateCcw, Star } from "lucide-react";

const ENERGY_DOT = {
  Haute: "bg-blue-400",
  Basse: "bg-amber-400",
  Fatigué: "bg-violet-400",
};

const CATEGORY_COLOR = {
  "Séduction":            "bg-rose-950/70 text-rose-300 border-rose-800/60",
  "Boulot":               "bg-cyan-950/70 text-cyan-300 border-cyan-800/60",
  "Sport & Bien-être":    "bg-green-950/70 text-green-300 border-green-800/60",
  "Transports":           "bg-indigo-950/70 text-indigo-300 border-indigo-800/60",
  "Services & Commerces": "bg-orange-950/70 text-orange-300 border-orange-800/60",
  "Vie de quartier":      "bg-teal-950/70 text-teal-300 border-teal-800/60",
};

function CopyButton({ text, colorClass }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-1.5 rounded-lg transition-all duration-150 active:scale-90 ${
        copied ? "bg-green-800/60 text-green-400" : `${colorClass} active:opacity-70`
      }`}
      title="Copier"
    >
      {copied ? <Check size={13} strokeWidth={2.5} /> : <Copy size={13} strokeWidth={2} />}
    </button>
  );
}

export default function SituationCard({ situation, isFavorite, onToggleFavorite, isChallenge }) {
  const [activeTab, setActiveTab] = useState("A");
  const [phraseIndexA, setPhraseIndexA] = useState(0);
  const [phraseIndexB, setPhraseIndexB] = useState(0);
  const [relanceIndex, setRelanceIndex] = useState(0);
  const [relanceOpen, setRelanceOpen] = useState(false);

  const phrasesA = situation.optionA ?? [];
  const phrasesB = situation.optionB ?? [];
  const relances = situation.relances ?? [];

  const currentPhrase = activeTab === "A" ? phrasesA[phraseIndexA] : phrasesB[phraseIndexB];
  const currentRelance = relances[relanceIndex];
  const currentIndex = activeTab === "A" ? phraseIndexA : phraseIndexB;
  const currentTotal = activeTab === "A" ? phrasesA.length : phrasesB.length;

  const rotatePhrase = (e) => {
    e.stopPropagation();
    if (activeTab === "A") {
      setPhraseIndexA(i => (i + 1) % phrasesA.length);
    } else {
      setPhraseIndexB(i => (i + 1) % phrasesB.length);
    }
  };

  const rotateRelance = (e) => {
    e.stopPropagation();
    setRelanceIndex(i => (i + 1) % relances.length);
  };

  const energyDot = ENERGY_DOT[situation.energie] ?? "bg-slate-500";
  const catColor = CATEGORY_COLOR[situation.categorie] ?? "bg-slate-800 text-slate-300 border-slate-700";

  return (
    <div
      className={`bg-slate-900 rounded-2xl border overflow-hidden ${
        isChallenge
          ? "border-yellow-500/50 shadow-lg shadow-yellow-500/5"
          : "border-slate-800"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-2">
        <div className="flex flex-wrap gap-1.5 flex-1">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-xs font-semibold ${catColor}`}>
            {situation.categorie}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs">
            <MapPin size={10} strokeWidth={2.5} />
            {situation.environnement}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          <span className={`w-2 h-2 rounded-full ${energyDot}`} />
          <button
            onClick={onToggleFavorite}
            className={`p-1 rounded-lg active:scale-90 transition-all duration-150 ${
              isFavorite ? "text-yellow-400" : "text-slate-700 active:text-yellow-400"
            }`}
          >
            <Star
              size={17}
              strokeWidth={isFavorite ? 0 : 1.5}
              fill={isFavorite ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      {/* Sub info */}
      <div className="flex flex-wrap gap-x-3 gap-y-0.5 px-4 pb-3 text-xs text-slate-600">
        <span className="flex items-center gap-1">
          <User size={10} strokeWidth={2} />
          {situation.profil}
        </span>
        <span className="flex items-center gap-1">
          <Tag size={10} strokeWidth={2} />
          {situation.theme}
        </span>
      </div>

      {/* Tab switcher */}
      <div className="flex mx-4 mb-2 rounded-xl bg-slate-800 p-0.5">
        <button
          onClick={() => setActiveTab("A")}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-150 ${
            activeTab === "A" ? "bg-emerald-700 text-emerald-100" : "text-slate-500"
          }`}
        >
          Option A — Direct
        </button>
        <button
          onClick={() => setActiveTab("B")}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-150 ${
            activeTab === "B" ? "bg-sky-700 text-sky-100" : "text-slate-500"
          }`}
        >
          Option B — Audacieux
        </button>
      </div>

      {/* Phrase */}
      <div
        className={`mx-4 mb-3 px-3 pt-3 pb-2.5 rounded-xl border ${
          activeTab === "A"
            ? "bg-emerald-950/40 border-emerald-800/50"
            : "bg-sky-950/40 border-sky-800/50"
        }`}
      >
        <p
          className={`text-sm font-medium leading-relaxed mb-2.5 ${
            activeTab === "A" ? "text-emerald-200" : "text-sky-200"
          }`}
        >
          « {currentPhrase} »
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-700 tabular-nums">
            {currentIndex + 1}/{currentTotal}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={rotatePhrase}
              className={`p-1.5 rounded-lg active:scale-90 transition-all duration-150 ${
                activeTab === "A"
                  ? "bg-emerald-800/50 text-emerald-400 active:bg-emerald-700/60"
                  : "bg-sky-800/50 text-sky-400 active:bg-sky-700/60"
              }`}
              title="Phrase suivante"
            >
              <RotateCcw size={13} strokeWidth={2.5} />
            </button>
            <CopyButton
              text={currentPhrase}
              colorClass={
                activeTab === "A"
                  ? "bg-emerald-800/50 text-emerald-400"
                  : "bg-sky-800/50 text-sky-400"
              }
            />
          </div>
        </div>
      </div>

      {/* Relance */}
      <div className="mx-4 mb-4">
        <button
          onClick={() => setRelanceOpen(v => !v)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-rose-950/40 border border-rose-800/50 text-rose-300 text-xs font-semibold active:bg-rose-900/40 transition-colors"
        >
          <span>💬 Relance — Sauve-qui-peut</span>
          {relanceOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {relanceOpen && (
          <div className="mt-1.5 px-3 pt-2.5 pb-2 rounded-xl bg-rose-950/40 border border-rose-800/50">
            <p className="text-sm text-rose-200 leading-relaxed italic mb-2">
              « {currentRelance} »
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-700 tabular-nums">
                {relanceIndex + 1}/{relances.length}
              </span>
              <div className="flex items-center gap-1.5">
                {relances.length > 1 && (
                  <button
                    onClick={rotateRelance}
                    className="p-1.5 rounded-lg bg-rose-800/50 text-rose-400 active:scale-90 active:bg-rose-700/60 transition-all"
                  >
                    <RotateCcw size={13} strokeWidth={2.5} />
                  </button>
                )}
                <CopyButton text={currentRelance} colorClass="bg-rose-800/50 text-rose-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
