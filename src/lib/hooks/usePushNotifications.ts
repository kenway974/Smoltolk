'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { VAPID_PUBLIC_KEY } from '@/utils/vapid'

export function usePushNotifications() {
  const [isSupported, setIsSupported] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const check = async () => {
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) return
      setIsSupported(true)
      const reg = await navigator.serviceWorker.ready
      const sub = await reg.pushManager.getSubscription()
      setIsSubscribed(!!sub)
    }
    check()
  }, [])

  const subscribe = async () => {
    setLoading(true)
    try {
      const reg = await navigator.serviceWorker.ready
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: VAPID_PUBLIC_KEY,
      })
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await supabase.from('push_subscriptions').upsert({
          user_id: user.id,
          endpoint: sub.endpoint,
          keys: sub.toJSON().keys,
        })
      }
      setIsSubscribed(true)
    } catch (e) {
      console.error('Push subscribe error:', e)
    }
    setLoading(false)
  }

  const unsubscribe = async () => {
    setLoading(true)
    const reg = await navigator.serviceWorker.ready
    const sub = await reg.pushManager.getSubscription()
    if (sub) {
      await sub.unsubscribe()
      await supabase
        .from('push_subscriptions')
        .delete()
        .eq('endpoint', sub.endpoint)
    }
    setIsSubscribed(false)
    setLoading(false)
  }

  return { isSupported, isSubscribed, subscribe, unsubscribe, loading }
}
