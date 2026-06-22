import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import SkipNav from "@/components/layout/SkipNav";
import PushPrompt from "@/components/notifications/PushPrompt";
import OnboardingWizard from "@/components/onboarding/OnboardingWizard";

export const metadata: Metadata = {};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  let profile = null;
  if (user) {
    const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    profile = data;
  }

  return (
    <>
      <SkipNav />
      <Header locale={locale} profile={profile} />
      <main id="main-content" className="flex-1 pb-16 sm:pb-0">
        {children}
      </main>
      <Footer locale={locale} />
      <BottomNav />
      {user && <PushPrompt userId={user.id} />}
      <OnboardingWizard locale={locale} />
    </>
  );
}
