import type { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";
import { getSiteUrl } from "@/lib/utils/siteUrl";
import { BASSINS } from "@/lib/data/bassins";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const supabase = await createClient();
  const { data: activities } = await supabase.from("activities").select("id,updated_at").eq("status", "approved").order("created_at", { ascending: false }).limit(1000);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/fr`, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/fr/activities`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/fr/propose`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...BASSINS.map((b) => ({ url: `${base}/fr/activities?bassin=${b.slug}`, changeFrequency: "daily" as const, priority: 0.7 })),
  ];

  const activityPages: MetadataRoute.Sitemap = (activities ?? []).map((a) => ({
    url: `${base}/fr/activities/${a.id}`,
    lastModified: new Date(a.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...activityPages];
}
