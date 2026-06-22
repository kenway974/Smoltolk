"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Clock, Users, ExternalLink, Heart, ArrowLeft, Star, Share2, Check } from "lucide-react";
import { formatDate, formatTime, formatPrice } from "@/lib/utils/formatters";
import { useFavorites } from "@/lib/hooks/useFavorites";
import { useRecentlyViewed } from "@/lib/hooks/useRecentlyViewed";
import GoingButton from "@/components/activities/GoingButton";
import AddToCollectionButton from "@/components/activities/AddToCollectionButton";
import ReportModal from "@/components/activities/ReportModal";
import type { Activity } from "@/types";
import { cn } from "@/lib/utils/cn";

interface Props { activity: Activity; userId: string | null; locale: string; }

const BASSIN_LABEL: Record<string, string> = { nord: "Nord", ouest: "Ouest", sud: "Sud", est: "Est" };

export default function ActivityDetailClient({ activity, userId, locale }: Props) {
  const { favoriteIds, toggle } = useFavorites(userId);
  const { add: addRecentlyViewed } = useRecentlyViewed();
  const [copied, setCopied] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const isFav = favoriteIds.has(activity.id);

  useEffect(() => {
    addRecentlyViewed({ id: activity.id, title: activity.title, category: activity.category });
  }, []);

  const share = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <Link href={`/${locale}/activities`} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-teal transition-colors">
        <ArrowLeft size={16} /> Retour
      </Link>

      {activity.image_url && (
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
          <Image src={activity.image_url} alt={activity.title} fill className="object-cover" />
        </div>
      )}

      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-brand-navy dark:text-white">{activity.title}</h1>

        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-white/60">
          <span className="flex items-center gap-1"><Calendar size={14} className="text-brand-teal" />{formatDate(activity.date_start)}</span>
          {activity.time_start && <span className="flex items-center gap-1"><Clock size={14} className="text-brand-teal" />{formatTime(activity.time_start)}{activity.time_end ? ` – ${formatTime(activity.time_end)}` : ""}</span>}
          {(activity.location || activity.bassin) && (
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-brand-teal" />
              {activity.location ?? ""}{activity.location && activity.bassin ? " · " : ""}{activity.bassin ? BASSIN_LABEL[activity.bassin] ?? activity.bassin : ""}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className={cn("font-semibold", activity.price_type === "free" ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-white/80")}>
            {formatPrice(activity.price_type, activity.price_detail)}
          </span>
          {activity.is_outdoor && <span className="text-xs bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded-full">Extérieur</span>}
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <GoingButton activityId={activity.id} userId={userId} />
        <button onClick={() => toggle(activity.id)} className={cn("flex items-center gap-1.5 text-sm font-medium transition-colors", isFav ? "text-red-500" : "text-gray-500 hover:text-red-400")}>
          <Heart size={16} fill={isFav ? "currentColor" : "none"} />
          {isFav ? "Favori" : "Ajouter aux favoris"}
        </button>
        <AddToCollectionButton activityId={activity.id} userId={userId} />
        <button onClick={share} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-teal transition-colors ml-auto">
          {copied ? <Check size={16} /> : <Share2 size={16} />}
          {copied ? "Copié !" : "Partager"}
        </button>
      </div>

      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p>{activity.description}</p>
      </div>

      {activity.external_url && (
        <a href={activity.external_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-brand-teal hover:underline">
          <ExternalLink size={14} /> Plus d'infos sur le site officiel
        </a>
      )}

      <button onClick={() => setReportOpen(true)} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
        Signaler ce contenu
      </button>

      <ReportModal open={reportOpen} onClose={() => setReportOpen(false)} contentType="activity" contentId={activity.id} />
    </div>
  );
}
