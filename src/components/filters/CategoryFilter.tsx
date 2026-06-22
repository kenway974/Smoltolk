'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const CATEGORIES = [
  { slug: 'nature', label: 'Nature', emoji: '⛰️' },
  { slug: 'culture', label: 'Culture', emoji: 'Ἵb️' },
  { slug: 'sport', label: 'Sport', emoji: '⚽' },
  { slug: 'gastronomie', label: 'Gastronomie', emoji: 'ἷd️' },
  { slug: 'musique', label: 'Musique', emoji: 'Ἳ5' },
  { slug: 'famille', label: 'Famille', emoji: '὆a' },
  { slug: 'plage', label: 'Plage', emoji: 'Ἵ6️' },
  { slug: 'randonnee', label: 'Randonnée', emoji: 'ᾗe' },
  { slug: 'plongee', label: 'Plongée', emoji: 'ᾓf' },
  { slug: 'marche', label: 'Marché', emoji: 'Ὥ2' },
]

export default function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = searchParams.get('category')

  const setCategory = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (slug) params.set('category', slug)
    else params.delete('category')
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      <button
        onClick={() => setCategory(null)}
        className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition ${
          !active
            ? 'bg-brand-orange text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
        }`}
      >
        Tout
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => setCategory(active === cat.slug ? null : cat.slug)}
          className={`flex flex-shrink-0 items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition ${
            active === cat.slug
              ? 'bg-brand-orange text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
          }`}
        >
          <span>{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
    </div>
  )
}
