"use client";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Badge from "@/components/ui/Badge";
import type { Activity } from "@/types";

export default function ModerationClient({ activities }: { activities: Activity[] }) {
  const [list, setList] = useState(activities);

  const moderate = async (id: string, status: "approved" | "rejected") => {
    const supabase = createClient();
    await supabase.from("activities").update({ status }).eq("id", id);
    setList((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-xl font-bold">Modération ({list.length})</h1>
      {list.length === 0 && <p className="text-gray-400 text-center py-8">Aucun événement en attente.</p>}
      {list.map((activity) => (
        <div key={activity.id} className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-white/10 p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium">{activity.title}</h3>
            <Badge variant="warning">En attente</Badge>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">{activity.description}</p>
          <div className="flex gap-2">
            <button onClick={() => moderate(activity.id, "approved")} className="flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-medium">
              <Check size={14} /> Approuver
            </button>
            <button onClick={() => moderate(activity.id, "rejected")} className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 font-medium">
              <X size={14} /> Rejeter
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
