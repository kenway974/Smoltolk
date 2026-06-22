import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import UserBadges from "@/components/profile/UserBadges";
import DeleteAccountButton from "@/components/auth/DeleteAccountButton";
import PushToggle from "@/components/notifications/PushToggle";

export default async function ProfilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/${locale}/auth/login`);
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
  const { count: activitiesCreated } = await supabase.from("activities").select("id", { count: "exact", head: true }).eq("creator_id", user.id);
  const { count: activitiesRegistered } = await supabase.from("registrations").select("id", { count: "exact", head: true }).eq("user_id", user.id);
  const { count: reviewsWritten } = await supabase.from("reviews").select("id", { count: "exact", head: true }).eq("user_id", user.id);

  return (
    <div className="max-w-lg mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">{profile?.username ?? user.email?.split("@")[0] ?? "Mon profil"}</h1>
        <p className="text-sm text-gray-500 mt-1">{user.email}</p>
      </div>
      <UserBadges stats={{ activitiesRegistered: activitiesRegistered ?? 0, activitiesCreated: activitiesCreated ?? 0, reviewsWritten: reviewsWritten ?? 0, profileComplete: !!(profile?.username && profile?.bio) }} />
      <div className="space-y-3">
        <Link href={`/${locale}/profile/my-events`} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-white/10 hover:text-brand-teal transition-colors">
          <span className="text-sm font-medium">Mes événements</span>
          <span className="text-xs text-gray-400">{activitiesCreated ?? 0} proposé{(activitiesCreated ?? 0) > 1 ? "s" : ""}</span>
        </Link>
        <Link href={`/${locale}/profile/collections`} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-white/10 hover:text-brand-teal transition-colors">
          <span className="text-sm font-medium">Mes listes</span>
        </Link>
      </div>
      <PushToggle userId={user.id} />
      <form action={async () => { "use server"; const { createClient: c } = await import("@/lib/supabase/server"); const s = await c(); await s.auth.signOut(); const { redirect: r } = await import("next/navigation"); r(`/${locale}`); }}>
        <button type="submit" className="text-sm text-gray-500 hover:text-brand-teal transition-colors">Se déconnecter</button>
      </form>
      <DeleteAccountButton />
    </div>
  );
}
