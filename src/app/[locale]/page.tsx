import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import ActivityCard from '@/components/activities/ActivityCard'
import CategoryFilter from '@/components/filters/CategoryFilter'
import SearchBar from '@/components/filters/SearchBar'
import QuickFilters from '@/components/home/QuickFilters'
import RecentlyViewed from '@/components/home/RecentlyViewed'
import GlobalStoriesBar from '@/components/stories/GlobalStoriesBar'
import type { Activity, ActivityFilters } from '@/types'

export default async function HomePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<Record<string, string | string[]>>
}) {
  const { locale } = await params
  const sp = await searchParams

  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll() {},
      },
    }
  )

  const filters: ActivityFilters = {
    category: sp.category as string | undefined,
    bassin: sp.bassin as string | undefined,
    q: sp.q as string | undefined,
  }

  let query = supabase
    .from('activities')
    .select('*')
    .eq('status', 'approved')
    .order('start_date', { ascending: true })
    .limit(24)

  if (filters.category) query = query.eq('category', filters.category)
  if (filters.bassin) query = query.eq('bassin', filters.bassin)
  if (filters.q) query = query.ilike('title', `%${filters.q}%`)

  const { data: activities } = await query

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-navy to-brand-teal px-4 py-12 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Découvrez La Réunion
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Activités, sorties et événements à ne pas manquer
          </p>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      <GlobalStoriesBar />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <QuickFilters locale={locale} />
        <RecentlyViewed />
        <CategoryFilter />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(activities as Activity[] || []).map((activity) => (
            <ActivityCard key={activity.id} activity={activity} locale={locale} />
          ))}
        </div>

        {activities?.length === 0 && (
          <div className="py-16 text-center text-gray-500">
            Aucune activité trouvée
          </div>
        )}
      </div>
    </div>
  )
}
