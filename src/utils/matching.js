export const PROFILE_TO_CATEGORY = {
  // Séduction
  "Fille à aborder": "Séduction",
  "Garçon à aborder": "Séduction",
  "Inconnu(e) en soirée": "Séduction",
  "Ami(e) d'un(e) ami(e)": "Séduction",
  "Inconnu(e) sympa en soirée": "Séduction",
  "Organisateur / Hôte": "Séduction",
  "DJ / Artiste": "Séduction",

  // Boulot
  "Collègue": "Boulot",
  "Nouveau(elle) collègue": "Boulot",
  "Manager / Boss": "Boulot",
  "Client(e)": "Boulot",
  "Recruteur(euse)": "Boulot",
  "Stagiaire": "Boulot",

  // Sport & Bien-être
  "Coach sportif": "Sport & Bien-être",
  "Partenaire de sport": "Sport & Bien-être",
  "Inconnu(e) à la salle": "Sport & Bien-être",
  "Kiné / Médecin": "Sport & Bien-être",
  "Jogger / Coureur": "Sport & Bien-être",

  // Vie de quartier
  "Voisin(e)": "Vie de quartier",
  "Passant(e) avec chien": "Vie de quartier",
  "Livreur": "Vie de quartier",
  "SDF": "Vie de quartier",
  "Cycliste": "Vie de quartier",
  "Motard": "Vie de quartier",
  "Laveur de vitres": "Vie de quartier",
  "Musicien de rue": "Vie de quartier",
  "Gardien / Concierge": "Vie de quartier",
  "Commerçant sur le seuil": "Vie de quartier",

  // Services & Commerces
  "Barista / Serveur": "Services & Commerces",
  "Vendeur(euse)": "Services & Commerces",
  "Caissier/ière": "Services & Commerces",
  "Pharmacien(ne)": "Services & Commerces",
  "Agent de sécurité": "Services & Commerces",
  "Maraîcher": "Services & Commerces",
  "Boucher / Artisan": "Services & Commerces",
  "Réceptionniste": "Services & Commerces",

  // Transports
  "Automobiliste": "Transports",
  "Chauffeur VTC / Taxi": "Transports",
  "Voisin(e) de transport": "Transports",
};

export const LOCATION_TO_CATEGORIES = {
  "Dans la rue": ["Séduction", "Vie de quartier"],
  "Transports": ["Transports", "Séduction"],
  "Au boulot": ["Boulot"],
  "Salle de sport": ["Sport & Bien-être"],
  "Commerce / Magasin": ["Services & Commerces", "Vie de quartier"],
  "Parc / Espace vert": ["Vie de quartier", "Séduction"],
  "Soirée / Fête": ["Séduction"],
  "Café / Brasserie": ["Séduction", "Services & Commerces"],
  "Immeuble / Résidentiel": ["Vie de quartier"],
  "Marché": ["Services & Commerces", "Vie de quartier"],
};

function normalizeStr(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .trim();
}

export function getMatchedSituations(wizardData, situations) {
  const { location, profile, energie } = wizardData;

  const profileCategory = PROFILE_TO_CATEGORY[profile] ?? null;
  const locationCategories = LOCATION_TO_CATEGORIES[location] ?? [];
  const normalizedProfile = profile ? normalizeStr(profile) : "";

  const scored = situations.map((s) => {
    let score = 0;

    // Energie match: +3
    if (energie && s.energie === energie) {
      score += 3;
    }

    // Location category match: +3
    if (locationCategories.includes(s.categorie)) {
      score += 3;
    }

    // Profile category match: +4
    if (profileCategory && s.categorie === profileCategory) {
      score += 4;
    }

    // Fuzzy profil string match: +5
    if (normalizedProfile) {
      const normalizedSituationProfil = normalizeStr(s.profil);
      const profileWords = normalizedProfile.split(" ").filter(Boolean);
      const profilWords2 = normalizedSituationProfil.split(" ").filter(Boolean);

      // Check for word overlap
      const hasMatch = profileWords.some(
        (word) => word.length > 2 && profilWords2.some((w) => w.includes(word) || word.includes(w))
      );
      if (hasMatch) {
        score += 5;
      } else if (
        normalizedSituationProfil.includes(normalizedProfile) ||
        normalizedProfile.includes(normalizedSituationProfil)
      ) {
        score += 5;
      }
    }

    return { situation: s, score };
  });

  const filtered = scored.filter((item) => item.score >= 3);

  if (filtered.length === 0) {
    // Return top 6 anyway
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.situation);
  }

  return filtered
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((item) => item.situation);
}
