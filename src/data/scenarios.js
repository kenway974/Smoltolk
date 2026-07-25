// Scénarios de terrain — données pures, aucun import.
// Chacun : un moment concret de la vie sociale, un plan en étapes,
// des phrases prêtes à dire (tutoiement, chaleureux, concret) et les pièges à éviter.

export const SCENARIOS = [
  {
    id: "soiree-personne",
    titre: "La soirée où tu connais personne",
    emoji: "🎉",
    tint: "bg-violet-100 text-violet-600",
    quand: "Tu arrives à une fête, un pot, un mariage, et tu ne connais quasiment personne.",
    plan: [
      {
        titre: "Trouve un point d'ancrage",
        texte: "Passe d'abord par la personne que tu connais un minimum, ou approche-toi du buffet / du bar. Ce sont des zones où parler est normal et attendu.",
      },
      {
        titre: "Ouvre sur le contexte, pas sur toi",
        texte: "Commente ce que vous vivez tous les deux : la déco, la musique, le plat, comment chacun connaît l'hôte. C'est le carburant le plus simple.",
      },
      {
        titre: "Fais un pas de plus",
        texte: "Après le premier échange, pose une question ouverte (« et toi, tu bosses dans quoi ? ») pour passer du small talk à une vraie discussion.",
      },
      {
        titre: "Autorise-toi à circuler",
        texte: "Tu n'es pas collé à la première personne pour la soirée. Un « je vais dire bonjour à deux-trois personnes, on se recroise » est parfaitement normal.",
      },
    ],
    phrasesCles: [
      "Salut, je crois qu'on ne se connaît pas — tu es plutôt côté [hôte] ou côté [autre] ?",
      "Franchement je connais presque personne ici, ça m'arrange de tomber sur quelqu'un de sympa.",
      "Il est top ce plat, tu as goûté ? Tu connais l'hôte comment, toi ?",
    ],
    aEviter: [
      "Rester scotché à ton téléphone dans un coin en attendant que ça passe.",
      "Te forcer à faire le drôle : être simplement curieux et détendu marche mieux.",
    ],
  },
  {
    id: "entrer-groupe",
    titre: "Entrer dans une conversation à plusieurs",
    emoji: "👥",
    tint: "bg-blue-100 text-blue-600",
    quand: "Un petit groupe discute déjà et tu aimerais te joindre à eux sans casser l'ambiance.",
    plan: [
      {
        titre: "Approche-toi doucement",
        texte: "Place-toi en périphérie du groupe, corps ouvert, sourire léger. Écoute quelques secondes le fil de la conversation avant de parler.",
      },
      {
        titre: "Entre par l'écoute, pas par l'interruption",
        texte: "Hoche la tête, réagis non-verbalement. Souvent quelqu'un t'ouvre naturellement une place en se tournant un peu vers toi.",
      },
      {
        titre: "Glisse-toi sur le sujet en cours",
        texte: "Rebondis sur ce qui vient d'être dit plutôt que de lancer un nouveau thème. Tu montres que tu suis, tu ne prends pas le pouvoir.",
      },
      {
        titre: "Présente-toi une fois intégré",
        texte: "Quand il y a un petit blanc, un simple « au fait moi c'est [prénom] » suffit à officialiser ta place.",
      },
    ],
    phrasesCles: [
      "Je peux me greffer ? J'ai entendu que vous parliez de [sujet], ça m'intéresse.",
      "Attends, tu disais quoi sur [truc] ? J'ai loupé le début mais ça m'a l'air génial.",
      "Ah je suis d'accord avec [prénom] là-dessus — et vous en pensez quoi du coup ?",
    ],
    aEviter: [
      "Débarquer en changeant brutalement de sujet pour parler de toi.",
      "Rester planté en silence trop longtemps : réagis, même juste d'un rire ou d'un mot.",
    ],
  },
  {
    id: "reprendre-contact",
    titre: "Reprendre contact avec quelqu'un perdu de vue",
    emoji: "🔄",
    tint: "bg-amber-100 text-amber-600",
    quand: "Un ancien ami, un ex-collègue : ça fait des mois (ou des années) et tu n'oses plus écrire.",
    plan: [
      {
        titre: "Lâche la culpabilité du silence",
        texte: "Le temps qui a passé n'est pas un problème à justifier longuement. La plupart des gens sont juste contents d'avoir des nouvelles.",
      },
      {
        titre: "Accroche sur un déclencheur",
        texte: "Un souvenir, une photo, une news qui t'a fait penser à lui/elle : ça rend ton message concret et sincère plutôt que gratuit.",
      },
      {
        titre: "Assume simplement le pourquoi",
        texte: "Dis franchement que tu repensais à cette personne et que tu avais envie de reprendre contact. La sincérité désamorce la gêne.",
      },
      {
        titre: "Propose un petit pas concret",
        texte: "Termine sur une porte ouverte : un café, un appel, sans forcer. Laisse la personne libre de dire oui à son rythme.",
      },
    ],
    phrasesCles: [
      "Hey ! Je suis tombé sur [truc] et ça m'a direct fait penser à toi. Comment tu vas depuis le temps ?",
      "Ça fait un bail je sais, mais je repensais à nos [souvenir] et j'avais envie de prendre de tes nouvelles.",
      "Ça me ferait vraiment plaisir de te recroiser un de ces quatre — un café quand tu veux ?",
    ],
    aEviter: [
      "T'excuser trois paragraphes pour le silence : ça met un malaise inutile.",
      "Attendre « le bon moment » qui ne viendra jamais. Le bon moment, c'est là.",
    ],
  },
  {
    id: "aborder-message",
    titre: "Relancer ou aborder par message écrit",
    emoji: "💬",
    tint: "bg-sky-100 text-sky-600",
    quand: "Tu as un numéro ou un contact et tu veux écrire un premier message qui donne envie de répondre.",
    plan: [
      {
        titre: "Rappelle le contexte en une ligne",
        texte: "La personne doit te situer en deux secondes : où vous vous êtes croisés, qui vous a mis en contact. Enlève le doute.",
      },
      {
        titre: "Fais court et vivant",
        texte: "Un message court, chaleureux, avec une accroche concrète vaut mieux qu'un pavé. On répond plus facilement à quelque chose de léger.",
      },
      {
        titre: "Donne un fil à tirer",
        texte: "Termine par une question simple ou une proposition. Un message qui se finit sans rien à quoi répondre reste souvent sans réponse.",
      },
      {
        titre: "Ne surinterprète pas les délais",
        texte: "Pas de réponse dans l'heure ne veut rien dire. Laisse respirer, une relance légère quelques jours après est OK.",
      },
    ],
    phrasesCles: [
      "Salut [prénom], c'est [toi] — on a discuté [contexte] l'autre jour. C'était sympa, je voulais garder le contact.",
      "Hello ! Petit message pour te dire que ta remarque sur [sujet] m'est restée. Tu fais quoi de beau en ce moment ?",
      "Ça te dirait qu'on prenne un verre pour continuer la discussion ? Je suis dispo cette semaine.",
    ],
    aEviter: [
      "Le pavé de dix lignes qui met la pression dès le premier message.",
      "Enchaîner plusieurs messages sans réponse : un seul rappel suffit.",
    ],
  },
  {
    id: "premier-date",
    titre: "Un premier rendez-vous",
    emoji: "☕",
    tint: "bg-rose-100 text-rose-600",
    quand: "Tu rencontres quelqu'un pour la première fois en tête-à-tête et tu veux que ça coule.",
    plan: [
      {
        titre: "Choisis un cadre qui aide",
        texte: "Un café, une balade, un lieu avec un peu de vie autour : ça donne des choses à commenter et enlève la pression du face-à-face figé.",
      },
      {
        titre: "Vise la curiosité, pas l'interrogatoire",
        texte: "Alterne questions et petits bouts de toi. Rebondis sur ce que l'autre dit plutôt que de dérouler une liste de questions.",
      },
      {
        titre: "Ose la légèreté",
        texte: "Un peu d'humour, un compliment sincère, de la présence : les gens retiennent comment tu les as fait se sentir, pas tes réponses parfaites.",
      },
      {
        titre: "Clôture proprement",
        texte: "Si c'était bien, dis-le simplement et propose une suite. Si ça n'a pas pris, un mot chaleureux et honnête vaut mieux que de fuir.",
      },
    ],
    phrasesCles: [
      "J'étais un peu nerveux à l'idée de ce rendez-vous, mais là franchement je passe un bon moment.",
      "Raconte-moi un truc que les gens ne devinent pas en te voyant.",
      "J'ai vraiment aimé ce moment — ça me plairait bien qu'on remette ça.",
    ],
    aEviter: [
      "Transformer le rendez-vous en entretien d'embauche avec ta liste de questions.",
      "Meubler chaque silence : deux secondes de calme ne sont pas un échec.",
    ],
  },
  {
    id: "reseautage-pro",
    titre: "Un événement de réseautage pro",
    emoji: "🤝",
    tint: "bg-teal-100 text-teal-600",
    quand: "Salon, afterwork, conférence : tu veux créer des contacts pros sans avoir l'air d'un vendeur.",
    plan: [
      {
        titre: "Change ton objectif",
        texte: "Ne vise pas « ramener 20 cartes ». Vise deux ou trois vraies conversations. La qualité crée des relations, pas la collection de contacts.",
      },
      {
        titre: "Ouvre sur le lieu ou le programme",
        texte: "L'événement lui-même est ton meilleur prétexte : une intervention, un stand, ce qui t'a amené ici. Simple et sans risque.",
      },
      {
        titre: "Intéresse-toi avant de te vendre",
        texte: "Demande à l'autre ce qu'il fait, ce qui l'amène. Les gens se souviennent de ceux qui les ont écoutés, pas de ceux qui ont pitché.",
      },
      {
        titre: "Garde le lien concrètement",
        texte: "Termine par une raison précise de rester en contact : partager un article, une intro, LinkedIn. Un suivi le lendemain fait toute la différence.",
      },
    ],
    phrasesCles: [
      "Tu es venu pour quelle partie du programme, toi ? Moi c'est surtout [sujet] qui m'a attiré.",
      "Et concrètement, tu fais quoi dans ton quotidien ? Ça a l'air passionnant.",
      "On reste en contact ? Je t'envoie l'article dont je te parlais, et on se recroise avec plaisir.",
    ],
    aEviter: [
      "Dégainer ton pitch commercial dans les dix premières secondes.",
      "Scanner la salle par-dessus l'épaule de ton interlocuteur en cherchant mieux.",
    ],
  },
  {
    id: "appel-vocal",
    titre: "Le coup de fil ou le vocal à laisser",
    emoji: "📞",
    tint: "bg-emerald-100 text-emerald-600",
    quand: "Tu dois appeler quelqu'un ou laisser un message vocal, et rien que d'y penser ça te crispe.",
    plan: [
      {
        titre: "Note ton fil en trois points",
        texte: "Avant d'appeler, écris pourquoi tu appelles, ce que tu veux dire, ta question finale. Trois mots-clés suffisent à te rassurer.",
      },
      {
        titre: "Annonce-toi et cadre vite",
        texte: "Dis qui tu es et l'objet de l'appel dès les premières secondes. La personne sait à quoi s'attendre, tout le monde est détendu.",
      },
      {
        titre: "Pour un vocal, reste court et clair",
        texte: "Prénom, raison de l'appel, ce que tu attends, et laisse un rappel de ton numéro si besoin. 20 secondes bien dites valent mieux qu'une minute qui tourne en rond.",
      },
      {
        titre: "Termine sur une porte ouverte",
        texte: "Propose un créneau ou dis quand tu es joignable. Ça évite les allers-retours et montre que tu gères.",
      },
    ],
    phrasesCles: [
      "Salut [prénom], c'est [toi]. Je t'appelle pour [raison], tu as deux minutes ?",
      "Je te laisse un petit vocal — rien d'urgent, c'était juste pour [raison]. Rappelle-moi quand tu peux.",
      "Je suis joignable après 18h ce soir, sinon dis-moi ce qui t'arrange et je m'adapte.",
    ],
    aEviter: [
      "Répéter mot à mot un script au point de sonner robotique.",
      "Le vocal fleuve qui hésite : mieux vaut raccrocher et recommencer clair.",
    ],
  },
  {
    id: "silence-genant",
    titre: "Gérer un long silence gênant",
    emoji: "😶",
    tint: "bg-indigo-100 text-indigo-600",
    quand: "La conversation retombe, un blanc s'installe, et la panique de « il faut dire quelque chose » monte.",
    plan: [
      {
        titre: "Respire, le silence n'est pas une alarme",
        texte: "Deux à trois secondes de calme sont normales. Souvent, si tu ne combles pas, l'autre relance de lui-même avec quelque chose d'intéressant.",
      },
      {
        titre: "Reviens au contexte partagé",
        texte: "Le décor, le lieu, ce qui vous a réunis : c'est toujours disponible pour relancer sans forcer. « Au fait… » suivi d'un détail autour de vous.",
      },
      {
        titre: "Relance sur un fil déjà ouvert",
        texte: "Reprends un sujet évoqué plus tôt : « tu m'as dit tout à l'heure que… ». Ça montre que tu écoutais et ça relance en douceur.",
      },
      {
        titre: "Nomme-le si besoin, avec le sourire",
        texte: "Un « petit blanc, ça arrive » léger dédramatise tout. Assumer le silence le désamorce mieux que de le fuir.",
      },
    ],
    phrasesCles: [
      "Bon, petit blanc — c'est le moment où on cherche tous les deux quoi dire, non ?",
      "Au fait, tu m'as dit tout à l'heure que [sujet], raconte-moi la suite.",
      "Tiens, ça me fait penser — tu as vu [détail autour de vous] ?",
    ],
    aEviter: [
      "Combler chaque silence par du remplissage anxieux et décousu.",
      "Prendre le blanc comme une preuve que « ça ne l'intéresse pas » : c'est juste une pause.",
    ],
  },
];

export const SCENARIO_BY_ID = Object.fromEntries(SCENARIOS.map((s) => [s.id, s]));
