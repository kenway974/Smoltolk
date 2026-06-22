import Link from 'next/link'

export default function Footer({ locale }: { locale: string }) {
  return (
    <footer className="border-t bg-gray-50 px-4 py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sorties Réunion
          </p>
          <div className="flex gap-4 text-sm">
            <Link href={`/${locale}/legal/cgu`} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
              CGU
            </Link>
            <Link href={`/${locale}/legal/confidentialite`} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
              Confidentialité
            </Link>
            <Link href={`/${locale}/propose`} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
              Proposer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
