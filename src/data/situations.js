// Structure fusionnée : wizard fields (matching) + pyramide Zoom In / Zoom Out (accroches).
//
// Wizard fields :
//   centreInteret — sujet principal (filtre StepInteret)
//   vibe          — Ouvert / Neutre / Fermé  (humeur wizard)
//   ageGroupe     — Jeune / Adulte / Senior / Tous
//   genre         — Homme / Femme / Indéfini
//   proximite     — Inconnu / Croisé / Connaissance / Habitué / Proche
//   audace        — 1 (Prudent) · 2 (Confiant) · 3 (Audacieux)
//   moment        — Matin / Après-midi / Soir / Tous
//
// Zoom In / Zoom Out :
//   zoomIn   { accroche, relance } — un détail visible sur la personne
//   contexte { accroche, relance } — le lieu, l'instant partagé
//   zoomOut  { accroche, relance } — l'énergie générale du moment

export const SITUATIONS_DATA = [
  {
    id: 1,
    environnement: "Boutique de Luxe",
    profil: "Vendeur Senior",
    humeur: "Condescendant",
    ageGroupe: "Adulte",
    genre: "Homme",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Mode",
    proximite: "Inconnu",
    audace: 2,
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
    ageGroupe: "Adulte",
    genre: "Femme",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 1,
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
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Nature",
    proximite: "Inconnu",
    audace: 2,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Fatigué",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 1,
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
    ageGroupe: "Adulte",
    genre: "Homme",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 1,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Gastronomie",
    proximite: "Croisé",
    audace: 1,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Sport",
    proximite: "Croisé",
    audace: 2,
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
    ageGroupe: "Adulte",
    genre: "Homme",
    vibe: "Neutre",
    energie: "Fatigué",
    moment: "Après-midi",
    centreInteret: "Travail",
    proximite: "Inconnu",
    audace: 1,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Santé",
    proximite: "Croisé",
    audace: 1,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Mode",
    proximite: "Inconnu",
    audace: 3,
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
    ageGroupe: "Adulte",
    genre: "Homme",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Travail",
    proximite: "Inconnu",
    audace: 2,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 2,
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
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Fatigué",
    moment: "Soir",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 1,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 2,
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
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Tous",
    centreInteret: "Quotidien",
    proximite: "Habitué",
    audace: 1,
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
  },
  {
    id: 16,
    environnement: "Aéroport",
    profil: "Hôtesse d'enregistrement",
    humeur: "Professionnelle",
    ageGroupe: "Adulte",
    genre: "Femme",
    vibe: "Neutre",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Rendre l'échange humain",
    theme: "Les voyageurs du jour",
    zoomIn: {
      accroche: "Vous avez le sourire de quelqu'un qui gère l'imprévu avant même qu'il arrive — c'est votre routine ou vous êtes du matin naturellement ?",
      relance: "Moi je suis une catastrophe avant 8h, ça se voit sûrement. Sur ce genre de poste, on devient vite imperméable au stress des gens ?"
    },
    contexte: {
      accroche: "Le terminal est encore calme mais ça va vite changer — c'est toujours cette heure la plus simple de la journée ?",
      relance: "Je préfère toujours arriver tôt pour éviter la cohue. La tension des passagers en retard, vous arrivez à la laisser glisser ou ça finit par peser ?"
    },
    zoomOut: {
      accroche: "Jours fériés, week-end de pont — j'imagine que la vibe ici change radicalement selon le calendrier.",
      relance: "Moi là je pars en déplacement pro, loin du glamour. C'est quoi la destination que vous enviez le plus en regardant les billets passer ?"
    }
  },
  {
    id: 17,
    environnement: "Gare / Quai SNCF",
    profil: "Contrôleur",
    humeur: "Pressé",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Fatigué",
    moment: "Soir",
    centreInteret: "Voyage",
    proximite: "Croisé",
    audace: 1,
    objectif: "Alléger le contrôle",
    theme: "Les retards",
    zoomIn: {
      accroche: "Votre veste a l'air d'avoir fait autant de kilomètres que les trains — vous êtes sur cette ligne depuis longtemps ?",
      relance: "Moi j'aurais les pieds en compote après deux heures debout. Sur les longues lignes, on prend le temps de s'asseoir ou c'est debout de bout en bout ?"
    },
    contexte: {
      accroche: "Vingt minutes de retard annoncées — c'est déjà une bonne journée ou c'est la moyenne habituelle sur ce trajet ?",
      relance: "Moi je suis monté sans trop y croire, fidèle à moi-même. C'est quoi la ligne la plus capricieuse de votre planning ?"
    },
    zoomOut: {
      accroche: "Un vendredi soir dans ce train, la moitié des gens rentre en mode décompression totale — vous le sentez dans les wagons ?",
      relance: "Moi je compte les stations comme des victoires ce soir. Les voyageurs du vendredi, c'est une espèce à part comparé au lundi matin ?"
    }
  },
  {
    id: 18,
    environnement: "Hôtel",
    profil: "Réceptionniste",
    humeur: "Accueillant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Soir",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Créer une première impression mémorable",
    theme: "Le séjour à venir",
    zoomIn: {
      accroche: "Vous avez le badge du réceptionniste et l'air de quelqu'un qui a déjà répondu à toutes les questions possibles — c'est quoi la plus bizarre de la semaine ?",
      relance: "Moi j'aurais séché sur la moitié, j'imagine. Les demandes insolites, ça vous fait encore sourire ou c'est devenu ordinaire ?"
    },
    contexte: {
      accroche: "L'hôtel a une vraie personnalité — vous le recommandez pour autre chose que dormir ?",
      relance: "Je voyage souvent pour le boulot, j'ai rarement le temps de profiter. C'est quoi le truc que tout le monde manque parce qu'il le sait pas ?"
    },
    zoomOut: {
      accroche: "Un dimanche soir, les arrivées ont une toute autre ambiance que le vendredi — les gens ont la tête à quoi en général ?",
      relance: "Moi je débarque un peu hagard, clairement. C'est la semaine de la ville ou un week-end de plus qui se finit ici pour la plupart ?"
    }
  },
  {
    id: 19,
    environnement: "Salon de Coiffure",
    profil: "Coiffeur / Coiffeuse",
    humeur: "Bavard",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Mode",
    proximite: "Habitué",
    audace: 1,
    objectif: "Installer une connivence",
    theme: "Le look et la transformation",
    zoomIn: {
      accroche: "Vous avez les ciseaux qui bougent même quand vous parlez — c'est une seconde nature ou vous faites attention ?",
      relance: "Moi j'arriverais pas à faire deux choses en même temps sans catastrophe. Vous apprenez ça en formation ou ça vient avec l'expérience ?"
    },
    contexte: {
      accroche: "Le salon est plein à cette heure — vous avez encore des créneaux cette semaine ou c'est complet ?",
      relance: "Moi j'ai repoussé ce rendez-vous depuis trop longtemps. C'est quoi la période la plus folle dans l'année pour vous ?"
    },
    zoomOut: {
      accroche: "On approche de l'été, tout le monde veut changer de tête en même temps — vous voyez vraiment la tendance arriver d'un coup ?",
      relance: "Moi je suis pris de l'envie de changer mais je sais pas par quoi. C'est quoi la coupe que tout le monde demande en ce moment ?"
    }
  },
  {
    id: 20,
    environnement: "Cabinet Médical",
    profil: "Secrétaire médicale",
    humeur: "Débordée",
    ageGroupe: "Tous",
    genre: "Femme",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Santé",
    proximite: "Croisé",
    audace: 1,
    objectif: "Ne pas alourdir l'attente",
    theme: "La salle d'attente",
    zoomIn: {
      accroche: "Vous jongler entre le téléphone, l'ordi et les patients avec une précision millimétrée — vous avez un système ou c'est l'instinct ?",
      relance: "Moi j'ai du mal à gérer deux tâches en même temps sans tout rater. À quel moment on atteint ce niveau de maîtrise ?"
    },
    contexte: {
      accroche: "La salle d'attente est bien remplie — je me suis trompé de créneau ou c'est systématiquement comme ça ici ?",
      relance: "Je suis pris à peu près vers quelle heure ? Je demande juste pour gérer ma journée mentalement."
    },
    zoomOut: {
      accroche: "Vu la météo de cette semaine, j'imagine que les consultations flambent — c'est vraiment lié ou c'est un mythe ?",
      relance: "Moi je viens à titre préventif, je touche du bois. Le cabinet est plus calme en été ou ça ne change pas grand-chose ?"
    }
  },
  {
    id: 21,
    environnement: "Transport en Commun",
    profil: "Passager assis à côté",
    humeur: "Neutre",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Rompre le silence de façon naturelle",
    theme: "Le trajet quotidien",
    zoomIn: {
      accroche: "Votre livre a l'air de vous tenir en haleine — c'est quoi, si c'est pas indiscret ?",
      relance: "Moi j'arrive plus à lire dans les transports, je m'endors ou je regarde mon téléphone. C'est quoi le genre ?"
    },
    contexte: {
      accroche: "Ce trajet est toujours aussi chargé à cette heure — vous le faites tous les jours ou c'est exceptionnel ?",
      relance: "Moi je change d'horaires exprès pour éviter ça, en général. C'est quoi votre stratégie pour supporter la foule ?"
    },
    zoomOut: {
      accroche: "Un lundi matin dans ce wagon, tout le monde a la même tête de quelqu'un qui a raté l'alarme — solidarité.",
      relance: "Moi je suis en mode survie jusqu'au café. Vous, vous arrivez à être productif dès le matin ou ça démarre doucement ?"
    }
  },
  {
    id: 22,
    environnement: "Librairie",
    profil: "Libraire",
    humeur: "Passionné",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Croisé",
    audace: 1,
    objectif: "Obtenir une recommandation sincère",
    theme: "Les coups de cœur",
    zoomIn: {
      accroche: "Vous avez un livre à portée de main derrière la caisse — c'est ce que vous lisez en ce moment ou votre voisin de comptoir préféré ?",
      relance: "Moi j'ai honte de ma pile à lire, elle attend depuis des mois. C'est quoi en ce moment qui vous a le plus accroché ?"
    },
    contexte: {
      accroche: "La librairie est bien rangée mais on sent qu'il y a un vrai choix derrière — c'est vous qui faites la sélection ou c'est imposé ?",
      relance: "Je me perds toujours ici dans le bon sens. C'est quoi le rayon où les gens passent le plus de temps sans s'en rendre compte ?"
    },
    zoomOut: {
      accroche: "En ce moment j'ai envie d'un roman long et dense, un truc qui me coupe du bruit ambiant — vous connaissez ce type de demande ?",
      relance: "Moi je cherche à décrocher sans culpabiliser. C'est quoi le livre que vous conseillez à quelqu'un qui a la tête pleine ?"
    }
  },
  {
    id: 23,
    environnement: "Restaurant",
    profil: "Serveur",
    humeur: "Débordé",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Fatigué",
    moment: "Après-midi",
    centreInteret: "Gastronomie",
    proximite: "Croisé",
    audace: 1,
    objectif: "Faciliter le service",
    theme: "Le rush du midi",
    zoomIn: {
      accroche: "Vous portez quatre assiettes d'un bras sans jamais trébucher — c'est une question d'entraînement ou de concentration pure ?",
      relance: "Moi je renverse un verre à chaque fois que quelqu'un me regarde. Ça s'apprend vraiment ou faut être câblé différemment ?"
    },
    contexte: {
      accroche: "Le service a l'air de tourner à fond — je commande simple pour vous faciliter la vie, c'est quoi qui sort vite aujourd'hui ?",
      relance: "Je suis pas pressé, je veux juste pas bloquer une table longtemps. C'est quoi le plat que tout le monde prend sans hésiter ?"
    },
    zoomOut: {
      accroche: "Un midi de semaine comme ça, j'imagine que vous voyez défiler toutes les dynamiques de boulot — tables de managers, repas business, solos pressés.",
      relance: "Moi je suis en repas solo rapide, clairement pas le plus glamour. C'est quoi le type de table qui vous change le plus de la routine ?"
    }
  },
  {
    id: 24,
    environnement: "Taxi / VTC",
    profil: "Chauffeur",
    humeur: "Bavard",
    ageGroupe: "Adulte",
    genre: "Homme",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Tous",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Donner la bonne réplique d'ouverture",
    theme: "La ville et ses anecdotes",
    zoomIn: {
      accroche: "Votre voiture est impeccable pour un métier qui passe sa journée dehors — c'est une question d'organisation ou de discipline ?",
      relance: "Moi ma voiture en dit long sur mon niveau de chaos. Sur de longues journées comme les vôtres, c'est quoi le truc qui fait vraiment la différence ?"
    },
    contexte: {
      accroche: "Ce quartier là, c'est toujours l'enfer ou c'est moi qui choisis les mauvaises heures ?",
      relance: "Je connais encore mal la ville. C'est quoi le coin que vous évitez à tout prix en journée ?"
    },
    zoomOut: {
      accroche: "Vu ce qui se passe en ville cette semaine, j'imagine que les courses sont plus longues que d'habitude avec les bouchons.",
      relance: "Moi j'essaie de pas regarder le compteur. C'est quoi les jours où vous faites le meilleur chiffre sans vous épuiser ?"
    }
  },
  {
    id: 25,
    environnement: "Parc / Espace vert",
    profil: "Joggeur de retour",
    humeur: "Détendu",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Sport",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Engager un échange complice",
    theme: "L'effort et la récupération",
    zoomIn: {
      accroche: "Vos chaussures ont pris une sacrée raclée — vous avez couru dans quoi, une rivière ?",
      relance: "Moi je serais rentré au premier signe de boue. C'est quoi votre itinéraire habituel par ici ?"
    },
    contexte: {
      accroche: "Le parc est parfait à cette heure, encore calme — vous courez toujours à ce créneau ou c'est les circonstances qui décident ?",
      relance: "Moi je n'arrive jamais à m'y mettre le matin. Comment on passe du côté des gens qui courent avant le café ?"
    },
    zoomOut: {
      accroche: "Ce temps de début de printemps remet tout le monde dehors d'un coup — on voit nettement plus de monde qu'il y a deux semaines.",
      relance: "Moi la lumière qui revient me donne envie de m'y remettre, ça dure jamais longtemps. Vous courez toute l'année ou vous avez vos saisons ?"
    }
  },
  {
    id: 26,
    environnement: "Piscine",
    profil: "Maître nageur",
    humeur: "Concentré",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Sport",
    proximite: "Croisé",
    audace: 1,
    objectif: "Créer un lien avec l'habitué du lieu",
    theme: "La discipline de l'eau",
    zoomIn: {
      accroche: "Votre montre de sport a l'air de pouvoir faire une thèse sur mes performances — vous analysez vraiment tout le monde ou c'est automatique ?",
      relance: "Moi j'ai pas envie de savoir ce que ça donnerait sur moi. Vous arrivez à désactiver le mode coach ou vous voyez toujours les défauts ?"
    },
    contexte: {
      accroche: "La piscine est encore calme — c'est le bon créneau pour nager sérieusement ou ça change pas tant que ça ?",
      relance: "Je viens d'essayer de reprendre régulièrement, les premières longueurs sont mortelles. C'est quoi le truc technique qui change tout pour ceux qui reprennent ?"
    },
    zoomOut: {
      accroche: "Début janvier, j'imagine que cette piscine ressemble à un autre endroit — tout le monde avec ses bonnes résolutions.",
      relance: "Moi j'en fais partie, j'avoue. Vous avez une théorie sur pourquoi les trois quarts abandonnent avant février ?"
    }
  },
  {
    id: 27,
    environnement: "Boulangerie",
    profil: "Boulanger / Vendeuse",
    humeur: "Énergique",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Gastronomie",
    proximite: "Habitué",
    audace: 1,
    objectif: "Commencer la journée sur une bonne note",
    theme: "Les produits du jour",
    zoomIn: {
      accroche: "Vous avez les yeux grands ouverts à cette heure-là — vous êtes du matin naturellement ou le four finit par vous conditionner ?",
      relance: "Moi à 7h je suis inutilisable. C'est quoi l'heure à laquelle vous vous levez pour que le pain soit là à 6h ?"
    },
    contexte: {
      accroche: "Ça sent incroyablement bon ici ce matin — c'est la fournée classique ou vous avez sorti un truc de spécial ?",
      relance: "Je viens tous les matins mais je prends toujours la même chose par habitude. C'est quoi le produit que les gens ne pensent jamais à prendre et qui vaut le coup ?"
    },
    zoomOut: {
      accroche: "Un mardi matin comme ça, les gens qui passent ont tous l'air d'avoir besoin de ce croissant comme d'un médicament.",
      relance: "Moi je compte là-dessus pour démarrer, honnêtement. C'est les mêmes têtes tous les matins ou ça change beaucoup ?"
    }
  },
  {
    id: 28,
    environnement: "Banque / Agence",
    profil: "Conseiller financier",
    humeur: "Professionnel",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 1,
    objectif: "Détendre un rendez-vous formel",
    theme: "Les finances du quotidien",
    zoomIn: {
      accroche: "Vous avez la façon de poser le stylo sur le bureau de quelqu'un qui a fait ça dix mille fois — c'est un tic ou une technique pour mettre les gens à l'aise ?",
      relance: "Moi dès que j'entre dans une banque j'ai l'impression d'être audité. Comment vous faites pour que les gens se sentent pas jugés ?"
    },
    contexte: {
      accroche: "L'agence est calme à cette heure — j'aurais pensé que ce genre de rendez-vous se faisait plutôt en fin de journée.",
      relance: "Moi j'ai pris le premier créneau disponible pour éviter de reculer. C'est quoi la question que tout le monde arrive avec en tête mais n'ose pas poser en premier ?"
    },
    zoomOut: {
      accroche: "En ce moment avec tout ce qui bouge sur les taux, j'imagine que vous avez plus de clients stressés qu'à l'habitude.",
      relance: "Moi je suis clairement pas serein sur le sujet. C'est quoi le discours que vous répétez le plus souvent pour remettre les gens en perspective ?"
    }
  },
  {
    id: 29,
    environnement: "Espace de Coworking",
    profil: "Voisin de bureau",
    humeur: "Concentré",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 2,
    objectif: "Briser la glace sans déranger",
    theme: "Le travail à distance",
    zoomIn: {
      accroche: "Vous avez un setup qui donne envie — c'est le bureau de quelqu'un qui pense à son dos ou à sa productivité en premier ?",
      relance: "Moi j'ai toujours une chaise pourrie et un câble qui pend. C'est quoi l'investissement qui vous a le plus changé la vie au quotidien ?"
    },
    contexte: {
      accroche: "Ce coworking est pas mal pour la concentration — vous venez souvent ici ou vous testez ?",
      relance: "Je cherche un endroit régulier, ma cuisine c'est plus possible. C'est quoi le critère qui vous a fait choisir celui-là ?"
    },
    zoomOut: {
      accroche: "Vu la fréquentation cette semaine, j'ai l'impression que les gens fuient un peu le bureau classique en ce moment.",
      relance: "Moi je télétravaille à mi-temps et je cherche encore l'équilibre. Vous avez trouvé le bon rythme entre chez vous et ici ?"
    }
  },
  {
    id: 30,
    environnement: "Cours de Yoga",
    profil: "Instructeur yoga",
    humeur: "Calme",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Soir",
    centreInteret: "Bien-être",
    proximite: "Croisé",
    audace: 1,
    objectif: "Créer un lien avant le cours",
    theme: "La détente et le lâcher-prise",
    zoomIn: {
      accroche: "Vous avez une façon d'arriver dans la salle qui fait baisser la pression de tout le monde — c'est travaillé ou c'est vous ?",
      relance: "Moi j'arrive encore stressé de ma journée. Comment on passe du mode boulot au mode présent sans longue transition ?"
    },
    contexte: {
      accroche: "La salle se remplit bien pour ce créneau — c'est un groupe habituel ou ça change beaucoup d'une semaine à l'autre ?",
      relance: "Je viens pour la première fois, j'espère pas être le seul à galérer. C'est quoi le conseil pour quelqu'un qui commence ?"
    },
    zoomOut: {
      accroche: "Après une semaine comme celle-là, je pense que tout le monde dans cette salle a besoin de souffler autant que moi.",
      relance: "Moi je viens clairement pour décompresser plus que pour la performance. Vous le sentez, les gens en mode 'urgence de respirer' ?"
    }
  },
  {
    id: 31,
    environnement: "Fromagerie / Épicerie Fine",
    profil: "Fromager",
    humeur: "Passionné",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Gastronomie",
    proximite: "Croisé",
    audace: 1,
    objectif: "Apprendre quelque chose",
    theme: "Les accords et les saisons",
    zoomIn: {
      accroche: "Vous avez le regard de quelqu'un qui sait exactement quel fromage convient à quelle personne en trente secondes — c'est de l'instinct ou de l'expérience ?",
      relance: "Moi j'arrive toujours en sachant pas quoi prendre. C'est quoi le signe qui vous dit que quelqu'un va aimer les choses corsées ?"
    },
    contexte: {
      accroche: "Il y a un parfum dans cette boutique qui réveille quelque chose — c'est quoi en ce moment la pièce dont vous êtes le plus fier ?",
      relance: "Je cherche quelque chose qui impressionne sans que ce soit un cliché. C'est quoi l'accord que personne ne pense à faire mais qui tue ?"
    },
    zoomOut: {
      accroche: "On approche des beaux jours, j'imagine que les fromages de saison arrivent — c'est quoi qui change vraiment avec le printemps ?",
      relance: "Moi je suis resté aux classiques toute l'année. C'est quoi le fromage que vous attendez le plus à cette période ?"
    }
  },
  {
    id: 32,
    environnement: "Galerie d'Art",
    profil: "Galeriste",
    humeur: "Distant",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Ouvrir un dialogue sans se prendre au sérieux",
    theme: "Les œuvres du moment",
    zoomIn: {
      accroche: "Vous regardez les gens regarder les œuvres — c'est plus intéressant que les tableaux eux-mêmes parfois ?",
      relance: "Moi j'ai du mal à faire semblant de comprendre ce que je vois. C'est quoi la réaction d'un visiteur qui vous dit que quelque chose a vraiment marché ?"
    },
    contexte: {
      accroche: "L'expo a l'air d'avoir une vraie cohérence — c'est un artiste que vous défendez depuis longtemps ou une découverte récente ?",
      relance: "Je rentre souvent dans des galeries sans avoir le code. C'est quoi le meilleur endroit pour commencer quand on n'y connaît rien ?"
    },
    zoomOut: {
      accroche: "Le marché de l'art en ce moment, j'imagine que c'est en pleine mutation avec tout ce qui se passe sur le digital — vous le sentez dans les demandes ?",
      relance: "Moi je comprends pas encore ce qui fait qu'une œuvre prend de la valeur. C'est quoi l'explication la plus honnête que vous donnez quand on vous pose la question ?"
    }
  },
  {
    id: 33,
    environnement: "Soirée Privée / Événement",
    profil: "Invité inconnu au buffet",
    humeur: "Curieux",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Soir",
    centreInteret: "Social",
    proximite: "Inconnu",
    audace: 3,
    objectif: "Créer un contact naturel en contexte social",
    theme: "Les connexions inattendues",
    zoomIn: {
      accroche: "Vous tenez votre verre avec le détachement de quelqu'un qui connaît du monde ici — vous êtes du côté de qui ?",
      relance: "Moi je suis venu par un ami d'un ami, je connais personne. C'est quoi votre lien avec l'hôte ?"
    },
    contexte: {
      accroche: "C'est une bonne ambiance ici — il y a un mélange de gens intéressant ou c'est toujours les mêmes cercles ?",
      relance: "Je suis pas très doué pour les soirées où je connais personne. Vous, vous arrivez comment à naviguer sans avoir l'air perdu ?"
    },
    zoomOut: {
      accroche: "Une soirée comme ça en pleine semaine, les gens sont soit 'j'en avais besoin' soit 'je sais pas pourquoi je suis là' — vous êtes lequel ?",
      relance: "Moi clairement le second, mais je suis content d'être sorti. C'est quoi ce qui vous a décidé à venir ?"
    }
  },
  {
    id: 34,
    environnement: "Ascenseur de Bureaux",
    profil: "Collègue d'un autre service",
    humeur: "Gêné",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 1,
    objectif: "Sortir du silence pesant",
    theme: "La vie de bureau",
    zoomIn: {
      accroche: "Vous avez le badge d'un service que je croise peu — vous êtes sur quel étage ?",
      relance: "Moi je reste souvent dans ma bulle au quatrième, j'ai l'impression de pas connaître la moitié du bâtiment. Ça fait longtemps que vous êtes là ?"
    },
    contexte: {
      accroche: "Cet ascenseur met une éternité — il est toujours aussi lent ou c'est moi qui suis à cran aujourd'hui ?",
      relance: "J'aurais dû prendre les escaliers, clairement. C'est votre bâtiment habituel ou vous passez ici à titre exceptionnel ?"
    },
    zoomOut: {
      accroche: "Un mercredi après-midi, c'est clairement le creux de la vague de la semaine — tout le monde a l'air en mode pilotage automatique.",
      relance: "Moi je commence à compter les heures, j'avoue. C'est le moment de la semaine où vous êtes le plus productif, vous ?"
    }
  },
  {
    id: 35,
    environnement: "Bureau de Poste",
    profil: "Agent postal",
    humeur: "Débordé",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Fatigué",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 1,
    objectif: "Rendre le passage agréable",
    theme: "Les colis et l'attente",
    zoomIn: {
      accroche: "Vous scannez les colis avec la précision d'un chirurgien malgré le rythme — c'est de la concentration pure ou de l'automatisme complet ?",
      relance: "Moi après une heure je ferais des erreurs à la chaîne. C'est quoi le moment où l'automatisme prend vraiment le dessus ?"
    },
    contexte: {
      accroche: "La file est courte ce matin — j'ai bien choisi mon heure ou c'est toujours plus calme le matin ici ?",
      relance: "J'ai raté mon colis hier, je voulais pas rater la réouverture. C'est quoi le créneau à éviter absolument ?"
    },
    zoomOut: {
      accroche: "Avec les fêtes qui approchent, j'imagine que le flux de colis ici va exploser dans les deux prochaines semaines.",
      relance: "Moi j'ai déjà commandé tout en avance pour éviter les galères. C'est quoi la période la plus folle de l'année pour vous ?"
    }
  },
  {
    id: 36,
    environnement: "Salle d'Embarquement",
    profil: "Voyageur stressé à côté",
    humeur: "Stressé",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Fatigué",
    moment: "Tous",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Désamorcer la tension partagée",
    theme: "Les retards et l'imprévu",
    zoomIn: {
      accroche: "Vous vérifiez votre téléphone avec la fréquence de quelqu'un qui attend une greffe — c'est le vol ou autre chose ?",
      relance: "Moi j'ai eu un retard de quatre heures une fois, j'ai failli craquer. Vous, vous êtes en correspondance serrée ou c'est juste l'angoisse naturelle ?"
    },
    contexte: {
      accroche: "Le tableau d'affichage ne rassure personne là — vous avez une info sur ce qui se passe avec ce vol ?",
      relance: "J'essaie de rester calme mais c'est de plus en plus dur. Vous avez un truc pour attendre sans exploser ?"
    },
    zoomOut: {
      accroche: "Une salle d'embarquement bondée, c'est un concentré d'humanité sous pression — les gens réagissent tous pareil ou chacun son mode ?",
      relance: "Moi je deviens silencieux et je lis, c'est mon truc. Vous, vous gérez comment l'attente quand vous pouvez rien contrôler ?"
    }
  },
  {
    id: 37,
    environnement: "Musée",
    profil: "Guide culturel",
    humeur: "Passionné",
    ageGroupe: "Adulte",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Alimenter une curiosité sincère",
    theme: "L'histoire derrière les œuvres",
    zoomIn: {
      accroche: "Vous avez le regard de quelqu'un qui a une anecdote précise sur chaque pièce de la salle — laquelle vous préférez raconter ?",
      relance: "Moi je lis les cartels sans vraiment retenir. C'est quoi le détail sur cette œuvre-là que personne ne remarque tout seul ?"
    },
    contexte: {
      accroche: "Ce musée a une vraie ambiance à cette heure — moins de monde, la lumière naturelle… vous préférez guider avec peu de gens ou avec un grand groupe ?",
      relance: "Je viens souvent au calme pour prendre le temps. C'est quoi la salle que vous recommandez à quelqu'un qui a une heure et veut pas regretter ?"
    },
    zoomOut: {
      accroche: "Il y a quelque chose dans les musées qui fait que les gens ralentissent naturellement — dans la vie courante, personne prend autant de temps pour regarder.",
      relance: "Moi je ressors toujours un peu plus calme. Vous, après des années ici, vous voyez encore les œuvres ou elles sont devenues un décor ?"
    }
  },
  {
    id: 38,
    environnement: "Immeuble Résidentiel",
    profil: "Nouveau voisin",
    humeur: "Réservé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Haute",
    moment: "Tous",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 1,
    objectif: "Poser les bases d'un bon voisinage",
    theme: "L'installation et le quartier",
    zoomIn: {
      accroche: "Vous avez des cartons empilés avec une précision qui dit que vous avez déjà déménagé plusieurs fois — c'est votre système ou de la chance ?",
      relance: "Moi mon dernier déménagement c'était le chaos absolu. C'est quoi la première chose que vous installez pour que ça ressemble à un chez-soi ?"
    },
    contexte: {
      accroche: "Bienvenue dans l'immeuble — vous venez juste d'arriver ou vous êtes là depuis quelques semaines ?",
      relance: "Je suis là depuis deux ans et je connais encore à peine mes voisins. C'est quoi votre première impression du coin ?"
    },
    zoomOut: {
      accroche: "Déménager en ce moment avec le marché immobilier comme il est, c'est toute une aventure — vous avez trouvé facilement ?",
      relance: "Moi j'ai mis six mois à me décider à bouger. C'est quoi le truc que vous cherchiez absolument et que vous avez trouvé ici ?"
    }
  },
  {
    id: 39,
    environnement: "Espace de Coworking",
    profil: "Indépendant souriant",
    humeur: "Avenant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 1,
    objectif: "Créer un lien professionnel",
    theme: "Le quotidien du freelance",
    zoomIn: {
      accroche: "Vous avez l'air d'être installé ici comme chez vous, avec votre setup au millimètre — vous êtes un pilier de l'endroit ou c'est juste votre organisation naturelle ?",
      relance: "Moi je change de place tous les jours, incapable de me poser. C'est quoi votre rituel pour vous mettre en mode boulot le matin ?"
    },
    contexte: {
      accroche: "L'ambiance est plutôt bonne ici ce matin, ça bosse dans le calme — vous venez souvent à cette heure-là ?",
      relance: "J'hésite à en faire mon QG. C'est quoi selon vous ce qui fait qu'on est vraiment productif dans un lieu comme ça ?"
    },
    zoomOut: {
      accroche: "C'est fou comme le travail a changé, on se retrouve tous à bosser côte à côte sans bosser ensemble — vous le vivez comment ce mode de vie ?",
      relance: "Moi je me demande parfois si c'est la liberté ou la solitude. C'est quoi le meilleur côté du freelance pour vous ?"
    }
  },
  {
    id: 40,
    environnement: "Pharmacie",
    profil: "Client jovial",
    humeur: "Bienveillant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Santé",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Détendre l'attente",
    theme: "Prendre soin de soi",
    zoomIn: {
      accroche: "Vous avez l'air de quelqu'un qui garde le sourire même dans la file d'attente d'une pharmacie — c'est un tempérament ou une bonne journée ?",
      relance: "Moi l'attente ici me plombe toujours. C'est quoi votre secret pour rester de bonne humeur quand c'est un peu long ?"
    },
    contexte: {
      accroche: "Il y a du monde aujourd'hui, on doit être en pleine saison des petits rhumes — vous tenez le coup avec ce temps ?",
      relance: "Moi j'ai l'impression de tout attraper dès qu'il fait froid. C'est quoi votre réflexe santé quand la saison change ?"
    },
    zoomOut: {
      accroche: "On parle beaucoup de prévention en ce moment, prendre soin de soi avant que ça aille mal — vous êtes plutôt du genre à anticiper ?",
      relance: "Moi j'attends toujours le dernier moment. C'est quoi la petite habitude santé que vous ne lâcheriez pour rien au monde ?"
    }
  },
  {
    id: 41,
    environnement: "Salon de Coiffure",
    profil: "Cliente à côté",
    humeur: "Posée",
    ageGroupe: "Tous",
    genre: "Femme",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Mode",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Engager la conversation",
    theme: "Le style et le changement",
    zoomIn: {
      accroche: "Vous avez l'air de savoir exactement ce que vous voulez, vous êtes venue avec une idée précise en tête ?",
      relance: "Moi je change d'avis dans le fauteuil à chaque fois. C'est quoi qui vous a décidée pour ce style-là aujourd'hui ?"
    },
    contexte: {
      accroche: "C'est toujours un petit moment suspendu ici, entre deux miroirs — vous venez dans ce salon depuis longtemps ?",
      relance: "Moi je teste celui-ci pour la première fois. C'est quoi qui fait qu'on reste fidèle à un coiffeur selon vous ?"
    },
    zoomOut: {
      accroche: "Un changement de tête, ça tombe souvent quand on a envie de tourner une page — c'est un peu ça pour vous en ce moment ?",
      relance: "Moi je coupe court à chaque fois que je veux repartir à zéro. C'est quoi le changement que vous aviez envie de vous offrir ?"
    }
  },
  {
    id: 42,
    environnement: "Parc / Espace vert",
    profil: "Promeneur de chien",
    humeur: "Tranquille",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Nature",
    proximite: "Croisé",
    audace: 1,
    objectif: "Amorcer un échange simple",
    theme: "Le plein air et les habitudes",
    zoomIn: {
      accroche: "Votre chien a l'air de connaître le chemin par cœur, c'est lui qui vous promène ou l'inverse ?",
      relance: "Moi je croise toujours les mêmes têtes ici sans jamais parler. C'est quoi son coin préféré dans ce parc ?"
    },
    contexte: {
      accroche: "C'est calme à cette heure-ci, le parc est presque à nous — vous venez tous les matins ou c'est selon l'envie ?",
      relance: "Moi j'essaie de m'y mettre pour commencer la journée. C'est quoi qui vous fait revenir ici plutôt qu'ailleurs ?"
    },
    zoomOut: {
      accroche: "Ça fait du bien ces petits bouts de nature en pleine ville, on en aurait presque besoin comme d'une pause — vous le ressentez aussi ?",
      relance: "Moi je crois que je sous-estime à quel point ça me recentre. C'est quoi votre moment préféré ici au fil des saisons ?"
    }
  },
  {
    id: 43,
    environnement: "Cours de Yoga",
    profil: "Voisin de tapis",
    humeur: "Réservé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Soir",
    centreInteret: "Bien-être",
    proximite: "Croisé",
    audace: 1,
    objectif: "Briser la glace avant le cours",
    theme: "La pratique et le lâcher-prise",
    zoomIn: {
      accroche: "Vous avez posé votre tapis pile au même endroit que la dernière fois, on a tous notre petit territoire ici — c'est votre place attitrée ?",
      relance: "Moi je tourne encore pour trouver la mienne. C'est quoi qui vous a fait choisir ce coin de la salle ?"
    },
    contexte: {
      accroche: "Il y a toujours ce petit silence avant que le cours commence, j'aime bien ce moment — vous venez à cette séance régulièrement ?",
      relance: "Moi je débute encore. C'est quoi selon vous qui fait qu'on accroche vraiment à un cours plutôt qu'à un autre ?"
    },
    zoomOut: {
      accroche: "On court tous toute la journée et on vient chercher une heure de calme ici, c'est un peu paradoxal — ça vous fait cet effet-là aussi ?",
      relance: "Moi j'ai du mal à débrancher le cerveau. C'est quoi qui vous a donné envie de vous mettre au yoga au départ ?"
    }
  },
  {
    id: 44,
    environnement: "Soirée Privée / Événement",
    profil: "Invité en retrait",
    humeur: "Discret",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Soir",
    centreInteret: "Social",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Créer du lien dans un groupe",
    theme: "Les rencontres et le hasard",
    zoomIn: {
      accroche: "Vous avez l'air de préférer observer avant de vous lancer, je fais exactement pareil dans ces soirées — vous connaissez beaucoup de monde ici ?",
      relance: "Moi je suis venu pour à peine deux personnes. C'est quoi votre lien avec l'hôte de la soirée ?"
    },
    contexte: {
      accroche: "C'est toujours le moment un peu flottant où personne n'ose vraiment se parler — vous vous en sortez comment dans ce genre de soirée ?",
      relance: "Moi je me réfugie près du buffet en général. C'est quoi votre technique pour amorcer une conversation avec un inconnu ?"
    },
    zoomOut: {
      accroche: "C'est marrant comme une soirée peut complètement changer selon une seule rencontre qu'on y fait — vous y croyez à ces hasards-là ?",
      relance: "Moi les meilleures amitiés je les dois à des soirées où je ne voulais pas aller. C'est quoi la plus belle rencontre que vous ayez faite comme ça ?"
    }
  },
  {
    id: 45,
    environnement: "Parc / Espace vert",
    profil: "Joggeur pressé",
    humeur: "Concentré",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Nature",
    proximite: "Croisé",
    audace: 2,
    objectif: "Placer un mot malgré la distance",
    theme: "L'effort et le grand air",
    zoomIn: {
      accroche: "Désolé de vous couper en plein effort — vous avez un rythme de vrai habitué, vous courez ce parcours tous les jours ?",
      relance: "Moi je peine encore à tenir deux tours. C'est quoi le déclic qui vous a fait devenir aussi régulier ?"
    },
    contexte: {
      accroche: "Vous avez trouvé le seul créneau où le parc est encore respirable — c'est pour ça que vous venez si tôt ?",
      relance: "Moi j'essaie de m'y mettre le matin sans y arriver. C'est quoi qui vous sort du lit à cette heure-là ?"
    },
    zoomOut: {
      accroche: "Courir dehors quand tout le monde dort encore, il y a un truc presque méditatif là-dedans — vous le vivez comme ça ou c'est juste sportif ?",
      relance: "Moi je crois que je cherche surtout à me vider la tête. C'est quoi qui vous fait revenir chaque matin malgré le froid ?"
    }
  },
  {
    id: 46,
    environnement: "Fromagerie / Épicerie Fine",
    profil: "Client pressé au comptoir",
    humeur: "Distant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Gastronomie",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Ouvrir un échange malgré la réserve",
    theme: "Le goût et les bonnes adresses",
    zoomIn: {
      accroche: "Vous avez pointé votre choix sans hésiter une seconde, ça sent le client qui sait ce qu'il aime — c'est votre incontournable celui-là ?",
      relance: "Moi je reste planté devant la vitrine pendant dix minutes. C'est quoi le produit que vous prenez les yeux fermés à chaque fois ?"
    },
    contexte: {
      accroche: "C'est une adresse qui a l'air de tenir la réputation du quartier — vous êtes un habitué ou vous passiez par hasard ?",
      relance: "Moi je découvre l'endroit aujourd'hui. C'est quoi la spécialité de la maison qu'il ne faut surtout pas rater d'après vous ?"
    },
    zoomOut: {
      accroche: "On revient toujours vers ces petites boutiques quand on veut vraiment bien manger, malgré tout ce qui va vite autour — vous êtes attaché à ça aussi ?",
      relance: "Moi je fais l'effort seulement pour les grandes occasions. C'est quoi la dernière fois qu'un bon produit vous a vraiment marqué ?"
    }
  },
  {
    id: 47,
    environnement: "Salle de Sport",
    profil: "Sportif concentré",
    humeur: "Fermé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Soir",
    centreInteret: "Sport",
    proximite: "Croisé",
    audace: 2,
    objectif: "Aborder sans casser la concentration",
    theme: "L'entraînement et la régularité",
    zoomIn: {
      accroche: "Je vais faire vite pour pas casser votre série — vous avez une technique super carrée sur cet exercice, ça fait longtemps que vous vous entraînez ?",
      relance: "Moi je galère encore sur le mouvement. C'est quoi le conseil qui a tout changé pour vous quand vous avez débuté ?"
    },
    contexte: {
      accroche: "C'est l'heure de pointe, faut jouer des coudes pour les machines — vous venez toujours à ce créneau ?",
      relance: "Moi j'essaie de trouver le bon moment pour éviter l'affluence. C'est quoi votre astuce pour caler vos séances sans que ce soit blindé ?"
    },
    zoomOut: {
      accroche: "Tenir une routine sport dans une vie chargée, c'est presque le plus dur du truc — vous arrivez à rester régulier comment ?",
      relance: "Moi je lâche dès que le boulot déborde. C'est quoi qui vous motive à revenir même les soirs sans envie ?"
    }
  },
  {
    id: 48,
    environnement: "Cabinet Médical",
    profil: "Patient en salle d'attente",
    humeur: "Anxieux",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Fatigué",
    moment: "Matin",
    centreInteret: "Santé",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Apaiser une attente tendue",
    theme: "La patience et le moral",
    zoomIn: {
      accroche: "On a tous cette tête un peu ailleurs dans une salle d'attente — vous avez l'air d'avoir trouvé le fauteuil le moins inconfortable, ça fait longtemps que vous patientez ?",
      relance: "Moi je n'ose jamais demander où on en est. C'est quoi votre astuce pour faire passer le temps ici ?"
    },
    contexte: {
      accroche: "Ils ont l'air débordés ce matin, ça déborde un peu sur les horaires — vous aviez rendez-vous tôt vous aussi ?",
      relance: "Moi j'ai appris à prévoir large maintenant. C'est quoi qui vous aide à rester zen quand ça traîne comme ça ?"
    },
    zoomOut: {
      accroche: "C'est fou comme on repousse toujours ces rendez-vous jusqu'au moment où on ne peut plus — vous êtes plutôt du genre à anticiper ou à attendre ?",
      relance: "Moi je prends soin de tout sauf de moi. C'est quoi le truc que vous vous étiez promis de faire pour votre santé cette année ?"
    }
  },
  {
    id: 49,
    environnement: "Musée",
    profil: "Visiteur solitaire",
    humeur: "Absorbé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Partager un regard sur une œuvre",
    theme: "L'art et les impressions",
    zoomIn: {
      accroche: "Vous êtes resté un bon moment devant cette œuvre, ça se voit que quelque chose vous parle — c'est le détail ou l'ensemble qui vous retient ?",
      relance: "Moi je passe souvent trop vite sans vraiment regarder. C'est quoi qui fait qu'une pièce vous arrête net comme ça ?"
    },
    contexte: {
      accroche: "C'est agréable de visiter quand c'est aussi calme, on peut vraiment prendre son temps — vous connaissiez déjà cette expo ?",
      relance: "Moi je suis venu un peu au hasard. C'est quoi la salle qui vaut vraiment le détour d'après vous ?"
    },
    zoomOut: {
      accroche: "On vient chercher quoi au fond dans un musée, un peu de beauté, une pause hors du temps — c'est quoi qui vous y amène vous ?",
      relance: "Moi je crois que je viens surtout pour ralentir. C'est quoi la dernière œuvre qui vous a vraiment remué ?"
    }
  },
  {
    id: 50,
    environnement: "Cours de Yoga",
    profil: "Pratiquant renfermé",
    humeur: "Distant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Fatigué",
    moment: "Soir",
    centreInteret: "Bien-être",
    proximite: "Croisé",
    audace: 1,
    objectif: "Créer un lien discret",
    theme: "Le calme et la récupération",
    zoomIn: {
      accroche: "Vous avez l'air d'arriver ici pour vraiment décrocher, pas pour discuter — je comprends, mais je me lance quand même : grosse journée ?",
      relance: "Moi je viens souvent lessivé aussi. C'est quoi qui vous fait tenir jusqu'au cours plutôt que rentrer direct t'écrouler ?"
    },
    contexte: {
      accroche: "Ce cours du soir a un truc particulier, tout le monde arrive vidé et repart apaisé — ça vous fait cet effet-là aussi ?",
      relance: "Moi je le garde comme mon sas de décompression. C'est quoi qui vous a fait choisir le créneau du soir ?"
    },
    zoomOut: {
      accroche: "On passe nos journées à donner sans jamais récupérer, et cette heure-là c'est un peu la seule pour soi — vous le voyez comme ça ?",
      relance: "Moi je culpabilise presque de prendre ce temps. C'est quoi qui vous aide vraiment à recharger les batteries en ce moment ?"
    }
  },
  {
    id: 51,
    environnement: "Soirée Privée / Événement",
    profil: "Invité qui fait tapisserie",
    humeur: "Timide",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Soir",
    centreInteret: "Social",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Sortir quelqu'un de sa réserve",
    theme: "Le hasard des soirées",
    zoomIn: {
      accroche: "On est deux à faire tapisserie dans ce coin, autant s'allier — vous non plus vous ne connaissez pas grand monde ici ?",
      relance: "Moi je ne connais que la personne qui m'a traîné là. C'est quoi qui vous a décidé à venir ce soir ?"
    },
    contexte: {
      accroche: "Il y a toujours ce moment un peu intimidant où tout le monde a déjà l'air de se connaître — vous vous sentez comment dans ces soirées ?",
      relance: "Moi je suis clairement pas à l'aise dans les grands groupes. C'est quoi le format de soirée où vous vous sentez vraiment vous-même ?"
    },
    zoomOut: {
      accroche: "C'est étrange comme on peut se sentir seul au milieu d'une pièce pleine de monde — ça vous arrive aussi ou c'est juste moi ce soir ?",
      relance: "Moi je préfère mille fois une vraie discussion à deux qu'une salle bondée. C'est quoi votre idée d'une bonne soirée à vous ?"
    }
  },
  {
    id: 52,
    environnement: "Dans la rue",
    profil: "Passante pressée",
    humeur: "Sur la défensive",
    ageGroupe: "Tous",
    genre: "Femme",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Aborder avec tact et respect",
    theme: "Le respect de l'espace",
    zoomIn: {
      accroche: "Pardon de vous arrêter deux secondes, je vois que vous êtes pressée alors je fais court — vous auriez pas repéré une bonne adresse dans le coin par hasard ?",
      relance: "Je débarque dans le quartier et je suis un peu perdu. C'est quoi l'endroit du coin qu'une locale comme vous recommanderait ?"
    },
    contexte: {
      accroche: "Ce quartier bouge tout le temps, on a du mal à suivre entre ce qui ouvre et ce qui ferme — vous êtes du coin ?",
      relance: "Moi je viens d'emménager à deux rues d'ici. C'est quoi qui a changé dans le quartier ces derniers temps d'après vous ?"
    },
    zoomOut: {
      accroche: "On court tous à cent à l'heure dans cette ville, on prend plus le temps de lever la tête — vous la trouvez comment l'ambiance en ce moment ?",
      relance: "Moi j'essaie justement de ralentir un peu. C'est quoi votre petit coin préféré pour souffler dans le quartier ?"
    }
  },
  {
    id: 53,
    environnement: "Dans la rue",
    profil: "Personne au style marqué",
    humeur: "Réservée",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Mode",
    proximite: "Inconnu",
    audace: 3,
    objectif: "Complimenter sans être lourd",
    theme: "Le style et l'allure",
    zoomIn: {
      accroche: "Je me permets juste un mot avant de continuer mon chemin — votre veste est vraiment classe, c'est une trouvaille ou une marque que je devrais connaître ?",
      relance: "Moi je galère à sortir des sentiers battus côté fringues. C'est quoi votre truc pour avoir un style aussi affirmé ?"
    },
    contexte: {
      accroche: "Il y a des quartiers où les gens osent vraiment côté style, et ici on en fait clairement partie — vous vous habillez où en général ?",
      relance: "Moi je tourne toujours dans les mêmes boutiques. C'est quoi la bonne adresse mode du coin que les gens connaissent pas ?"
    },
    zoomOut: {
      accroche: "La mode revient tellement vite en boucle qu'on sait plus ce qui est vintage ou tendance — vous suivez ça ou vous faites votre truc ?",
      relance: "Moi je crois que je m'habille pareil depuis dix ans. C'est quoi la pièce qui pour vous ne se démode jamais ?"
    }
  },
  {
    id: 54,
    environnement: "Dans la rue",
    profil: "Voisin de quartier",
    humeur: "Avenant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Social",
    proximite: "Croisé",
    audace: 1,
    objectif: "Transformer un croisement en lien",
    theme: "La vie de quartier",
    zoomIn: {
      accroche: "On se croise tout le temps dans cette rue sans jamais se dire un mot, c'est presque comique — vous habitez par ici depuis longtemps ?",
      relance: "Moi ça fait un an et je connais personne. C'est quoi le coin où les gens du quartier se retrouvent vraiment ?"
    },
    contexte: {
      accroche: "Belle matinée pour une fois, ça donne envie de traîner dehors — vous commencez la journée par une balade vous aussi ?",
      relance: "Moi j'essaie de prendre l'air avant de bosser. C'est quoi votre parcours préféré pour un tour le matin ?"
    },
    zoomOut: {
      accroche: "C'est fou comme on peut vivre dans la même rue pendant des années sans se connaître — vous trouvez pas que ça se perd un peu, la vie de quartier ?",
      relance: "Moi je trouve ça dommage qu'on se parle plus entre voisins. C'est quoi qui créerait plus de lien dans le coin selon vous ?"
    }
  },

  // ═══════════════ Immeuble de Bureaux ═══════════════
  {
    id: 55,
    environnement: "Immeuble de Bureaux",
    profil: "Collègue croisé dans le hall",
    humeur: "Avenant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Social",
    proximite: "Croisé",
    audace: 1,
    objectif: "Transformer un croisement en lien",
    theme: "La vie de l'immeuble",
    zoomIn: {
      accroche: "On se croise tous les matins devant les ascenseurs sans jamais se parler — vous êtes à quel étage, on est peut-être voisins de palier professionnel ?",
      relance: "Moi je suis au 4e, la boîte de design. C'est quoi votre boîte, on se demande toujours qui fait quoi dans cet immeuble ?"
    },
    contexte: {
      accroche: "Ce hall a un côté impersonnel fou, on pourrait se croiser dix ans sans se connaître — vous travaillez ici depuis longtemps ?",
      relance: "Moi ça fait deux ans et je reconnais à peine trois visages. C'est quoi le seul endroit où les gens se parlent vraiment ici ?"
    },
    zoomOut: {
      accroche: "C'est marrant comme on passe plus de temps avec des inconnus de bureau qu'avec nos amis — vous le vivez comment ce rythme ?",
      relance: "Moi je cours toute la semaine sans lever la tête. C'est quoi qui rend une journée de boulot vraiment agréable pour vous ?"
    }
  },
  {
    id: 56,
    environnement: "Immeuble de Bureaux",
    profil: "Visiteur qui attend en réception",
    humeur: "Impatient",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Meubler une attente commune",
    theme: "L'attente et les rendez-vous",
    zoomIn: {
      accroche: "On a tous les deux cette tête de gens qui poireautent en réception — vous attendez pour un rendez-vous vous aussi ou vous bossez ici ?",
      relance: "Moi j'ai vingt minutes d'avance, l'angoisse d'être en retard. C'est quoi votre technique pour gérer l'attente avant un rendez-vous important ?"
    },
    contexte: {
      accroche: "Ces halls d'entreprise sont tous pareils, canapé design et magazines que personne ne lit — vous venez souvent dans ce genre d'endroit ?",
      relance: "Moi je fais le tour des boîtes toute la semaine pour le boulot. C'est quoi qui fait bonne impression quand on arrive quelque part selon vous ?"
    },
    zoomOut: {
      accroche: "On juge tellement une boîte à son accueil, avant même d'avoir parlé à quelqu'un — vous y êtes sensible aussi à ces premières impressions ?",
      relance: "Moi je me fais un avis en trente secondes en entrant quelque part. C'est quoi le détail qui vous met tout de suite à l'aise ou pas ?"
    }
  },

  // ═══════════════ Marché en plein air ═══════════════
  {
    id: 57,
    environnement: "Marché en plein air",
    profil: "Client devant l'étal",
    humeur: "Curieux",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Gastronomie",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Échanger un bon plan cuisine",
    theme: "Les produits de saison",
    zoomIn: {
      accroche: "Vous avez l'œil pour choisir vos légumes, ça se voit que vous savez repérer les bons — c'est un truc que vous avez appris ou de l'instinct ?",
      relance: "Moi je prends toujours à l'aveugle. C'est quoi le signe qui vous dit qu'un fruit est vraiment mûr et bon ?"
    },
    contexte: {
      accroche: "Ce marché a une sélection vraiment au-dessus des autres du coin — vous faites vos courses ici toutes les semaines ?",
      relance: "Moi je découvre l'endroit ce matin. C'est quoi l'étal qu'il ne faut surtout pas rater d'après vous ?"
    },
    zoomOut: {
      accroche: "Ça fait du bien de revenir au marché plutôt qu'au supermarché, on redécouvre le goût des saisons — vous êtes attaché à ça aussi ?",
      relance: "Moi j'essaie de manger plus local. C'est quoi le produit de saison que vous attendez avec impatience en ce moment ?"
    }
  },
  {
    id: 58,
    environnement: "Marché en plein air",
    profil: "Producteur de miel",
    humeur: "Passionné",
    ageGroupe: "Tous",
    genre: "Homme",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Nature",
    proximite: "Croisé",
    audace: 1,
    objectif: "Apprendre du savoir-faire",
    theme: "La nature et les abeilles",
    zoomIn: {
      accroche: "On sent que derrière votre stand il y a une vraie histoire, vous avez la passion de quelqu'un qui parle de son métier — vous êtes apiculteur depuis longtemps ?",
      relance: "Moi je fantasme sur cette vie au grand air. C'est quoi qui vous a fait choisir ce métier au départ ?"
    },
    contexte: {
      accroche: "Vos pots ont l'air d'être les stars du marché, ça se bouscule un peu — c'est le miel de la région ?",
      relance: "Moi je goûte rarement du vrai miel local. C'est quoi qui change vraiment entre un miel de supermarché et le vôtre ?"
    },
    zoomOut: {
      accroche: "On parle beaucoup des abeilles et de l'environnement en ce moment, vous devez être aux premières loges — ça change quoi pour vous ?",
      relance: "Moi j'ai l'impression qu'on prend enfin conscience de ces choses-là. C'est quoi qui vous inquiète ou vous rend optimiste pour la suite ?"
    }
  },

  // ═══════════════ Parking / Livraison ═══════════════
  {
    id: 59,
    environnement: "Parking / Livraison",
    profil: "Voisin qui charge sa voiture",
    humeur: "Détendu",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 1,
    objectif: "Créer un lien de voisinage",
    theme: "Les galères de parking",
    zoomIn: {
      accroche: "Vous avez l'art de tout faire rentrer dans le coffre, moi je galère toujours — c'est un déménagement ou juste de grosses courses ?",
      relance: "Moi je m'y prends toujours mal. C'est quoi votre astuce pour caser tout ça sans jouer au Tetris pendant dix minutes ?"
    },
    contexte: {
      accroche: "Ce parking c'est toujours la guerre pour une place — vous vous garez ici tous les jours vous aussi ?",
      relance: "Moi je tourne un quart d'heure à chaque fois. C'est quoi votre créneau pour trouver une place sans galérer ?"
    },
    zoomOut: {
      accroche: "C'est fou tout le temps qu'on perd dans ces histoires de voiture et de parking dans une vie — vous y pensez parfois ?",
      relance: "Moi je me dis que je devrais passer au vélo. C'est quoi qui vous ferait lâcher la voiture, ou jamais de la vie ?"
    }
  },
  {
    id: 60,
    environnement: "Parking / Livraison",
    profil: "Gardien du parking",
    humeur: "Bourru",
    ageGroupe: "Tous",
    genre: "Homme",
    vibe: "Neutre",
    energie: "Fatigué",
    moment: "Soir",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 1,
    objectif: "Humaniser un échange de service",
    theme: "Les coulisses du lieu",
    zoomIn: {
      accroche: "Vous devez tout voir passer depuis votre poste, les pressés, les perdus, les râleurs — on doit vous en faire voir de belles non ?",
      relance: "Moi je serais incapable de garder mon calme. C'est quoi le truc le plus improbable que vous ayez vu ici ?"
    },
    contexte: {
      accroche: "Ça tourne sans arrêt un endroit comme ça, vous êtes un peu la mémoire des lieux — vous bossez ici depuis longtemps ?",
      relance: "Moi je passe tous les jours sans jamais avoir pris le temps de dire bonjour. C'est quoi le meilleur moment de votre journée ici ?"
    },
    zoomOut: {
      accroche: "Il y a plein de métiers de l'ombre comme le vôtre qui font tourner la ville sans qu'on les remarque — vous le vivez comment ça ?",
      relance: "Moi je trouve qu'on ne dit pas assez merci à ces gens-là. C'est quoi qui vous fait tenir dans ce boulot au quotidien ?"
    }
  },

  // ═══════════════ Chantier / Entrepôt ═══════════════
  {
    id: 61,
    environnement: "Chantier / Entrepôt",
    profil: "Ouvrier à la pause",
    humeur: "Chaleureux",
    ageGroupe: "Tous",
    genre: "Homme",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Social",
    proximite: "Croisé",
    audace: 1,
    objectif: "Partager un moment de pause",
    theme: "La camaraderie du chantier",
    zoomIn: {
      accroche: "Vous avez l'air d'être celui qui met l'ambiance dans l'équipe, on le sent tout de suite — ça fait longtemps que vous bossez avec eux ?",
      relance: "Moi j'ai l'impression que la bonne équipe change tout dans ce genre de boulot. C'est quoi qui soude un groupe sur un chantier ?"
    },
    contexte: {
      accroche: "La pause café sur un chantier c'est presque sacré, le seul vrai moment pour souffler — vous êtes sur ce site depuis le début ?",
      relance: "Moi je passe juste en coup de vent. C'est quoi le chantier le plus dingue sur lequel vous avez bossé ?"
    },
    zoomOut: {
      accroche: "C'est un métier dur physiquement mais il y a une vraie fierté à construire quelque chose de concret — vous le ressentez comme ça ?",
      relance: "Moi je bosse derrière un écran, j'envie parfois ceux qui voient le résultat de leurs mains. C'est quoi qui vous rend fier dans ce que vous faites ?"
    }
  },
  {
    id: 62,
    environnement: "Chantier / Entrepôt",
    profil: "Cariste de l'entrepôt",
    humeur: "Concentré",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Travail",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Aborder pendant le travail",
    theme: "L'organisation et la logistique",
    zoomIn: {
      accroche: "Vous manœuvrez cet engin comme si c'était une extension de vous, impressionnant — il faut combien de temps pour être aussi à l'aise ?",
      relance: "Moi je serais tétanisé aux commandes. C'est quoi le plus dur à maîtriser au début dans ce métier ?"
    },
    contexte: {
      accroche: "Ça n'arrête pas ici, on dirait une fourmilière parfaitement réglée — c'est toujours ce rythme ou c'est un gros jour ?",
      relance: "Moi je découvre les coulisses, on n'imagine pas le boulot derrière une simple livraison. C'est quoi qui coince le plus dans une journée ?"
    },
    zoomOut: {
      accroche: "Tout le monde commande en ligne sans penser une seconde à la chaîne derrière — vous avez vu le métier changer avec ça ?",
      relance: "Moi je me rends compte à quel point on dépend de gens comme vous. C'est quoi qui a le plus évolué dans votre travail ces dernières années ?"
    }
  },

  // ═══════════════ Aéroport ═══════════════
  {
    id: 63,
    environnement: "Aéroport",
    profil: "Voyageur dans la file",
    humeur: "Excité",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Partager l'excitation du départ",
    theme: "Les destinations et l'évasion",
    zoomIn: {
      accroche: "Vous avez cette énergie de quelqu'un qui part pour quelque chose de bien, ça se voit sur votre visage — c'est les vacances ou un voyage spécial ?",
      relance: "Moi j'adore ce moment juste avant de partir. C'est quoi la destination qui vous fait le plus vibrer là maintenant ?"
    },
    contexte: {
      accroche: "Les files d'attente d'aéroport, c'est le seul endroit où tout le monde va quelque part de différent — vous décollez d'où à peu près ?",
      relance: "Moi je pars vers le sud. C'est quoi le meilleur voyage que vous ayez commencé depuis cet aéroport ?"
    },
    zoomOut: {
      accroche: "Il y a un truc unique dans les aéroports, cette promesse que tout est possible juste après le contrôle — vous le ressentez aussi ?",
      relance: "Moi je pourrais rester des heures à regarder les gens partir. C'est quoi le voyage qui a changé quelque chose en vous ?"
    }
  },
  {
    id: 64,
    environnement: "Aéroport",
    profil: "Passager en correspondance",
    humeur: "Épuisé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Fatigué",
    moment: "Soir",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Réconforter une attente pénible",
    theme: "Les galères de transit",
    zoomIn: {
      accroche: "Vous avez la tête de quelqu'un qui enchaîne les vols depuis trop longtemps — grosse correspondance vous aussi ?",
      relance: "Moi ça fait huit heures que je traîne ici. C'est quoi votre secret pour survivre à une escale interminable ?"
    },
    contexte: {
      accroche: "Ces zones de transit c'est un monde à part, hors du temps et hors du sol — vous venez d'où et vous allez où au juste ?",
      relance: "Moi je rentre d'un déplacement pro qui n'en finit pas. C'est quoi la pire escale que vous ayez vécue ?"
    },
    zoomOut: {
      accroche: "C'est fou comme voyager, censé être un rêve, peut devenir aussi épuisant — vous le vivez comment ce paradoxe ?",
      relance: "Moi je ne sais plus si j'aime voyager ou juste être arrivé. C'est quoi qui rend un voyage vraiment ressourçant pour vous ?"
    }
  },

  // ═══════════════ Gare / Quai SNCF ═══════════════
  {
    id: 65,
    environnement: "Gare / Quai SNCF",
    profil: "Voyageur sur le quai",
    humeur: "Détendu",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Amorcer un échange d'attente",
    theme: "Le charme du train",
    zoomIn: {
      accroche: "Vous avez l'air serein alors que tout le monde s'agite, ça fait du bien à voir — vous êtes un habitué de cette ligne ?",
      relance: "Moi je stresse toujours de rater mon train. C'est quoi votre astuce pour voyager aussi zen ?"
    },
    contexte: {
      accroche: "Il y a quelque chose d'apaisant dans l'attente sur un quai, entre deux trains — vous partez loin aujourd'hui ?",
      relance: "Moi je rejoins la famille pour le week-end. C'est quoi le trajet en train que vous préférez faire ?"
    },
    zoomOut: {
      accroche: "Le train c'est un peu le dernier endroit où on a le droit de ne rien faire, juste regarder défiler le paysage — vous en profitez comment ?",
      relance: "Moi je lis ou je regarde par la fenêtre pendant des heures. C'est quoi votre rituel une fois installé dans le train ?"
    }
  },
  {
    id: 66,
    environnement: "Gare / Quai SNCF",
    profil: "Voyageuse pressée et inquiète",
    humeur: "Stressée",
    ageGroupe: "Tous",
    genre: "Femme",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Rassurer avec tact",
    theme: "Les aléas des transports",
    zoomIn: {
      accroche: "Vous consultez le panneau toutes les dix secondes, je fais pareil quand je stresse — vous avez peur de rater une correspondance ?",
      relance: "Moi je suis jamais tranquille tant que je suis pas assis dans le train. C'est quoi qui vous met le plus la pression là ?"
    },
    contexte: {
      accroche: "Encore un matin où les affichages font n'importe quoi, on ne sait plus quel quai croire — vous cherchez quelle ligne ?",
      relance: "Moi je suis perdu avec tous ces changements de quai. C'est quoi votre technique pour ne pas paniquer quand tout est chamboulé ?"
    },
    zoomOut: {
      accroche: "On dépend tellement de ces trains pour nos vies entières que le moindre retard fait tout s'écrouler — vous le vivez comment ce stress-là ?",
      relance: "Moi j'ai appris à prévoir large pour ne plus subir. C'est quoi qui vous aiderait à voyager plus sereinement au quotidien ?"
    }
  },

  // ═══════════════ Hôtel ═══════════════
  {
    id: 67,
    environnement: "Hôtel",
    profil: "Client au petit-déjeuner",
    humeur: "Détendu",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Créer un lien entre voyageurs",
    theme: "Les découvertes en voyage",
    zoomIn: {
      accroche: "Vous avez le guide de la ville ouvert à côté de votre café, ça sent le programme chargé — vous découvrez le coin vous aussi ?",
      relance: "Moi je n'ai encore rien prévu. C'est quoi le premier endroit que vous comptez aller voir ?"
    },
    contexte: {
      accroche: "C'est toujours drôle ces petits-déjeuners d'hôtel où on est tous des voyageurs de passage — vous êtes là pour le travail ou le plaisir ?",
      relance: "Moi je profite d'un week-end prolongé. C'est quoi qui vous a amené dans cette ville précisément ?"
    },
    zoomOut: {
      accroche: "Il y a un truc particulier à se réveiller dans une ville qu'on ne connaît pas, tout est à explorer — vous aimez ça aussi voyager comme ça ?",
      relance: "Moi je me perds toujours volontairement le premier jour. C'est quoi votre façon à vous de découvrir une nouvelle ville ?"
    }
  },
  {
    id: 68,
    environnement: "Hôtel",
    profil: "Concierge de l'hôtel",
    humeur: "Serviable",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Obtenir de vraies bonnes adresses",
    theme: "Les secrets de la ville",
    zoomIn: {
      accroche: "Vous devez connaître cette ville par cœur à force de conseiller les gens — vous êtes du coin depuis toujours ?",
      relance: "Moi je veux fuir les pièges à touristes. C'est quoi l'adresse que vous donnez seulement aux gens qui la méritent ?"
    },
    contexte: {
      accroche: "Un bon concierge vaut tous les guides du monde, on le sait entre voyageurs avertis — c'est quoi votre spécialité, les restos, les balades ?",
      relance: "Moi je cherche un truc authentique pour ce soir. C'est quoi l'endroit où vous iriez vous-même après votre service ?"
    },
    zoomOut: {
      accroche: "Vous voyez défiler des gens du monde entier, ça doit donner une drôle de vision des voyageurs — ils cherchent tous la même chose au fond ?",
      relance: "Moi je crois qu'on voyage tous pour se sentir un peu vivants. C'est quoi la plus belle rencontre que ce métier vous a offerte ?"
    }
  },

  // ═══════════════ Transport en Commun ═══════════════
  {
    id: 69,
    environnement: "Transport en Commun",
    profil: "Étudiant plongé dans un livre",
    humeur: "Absorbé",
    ageGroupe: "Jeune",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Rebondir sur une passion visible",
    theme: "Les lectures et les idées",
    zoomIn: {
      accroche: "Vous êtes tellement dans votre bouquin que vous avez failli rater l'arrêt, ça doit être bon — c'est quoi que vous lisez ?",
      relance: "Moi je cherche justement ma prochaine lecture. C'est quoi le livre qui vous a le plus marqué récemment ?"
    },
    contexte: {
      accroche: "Le transport c'est le seul moment où on arrive vraiment à lire sans être dérangé — enfin, sauf par des curieux comme moi — vous faites ce trajet souvent ?",
      relance: "Moi je n'arrive jamais à me concentrer dans le bruit. C'est quoi votre secret pour vous plonger dans un livre au milieu de tout ça ?"
    },
    zoomOut: {
      accroche: "C'est rare de voir encore quelqu'un lire un vrai livre plutôt que scroller sur son téléphone — vous êtes un résistant ?",
      relance: "Moi je passe trop de temps sur mon écran, ça me déprime. C'est quoi qui vous a gardé accroché à la lecture ?"
    }
  },
  {
    id: 70,
    environnement: "Transport en Commun",
    profil: "Personne avec écouteurs",
    humeur: "Distante",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Soir",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Aborder sans être intrusif",
    theme: "La bulle du trajet",
    zoomIn: {
      accroche: "Désolé de percer votre bulle une seconde — vous avez l'air à fond dans votre musique, ça doit être une sacrée playlist pour tenir ce trajet ?",
      relance: "Moi la musique c'est ma survie dans les transports. C'est quoi qui tourne en boucle chez vous en ce moment ?"
    },
    contexte: {
      accroche: "On est tous chacun dans notre coin avec nos écouteurs, c'est devenu la règle tacite du transport — vous rentrez du boulot vous aussi ?",
      relance: "Moi cette ligne me pompe toute mon énergie le soir. C'est quoi qui vous aide à décompresser sur le trajet du retour ?"
    },
    zoomOut: {
      accroche: "C'est fou comme on peut être à trente collés les uns aux autres et pourtant chacun dans son monde — ça vous frappe aussi parfois ?",
      relance: "Moi je trouve ça un peu triste au fond. C'est quoi qui vous ferait lever les yeux et parler à un inconnu, comme là ?"
    }
  },

  // ═══════════════ Librairie ═══════════════
  {
    id: 71,
    environnement: "Librairie",
    profil: "Lecteur dans un rayon",
    humeur: "Pensif",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Échanger sur une passion commune",
    theme: "Les coups de cœur littéraires",
    zoomIn: {
      accroche: "Vous tournez autour de ce rayon depuis un moment, comme quelqu'un qui hésite entre trop de bonnes options — vous cherchez un titre précis ?",
      relance: "Moi je repars toujours avec trois livres que je n'avais pas prévus. C'est quoi le dernier qui vous a scotché ?"
    },
    contexte: {
      accroche: "Cette librairie a une sélection vraiment pointue, on sent qu'il y a quelqu'un de passionné derrière — vous venez souvent farfouiller ici ?",
      relance: "Moi je découvre l'endroit. C'est quoi le rayon où vous pourriez passer des heures ?"
    },
    zoomOut: {
      accroche: "Il y a un plaisir rare à choisir un livre en vrai, à le feuilleter, loin des algorithmes qui décident pour nous — vous êtes attaché à ça ?",
      relance: "Moi j'ai besoin de toucher les livres avant de choisir. C'est quoi qui fait qu'un bouquin vous appelle depuis une étagère ?"
    }
  },
  {
    id: 72,
    environnement: "Librairie",
    profil: "Client indécis aux nouveautés",
    humeur: "Hésitant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Soir",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Aider un choix en douceur",
    theme: "Le vertige du choix",
    zoomIn: {
      accroche: "Vous reposez et reprenez le même livre depuis cinq minutes, je connais ce dilemme par cœur — il vous tente mais quelque chose vous freine ?",
      relance: "Moi j'ai toujours peur de me tromper de lecture. C'est quoi qui vous fait franchir le pas pour un livre au final ?"
    },
    contexte: {
      accroche: "La table des nouveautés c'est un piège, tout a l'air génial et on ne sait plus où donner de la tête — vous cherchez pour vous ou pour offrir ?",
      relance: "Moi je dois trouver un cadeau et je sèche complètement. C'est quoi le livre que vous offririez les yeux fermés ?"
    },
    zoomOut: {
      accroche: "On a tellement de choix aujourd'hui pour tout que ça en devient paralysant, même pour un simple livre — vous ressentez ça aussi ?",
      relance: "Moi trop d'options me bloquent complètement. C'est quoi votre méthode pour vous décider sans y passer la soirée ?"
    }
  },

  // ═══════════════ Restaurant ═══════════════
  {
    id: 73,
    environnement: "Restaurant",
    profil: "Client à la table voisine",
    humeur: "Convivial",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Soir",
    centreInteret: "Social",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Créer un lien entre tables",
    theme: "Le plaisir de la table",
    zoomIn: {
      accroche: "Votre plat a l'air incroyable, on n'a pas pu s'empêcher de loucher dessus — c'est quoi que vous avez pris ?",
      relance: "Moi je n'arrive jamais à choisir sur une carte. C'est quoi votre technique pour ne pas regretter votre commande ?"
    },
    contexte: {
      accroche: "Cet endroit a une ambiance vraiment chaleureuse, on se sent bien tout de suite — vous êtes des habitués ou vous découvrez comme nous ?",
      relance: "Moi c'est ma première fois ici. C'est quoi le plat de la maison qu'il faut absolument goûter d'après vous ?"
    },
    zoomOut: {
      accroche: "Il n'y a rien de tel qu'un bon repas pour rassembler les gens, c'est un peu universel ça — vous êtes plutôt bonne table vous aussi ?",
      relance: "Moi les meilleurs souvenirs sont toujours autour d'un repas. C'est quoi le dernier resto qui vous a vraiment marqué ?"
    }
  },
  {
    id: 74,
    environnement: "Restaurant",
    profil: "Chef qui sort en salle",
    humeur: "Passionné",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Soir",
    centreInteret: "Gastronomie",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Complimenter et apprendre",
    theme: "La cuisine et le métier",
    zoomIn: {
      accroche: "On voit tout de suite la fierté du chef dans votre façon de présenter les plats — ce plat de ce soir, c'est une création à vous ?",
      relance: "Moi je serais incapable d'inventer un plat. C'est quoi qui vous inspire quand vous imaginez une nouvelle recette ?"
    },
    contexte: {
      accroche: "C'est rare qu'un chef prenne le temps de venir en salle, ça fait plaisir — grosse soirée en cuisine ce soir ?",
      relance: "Moi j'imagine le stress d'un service complet. C'est quoi le plus dur à gérer un soir d'affluence ?"
    },
    zoomOut: {
      accroche: "La gastronomie française est un vrai patrimoine, vous devez porter ça avec une certaine responsabilité — vous le vivez comment ?",
      relance: "Moi je trouve qu'on redécouvre le goût du bien manger. C'est quoi qui a le plus changé dans votre métier ces dernières années ?"
    }
  },

  // ═══════════════ Taxi / VTC ═══════════════
  {
    id: 75,
    environnement: "Taxi / VTC",
    profil: "Chauffeur peu bavard",
    humeur: "Réservé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Fatigué",
    moment: "Soir",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Briser un silence poli",
    theme: "Les longues journées au volant",
    zoomIn: {
      accroche: "Je vous sens concentré sur la route, je vais pas vous embêter — mais dites, ça fait combien d'heures que vous roulez aujourd'hui ?",
      relance: "Moi je serais lessivé à votre place. C'est quoi qui vous aide à tenir sur les longues journées au volant ?"
    },
    contexte: {
      accroche: "La ville est calme à cette heure, ça doit être le seul moment tranquille de votre journée — vous préférez rouler le soir ?",
      relance: "Moi j'aime bien cette ambiance de ville la nuit. C'est quoi votre créneau préféré pour bosser ?"
    },
    zoomOut: {
      accroche: "Vous devez entendre toutes les histoires du monde dans votre voiture, une vraie boîte à confidences sur roues — ça vous marque parfois ?",
      relance: "Moi je trouve ça fascinant tous ces gens qui passent. C'est quoi la course la plus mémorable que vous ayez faite ?"
    }
  },
  {
    id: 76,
    environnement: "Taxi / VTC",
    profil: "Chauffeur passionné de sa ville",
    humeur: "Volubile",
    ageGroupe: "Tous",
    genre: "Homme",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Profiter d'un guide local",
    theme: "Les secrets de la ville",
    zoomIn: {
      accroche: "Vous connaissez visiblement chaque raccourci de cette ville, on se sent en sécurité — vous conduisez ici depuis toujours ?",
      relance: "Moi je débarque et je suis perdu. C'est quoi le quartier que vous préférez dans cette ville ?"
    },
    contexte: {
      accroche: "On passe devant des coins que je n'aurais jamais vus tout seul, c'est mieux qu'une visite guidée — c'est quoi ce bâtiment qu'on vient de croiser ?",
      relance: "Moi j'adore découvrir une ville par les yeux d'un local. C'est quoi l'endroit que les touristes ratent toujours ?"
    },
    zoomOut: {
      accroche: "Vous voyez la ville changer jour après jour depuis votre voiture, c'est un observatoire unique — elle va dans le bon sens d'après vous ?",
      relance: "Moi j'ai l'impression que tout va trop vite partout. C'est quoi qui a le plus changé dans votre ville ces dernières années ?"
    }
  },

  // ═══════════════ Piscine ═══════════════
  {
    id: 77,
    environnement: "Piscine",
    profil: "Nageur de la ligne voisine",
    humeur: "Motivé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Sport",
    proximite: "Croisé",
    audace: 1,
    objectif: "Partager la motivation sportive",
    theme: "L'effort et la régularité",
    zoomIn: {
      accroche: "Vous avez un crawl super régulier, ça se voit que c'est pas votre première longueur — vous nagez depuis longtemps ?",
      relance: "Moi je m'essouffle au bout de deux longueurs. C'est quoi le conseil qui vous a fait progresser le plus ?"
    },
    contexte: {
      accroche: "C'est le bon plan de venir tôt, on a presque les lignes pour nous — vous êtes du genre matinal pour nager ?",
      relance: "Moi j'essaie de m'y tenir mais c'est dur de sortir du lit. C'est quoi qui vous motive à venir aussi tôt ?"
    },
    zoomOut: {
      accroche: "La natation c'est le sport où on est vraiment seul avec sa tête, presque méditatif — vous venez pour le corps ou pour vous vider l'esprit ?",
      relance: "Moi je crois que je viens surtout pour débrancher. C'est quoi que la nage vous apporte au-delà du sport ?"
    }
  },
  {
    id: 78,
    environnement: "Piscine",
    profil: "Parent au bord du bassin",
    humeur: "Bienveillant",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Social",
    proximite: "Croisé",
    audace: 1,
    objectif: "Créer un lien entre parents",
    theme: "La vie de famille",
    zoomIn: {
      accroche: "On est plusieurs à surveiller nos petits du coin de l'œil, la routine du mercredi — c'est le vôtre celui qui saute partout ?",
      relance: "Moi le mien refuse de sortir de l'eau à chaque fois. C'est quoi votre technique pour les convaincre que le cours est fini ?"
    },
    contexte: {
      accroche: "Ces après-midis piscine avec les enfants, on se retrouve toujours les mêmes au bord du bassin — vous venez tous les mercredis vous aussi ?",
      relance: "Moi je commence à reconnaître les têtes. C'est quoi les autres activités que vous faites faire aux vôtres ?"
    },
    zoomOut: {
      accroche: "C'est fou tout ce qu'on trimballe nos enfants pour qu'ils s'épanouissent, on ne s'arrête jamais — vous le vivez comment cette course ?",
      relance: "Moi j'ai parfois l'impression d'être un taxi plus qu'un parent. C'est quoi qui compte le plus pour vous dans tout ça au fond ?"
    }
  },

  // ═══════════════ Boulangerie ═══════════════
  {
    id: 79,
    environnement: "Boulangerie",
    profil: "Client dans la file",
    humeur: "Pressé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 1,
    objectif: "Partager un moment de file",
    theme: "Les petits plaisirs du matin",
    zoomIn: {
      accroche: "Vous avez repéré les croissants qui sortent du four, moi aussi je les guette — vous craquez pour lesquels d'habitude ?",
      relance: "Moi j'hésite toujours entre pain au choc et croissant. C'est quoi votre péché mignon du matin ?"
    },
    contexte: {
      accroche: "Cette boulangerie a toujours la queue jusqu'à la porte, c'est bon signe — vous venez ici tous les matins vous aussi ?",
      relance: "Moi je viens de m'installer dans le quartier. C'est quoi la spécialité de la maison qu'il faut absolument tester ?"
    },
    zoomOut: {
      accroche: "Il y a un vrai bonheur simple dans le pain frais du matin, un truc qui traverse les générations — vous y êtes attaché aussi ?",
      relance: "Moi c'est mon petit rituel qui rend la journée meilleure. C'est quoi votre petit plaisir quotidien à vous ?"
    }
  },
  {
    id: 80,
    environnement: "Boulangerie",
    profil: "Habitué du matin",
    humeur: "Jovial",
    ageGroupe: "Senior",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Social",
    proximite: "Habitué",
    audace: 1,
    objectif: "Nouer un lien de quartier",
    theme: "Les habitudes et le voisinage",
    zoomIn: {
      accroche: "On dirait que la boulangère connaît déjà votre commande par cœur, ça c'est le vrai statut d'habitué — vous venez ici depuis des années ?",
      relance: "Moi je rêve d'être reconnu comme ça quelque part. C'est quoi qui fait qu'on s'attache à un commerce de quartier ?"
    },
    contexte: {
      accroche: "C'est un peu le cœur du quartier ces boulangeries, on y croise toujours du monde qu'on connaît — vous habitez le coin depuis longtemps ?",
      relance: "Moi je découvre le quartier. C'est quoi qui a le plus de charme ici selon un ancien comme vous ?"
    },
    zoomOut: {
      accroche: "Ces petits commerces qui résistent, c'est ce qui fait qu'un quartier reste vivant plutôt qu'anonyme — vous le ressentez comme ça ?",
      relance: "Moi je trouve ça précieux, ces lieux où on se parle encore. C'est quoi qui a le plus changé dans le quartier à vos yeux ?"
    }
  },

  // ═══════════════ Banque / Agence ═══════════════
  {
    id: 81,
    environnement: "Banque / Agence",
    profil: "Personne dans la file d'attente",
    humeur: "Agacée",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Désamorcer l'agacement partagé",
    theme: "La patience des démarches",
    zoomIn: {
      accroche: "On a tous les deux cette tête de gens qui pensaient en avoir pour cinq minutes — vous êtes là depuis longtemps aussi ?",
      relance: "Moi je venais pour un truc censé être rapide. C'est quoi votre astuce pour ne pas péter un câble dans ces files ?"
    },
    contexte: {
      accroche: "C'est incroyable qu'il faille encore se déplacer et attendre pour ce genre de démarche en 2024 — vous gérez tout en agence vous aussi ?",
      relance: "Moi je fais un maximum en ligne mais parfois pas le choix. C'est quoi qui vous oblige à venir sur place aujourd'hui ?"
    },
    zoomOut: {
      accroche: "On passe un temps fou dans ces démarches administratives sans fin, c'est un peu le prix de la vie moderne — vous vivez ça comment ?",
      relance: "Moi ça me déprime toute cette paperasse. C'est quoi qui vous simplifierait vraiment la vie si ça existait ?"
    }
  },
  {
    id: 82,
    environnement: "Banque / Agence",
    profil: "Client au guichet voisin",
    humeur: "Posé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 1,
    objectif: "Amorcer un échange simple",
    theme: "Les projets et l'argent",
    zoomIn: {
      accroche: "Vous avez l'air de quelqu'un qui gère ses affaires tranquillement, sans stress — vous venez pour un projet ou juste de la routine ?",
      relance: "Moi je viens de me lancer dans un projet un peu fou. C'est quoi votre rapport à ces grandes décisions financières ?"
    },
    contexte: {
      accroche: "C'est calme ce matin, on est loin de la cohue habituelle — vous avez trouvé le bon créneau pour éviter l'attente ?",
      relance: "Moi je viens toujours à l'ouverture pour ça. C'est quoi votre truc pour que ces passages en agence soient les moins pénibles ?"
    },
    zoomOut: {
      accroche: "On a tous un rapport compliqué à l'argent, entre le nécessaire et l'angoisse — vous êtes plutôt fourmi ou vous profitez du présent ?",
      relance: "Moi j'oscille entre les deux sans arrêt. C'est quoi votre philosophie pour vivre bien sans passer sa vie à compter ?"
    }
  },

  // ═══════════════ Galerie d'Art ═══════════════
  {
    id: 83,
    environnement: "Galerie d'Art",
    profil: "Visiteur devant une toile",
    humeur: "Contemplatif",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Partager une émotion artistique",
    theme: "L'art et le ressenti",
    zoomIn: {
      accroche: "Vous êtes captivé par cette toile, ça se voit — moi je reste devant sans savoir ce que ça me fait, c'est quoi qui vous touche là-dedans ?",
      relance: "Moi j'ai toujours peur de ne pas comprendre l'art. C'est quoi votre façon de regarder une œuvre pour vraiment la ressentir ?"
    },
    contexte: {
      accroche: "Cette expo a une vraie cohérence, on sent une intention forte du début à la fin — vous connaissiez déjà le travail de l'artiste ?",
      relance: "Moi je suis venu un peu par hasard. C'est quoi l'œuvre de la galerie qui vous a le plus arrêté ?"
    },
    zoomOut: {
      accroche: "On vient chercher quelque chose de particulier dans l'art, une émotion qu'on ne trouve pas ailleurs — c'est quoi qui vous y ramène vous ?",
      relance: "Moi je crois que je cherche à être bousculé. C'est quoi la dernière œuvre qui vous a vraiment remué au fond ?"
    }
  },
  {
    id: 84,
    environnement: "Galerie d'Art",
    profil: "Artiste exposant",
    humeur: "Sensible",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Haute",
    moment: "Soir",
    centreInteret: "Culture",
    proximite: "Inconnu",
    audace: 2,
    objectif: "Aller à la rencontre du créateur",
    theme: "Le processus créatif",
    zoomIn: {
      accroche: "Attendez, c'est vous l'artiste derrière tout ça ? On sent une vraie signature, une patte — c'est quoi qui vous a mené à ce style ?",
      relance: "Moi je suis fasciné par ceux qui créent. C'est quoi le déclic qui vous a fait devenir artiste ?"
    },
    contexte: {
      accroche: "Ça doit être vertigineux de voir des inconnus face à vos œuvres, chacun y projetant sa propre histoire — vous le vivez comment ce soir de vernissage ?",
      relance: "Moi je n'oserais jamais m'exposer comme ça. C'est quoi le plus dur quand on montre son travail au public ?"
    },
    zoomOut: {
      accroche: "Vivre de son art aujourd'hui c'est un vrai pari, entre la passion et la réalité — vous arrivez à tenir cet équilibre ?",
      relance: "Moi j'admire ceux qui suivent leur voie malgré tout. C'est quoi qui vous fait continuer même dans les moments de doute ?"
    }
  },

  // ═══════════════ Ascenseur de Bureaux ═══════════════
  {
    id: 85,
    environnement: "Ascenseur de Bureaux",
    profil: "Personne pressée entre deux étages",
    humeur: "Tendue",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Quotidien",
    proximite: "Croisé",
    audace: 2,
    objectif: "Détendre un trajet express",
    theme: "Le rush du matin",
    zoomIn: {
      accroche: "Vous avez la course du matin dans le regard, café dans une main, téléphone dans l'autre — grosse journée qui vous attend ?",
      relance: "Moi j'ai l'impression de commencer déjà à la bourre. C'est quoi votre carburant pour tenir un matin chargé ?"
    },
    contexte: {
      accroche: "Ces vingt secondes d'ascenseur, c'est le seul moment de calme forcé de la matinée — vous montez tout en haut vous aussi ?",
      relance: "Moi je suis au dernier, le temps d'un soupir avant l'open space. C'est quoi le service où vous filez comme ça ?"
    },
    zoomOut: {
      accroche: "C'est fou ce rythme qu'on s'impose tous, à courir dès la première minute de la journée — vous arrivez à décrocher parfois ?",
      relance: "Moi j'ai du mal à lever le pied. C'est quoi qui vous permet vraiment de souffler dans une semaine chargée ?"
    }
  },
  {
    id: 86,
    environnement: "Ascenseur de Bureaux",
    profil: "Nouveau venu qui cherche son étage",
    humeur: "Hésitant",
    ageGroupe: "Jeune",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Social",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Accueillir et rassurer",
    theme: "Les premiers jours",
    zoomIn: {
      accroche: "Vous hésitez sur les boutons, je parie que c'est un de vos premiers jours ici — je me trompe ?",
      relance: "Moi je me souviens d'être arrivé complètement perdu. C'est quoi le poste que vous venez de décrocher ?"
    },
    contexte: {
      accroche: "Ce bâtiment est un vrai labyrinthe au début, tout le monde s'y perd la première semaine — vous cherchez quel service ?",
      relance: "Moi j'ai mis un mois à trouver la cafèt. C'est quoi qui vous aiderait le plus à prendre vos marques ici ?"
    },
    zoomOut: {
      accroche: "Les premiers jours dans un nouveau boulot, c'est un mélange d'excitation et de trac, ça remue — vous le vivez comment là ?",
      relance: "Moi j'adore et je déteste ces débuts à la fois. C'est quoi qui vous a donné envie de rejoindre cette boîte ?"
    }
  },

  // ═══════════════ Bureau de Poste ═══════════════
  {
    id: 87,
    environnement: "Bureau de Poste",
    profil: "Personne dans la file",
    humeur: "Résignée",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Fermé",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Quotidien",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Alléger une attente commune",
    theme: "Les files interminables",
    zoomIn: {
      accroche: "Vous avez l'air aussi résigné que moi devant cette file qui n'avance pas — vous venez pour un colis vous aussi ?",
      relance: "Moi je viens récupérer un truc censé être livré chez moi. C'est quoi votre technique pour prendre votre mal en patience ici ?"
    },
    contexte: {
      accroche: "La poste, c'est le dernier endroit où le temps semble s'être arrêté, un guichet ouvert sur trois — vous y passez souvent ?",
      relance: "Moi j'évite au maximum mais là pas le choix. C'est quoi le meilleur horaire pour éviter cette cohue selon vous ?"
    },
    zoomOut: {
      accroche: "C'est marrant, on commande tout en ligne mais on finit toujours par revenir faire la queue ici — le tout numérique n'a pas tout résolu hein ?",
      relance: "Moi je trouve qu'on a perdu au change parfois. C'est quoi le service à l'ancienne qui vous manque un peu aujourd'hui ?"
    }
  },
  {
    id: 88,
    environnement: "Bureau de Poste",
    profil: "Petit commerçant qui envoie ses colis",
    humeur: "Affairé",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Haute",
    moment: "Matin",
    centreInteret: "Travail",
    proximite: "Croisé",
    audace: 1,
    objectif: "S'intéresser à l'activité de l'autre",
    theme: "L'entreprise et la débrouille",
    zoomIn: {
      accroche: "Vous avez une pile de colis impressionnante, ça sent le petit business qui tourne — c'est vous qui vendez tout ça ?",
      relance: "Moi je rêve de me lancer dans quelque chose à moi. C'est quoi que vous vendez, si c'est pas indiscret ?"
    },
    contexte: {
      accroche: "Vous avez l'air d'être un habitué du comptoir, ça se voit que l'envoi de colis fait partie de votre quotidien — c'est le rush du matin ?",
      relance: "Moi je galère à envoyer un seul colis. C'est quoi votre organisation pour gérer tous ces envois sans y passer la journée ?"
    },
    zoomOut: {
      accroche: "Monter son activité aujourd'hui c'est un sacré défi mais aussi une belle liberté — vous le vivez comment cette aventure d'indépendant ?",
      relance: "Moi j'hésite à sauter le pas depuis des années. C'est quoi le conseil que vous donneriez à quelqu'un qui veut se lancer ?"
    }
  },

  // ═══════════════ Salle d'Embarquement ═══════════════
  {
    id: 89,
    environnement: "Salle d'Embarquement",
    profil: "Grand voyageur détendu",
    humeur: "Serein",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Ouvert",
    energie: "Basse",
    moment: "Après-midi",
    centreInteret: "Voyage",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Échanger des histoires de voyage",
    theme: "L'expérience du voyage",
    zoomIn: {
      accroche: "Vous attendez l'embarquement avec un calme olympien, ça sent le voyageur aguerri — vous prenez l'avion souvent ?",
      relance: "Moi je stresse encore à chaque fois. C'est quoi votre secret pour rester aussi zen avant un vol ?"
    },
    contexte: {
      accroche: "Ces salles d'embarquement ont un charme bizarre, ce moment suspendu juste avant de partir — vous décollez vers où aujourd'hui ?",
      relance: "Moi je pars pour un endroit dont je rêve depuis longtemps. C'est quoi la destination qui vous a le plus marqué jusqu'ici ?"
    },
    zoomOut: {
      accroche: "Voyager change vraiment la façon de voir le monde, ça élargit tout — c'est ce que vous êtes venu chercher dans les voyages vous aussi ?",
      relance: "Moi chaque voyage me transforme un peu. C'est quoi le pays qui vous a le plus bouleversé vos certitudes ?"
    }
  },
  {
    id: 90,
    environnement: "Salle d'Embarquement",
    profil: "Voyageur qui travaille sur son laptop",
    humeur: "Concentré",
    ageGroupe: "Tous",
    genre: "Indéfini",
    vibe: "Neutre",
    energie: "Basse",
    moment: "Matin",
    centreInteret: "Travail",
    proximite: "Inconnu",
    audace: 1,
    objectif: "Aborder un pro en déplacement",
    theme: "Le travail nomade",
    zoomIn: {
      accroche: "Vous bossez jusqu'à la dernière minute avant d'embarquer, le vrai réflexe du pro en déplacement — grosse échéance qui vous poursuit ?",
      relance: "Moi je n'arrive jamais à travailler dans ces conditions. C'est quoi votre secret pour rester concentré au milieu de tout ce bruit ?"
    },
    contexte: {
      accroche: "Les salles d'embarquement sont devenues des bureaux à ciel ouvert, on est plusieurs à pianoter là — vous voyagez pour le travail vous aussi ?",
      relance: "Moi j'enchaîne les déplacements en ce moment. C'est quoi qui rend un voyage d'affaires supportable pour vous ?"
    },
    zoomOut: {
      accroche: "On peut bosser de partout aujourd'hui, mais du coup on ne décroche jamais vraiment — vous arrivez à poser des limites vous ?",
      relance: "Moi la frontière boulot-perso a complètement explosé. C'est quoi votre astuce pour vraiment déconnecter quand il le faut ?"
    }
  }
];
