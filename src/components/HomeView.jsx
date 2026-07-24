import React, { useState } from "react";
import { MessageCircle, Compass, BookOpen, Newspaper, Bookmark, LifeBuoy, RefreshCw, Copy, Check, MapPin, ArrowRight, Quote } from "lucide-react";
import { useFavoriteCount } from "../utils/favorites";
import { SITUATIONS_DATA } from "../data/situations";

const LEVELS = ["zoomIn", "contexte", "zoomOut"];
function pickSample() {
  const s = SITUATIONS_DATA[Math.floor(Math.random() * SITUATIONS_DATA.length)];
  const lvl = LEVELS[Math.floor(Math.random() * LEVELS.length)];
  const arr = s[lvl];
  const v = arr[Math.floor(Math.random() * arr.length)];
  return { accroche: v.accroche, lieu: s.environnement === "Partout" ? "En toute occasion" : s.environnement };
}

const PRINCIPES = [
  "Tu n'as pas besoin d'être intéressant. Tu dois être intéressé.",
  "Ne monte jamais d'un cran tant que l'autre ne t'a rien rendu.",
  "Deux secondes de silence, et souvent l'autre complète avec la partie intéressante.",
  "Un sujet qui ne prend pas après deux tentatives est mort — change d'angle, pas de personne.",
  "Laisse toujours une porte de sortie : c'est ce qui donne envie de rester.",
  "Le volume bat la technique : vingt petites approches t'apprennent plus que n'importe quel conseil.",
];

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

function Step({ n, title, children }) {
  return (
    <div className="flex gap-3">
      <span className="flex-none flex items-center justify-center w-7 h-7 rounded-lg bg-stone-900 text-white text-sm font-serif-guide font-semibold">{n}</span>
      <div>
        <p className="text-sm font-semibold text-stone-900">{title}</p>
        <p className="text-[13px] text-stone-500 leading-snug">{children}</p>
      </div>
    </div>
  );
}

