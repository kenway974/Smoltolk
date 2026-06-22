'use client'

import { useState, useEffect } from 'react'

const KEY = 'recently-viewed'
const MAX = 10

interface ViewedItem {
  id: string
  title: string
}

export function useRecentlyViewed() {
  const [items, setItems] = useState<ViewedItem[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY)
      if (stored) setItems(JSON.parse(stored))
    } catch {}
  }, [])

  const add = (item: ViewedItem) => {
    setItems((prev) => {
      const filtered = prev.filter((i) => i.id !== item.id)
      const next = [item, ...filtered].slice(0, MAX)
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }

  return { items, add }
}
