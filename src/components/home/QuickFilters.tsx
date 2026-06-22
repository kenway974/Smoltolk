"use client";
import { useRouter, useParams } from "next/navigation";
import { Moon, Sun, Calendar, Zap } from "lucide-react";

const FILTERS = [
  { label: "Ce soir",  value: "today",        icon: Moon,     desc: "Activités ce soir"          },
  { label: "Week-end", value: "this_weekend",  icon: Calendar, desc: "Ce week-end à La Réunion"   },
  { label: "Gratuit",  value: "free",          icon: Sun,      desc: "Entrée gratuite"             },
  { label: "Surprise", value: "random",        icon: Zap,      desc: "Découvrir au hasard"         },
];

export default function QuickFilters() {
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "fr";

  const handleClick = (value: string) => {
    if (value === "random") { router.push(`/${locale}/discover`); return; }
    if (value === "free") { router.push(`/${locale}/activities?price=free`); return; }
    router.push(`/${locale}/activities?date=${value}`);
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
      {FILTERS.map(({ label, value, icon: Icon }) => (
        <button key={value} onClick={() => handleClick(value)} className="flex-shrink-0 flex flex-col items-center gap-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-3 hover:border-brand-teal transition-all group">
          <Icon size={20} className="text-brand-teal group-hover:scale-110 transition-transform" />
          <span className="text-xs font-medium text-gray-700 dark:text-white/80">{label}</span>
        </button>
      ))}
    </div>
  );
}
