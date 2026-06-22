"use client";
import type { ActivityCategory } from "@/types";
import { cn } from "@/lib/utils/cn";

const CATEGORIES: { key: ActivityCategory | "all"; emoji: string; label: string }[] = [
  { key: "all",            emoji: "🌴", label: "Tout"          },
  { key: "soirees",        emoji: "🎉", label: "Soirées"       },
  { key: "concerts",       emoji: "🎵", label: "Concerts"      },
  { key: "expositions",    emoji: "🎨", label: "Expositions"   },
  { key: "restaurants",    emoji: "🍽️",label: "Restaurants"   },
  { key: "bars",           emoji: "🍹", label: "Bars"          },
  { key: "culture",        emoji: "🏛️", label: "Culture"       },
  { key: "open-air-plage", emoji: "🏖️", label: "Open air & Plage" },
  { key: "marches-forains",emoji: "🛒", label: "Marchés"       },
  { key: "rando-sport",    emoji: "🥾", label: "Rando & Sport" },
  { key: "famille",        emoji: "👨‍👩‍👧", label: "Famille"      },
  { key: "sport",          emoji: "⚽", label: "Sport"         },
  { key: "loisirs",        emoji: "🎡", label: "Loisirs"       },
];

interface CategoryFilterProps {
  value: ActivityCategory | "all";
  onChange: (v: ActivityCategory | "all") => void;
}

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
      {CATEGORIES.map(({ key, emoji, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={cn(
            "flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all",
            value === key
              ? "bg-brand-teal text-white border-brand-teal"
              : "bg-white dark:bg-white/5 text-gray-700 dark:text-white/70 border-gray-200 dark:border-white/10 hover:border-brand-teal"
          )}
        >
          <span>{emoji}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
