// « Boss du jour » — des défis costauds, un cran au-dessus des missions.
// Ce sont des objectifs composites (plusieurs paliers d'un coup, ou du volume),
// débloqués quand tu montes en niveau. Données pures, aucun import.

export const BOSSES = [
  {
    id: "boss-cinq-minutes",
    titre: "La conversation de 5 minutes",
    desc: "Aborde un inconnu et tiens l'échange cinq bonnes minutes, sans le forcer. Tu ouvres, tu cadres, tu tires au moins un fil.",
    xp: 80,
  },
  {
    id: "boss-triple",
    titre: "Le triplé du jour",
    desc: "Adresse la parole à trois personnes différentes dans la même journée. Peu importe le résultat : c'est le volume qu'on vise.",
    xp: 90,
  },
  {
    id: "boss-opinion",
    titre: "Le désaccord assumé",
    desc: "Ose un vrai désaccord joueur sur un sujet léger, tiens ta position deux échanges, puis concède un point. Le ping-pong, pas la victoire.",
    xp: 85,
  },
  {
    id: "boss-vulnerabilite",
    titre: "Donner en premier",
    desc: "Dans une conversation qui roule, expose quelque chose d'un peu perso avant de le demander à l'autre. Puis écoute sans réparer.",
    xp: 100,
  },
  {
    id: "boss-contact",
    titre: "La sortie haute",
    desc: "Après un bon moment, pars sur un pic : « J'ai passé un super moment, on refait ça ? » et demande un contact. Franc, sans te justifier.",
    xp: 100,
  },
  {
    id: "boss-groupe",
    titre: "Entrer dans un groupe",
    desc: "Rejoins une conversation à plusieurs (pas juste en tête-à-tête) et place au moins deux interventions. Le plus dur, et tu le fais.",
    xp: 110,
  },
  {
    id: "boss-callback",
    titre: "Le callback",
    desc: "Recroise quelqu'un déjà abordé et reprends un détail qu'il t'avait confié la fois d'avant. Tu prouves que tu écoutais vraiment.",
    xp: 95,
  },
  {
    id: "boss-froid-total",
    titre: "Encaisser un vrai non",
    desc: "Provoque-toi une approche où le refus est probable — et gère-le avec le sourire. Le but n'est pas le oui : c'est ta réaction au non.",
    xp: 90,
  },
];

export const BOSS_BY_ID = Object.fromEntries(BOSSES.map((b) => [b.id, b]));
