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
    ageGroupe: "Adulte",
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
  }
];
