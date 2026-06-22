'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import { Home, Compass, PlusCircle, Heart, User as UserIcon } from 'lucide-react'

export default function BottomNav({
  locale,
  user,
}: {
  locale: string
  user: User | null
}) {
  const pathname = usePathname()

  const links = [
    { href: `/${locale}`, label: 'Accueil', icon: Home },
    { href: `/${locale}?explorer=1`, label: 'Explorer', icon: Compass },
    { href: `/${locale}/propose`, label: 'Proposer', icon: PlusCircle },
    { href: `/${locale}?favoris=1`, label: 'Favoris', icon: Heart },
    { href: user ? `/${locale}/profile` : `/${locale}/auth/login`, label: 'Profil', icon: UserIcon },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t bg-white pb-safe dark:border-gray-800 dark:bg-gray-950 md:hidden">
      <div className="flex">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href.split('?')[0]
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-xs transition ${
                isActive
                  ? 'text-brand-orange'
                  : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
