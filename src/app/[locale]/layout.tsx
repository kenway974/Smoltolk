import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BottomNav from '@/components/layout/BottomNav'
import SkipNav from '@/components/layout/SkipNav'
import PushPrompt from '@/components/notifications/PushPrompt'
import OnboardingWizard from '@/components/onboarding/OnboardingWizard'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll() {},
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  let profile = null
  if (user) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()
    profile = data
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <SkipNav />
      <Header locale={locale} user={user} profile={profile} />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer locale={locale} />
      <BottomNav locale={locale} user={user} />
      <PushPrompt />
      {user && !profile?.onboarding_completed && <OnboardingWizard />}
    </div>
  )
}
