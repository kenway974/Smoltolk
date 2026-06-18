/**
 * Scores and filters situations based on wizard selections.
 * Null criterion = "don't care", always matches.
 * "Tous" / "Indéfini" match any demographic filter.
 * proximite / audace are cumulative: lower level also matches a higher user setting.
 */
const PROX_ORDER = { Inconnu: 1, Croisé: 2, Connaissance: 3, Habitué: 4, Proche: 5 };

export function matchSituations(situations, { lieu, avatar, interet, contexte }) {
  const { ageGroupe = null, genre = null, vibe = null } = avatar || {};
  const { proximite = null, audace = null } = contexte || {};

  const scored = situations.map(s => {
    let score = 0;

    if (lieu) {
      if (s.environnement === lieu) score += 3;
      else return null;
    }

    if (interet) {
      if (s.centreInteret === interet) score += 3;
      else return null;
    }

    if (ageGroupe && ageGroupe !== "Peu importe") {
      if (s.ageGroupe === ageGroupe) score += 2;
      else if (s.ageGroupe === "Tous") score += 1;
      else return null;
    }

    if (genre && genre !== "Peu importe") {
      if (s.genre === genre) score += 2;
      else if (s.genre === "Indéfini") score += 1;
      else return null;
    }

    if (vibe) {
      if (s.vibe === vibe) score += 2;
      else return null;
    }

    if (proximite) {
      const userLvl = PROX_ORDER[proximite] || 1;
      const sitLvl  = PROX_ORDER[s.proximite] || 1;
      if (sitLvl > userLvl) return null;
      score += sitLvl === userLvl ? 3 : 1;
    }

    if (audace !== null && audace !== undefined) {
      const sitAudace = s.audace || 1;
      if (sitAudace > audace) return null;
      if (sitAudace === audace) score += 2;
    }

    return { situation: s, score };
  });

  return scored
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map(({ situation }) => situation);
}
