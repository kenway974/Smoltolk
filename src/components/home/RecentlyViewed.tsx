'use client'

import Link from 'next/link'
import { useRecentlyViewed } from '@/lib/hooks/useRecentlyViewed'

export default function RecentlyViewed() {
  const { items } = useRecentlyViewed()

  if (items.length === 0) return null

  return (
    <div className="mb-4">
      <h2 className="mb-2 text-sm font-semibold text-gray-500">Récemment consultés</h2>
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
        {items.slice(0, 8).map((item) => (
          <Link
            key={item.id}
            href={`/fr/activities/${item.id}`}
            className="flex-shrink-0 rounded-lg bg-gray-100 px-3 py-1.5 text-sm hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
