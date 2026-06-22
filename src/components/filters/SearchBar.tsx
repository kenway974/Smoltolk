'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, X, Clock } from 'lucide-react'
import { useSearchHistory } from '@/lib/hooks/useSearchHistory'

export default function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [focused, setFocused] = useState(false)
  const { history, add: addHistory, clear } = useSearchHistory()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (q: string) => {
    if (!q.trim()) return
    addHistory(q.trim())
    const params = new URLSearchParams(searchParams.toString())
    params.set('q', q.trim())
    router.push(`?${params.toString()}`)
    setFocused(false)
  }

  const handleClear = () => {
    setQuery('')
    const params = new URLSearchParams(searchParams.toString())
    params.delete('q')
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-3 backdrop-blur-sm">
        <Search className="h-5 w-5 text-white/70" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
          placeholder="Rechercher une activité..."
          className="flex-1 bg-transparent text-white placeholder-white/70 outline-none"
        />
        {query && (
          <button onClick={handleClear}>
            <X className="h-4 w-4 text-white/70" />
          </button>
        )}
      </div>

      {focused && history.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded-xl bg-white shadow-lg dark:bg-gray-800">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-xs text-gray-500">Recherches récentes</span>
            <button onClick={clear} className="text-xs text-red-500">Effacer</button>
          </div>
          {history.slice(0, 5).map((h, i) => (
            <button
              key={i}
              onClick={() => { setQuery(h); handleSearch(h) }}
              className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Clock className="h-4 w-4 text-gray-400" />
              {h}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
