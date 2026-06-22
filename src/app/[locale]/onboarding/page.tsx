import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import type { ActivityCategory } from "@/types";

export const metadata: Metadata = { title: "Bienvenue", robots: { index: false, follow: false } };

const CATEGORIES: { key: ActivityCategory; emoji: string; label: string }[] = [
  { key: "soirees",         emoji: "🎉", label: "Soirées"         },
  { key: "concerts",        emoji: "🎵", label: "Concerts"        },
  { key: "open-air-plage",  emoji: "🏖️", label: "Open air & Plage"},
  { key: "rando-sport",     emoji: "🥾", label: "Rando & Sport"   },
  { key: "culture",         emoji: "🏛️", label: "Culture"         },
  { key: "famille",         emoji: "👨‍👩‍👧", label: "Famille"        },
];

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/${locale}`);
  redirect(`/${locale}`);
}
