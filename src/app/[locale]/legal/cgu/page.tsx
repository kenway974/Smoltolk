import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
}

export default function CGUPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Conditions Générales d'Utilisation</h1>

      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Objet</h2>
        <p>Les présentes conditions générales d'utilisation régissent l'utilisation du service Sorties Réunion.</p>

        <h2>2. Accès au service</h2>
        <p>Le service est accessible à toute personne disposant d'un accès internet. Certaines fonctionnalités nécessitent la création d'un compte.</p>

        <h2>3. Propriété intellectuelle</h2>
        <p>L'ensemble du contenu du site est protégé par le droit d'auteur.</p>

        <h2>4. Responsabilité</h2>
        <p>Sorties Réunion ne peut être tenu responsable des informations publiées par les utilisateurs.</p>

        <h2>5. Modification</h2>
        <p>Sorties Réunion se réserve le droit de modifier ces CGU à tout moment.</p>
      </div>
    </div>
  )
}
