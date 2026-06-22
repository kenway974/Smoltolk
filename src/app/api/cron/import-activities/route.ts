import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // TODO: instantiate connectors and import activities
  // const connector = new ExampleSourceConnector()
  // const events = await connector.fetchEvents()
  // ... upsert into Supabase

  return NextResponse.json({ ok: true, imported: 0 })
}
