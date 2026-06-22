'use client'

import { useState } from 'next/navigation'
import Link from 'next/link'
import { Moon, Sun, Menu, X } from 'lucide-react'
import type { User } from '@supabase/supabase-js'
import type { Profile } from '@/types'
import NotificationBell from '@/components/notifications/NotificationBell'

export default function Header({
  locale,
  user,
  profile,
}: {
  locale: string
  user: User | null
  profile: Profile | null
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )

  const toggleDark = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setDark(isDark)
  }

  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href={`/${locale}`} className="text-xl font-bold text-brand-orange">
          Sorties Réunion
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link href={`/${locale}/propose`} className="text-sm hover:text-brand-orange">
            Proposer
          </Link>
          {user ? (
            <>
              <NotificationBell userId={user.id} />
              <Link href={`/${locale}/profile`} className="flex items-center gap-2">
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="" className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                    {user.email?.[0]?.toUpperCase()}
                  </div>
                )}
              </Link>
            </>
          ) : (
            <Link
              href={`/${locale}/auth/login`}
              className="rounded-lg bg-brand-orange px-4 py-1.5 text-sm text-white hover:bg-brand-volcano"
            >
              Connexion
            </Link>
          )}
          <button onClick={toggleDark} aria-label="Toggle dark mode">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t p-4 dark:border-gray-800 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href={`/${locale}/propose`} onClick={() => setMenuOpen(false)}>Proposer</Link>
            {user ? (
              <Link href={`/${locale}/profile`} onClick={() => setMenuOpen(false)}>Mon profil</Link>
            ) : (
              <Link href={`/${locale}/auth/login`} onClick={() => setMenuOpen(false)}>Connexion</Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
