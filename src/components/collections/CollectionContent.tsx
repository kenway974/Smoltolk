"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Share2, Check, Trash2, X, BookMarked } from "lucide-react";
import ActivityCard from "@/components/activities/ActivityCard";
import { createClient } from "@/lib/supabase/client";
import type { Activity } from "@/types";

interface Props { collection: { id: string; name: string; description?: string | null }; activities: Activity[]; userId: string; }

export default function CollectionContent({ collection, activities, userId }: Props) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const share = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  const deleteCollection = async () => {
    if (!confirm("Supprimer cette liste ?")) return;
    setDeleting(true);
    await createClient().from("collections").delete().eq("id", collection.id);
    router.push(`/fr/profile/collections`); router.refresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookMarked size={20} className="text-brand-teal" />
            <h1 className="text-xl font-bold">{collection.name}</h1>
          </div>
          {collection.description && <p className="text-sm text-gray-500 mt-1">{collection.description}</p>}
          <p className="text-xs text-gray-400 mt-1">{activities.length} événement{activities.length > 1 ? "s" : ""}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={share} className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand-teal transition-colors">
            {copied ? <Check size={16} /> : <Share2 size={16} />}
          </button>
          <button onClick={deleteCollection} disabled={deleting} className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      {activities.length === 0 ? (
        <p className="text-center text-gray-400 py-12">Cette liste est vide.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {activities.map((a) => <ActivityCard key={a.id} activity={a} />)}
        </div>
      )}
    </div>
  );
}
