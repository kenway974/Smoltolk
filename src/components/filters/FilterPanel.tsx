'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { BASSINS } from '@/lib/data/bassins'
import Button from '@/components/ui/Button'

export default function FilterPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [bassin, setBassin] = useState(searchParams.get('bassin') || '')
  const [price, setPrice] = useState(searchParams.get('price') || '')
  const [date, setDate] = useState(searchParams.get('date') || '')
  const [outdoor, setOutdoor] = useState(searchParams.get('outdoor') || '')

  const apply = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (bassin) params.set('bassin', bassin); else params.delete('bassin')
    if (price) params.set('price', price); else params.delete('price')
    if (date) params.set('date', date); else params.delete('date')
    if (outdoor) params.set('outdoor', outdoor); else params.delete('outdoor')
    router.push(`?${params.toString()}`)
    onClose()
  }

  const reset = () => {
    setBassin(''); setPrice(''); setDate(''); setOutdoor('')
    router.push('?')
    onClose()
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-t-2xl bg-white p-6 dark:bg-gray-900 md:rounded-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Filtres</h2>
          <button onClick={onClose}><X className="h-5 w-5" /></button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Bassin</label>
            <select
              value={bassin}
              onChange={(e) => setBassin(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="">Tous les bassins</option>
              {BASSINS.map((b) => <option key={b.slug} value={b.slug}>{b.name}</option>)}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Prix</label>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="">Tous les prix</option>
              <option value="free">Gratuit</option>
              <option value="paid">Payant</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-800"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Lieu</label>
            <select
              value={outdoor}
              onChange={(e) => setOutdoor(e.target.value)}
              className="w-full rounded-lg border px-3 py-2 dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="">Tous</option>
              <option value="true">Extérieur</option>
              <option value="false">Intérieur</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button variant="ghost" onClick={reset} className="flex-1">Réinitialiser</Button>
          <Button onClick={apply} className="flex-1">Appliquer</Button>
        </div>
      </div>
    </div>,
    document.body
  )
}
