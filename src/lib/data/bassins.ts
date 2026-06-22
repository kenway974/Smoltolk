export const BASSINS = [
  {
    slug: 'nord',
    name: 'Nord',
    lat: -20.882,
    lng: 55.45,
    desc: 'Saint-Denis et ses environs',
    communes: ['Saint-Denis', 'Sainte-Marie', 'Sainte-Suzanne', 'Saint-André'],
  },
  {
    slug: 'ouest',
    name: 'Ouest',
    lat: -21.025,
    lng: 55.27,
    desc: 'Saint-Paul, Saint-Leu et la côte sous le vent',
    communes: ['Saint-Paul', 'Saint-Leu', 'Les Trois-Bassins', 'Saint-Louis'],
  },
  {
    slug: 'sud',
    name: 'Sud',
    lat: -21.34,
    lng: 55.47,
    desc: 'Saint-Pierre et la côte sauvage',
    communes: ['Saint-Pierre', 'Le Tampon', 'Saint-Joseph', 'Petite-Île'],
  },
  {
    slug: 'est',
    name: 'Est',
    lat: -21.11,
    lng: 55.72,
    desc: 'Saint-Benoît et la côte au vent',
    communes: ['Saint-Benoît', 'Bras-Panon', 'Saint-Philippe', 'Sainte-Rose'],
  },
] as const

export type BassinSlug = (typeof BASSINS)[number]['slug']
