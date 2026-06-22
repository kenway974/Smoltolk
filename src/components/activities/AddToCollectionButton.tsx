"use client";
import { useState, useEffect, useCallback } from "react";
import { BookMarked, Plus, Check, X, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Props { activityId: string; userId: string | null; }

export default function AddToCollectionButton({ activityId, userId }: Props) {
  const [collections, setCollections] = useState<{ id: string; name: string; activity_ids: string[] }[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId || !open) return;
    createClient().from("collections").select("id,name,activity_ids").eq("user_id", userId).then(({ data }) => {
      setCollections(data ?? []);
    });
  }, [userId, open]);

  const toggle = useCallback(async (col: { id: string; activity_ids: string[] }) => {
    if (!userId) return;
    setLoading(true);
    const ids = col.activity_ids.includes(activityId)
      ? col.activity_ids.filter((i) => i !== activityId)
      : [...col.activity_ids, activityId];
    await createClient().from("collections").update({ activity_ids: ids }).eq("id", col.id);
    setCollections((prev) => prev.map((c) => c.id === col.id ? { ...c, activity_ids: ids } : c));
    setLoading(false);
  }, [activityId, userId]);

  if (!userId) return null;
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-teal transition-colors">
        <BookMarked size={16} /> Enregistrer
      </button>
      {open && (
        <div className="absolute top-full mt-1 right-0 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/10 rounded-xl shadow-lg z-50 min-w-[180px] overflow-hidden">
          <button onClick={() => setOpen(false)} className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded"><X size={14} /></button>
          <p className="px-3 pt-3 pb-1 text-xs font-medium text-gray-500">Mes listes</p>
          {collections.map((col) => (
            <button key={col.id} onClick={() => toggle(col)} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5">
              {col.activity_ids.includes(activityId) ? <Check size={14} className="text-brand-teal" /> : <Plus size={14} className="text-gray-400" />}
              <span className="truncate">{col.name}</span>
            </button>
          ))}
          {loading && <div className="flex justify-center py-2"><Loader2 size={16} className="animate-spin" /></div>}
        </div>
      )}
    </div>
  );
}
