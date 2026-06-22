"use client";
import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 gap-4">
      <p className="text-6xl">🌋</p>
      <h2 className="text-xl font-bold">Une erreur est survenue</h2>
      <p className="text-gray-500 text-sm max-w-xs">Désolé, quelque chose s'est mal passé. Réessayez ou revenez à l'accueil.</p>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={reset}>Réessayer</Button>
        <Link href="/fr" className="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all bg-brand-teal text-white hover:bg-brand-green px-4 py-2 text-sm">Accueil</Link>
      </div>
    </div>
  );
}
