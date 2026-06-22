'use client'

import { useGoingStatus } from '@/lib/hooks/useGoingStatus'
import { UserCheck, UserPlus } from 'lucide-react'

export default function GoingButton({ activityId }: { activityId: string }) {
  const { isGoing, count, toggle, loading } = useGoingStatus(activityId)

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`flex items-center gap-2 rounded-lg px-5 py-2.5 font-semibold transition ${
        isGoing
          ? 'bg-brand-green text-white hover:bg-green-700'
          : 'bg-brand-orange text-white hover:bg-brand-volcano'
      }`}
    >
      {isGoing ? <UserCheck className="h-5 w-5" /> : <UserPlus className="h-5 w-5" />}
      {isGoing ? 'Je participe' : 'Je veux y aller'}
      {count > 0 && <span className="ml-1 opacity-80">({count})</span>}
    </button>
  )
}
