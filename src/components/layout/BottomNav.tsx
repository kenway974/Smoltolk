"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Plus, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const ITEMS = [
  { href: "/fr",          icon: Home,    label: "Accueil"  },
  { href: "/fr/discover", icon: Compass, label: "Explorer" },
  { href: "/fr/propose",  icon: Plus,    label: "Proposer" },
  { href: "/fr/favorites",icon: Heart,   label: "Favoris"  },
  { href: "/fr/profile",  icon: User,    label: "Profil"   },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-[#111] border-t border-gray-100 dark:border-white/10 pb-safe sm:hidden" aria-label="Navigation principale">
      <div className="flex justify-around">
        {ITEMS.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || (href !== "/fr" && pathname.startsWith(href));
          return (
            <Link key={href} href={href} className={cn("flex flex-col items-center gap-0.5 py-2 px-3 text-xs font-medium transition-colors", active ? "text-brand-teal" : "text-gray-500 hover:text-brand-teal")}>
              <Icon size={22} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