export default function HomeView({ onStart, onOpenGuide, onOpenNews, onOpenFavorites, onOpenBlocages }) {
  const favCount = useFavoriteCount();
  const [sample, setSample] = useState(pickSample);
  const [principe] = useState(() => PRINCIPES[Math.floor(Math.random() * PRINCIPES.length)]);
  const [copied, setCopied] = useState(false);

  const copy = () => navigator.clipboard?.writeText(sample.accroche).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }).catch(() => {});

  return (
    <div className="min-h-svh flex flex-col px-5">
      {/* Brand + hero */}
      <div className="pt-14 pb-7">
        <div className="flex items-center gap-2 text-stone-400 mb-4">
          <MessageCircle size={18} strokeWidth={2} />
          <span className="text-sm font-semibold tracking-tight text-stone-900">Smoltolk</span>
        </div>
        <h1 className="font-serif-guide text-stone-900 font-semibold leading-[1.05] tracking-tight text-[clamp(30px,8vw,42px)]">
          Savoir quoi dire,{" "}
          <span className="italic font-normal text-stone-500">à qui, et dans quel ordre.</span>
        </h1>
        <p className="mt-4 text-[15px] text-stone-500 leading-relaxed max-w-[46ch]">
          Une accroche taillée pour la situation, la méthode pour tenir la conversation, et de quoi débloquer ce qui te retient.
        </p>
      </div>

      {/* Accroche du moment */}
      <div className="rounded-2xl border border-stone-200 bg-white p-5 mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-500">L'accroche du moment</span>
          <button onClick={() => setSample(pickSample())} className="flex items-center gap-1 text-[11px] font-medium text-stone-400 hover:text-stone-700 transition-colors active:scale-95">
            <RefreshCw size={12} strokeWidth={2} /> une autre
          </button>
        </div>
        <div className="flex items-start gap-3">
          <p className="flex-1 font-serif-guide text-[17px] text-stone-800 leading-relaxed">« {sample.accroche} »</p>
          <button onClick={copy} className={`p-2 rounded-lg transition-colors active:scale-90 flex-shrink-0 ${copied ? "bg-stone-900 text-white" : "text-stone-300 hover:text-stone-600 hover:bg-stone-100"}`} title="Copier">
            {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2} />}
          </button>
        </div>
        <p className="mt-2 inline-flex items-center gap-1 text-[11px] text-stone-400"><MapPin size={11} strokeWidth={2} />{sample.lieu}</p>
      </div>

      {/* Entrées */}
      <div className="flex flex-col gap-3">
        <EntryCard icon={Compass} title="Trouver une accroche" desc="Le lieu, la personne, ton intention — et tu obtiens des accroches prêtes à dire." meta="Le lanceur" onClick={onStart} tile="bg-blue-600" hover="hover:border-blue-300" />
        <EntryCard icon={BookOpen} title="Le guide" desc="L'arbre de conversation : ouvrir, cadrer, approfondir, partir au bon moment." meta="La méthode" onClick={onOpenGuide} tile="bg-amber-500" hover="hover:border-amber-300" />
        <EntryCard icon={Newspaper} title="News" desc="L'actu fraîche, 21 domaines, avec une accroche prête pour lancer la discussion." meta="Le déclencheur" onClick={onOpenNews} tile="bg-rose-500" hover="hover:border-rose-300" />
        <EntryCard icon={Bookmark} title="Mes favoris" desc="Les accroches que tu as enregistrées, gardées d'une visite à l'autre." meta={favCount > 0 ? `${favCount} enregistrée${favCount > 1 ? "s" : ""}` : "À remplir"} onClick={onOpenFavorites} tile="bg-emerald-600" hover="hover:border-emerald-300" />
      </div>

      {/* Bandeau débloquer */}
      <button
        onClick={onOpenBlocages}
        className="group mt-6 w-full text-left rounded-2xl p-5 text-white active:scale-[0.99] transition-transform"
        style={{ backgroundImage: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
      >
        <div className="flex items-start gap-4">
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 flex-shrink-0">
            <LifeBuoy size={20} strokeWidth={2} />
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-[17px] font-semibold">« Oui mais moi… »</h2>
              <ArrowRight size={16} strokeWidth={2} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="mt-1 text-sm text-white/85 leading-relaxed">
              « Je ne sais pas quoi dire », « je n'arrive pas à rester présent », « j'ai peur du rejet »… Les blocages courants, et pourquoi ce ne sont (presque) jamais des vérités.
            </p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.1em] text-white/60">Débloquer</p>
          </div>
        </div>
      </button>

      {/* Comment ça marche */}
      <div className="mt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400 mb-4">Comment ça marche</p>
        <div className="flex flex-col gap-4">
          <Step n="1" title="Décris la situation">Où tu es, qui est en face, ce que tu cherches à faire.</Step>
          <Step n="2" title="Reçois des accroches">Prêtes à dire, adaptées au lieu, à la personne et à ton intention.</Step>
          <Step n="3" title="Ouvre la conversation">Copie, lance-toi — et le guide t'explique la suite, palier par palier.</Step>
        </div>
      </div>

      {/* Principe à méditer */}
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-5 flex gap-3">
        <Quote size={20} strokeWidth={2} className="text-stone-300 flex-none mt-0.5" />
        <div>
          <p className="font-serif-guide text-[17px] text-stone-800 leading-snug italic">{principe}</p>
          <button onClick={onOpenGuide} className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-stone-500 hover:text-stone-800 transition-colors">
            Tout le guide <ArrowRight size={13} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Chiffres */}
      <p className="mt-7 text-center text-[12px] text-stone-400">
        <b className="text-stone-600 font-semibold">~7 800</b> accroches · <b className="text-stone-600 font-semibold">53</b> lieux · <b className="text-stone-600 font-semibold">21</b> rubriques d'actu
      </p>

      <div className="flex-1" />
      <p className="py-6 text-center text-[11px] text-stone-300">Approche → profondeur · un palier à la fois</p>
    </div>
  );
}
