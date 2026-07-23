import React, { useState } from "react";
import { ArrowLeft, Bookmark, Copy, Check, Trash2, MapPin } from "lucide-react";
import { useFavorites, removeFavorite } from "../utils/favorites";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => navigator.clipboard?.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(() => {})}
      className={`p-2 rounded-lg transition-colors active:scale-90 flex-shrink-0 ${copied ? "bg-stone-900 text-white" : "text-stone-300 hover:text-stone-600 hover:bg-stone-100"}`}
      title="Copier"
    >
      {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
    </button>
  );
}

export default function FavoritesView({ onBack }) {
  const favorites = useFavorites();
  const [openRelance, setOpenRelance] = useState(null);

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
        <span className="text-sm font-semibold text-stone-900 flex-1">Mes favoris</span>
        {favorites.length > 0 && (
          <span className="text-[11px] font-medium text-stone-400">{favorites.length} enregistrée{favorites.length > 1 ? "s" : ""}</span>
        )}
      </header>

      <div className="px-5 pb-16 pt-5 max-w-[720px] mx-auto">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center text-center text-stone-400 py-24">
            <Bookmark size={40} strokeWidth={1.5} className="mb-4 opacity-30" />
            <p className="text-sm font-medium text-stone-500">Aucune accroche enregistrée</p>
            <p className="text-xs mt-2 max-w-[36ch]">
              Sur une carte de conversation, touche le marque-page à côté d'une accroche pour la garder ici.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {favorites.map((f) => (
              <div key={f.accroche} className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
                <div className="px-4 pt-4 pb-3">
                  <div className="flex items-start gap-3">
                    <p className="flex-1 text-[15px] text-stone-800 leading-relaxed">« {f.accroche} »</p>
                    <div className="flex flex-col gap-1">
                      <CopyButton text={f.accroche} />
                      <button
                        onClick={() => removeFavorite(f.accroche)}
                        className="p-2 rounded-lg text-stone-300 hover:text-rose-500 hover:bg-rose-50 transition-colors active:scale-90 flex-shrink-0"
                        title="Retirer"
                      >
                        <Trash2 size={14} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-stone-400">
                    {f.lieu && <span className="inline-flex items-center gap-1"><MapPin size={11} strokeWidth={2} />{f.lieu}</span>}
                    {f.niveau && <span>· {f.niveau}</span>}
                    {f.intention && <span>· {f.intention}</span>}
                    {f.objectif && <span className="text-stone-300">· {f.objectif}</span>}
                  </div>
                </div>
                {f.relance && (
                  <div className="border-t border-stone-100">
                    <button
                      onClick={() => setOpenRelance(openRelance === f.accroche ? null : f.accroche)}
                      className="w-full text-left px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-stone-400 hover:bg-stone-50 transition-colors"
                    >
                      {openRelance === f.accroche ? "Masquer la relance" : "Voir la relance"}
                    </button>
                    {openRelance === f.accroche && (
                      <div className="flex items-start gap-3 px-4 pb-3.5">
                        <p className="flex-1 text-sm text-stone-500 italic leading-relaxed">« {f.relance} »</p>
                        <CopyButton text={f.relance} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
