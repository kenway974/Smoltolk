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
    style: "bg-indigo-100 text-indigo-700",
    color: "bg-indigo-50 text-indigo-900 border-indigo-200",
    activeColor: "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200",
  },
  {
    key: "client",
    label: "Client ou visiteur",
    emoji: "🛍️",
    hint: "Je suis là pour consommer ou visiter : client, spectateur, invité",
    style: "bg-emerald-100 text-emerald-700",
    color: "bg-emerald-50 text-emerald-900 border-emerald-200",
    activeColor: "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-200",
  },
  {
    key: "passage",
    label: "De passage",
    emoji: "🚶",
    hint: "Je ne fais que passer, je ne suis pas d'ici",
    style: "bg-amber-100 text-amber-700",
    color: "bg-amber-50 text-amber-900 border-amber-200",
    activeColor: "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-200",
  },
  {
    key: "decouvre",
    label: "Je découvre",
    emoji: "🧭",
    hint: "Première fois ici, je ne connais rien ni personne",
    style: "bg-violet-100 text-violet-700",
    color: "bg-violet-50 text-violet-900 border-violet-200",
    activeColor: "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200",
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
