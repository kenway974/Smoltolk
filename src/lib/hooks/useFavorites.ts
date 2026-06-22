'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export function useFavorites(activityId: string) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [loading, setLoading] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const check = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('favorites')
        .select('id')
        .eq('user_id', user.id)
        .eq('activity_id', activityId)
        .single()
      setIsFavorite(!!data)
    }
    check()
  }, [activityId])

  const toggle = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    setLoading(true)
    if (isFavorite) {
      await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('activity_id', activityId)
      setIsFavorite(false)
    } else {
      await supabase.from('favorites').insert({ user_id: user.id, activity_id: activityId })
      setIsFavorite(true)
    }
    setLoading(false)
  }

  return { isFavorite, toggle, loading }
}
