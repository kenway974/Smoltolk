'use client'

import { useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import type { User } from '@supabase/supabase-js'
import UserBadges from '@/components/profile/UserBadges'
import PushToggle from '@/components/notifications/PushToggle'
import DeleteAccountButton from '@/components/auth/DeleteAccountButton'
import type { Profile } from '@/types'

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [stats, setStats] = useState({ favorites: 0, going: 0, reviews: 0 })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUser(user)

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      setProfile(profile)

      const [{ count: fav }, { count: going }, { count: rev }] = await Promise.all([
        supabase.from('favorites').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
        supabase.from('registrations').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
        supabase.from('reviews').select('*', { count: 'exact', head: true }).eq('user_id', user.id),
      ])
      setStats({ favorites: fav || 0, going: going || 0, reviews: rev || 0 })
    }
    load()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/fr'
  }

  if (!user) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p>Chargement...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
        <div className="flex items-center gap-4">
          {profile?.avatar_url ? (
            <img src={profile.avatar_url} alt="" className="h-16 w-16 rounded-full object-cover" />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange text-2xl font-bold text-white">
              {user.email?.[0]?.toUpperCase()}
            </div>
          )}
          <div>
            <h1 className="text-xl font-bold">{profile?.display_name || user.email}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-2xl font-bold text-brand-orange">{stats.favorites}</p>
            <p className="text-xs text-gray-500">Favoris</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-2xl font-bold text-brand-green">{stats.going}</p>
            <p className="text-xs text-gray-500">Inscrits</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
            <p className="text-2xl font-bold text-brand-teal">{stats.reviews}</p>
            <p className="text-xs text-gray-500">Avis</p>
          </div>
        </div>
      </div>

      <UserBadges profile={profile} stats={stats} />
      <PushToggle />

      <div className="mt-6 space-y-3">
        <button
          onClick={handleSignOut}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Se déconnecter
        </button>
        <DeleteAccountButton />
      </div>
    </div>
  )
}
