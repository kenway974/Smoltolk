import React, { useState } from "react";
import { MapPin, User, Heart, Tag, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

const ENERGY_DOT = {
  Haute:   "bg-blue-500",
  Basse:   "bg-amber-400",
  Fatigué: "bg-violet-500",
};

const ENERGY_LABEL = {
  Haute:   "Haute",
  Basse:   "Basse",
  Fatigué: "Épuisé",
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback silently
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-1.5 rounded-lg transition-all duration-150 active:scale-90 ${copied ? "bg-green-100 text-green-600" : "bg-stone-100 text-stone-500 hover:bg-stone-200"}`}
      title="Copier"
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  );
}

export default function SituationCard({ situation }) {
  const [activeTab, setActiveTab] = useState("A");
  const [relanceOpen, setRelanceOpen] = useState(false);

  const currentPhrase = activeTab === "A" ? situation.accrocheA : situation.accrocheB;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">

      {/* Card header */}
      <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-3">
        <div className="flex flex-wrap gap-1.5 flex-1">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
            <MapPin size={11} strokeWidth={2.5} />
            {situation.environnement}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
            <User size={11} strokeWidth={2.5} />
            {situation.profil}
          </span>
        </div>
        {/* Energy dot + label */}
        <span className="flex items-center gap-1.5 shrink-0 mt-0.5">
          <span className={`w-2.5 h-2.5 rounded-full ${ENERGY_DOT[situation.energie]}`} />
          <span className="text-xs text-stone-500 font-medium">{ENERGY_LABEL[situation.energie]}</span>
        </span>
      </div>

      {/* Card sub-info */}
      <div className="flex gap-3 px-4 pb-3 text-xs text-stone-400">
        <span className="flex items-center gap-1">
          <Heart size={11} strokeWidth={2} />
          {situation.humeur}
        </span>
        <span className="flex items-center gap-1">
          <Tag size={11} strokeWidth={2} />
          {situation.theme}
        </span>
      </div>

      {/* Tab switcher */}
      <div className="flex mx-4 mb-2 rounded-lg bg-stone-100 p-0.5">
        <button
          onClick={() => setActiveTab("A")}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-150 ${activeTab === "A" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500"}`}
        >
          Option A — Direct
        </button>
        <button
          onClick={() => setActiveTab("B")}
          className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all duration-150 ${activeTab === "B" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500"}`}
        >
          Option B — Humour
        </button>
      </div>

      {/* Phrase display */}
      <div className={`mx-4 mb-3 px-3 py-3 rounded-xl flex items-start gap-2 ${activeTab === "A" ? "bg-emerald-50 border border-emerald-200" : "bg-sky-50 border border-sky-200"}`}>
        <p className={`flex-1 text-sm font-medium leading-snug ${activeTab === "A" ? "text-emerald-900" : "text-sky-900"}`}>
          « {currentPhrase} »
        </p>
        <CopyButton text={currentPhrase} />
      </div>

      {/* Relance section */}
      <div className="mx-4 mb-4">
        <button
          onClick={() => setRelanceOpen(v => !v)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold active:bg-rose-100 transition-colors"
        >
          <span>💬 Relance ouverte</span>
          {relanceOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {relanceOpen && (
          <div className="flex items-start gap-2 mt-1.5 px-3 py-2.5 rounded-xl bg-rose-50 border border-rose-200">
            <p className="flex-1 text-sm text-rose-800 leading-snug italic">
              « {situation.relance} »
            </p>
            <CopyButton text={situation.relance} />
          </div>
        )}
      </div>

    </div>
  );
}
