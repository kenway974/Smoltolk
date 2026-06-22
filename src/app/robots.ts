import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/fr/admin/', '/fr/profile/', '/fr/auth/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL || 'https://sorties-reunion.re'}/sitemap.xml`,
  }
}
