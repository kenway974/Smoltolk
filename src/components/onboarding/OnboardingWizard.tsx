'use client'

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { BASSINS } from '@/lib/data/bassins'
import Button from '@/components/ui/Button'

const CATEGORIES = [
  { slug: 'nature', emoji: '⛰️' },
  { slug: 'culture', emoji: 'Ἵb️' },
  { slug: 'sport', emoji: '⚽' },
  { slug: 'gastronomie', emoji: 'ἷd️' },
  { slug: 'musique', emoji: 'Ἳ5' },
  { slug: 'famille', emoji: '὆a' },
  { slug: 'plage', emoji: 'Ἵ6️' },
  { slug: 'randonnee', emoji: 'ᾗe' },
]

export default function OnboardingWizard() {
  const [step, setStep] = useState(1)
  const [bassin, setBassin] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const toggleInterest = (slug: string) => {
    setInterests((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const handleFinish = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from('profiles').upsert({
      id: user.id,
      bassin_preference: bassin,
      category_interests: interests,
      onboarding_completed: true,
    })
    localStorage.setItem('onboarding_done', '1')
    window.location.reload()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 dark:bg-gray-900">
        {step === 1 && (
          <>
            <h2 className="mb-4 text-xl font-bold">Où êtes-vous à La Réunion ?</h2>
            <div className="grid grid-cols-2 gap-2">
              {BASSINS.map((b) => (
                <button
                  key={b.slug}
                  onClick={() => setBassin(b.slug)}
                  className={`rounded-xl border p-3 text-left transition ${
                    bassin === b.slug
                      ? 'border-brand-orange bg-brand-orange/5'
                      : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <p className="font-medium">{b.name}</p>
                  <p className="text-xs text-gray-500">{b.communes.slice(0, 2).join(', ')}</p>
                </button>
              ))}
            </div>
            <Button onClick={() => setStep(2)} disabled={!bassin} className="mt-4 w-full">
              Suivant
            </Button>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="mb-4 text-xl font-bold">Vos intérêts</h2>
            <div className="grid grid-cols-4 gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => toggleInterest(c.slug)}
                  className={`flex flex-col items-center rounded-xl border p-2 transition ${
                    interests.includes(c.slug)
                      ? 'border-brand-orange bg-brand-orange/5'
                      : 'border-gray-200 hover:border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <span className="text-2xl">{c.emoji}</span>
                  <span className="mt-1 text-xs">{c.slug}</span>
                </button>
              ))}
            </div>
            <Button onClick={handleFinish} loading={loading} className="mt-4 w-full">
              Commencer !
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
