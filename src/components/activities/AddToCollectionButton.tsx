'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { FolderPlus, Check } from 'lucide-react'
import type { Collection } from '@/types'

export default function AddToCollectionButton({ activityId }: { activityId: string }) {
  const [open, setOpen] = useState(false)
  const [collections, setCollections] = useState<Collection[]>([])
  const [added, setAdded] = useState<Set<string>>(new Set())

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data: cols } = await supabase
        .from('collections')
        .select('*')
        .eq('user_id', user.id)
      setCollections(cols || [])

      const { data: items } = await supabase
        .from('collection_items')
        .select('collection_id')
        .eq('activity_id', activityId)
      setAdded(new Set((items || []).map((i) => i.collection_id)))
    }
    if (open) load()
  }, [open])

  const toggle = async (collectionId: string) => {
    if (added.has(collectionId)) {
      await supabase
        .from('collection_items')
        .delete()
        .eq('collection_id', collectionId)
        .eq('activity_id', activityId)
      setAdded((prev) => { const s = new Set(prev); s.delete(collectionId); return s })
    } else {
      await supabase.from('collection_items').insert({ collection_id: collectionId, activity_id: activityId })
      setAdded((prev) => new Set(prev).add(collectionId))
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <FolderPlus className="h-5 w-5 text-gray-400" />
      </button>
      {open && (
        <div className="absolute right-0 top-10 z-10 min-w-48 rounded-xl border bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {collections.length === 0 ? (
            <p className="px-3 py-2 text-sm text-gray-500">Aucune collection</p>
          ) : (
            collections.map((col) => (
              <button
                key={col.id}
                onClick={() => toggle(col.id)}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {added.has(col.id) && <Check className="h-4 w-4 text-brand-green" />}
                {col.name}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
