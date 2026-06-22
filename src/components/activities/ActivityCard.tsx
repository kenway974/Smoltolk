"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Heart, MapPin, Flame, Star } from "lucide-react";
import { formatDateShort, formatTime, formatPrice } from "@/lib/utils/formatters";
import type { Activity } from "@/types";
import { cn } from "@/lib/utils/cn";

const CATEGORY_EMOJI: Record<string, string> = {
  soirees: "🎉", concerts: "🎵", expositions: "🎨", restaurants: "🍽️",
  bars: "🍹", sport: "⚽", culture: "🏛️", famille: "👨‍👩‍👧",
  "open-air-plage": "🏖️", "marches-forains": "🛒", "rando-sport": "🥾",
  loisirs: "🎡", etudiants: "🎓", networking: "🤝", salons: "🏛️",
};

interface ActivityCardProps {
  activity: Activity;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  className?: string;
}

export default function ActivityCard({ activity, isFavorite, onToggleFavorite, className }: ActivityCardProps) {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "fr";
  const [imgError, setImgError] = useState(false);
  const emoji = CATEGORY_EMOJI[activity.category] ?? "📍";

  return (
    <article className={cn("bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow", className)}>
      <Link href={`/${locale}/activities/${activity.id}`} className="block">
        <div className="relative aspect-video bg-gray-100 dark:bg-white/5">
          {activity.image_url && !imgError ? (
            <Image src={activity.image_url} alt={activity.title} fill className="object-cover" onError={() => setImgError(true)} sizes="(max-width:640px) 100vw, 400px" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-4xl">{emoji}</div>
          )}
          {activity.is_outdoor && (
            <span className="absolute top-2 right-2 bg-brand-teal/90 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">Extérieur</span>
          )}
        </div>
        <div className="px-3 pt-3 pb-3.5 space-y-1.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-sm text-brand-navy dark:text-white line-clamp-2 leading-tight">{activity.title}</h3>
            <span className="text-lg flex-shrink-0">{emoji}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-white/50">
            <MapPin size={11} />
            <span className="truncate">{activity.location ?? activity.bassin ?? "La Réunion"}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-brand-teal font-medium">{formatDateShort(activity.date_start)}{activity.time_start ? ` · ${formatTime(activity.time_start)}` : ""}</span>
            <span className={cn("font-medium", activity.price_type === "free" ? "text-green-600 dark:text-green-400" : "text-gray-600 dark:text-white/60")}>
              {formatPrice(activity.price_type, activity.price_detail)}
            </span>
          </div>
        </div>
      </Link>
      {onToggleFavorite && (
        <div className="px-3 pb-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">{activity.going_count ? `${activity.going_count} participent` : ""}</span>
          <button
            onClick={() => onToggleFavorite(activity.id)}
            className={cn("p-1.5 rounded-full transition-colors", isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-400")}
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </div>
      )}
    </article>
  );
}
