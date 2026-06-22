"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, User, LogOut, Moon, Sun } from "lucide-react";
import type { Profile } from "@/types";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  locale: string;
  profile?: Profile | null;
}

export default function Header({ locale, profile }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const base = `/${locale}`;
  const navLinks = [
    { href: base, label: "Accueil" },
    { href: `${base}/activities`, label: "Événements" },
    { href: `${base}/propose`, label: "Proposer" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#111]/90 backdrop-blur border-b border-gray-100 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href={base} className="flex items-center gap-1.5 font-bold text-brand-navy dark:text-white">
          <MapPin size={18} className="text-brand-orange" />
          <span>SortiesRéunion</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={cn("px-3 py-1.5 rounded-lg text-sm font-medium transition-colors", pathname === href ? "bg-brand-teal/10 text-brand-teal" : "text-gray-600 dark:text-white/70 hover:text-brand-teal")}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={toggleDark} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label="Thème">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {profile ? (
            <Link href={`${base}/profile`} className="flex items-center gap-1 text-sm font-medium text-brand-navy dark:text-white hover:text-brand-teal transition-colors">
              <User size={18} />
              <span className="hidden sm:inline">{profile.username ?? "Profil"}</span>
            </Link>
          ) : (
            <Link href={`${base}/auth/login`} className="text-sm font-medium text-brand-teal hover:underline">Connexion</Link>
          )}
          <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#111] px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-gray-700 dark:text-white/80 hover:text-brand-teal">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
