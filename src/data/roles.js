// L'axe « Mon rôle ici » : qui je suis par rapport à ce lieu.
// Empêche l'accroche de présumer un rôle (ex. « on travaille tous les deux ici »).
// Valeur stockée dans chaque situation : le `label` (ex. "De passage").
// "Tous" = accroche neutre, valable quel que soit le rôle.

export const ROLES = [
  {
    key: "travaille",
    label: "J'y travaille",
    emoji: "💼",
    hint: "Je fais partie du lieu : collègue, employé, ou j'y viens tout le temps",
  },
  {
    key: "client",
    label: "Client ou visiteur",
    emoji: "🛍️",
    hint: "Je suis là pour consommer ou visiter : client, spectateur, invité",
  },
  {
    key: "passage",
    label: "De passage",
    emoji: "🚶",
    hint: "Je ne fais que passer, je ne suis pas d'ici",
  },
  {
    key: "decouvre",
    label: "Je découvre",
    emoji: "🧭",
    hint: "Première fois ici, je ne connais rien ni personne",
  },
];

export const ROLE_LABELS = ROLES.map(r => r.label);
export const ROLE_BY_LABEL = Object.fromEntries(ROLES.map(r => [r.label, r]));

// Lieux où l'on est typiquement « à sa place » (on y travaille).
const WORK = new Set([
  "Immeuble de Bureaux", "Ascenseur de Bureaux", "Espace de Coworking",
  "Chantier / Entrepôt", "Réception d'entreprise",
]);

// Lieux de transit / passage.
const TRANSIT = new Set([
  "Dans la rue", "Transport en Commun", "Arrêt de bus", "Gare / Quai SNCF",
  "Aéroport", "Salle d'Embarquement", "Taxi / VTC", "Aire d'autoroute",
  "Covoiturage", "Parking / Livraison", "Station-service",
]);

/**
 * Rôle par défaut suggéré selon le lieu (jamais null).
 * Reste modifiable par l'utilisateur.
 */
export function suggestRole(lieu) {
  if (!lieu) return "Client ou visiteur";
  if (WORK.has(lieu)) return "J'y travaille";
  if (TRANSIT.has(lieu)) return "De passage";
  return "Client ou visiteur";
}
