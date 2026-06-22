export const runtime = 'edge'

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Sorties Réunion'

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a2744 0%, #1b7f79 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <p style={{ color: '#f4700f', fontSize: 24, margin: 0 }}>
          Sorties Réunion
        </p>
        <h1
          style={{
            color: 'white',
            fontSize: 56,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '20px 0 0',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
