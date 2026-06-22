import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { rateLimit } from '@/utils/rateLimit'

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'anonymous'
  const { success } = rateLimit(ip, 20, 60)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  )

  const today = new Date().toISOString()
  const { data } = await supabase
    .from('activities')
    .select('*')
    .eq('status', 'approved')
    .gte('start_date', today)

  if (!data || data.length === 0) {
    return NextResponse.json({ error: 'No activities found' }, { status: 404 })
  }

  const random = data[Math.floor(Math.random() * data.length)]
  return NextResponse.json(random)
}
