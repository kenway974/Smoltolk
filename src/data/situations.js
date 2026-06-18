// Chaque situation applique la pyramide du contexte « Zoom In / Zoom Out » :
//   - zoomIn   : l'observation immédiate, un détail unique sur la personne
//   - contexte : le point commun évident, le lieu et l'instant partagés
//   - zoomOut  : le sujet universel, l'énergie / la temporalité du moment
// Chaque niveau a son accroche + sa relance (réflexe « Rebond + Ouverture »).

export const SITUATIONS_DATA = [
  {
    id: 1,
    environnement: "Boutique de Luxe",
    profil: "Vendeur Senior",
    humeur: "Condescendant",
    energie: "Haute",
    objectif: "Briser la glace",
    theme: "Le standing du lieu",
    zoomIn: {
      accroche: "Votre stylo n'a pas l'air d'être là par hasard — c'est un outil de travail ou une signature personnelle ?",
      relance: "Moi j'écris encore avec ce qui traîne, j'avoue. C'est quoi le premier détail qui vous fait juger quelqu'un qui entre ici ?"
    },
    contexte: {
      accroche: "Impressionnant, l'adresse — l'agencement est pensé au millimètre. Vous gérez la mise en scène ou ça vient d'en haut ?",
      relance: "Je bosse dans un truc où l'ambiance compte aussi et je rame. C'est quoi le détail que personne ne remarque mais qui change tout ?"
    },
    zoomOut: {
      accroche: "Un mardi après-midi, j'imagine que vous croisez une tout autre clientèle qu'un samedi — la vibe doit changer du tout au tout.",
      relance: "Moi les lundis je suis inutilisable avant midi. Y a un jour où vous savez d'avance que ça va être électrique ?"
    }
  },
  {
    id: 2,
    environnement: "Supermarché",
    profil: "Caissière",
    humeur: "Débordée",
    energie: "Basse",
    objectif: "Créer de la sympathie",
    theme: "L'affluence du jour",
    zoomIn: {
      accroche: "Vous gardez le sourire alors que le tapis n'arrête pas — c'est naturel ou c'est de la haute discipline ?",
      relance: "Moi à votre place j'aurais craqué avant la pause. C'est quoi votre astuce pour tenir quand ça défile sans fin ?"
    },
    contexte: {
      accroche: "Belle journée pour battre un record d'articles scannés, hein — c'est toujours la cohue à cette heure ?",
      relance: "Je tombe toujours sur le pire créneau, on dirait. C'est quoi le moment où le magasin respire un peu dans la journée ?"
    },
    zoomOut: {
      accroche: "Vu la tête de tout le monde dans la file, j'ai l'impression qu'on a tous eu une semaine de quarante-huit heures.",
      relance: "Moi je viens clairement chercher du réconfort en chariot. Les gens sont plus tendus en fin de semaine ou c'est un mythe ?"
    }
  },
  {
    id: 3,
    environnement: "Dans la rue",
    profil: "Passant avec chien",
    humeur: "Calme",
    energie: "Haute",
    objectif: "Engager une conversation légère",
    theme: "L'animal",
    zoomIn: {
      accroche: "Il a une démarche qui décide de tout — c'est vous ou lui qui mène la balade ?",
      relance: "J'ai toujours rêvé d'un chien aussi sûr de lui, le mien serait une catastrophe. Il a quel caractère au quotidien ?"
    },
    contexte: {
      accroche: "C'est un bon coin pour promener, le quartier — vous avez vos itinéraires ou vous improvisez ?",
      relance: "Je cherche justement des coins sympas par ici, je viens d'arriver. Y a un endroit que tous les promeneurs de chiens connaissent ?"
    },
    zoomOut: {
      accroche: "Il fait un temps à tout lâcher pour rester dehors — c'est rare une éclaircie pareille en ce moment.",
      relance: "Moi j'en profite, demain c'est annoncé pourri. Vous sortez quoi qu'il arrive ou la météo décide pour vous ?"
    }
  },
  {
    id: 4,
    environnement: "Café / Brasserie",
    profil: "Barista",
    humeur: "Agacé",
    energie: "Fatigué",
    objectif: "Détendre l'atmosphère",
    theme: "La pression du service",
    zoomIn: {
      accroche: "Votre tatouage sur l'avant-bras a l'air d'avoir une histoire — c'est un truc qui veut dire quelque chose ?",
      relance: "Moi j'hésite depuis des années, j'ose pas franchir le pas. Le premier, on le choisit comment sans le regretter ?"
    },
    contexte: {
      accroche: "Je vois que la machine vous obéit mieux que les clients — c'est toujours ce rush à cette heure ?",
      relance: "Je vais pas en rajouter, juste un expresso. C'est quoi le coup de feu que vous redoutez le plus dans la journée ?"
    },
    zoomOut: {
      accroche: "On est jeudi et tout le monde a déjà la tête au week-end — vous le sentez à l'ambiance des commandes ?",
      relance: "Moi je carbure au café pour finir la semaine. Les gens sont plus cool le vendredi ou juste plus pressés ?"
    }
  },
  {
    id: 5,
    environnement: "Immeuble de Bureaux",
    profil: "Agent de Sécurité",
    humeur: "Neutre",
    energie: "Basse",
    objectif: "Humaniser le contact",
    theme: "La routine du poste",
    zoomIn: {
      accroche: "Vous avez une montre qui a l'air de tout faire sauf le café — c'est un choix de geek ou de fonction ?",
      relance: "Moi je suis resté à la montre qui donne juste l'heure, j'assume. Ça sert vraiment au quotidien tous ces gadgets ?"
    },
    contexte: {
      accroche: "Vous avez le badge qui sait tout ce qui se passe ici — vous voyez vraiment défiler toute la vie du bâtiment ?",
      relance: "Moi je fais que passer et je connais déjà personne. Au bout de combien de temps on reconnaît les habitudes de chacun ?"
    },
    zoomOut: {
      accroche: "Un lundi matin comme ça, j'imagine que vous voyez passer une sacrée galerie de têtes pas réveillées.",
      relance: "Moi le lundi je carbure à rien, ça se voit sûrement. C'est le jour le plus mou de la semaine ici aussi ?"
    }
  },
  {
    id: 6,
    environnement: "Marché en plein air",
    profil: "Maraîcher",
    humeur: "Enthousiaste",
    energie: "Haute",
    objectif: "Valoriser le savoir-faire",
    theme: "La saisonnalité",
    zoomIn: {
      accroche: "Vos mains disent que vous touchez vraiment la terre — vous produisez vous-même ou vous revendez ?",
      relance: "Moi je fais crever un cactus en deux semaines, c'est dire. Ça s'apprend ou faut être tombé dedans petit ?"
    },
    contexte: {
      accroche: "Ces tomates ont une tête à avoir poussé sous un vrai soleil — c'est le bon moment pour quoi en ce moment ?",
      relance: "Je repars toujours avec la liste de mes erreurs culinaires d'ici. C'est quoi le produit de la semaine dont vous êtes le plus fier ?"
    },
    zoomOut: {
      accroche: "Y a une énergie sur les marchés le matin qu'on trouve nulle part ailleurs — les gens sont d'humeur, ça change tout.",
      relance: "Moi je viens autant pour l'ambiance que pour les courses. C'est plus vivant le samedi ou vous préférez les jours calmes ?"
    }
  },
  {
    id: 7,
    environnement: "Salle de Sport",
    profil: "Coach sportif",
    humeur: "Motivé",
    energie: "Haute",
    objectif: "Créer une connexion rapide",
    theme: "Le cardio",
    zoomIn: {
      accroche: "Vos chaussures ont l'air taillées pour le squat — c'est quelle marque ? Je galère à trouver une paire stable.",
      relance: "Moi je soulève en baskets de ville, mes chevilles vont lâcher. Ça vaut vraiment l'investissement ou c'est du marketing ?"
    },
    contexte: {
      accroche: "Vous avez le regard de quelqu'un qui a déjà bouclé deux heures avant que j'arrive — vous vous entraînez ici depuis longtemps ?",
      relance: "Je cherche à changer mes horaires, en fin de journée c'est invivable. C'est quoi le créneau où la salle est vraiment vide ?"
    },
    zoomOut: {
      accroche: "Début de semaine, la salle déborde de bonnes résolutions — dans deux semaines y aura plus personne, comme toujours.",
      relance: "Moi j'essaie de tenir cette fois, promis. Vous les voyez venir, ceux qui vont lâcher, rien qu'à l'énergie ?"
    }
  },
  {
    id: 8,
    environnement: "Parking / Livraison",
    profil: "Livreur concurrent",
    humeur: "Pressé",
    energie: "Fatigué",
    objectif: "Solidarité corporatiste",
    theme: "Les galères du métier",
    zoomIn: {
      accroche: "Votre diable a vu du pays, on dirait — vous êtes sur cette tournée depuis longtemps ?",
      relance: "Moi le mien grince à chaque virage, je le maudis dix fois par jour. C'est quoi le matos qui change vraiment la vie sur ce métier ?"
    },
    contexte: {
      accroche: "Troisième étage sans ascenseur, c'est jamais dans la fiche mais toujours dans la journée — vous faites quelle zone aujourd'hui ?",
      relance: "On n'est pas dans la même boîte mais clairement dans la même douleur. C'est quoi le quartier que tout le monde redoute par ici ?"
    },
    zoomOut: {
      accroche: "Un vendredi, c'est l'enfer des livraisons partout — tout le monde veut son colis avant le week-end.",
      relance: "Moi je compte les arrêts qui me restent comme un détenu. C'est quel jour le pire pour vous, niveau cadence ?"
    }
  },
  {
    id: 9,
    environnement: "Pharmacie",
    profil: "Pharmacien",
    humeur: "Concentré",
    energie: "Basse",
    objectif: "Alléger l'échange",
    theme: "La file d'attente",
    zoomIn: {
      accroche: "Vous avez le geste qui ne tremble jamais derrière le comptoir — c'est l'habitude ou c'est dans le tempérament ?",
      relance: "Moi je perdrais la moitié des boîtes en cinq minutes. Comment on garde la tête froide avec trois personnes qui attendent ?"
    },
    contexte: {
      accroche: "Vous gérez trois files avec un calme chirurgical — c'est toujours comme ça le mercredi ou j'ai mal choisi mon créneau ?",
      relance: "J'ai l'ordonnance mais j'ai perdu ma santé dans la queue. C'est quoi l'heure où on peut venir sans faire la guerre ?"
    },
    zoomOut: {
      accroche: "Avec le temps qui change, j'imagine que vous voyez débarquer tout le quartier enrhumé en même temps.",
      relance: "Moi je sens que je vais y passer aussi, ça se joue à pas grand-chose. C'est la saison la plus folle pour vous, là ?"
    }
  },
  {
    id: 10,
    environnement: "Boutique de Luxe",
    profil: "Client VIP",
    humeur: "Pressé",
    energie: "Haute",
    objectif: "Capter l'attention",
    theme: "L'exclusivité",
    zoomIn: {
      accroche: "Votre montre n'est pas un hasard — vous l'avez chinée ou c'est un coup de cœur assumé ?",
      relance: "Moi j'y connais rien mais j'aimerais apprendre à reconnaître une belle pièce. On commence par regarder quoi ?"
    },
    contexte: {
      accroche: "Vous avez l'air de savoir exactement ce que vous venez chercher — vous connaissez déjà la maison ou c'est une découverte ?",
      relance: "Je traîne souvent ici juste pour l'œil, j'avoue. C'est quoi la pièce dont tout le monde parle en ce moment ?"
    },
    zoomOut: {
      accroche: "Un créneau pareil en pleine semaine, c'est presque calme — il faut viser ces heures-là pour être tranquille, non ?",
      relance: "Moi je fuis les samedis bondés, ça me rend dingue. Vous aussi vous organisez tout pour éviter la foule ?"
    }
  },
  {
    id: 11,
    environnement: "Chantier / Entrepôt",
    profil: "Chef de chantier",
    humeur: "Stressé",
    energie: "Haute",
    objectif: "Instaurer la confiance",
    theme: "Les délais",
    zoomIn: {
      accroche: "Votre casque a plus de stickers qu'un vieux skate — y en a un derrière chaque chantier ou c'est juste pour le style ?",
      relance: "Moi je colle rien nulle part, trop indécis. C'est quoi le chantier qui vous a marqué au point d'y laisser une trace ?"
    },
    contexte: {
      accroche: "Je vous livre dans la fenêtre prévue — un truc de moins sur la liste. Le chantier il en est où, vous approchez de la livraison ?",
      relance: "Je vois bien que vous jonglez avec dix urgences, je vais pas en rajouter. C'est quoi la phase qui vous stresse le plus, d'habitude ?"
    },
    zoomOut: {
      accroche: "Sur un planning comme ça, j'imagine que la météo décide la moitié de vos journées à votre place.",
      relance: "Moi un peu de pluie et je suis déjà de mauvaise humeur. Vous arrivez à anticiper ou vous subissez au jour le jour ?"
    }
  },
  {
    id: 12,
    environnement: "Café / Brasserie",
    profil: "Voisin de table télétravailleur",
    humeur: "Concentré",
    energie: "Basse",
    objectif: "Briser l'isolement",
    theme: "Le télétravail",
    zoomIn: {
      accroche: "Votre casque a l'air de vous couper du monde entier — c'est le secret pour bosser dans le bruit ?",
      relance: "Moi j'arrive pas à me concentrer sans, mais j'ai jamais trouvé le bon. Vous écoutez vraiment un truc ou c'est juste pour le silence ?"
    },
    contexte: {
      accroche: "Ça fait du bien de voir que je suis pas le seul à avoir fait du café mon bureau — vous venez souvent bosser ici ?",
      relance: "Vos cinq onglets ouverts ont l'air aussi stressants que mon planning. C'est quoi votre table préférée pour être tranquille ?"
    },
    zoomOut: {
      accroche: "Y a une vibe particulière dans les cafés en pleine semaine — que des gens qui fuient leur bureau ou leur appart, on dirait.",
      relance: "Moi je viens surtout pour pas devenir fou tout seul chez moi. Le télétravail vous a sauvé ou rendu un peu dingue aussi ?"
    }
  },
  {
    id: 13,
    environnement: "Supermarché",
    profil: "Client derrière en caisse",
    humeur: "Impatient",
    energie: "Fatigué",
    objectif: "Désamorcer la tension",
    theme: "La météo",
    zoomIn: {
      accroche: "Votre veste est trempée — il s'est remis à tomber dehors, ou vous avez couru pour échapper à la file ?",
      relance: "Moi j'ai oublié le parapluie comme un champion, encore une fois. C'est l'apocalypse dehors ou ça se calme ?"
    },
    contexte: {
      accroche: "Avec ce temps, la file de caisse devient presque agréable finalement — vous êtes du quartier ou détour exprès ?",
      relance: "On a tous les deux fait notre shopping en mode survie, respect. C'est votre magasin habituel ou vous testez ?"
    },
    zoomOut: {
      accroche: "Une fin de journée pareille, tout le monde dans la queue a la même tête de fin de marathon.",
      relance: "Moi je rêve juste de mon canapé, là. Vous aussi c'est la dernière mission avant de souffler, ou la soirée commence à peine ?"
    }
  },
  {
    id: 14,
    environnement: "Dans la rue",
    profil: "Commerçant sur le seuil",
    humeur: "Ennuyé",
    energie: "Basse",
    objectif: "Générer de l'intérêt",
    theme: "Le flux de clients",
    zoomIn: {
      accroche: "Vous avez l'air philosophe à regarder la rue passer — c'est la pause ou la vraie vie du métier, ces moments-là ?",
      relance: "Moi j'aurais déjà tourné en rond dix fois, j'envie votre calme. On s'habitue aux temps morts ou jamais vraiment ?"
    },
    contexte: {
      accroche: "C'est calme ce matin — ou c'est le signe que vous gardez votre meilleure clientèle pour l'après-midi ?",
      relance: "Je passe souvent devant sans jamais oser entrer, je l'avoue. C'est quoi votre meilleure heure côté passage ?"
    },
    zoomOut: {
      accroche: "Un début de semaine gris comme ça, la rue entière a l'air d'avoir appuyé sur pause — vous le sentez au nombre de gens ?",
      relance: "Moi aussi je traîne des pieds aujourd'hui, faut dire. C'est la météo qui vide la rue ou juste le jour ?"
    }
  },
  {
    id: 15,
    environnement: "Immeuble Résidentiel",
    profil: "Gardien / Concierge",
    humeur: "Bienveillant",
    energie: "Haute",
    objectif: "Fidéliser le contact",
    theme: "La vie de l'immeuble",
    zoomIn: {
      accroche: "Votre trousseau pourrait ouvrir la moitié de la ville — vous retenez chaque clé par cœur ou y a un système ?",
      relance: "Moi je perds la mienne deux fois par semaine, c'est dire le niveau. Comment on garde le contrôle de tout ça sans devenir fou ?"
    },
    contexte: {
      accroche: "Vous êtes clairement la mémoire vivante de l'immeuble — tout passe par vous, depuis longtemps ?",
      relance: "Je viens d'arriver et je connais encore personne. L'immeuble a beaucoup changé depuis que vous êtes là ?"
    },
    zoomOut: {
      accroche: "Un dimanche tranquille comme ça, j'imagine que l'immeuble a une tout autre ambiance qu'en semaine.",
      relance: "Moi j'adore ce calme du week-end, ça respire enfin. C'est le moment que vous préférez aussi, ou c'est là que tout se détraque ?"
    }
  }
];
