import React from "react";
import { MessageCircle, Compass, BookOpen, Newspaper, ArrowRight } from "lucide-react";

function EntryCard({ icon: Icon, title, desc, meta, onClick, tile = "bg-stone-900", hover = "hover:border-stone-400" }) {
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left rounded-2xl border border-stone-200 bg-white p-5 active:scale-[0.99] transition-colors duration-200 ${hover}`}
    >
      <div className="flex items-start gap-4">
        <span className={`flex items-center justify-center w-11 h-11 rounded-xl text-white flex-shrink-0 ${tile}`}>
          <Icon size={20} strokeWidth={2} />
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h2 className="text-[17px] font-semibold text-stone-900">{title}</h2>
            <ArrowRight size={16} strokeWidth={2} className="text-stone-300 group-hover:text-stone-600 group-hover:translate-x-0.5 transition-all" />
          </div>
          <p className="mt-1 text-sm text-stone-500 leading-relaxed">{desc}</p>
          {meta && <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-stone-400">{meta}</p>}
        </div>
      </div>
    </button>
  );
}

export default function HomeView({ onStart, onOpenGuide, onOpenNews }) {
  return (
    <div className="min-h-svh flex flex-col px-5">
      {/* Brand */}
      <div className="pt-16 pb-10">
        <div className="flex items-center gap-2 text-stone-400 mb-4">
          <MessageCircle size={18} strokeWidth={2} />
          <span className="text-sm font-semibold tracking-tight text-stone-900">Smoltolk</span>
        </div>
        <h1 className="font-serif-guide text-stone-900 font-semibold leading-[1.05] tracking-tight text-[clamp(30px,8vw,42px)]">
          Savoir quoi dire,{" "}
          <span className="italic font-normal text-stone-500">à qui, et dans quel ordre.</span>
        </h1>
        <p className="mt-4 text-[15px] text-stone-500 leading-relaxed max-w-[46ch]">
          Une accroche taillée pour la situation, et la méthode pour tenir la conversation ensuite.
        </p>
      </div>

      {/* Entries */}
      <div className="flex flex-col gap-3">
        <EntryCard
          icon={Compass}
          title="Trouver une accroche"
          desc="Le lieu, la personne, ton intention — et tu obtiens des accroches prêtes à dire, adaptées au moment."
          meta="Le lanceur"
          onClick={onStart}
          tile="bg-blue-600"
          hover="hover:border-blue-300"
        />
        <EntryCard
          icon={BookOpen}
          title="Le guide"
          desc="L'arbre de conversation : comment ouvrir, cadrer, approfondir, et partir au bon moment. Palier par palier."
          meta="La méthode"
          onClick={onOpenGuide}
          tile="bg-amber-500"
          hover="hover:border-amber-300"
        />
        <EntryCard
          icon={Newspaper}
          title="News"
          desc="L'actu fraîche du jour — à la une, sport, culture, tech — avec une accroche prête pour lancer la conversation dessus."
          meta="Le déclencheur"
          onClick={onOpenNews}
          tile="bg-rose-500"
          hover="hover:border-rose-300"
        />
      </div>

      <div className="flex-1" />
      <p className="py-6 text-center text-[11px] text-stone-300">
        Approche → profondeur · un palier à la fois
      </p>
    </div>
  );
}
