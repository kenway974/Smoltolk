"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Clock, X } from "lucide-react";
import { useRecentlyViewed, type RecentlyViewedItem } from "@/lib/hooks/useRecentlyViewed";
import { formatDateShort } from "@/lib/utils/formatters";

export default function RecentlyViewed() {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "fr";
  const { items, remove } = useRecentlyViewed();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || items.length === 0) return null;
  return (
    <section>
      <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 flex items-center gap-1.5 mb-3"><Clock size={14} /> Récemment vus</h2>
      <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
        {items.map((item: RecentlyViewedItem) => (
          <div key={item.id} className="relative flex-shrink-0 group">
            <Link href={`/${locale}/activities/${item.id}`} className="flex flex-col gap-1 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-3 w-36 hover:border-brand-teal transition-all">
              <span className="text-xs font-medium text-brand-navy dark:text-white line-clamp-2 leading-tight">{item.title}</span>
              <span className="text-xs text-gray-400">{item.category}</span>
            </Link>
            <button onClick={() => remove(item.id)} className="absolute -top-1 -right-1 hidden group-hover:flex bg-gray-200 dark:bg-white/20 rounded-full p-0.5 hover:bg-red-100 dark:hover:bg-red-900/30" aria-label="Retirer">
              <X size={10} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
