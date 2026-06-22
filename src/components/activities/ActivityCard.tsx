'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import type { Activity } from '@/types'
import { useFavorites } from '@/lib/hooks/useFavorites'
import { formatDate, formatPrice } from '@/utils/formatters'

const CATEGORY_EMOJI: Record<string, string> = {
  nature: '⛰️',
  culture: 'Ἵb️',
  sport: '⚽',
  gastronomie: 'ἷd️',
  musique: 'Ἳ5',
  famille: '὆a',
  plage: 'Ἵ6️',
  randonnee: 'ᾗe',
  plongee: 'ᾓf',
  marche: 'Ὥ2',
}

export default function ActivityCard({
  activity,
  locale,
}: {
  activity: Activity
  locale: string
}) {
  const { isFavorite, toggle } = useFavorites(activity.id)

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <Link href={`/${locale}/activities/${activity.id}`}>
        <div className="relative h-44 bg-gray-100 dark:bg-gray-800">
          {activity.image_url ? (
            <Image
              src={activity.image_url}
              alt={activity.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-5xl">
              {CATEGORY_EMOJI[activity.category] || 'Ὄ5'}
            </div>
          )}
          {activity.is_free && (
            <span className="absolute left-2 top-2 rounded-full bg-brand-green px-2 py-0.5 text-xs font-semibold text-white">
              Gratuit
            </span>
          )}
        </div>
        <div className="p-3">
          <h3 className="line-clamp-2 font-semibold leading-snug">{activity.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{formatDate(activity.start_date)}</p>
          <p className="mt-1 text-sm font-medium text-brand-orange">{formatPrice(activity.price)}</p>
        </div>
      </Link>
      <button
        onClick={(e) => { e.preventDefault(); toggle() }}
        className="absolute right-2 top-2 rounded-full bg-white/80 p-1.5 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900"
        aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      >
        <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
      </button>
    </div>
  )
}
