'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import DiscoverButton from './DiscoverButton'

export default function QuickFilters({ locale }: { locale: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const apply = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(key, value)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 py-4">
      <button
        onClick={() => apply('price', 'free')}
        className="rounded-full bg-brand-green/10 px-4 py-2 text-sm font-medium text-brand-green transition hover:bg-brand-green/20"
      >
        Gratuit
      </button>
      <button
        onClick={() => {
          const tonight = new Date().toISOString().split('T')[0]
          apply('date', tonight)
        }}
        className="rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-medium text-brand-orange transition hover:bg-brand-orange/20"
      >
        Ce soir
      </button>
      <button
        onClick={() => {
          const d = new Date()
          const day = d.getDay()
          const toSat = (6 - day + 7) % 7 || 7
          d.setDate(d.getDate() + toSat)
          apply('date', d.toISOString().split('T')[0])
        }}
        className="rounded-full bg-brand-teal/10 px-4 py-2 text-sm font-medium text-brand-teal transition hover:bg-brand-teal/20"
      >
        Week-end
      </button>
      <DiscoverButton locale={locale} />
    </div>
  )
}
