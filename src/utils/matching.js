/**
 * Scores and filters situations based on wizard selections.
 * Any null criterion is treated as "don't care" and always matches.
 * Situations tagged "Tous" / "Indéfini" match any demographic criterion.
 */
export function matchSituations(situations, { lieu, avatar, interet }) {
  const { ageGroupe = null, genre = null, vibe = null } = avatar || {};

  const scored = situations.map(s => {
    let score = 0;

    if (lieu) {
      if (s.environnement === lieu) score += 3;
      else return null; // hard filter on lieu when set
    }

    if (interet) {
      if (s.centreInteret === interet) score += 3;
      else return null; // hard filter on interet when set
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

    return { situation: s, score };
  });

  return scored
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .map(({ situation }) => situation);
}
