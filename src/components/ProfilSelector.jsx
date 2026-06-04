import React from "react";
import { ShoppingBag, Coffee, Briefcase, Dumbbell, Users } from "lucide-react";

const PROFIL_TYPES = [
  {
    value: "Commerce",
    label: "Commerce",
    icon: ShoppingBag,
    keywords: ["vendeur", "maraîcher", "boucher", "boulanger", "fromager", "libraire", "pharmacien", "gérant", "commerçant", "coiffeur"],
    color: "bg-orange-50 text-orange-700 border-orange-200",
    activeColor: "bg-orange-500 text-white border-orange-500 shadow-orange-200 shadow-md",
  },
  {
    value: "Service",
    label: "Service",
    icon: Coffee,
    keywords: ["barista", "serveur", "caissière", "chauffeur", "réceptionniste", "livreur", "soignant", "employé", "gardien", "agent", "chantier"],
    color: "bg-sky-50 text-sky-700 border-sky-200",
    activeColor: "bg-sky-500 text-white border-sky-500 shadow-sky-200 shadow-md",
  },
  {
    value: "Collègue",
    label: "Collègue",
    icon: Briefcase,
    keywords: ["collègue", "développeur", "entrepreneur", "maker", "bureau"],
    color: "bg-violet-50 text-violet-700 border-violet-200",
    activeColor: "bg-violet-600 text-white border-violet-600 shadow-violet-200 shadow-md",
  },
  {
    value: "Sport",
    label: "Sport & Loisir",
    icon: Dumbbell,
    keywords: ["jogger", "nageur", "grimpeur", "skateur", "randonneur", "joueur", "fan", "sparring", "musicien", "cinéphile", "chineur", "membre", "partenaire", "tapis", "surfeur", "coach"],
    color: "bg-green-50 text-green-700 border-green-200",
    activeColor: "bg-green-600 text-white border-green-600 shadow-green-200 shadow-md",
  },
  {
    value: "Social",
    label: "Voisin / Passant",
    icon: Users,
    keywords: ["passant", "inconnu", "navetteur", "retraité", "voisin", "voyageur", "client", "patient", "habitué", "visiteur", "jardinier", "parent", "cousin", "participant"],
    color: "bg-rose-50 text-rose-700 border-rose-200",
    activeColor: "bg-rose-500 text-white border-rose-500 shadow-rose-200 shadow-md",
  },
];

export function matchesProfil(profil, typeValue) {
  const found = PROFIL_TYPES.find(t => t.value === typeValue);
  if (!found) return true;
  const p = profil.toLowerCase();
  return found.keywords.some(k => p.includes(k));
}

export default function ProfilSelector({ selected, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      {PROFIL_TYPES.map(({ value, label, icon: Icon, color, activeColor }) => {
        const isActive = selected === value;
        return (
          <button
            key={value}
            onClick={() => onChange(isActive ? null : value)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 font-bold text-xs transition-all duration-200 active:scale-95 ${isActive ? activeColor : color}`}
          >
            <Icon size={15} strokeWidth={isActive ? 2.5 : 2} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
