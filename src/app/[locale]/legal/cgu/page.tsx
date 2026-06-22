import type { Metadata } from "next";
export const metadata: Metadata = { title: "Conditions générales d'utilisation", description: "Conditions générales d'utilisation de SortiesRéunion.", robots: { index: true, follow: true } };
export default function CGUPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 prose dark:prose-invert">
      <h1>Conditions générales d'utilisation</h1>
      <p>En utilisant SortiesRéunion, vous acceptez les présentes conditions.</p>
      <h2>Utilisation du service</h2>
      <p>SortiesRéunion est un agrégateur d'événements à La Réunion. Les contenus proposés par les utilisateurs sont soumis à modération.</p>
      <h2>Responsabilité</h2>
      <p>SortiesRéunion ne peut être tenu responsable des événements annulés ou modifiés par leurs organisateurs.</p>
      <h2>Contact</h2>
      <p>Pour toute question : contact@sortiesreunion.fr</p>
    </div>
  );
}
