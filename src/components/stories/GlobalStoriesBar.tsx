'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Plus, X } from 'lucide-react'

interface Story {
  id: string
  image_url: string
  caption?: string
  user_id: string
  created_at: string
}

export default function GlobalStoriesBar() {
  const [stories, setStories] = useState<Story[]>([])
  const [viewing, setViewing] = useState<Story | null>(null)
  const [user, setUser] = useState<{ id: string } | null>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      const { data } = await supabase
        .from('global_stories')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)
      setStories(data || [])
    }
    load()
  }, [])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user) return
    const ext = file.name.split('.').pop()
    const path = `${user.id}/${Date.now()}.${ext}`
    const { error: uploadError } = await supabase.storage.from('global-stories').upload(path, file)
    if (uploadError) return
    const { data: { publicUrl } } = supabase.storage.from('global-stories').getPublicUrl(path)
    await supabase.from('global_stories').insert({ user_id: user.id, image_url: publicUrl })
    window.location.reload()
  }

  if (stories.length === 0 && !user) return null

  return (
    <div className="border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="flex gap-3 overflow-x-auto px-4 py-3 no-scrollbar">
        {user && (
          <label className="flex flex-shrink-0 cursor-pointer flex-col items-center gap-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-brand-orange">
              <Plus className="h-6 w-6 text-brand-orange" />
            </div>
            <span className="text-xs text-gray-500">Ajouter</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
          </label>
        )}
        {stories.map((story) => (
          <button key={story.id} onClick={() => setViewing(story)} className="flex flex-shrink-0 flex-col items-center gap-1">
            <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-brand-orange">
              <img src={story.image_url} alt="" className="h-full w-full object-cover" />
            </div>
          </button>
        ))}
      </div>
      {viewing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black" onClick={() => setViewing(null)}>
          <button className="absolute right-4 top-4 text-white"><X className="h-6 w-6" /></button>
          <img src={viewing.image_url} alt="" className="max-h-screen max-w-full object-contain" />
          {viewing.caption && (
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-lg bg-black/50 px-4 py-2 text-white">{viewing.caption}</p>
          )}
        </div>
      )}
    </div>
  )
}
