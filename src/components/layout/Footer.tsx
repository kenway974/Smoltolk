import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer({ locale = "fr" }: { locale?: string }) {
  const base = `/${locale}`;
  return (
    <footer role="contentinfo" className="bg-brand-navy text-white/70 text-sm mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-semibold text-white">
          <MapPin size={16} className="text-brand-orange" />
          SortiesRéunion
        </div>
        <nav className="flex flex-wrap gap-4 justify-center">
          <Link href={`${base}/legal/cgu`} className="hover:text-white transition-colors">CGU</Link>
          <Link href={`${base}/legal/confidentialite`} className="hover:text-white transition-colors">Confidentialité</Link>
          <Link href={`${base}/propose`} className="hover:text-white transition-colors">Proposer</Link>
        </nav>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} SortiesRéunion</p>
      </div>
    </footer>
  );
}
