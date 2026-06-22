'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function DiscoverButton({ locale }: { locale: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleDiscover = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/activities/random')
      if (!res.ok) throw new Error('Not found')
      const activity = await res.json()
      router.push(`/${locale}/activities/${activity.id}`)
    } catch {
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleDiscover} loading={loading} variant="secondary">
      <Sparkles className="h-4 w-4" />
      Surprise !
    </Button>
  )
}
