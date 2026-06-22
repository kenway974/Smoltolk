import Link from "next/link";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 gap-4">
      <p className="text-8xl font-bold text-brand-navy/10 dark:text-white/5 select-none">404</p>
      <h1 className="text-xl font-bold">Page introuvable</h1>
      <p className="text-gray-500 text-sm">Cette page n'existe pas ou a été déplacée.</p>
      <div className="flex gap-3">
        <Link href="/fr" className="flex items-center gap-1.5 text-sm font-medium text-brand-teal hover:underline"><Home size={16} />Accueil</Link>
        <Link href="/fr/activities" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-brand-teal"><Search size={16} />Événements</Link>
      </div>
    </div>
  );
}
