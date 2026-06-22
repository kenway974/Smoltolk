import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import ModerationClient from "./ModerationClient";

export default async function ModerationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/${locale}/auth/login`);
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if ((profile as any)?.role !== "admin") redirect(`/${locale}`);
  const { data: pending } = await supabase.from("activities").select("*").eq("status", "pending").order("created_at");
  return <ModerationClient activities={pending ?? []} />;
}
