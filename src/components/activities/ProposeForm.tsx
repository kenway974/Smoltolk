'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { BASSINS } from '@/lib/data/bassins'
import type { ActivityCategory } from '@/types'

const CATEGORIES: ActivityCategory[] = [
  'nature', 'culture', 'sport', 'gastronomie', 'musique',
  'famille', 'plage', 'randonnee', 'plongee', 'marche',
]

export default function ProposeForm({ locale }: { locale: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'nature' as ActivityCategory,
    bassin: 'nord',
    start_date: '',
    start_time: '',
    end_date: '',
    location: '',
    price: '',
    is_free: false,
    is_outdoor: true,
    source_url: '',
  })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setError('Vous devez être connecté'); setLoading(false); return }

    const { error } = await supabase.from('activities').insert({
      ...form,
      price: form.price ? parseFloat(form.price) : null,
      user_id: user.id,
      status: 'pending',
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push(`/${locale}?proposed=1`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Titre *"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <div>
        <label className="mb-1 block text-sm font-medium">Description *</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={4}
          required
          className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange dark:border-gray-700 dark:bg-gray-800"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">Catégorie</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value as ActivityCategory })}
            className="w-full rounded-lg border px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
          >
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Bassin</label>
          <select
            value={form.bassin}
            onChange={(e) => setForm({ ...form, bassin: e.target.value })}
            className="w-full rounded-lg border px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
          >
            {BASSINS.map((b) => <option key={b.slug} value={b.slug}>{b.name}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Date de début *"
          type="date"
          value={form.start_date}
          onChange={(e) => setForm({ ...form, start_date: e.target.value })}
          required
        />
        <Input
          label="Heure"
          type="time"
          value={form.start_time}
          onChange={(e) => setForm({ ...form, start_time: e.target.value })}
        />
      </div>
      <Input
        label="Lieu"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Prix (€)"
          type="number"
          min="0"
          step="0.01"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          disabled={form.is_free}
        />
        <div className="flex items-center gap-2 pt-6">
          <input
            type="checkbox"
            id="is_free"
            checked={form.is_free}
            onChange={(e) => setForm({ ...form, is_free: e.target.checked, price: e.target.checked ? '' : form.price })}
          />
          <label htmlFor="is_free" className="text-sm">Gratuit</label>
        </div>
      </div>
      <Input
        label="URL source"
        type="url"
        value={form.source_url}
        onChange={(e) => setForm({ ...form, source_url: e.target.value })}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" loading={loading} className="w-full">
        Soumettre l'activité
      </Button>
    </form>
  )
}
