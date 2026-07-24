// Données du module "Cartes d'entraînement — et si elle répond ça ?"
// Pur data, aucune dépendance. On transforme le guide de conversation en drills.
//
// Méthode (paliers) :
//   P0 ouvrir · P1 cadrer · P2 colorer · P3 approfondir · + Sortir
// Règle d'or : on ne monte pas d'un palier tant que l'autre n'a pas "payé"
// (elle te renvoie une question, elle ajoute une info non demandée).
// Une réponse courte = elle n'a pas payé. On lit les signaux.

export const NIVEAUX = [
  {
    key: "ouvrir",
    label: "Ouvrir",
    hint: "P0 — Briser la glace avec une observation partagée, à faible enjeu. Pas de question intime, juste une porte ouverte.",
  },
  {
    key: "cadrer",
    label: "Cadrer",
    hint: "P1 — Trouver un fil commun et le tirer doucement. Une question simple, ouverte, sur le contexte.",
  },
  {
    key: "colorer",
    label: "Colorer",
    hint: "P2 — Amener du goût et des opinions. On assume un avis, on accepte un léger désaccord, ça donne du relief.",
  },
  {
    key: "approfondir",
    label: "Approfondir",
    hint: "P3 — Vulnérabilité réciproque. Tu t'exposes un peu d'abord, puis tu laisses de la place. Donne avant de demander.",
  },
  {
    key: "sortir",
    label: "Sortir",
    hint: "Partir au bon moment. Clore sur une bonne note, demander un contact sans forcer, ou s'éclipser proprement.",
  },
];

