import LoginForm from '@/components/auth/LoginForm'

export default function SignupPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-3xl font-bold">Créer un compte</h1>
        <LoginForm mode="signup" />
      </div>
    </div>
  )
}
