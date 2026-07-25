// « Sorties de secours » — des phrases de rattrapage à dégainer quand ça coince,
// en direct, sans réfléchir. Chaque situation : un principe court (quoiFaire)
// et 3-4 phrases prêtes à dire, en français parlé naturel.
// Données pures, aucun import.

export const SECOURS = [
  {
    id: "blanc",
    titre: "Un blanc s'installe",
    emoji: "🫧",
    tint: "bg-sky-100 text-sky-600",
    quoiFaire:
      "Ne panique pas : un silence, c'est normal. Nomme-le tranquillement ou rebondis sur le décor autour de vous.",
    phrases: [
      "Bon, petit blanc — c'est le moment où on fait tous semblant de regarder nos chaussures.",
      "J'avoue que là, j'ai perdu le fil… on en était où ?",
      "Tiens, au fait, faut que je te demande un truc…",
      "On est bien, non ? Même le silence est confortable.",
    ],
  },
  {
    id: "sujet-mort",
    titre: "Le sujet est mort",
    emoji: "🪫",
    tint: "bg-amber-100 text-amber-600",
    quoiFaire:
      "Un sujet qui ne prend pas après deux relances, c'est le sujet, pas toi. Change d'angle sans le commenter.",
    phrases: [
      "Bon, et sinon, toi, ta journée elle ressemble à quoi en ce moment ?",
      "Change de disque : c'est quoi le dernier truc qui t'a vraiment fait marrer ?",
      "Attends, je rebondis sur autre chose — tu disais que t'habitais dans le coin ?",
      "Allez, question au hasard : plutôt café ou plutôt thé, toi ?",
    ],
  },
  {
    id: "plus-quoi-dire",
    titre: "Tu ne sais plus quoi dire",
    emoji: "🧭",
    tint: "bg-emerald-100 text-emerald-600",
    quoiFaire:
      "Arrête de chercher une idée brillante. Renvoie la balle à l'autre avec une vraie question ouverte.",
    phrases: [
      "Et toi, du coup, ça se passe comment de ton côté ?",
      "Raconte-moi ça, ça m'intéresse.",
      "Comment t'en es arrivé là, en fait ?",
      "Attends, c'est quoi ton histoire à toi là-dedans ?",
    ],
  },
  {
    id: "clore",
    titre: "Clore proprement",
    emoji: "👋",
    tint: "bg-violet-100 text-violet-600",
    quoiFaire:
      "Pas besoin d'un prétexte compliqué. Une phrase chaleureuse, un mot sur l'échange, et tu pars simplement.",
    phrases: [
      "Écoute, ça m'a fait super plaisir de discuter avec toi — je file, mais vraiment content de t'avoir croisé.",
      "Bon, je vais te laisser, mais c'était un chouette moment.",
      "Je dois y aller, mais on continue une prochaine fois, hein ?",
      "Allez, je te libère — passe une bonne journée, sincèrement.",
    ],
  },
  {
    id: "maladroit",
    titre: "Tu t'es senti maladroit",
    emoji: "😅",
    tint: "bg-rose-100 text-rose-600",
    quoiFaire:
      "Nomme-le avec légèreté plutôt que de faire semblant. L'autodérision désamorce tout et te rend attachant.",
    phrases: [
      "Voilà, c'était ma tentative de faire un truc cool… franc succès.",
      "Bon, j'ai clairement mieux dans ma tête que ce qui sort là.",
      "Excuse, je me suis un peu emmêlé — je recommence tranquillement.",
      "J'assume à moitié cette phrase, mais on va faire comme si.",
    ],
  },
  {
    id: "froideur",
    titre: "On te répond froidement",
    emoji: "🧊",
    tint: "bg-slate-100 text-slate-600",
    quoiFaire:
      "Ce n'est pas un test à réussir. Reste chaleureux, ne force rien, et sors avec le sourire — dignement.",
    phrases: [
      "Pas de souci, je te laisse tranquille — bonne continuation à toi !",
      "Ok, je sens que c'est pas le moment, aucun souci. Bonne journée !",
      "Je voulais juste dire bonjour, sans plus — passe une bonne journée.",
      "Message reçu, je m'éclipse — au plaisir quand même !",
    ],
  },
  {
    id: "callback",
    titre: "Relancer un truc dit plus tôt",
    emoji: "🔁",
    tint: "bg-orange-100 text-orange-600",
    quoiFaire:
      "Repêche un détail qu'il a lâché tout à l'heure. Ça prouve que tu écoutais et ça relance la conversation en douceur.",
    phrases: [
      "Attends, tout à l'heure tu parlais de… — raconte-moi la suite, j'ai pas eu le fin mot.",
      "Du coup, ton histoire de tantôt, ça a donné quoi finalement ?",
      "Je repense à ce que tu disais avant, sur… — ça m'a marqué, en fait.",
      "Tu m'as parlé de ton truc plus tôt, faut que tu m'en dises plus.",
    ],
  },
];
