// Types de personnes — des états passagers, pas des étiquettes.
// Chaque archétype décrit une situation ou une humeur du moment,
// jamais la valeur d'une personne. Bienveillant, concret.

export const TYPES = [
  {
    id: "presse",
    titre: "Le pressé",
    emoji: "⏱️",
    tint: "bg-amber-100 text-amber-600",
    signes: [
      "Il regarde souvent l'heure, son téléphone ou la sortie.",
      "Ses réponses sont courtes, son débit rapide.",
      "Il reste debout, sac déjà sur l'épaule, prêt à filer.",
    ],
    approche: [
      "Va droit au but, en une phrase claire et légère.",
      "Montre que tu respectes son temps : « Je te vole trois secondes. »",
      "Accepte un échange bref sans y voir un rejet — c'est le contexte, pas toi.",
    ],
    aEviter: [
      "Lancer une longue histoire ou multiplier les questions.",
      "Prendre sa rapidité pour de la froideur.",
    ],
  },
  {
    id: "timide",
    titre: "La personne timide",
    emoji: "🌱",
    tint: "bg-emerald-100 text-emerald-600",
    signes: [
      "Elle parle doucement, évite un peu le regard.",
      "Elle sourit mais laisse de longs silences.",
      "Elle attend qu'on vienne plutôt que d'aborder.",
    ],
    approche: [
      "Adopte un ton doux et pose des questions simples, ouvertes.",
      "Laisse-lui le temps de répondre, sans combler chaque silence.",
      "Valorise ce qu'elle dit pour la mettre à l'aise progressivement.",
    ],
    aEviter: [
      "Parler trop fort ou trop vite, ça la referme.",
      "La mettre au centre de l'attention d'un coup.",
    ],
  },
  {
    id: "bavard",
    titre: "Le bavard",
    emoji: "💬",
    tint: "bg-blue-100 text-blue-600",
    signes: [
      "Il enchaîne les sujets et raconte volontiers.",
      "Il rebondit sur tout, parfois sans te laisser la parole.",
      "Il a de l'énergie et cherche visiblement le contact.",
    ],
    approche: [
      "Écoute vraiment : c'est souvent tout ce qu'il attend.",
      "Relance avec un mot ou un hochement, il fera le reste.",
      "Place ta phrase sur une respiration, calmement, il te suivra.",
    ],
    aEviter: [
      "Lui couper la parole sèchement ou paraître agacé.",
      "Entrer dans une compétition pour parler plus que lui.",
    ],
  },
  {
    id: "ferme",
    titre: "Le fermé / méfiant",
    emoji: "🛡️",
    tint: "bg-stone-200 text-stone-600",
    signes: [
      "Bras croisés, corps un peu de biais, réponses prudentes.",
      "Il t'observe avant de s'ouvrir, teste un peu le terrain.",
      "Son ton reste neutre, il ne se livre pas tout de suite.",
    ],
    approche: [
      "Reste léger et sans enjeu, laisse-lui l'espace de choisir.",
      "Sois transparent sur ton intention : simple, honnête, sans pression.",
      "Un peu d'humour ou un point commun concret font baisser la garde.",
    ],
    aEviter: [
      "Insister ou te montrer trop familier trop vite.",
      "Prendre sa méfiance personnellement — c'est une protection.",
    ],
  },
  {
    id: "enthousiaste",
    titre: "L'enthousiaste",
    emoji: "✨",
    tint: "bg-rose-100 text-rose-600",
    signes: [
      "Il sourit franchement, ouvre grand le regard.",
      "Il réagit avec chaleur et embarque facilement.",
      "Son corps est tourné vers toi, disponible.",
    ],
    approche: [
      "Accueille son énergie, rends-lui son sourire.",
      "Rebondis sur sa bonne humeur, propose, ose un peu plus.",
      "Partage à ton tour : il aime les échanges vivants.",
    ],
    aEviter: [
      "Rester distant ou trop plat, ça douche l'élan.",
      "Confondre sa chaleur naturelle avec une attente précise.",
    ],
  },
  {
    id: "distrait",
    titre: "Le distrait (sur son téléphone)",
    emoji: "📱",
    tint: "bg-violet-100 text-violet-600",
    signes: [
      "Les yeux sur l'écran, casque parfois sur les oreilles.",
      "Il répond à moitié, un peu ailleurs.",
      "Il est occupé mais pas forcément indisponible.",
    ],
    approche: [
      "Attends un temps mort, puis aborde d'un mot simple et clair.",
      "Une remarque courte sur l'instant présent le ramène en douceur.",
      "S'il replonge dans son écran, laisse filer sans insister.",
    ],
    aEviter: [
      "Te vexer de son inattention — il ne t'a peut-être pas vu.",
      "T'imposer alors qu'il est visiblement pris.",
    ],
  },
];
