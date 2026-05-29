import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LOCATIONS = [
  { label: "Dans la rue", emoji: "🚶" },
  { label: "Transports", emoji: "🚇" },
  { label: "Au boulot", emoji: "💼" },
  { label: "Salle de sport", emoji: "🏋️" },
  { label: "Commerce / Magasin", emoji: "🛍️" },
  { label: "Parc / Espace vert", emoji: "🌳" },
  { label: "Soirée / Fête", emoji: "🎉" },
  { label: "Café / Brasserie", emoji: "☕" },
  { label: "Immeuble / Résidentiel", emoji: "🏠" },
  { label: "Marché", emoji: "🥦" },
];

const PROFILE_CATEGORIES = [
  {
    header: "💘 Séduction",
    profiles: [
      "Fille à aborder",
      "Garçon à aborder",
      "Inconnu(e) en soirée",
      "Ami(e) d'un(e) ami(e)",
    ],
  },
  {
    header: "🚶 En chemin",
    profiles: [
      "Cycliste",
      "Motard",
      "Jogger / Coureur",
      "Automobiliste",
      "Chauffeur VTC / Taxi",
      "Voisin(e) de transport",
    ],
  },
  {
    header: "🏙️ Au quotidien",
    profiles: [
      "Voisin(e)",
      "Gardien / Concierge",
      "Passant(e) avec chien",
      "Musicien de rue",
      "SDF",
      "Laveur de vitres",
      "Livreur",
      "Commerçant sur le seuil",
    ],
  },
  {
    header: "💼 Au boulot",
    profiles: [
      "Collègue",
      "Nouveau(elle) collègue",
      "Manager / Boss",
      "Client(e)",
      "Recruteur(euse)",
      "Stagiaire",
    ],
  },
  {
    header: "🛍️ En service",
    profiles: [
      "Barista / Serveur",
      "Vendeur(euse)",
      "Caissier/ière",
      "Pharmacien(ne)",
      "Agent de sécurité",
      "Maraîcher",
      "Boucher / Artisan",
      "Réceptionniste",
    ],
  },
  {
    header: "🏋️ Sport & Santé",
    profiles: [
      "Coach sportif",
      "Partenaire de sport",
      "Inconnu(e) à la salle",
      "Kiné / Médecin",
    ],
  },
  {
    header: "🎉 Soirée & Social",
    profiles: [
      "Inconnu(e) sympa en soirée",
      "Ami(e) d'un(e) ami(e)",
      "Organisateur / Hôte",
      "DJ / Artiste",
    ],
  },
];

const ENERGIES = [
  {
    emoji: "⚡",
    label: "Dans le mood",
    sublabel: "Je suis dispo et motivé",
    value: "Haute",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    emoji: "☕",
    label: "Tranquille",
    sublabel: "Présent mais cool",
    value: "Basse",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
    glow: "rgba(245,158,11,0.35)",
  },
  {
    emoji: "🔋",
    label: "Sur les nerfs",
    sublabel: "J'ai plus grand chose",
    value: "Fatigué",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    glow: "rgba(124,58,237,0.35)",
  },
];

function ProgressBar({ step }) {
  return (
    <div className="flex gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-1 flex-1 rounded-full transition-all duration-300"
          style={{
            background:
              i < step
                ? "linear-gradient(90deg, #3b82f6, #8b5cf6)"
                : i === step
                ? "linear-gradient(90deg, #3b82f6, #8b5cf6)"
                : "rgba(255,255,255,0.1)",
            opacity: i === step ? 1 : i < step ? 0.7 : 0.3,
          }}
        />
      ))}
    </div>
  );
}

