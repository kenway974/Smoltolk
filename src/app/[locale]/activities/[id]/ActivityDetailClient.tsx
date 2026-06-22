'use client'

import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import type { Activity } from '@/types'
import { useFavorites } from '@/lib/hooks/useFavorites'
import { useGoingStatus } from '@/lib/hooks/useGoingStatus'
import GoingButton from '@/components/activities/GoingButton'
import ReportModal from '@/components/activities/ReportModal'
import AddToCollectionButton from '@/components/activities/AddToCollectionButton'
import { formatDate, formatTime, formatPrice } from '@/utils/formatters'
import { Heart, Share2, Flag, MapPin, Calendar, Clock, Tag } from 'lucide-react'

export default function ActivityDetailClient({
  activity,
  locale,
  user,
}: {
  activity: Activity
  locale: string
  user: User | null
}) {
  const { isFavorite, toggle: toggleFavorite } = useFavorites(activity.id)
  const [showReport, setShowReport] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: activity.title,
        url: window.location.href,
      })
    } else {
      await navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {activity.image_url && (
        <div className="mb-6 overflow-hidden rounded-2xl">
          <img
            src={activity.image_url}
            alt={activity.title}
            className="h-64 w-full object-cover md:h-80"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold md:text-3xl">{activity.title}</h1>
        <div className="flex items-center gap-2">
          {user && (
            <>
              <button
                onClick={toggleFavorite}
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
              </button>
              <AddToCollectionButton activityId={activity.id} />
            </>
          )}
          <button
            onClick={handleShare}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Share2 className="h-5 w-5 text-gray-400" />
          </button>
          {user && (
            <button
              onClick={() => setShowReport(true)}
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Flag className="h-5 w-5 text-gray-400" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {formatDate(activity.start_date)}
        </span>
        {activity.start_time && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {formatTime(activity.start_time)}
          </span>
        )}
        {activity.location && (
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {activity.location}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Tag className="h-4 w-4" />
          {activity.category}
        </span>
      </div>

      <div className="mt-4">
        <span className="text-lg font-semibold text-brand-orange">
          {formatPrice(activity.price)}
        </span>
      </div>

      <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
        {activity.description}
      </p>

      {activity.source_url && (
        <a
          href={activity.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-brand-orange px-6 py-3 text-white transition hover:bg-brand-volcano"
        >
          Plus d'informations
        </a>
      )}

      {user && (
        <div className="mt-6">
          <GoingButton activityId={activity.id} />
        </div>
      )}

      {showReport && (
        <ReportModal
          contentId={activity.id}
          contentType="activity"
          onClose={() => setShowReport(false)}
        />
      )}
    </div>
  )
}
