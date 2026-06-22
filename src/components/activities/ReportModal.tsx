'use client'

import { useState } from 'react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'
import type { ContentType, ReportReason } from '@/types'

const REASONS: { value: ReportReason; label: string }[] = [
  { value: 'spam', label: 'Spam' },
  { value: 'inappropriate', label: 'Contenu inapproprié' },
  { value: 'misleading', label: 'Information trompeuse' },
  { value: 'other', label: 'Autre' },
]

export default function ReportModal({
  contentId,
  contentType,
  onClose,
}: {
  contentId: string
  contentType: ContentType
  onClose: () => void
}) {
  const [reason, setReason] = useState<ReportReason>('spam')
  const [details, setDetails] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content_id: contentId, content_type: contentType, reason, details }),
    })
    setDone(true)
    setLoading(false)
  }

  return (
    <Modal title="Signaler" onClose={onClose}>
      {done ? (
        <div className="py-4 text-center">
          <p className="text-green-600">Signalement envoyé. Merci !</p>
          <Button onClick={onClose} className="mt-4">Fermer</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Raison</label>
            <div className="space-y-2">
              {REASONS.map((r) => (
                <label key={r.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="reason"
                    value={r.value}
                    checked={reason === r.value}
                    onChange={() => setReason(r.value)}
                  />
                  {r.label}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Détails (optionnel)</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={3}
              maxLength={500}
              className="w-full rounded-lg border px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
            />
          </div>
          <div className="flex gap-2">
            <Button type="button" variant="ghost" onClick={onClose}>Annuler</Button>
            <Button type="submit" loading={loading}>Envoyer</Button>
          </div>
        </form>
      )}
    </Modal>
  )
}
