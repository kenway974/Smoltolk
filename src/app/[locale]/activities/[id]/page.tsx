import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ActivityDetailClient from "./ActivityDetailClient";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/utils/siteUrl";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("activities").select("title,description,image_url").eq("id", id).single();
  if (!data) return {};
  return {
    title: data.title,
    description: data.description?.slice(0, 160),
    openGraph: { title: data.title, description: data.description?.slice(0, 160), images: data.image_url ? [data.image_url] : [] },
  };
}

export default async function ActivityPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const { locale, id } = await params;
  const supabase = await createClient();
  const { data: activity } = await supabase.from("activities").select("*").eq("id", id).eq("status", "approved").single();
  if (!activity) notFound();
  const { data: { user } } = await supabase.auth.getUser();
  return <ActivityDetailClient activity={activity} userId={user?.id ?? null} locale={locale} />;
}
