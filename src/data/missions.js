// Échelle graduée de défis sociaux ("missions") pour Smoltolk.
// Données pures — aucun import, aucun React.

export const TIERS = [
  {
    key: "echauffement",
    label: "Échauffement",
    emoji: "🌱",
    tint: "bg-emerald-100 text-emerald-700 border-emerald-200",
    active: "bg-emerald-600 text-white border-emerald-600",
  },
  {
    key: "contact",
    label: "Prise de contact",
    emoji: "👋",
    tint: "bg-sky-100 text-sky-700 border-sky-200",
    active: "bg-sky-500 text-white border-sky-500",
  },
  {
    key: "echange",
    label: "Tenir l'échange",
    emoji: "💬",
    tint: "bg-amber-100 text-amber-700 border-amber-200",
    active: "bg-amber-500 text-white border-amber-500",
  },
  {
    key: "profond",
    label: "Aller plus loin",
    emoji: "🔥",
    tint: "bg-violet-100 text-violet-700 border-violet-200",
    active: "bg-violet-600 text-white border-violet-600",
  },
];

export const MISSIONS = [
  // ── Tier 1 · Échauffement ─────────────────────────────────────────
  {
    id: "sourire-passant",
    tier: "echauffement",
    titre: "Sourire à quelqu'un",
    desc: "Croise le regard d'un passant et offre-lui un petit sourire : rien à dire, juste un geste chaleureux qui ne t'engage à rien.",
    xp: 10,
  },
  {
    id: "bonjour-inconnu",
    tier: "echauffement",
    titre: "Dire bonjour à un inconnu",
    desc: "Lance un 'bonjour' clair à une personne que tu croises (voisin, commerçant, livreur) : deux syllabes qui ouvrent la porte sans pression.",
    xp: 10,
  },
  {
    id: "merci-chaleureux",
    tier: "echauffement",
    titre: "Remercier chaleureusement",
    desc: "Remercie une personne qui te rend un service (caissier, serveur) avec un vrai sourire et un mot en plus : c'est bienveillant et toujours bien reçu.",
    xp: 10,
  },
  {
    id: "compliment-objet",
    tier: "echauffement",
    titre: "Complimenter un objet",
    desc: "Fais un compliment sincère sur un objet visible (un sac, des baskets, un carnet) : c'est neutre, facile et ça fait plaisir à coup sûr.",
    xp: 10,
  },
  {
    id: "demander-info",
    tier: "echauffement",
    titre: "Demander une info",
    desc: "Demande l'heure ou ton chemin à un inconnu : une question toute simple qui t'entraîne à briser la glace avec un objectif concret.",
    xp: 15,
  },

  // ── Tier 2 · Prise de contact ─────────────────────────────────────
  {
    id: "observation-partagee",
    tier: "contact",
    titre: "Commenter la situation",
    desc: "Fais une remarque légère sur ce que vous vivez au même moment (la file, la météo, l'attente) : l'observation partagée est la façon la plus naturelle d'engager.",
    xp: 20,
  },
  {
    id: "question-ouverte",
    tier: "contact",
    titre: "Poser une question ouverte",
    desc: "Pose à un inconnu une question qui appelle plus qu'un oui/non ('t'en penses quoi de...') : tu laisses à l'autre de la place pour rebondir.",
    xp: 20,
  },
  {
    id: "compliment-enchainer",
    tier: "contact",
    titre: "Complimenter puis enchaîner",
    desc: "Après un compliment sincère, enchaîne avec une petite question sur le même sujet : tu transformes un geste sympa en début de conversation.",
    xp: 20,
  },
  {
    id: "aborder-recurrent",
    tier: "contact",
    titre: "Aborder un visage familier",
    desc: "Dans un lieu que tu fréquentes (salle de sport, café, cours), adresse la parole à quelqu'un que tu recroises souvent : le contexte récurrent rend l'approche facile.",
    xp: 25,
  },
  {
    id: "se-presenter",
    tier: "contact",
    titre: "Te présenter et demander le prénom",
    desc: "Donne ton prénom et demande celui de l'autre au bon moment : un petit rituel qui ancre l'échange et le rend plus personnel.",
    xp: 25,
  },

  // ── Tier 3 · Tenir l'échange ──────────────────────────────────────
  {
    id: "tirer-le-fil",
    tier: "echange",
    titre: "Tirer un fil dans la réponse",
    desc: "Repère un détail dans ce que l'autre vient de dire et relance dessus : tu montres que tu écoutes et la conversation avance toute seule.",
    xp: 35,
  },
  {
    id: "trois-echanges",
    tier: "echange",
    titre: "Tenir trois échanges de suite",
    desc: "Fais durer une conversation sur au moins trois allers-retours avant de conclure : l'objectif est juste de rester présent, pas de briller.",
    xp: 35,
  },
  {
    id: "provoquer-rire",
    tier: "echange",
    titre: "Provoquer un rire",
    desc: "Glisse une remarque légère ou une petite autodérision pour faire sourire ton interlocuteur : rien de plus complice qu'un rire partagé.",
    xp: 40,
  },
  {
    id: "desaccord-joueur",
    tier: "echange",
    titre: "Oser un léger désaccord",
    desc: "Exprime gentiment un avis différent sur un sujet anodin, sur le ton du jeu : un petit désaccord assumé rend l'échange vivant et sincère.",
    xp: 40,
  },
  {
    id: "callback",
    tier: "echange",
    titre: "Faire un callback",
    desc: "Reviens plus tard sur un truc dit au début de la discussion : ce clin d'œil montre que tu as retenu et crée une vraie complicité.",
    xp: 40,
  },

  // ── Tier 4 · Aller plus loin ──────────────────────────────────────
  {
    id: "opinion-tranchee",
    tier: "profond",
    titre: "Poser une question de goût tranchée",
    desc: "Demande un avis franc ('plutôt X ou Y, et pourquoi ?') : les questions de goût invitent l'autre à se dévoiler un peu et donnent du relief à l'échange.",
    xp: 50,
  },
  {
    id: "partage-perso",
    tier: "profond",
    titre: "Partager quelque chose de perso",
    desc: "Ose livrer en premier un petit truc sincère sur toi : en te dévoilant, tu autorises l'autre à faire pareil et l'échange gagne en profondeur.",
    xp: 50,
  },
  {
    id: "demander-contact",
    tier: "profond",
    titre: "Demander un contact",
    desc: "Si le courant passe, propose de garder le contact ou de vous revoir : une phrase simple et directe, sans en faire un drame.",
    xp: 55,
  },
  {
    id: "gerer-refus",
    tier: "profond",
    titre: "Gérer un refus avec le sourire",
    desc: "Si l'autre décline, remercie et pars détendu : un refus n'est pas un échec, c'est la preuve que tu as osé — et ça se retente.",
    xp: 55,
  },
  {
    id: "relancer-connaissance",
    tier: "profond",
    titre: "Relancer une connaissance recroisée",
    desc: "Recroise quelqu'un que tu avais déjà abordé et reprends la discussion là où elle s'était arrêtée : tu transformes un contact en lien qui dure.",
    xp: 55,
  },

  // ── Ajouts ────────────────────────────────────────────────────────
  {
    id: "regard-sourire-deux-secondes",
    tier: "echauffement",
    titre: "Tenir un regard souriant 2 secondes",
    desc: "Accroche le regard de quelqu'un et garde ton sourire deux petites secondes avant de détourner les yeux : juste assez pour dire 'je te vois' en douceur.",
    xp: 10,
  },
  {
    id: "bonne-journee-commercant",
    tier: "echauffement",
    titre: "Souhaiter une bonne journée",
    desc: "En quittant une boutique ou un café, lance un 'bonne journée !' sincère au commerçant : un petit mot chaleureux qui laisse une trace sympa des deux côtés.",
    xp: 10,
  },
  {
    id: "demander-recommandation",
    tier: "contact",
    titre: "Demander une recommandation",
    desc: "Demande à quelqu'un de te conseiller un plat, un livre ou un endroit qu'il aime : les gens adorent partager leurs coups de cœur, et ça lance l'échange tout seul.",
    xp: 20,
  },
  {
    id: "engager-file-attente",
    tier: "contact",
    titre: "Engager ton voisin de file",
    desc: "Dans une file ou une salle d'attente, glisse un mot à la personne à côté de toi : vous vivez le même moment, c'est le prétexte parfait pour briser la glace.",
    xp: 25,
  },
  {
    id: "question-de-suivi",
    tier: "echange",
    titre: "Poser une question de suivi",
    desc: "Quand l'autre te raconte quelque chose, relance avec un simple 'et ensuite ?' ou 'ça t'a fait quoi ?' : tu montres ton intérêt et l'histoire continue.",
    xp: 35,
  },
  {
    id: "reutiliser-le-prenom",
    tier: "echange",
    titre: "Réutiliser le prénom",
    desc: "Retiens le prénom de la personne et replace-le une fois dans la conversation : un petit geste qui réchauffe l'échange et montre que tu es vraiment là.",
    xp: 35,
  },
  {
    id: "question-sur-un-reve",
    tier: "profond",
    titre: "Poser une question sur un projet",
    desc: "Demande à l'autre ce qui le fait vibrer en ce moment, un rêve ou un projet qui lui tient à cœur : tu ouvres une porte vers une conversation qui compte vraiment.",
    xp: 50,
  },
  {
    id: "compliment-sur-une-qualite",
    tier: "profond",
    titre: "Complimenter une qualité",
    desc: "Offre un compliment sincère non pas sur un objet mais sur une qualité que tu remarques (sa patience, son humour, sa gentillesse) : ça touche bien plus profond.",
    xp: 50,
  },
];

export const MISSION_BY_ID = Object.fromEntries(MISSIONS.map((m) => [m.id, m]));
export const TIER_BY_KEY = Object.fromEntries(TIERS.map((t) => [t.key, t]));
