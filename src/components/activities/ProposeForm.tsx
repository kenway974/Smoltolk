"use client";
import { useState, type ChangeEventHandler } from "react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import type { ActivityCategory, Bassin } from "@/types";

const CATEGORIES: { key: ActivityCategory; label: string }[] = [
  { key: "soirees",         label: "Soirée"           },
  { key: "concerts",        label: "Concert"          },
  { key: "expositions",     label: "Exposition"       },
  { key: "restaurants",     label: "Restaurant"       },
  { key: "bars",            label: "Bar"              },
  { key: "culture",         label: "Culture"          },
  { key: "open-air-plage",  label: "Open air & Plage" },
  { key: "marches-forains", label: "Marché"           },
  { key: "rando-sport",     label: "Rando & Sport"    },
  { key: "sport",           label: "Sport"            },
  { key: "famille",         label: "Famille"          },
  { key: "loisirs",         label: "Loisirs"          },
];

const BASSINS: { key: Bassin; label: string }[] = [
  { key: "nord",  label: "Nord"  },
  { key: "ouest", label: "Ouest" },
  { key: "sud",   label: "Sud"   },
  { key: "est",   label: "Est"   },
];

export default function ProposeForm() {
  const [form, setForm] = useState({ title: "", description: "", category: "" as ActivityCategory, bassin: "" as Bassin, date_start: "", time_start: "", location: "", price_type: "free" as "free" | "paid" | "suggested", price_detail: "", external_url: "", is_outdoor: false });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> = (e) => {
    const { name, value, type } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.title || !form.description || !form.category || !form.date_start) {
      setError("Veuillez remplir tous les champs obligatoires."); return;
    }
    setLoading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setError("Vous devez être connecté."); setLoading(false); return; }
    const { error: err } = await supabase.from("activities").insert({ ...form, creator_id: user.id, status: "pending" });
    if (err) { setError(err.message); setLoading(false); return; }
    setDone(true); setLoading(false);
  };

  if (done) return (
    <div className="text-center py-12 space-y-3">
      <p className="text-4xl">🌴</p>
      <p className="font-semibold text-lg">Merci !</p>
      <p className="text-gray-500 text-sm">Votre événement a été soumis et sera vérifié sous 24h.</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-4 max-w-lg">
      <Input name="title" label="Titre *" value={form.title} onChange={set} placeholder="Nom de l'événement" required />
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Description *</label>
        <textarea name="description" value={form.description} onChange={set} rows={4} required className="rounded-xl border border-gray-200 dark:border-white/10 p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="Décrivez l'événement…" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Catégorie *</label>
          <select name="category" value={form.category} onChange={set} required className="rounded-xl border border-gray-200 dark:border-white/10 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal bg-white dark:bg-white/5">
            <option value="">Choisir…</option>
            {CATEGORIES.map(({ key, label }) => <option key={key} value={key}>{label}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Bassin *</label>
          <select name="bassin" value={form.bassin} onChange={set} required className="rounded-xl border border-gray-200 dark:border-white/10 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal bg-white dark:bg-white/5">
            <option value="">Choisir…</option>
            {BASSINS.map(({ key, label }) => <option key={key} value={key}>{label}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input type="date" name="date_start" label="Date *" value={form.date_start} onChange={set} required />
        <Input type="time" name="time_start" label="Heure" value={form.time_start} onChange={set} />
      </div>
      <Input name="location" label="Lieu" value={form.location} onChange={set} placeholder="Salle, quartier, commune…" />
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">Prix</label>
        <select name="price_type" value={form.price_type} onChange={set} className="rounded-xl border border-gray-200 dark:border-white/10 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal bg-white dark:bg-white/5">
          <option value="free">Gratuit</option>
          <option value="paid">Payant</option>
          <option value="suggested">Participation libre</option>
        </select>
      </div>
      {form.price_type !== "free" && <Input name="price_detail" label="Détail du prix" value={form.price_detail} onChange={set} placeholder="ex: 5€ / 10€ avec réservation" />}
      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input type="checkbox" name="is_outdoor" checked={form.is_outdoor} onChange={set} className="accent-brand-teal" />
        Événement en extérieur / plein air
      </label>
      <Input type="url" name="external_url" label="Lien (optionnel)" value={form.external_url} onChange={set} placeholder="https://…" />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" loading={loading} className="w-full">Soumettre l'événement</Button>
    </form>
  );
}
