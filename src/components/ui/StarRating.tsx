'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

export default function StarRating({
  value,
  onChange,
  readOnly = false,
}: {
  value: number
  onChange?: (v: number) => void
  readOnly?: boolean
}) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readOnly}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readOnly && setHovered(star)}
          onMouseLeave={() => !readOnly && setHovered(0)}
          className="transition"
        >
          <Star
            className={`h-5 w-5 ${
              (hovered || value) >= star ? 'fill-brand-orange text-brand-orange' : 'text-gray-300'
            }`}
          />
        </button>
      ))}
    </div>
  )
}
