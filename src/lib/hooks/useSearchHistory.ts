'use client'

import { useState, useEffect } from 'react'

const KEY = 'search-history'
const MAX = 10

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY)
      if (stored) setHistory(JSON.parse(stored))
    } catch {}
  }, [])

  const add = (query: string) => {
    setHistory((prev) => {
      const filtered = prev.filter((q) => q !== query)
      const next = [query, ...filtered].slice(0, MAX)
      localStorage.setItem(KEY, JSON.stringify(next))
      return next
    })
  }

  const clear = () => {
    localStorage.removeItem(KEY)
    setHistory([])
  }

  return { history, add, clear }
}
