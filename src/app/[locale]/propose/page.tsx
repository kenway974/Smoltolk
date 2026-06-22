import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ProposeForm from "@/components/activities/ProposeForm";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Proposer un événement", description: "Soumettez un événement ou une sortie à La Réunion pour le partager avec la communauté." };

export default async function ProposePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/${locale}/auth/login`);
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Proposer un événement</h1>
      <p className="text-gray-500 text-sm mb-8">Votre événement sera vérifié par notre équipe avant publication.</p>
      <ProposeForm />
    </div>
  );
}
