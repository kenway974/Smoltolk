import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ActivityDetailClient from './ActivityDetailClient'
import type { Activity } from '@/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  )
  const { data } = await supabase.from('activities').select('title, description').eq('id', id).single()

  return {
    title: data?.title || 'Activité',
    description: data?.description?.slice(0, 160),
    openGraph: {
      images: [`/api/og?title=${encodeURIComponent(data?.title || '')}`],
    },
  }
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll() {},
      },
    }
  )

  const { data: activity } = await supabase
    .from('activities')
    .select('*')
    .eq('id', id)
    .single()

  if (!activity) notFound()

  const { data: { user } } = await supabase.auth.getUser()

  return <ActivityDetailClient activity={activity as Activity} locale={locale} user={user} />
}
