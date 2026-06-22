"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface LoginFormProps { locale?: string; mode?: "login" | "signup"; }

export default function LoginForm({ locale = "fr", mode = "login" }: LoginFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setLoading(true);
    const supabase = createClient();
    if (mode === "login") {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) { setError(err.message); setLoading(false); return; }
      router.push(`/${locale}`); router.refresh();
    } else {
      const { error: err } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/${locale}/auth/callback` } });
      if (err) { setError(err.message); setLoading(false); return; }
      setSent(true); setLoading(false);
    }
  };

  if (sent) return (
    <div className="text-center space-y-3 py-8">
      <p className="text-3xl">📧</p>
      <p className="font-semibold">Vérifiez vos emails</p>
      <p className="text-sm text-gray-500">Un lien de confirmation a été envoyé à <strong>{email}</strong>.</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-4">
      <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
      <Input type="password" label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete={mode === "login" ? "current-password" : "new-password"} />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" loading={loading} className="w-full">{mode === "login" ? "Se connecter" : "Créer un compte"}</Button>
      <p className="text-center text-sm text-gray-500">
        {mode === "login" ? (
          <>Pas encore de compte ? <Link href={`/${locale}/auth/signup`} className="text-brand-teal font-medium hover:underline">S'inscrire</Link></>
        ) : (
          <>Déjà un compte ? <Link href={`/${locale}/auth/login`} className="text-brand-teal font-medium hover:underline">Se connecter</Link></>
        )}
      </p>
    </form>
  );
}
