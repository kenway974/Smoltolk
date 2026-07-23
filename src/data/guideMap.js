// Relie une carte de conversation au bon palier du guide (« Et après ? »).
// L'accroche ouvre (P0) ; « et après » pointe vers l'étape suivante logique,
// qui dépend surtout de la proximité (à quel point on connaît déjà la personne)
// et de l'intention.

export const PALIERS_INFO = {
  p1: { label: "Cadrer",      tagline: "trouver la matière" },
  p2: { label: "Colorer",     tagline: "entrer dans le goût" },
  p3: { label: "Approfondir", tagline: "la vulnérabilité réciproque" },
};

const RANK = { p1: 1, p2: 2, p3: 3 };

export function guidePalier(situation = {}) {
  const prox = situation.proximite;
  let key = "p1";
  if (prox === "Connaissance" || prox === "Habitué") key = "p2";
  else if (prox === "Proche") key = "p3";

  // Le flirt vit dans le goût/la tension légère : au minimum P2.
  if (situation.intention === "Flirter" && RANK[key] < RANK.p2) key = "p2";

  return key;
}
