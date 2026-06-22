import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/utils/rateLimit'

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'anonymous'
  const { success } = rateLimit(ip, 120, 60)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const bassin = searchParams.get('bassin')
  const price = searchParams.get('price')
  const date = searchParams.get('date')
  const outdoor = searchParams.get('outdoor')
  const q = searchParams.get('q')

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  )

  let query = supabase
    .from('activities')
    .select('*')
    .eq('status', 'approved')
    .order('start_date', { ascending: true })

  if (category) query = query.eq('category', category)
  if (bassin) query = query.eq('bassin', bassin)
  if (price === 'free') query = query.eq('is_free', true)
  if (outdoor === 'true') query = query.eq('is_outdoor', true)
  if (q) query = query.ilike('title', `%${q}%`)
  if (date) {
    const start = new Date(date)
    const end = new Date(date)
    end.setDate(end.getDate() + 1)
    query = query.gte('start_date', start.toISOString()).lt('start_date', end.toISOString())
  }

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}
