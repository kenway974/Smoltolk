'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import Modal from '@/components/ui/Modal'
import Button from '@/components/ui/Button'

export default function DeleteAccountButton() {
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleDelete = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/delete-account`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      )
      if (!res.ok) throw new Error('Erreur lors de la suppression')
      window.location.href = '/fr'
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erreur inconnue')
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-300 px-4 py-3 text-red-600 transition hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950"
      >
        <Trash2 className="h-4 w-4" />
        Supprimer mon compte
      </button>

      {showConfirm && (
        <Modal title="Supprimer le compte" onClose={() => setShowConfirm(false)}>
          <p className="text-gray-600 dark:text-gray-400">
            Cette action est irréversible. Toutes vos données seront supprimées.
          </p>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          <div className="mt-4 flex gap-3">
            <Button variant="ghost" onClick={() => setShowConfirm(false)}>Annuler</Button>
            <Button variant="danger" loading={loading} onClick={handleDelete}>
              Supprimer définitivement
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}
