import React, { useState } from "react";
import { MapPin, User, Tag, Copy, Check, ChevronDown, Sparkles } from "lucide-react";

const VIBE_STYLE = {
  Ouvert:  "bg-emerald-100 text-emerald-700",
  Neutre:  "bg-stone-100 text-stone-600",
  Fermé:   "bg-rose-100 text-rose-700",
};
const VIBE_EMOJI = { Ouvert: "😊", Neutre: "😐", Fermé: "😑" };

const PROX_EMOJI  = { Inconnu: "🤝", Croisé: "👀", Connaissance: "👋", Habitué: "💬", Proche: "😊" };

const AUDACE_DATA = {
  1: { emoji: "😌", label: "Prudent",   style: "bg-slate-100 text-slate-600" },
  2: { emoji: "😎", label: "Confiant",  style: "bg-violet-100 text-violet-700" },
  3: { emoji: "🔥", label: "Audacieux", style: "bg-red-100 text-red-700" },
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* fallback silently */ }
  };

  return (
    <button
      onClick={handleCopy}
      className={`p-2 rounded-xl transition-all duration-200 active:scale-90 flex-shrink-0 ${
        copied
          ? "bg-green-100 text-green-600"
          : "bg-stone-100 text-stone-400 hover:bg-stone-200 hover:text-stone-600"
      }`}
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
        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl ${colorBg} border-2 ${colorBorder} ${colorText} text-xs font-bold tracking-wide transition-all duration-200 active:scale-[0.98]`}
      >
        <span>{label}</span>
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}>
          <ChevronDown size={15} strokeWidth={2.5} />
        </span>
      </button>
      {open && (
        <div className={`flex items-start gap-3 mt-2 px-4 py-3.5 rounded-2xl ${colorBg} border-2 ${colorBorder} animate-expand-in`}>
          <p className={`flex-1 text-sm ${colorBody} leading-relaxed italic`}>
            « {text} »
          </p>
          <CopyButton text={text} />
        </div>
      )}
    </div>
  );
}

export default function SituationCard({ situation, index = 0 }) {
  const [activeTab, setActiveTab] = useState("A");

  const currentPhrase = activeTab === "A" ? situation.accrocheA : situation.accrocheB;
  const audaceInfo = situation.audace ? AUDACE_DATA[situation.audace] : null;

  return (
    <div
      className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow animate-card-enter"
      style={{ animationDelay: `${Math.min(index * 45, 360)}ms` }}
    >
      {/* ── Card header ── */}
      <div className="px-5 pt-5 pb-3">

        {/* Badges row */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
            <MapPin size={11} strokeWidth={2.5} />
            {situation.environnement}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold">
            <Sparkles size={11} strokeWidth={2.5} />
            {situation.centreInteret}
          </span>
          {situation.vibe && (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${VIBE_STYLE[situation.vibe]}`}>
              {VIBE_EMOJI[situation.vibe]} {situation.vibe}
            </span>
          )}
          {situation.proximite && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
              {PROX_EMOJI[situation.proximite]} {situation.proximite}
            </span>
          )}
          {audaceInfo && (
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${audaceInfo.style}`}>
              {audaceInfo.emoji} {audaceInfo.label}
            </span>
          )}
        </div>

        {/* Objectif — titre de la carte */}
        <p className="text-base font-bold text-stone-900 leading-snug mb-3">
          {situation.objectif}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
          <span className="flex items-center gap-1.5">
            <User size={12} strokeWidth={2} />
            {situation.profil}
            {situation.ageGroupe && situation.ageGroupe !== "Tous" && (
              <span className="text-stone-400">· {situation.ageGroupe}</span>
            )}
            {situation.genre && situation.genre !== "Indéfini" && (
              <span className="text-stone-400">· {situation.genre}</span>
            )}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag size={12} strokeWidth={2} />
            {situation.theme}
          </span>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-5 border-t border-stone-100" />

      {/* ── Tab switcher ── */}
      <div className="flex mx-5 mt-4 mb-3 rounded-2xl bg-stone-100 p-1 gap-1">
        {["A", "B"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
              activeTab === tab
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            {tab === "A" ? "Option A — Direct" : "Option B — Humour"}
          </button>
        ))}
      </div>

      {/* ── Phrase display ── */}
      <div
        key={activeTab}
        className={`mx-5 mb-4 px-4 py-4 rounded-2xl flex items-start gap-3 animate-phrase-swap ${
          activeTab === "A"
            ? "bg-emerald-50 border-2 border-emerald-200"
            : "bg-sky-50 border-2 border-sky-200"
        }`}
      >
        <p className={`flex-1 text-sm font-semibold leading-relaxed ${
          activeTab === "A" ? "text-emerald-900" : "text-sky-900"
        }`}>
          « {currentPhrase} »
        </p>
        <CopyButton text={currentPhrase} />
      </div>

      {/* ── Relance + Découverte ── */}
      <div className="mx-5 mb-5 space-y-2.5">
        <RelanceSection
          label="💬 Relance — sur le sujet"
          text={situation.relance}
          colorBg="bg-rose-50"
          colorBorder="border-rose-200"
          colorText="text-rose-700"
          colorBody="text-rose-900"
        />
        <RelanceSection
          label="🔍 En savoir plus sur elle / lui"
          text={situation.decouverte}
          colorBg="bg-teal-50"
          colorBorder="border-teal-200"
          colorText="text-teal-700"
          colorBody="text-teal-900"
        />
      </div>
    </div>
  );
}