export default function OnboardingWizard({ onComplete, onBack }) {
  const [step, setStep] = useState(0);
  const [location, setLocation] = useState(null);
  const [profile, setProfile] = useState(null);

  const handleLocationSelect = (loc) => {
    setLocation(loc);
    setTimeout(() => setStep(1), 300);
  };

  const handleProfileSelect = (prof) => {
    setProfile(prof);
  };

  const handleProfileContinue = () => {
    setStep(2);
  };

  const handleEnergySelect = (energy) => {
    setTimeout(() => {
      onComplete({ location, profile, energie: energy });
    }, 300);
  };

  const handleBack = () => {
    if (step === 0) {
      onBack();
    } else {
      setStep((s) => s - 1);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-slate-950 px-4 pt-5 pb-3 space-y-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 active:bg-slate-700 transition-colors"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <ProgressBar step={step} />
          </div>
        </div>
      </div>

      <div key={step} className="flex-1 flex flex-col animate-slide-in-right">
      {/* Step 0 — Location */}
      {step === 0 && (
        <div className="flex-1 px-4 pb-8">
          <div className="mb-6 mt-2 animate-fade-in-up">
            <h2 className="text-xl font-bold mb-1">Où es-tu ?</h2>
            <p className="text-sm text-slate-500">Sélectionne ton environnement actuel</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {LOCATIONS.map(({ label, emoji }, i) => (
              <button
                key={label}
                onClick={() => handleLocationSelect(label)}
                style={{ animationDelay: `${i * 45}ms` }}
                className={`animate-fade-in-up flex items-center gap-2.5 px-4 py-3.5 rounded-2xl border text-sm font-medium text-left transition-all duration-150 active:scale-95 ${
                  location === label
                    ? "border-violet-500 bg-violet-500/20 text-violet-200 animate-pop"
                    : "border-slate-700 bg-slate-800/60 text-slate-300 active:border-violet-500/60"
                }`}
              >
                <span className="text-xl leading-none">{emoji}</span>
                <span className="leading-tight">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1 — Profile */}
      {step === 1 && (
        <div className="flex-1 flex flex-col px-4 pb-8">
          <div className="mb-4 mt-2 animate-fade-in-up">
            <h2 className="text-xl font-bold mb-1">À qui veux-tu parler ?</h2>
            <p className="text-sm text-slate-500">Choisis le profil de la personne</p>
          </div>
          <div className="flex-1 overflow-y-auto space-y-4 pb-4">
            {PROFILE_CATEGORIES.map(({ header, profiles }, ci) => (
              <div key={header} className="animate-fade-in-up" style={{ animationDelay: `${ci * 60}ms` }}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
                  {header}
                </p>
                <div className="flex flex-wrap gap-2">
                  {profiles.map((prof) => (
                    <button
                      key={prof}
                      onClick={() => handleProfileSelect(prof)}
                      className={`px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-150 active:scale-95 ${
                        profile === prof
                          ? "border-violet-500 bg-violet-500/20 text-violet-200 animate-pop"
                          : "border-slate-700 bg-slate-800/50 text-slate-400 active:border-violet-500/50"
                      }`}
                    >
                      {prof}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {profile && (
            <div className="pt-3 border-t border-slate-800 animate-fade-in-up">
              <button
                onClick={handleProfileContinue}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white text-sm font-bold active:scale-95 transition-transform duration-150"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }}
              >
                Continuer
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Step 2 — Energy */}
      {step === 2 && (
        <div className="flex-1 px-4 pb-8">
          <div className="mb-6 mt-2 animate-fade-in-up">
            <h2 className="text-xl font-bold mb-1">Ton énergie ?</h2>
            <p className="text-sm text-slate-500">Comment tu te sens là, maintenant ?</p>
          </div>
          <div className="flex flex-col gap-3">
            {ENERGIES.map(({ emoji, label, sublabel, value, gradient, glow }, i) => (
              <button
                key={value}
                onClick={() => handleEnergySelect(value)}
                className="animate-fade-in-up w-full flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 text-left active:scale-95 transition-all duration-150"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)",
                  animationDelay: `${i * 70}ms`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: gradient, boxShadow: `0 4px 16px ${glow}` }}
                >
                  {emoji}
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-slate-100">{label}</span>
                  <span className="text-xs text-slate-500">{sublabel}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
