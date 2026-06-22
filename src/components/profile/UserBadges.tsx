export interface BadgeStats {
  activitiesRegistered: number;
  activitiesCreated: number;
  reviewsWritten: number;
  profileComplete: boolean;
}

const BADGES: { id: string; emoji: string; label: string; condition: (s: BadgeStats) => boolean }[] = [
  { id: "first_registration", emoji: "🎟️", label: "Premier événement", condition: (s) => s.activitiesRegistered >= 1 },
  { id: "explorer",           emoji: "🧭", label: "Explorateur",       condition: (s) => s.activitiesRegistered >= 5  },
  { id: "local",              emoji: "🌴", label: "Réunionnais·e",     condition: (s) => s.activitiesRegistered >= 10 },
  { id: "organizer",          emoji: "📋", label: "Organisateur",      condition: (s) => s.activitiesCreated >= 1     },
  { id: "critic",             emoji: "⭐", label: "Critique",          condition: (s) => s.reviewsWritten >= 3        },
  { id: "profile_complete",   emoji: "✅", label: "Profil complet",    condition: (s) => s.profileComplete            },
];

export default function UserBadges({ stats }: { stats: BadgeStats }) {
  const earned = BADGES.filter((b) => b.condition(stats));
  if (earned.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {earned.map(({ id, emoji, label }) => (
        <span key={id} title={label} className="flex items-center gap-1 bg-brand-teal/10 text-brand-teal text-xs font-medium px-2 py-1 rounded-full">
          {emoji} {label}
        </span>
      ))}
    </div>
  );
}
