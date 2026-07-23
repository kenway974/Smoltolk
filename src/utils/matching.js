/**
 * Classe les situations selon les choix du wizard — SANS jamais renvoyer une
 * liste vide (dégradation gracieuse).
 *
 * Principe :
 *  - `lieu` est le seul filtre "dur" : si l'utilisateur a choisi un lieu, on ne
 *    montre que les situations de ce lieu (chaque lieu a toujours ≥ 1 situation,
 *    donc jamais de résultat vide).
 *  - Tous les autres critères (intérêt, âge, genre, vibe, proximité, audace)
 *    sont "doux" : une non-correspondance ne rejette PAS la situation, elle
 *    réduit simplement son score. On renvoie donc toujours les meilleures
 *    correspondances, classées de la plus pertinente à la moins pertinente.
 *
 * Le résultat expose aussi `situation.__exact` (booléen) pour permettre à l'UI
 * d'indiquer quand il ne s'agit que d'approximations.
 */
const PROX_ORDER = { Inconnu: 1, Croisé: 2, Connaissance: 3, Habitué: 4, Proche: 5 };

// Nombre max de cartes renvoyées quand aucun lieu n'est choisi (évite d'afficher
// toute la base). Quand un lieu est choisi, on renvoie toutes ses situations.
const MAX_WITHOUT_LIEU = 12;

export function matchSituations(situations, { lieu, avatar, interet, contexte, intention, role }) {
  const { ageGroupe = null, genre = null, vibe = null } = avatar || {};
  const { proximite = null, audace = null } = contexte || {};

  const pool = lieu ? situations.filter(s => s.environnement === lieu) : situations;

  const scored = pool.map(s => {
    let score = 0;
    let exact = true; // vrai si la situation matche parfaitement chaque critère choisi

    if (lieu) score += 5; // bonus lieu (garanti ici)

    if (intention) {
      if (s.intention === intention) score += 6; // l'intention prime : registre de l'accroche
      else exact = false;
    }

    if (role) {
      // Mon rôle sur place : une accroche écrite pour un AUTRE rôle chute (garde-fou),
      // une accroche neutre ("Tous") reste valable.
      if (s.role === role) score += 5;
      else if (s.role === "Tous" || !s.role) score += 1;
      else exact = false;
    }

    if (interet) {
      if (s.centreInteret === interet) score += 4;
      else exact = false;
    }

    if (ageGroupe && ageGroupe !== "Peu importe") {
      if (s.ageGroupe === ageGroupe) score += 2;
      else if (s.ageGroupe === "Tous") score += 1;
      else exact = false;
    }

    if (genre && genre !== "Peu importe") {
      if (s.genre === genre) score += 2;
      else if (s.genre === "Indéfini") score += 1;
      else exact = false;
    }

    if (vibe) {
      if (s.vibe === vibe) score += 3;
      else exact = false;
    }

    if (proximite) {
      const userLvl = PROX_ORDER[proximite] || 1;
      const sitLvl  = PROX_ORDER[s.proximite] || 1; // undefined → "Inconnu"
      if (sitLvl <= userLvl) score += sitLvl === userLvl ? 3 : 1;
      else exact = false; // situation plus intime que la relation réelle : moins pertinent
    }

    if (audace !== null && audace !== undefined) {
      const sitAudace = s.audace || 1; // undefined → 1 (prudent)
      if (sitAudace === audace) score += 2;
      else if (sitAudace < audace) score += 1;
      else exact = false; // situation plus audacieuse que ce que veut l'utilisateur
    }

    return { situation: s, score, exact };
  });

  scored.sort((a, b) => b.score - a.score);

  const limited = lieu ? scored : scored.slice(0, MAX_WITHOUT_LIEU);

  return limited.map(({ situation, exact }) => ({ ...situation, __exact: exact }));
}
