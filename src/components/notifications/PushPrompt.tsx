'use client'

import { useState, useEffect } from 'react'
import { usePushNotifications } from '@/lib/hooks/usePushNotifications'
import { Bell, X } from 'lucide-react'

export default function PushPrompt() {
  const [show, setShow] = useState(false)
  const { subscribe, isSupported, isSubscribed } = usePushNotifications()

  useEffect(() => {
    if (!isSupported || isSubscribed) return
    const dismissed = localStorage.getItem('push-prompt-dismissed')
    if (dismissed) return
    const timer = setTimeout(() => setShow(true), 3000)
    return () => clearTimeout(timer)
  }, [isSupported, isSubscribed])

  const handleAccept = async () => {
    await subscribe()
    setShow(false)
  }

  const handleDismiss = () => {
    localStorage.setItem('push-prompt-dismissed', '1')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 rounded-2xl bg-brand-navy p-4 text-white shadow-xl md:bottom-4 md:left-auto md:right-4 md:w-80">
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-3 opacity-60 hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-3">
        <Bell className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-orange" />
        <div>
          <p className="font-semibold">Restez informé !</p>
          <p className="mt-1 text-sm opacity-80">
            Recevez des rappels pour vos activités favorites.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleAccept}
              className="rounded-lg bg-brand-orange px-3 py-1.5 text-sm font-medium"
            >
              Activer
            </button>
            <button
              onClick={handleDismiss}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-sm"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
