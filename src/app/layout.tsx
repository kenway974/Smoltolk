import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sorties Réunion – Activités & Événements',
    template: '%s | Sorties Réunion',
  },
  description:
    'Découvrez les meilleures activités et sorties à La Réunion. Randonnées, concerts, marchés, sports nautiques et bien plus.',
  keywords: ['La Réunion', 'activités', 'sorties', 'événements', 'loisirs'],
  authors: [{ name: 'Sorties Réunion' }],
  creator: 'Sorties Réunion',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'https://sorties-reunion.re'
  ),
  openGraph: {
    type: 'website',
    locale: 'fr_RE',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://sorties-reunion.re',
    siteName: 'Sorties Réunion',
  },
  twitter: {
    card: 'summary_large_image',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a2744' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme')
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