export const DRILLS = [
  // ───────────────────────── OUVRIR (P0) ─────────────────────────
  {
    id: "ouvrir-file-cafe",
    niveau: "ouvrir",
    contexte: "Dans la file d'un café, la personne devant toi souffle en regardant l'heure.",
    toiDis: "Je crois que cette file teste notre patience plus que notre café.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah carrément, je me disais pareil ! J'ai un rendez-vous dans dix minutes en plus.",
        move: "Elle a payé : elle rebondit et ajoute une info. Enchaîne léger sur ce qu'elle vient de te donner : « Un rendez-vous stressant ou plutôt sympa ? » Tu passes tranquillement en P1.",
      },
      {
        ton: "neutre",
        elle: "Ouais, un peu.",
        move: "Réponse courte, elle n'a pas payé. Tente une dernière relance basse comme « Vous venez souvent ici ? », puis lis : si elle reste sèche, tu laisses filer sans insister.",
      },
      {
        ton: "froid",
        elle: "Elle hausse les épaules et se retourne vers son téléphone.",
        move: "Message reçu, aucun souci. Souris, garde une posture ouverte et détends-toi. Tu as tenté avec justesse : c'est déjà une réussite. Commande ton café et passe à autre chose.",
      },
    ],
    cle: "Ouvrir, c'est offrir une porte, pas forcer une conversation.",
  },
  {
    id: "ouvrir-salle-sport",
    niveau: "ouvrir",
    contexte: "À la salle de sport, quelqu'un attend comme toi qu'une machine se libère.",
    toiDis: "On dirait qu'on convoite la même machine, je te la laisse si tu me dis qu'elle en vaut la peine.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Franchement c'est ma préférée, mais vas-y, je fais le dos aujourd'hui de toute façon.",
        move: "Elle ouvre et donne du contexte. Reste sur le fil sport : « Tu es plutôt régulier ici ? » Léger, sans coller, tu construis un vrai P1.",
      },
      {
        ton: "neutre",
        elle: "Vas-y, moi j'ai fini.",
        move: "Poli mais fermé. Remercie simplement d'un « Merci, bon entraînement ». Pas de relance forcée : le respect du non fait de toi quelqu'un de safe.",
      },
      {
        ton: "froid",
        elle: "Elle met ses écouteurs sans répondre.",
        move: "Écouteurs = bulle assumée, elle a le droit. Souris, prends la machine et concentre-toi sur ta séance. Aucun malaise : tu as été correct, point final.",
      },
    ],
    cle: "Un non tranquille vaut mieux qu'un oui arraché.",
  },
  {
    id: "ouvrir-transport-retard",
    niveau: "ouvrir",
    contexte: "Sur le quai, le panneau affiche un retard et les gens autour soupirent.",
    toiDis: "À ce rythme on va finir par se connaître tous les habitués du quai.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Haha c'est clair, je commence à reconnaître les têtes ! Toi tu le prends tous les jours ?",
        move: "Elle te renvoie une question : c'est le signal parfait. Réponds franchement et retourne-lui la balle. Le fil est lancé, tu peux cadrer.",
      },
      {
        ton: "neutre",
        elle: "Oui c'est souvent comme ça.",
        move: "Elle répond sans relancer. Une relance douce max : « Tu vas loin ? » Si ça reste plat, tu souris et tu retournes à ta musique, sans forcer.",
      },
      {
        ton: "froid",
        elle: "Un petit sourire poli, puis elle s'éloigne de quelques pas.",
        move: "Elle a créé de la distance : respecte-la immédiatement. Ne suis pas, ne relance pas. Un hochement de tête et tu attends ton train tranquillement. Tenter proprement, c'est déjà gagné.",
      },
    ],
    cle: "Nommer la situation partagée suffit à ouvrir sans intrusion.",
  },

  // ───────────────────────── CADRER (P1) ─────────────────────────
  {
    id: "cadrer-collegue-pause",
    niveau: "cadrer",
    contexte: "À la machine à café du boulot, un collègue d'un autre service attend son gobelet.",
    toiDis: "Je crois qu'on ne s'est jamais vraiment croisés, tu es dans quelle équipe ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Je suis à la compta, arrivé il y a deux mois. Et toi, tu fais quoi exactement ?",
        move: "Elle répond et te relance : elle a payé. Réponds simplement puis tire le fil « nouveau » : « Deux mois, tu commences à trouver tes marques ? » Tu tiens ton cadre.",
      },
      {
        ton: "neutre",
        elle: "La compta.",
        move: "Info donnée mais sans ouverture. Une relance ouverte : « Ça tourne bien en ce moment de votre côté ? » Si elle reste monosyllabique, clôture chaleureusement et retourne bosser.",
      },
      {
        ton: "froid",
        elle: "Elle attrape son café : « Faut que j'y retourne », et repart.",
        move: "Elle est pressée ou pas dispo, ce n'est pas contre toi. « Pas de souci, à une prochaine ! » et tu la laisses. Tu la recroiseras : rien n'est cassé.",
      },
    ],
    cle: "Cadrer, c'est poser une question ouverte et écouter le fil qu'elle tend.",
  },
  {
    id: "cadrer-soiree-cuisine",
    niveau: "cadrer",
    contexte: "À une soirée chez des amis communs, vous vous retrouvez tous les deux dans la cuisine.",
    toiDis: "Tu connais les hôtes comment, toi ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Julie et moi on a fait nos études ensemble ! Et toi, c'est quoi ton lien avec la bande ?",
        move: "Elle raconte et te renvoie la question : parfait. Réponds avec une petite anecdote, ça crée du commun. Le fil « comment on connaît tout le monde » peut durer, profite-en.",
      },
      {
        ton: "neutre",
        elle: "Par le boulot.",
        move: "Réponse courte, elle n'a pas encore payé. Relance ouverte : « Ah, vous bossez dans quoi ? » Une seule tentative, puis tu lis : si ça reste fermé, tu élargis vers le groupe.",
      },
      {
        ton: "froid",
        elle: "« Bref », et elle se ressert un verre en regardant ailleurs.",
        move: "Elle n'a pas envie de parler, c'est OK en soirée. Souris, dis « Bonne soirée à toi » et rejoins un autre groupe. Tu gardes ton énergie pour qui a envie.",
      },
    ],
    cle: "Le bon fil, c'est souvent le contexte que vous partagez déjà.",
  },
  {
    id: "cadrer-libraire",
    niveau: "cadrer",
    contexte: "En librairie, quelqu'un hésite longuement devant le même rayon que toi.",
    toiDis: "Tu cherches quelque chose de précis ou tu te laisses porter ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Je cherche un roman pas trop déprimant pour les vacances, des idées ?",
        move: "Elle te demande conseil : elle a payé et t'ouvre une porte. Propose sincèrement un titre et demande ce qu'elle a aimé récemment. Vous êtes lancés.",
      },
      {
        ton: "neutre",
        elle: "Je regarde, comme ça.",
        move: "Elle reste vague. Une relance légère : « Il y a des auteurs que tu suis ? » Si elle ne s'ouvre pas, un « Bonne trouvaille ! » et tu la laisses fouiner en paix.",
      },
      {
        ton: "froid",
        elle: "« Ça va merci », en s'écartant vers un autre rayon.",
        move: "Elle veut son moment tranquille. Respecte-le sans arrière-pensée : petit sourire, tu retournes à tes livres. Tu as été aidant et discret, c'est exactement le bon dosage.",
      },
    ],
    cle: "Une question ouverte laisse à l'autre le choix d'en dire plus ou pas.",
  },

  // ───────────────────────── COLORER (P2) ─────────────────────────
  {
    id: "colorer-serie-collegue",
    niveau: "colorer",
    contexte: "Un collègue avec qui tu discutes déjà lance que tout le monde regarde la même série du moment.",
    toiDis: "Honnêtement, je l'ai trouvée super lente au début, j'ai failli lâcher au troisième épisode.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah non mais grave, moi aussi ! C'est le personnage secondaire qui m'a fait rester en fait.",
        move: "Vous partagez un avis nuancé, l'échange prend du relief. Rebondis sur son personnage préféré et assume le tien. Le désaccord léger, c'est le sel : cultive-le.",
      },
      {
        ton: "neutre",
        elle: "Ah, moi j'ai bien aimé.",
        move: "Elle donne un avis mais court. Creuse sans imposer : « Ah, qu'est-ce qui t'a accroché ? » Tu l'invites à colorer à son tour plutôt que de défendre ton camp.",
      },
      {
        ton: "froid",
        elle: "« Chacun ses goûts », sur un ton qui ferme la porte.",
        move: "Le sujet ne prend pas, inutile d'insister. Souris, « c'est clair, heureusement qu'on n'aime pas tous pareil », et change de sujet ou clôture. Pas de bataille d'avis.",
      },
    ],
    cle: "Assumer un goût, même à contre-courant, rend la conversation vivante.",
  },
  {
    id: "colorer-cafe-terrasse",
    niveau: "colorer",
    contexte: "En terrasse, la personne à côté de toi commande un café allongé bien serré.",
    toiDis: "J'ai une théorie : on peut deviner quelqu'un à sa façon de commander son café. Toi tu m'as l'air de quelqu'un qui ne perd pas de temps.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Haha pas faux ! Et toi alors, tu commandes quoi, monsieur le profileur ?",
        move: "Elle joue le jeu et te relance avec humour. Réponds en assumant ton style, garde le ton taquin mais bienveillant. Tu peux embrayer sur les petites manies du quotidien.",
      },
      {
        ton: "neutre",
        elle: "Mouais, ou alors j'aime juste le café serré.",
        move: "Elle recadre gentiment, c'est de bonne guerre. Rebondis avec autodérision : « Touché, ma théorie a des failles. » Un dernier trait léger, puis tu lis si elle a envie de continuer.",
      },
      {
        ton: "froid",
        elle: "Un regard bref, sans sourire, et elle se replonge dans son journal.",
        move: "Ta vanne n'a pas fait mouche, aucun drame. « Bonne journée à vous » et tu reviens à ton propre café. Pas de justification, pas de deuxième tentative : tu restes léger.",
      },
    ],
    cle: "Colorer, c'est oser une opinion joueuse — et savoir la lâcher si ça ne prend pas.",
  },
  {
    id: "colorer-concert-file",
    niveau: "colorer",
    contexte: "Dans la file d'un concert, la personne devant toi porte le t-shirt d'un groupe que tu adores autant que tu débats.",
    toiDis: "Beau t-shirt, mais je vais être honnête : je trouve que leur premier album reste indétrônable, tout le reste me déçoit un peu.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Oh là, propos dangereux ! Moi je défends le troisième album à mort, viens on en parle.",
        move: "Elle mord au débat avec le sourire : jackpot. Défends ton avis avec passion mais écoute le sien, c'est le jeu. Un désaccord partagé crée un lien fort.",
      },
      {
        ton: "neutre",
        elle: "Ah oui, le premier est bien.",
        move: "Elle acquiesce sans se mouiller. Relance pour la faire sortir : « Tu les as déjà vus en live ? » Tu ramènes du concret partagé plutôt que de rester sur ton opinion.",
      },
      {
        ton: "froid",
        elle: "« Si tu le dis », en se retournant vers l'avant.",
        move: "Elle n'a pas envie de débattre, respecte-le. Un « Bon concert à toi ! » sincère et tu profites de l'ambiance. Tu as tenté un vrai échange, c'est déjà bien.",
      },
    ],
    cle: "Un désaccord assumé mais respectueux crée plus de complicité qu'un accord mou.",
  },

  // ─────────────────────── APPROFONDIR (P3) ───────────────────────
  {
    id: "approfondir-reconversion",
    niveau: "approfondir",
    contexte: "La conversation avec cette connaissance de soirée dure déjà, l'échange est bon et sincère.",
    toiDis: "Je vais être honnête, j'ai changé de métier l'an dernier et il m'a fallu du temps pour oser. Ça faisait longtemps que je n'avais pas pris un vrai risque.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ça me parle tellement, j'hésite à me lancer aussi et j'ai peur de me planter.",
        move: "Tu as donné, elle donne à son tour : c'est de la vraie réciprocité. Accueille sans juger, partage une difficulté concrète que tu as traversée. Reste à sa hauteur, ne joue pas au coach.",
      },
      {
        ton: "neutre",
        elle: "Ah oui, c'est courageux.",
        move: "Elle reconnaît sans se livrer. N'aspire pas l'intimité de force : reviens un cran plus léger avec une question ouverte « Et toi, tu te verrais faire quoi si tout était possible ? » Laisse-lui le choix de descendre ou pas.",
      },
      {
        ton: "froid",
        elle: "« Ah ok. » Elle regarde son verre, visiblement pas à l'aise avec le registre.",
        move: "Tu es allé un cran trop loin pour elle, ça arrive. Remonte d'un palier sans malaise : « Bref, désolé de partir dans mes réflexions ! » et reprends un sujet léger. Tu t'es exposé avec courage, c'est une réussite en soi.",
      },
    ],
    cle: "Approfondir, c'est te livrer un peu d'abord — puis laisser de la place, sans réclamer.",
  },
  {
    id: "approfondir-solitude-ville",
    niveau: "approfondir",
    contexte: "Un nouveau voisin sympa avec qui tu discutes régulièrement dans le hall te dit qu'il vient d'arriver en ville.",
    toiDis: "Je te comprends, quand je suis arrivé ici je ne connaissais personne et les six premiers mois ont été franchement solitaires. J'ai mis du temps à trouver mes repères.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ça fait du bien de l'entendre, je pensais être le seul à galérer comme ça.",
        move: "Ton aveu l'a autorisé à baisser la garde. Valide son ressenti et propose du concret : un café, un groupe, un lieu qui t'a aidé. Le lien se construit là, dans le vrai.",
      },
      {
        ton: "neutre",
        elle: "Oui, faut le temps de s'installer.",
        move: "Elle reste en surface, c'est son rythme. N'insiste pas sur l'émotion : passe au pratique « Si tu cherches de bons plans dans le quartier, demande-moi. » Tu ouvres une porte sans forcer l'intimité.",
      },
      {
        ton: "froid",
        elle: "« Ça va aller, merci », un peu distant, en pressant le pas vers l'ascenseur.",
        move: "Il n'est pas prêt à ce niveau de partage, respecte-le totalement. « Bien sûr, à bientôt voisin ! » et tu le laisses. La porte reste ouverte pour plus tard, sans pression.",
      },
    ],
    cle: "Donne avant de demander : ta vulnérabilité rend la sienne possible, jamais obligatoire.",
  },
  {
    id: "approfondir-passion-vraie",
    niveau: "approfondir",
    contexte: "Avec cette personne rencontrée à un atelier, l'échange est déjà chaleureux et vous parlez de ce qui vous anime.",
    toiDis: "Pour être honnête, je fais ça surtout parce que ça m'aide à sortir de ma tête, j'ai tendance à trop ruminer et ici je me sens juste présent.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Waouh, je ressens exactement la même chose, c'est mon moment à moi de la semaine.",
        move: "Vous touchez au vrai, savoure-le. Ne rembraie pas trop vite : laisse un silence, puis « C'est précieux ce genre de bulle, non ? » Vous êtes dans le rare, reste-y avec elle.",
      },
      {
        ton: "neutre",
        elle: "Ah oui je vois, c'est relaxant.",
        move: "Elle traduit ton émotion en quelque chose de plus neutre : c'est son confort. Ne force pas, souris et reste chaleureux « Exactement. » Tu peux revenir un cran plus léger sur l'atelier lui-même.",
      },
      {
        ton: "froid",
        elle: "Elle acquiesce poliment et se tourne vers son matériel.",
        move: "Le registre intime ne lui convient pas là, aucun souci. Reviens au concret « En tout cas tu t'en sors super bien sur cet exercice » et allège. Tu t'es montré vrai, c'est courageux et ça compte.",
      },
    ],
    cle: "Le vrai lien naît quand tu montres l'envers du décor, pas ta vitrine.",
  },

  // ───────────────────────── SORTIR ─────────────────────────
  {
    id: "sortir-contact-cafe",
    niveau: "sortir",
    contexte: "Après un super échange spontané au comptoir d'un café, tu sens qu'il est temps d'y aller.",
    toiDis: "Écoute, je dois filer mais j'ai vraiment passé un bon moment. Ça me dirait de continuer la discussion une prochaine fois, on échange nos numéros ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Avec plaisir ! Tiens, je te donne le mien, envoie-moi un message.",
        move: "C'est un oui franc : reste simple et posé. Enregistre, envoie un petit texto tout de suite pour qu'elle ait le tien, souris et pars sur cette bonne note. Pas besoin d'en rajouter.",
      },
      {
        ton: "neutre",
        elle: "Euh… je suis pas trop numéro, mais on se recroisera sûrement ici.",
        move: "C'est un non doux, accueille-le avec grâce : « Ça marche, à la prochaine alors ! » Souris sincèrement et pars léger. Insister gâcherait le bon moment que vous avez eu.",
      },
      {
        ton: "froid",
        elle: "« Ah, non merci », un peu gênée, en se refermant.",
        move: "Un non clair, tu l'entends du premier coup. « Pas de souci, bonne continuation à toi ! » chaleureux et tu t'en vas sans traîner. Avoir demandé simplement et accepté le non : c'est ça, être quelqu'un de safe.",
      },
    ],
    cle: "Demander un contact franchement puis accepter le non sans broncher, c'est ça la classe.",
  },
  {
    id: "sortir-neutre-soiree",
    niveau: "sortir",
    contexte: "En soirée, la conversation a été agréable mais elle retombe, les silences s'allongent.",
    toiDis: "Bon, je vais aller saluer deux-trois personnes, mais c'était chouette de discuter avec toi.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah oui carrément, on se recroise plus tard dans la soirée ?",
        move: "Elle prolonge la porte, note-le sans t'accrocher. « Avec plaisir ! » et tu circules. Tu reviendras plus tard avec une énergie fraîche : partir à temps rend le retour facile.",
      },
      {
        ton: "neutre",
        elle: "Oui, bonne soirée à toi.",
        move: "Sortie propre et mutuelle, exactement le but. Souris, hoche la tête et va vraiment voir d'autres gens. Tu as clos au bon moment, avant que ça ne s'essouffle : parfait.",
      },
      {
        ton: "froid",
        elle: "« Ouais », déjà tournée vers son téléphone.",
        move: "Elle avait décroché, tu pars pile au bon moment. Aucun ressenti négatif : tu t'éclipses tranquillement. Savoir partir avant le malaise est une compétence, tu viens de l'exercer.",
      },
    ],
    cle: "Partir pendant que c'est encore bon vaut mieux que s'accrocher jusqu'au malaise.",
  },
  {
    id: "sortir-revoir-activite",
    niveau: "sortir",
    contexte: "Fin d'un cours de sport où tu discutes régulièrement avec la même personne, l'ambiance est bonne.",
    toiDis: "Au fait, quelques-uns vont boire un verre après le cours vendredi, ça te dirait de venir ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah tiens oui, pourquoi pas ! Envoie-moi les infos, je devrais pouvoir.",
        move: "Elle est partante : facilite juste la logistique. « Super, je te note le lieu et l'heure. » Reste simple et décontracté, tu as créé une occasion de se revoir dans un cadre naturel.",
      },
      {
        ton: "neutre",
        elle: "Je sais pas trop, je verrai selon ma semaine.",
        move: "Un peut-être poli, ne mets pas la pression. « Pas de souci, l'invit tient si jamais. » Tu laisses la porte ouverte sans relancer trois fois. La balle est dans son camp, sereinement.",
      },
      {
        ton: "froid",
        elle: "« Ah non, moi je viens juste pour le sport », un peu sur la réserve.",
        move: "Elle pose un cadre clair, respecte-le pleinement. « Ça marche, à mercredi prochain alors ! » et tu continues à être cordial au cours, sans gêne. Tu as proposé gentiment : rien à regretter.",
      },
    ],
    cle: "Proposer de se revoir dans un cadre existant est doux : l'autre peut dire non sans tout casser.",
  },

  // ─────────────────── OUVRIR (P0) — série 2 ───────────────────
  {
    id: "ouvrir-marche-cageots",
    niveau: "ouvrir",
    contexte: "Sur le marché, la personne à côté de toi soupèse les mêmes tomates que toi.",
    toiDis: "Je sais jamais comment on est censés les choisir, celles-là, j'ai l'impression de faire semblant de m'y connaître.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Haha moi pareil ! On m'a dit qu'il fallait sentir le pédoncule, mais franchement je fais au pif.",
        move: "Elle rebondit et t'apprend un truc : elle a payé. Enchaîne léger « Tu cuisines quoi avec, du coup ? » Tu tiens un fil concret et tu passes tranquillement en P1.",
      },
      {
        ton: "neutre",
        elle: "Faut qu'elles soient bien rouges, je crois.",
        move: "Elle répond mais sans t'ouvrir. Une relance basse : « Tu viens souvent ici le samedi ? » Si ça reste sec, tu souris, tu remplis ton panier et tu laisses filer.",
      },
      {
        ton: "froid",
        elle: "Elle prend son sachet et passe au stand suivant sans un mot.",
        move: "Message clair, aucun souci. Souris intérieurement, choisis tes tomates et continue tes courses. Tu as tenté avec justesse : c'est déjà une réussite.",
      },
    ],
    cle: "Ouvrir, c'est offrir une porte, pas forcer une conversation.",
  },
  {
    id: "ouvrir-laverie-machine",
    niveau: "ouvrir",
    contexte: "À la laverie, tu tournes en rond en attendant ton cycle, quelqu'un fait pareil.",
    toiDis: "Je crois que le pire, c'est ces quarante minutes où on ne sait pas trop quoi faire de soi.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah carrément ! Moi j'ai fini par ramener un bouquin, sinon je fixe le hublot comme un poisson.",
        move: "Elle ouvre et te donne une image drôle : parfait. Rebondis « Et ça marche, le bouquin, ou tu fixes le hublot quand même ? » Léger et joueur, tu peux cadrer.",
      },
      {
        ton: "neutre",
        elle: "Ouais, c'est un peu long.",
        move: "Réponse courte, elle n'a pas payé. Tente une dernière relance douce « Tu habites le quartier ? », puis lis : si elle reste brève, tu retournes à ton téléphone sans insister.",
      },
      {
        ton: "froid",
        elle: "Un petit hochement, puis elle met ses écouteurs.",
        move: "Écouteurs = bulle assumée, elle a le droit. Souris, sors ton propre truc pour patienter et détends-toi. Tu as été correct, c'est tout ce qui compte.",
      },
    ],
    cle: "Nommer un moment d'attente partagé suffit à ouvrir sans intrusion.",
  },

  // ─────────────────── CADRER (P1) — série 2 ───────────────────
  {
    id: "cadrer-salle-attente",
    niveau: "cadrer",
    contexte: "Dans une salle d'attente médicale, la personne en face pose son magazine en soufflant.",
    toiDis: "Ils ont l'air d'avoir du retard aujourd'hui, tu attends depuis longtemps ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Une bonne demi-heure ! Mais bon, ce médecin vaut le coup d'attendre. Tu viens pour la première fois ?",
        move: "Elle répond et te relance : elle a payé. Réponds simplement puis tire le fil « ce médecin vaut le coup » : « Ah, on me l'a recommandé, il est si bien que ça ? » Ton cadre tient.",
      },
      {
        ton: "neutre",
        elle: "Vingt minutes.",
        move: "Info donnée, sans ouverture. Une relance ouverte : « C'est toujours comme ça ici ? » Si elle reste monosyllabique, souris et reprends ton attente, sans forcer.",
      },
      {
        ton: "froid",
        elle: "Elle reprend son magazine sans répondre vraiment.",
        move: "Pas dispo pour discuter, ce n'est pas contre toi — un cabinet médical, ça stresse. Petit sourire, tu la laisses tranquille. Tu as tenté poliment : rien à regretter.",
      },
    ],
    cle: "Cadrer, c'est poser une question ouverte et écouter le fil qu'elle tend.",
  },
  {
    id: "cadrer-covoiturage",
    niveau: "cadrer",
    contexte: "En covoiturage, tu es à l'arrière à côté d'un autre passager, la route est longue.",
    toiDis: "Tu descends où toi, c'est le trajet complet ou tu t'arrêtes en chemin ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Je vais jusqu'au bout, je rentre voir ma famille pour le week-end. Et toi, c'est boulot ou perso ?",
        move: "Elle raconte et te renvoie la question : nickel. Réponds avec une petite touche perso, ça crée du commun. Le trajet est long, le fil « ce qui nous amène là » peut durer.",
      },
      {
        ton: "neutre",
        elle: "Jusqu'à la fin.",
        move: "Réponse brève, elle n'a pas encore payé. Relance ouverte : « Tu fais souvent ce trajet ? » Une seule tentative, puis lis : si ça reste fermé, laisse le silence exister, c'est OK en voiture.",
      },
      {
        ton: "froid",
        elle: "« Terminus », et elle remet ses écouteurs en regardant par la fenêtre.",
        move: "Elle veut faire la route dans sa bulle, respecte-le totalement. Un hochement, et tu profites du paysage ou de ta musique. Deux heures de silence cordial, ça n'a rien de gênant.",
      },
    ],
    cle: "Le bon fil, c'est souvent le contexte que vous partagez déjà.",
  },

  // ─────────────────── COLORER (P2) — série 2 ───────────────────
  {
    id: "colorer-musee-tableau",
    niveau: "colorer",
    contexte: "Au musée, tu discutes déjà un peu avec cette personne devant une toile que tout le monde encense.",
    toiDis: "Je vais être honnête, celle-là me laisse complètement froid, alors que la petite d'à côté que personne ne regarde, elle me touche vraiment.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah, intéressant ! Moi c'est l'inverse, mais viens, montre-moi ce que tu vois dans la petite.",
        move: "Elle mord au débat avec curiosité : jackpot. Explique sincèrement ce qui te touche et demande-lui ce qu'elle voit dans la grande. Le désaccord de goût, c'est le sel : cultive-le.",
      },
      {
        ton: "neutre",
        elle: "Ah oui, elle est jolie la petite aussi.",
        move: "Elle acquiesce sans se mouiller. Creuse sans imposer : « Tu es plutôt classique ou moderne, toi, dans ce que tu aimes ? » Tu l'invites à colorer à son tour plutôt qu'à te suivre.",
      },
      {
        ton: "froid",
        elle: "« C'est un chef-d'œuvre quand même », sur un ton qui clôt le sujet.",
        move: "Le débat ne prend pas, inutile d'insister. Souris « C'est vrai que les goûts, heureusement que ça se discute pas vraiment » et passe à une autre salle. Pas de bataille d'avis.",
      },
    ],
    cle: "Assumer un goût, même à contre-courant, rend la conversation vivante.",
  },
  {
    id: "colorer-boulangerie-pain",
    niveau: "colorer",
    contexte: "À la boulangerie, la personne devant toi hésite entre la baguette classique et la tradition.",
    toiDis: "J'ai un avis très tranché là-dessus : la tradition bien cuite, presque brûlée, sinon ça ne vaut pas le coup. Je crois que je suis un extrémiste de la croûte.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Haha un extrémiste de la croûte, j'adore ! Moi je suis team mie moelleuse, on est incompatibles.",
        move: "Elle joue le jeu et assume l'inverse : parfait. Rebondis avec le sourire « Team mie, c'est presque une trahison, mais je te pardonne. » Garde le ton taquin et bienveillant, tu peux embrayer.",
      },
      {
        ton: "neutre",
        elle: "Ah oui, bien cuite c'est meilleur.",
        move: "Elle est d'accord mais courte. Relance pour la faire sortir : « Tu la prends plutôt pour quoi, un truc précis ou juste comme ça ? » Tu ramènes du concret partagé plutôt que de rester sur ton avis.",
      },
      {
        ton: "froid",
        elle: "Un sourire poli, puis elle passe sa commande sans relever.",
        move: "Ta petite vanne n'a pas fait mouche, aucun drame. « Bonne journée à vous » et tu commandes à ton tour. Pas de justification, pas de seconde tentative : tu restes léger.",
      },
    ],
    cle: "Colorer, c'est oser une opinion joueuse — et savoir la lâcher si ça ne prend pas.",
  },

  // ────────────────── APPROFONDIR (P3) — série 2 ──────────────────
  {
    id: "approfondir-cours-soir",
    niveau: "approfondir",
    contexte: "À la pause d'un cours du soir que vous suivez tous les deux, l'échange est déjà sincère.",
    toiDis: "Pour être honnête, je me suis inscrit ici parce que mes soirées étaient devenues vides et un peu tristes. J'avais besoin d'un truc à moi, un rendez-vous dans la semaine.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ça me parle tellement, c'est exactement pour ça que je suis là aussi, je tournais en rond chez moi.",
        move: "Tu as donné, elle donne à son tour : vraie réciprocité. Accueille sans juger, partage une petite chose concrète que ça t'a déjà apportée. Reste à sa hauteur, pas de leçon.",
      },
      {
        ton: "neutre",
        elle: "Ah oui, c'est bien de se bouger.",
        move: "Elle reconnaît sans se livrer. N'aspire pas l'intimité de force : reviens un cran plus léger « Et toi, tu voulais apprendre ça depuis longtemps ? » Laisse-lui le choix de descendre ou pas.",
      },
      {
        ton: "froid",
        elle: "« Ah. Oui, c'est sympa comme cours. » Elle regarde ses notes, clairement mal à l'aise.",
        move: "Tu es allé un cran trop loin pour elle, ça arrive. Remonte sans malaise « Bref, en tout cas le prof est top ce soir » et reprends léger. Tu t'es exposé avec courage, c'est une réussite en soi.",
      },
    ],
    cle: "Approfondir, c'est te livrer un peu d'abord — puis laisser de la place, sans réclamer.",
  },
  {
    id: "approfondir-aeroport-attente",
    niveau: "approfondir",
    contexte: "En salle d'embarquement, le vol est retardé et tu discutes depuis un moment avec ton voisin de banc.",
    toiDis: "Je t'avoue que je déteste voyager seul, ça me renvoie toujours à quel point je me disperse et oublie de prendre des nouvelles des gens. Ce vol, c'est justement pour rattraper ça.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Je ressens exactement ça, on se laisse happer et un jour on réalise qu'on a lâché tout le monde. Tu vas voir qui ?",
        move: "Ton aveu l'a autorisée à s'ouvrir et elle te relance : savoure. Réponds vrai, puis laisse un peu de place. Vous touchez à quelque chose de réel, reste-y sans meubler.",
      },
      {
        ton: "neutre",
        elle: "Oui, c'est important de garder le contact.",
        move: "Elle traduit ton émotion en quelque chose de plus neutre : c'est son confort. Ne force pas, souris « C'est clair » et reviens un cran plus léger sur sa destination.",
      },
      {
        ton: "froid",
        elle: "« Mmh. » Elle regarde le panneau d'affichage, visiblement pas dans ce registre.",
        move: "Le partage intime ne lui convient pas là, aucun souci. Reviens au concret « En espérant qu'ils annoncent l'embarquement bientôt » et allège. Tu t'es montré vrai, c'est courageux et ça compte.",
      },
    ],
    cle: "Donne avant de demander : ta vulnérabilité rend la sienne possible, jamais obligatoire.",
  },

  // ─────────────────── SORTIR — série 2 ───────────────────
  {
    id: "sortir-contact-voisinage",
    niveau: "sortir",
    contexte: "Après une vraie bonne discussion dans le hall avec ce voisin que tu croises depuis des mois, tu dois monter.",
    toiDis: "Bon, je te laisse, mais c'était chouette de vraiment discuter pour une fois. Un de ces quatre ça me dirait de prendre un café, on échange nos numéros ?",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah oui, avec plaisir, c'est bête qu'on se soit jamais parlé avant ! Tiens, voilà mon numéro.",
        move: "Un oui franc : reste simple et posé. Enregistre, envoie-lui un petit texto tout de suite pour qu'elle ait le tien, souris et monte sur cette bonne note. Pas besoin d'en rajouter.",
      },
      {
        ton: "neutre",
        elle: "Écoute, on se croise tout le temps de toute façon, on aura l'occasion !",
        move: "Un non doux déguisé en « plus tard », accueille-le avec grâce : « C'est vrai, à très vite alors ! » Souris sincèrement et monte léger. Vous restez de bons voisins, c'est déjà précieux.",
      },
      {
        ton: "froid",
        elle: "« Ah, je préfère qu'on en reste aux bonjours, sans façon », un peu gênée.",
        move: "Un non clair, tu l'entends du premier coup. « Bien sûr, pas de souci, bonne soirée voisine ! » chaleureux et tu montes sans traîner. Avoir demandé simplement et accepté le non : c'est ça, être quelqu'un de safe.",
      },
    ],
    cle: "Demander un contact franchement puis accepter le non sans broncher, c'est ça la classe.",
  },
  {
    id: "sortir-neutre-musee",
    niveau: "sortir",
    contexte: "Fin de visite au musée, vous avez papoté de salle en salle mais vos chemins se séparent à la sortie.",
    toiDis: "Bon, moi je vais filer par là, mais franchement c'était un vrai plaisir de visiter à deux, ça change tout.",
    reactions: [
      {
        ton: "chaleureux",
        elle: "Ah oui carrément, ça rend la visite tellement mieux ! Tu fais souvent les expos ?",
        move: "Elle prolonge la porte : si tu le sens, embraie sur un contact « Justement, il y en a une autre bientôt, ça te dirait ? » Sinon savoure simplement la fin sur cette bonne note.",
      },
      {
        ton: "neutre",
        elle: "Oui, c'était sympa, bonne fin de journée à toi.",
        move: "Sortie propre et mutuelle, exactement le but. Souris, hoche la tête et pars vraiment de ton côté. Tu as clos au bon moment, sur une note positive : parfait.",
      },
      {
        ton: "froid",
        elle: "« Ouais, voilà. Bonne continuation », déjà tournée vers la sortie.",
        move: "L'échange s'était éteint, tu pars pile au bon moment. Aucun ressenti négatif : tu t'éclipses tranquillement. Savoir clore avant que ça ne traîne est une compétence, tu viens de l'exercer.",
      },
    ],
    cle: "Partir pendant que c'est encore bon vaut mieux que s'accrocher jusqu'au malaise.",
  },
];

export const DRILL_BY_ID = Object.fromEntries(DRILLS.map((d) => [d.id, d]));
export const NIVEAU_BY_KEY = Object.fromEntries(NIVEAUX.map((n) => [n.key, n]));
