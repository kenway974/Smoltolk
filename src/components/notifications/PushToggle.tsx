'use client'

import { usePushNotifications } from '@/lib/hooks/usePushNotifications'
import { Bell, BellOff } from 'lucide-react'

export default function PushToggle() {
  const { isSupported, isSubscribed, subscribe, unsubscribe, loading } = usePushNotifications()

  if (!isSupported) return null

  return (
    <div className="mt-6 rounded-xl border p-4 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-brand-orange" />
          <div>
            <p className="font-medium">Notifications push</p>
            <p className="text-sm text-gray-500">
              {isSubscribed ? 'Activées' : 'Désactivées'}
            </p>
          </div>
        </div>
        <button
          onClick={isSubscribed ? unsubscribe : subscribe}
          disabled={loading}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
            isSubscribed ? 'bg-brand-green' : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
              isSubscribed ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  )
}
