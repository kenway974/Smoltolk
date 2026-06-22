'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Bell } from 'lucide-react'
import type { Notification } from '@/types'

export default function NotificationBell({ userId }: { userId: string }) {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unread, setUnread] = useState(0)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(20)
      setNotifications(data || [])
      setUnread((data || []).filter((n) => !n.read).length)
    }
    load()
  }, [userId])

  const markRead = async () => {
    setOpen(true)
    if (unread > 0) {
      await supabase
        .from('notifications')
        .update({ read: true })
        .eq('user_id', userId)
        .eq('read', false)
      setUnread(0)
    }
  }

  return (
    <div className="relative">
      <button onClick={markRead} className="relative p-1">
        <Bell className="h-5 w-5" />
        {unread > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange text-[10px] text-white">
            {unread > 9 ? '9+' : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-10 z-10 w-72 rounded-xl border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between border-b p-3 dark:border-gray-700">
            <h3 className="font-semibold">Notifications</h3>
            <button onClick={() => setOpen(false)} className="text-sm text-gray-500">Fermer</button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-4 text-center text-sm text-gray-500">Aucune notification</p>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  className={`border-b p-3 text-sm dark:border-gray-700 ${
                    !n.read ? 'bg-brand-orange/5' : ''
                  }`}
                >
                  <p>{n.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
