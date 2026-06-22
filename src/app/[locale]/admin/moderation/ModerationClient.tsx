'use client'

import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import type { Activity } from '@/types'

export default function ModerationClient() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const load = async () => {
    setLoading(true)
    const { data } = await supabase
      .from('activities')
      .select('*')
      .eq('status', 'pending')
      .order('created_at', { ascending: true })
    setActivities(data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const moderate = async (id: string, status: 'approved' | 'rejected') => {
    await supabase.from('activities').update({ status }).eq('id', id)
    setActivities((prev) => prev.filter((a) => a.id !== id))
  }

  if (loading) return <div className="p-8 text-center">Chargement...</div>

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Modération</h1>
      {activities.length === 0 ? (
        <p className="text-gray-500">Aucune activité en attente</p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="rounded-xl border p-4 dark:border-gray-700">
              <h2 className="font-semibold">{activity.title}</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => moderate(activity.id, 'approved')}
                  className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Approuver
                </button>
                <button
                  onClick={() => moderate(activity.id, 'rejected')}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Rejeter
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
