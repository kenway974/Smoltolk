'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import type { Activity } from '@/types'

export function useRealtimeActivities(initialActivities: Activity[]) {
  const [activities, setActivities] = useState(initialActivities)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const channel = supabase
      .channel('activities-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'activities' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newActivity = payload.new as Activity
            if (newActivity.status === 'approved') {
              setActivities((prev) => [newActivity, ...prev])
            }
          } else if (payload.eventType === 'UPDATE') {
            setActivities((prev) =>
              prev.map((a) => (a.id === payload.new.id ? (payload.new as Activity) : a))
            )
          } else if (payload.eventType === 'DELETE') {
            setActivities((prev) => prev.filter((a) => a.id !== payload.old.id))
          }
        }
      )
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  return activities
}
