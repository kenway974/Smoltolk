'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function LoginForm({ mode }: { mode: 'login' | 'signup' }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [magicSent, setMagicSent] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) { setError(error.message); setLoading(false); return }
      router.push('/fr')
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/fr/auth/callback` },
      })
      if (error) { setError(error.message); setLoading(false); return }
      router.push('/fr?registered=1')
    }
  }

  const handleMagicLink = async () => {
    if (!email) { setError('Entrez votre adresse email'); return }
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/fr/auth/callback` },
    })
    if (error) { setError(error.message) } else { setMagicSent(true) }
    setLoading(false)
  }

  if (magicSent) {
    return (
      <div className="rounded-xl border p-6 text-center dark:border-gray-700">
        <p className="text-lg font-semibold">Lien envoyé !</p>
        <p className="mt-2 text-gray-600">Vérifiez votre email pour vous connecter.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        label="Mot de passe"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={6}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" loading={loading} className="w-full">
        {mode === 'login' ? 'Se connecter' : 'Créer le compte'}
      </Button>
      <div className="text-center">
        <button
          type="button"
          onClick={handleMagicLink}
          className="text-sm text-brand-teal underline hover:no-underline"
        >
          Connexion par lien magique
        </button>
      </div>
    </form>
  )
}
