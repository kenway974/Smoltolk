import type { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://sorties-reunion.re'

  const { data: activities } = await supabase
    .from('activities')
    .select('id, updated_at')
    .eq('status', 'approved')

  const activityUrls: MetadataRoute.Sitemap = (activities || []).map((a) => ({
    url: `${baseUrl}/fr/activities/${a.id}`,
    lastModified: a.updated_at,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/fr`, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/fr/legal/cgu`, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/fr/legal/confidentialite`, changeFrequency: 'monthly', priority: 0.3 },
  ]

  const bassins = ['nord', 'ouest', 'sud', 'est']
  const bassinPages: MetadataRoute.Sitemap = bassins.map((b) => ({
    url: `${baseUrl}/fr?bassin=${b}`,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...bassinPages, ...activityUrls]
}
