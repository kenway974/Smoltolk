import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-brand-orange">404</h1>
      <p className="mt-4 text-xl">Page introuvable</p>
      <Link
        href="/fr"
        className="mt-6 rounded-lg bg-brand-orange px-6 py-3 text-white hover:bg-brand-volcano"
      >
        Retour à l'accueil
      </Link>
    </div>
  )
}
