import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Copy,
  Check,
  MapPin,
  MessageCircle,
  AlertTriangle,
} from "lucide-react";
import { SCENARIOS } from "../data/scenarios";

function Label({ children }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400 mb-2">
      {children}
    </p>
  );
}

function PhraseLine({ texte }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(texte);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-start gap-2 rounded-xl bg-stone-50 border border-stone-200 px-3 py-2.5">
      <p className="flex-1 text-sm text-stone-700 leading-relaxed">« {texte} »</p>
      <button
        onClick={copy}
        className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-stone-200 text-stone-400 hover:text-stone-700 hover:bg-stone-50 active:scale-95 transition-colors"
        aria-label="Copier la phrase"
      >
        {copied ? (
          <Check size={14} strokeWidth={2.5} className="text-emerald-600" />
        ) : (
          <Copy size={14} strokeWidth={2} />
        )}
      </button>
    </div>
  );
}

function ScenarioCard({ scenario }) {
  const [open, setOpen] = useState(false);
  const { titre, emoji, tint, quand, plan, phrasesCles, aEviter } = scenario;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-4 flex items-start gap-3.5"
        aria-expanded={open}
      >
        <div
          className={`flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl text-xl ${tint}`}
          aria-hidden="true"
        >
          {emoji}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-serif-guide text-[17px] text-stone-900 leading-snug">
            {titre}
          </p>
          <p className="text-sm text-stone-500 leading-relaxed mt-1">{quand}</p>
        </div>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`text-stone-400 mt-1 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 pb-5 pt-1 animate-expand-in border-t border-stone-100">
          <div className="mt-4">
            <Label>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} strokeWidth={2.5} className="text-stone-400" />
                Le plan
              </span>
            </Label>
            <ol className="flex flex-col gap-3">
              {plan.map((etape, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-semibold">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-stone-800 leading-snug">
                      {etape.titre}
                    </p>
                    <p className="text-sm text-stone-600 leading-relaxed mt-0.5">
                      {etape.texte}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-5">
            <Label>
              <span className="inline-flex items-center gap-1.5">
                <MessageCircle
                  size={13}
                  strokeWidth={2.5}
                  className="text-stone-400"
                />
                Phrases prêtes à dire
              </span>
            </Label>
            <div className="flex flex-col gap-2">
              {phrasesCles.map((p, i) => (
                <PhraseLine key={i} texte={p} />
              ))}
            </div>
          </div>

          <div className="mt-5">
            <Label>
              <span className="inline-flex items-center gap-1.5">
                <AlertTriangle
                  size={13}
                  strokeWidth={2.5}
                  className="text-rose-400"
                />
                À éviter
              </span>
            </Label>
            <ul className="flex flex-col gap-2">
              {aEviter.map((piege, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-rose-400"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-rose-700/90 leading-relaxed">
                    {piege}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ScenariosView({ onBack }) {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors"
          aria-label="Retour"
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Scénarios</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-500 mb-3">
          Prêt à l'emploi
        </p>
        <h1 className="font-serif-guide text-stone-900 font-semibold leading-[1.05] tracking-tight text-[clamp(28px,7vw,40px)] mb-3">
          Des situations concrètes, un plan pour chacune
        </h1>
        <p className="text-[15px] text-stone-500 leading-relaxed max-w-[54ch] mb-7">
          Choisis le moment qui te concerne, ouvre-le, et pars avec un plan clair et des phrases déjà prêtes. Rien à inventer sur le moment.
        </p>

        <div className="flex flex-col gap-3">
          {SCENARIOS.map((s) => (
            <ScenarioCard key={s.id} scenario={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
