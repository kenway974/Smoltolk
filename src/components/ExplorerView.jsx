import React from "react";
import {
  Compass, DoorOpen, Newspaper, LifeBuoy, Dumbbell, Trophy, HelpCircle,
  BookOpen, Wrench, Clapperboard, Users, MessageCircleQuestion, HeartPulse,
  LineChart, Bookmark, ShieldCheck, ArrowRight, Grid2x2, Gamepad2, Dices, Eye, Wind,
} from "lucide-react";

const GROUPS = [
  {
    titre: "Se lancer",
    items: [
      { key: "start",   icon: Compass,   tile: "bg-blue-600",    label: "Trouver une accroche", desc: "Le lieu, la personne, ton intention → des accroches prêtes." },
      { key: "sortie",  icon: DoorOpen,  tile: "bg-orange-500",  label: "Mode sortie",          desc: "Ton défi, 3 accroches, un rappel — hors-ligne." },
      { key: "respiration", icon: Wind,  tile: "bg-sky-500",     label: "Respiration",          desc: "Te caler avant d'y aller — 60 secondes." },
      { key: "secours", icon: LifeBuoy,  tile: "bg-sky-600",     label: "Sorties de secours",   desc: "Quoi dire quand ça coince, tout de suite." },
      { key: "news",    icon: Newspaper, tile: "bg-rose-500",    label: "News",                 desc: "L'actu fraîche pour lancer la discussion." },
    ],
  },
  {
    titre: "S'entraîner",
    items: [
      { key: "simulateur",   icon: Gamepad2, tile: "bg-indigo-600", label: "Simulateur",            desc: "Une conversation dont tu choisis les répliques." },
      { key: "entrainement", icon: Dumbbell, tile: "bg-cyan-600",   label: "Cartes d'entraînement", desc: "« Et si elle répond ça ? » — à froid." },
      { key: "lissignal",    icon: Eye,      tile: "bg-emerald-600",label: "Lis le signal",         desc: "Devine le ton : chaleureux, neutre, froid ?" },
      { key: "missions",     icon: Trophy,   tile: "bg-violet-600", label: "Mes défis",             desc: "L'échelle de défis + le boss du jour." },
      { key: "quiz",         icon: HelpCircle,tile: "bg-amber-500", label: "Vrai ou faux ?",        desc: "Démonte les mythes sur la sociabilité." },
      { key: "roue",         icon: Dices,    tile: "bg-rose-500",   label: "La roue du hasard",     desc: "Un défi surprise : lieu + intention + action." },
    ],
  },
  {
    titre: "Comprendre",
    items: [
      { key: "guide",      icon: BookOpen,             tile: "bg-amber-500",   label: "Le guide",           desc: "L'arbre de conversation, palier par palier." },
      { key: "outils",     icon: Wrench,               tile: "bg-teal-600",    label: "Boîte à outils",     desc: "Avant, pendant, après un échange." },
      { key: "scenarios",  icon: Clapperboard,         tile: "bg-indigo-600",  label: "Scénarios",          desc: "Soirée, groupe, date, coup de fil…" },
      { key: "types",      icon: Users,                tile: "bg-emerald-600", label: "Types de personnes", desc: "T'ajuster au pressé, au timide, au bavard." },
      { key: "questions",  icon: MessageCircleQuestion,tile: "bg-sky-600",     label: "Banque de questions",desc: "Des questions ouvertes, par thème." },
    ],
  },
  {
    titre: "Se motiver",
    items: [
      { key: "benefices", icon: HeartPulse, tile: "bg-rose-600",   label: "Ce que ça te fait", desc: "Les bénéfices concrets, corps et cerveau." },
      { key: "blocages",  icon: LifeBuoy,   tile: "bg-indigo-600", label: "« Oui mais moi… »", desc: "Débloquer les fausses croyances." },
    ],
  },
  {
    titre: "À toi",
    items: [
      { key: "journal",         icon: LineChart,   tile: "bg-emerald-600", label: "Mon cahier de bord", desc: "Tes tentatives, ta progression." },
      { key: "favorites",       icon: Bookmark,    tile: "bg-emerald-600", label: "Mes favoris",        desc: "Les accroches que tu as gardées." },
      { key: "confidentialite", icon: ShieldCheck, tile: "bg-stone-600",   label: "Confidentialité",    desc: "Tes données restent sur l'appareil." },
    ],
  },
];

function Row({ icon: Icon, tile, label, desc, onClick }) {
  return (
    <button onClick={onClick} className="group w-full text-left rounded-2xl border border-stone-200 bg-white p-3.5 flex items-center gap-3 active:scale-[0.99] transition-colors hover:border-stone-300">
      <span className={`flex items-center justify-center w-10 h-10 rounded-xl text-white flex-shrink-0 ${tile}`}>
        <Icon size={18} strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-semibold text-stone-900 leading-tight">{label}</p>
        <p className="text-[12px] text-stone-500 leading-snug mt-0.5">{desc}</p>
      </div>
      <ArrowRight size={15} strokeWidth={2} className="text-stone-300 group-hover:text-stone-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
    </button>
  );
}

export default function ExplorerView({ onOpen }) {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-2.5">
        <Grid2x2 size={18} strokeWidth={2} className="text-stone-400" />
        <span className="text-sm font-semibold text-stone-900">Explorer</span>
      </header>

      <div className="px-5 pb-24 pt-5 max-w-[720px] mx-auto">
        <p className="text-[14px] text-stone-500 leading-relaxed mb-5">Tout Smoltolk, rangé. Pioche selon ton moment : te lancer, t'entraîner, comprendre, te motiver.</p>
        {GROUPS.map((g) => (
          <section key={g.titre} className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400 mb-2.5">{g.titre}</p>
            <div className="flex flex-col gap-2.5">
              {g.items.map((it) => <Row key={it.key} {...it} onClick={() => onOpen(it.key)} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
