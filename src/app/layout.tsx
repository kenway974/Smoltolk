import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl } from "@/lib/utils/siteUrl";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "SortiesRéunion — Sorties & événements à La Réunion", template: "%s · SortiesRéunion" },
  description: "Découvrez les meilleurs événements et sorties à La Réunion : concerts, soirées, randos, plage, culture et bien plus.",
  keywords: ["La Réunion", "sorties", "événements", "concerts", "randonnée", "plage", "974"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "SortiesRéunion",
    title: "SortiesRéunion — Sorties & événements à La Réunion",
    description: "Le meilleur des événements à La Réunion.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#2d6a4f" }, { media: "(prefers-color-scheme: dark)", color: "#1a3a2a" }],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}` }} />
      </head>
      <body className={`${inter.variable} font-sans bg-gray-50 dark:bg-[#0d0d0d] text-brand-navy dark:text-white min-h-screen flex flex-col`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
