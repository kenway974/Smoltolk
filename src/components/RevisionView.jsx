import React, { useState, useMemo } from "react";
import { ArrowLeft, Eye, RotateCcw, Check, Bookmark, MapPin } from "lucide-react";
import { useFavorites } from "../utils/favorites";

const KEY = "smoltolk.revision.v1";
function loadCounts() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
function saveCounts(c) { try { localStorage.setItem(KEY, JSON.stringify(c)); } catch { /* ignore */ } }

export default function RevisionView({ onBack, onOpenFavorites }) {
  const favorites = useFavorites();
  const [counts, setCounts] = useState(loadCounts);
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [seen, setSeen] = useState(0);

  // Ordre : les moins révisées d'abord (répétition espacée simplifiée).
  const deck = useMemo(
    () => [...favorites].sort((a, b) => (counts[a.accroche] || 0) - (counts[b.accroche] || 0)),
    [favorites] // eslint-disable-line react-hooks/exhaustive-deps
  );

  if (favorites.length === 0) {
    return (
      <div className="min-h-svh">
        <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
          <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour"><ArrowLeft size={17} strokeWidth={2} /></button>
          <span className="text-sm font-semibold text-stone-900">Révision</span>
        </header>
        <div className="flex flex-col items-center text-center py-24 px-6">
          <Bookmark size={40} strokeWidth={1.5} className="text-stone-300 mb-4" />
          <p className="text-sm font-medium text-stone-500">Aucune accroche à réviser</p>
          <p className="text-xs text-stone-400 mt-2 max-w-[34ch] leading-relaxed">Enregistre des accroches en favori (le marque-page sur une carte), puis reviens ici pour les ancrer.</p>
          {onOpenFavorites && <button onClick={onOpenFavorites} className="mt-5 px-5 py-3 rounded-2xl bg-stone-900 text-white text-[14px] font-semibold active:scale-95 transition-transform">Voir mes favoris</button>}
        </div>
      </div>
    );
  }

  const card = deck[i % deck.length];

  const nextCard = () => {
    const c = { ...counts, [card.accroche]: (counts[card.accroche] || 0) + 1 };
    setCounts(c); saveCounts(c);
    setRevealed(false);
    setSeen((s) => s + 1);
    setI((v) => v + 1);
  };

  return (
    <div className="min-h-svh flex flex-col">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour"><ArrowLeft size={17} strokeWidth={2} /></button>
        <span className="text-sm font-semibold text-stone-900 flex-1">Révision</span>
        <span className="text-[11px] font-medium text-stone-400">{seen} revue{seen > 1 ? "s" : ""}</span>
      </header>

      <div className="flex-1 flex flex-col px-5 pb-24 pt-6 max-w-[720px] mx-auto w-full">
        <p className="text-[13px] text-stone-500 text-center mb-5">Lis l'accroche, dis-la dans ta tête, puis vérifie la relance. Répète — c'est comme ça que ça devient automatique.</p>

        <div className="flex-1 flex items-center">
          <div className="w-full rounded-3xl border border-stone-200 bg-white p-6">
            {card.lieu && <p className="inline-flex items-center gap-1 text-[11px] text-stone-400 mb-3"><MapPin size={11} strokeWidth={2} />{card.lieu}{card.niveau ? ` · ${card.niveau}` : ""}</p>}
            <p className="font-serif-guide text-[20px] text-stone-800 leading-relaxed">« {card.accroche} »</p>

            {card.relance && (
              revealed ? (
                <div className="mt-5 pt-5 border-t border-dashed border-stone-200 animate-fade-in">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400 mb-1.5">La relance</p>
                  <p className="text-[16px] text-stone-600 italic leading-relaxed">« {card.relance} »</p>
                </div>
              ) : (
                <button onClick={() => setRevealed(true)} className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-stone-500 hover:text-stone-800 transition-colors">
                  <Eye size={14} strokeWidth={2.2} /> Voir la relance
                </button>
              )
            )}
          </div>
        </div>

        <button onClick={nextCard} className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold hover:bg-stone-800 active:scale-[0.98] transition-colors">
          <Check size={17} strokeWidth={2.4} /> Suivante
        </button>
        <p className="mt-3 text-center text-[11px] text-stone-400 inline-flex items-center justify-center gap-1"><RotateCcw size={11} strokeWidth={2} /> Les moins vues reviennent en premier</p>
      </div>
    </div>
  );
}
