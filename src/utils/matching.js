// Le moteur est volontairement SIMPLE et déterministe.
//
// La personne (profil) choisie est l'ANCRE EXACTE : on renvoie uniquement
// les conversations de CE profil — jamais d'autres profils "ressemblants".
// L'énergie et le lieu ne servent qu'à trier/contextualiser, jamais à filtrer
// vers d'autres personnes.

export function getConversationsFor(wizardData, situations) {
  const { profile, energie, location } = wizardData || {};
  if (!profile) return [];

  // Match EXACT sur le profil sélectionné (le libellé du wizard == s.profil)
  const matches = situations.filter((s) => s.profil === profile);

  if (matches.length === 0) return [];

  // Tri doux : on remonte d'abord les variantes qui collent à l'énergie,
  // puis celles qui collent au lieu. Aucune exclusion.
  return [...matches].sort((a, b) => {
    const aEnergy = a.energie === energie ? 0 : 1;
    const bEnergy = b.energie === energie ? 0 : 1;
    if (aEnergy !== bEnergy) return aEnergy - bEnergy;

    const aLoc = location && a.environnement === location ? 0 : 1;
    const bLoc = location && b.environnement === location ? 0 : 1;
    return aLoc - bLoc;
  });
}

// Alias rétro-compatible
export const getMatchedSituations = getConversationsFor;
