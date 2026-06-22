"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import type { ActivityFilters, Bassin } from "@/types";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

const DATE_CHIPS = [
  { key: "today",        label: "Ce soir"         },
  { key: "this_week",    label: "Cette semaine"   },
  { key: "this_weekend", label: "Week-end"        },
  { key: "this_month",   label: "Ce mois"         },
] as const;

const PRICE_CHIPS = [
  { key: "all",  label: "Tous les prix" },
  { key: "free", label: "Gratuit"       },
  { key: "paid", label: "Payant"        },
] as const;

const BASSINS: { key: Bassin | "all"; label: string }[] = [
  { key: "all",   label: "Toute l'île" },
  { key: "nord",  label: "Nord (Saint-Denis)" },
  { key: "ouest", label: "Ouest (Saint-Paul)"  },
  { key: "sud",   label: "Sud (Saint-Pierre)"  },
  { key: "est",   label: "Est (Saint-Benoît)"  },
];

interface FilterPanelProps {
  filters: ActivityFilters;
  onChange: (f: ActivityFilters) => void;
  count?: number;
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={cn("px-3 py-1.5 rounded-full text-sm border transition-all",
      active ? "bg-brand-teal text-white border-brand-teal" : "border-gray-200 dark:border-white/10 hover:border-brand-teal text-gray-700 dark:text-white/70"
    )}>{label}</button>
  );
}

export default function FilterPanel({ filters, onChange, count }: FilterPanelProps) {
  const [open, setOpen] = useState(false);
  const activeCount = [filters.date, filters.price, filters.bassin !== "all" && filters.bassin, filters.is_outdoor != null].filter(Boolean).length;

  const panel = open && (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative bg-white dark:bg-[#1a1a1a] rounded-t-2xl sm:rounded-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-5 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Filtres</h2>
          <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"><X size={18} /></button>
        </div>

        <section>
          <h3 className="text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">Quand ?</h3>
          <div className="flex flex-wrap gap-2">
            {DATE_CHIPS.map(({ key, label }) => (
              <Chip key={key} label={label} active={filters.date === key} onClick={() => onChange({ ...filters, date: filters.date === key ? "all" : key })} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">Prix</h3>
          <div className="flex flex-wrap gap-2">
            {PRICE_CHIPS.map(({ key, label }) => (
              <Chip key={key} label={label} active={(filters.price ?? "all") === key} onClick={() => onChange({ ...filters, price: key as ActivityFilters["price"] })} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">Bassin</h3>
          <div className="flex flex-wrap gap-2">
            {BASSINS.map(({ key, label }) => (
              <Chip key={key} label={label} active={(filters.bassin ?? "all") === key} onClick={() => onChange({ ...filters, bassin: key as Bassin | "all" })} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">Lieu</h3>
          <div className="flex gap-2">
            <Chip label="Intérieur" active={filters.is_outdoor === false} onClick={() => onChange({ ...filters, is_outdoor: filters.is_outdoor === false ? null : false })} />
            <Chip label="Extérieur / Plein air" active={filters.is_outdoor === true} onClick={() => onChange({ ...filters, is_outdoor: filters.is_outdoor === true ? null : true })} />
          </div>
        </section>

        <Button className="w-full" onClick={() => setOpen(false)}>
          Voir {count !== undefined ? `${count} résultat${count > 1 ? "s" : ""}` : "les résultats"}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => setOpen(true)} className={cn("flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all", activeCount > 0 ? "border-brand-teal bg-brand-teal/5 text-brand-teal" : "border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/70 hover:border-brand-teal")}>
        <SlidersHorizontal size={16} />
        Filtres
        {activeCount > 0 && <span className="bg-brand-teal text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">{activeCount}</span>}
      </button>
      {open && typeof document !== "undefined" && createPortal(panel, document.body)}
    </>
  );
}
