// L'axe « intention » : ce que je cherche à faire en abordant la personne.
// L'intention dépend du duo moi × l'autre (âge + genre), mais reste modifiable.
//
// Valeur stockée dans chaque situation : le `label` (ex. "Demander un conseil"),
// pour rester cohérent avec les autres champs texte (vibe "Ouvert", etc.).

export const INTENTIONS = [
  {
    key: "connaissance",
    label: "Faire connaissance",
    emoji: "🤝",
    hint: "Briser la glace, créer un premier lien",
    style: "bg-blue-100 text-blue-700",
    activeColor: "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    key: "smalltalk",
    label: "Pluie et beau temps",
    emoji: "🌦️",
    hint: "Papoter léger, sans enjeu, juste pour le plaisir",
    style: "bg-sky-100 text-sky-700",
    activeColor: "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-200",
    color: "bg-sky-50 text-sky-700 border-sky-200",
  },
  {
    key: "conseil",
    label: "Demander un conseil",
    emoji: "💡",
    hint: "Apprendre de l'autre, demander un avis ou une expérience",
    style: "bg-amber-100 text-amber-700",
    activeColor: "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-200",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    key: "flirt",
    label: "Flirter",
    emoji: "😏",
    hint: "Séduire avec tact, jouer, tester le terrain",
    style: "bg-rose-100 text-rose-700",
    activeColor: "bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200",
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
];

export const INTENTION_LABELS = INTENTIONS.map(i => i.label);
export const INTENTION_BY_LABEL = Object.fromEntries(INTENTIONS.map(i => [i.label, i]));

export const MOI_AGE_OPTIONS   = ["Jeune", "Adulte", "Senior"];
export const MOI_GENRE_OPTIONS = ["Homme", "Femme"];

const OPPOSITE = (a, b) =>
  a && b && a !== b && ["Homme", "Femme"].includes(a) && ["Homme", "Femme"].includes(b);

/**
 * Devine l'intention la plus probable selon le duo moi × l'autre.
 * Retourne un label d'intention (jamais null) — l'utilisateur peut le changer.
 *
 *  - Deux jeunes de genres opposés          → Flirter
 *  - L'autre est plus âgé (Senior) que moi  → Demander un conseil
 *  - Deux seniors                            → Pluie et beau temps
 *  - Sinon                                    → Faire connaissance
 */
export function suggestIntention(moi = {}, autre = {}) {
  const ma = moi.ageGroupe, mg = moi.genre;
  const aa = autre.ageGroupe, ag = autre.genre;

  const younger = { Jeune: 1, Adulte: 2, Senior: 3 };

  if (ma === "Jeune" && aa === "Jeune" && OPPOSITE(mg, ag)) return "Flirter";

  if (aa === "Senior" && ma && younger[ma] < younger["Senior"]) return "Demander un conseil";

  if (ma === "Senior" && aa === "Senior") return "Pluie et beau temps";

  // Adultes de genres opposés, ambiance ouverte possible → flirt léger reste plausible,
  // mais on reste prudent : par défaut, faire connaissance.
  return "Faire connaissance";
}
