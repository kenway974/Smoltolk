"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ChevronRight, X, Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const KEY = "sr_onboarded";

const BASSINS = ["Nord", "Ouest", "Sud", "Est"];
const CATEGORIES = [
  { key: "soirees",         label: "Soirées",           emoji: "🎉" },
  { key: "concerts",        label: "Concerts",           emoji: "🎵" },
  { key: "open-air-plage",  label: "Open air & Plage",   emoji: "🏖️" },
  { key: "rando-sport",     label: "Rando & Sport",      emoji: "🥾" },
  { key: "restaurants",     label: "Restaurants",        emoji: "🍽️" },
  { key: "culture",         label: "Culture",            emoji: "🏛️" },
  { key: "famille",         label: "Famille",            emoji: "👨‍👩‍👧" },
  { key: "marches-forains", label: "Marchés",            emoji: "🛒" },
];

export default function OnboardingWizard({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [bassin, setBassin] = useState<string[]>([]);
  const [cats, setCats] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const toggleBassin = (b: string) => setBassin((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);
  const toggleCat = (c: string) => setCats((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);

  const finish = () => {
    localStorage.setItem(KEY, "1");
    if (bassin.length > 0) localStorage.setItem("sr_preferred_bassins", JSON.stringify(bassin));
    if (cats.length > 0) localStorage.setItem("sr_interests", JSON.stringify(cats));
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl w-full max-w-md p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-brand-orange" />
            <h2 className="font-bold text-lg">Bienvenue à La Réunion 🌴</h2>
          </div>
          <button onClick={finish} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"><X size={18} /></button>
        </div>

        {step === 0 && (
          <>
            <p className="text-sm text-gray-500">Où êtes-vous sur l'île ?</p>
            <div className="grid grid-cols-2 gap-2">
              {BASSINS.map((b) => (
                <button key={b} onClick={() => toggleBassin(b)} className={cn("flex items-center justify-between px-3 py-2.5 rounded-xl border text-sm font-medium transition-all", bassin.includes(b) ? "border-brand-teal bg-brand-teal/5 text-brand-teal" : "border-gray-200 dark:border-white/10 hover:border-brand-teal")}>
                  {b} {bassin.includes(b) && <Check size={14} />}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <p className="text-sm text-gray-500">Quels types de sorties vous intéressent ?</p>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map(({ key, label, emoji }) => (
                <button key={key} onClick={() => toggleCat(key)} className={cn("flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all", cats.includes(key) ? "border-brand-teal bg-brand-teal/5 text-brand-teal" : "border-gray-200 dark:border-white/10 hover:border-brand-teal")}>
                  <span>{emoji}</span><span>{label}</span>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="flex gap-3">
          {step === 0 ? (
            <button onClick={() => setStep(1)} className="flex items-center gap-1 ml-auto text-sm font-medium text-brand-teal hover:underline">
              Suivant <ChevronRight size={16} />
            </button>
          ) : (
            <>
              <button onClick={() => setStep(0)} className="text-sm text-gray-400 hover:underline">Retour</button>
              <button onClick={finish} className="ml-auto flex items-center gap-1 text-sm font-medium text-brand-teal hover:underline">
                Commencer <Sparkles size={14} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
