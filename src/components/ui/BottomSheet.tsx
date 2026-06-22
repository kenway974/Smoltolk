'use client'

import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function BottomSheet({
  open,
  onClose,
  children,
  title,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [dragY, setDragY] = useState(0)
  const startY = useRef(0)

  useEffect(() => { if (open) setDragY(0) }, [open])

  const handleTouchStart = (e: React.TouchEvent) => { startY.current = e.touches[0].clientY }
  const handleTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientY - startY.current
    if (delta > 0) setDragY(delta)
  }
  const handleTouchEnd = () => { if (dragY > 100) onClose(); else setDragY(0) }

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={ref}
        style={{ transform: `translateY(${dragY}px)` }}
        className="absolute bottom-0 left-0 right-0 max-h-[90vh] overflow-y-auto rounded-t-2xl bg-white pb-safe dark:bg-gray-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-center pt-3">
          <div className="h-1 w-10 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>
        {title && (
          <div className="border-b px-4 py-3 dark:border-gray-700">
            <h3 className="font-semibold">{title}</h3>
          </div>
        )}
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  )
}
