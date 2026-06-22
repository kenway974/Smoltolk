import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
}

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Politique de confidentialité</h1>

      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Collecte des données</h2>
        <p>Nous collectons les données nécessaires au fonctionnement du service : adresse email, préférences.</p>

        <h2>2. Utilisation</h2>
        <p>Vos données sont utilisées uniquement pour fournir le service et vous envoyer des notifications que vous avez acceptées.</p>

        <h2>3. Vos droits (RGPD)</h2>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>

        <h2>4. Suppression du compte</h2>
        <p>Vous pouvez supprimer votre compte à tout moment depuis votre profil. Toutes vos données seront effacées.</p>

        <h2>5. Cookies</h2>
        <p>Nous utilisons uniquement des cookies techniques nécessaires au fonctionnement du service.</p>

        <h2>6. Contact</h2>
        <p>Pour toute question : contact@sorties-reunion.re</p>
      </div>
    </div>
  )
}
