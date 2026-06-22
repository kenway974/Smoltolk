import type { Profile } from '@/types'

const BADGES = [
  { id: 'first', label: 'Bienvenue', emoji: 'ὄb', desc: 'Première inscription' },
  { id: 'explorer', label: 'Explorateur', emoji: 'ᾞd', desc: '5 activités favorites' },
  { id: 'local', label: 'Local', emoji: 'ἳ4', desc: 'Préférence de bassin définie' },
  { id: 'organizer', label: 'Organisateur', emoji: '὎3', desc: 'Activité proposée' },
  { id: 'critic', label: 'Critique', emoji: '⭐', desc: '3 avis donnés' },
  { id: 'complete', label: 'Profil complet', emoji: '✅', desc: 'Profil entièrement complété' },
]

export default function UserBadges({
  profile,
  stats,
}: {
  profile: Profile | null
  stats: { favorites: number; going: number; reviews: number }
}) {
  const earned = new Set<string>()
  if (profile) earned.add('first')
  if (stats.favorites >= 5) earned.add('explorer')
  if (profile?.bassin_preference) earned.add('local')
  if (stats.reviews >= 3) earned.add('critic')
  if (profile?.avatar_url && profile?.display_name) earned.add('complete')

  return (
    <div className="mt-6">
      <h2 className="mb-3 font-semibold">Badges</h2>
      <div className="grid grid-cols-3 gap-3">
        {BADGES.map((badge) => (
          <div
            key={badge.id}
            className={`flex flex-col items-center rounded-xl p-3 text-center ${
              earned.has(badge.id) ? 'bg-brand-orange/10' : 'opacity-30 grayscale'
            }`}
          >
            <span className="text-2xl">{badge.emoji}</span>
            <p className="mt-1 text-xs font-medium">{badge.label}</p>
            <p className="text-[10px] text-gray-500">{badge.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
