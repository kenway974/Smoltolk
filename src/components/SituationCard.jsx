import React, { useState } from "react";
import { MapPin, User, Heart, Tag, Copy, Check, ChevronDown, ChevronUp, Clock, Sparkles } from "lucide-react";

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

function RelanceSection({ label, text, colorBg, colorBorder, colorText, colorBody }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(v => !v)}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${colorBg} border ${colorBorder} ${colorText} text-xs font-semibold active:opacity-80 transition-colors`}
      >
        <span>{label}</span>
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {open && (
        <div className={`flex items-start gap-2 mt-1.5 px-3 py-2.5 rounded-xl ${colorBg} border ${colorBorder}`}>
          <p className={`flex-1 text-sm ${colorBody} leading-snug italic`}>
            « {text} »
          </p>
          <CopyButton text={text} />
        </div>
      )}
    </div>
  );
}

export default function SituationCard({ situation }) {
  const [activeTab, setActiveTab] = useState("A");

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
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 text-xs font-medium">
            <Sparkles size={11} strokeWidth={2.5} />
            {situation.centreInteret}
          </span>
        </div>
        {/* Energy dot + label */}
        <span className="flex items-center gap-1.5 shrink-0 mt-0.5">
          <span className={`w-2.5 h-2.5 rounded-full ${ENERGY_DOT[situation.energie]}`} />
          <span className="text-xs text-stone-500 font-medium">{ENERGY_LABEL[situation.energie]}</span>
        </span>
      </div>

      {/* Card sub-info */}
      <div className="flex gap-3 px-4 pb-3 text-xs text-stone-400 flex-wrap">
        <span className="flex items-center gap-1">
          <Clock size={11} strokeWidth={2} />
          {situation.moment}
        </span>
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

      {/* Relance + Découverte sections */}
      <div className="mx-4 mb-4 space-y-2">
        <RelanceSection
          label="💬 Relance — sur le sujet"
          text={situation.relance}
          colorBg="bg-rose-50"
          colorBorder="border-rose-200"
          colorText="text-rose-700"
          colorBody="text-rose-800"
        />
        <RelanceSection
          label="🔍 En savoir plus sur elle/lui"
          text={situation.decouverte}
          colorBg="bg-teal-50"
          colorBorder="border-teal-200"
          colorText="text-teal-700"
          colorBody="text-teal-800"
        />
      </div>

    </div>
  );
}
