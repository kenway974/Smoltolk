import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold text-brand-orange">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400">Cette page n'existe pas</p>
      <Link
        href="/fr"
        className="rounded-lg bg-brand-orange px-6 py-3 text-white transition hover:bg-brand-volcano"
      >
        Retour à l'accueil
      </Link>
    </div>
  )
}
