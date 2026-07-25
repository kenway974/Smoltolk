import React from "react";
import { Home, LineChart, BookOpen, Newspaper, Compass } from "lucide-react";

// Barre de navigation basse — visible seulement sur les sections principales
// (accueil, cahier, guide, news). Le bouton central « Trouver » lance le flux
// de recherche d'accroche (qui, lui, s'affiche en plein écran sans la barre).

function Tab({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-0.5 h-full transition-colors active:scale-95 ${active ? "text-blue-600" : "text-stone-400 hover:text-stone-600"}`}
      aria-label={label}
      aria-current={active ? "page" : undefined}
    >
      <Icon size={21} strokeWidth={active ? 2.4 : 2} />
      <span className="text-[10px] font-semibold tracking-tight">{label}</span>
    </button>
  );
}

export default function BottomNav({ screen, onHome, onJournal, onGuide, onNews, onStart }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-20 border-t border-stone-200 bg-[#f5f3ef]/95 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="max-w-[480px] mx-auto grid grid-cols-5 items-center h-[58px] px-1">
        <Tab icon={Home} label="Accueil" active={screen === "home"} onClick={onHome} />
        <Tab icon={LineChart} label="Cahier" active={screen === "journal"} onClick={onJournal} />

        {/* Action centrale : Trouver une accroche */}
        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="flex flex-col items-center justify-center -mt-6 w-14 h-14 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 active:scale-95 transition-transform"
            aria-label="Trouver une accroche"
          >
            <Compass size={22} strokeWidth={2.2} />
            <span className="text-[9px] font-semibold mt-0.5">Trouver</span>
          </button>
        </div>

        <Tab icon={BookOpen} label="Guide" active={screen === "guide"} onClick={onGuide} />
        <Tab icon={Newspaper} label="News" active={screen === "news"} onClick={onNews} />
      </div>
    </nav>
  );
}
