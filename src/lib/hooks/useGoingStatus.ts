'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export function useGoingStatus(activityId: string) {
  const [isGoing, setIsGoing] = useState(false)
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()

      const [{ count: c }, userReg] = await Promise.all([
        supabase
          .from('registrations')
          .select('*', { count: 'exact', head: true })
          .eq('activity_id', activityId),
        user
          ? supabase
              .from('registrations')
              .select('id')
              .eq('activity_id', activityId)
              .eq('user_id', user.id)
              .single()
          : Promise.resolve({ data: null }),
      ])

      setCount(c || 0)
      setIsGoing(!!userReg.data)
    }
    load()
  }, [activityId])

  const toggle = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    setLoading(true)
    if (isGoing) {
      await supabase
        .from('registrations')
        .delete()
        .eq('activity_id', activityId)
        .eq('user_id', user.id)
      setIsGoing(false)
      setCount((c) => c - 1)
    } else {
      await supabase.from('registrations').insert({ activity_id: activityId, user_id: user.id })
      setIsGoing(true)
      setCount((c) => c + 1)
    }
    setLoading(false)
  }

  return { isGoing, count, toggle, loading }
}
