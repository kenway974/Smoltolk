import React from "react";
import {
  ArrowLeft,
  ShieldCheck,
  UserX,
  Smartphone,
  EyeOff,
  ServerOff,
  Newspaper,
  Download,
  Trash2,
} from "lucide-react";

/* ── Points rassurants ── */
const POINTS = [
  {
    icon: UserX,
    tile: "bg-emerald-100 text-emerald-600",
    title: "Aucun compte, aucune inscription",
    body: "Pas d'email, pas de mot de passe, pas de profil à créer. Tu ouvres l'app et tu t'entraînes, c'est tout.",
  },
  {
    icon: Smartphone,
    tile: "bg-emerald-100 text-emerald-600",
    title: "Tout reste sur ton appareil",
    body: "Tes favoris, ton cahier de bord, tes défis, tes niveaux et tes objectifs sont enregistrés uniquement dans le navigateur de ton appareil. Rien n'est envoyé sur un serveur.",
  },
  {
    icon: EyeOff,
    tile: "bg-emerald-100 text-emerald-600",
    title: "Personne ne voit tes entrées",
    body: "Pas de profil public, pas de partage, pas de fil social. Ce que tu écris ne sort pas de chez toi.",
  },
  {
    icon: ServerOff,
    tile: "bg-emerald-100 text-emerald-600",
    title: "Pas de traceurs, pas de pub",
    body: "Aucun cookie de suivi, aucune régie publicitaire, aucun outil qui mesure ce que tu fais. On ne te piste pas.",
  },
  {
    icon: Newspaper,
    tile: "bg-emerald-100 text-emerald-600",
    title: "L'actualité, sans te tracer",
    body: "La page News affiche du contenu public récupéré à l'avance. La consulter n'envoie aucune donnée personnelle.",
  },
];

function PointCard({ icon: Icon, tile, title, body }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 flex items-start gap-3.5">
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 ${tile}`}
      >
        <Icon size={19} strokeWidth={2} />
      </span>
      <div className="min-w-0 pt-0.5">
        <h3 className="font-serif-guide text-[17px] font-semibold text-stone-900 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed mt-1">{body}</p>
      </div>
    </div>
  );
}

export default function ConfidentialiteView({ onBack }) {
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
        <span className="text-sm font-semibold text-stone-900">
          Confidentialité
        </span>
      </header>

      <div className="px-5 pb-20 pt-6 max-w-[720px] mx-auto">
        {/* Hero */}
        <div className="flex flex-col items-start">
          <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-5">
            <ShieldCheck size={28} strokeWidth={2} />
          </span>
          <h1 className="font-serif-guide text-[30px] font-semibold text-stone-900 leading-[1.15] tracking-tight">
            Tes données restent chez toi.
          </h1>
          <p className="text-[15px] text-stone-600 leading-relaxed mt-3">
            Smoltolk fonctionne à 100 % sur ton appareil. Pas de compte, pas de
            serveur, rien qui parte sans que tu le saches. Voici exactement ce
            qu'il en est.
          </p>
        </div>

        {/* Points */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400 mt-9 mb-4">
          Ce que ça veut dire
        </p>
        <div className="flex flex-col gap-3">
          {POINTS.map((p) => (
            <PointCard key={p.title} {...p} />
          ))}
        </div>

        {/* Le revers : sauvegarde */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-400 mt-9 mb-4">
          Le revers de la médaille
        </p>
        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <div className="flex items-start gap-3.5">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 bg-amber-100 text-amber-600">
              <Download size={19} strokeWidth={2} />
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="font-serif-guide text-[17px] font-semibold text-stone-900 leading-snug tracking-tight">
                Pense à faire une sauvegarde
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mt-1">
                Comme tout est local, si tu changes de navigateur ou d'appareil,
                ou si tu nettoies les données du navigateur, ton cahier
                disparaît. Pour éviter ça, utilise l'export / import (sauvegarde
                manuelle) dans le cahier de bord.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed mt-2">
                Le fichier exporté n'est pas chiffré par défaut : range-le en
                lieu sûr.
              </p>
            </div>
          </div>
        </div>

        {/* Effacement */}
        <div className="rounded-2xl border border-stone-200 bg-white p-5 mt-3">
          <div className="flex items-start gap-3.5">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 bg-stone-100 text-stone-500">
              <Trash2 size={19} strokeWidth={2} />
            </span>
            <div className="min-w-0 pt-0.5">
              <h3 className="font-serif-guide text-[17px] font-semibold text-stone-900 leading-snug tracking-tight">
                Tu effaces tout quand tu veux
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mt-1">
                À tout moment, tu peux supprimer tes entrées directement dans
                l'app, ou vider les données du site depuis les réglages de ton
                navigateur. C'est toi qui gardes la main, de bout en bout.
              </p>
            </div>
          </div>
        </div>

        {/* Note de clôture */}
        <p className="text-[13px] text-stone-500 leading-relaxed text-center mt-9">
          Pas de piège, pas de petites lignes. Ce que tu écris ici t'appartient,
          et à personne d'autre.
        </p>
      </div>
    </div>
  );
}
