import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { MapPin, Calendar, ArrowRight, Zap, Search, Heart, Sparkles, ChevronRight } from "lucide-react";
import { getSiteUrl } from "@/lib/utils/siteUrl";
import { futureOrClause } from "@/lib/utils/reunionTime";
import ActivityCard from "@/components/activities/ActivityCard";
import CategoryFilter from "@/components/filters/CategoryFilter";
import QuickFilters from "@/components/home/QuickFilters";
import RecentlyViewed from "@/components/home/RecentlyViewed";
import DiscoverButton from "@/components/home/DiscoverButton";
import GlobalStoriesBar from "@/components/stories/GlobalStoriesBar";
import type { Metadata } from "next";
import type { ActivityCategory } from "@/types";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const base = getSiteUrl();
  return {
    alternates: { canonical: `${base}/fr` },
  };
}

export default async function HomePage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ category?: string }> }) {
  const { locale } = await params;
  const { category } = await searchParams;
  const supabase = await createClient();
  const { date, time } = (await import("@/lib/utils/reunionTime")).reunionNow();

  const { data: { user } } = await supabase.auth.getUser();

  let query = supabase
    .from("activities")
    .select("*")
    .eq("status", "approved")
    .or(futureOrClause())
    .order("date_start", { ascending: true })
    .limit(24);

  if (category && category !== "all") {
    query = query.eq("category", category);
  }

  const { data: activities } = await query;

  const { data: featuredActivities } = await supabase
    .from("activities")
    .select("*")
    .eq("status", "approved")
    .or(futureOrClause())
    .order("going_count", { ascending: false })
    .limit(4);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
      {/* Hero */}
      <section className="text-center space-y-4 py-8">
        <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal px-3 py-1.5 rounded-full text-sm font-medium">
          <MapPin size={14} />
          La Réunion — 974
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-navy dark:text-white">
          Sorties & événements<br />à <span className="text-brand-teal">La Réunion</span>
        </h1>
        <p className="text-gray-500 dark:text-white/60 max-w-md mx-auto">
          Concerts, randos, plage, culture, soirées… tout ce qui se passe sur l'île.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href={`/${locale}/activities`} className="flex items-center gap-2 bg-brand-teal text-white px-5 py-2.5 rounded-xl font-medium hover:bg-brand-green transition-colors">
            <Search size={16} /> Explorer
          </Link>
          <DiscoverButton />
        </div>
      </section>

      {/* Stories */}
      <section>
        <h2 className="text-sm font-medium text-gray-500 dark:text-white/50 mb-2">En ce moment 🌴</h2>
        <GlobalStoriesBar userId={user?.id} />
      </section>

      {/* Quick filters */}
      <section>
        <h2 className="font-semibold text-lg mb-3">Filtres rapides</h2>
        <QuickFilters />
      </section>

      {/* Recently viewed */}
      <RecentlyViewed />

      {/* Categories */}
      <section>
        <h2 className="font-semibold text-lg mb-3">Catégories</h2>
        <CategoryFilter
          value={(category as ActivityCategory) || "all"}
          onChange={(v) => {
            // client-side navigation handled by CategoryFilter
          }}
        />
      </section>

      {/* Events grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">
            {category && category !== "all" ? `Événements · ${category}` : "Événements à venir"}
          </h2>
          <Link href={`/${locale}/activities`} className="text-sm text-brand-teal hover:underline flex items-center gap-1">
            Tout voir <ChevronRight size={14} />
          </Link>
        </div>
        {activities && activities.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🌊</p>
            <p>Aucun événement à venir pour l'instant.</p>
            <Link href={`/${locale}/propose`} className="text-brand-teal text-sm hover:underline mt-2 inline-block">
              Proposer le premier →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
