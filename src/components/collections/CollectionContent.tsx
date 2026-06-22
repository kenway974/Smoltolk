'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import ActivityCard from '@/components/activities/ActivityCard'
import Button from '@/components/ui/Button'
import { Share2, Trash2 } from 'lucide-react'
import type { Activity, Collection } from '@/types'

export default function CollectionContent({
  collection,
  locale,
}: {
  collection: Collection
  locale: string
}) {
  const [activities, setActivities] = useState<Activity[]>([])

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('collection_items')
        .select('activity_id, activities(*)')
        .eq('collection_id', collection.id)
      setActivities((data || []).map((d: { activities: Activity }) => d.activities))
    }
    load()
  }, [collection.id])

  const handleShare = async () => { await navigator.clipboard.writeText(window.location.href) }

  const handleDelete = async () => {
    if (!confirm('Supprimer cette collection ?')) return
    await supabase.from('collections').delete().eq('id', collection.id)
    window.history.back()
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{collection.name}</h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={handleShare}><Share2 className="h-4 w-4" /></Button>
          <Button variant="danger" size="sm" onClick={handleDelete}><Trash2 className="h-4 w-4" /></Button>
        </div>
      </div>
      {activities.length === 0 ? (
        <p className="text-gray-500">Aucune activité dans cette collection</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} locale={locale} />
          ))}
        </div>
      )}
    </div>
  )
}
