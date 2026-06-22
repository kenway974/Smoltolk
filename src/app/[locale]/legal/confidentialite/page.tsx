import type { Metadata } from "next";
export const metadata: Metadata = { title: "Politique de confidentialité", description: "Comment SortiesRéunion collecte et protège vos données personnelles (RGPD).", robots: { index: true, follow: true } };
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 prose dark:prose-invert">
      <h1>Politique de confidentialité</h1>
      <p>SortiesRéunion respecte votre vie privée et se conforme au RGPD.</p>
      <h2>Données collectées</h2>
      <p>Email, préférences de sorties, favoris. Aucune donnée n'est vendue à des tiers.</p>
      <h2>Vos droits</h2>
      <p>Vous pouvez demander la suppression de vos données depuis votre profil.</p>
      <h2>Contact DPO</h2>
      <p>dpo@sortiesreunion.fr</p>
    </div>
  );
}
