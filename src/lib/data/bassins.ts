export const BASSINS = [
  {
    slug: "nord",
    name: "Bassin Nord",
    lat: -20.8789,
    lng: 55.4481,
    desc: "Saint-Denis, Sainte-Marie, Sainte-Suzanne — capitale et plaines.",
    communes: ["Saint-Denis", "Sainte-Marie", "Sainte-Suzanne", "Bras-Panon", "Saint-André"],
  },
  {
    slug: "ouest",
    name: "Bassin Ouest",
    lat: -21.0342,
    lng: 55.2199,
    desc: "Saint-Paul, Saint-Leu, Le Port — côte sauvage et lagons.",
    communes: ["Saint-Paul", "Saint-Leu", "Le Port", "La Possession", "Trois-Bassins"],
  },
  {
    slug: "sud",
    name: "Bassin Sud",
    lat: -21.3484,
    lng: 55.4785,
    desc: "Saint-Pierre, Le Tampon, Saint-Louis — Hauts du Sud et volcan.",
    communes: ["Saint-Pierre", "Le Tampon", "Saint-Louis", "Saint-Joseph", "Saint-Philippe"],
  },
  {
    slug: "est",
    name: "Bassin Est",
    lat: -21.0653,
    lng: 55.7150,
    desc: "Saint-Benoît, Salazie, Plaine-des-Palmistes — côte Est et cirques.",
    communes: ["Saint-Benoît", "Salazie", "Plaine-des-Palmistes", "La Plaine-des-Cafres"],
  },
] as const;

export type BassinSlug = typeof BASSINS[number]["slug"];
