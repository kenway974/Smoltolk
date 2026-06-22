'use client'

import { useState, useEffect } from 'react'
import type { Activity } from '@/types'

const KEY = 'itinerary'

export function useItinerary() {
  const [items, setItems] = useState<Activity[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY)
      if (stored) setItems(JSON.parse(stored))
    } catch {}
  }, [])

  const add = (activity: Activity) => {
    setItems((prev) => {
      if (prev.find((a) => a.id === activity.id)) return prev
      const next = [...prev, activity]
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }

  const remove = (id: string) => {
    setItems((prev) => {
      const next = prev.filter((a) => a.id !== id)
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }

  const clear = () => {
    localStorage.removeItem(KEY)
    setItems([])
  }

  return { items, add, remove, clear }
}
