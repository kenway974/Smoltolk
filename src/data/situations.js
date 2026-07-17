// Structure : wizard fields (matching) + pyramide Zoom In / Contexte / Zoom Out.
// Chaque niveau (zoomIn / contexte / zoomOut) est un TABLEAU de variantes { accroche, relance }.
// La carte permet de faire défiler les variantes. Au moins 2 variantes par niveau.
//
// Wizard fields :
//   centreInteret — sujet principal (filtre StepInteret)
//   vibe          — Ouvert / Neutre / Fermé
//   ageGroupe     — Jeune / Adulte / Senior / Tous
//   genre         — Homme / Femme / Indéfini
//   proximite     — Inconnu / Croisé / Connaissance / Habitué / Proche
//   audace        — 1 (Prudent) · 2 (Confiant) · 3 (Audacieux)
//   moment        — Matin / Après-midi / Soir / Tous

export const SITUATIONS_DATA = [
  {
    "id": 1,
    "environnement": "Boutique de Luxe",
    "profil": "Vendeur Senior",
    "humeur": "Condescendant",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Briser la glace",
    "theme": "Le standing du lieu",
    "zoomIn": [
      {
        "accroche": "Votre stylo n'a pas l'air d'être là par hasard — c'est un outil de travail ou une signature personnelle ?",
        "relance": "Moi j'écris encore avec ce qui traîne, j'avoue. C'est quoi le premier détail qui vous fait juger quelqu'un qui entre ici ?"
      },
      {
        "accroche": "Votre nœud de cravate est réglé au millimètre — c'est une exigence maison ou vous êtes déjà comme ça dans la vie ?",
        "relance": "Moi le matin je me bats déjà avec mes lacets, alors une cravate pareille… C'est quoi le premier truc qui trahit quelqu'un qui n'a pas l'habitude de ces endroits ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Impressionnant, l'adresse — l'agencement est pensé au millimètre. Vous gérez la mise en scène ou ça vient d'en haut ?",
        "relance": "Je bosse dans un truc où l'ambiance compte aussi et je rame. C'est quoi le détail que personne ne remarque mais qui change tout ?"
      },
      {
        "accroche": "Il y a un silence presque feutré ici, on baisse la voix sans même s'en rendre compte — c'est voulu, cette ambiance ?",
        "relance": "Moi je bosse dans un endroit où ça klaxonne toute la journée, ça change tout sur l'humeur. Comment on installe une atmosphère pareille sans que ce soit intimidant ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un mardi après-midi, j'imagine que vous croisez une tout autre clientèle qu'un samedi — la vibe doit changer du tout au tout.",
        "relance": "Moi les lundis je suis inutilisable avant midi. Y a un jour où vous savez d'avance que ça va être électrique ?"
      },
      {
        "accroche": "Dans un endroit comme ici, on a l'impression que personne n'est jamais pressé — le temps a l'air de ralentir dès qu'on passe la porte.",
        "relance": "Moi je cours partout du matin au soir, ça me fait tout drôle. Les gens qui entrent sont vraiment plus posés ou ils font semblant comme moi ?"
      }
    ]
  },
  {
    "id": 2,
    "environnement": "Supermarché",
    "profil": "Caissière",
    "humeur": "Débordée",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer de la sympathie",
    "theme": "L'affluence du jour",
    "zoomIn": [
      {
        "accroche": "Vous gardez le sourire alors que le tapis n'arrête pas — c'est naturel ou c'est de la haute discipline ?",
        "relance": "Moi à votre place j'aurais craqué avant la pause. C'est quoi votre astuce pour tenir quand ça défile sans fin ?"
      },
      {
        "accroche": "Vos mains vont plus vite que le tapis, j'ai du mal à suivre du regard — ça vient tout seul avec le temps, ce rythme ?",
        "relance": "Moi je mettrais trois heures à faire votre matinée. C'est quoi le geste qu'on finit par faire les yeux fermés à ce poste ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Belle journée pour battre un record d'articles scannés, hein — c'est toujours la cohue à cette heure ?",
        "relance": "Je tombe toujours sur le pire créneau, on dirait. C'est quoi le moment où le magasin respire un peu dans la journée ?"
      },
      {
        "accroche": "Le matin les gens ont l'air d'acheter tous la même chose, le café, le pain, le truc oublié — vous voyez défiler les mêmes paniers ?",
        "relance": "Moi je débarque toujours en catastrophe pour un article que j'ai zappé. Y a une heure où d'un coup ça se calme vraiment ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vu la tête de tout le monde dans la file, j'ai l'impression qu'on a tous eu une semaine de quarante-huit heures.",
        "relance": "Moi je viens clairement chercher du réconfort en chariot. Les gens sont plus tendus en fin de semaine ou c'est un mythe ?"
      },
      {
        "accroche": "À cette heure tout le monde dans la file a encore un pied dans le lit, moi le premier — le magasin se réveille en même temps que nous, on dirait.",
        "relance": "Moi tant que j'ai pas mon café je réponds à peine. Les gens sont plus doux le matin ou plus ronchons que l'après-midi, franchement ?"
      }
    ]
  },
  {
    "id": 3,
    "environnement": "Dans la rue",
    "profil": "Passant avec chien",
    "humeur": "Calme",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Nature",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Engager une conversation légère",
    "theme": "L'animal",
    "zoomIn": [
      {
        "accroche": "Il a une démarche qui décide de tout — c'est vous ou lui qui mène la balade ?",
        "relance": "J'ai toujours rêvé d'un chien aussi sûr de lui, le mien serait une catastrophe. Il a quel caractère au quotidien ?"
      },
      {
        "accroche": "Il vous jette un œil toutes les cinq secondes, comme s'il vérifiait que vous suivez — il est toujours aussi attentif à vous ?",
        "relance": "Moi j'ai jamais réussi à avoir cette complicité avec un animal. Ça s'est fait comment entre vous, tout de suite ou avec le temps ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est un bon coin pour promener, le quartier — vous avez vos itinéraires ou vous improvisez ?",
        "relance": "Je cherche justement des coins sympas par ici, je viens d'arriver. Y a un endroit que tous les promeneurs de chiens connaissent ?"
      },
      {
        "accroche": "À cette heure le quartier est encore à vous, c'est le calme parfait pour une balade — c'est votre moment préféré pour sortir ?",
        "relance": "Moi je suis pas du matin mais là je comprends l'appel. Vous sortez toujours si tôt ou c'est lui qui donne l'horaire ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il fait un temps à tout lâcher pour rester dehors — c'est rare une éclaircie pareille en ce moment.",
        "relance": "Moi j'en profite, demain c'est annoncé pourri. Vous sortez quoi qu'il arrive ou la météo décide pour vous ?"
      },
      {
        "accroche": "Il y a un truc dans les matins comme ça, la ville pas encore lancée, tout est suspendu — on dirait que seuls les gens avec un chien connaissent ce moment.",
        "relance": "Moi je le rate presque tout le temps, ce calme-là. C'est ça qui vous fait sortir ou vous le feriez même sous la pluie ?"
      }
    ]
  },
  {
    "id": 4,
    "environnement": "Café / Brasserie",
    "profil": "Barista",
    "humeur": "Agacé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Fatigué",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Détendre l'atmosphère",
    "theme": "La pression du service",
    "zoomIn": [
      {
        "accroche": "Votre tatouage sur l'avant-bras a l'air d'avoir une histoire — c'est un truc qui veut dire quelque chose ?",
        "relance": "Moi j'hésite depuis des années, j'ose pas franchir le pas. Le premier, on le choisit comment sans le regretter ?"
      },
      {
        "accroche": "Votre tablier a vu passer des litres de café, on dirait qu'il raconte toute votre matinée — le gros du rush est déjà passé ?",
        "relance": "Moi rien qu'à vous voir enchaîner je suis fatigué. C'est quoi le pire, le monde qui s'entasse ou les commandes impossibles ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Je vois que la machine vous obéit mieux que les clients — c'est toujours ce rush à cette heure ?",
        "relance": "Je vais pas en rajouter, juste un expresso. C'est quoi le coup de feu que vous redoutez le plus dans la journée ?"
      },
      {
        "accroche": "Je vois toujours les mêmes têtes accoudées au comptoir le matin — ils font partie du décor, vos habitués ?",
        "relance": "Je vais pas m'incruster, juste un serré. Ils commandent tous pareil depuis des années ou ils vous surprennent encore ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On est jeudi et tout le monde a déjà la tête au week-end — vous le sentez à l'ambiance des commandes ?",
        "relance": "Moi je carbure au café pour finir la semaine. Les gens sont plus cool le vendredi ou juste plus pressés ?"
      },
      {
        "accroche": "Le matin tout le monde débarque avec la même urgence dans le regard, comme si le café était vital — vous le sentez à l'énergie des gens ?",
        "relance": "Moi tant que j'ai pas la première gorgée je parle à personne. Les gens sont plus supportables après leur café ou c'est peine perdue ?"
      }
    ]
  },
  {
    "id": 5,
    "environnement": "Immeuble de Bureaux",
    "profil": "Agent de Sécurité",
    "humeur": "Neutre",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Humaniser le contact",
    "theme": "La routine du poste",
    "zoomIn": [
      {
        "accroche": "Vous avez une montre qui a l'air de tout faire sauf le café — c'est un choix de geek ou de fonction ?",
        "relance": "Moi je suis resté à la montre qui donne juste l'heure, j'assume. Ça sert vraiment au quotidien tous ces gadgets ?"
      },
      {
        "accroche": "Vous avez un thermos taillé pour une longue garde — c'est le carburant obligatoire du poste ?",
        "relance": "Moi sans un café toutes les deux heures je m'endors debout. Comment on reste vigilant sur des heures aussi longues sans bouger d'un pouce ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez le badge qui sait tout ce qui se passe ici — vous voyez vraiment défiler toute la vie du bâtiment ?",
        "relance": "Moi je fais que passer et je connais déjà personne. Au bout de combien de temps on reconnaît les habitudes de chacun ?"
      },
      {
        "accroche": "C'est l'heure de pointe des arrivées, ça défile devant vous sans un regard — vous, vous voyez vraiment tout passer depuis votre poste ?",
        "relance": "Moi je fonce vers l'ascenseur sans lever la tête, comme les autres j'imagine. On finit par reconnaître qui est en retard rien qu'à sa démarche ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un lundi matin comme ça, j'imagine que vous voyez passer une sacrée galerie de têtes pas réveillées.",
        "relance": "Moi le lundi je carbure à rien, ça se voit sûrement. C'est le jour le plus mou de la semaine ici aussi ?"
      },
      {
        "accroche": "Juste avant que tout le monde débarque, le hall doit être d'un calme total — c'est un peu le calme avant la tempête, non ?",
        "relance": "Moi j'adorerais ce moment où tout est encore silencieux. C'est votre instant préféré de la journée ou c'est là que l'ennui guette le plus ?"
      }
    ]
  },
  {
    "id": 6,
    "environnement": "Marché en plein air",
    "profil": "Maraîcher",
    "humeur": "Enthousiaste",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Gastronomie",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Valoriser le savoir-faire",
    "theme": "La saisonnalité",
    "zoomIn": [
      {
        "accroche": "Vos mains disent que vous touchez vraiment la terre — vous produisez vous-même ou vous revendez ?",
        "relance": "Moi je fais crever un cactus en deux semaines, c'est dire. Ça s'apprend ou faut être tombé dedans petit ?"
      },
      {
        "accroche": "Vous rangez votre étal comme un tableau, tout est aligné au cordeau — c'est de l'habitude ou vous y tenez vraiment ?",
        "relance": "Moi mon frigo c'est le chaos total. Ça change quelque chose sur les ventes, une belle présentation, ou les gens s'en fichent au fond ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ces tomates ont une tête à avoir poussé sous un vrai soleil — c'est le bon moment pour quoi en ce moment ?",
        "relance": "Je repars toujours avec la liste de mes erreurs culinaires d'ici. C'est quoi le produit de la semaine dont vous êtes le plus fier ?"
      },
      {
        "accroche": "Vous venez à peine de tout décharger, ça sent encore la fraîcheur du matin — c'est quoi qui est arrivé tout droit du champ aujourd'hui ?",
        "relance": "Moi j'achète toujours au pif sans savoir ce qui est vraiment de saison. C'est quoi le truc à prendre absolument cette semaine avant que ça passe ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Y a une énergie sur les marchés le matin qu'on trouve nulle part ailleurs — les gens sont d'humeur, ça change tout.",
        "relance": "Moi je viens autant pour l'ambiance que pour les courses. C'est plus vivant le samedi ou vous préférez les jours calmes ?"
      },
      {
        "accroche": "Il y a un truc rassurant à voir les saisons défiler sur un étal, ça rythme l'année mieux qu'un calendrier — vous le vivez comme ça ?",
        "relance": "Moi en supermarché je sais même plus c'est quoi la saison de rien. Y a un produit qui vous dit à chaque fois ça y est, c'est reparti ?"
      }
    ]
  },
  {
    "id": 7,
    "environnement": "Salle de Sport",
    "profil": "Coach sportif",
    "humeur": "Motivé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Sport",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Créer une connexion rapide",
    "theme": "Le cardio",
    "zoomIn": [
      {
        "accroche": "Vos chaussures ont l'air taillées pour le squat — c'est quelle marque ? Je galère à trouver une paire stable.",
        "relance": "Moi je soulève en baskets de ville, mes chevilles vont lâcher. Ça vaut vraiment l'investissement ou c'est du marketing ?"
      },
      {
        "accroche": "Vous avez une gourde format bidon de chantier — c'est du sérieux, l'hydratation, ou vous compensez le café du matin ?",
        "relance": "Moi je bois trois gorgées et j'oublie pendant deux heures. Ça compte vraiment tant que ça sur une séance ou c'est un mythe de coach ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez le regard de quelqu'un qui a déjà bouclé deux heures avant que j'arrive — vous vous entraînez ici depuis longtemps ?",
        "relance": "Je cherche à changer mes horaires, en fin de journée c'est invivable. C'est quoi le créneau où la salle est vraiment vide ?"
      },
      {
        "accroche": "Le matin la salle est presque vide, on peut enchaîner sans faire la queue aux machines — c'est votre créneau à vous aussi ?",
        "relance": "Moi je viens tôt surtout pour éviter le monde. Les gens du matin, c'est une petite team de réguliers ou ça tourne beaucoup ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Début de semaine, la salle déborde de bonnes résolutions — dans deux semaines y aura plus personne, comme toujours.",
        "relance": "Moi j'essaie de tenir cette fois, promis. Vous les voyez venir, ceux qui vont lâcher, rien qu'à l'énergie ?"
      },
      {
        "accroche": "Se lever pour transpirer avant même de bosser, franchement c'est une autre mentalité — l'énergie du matin ici, c'est pas la même que le soir, si ?",
        "relance": "Moi je me force et je suis fier après, mais qu'est-ce que c'est dur. Ceux qui viennent le matin tiennent mieux dans la durée, vous trouvez ?"
      }
    ]
  },
  {
    "id": 8,
    "environnement": "Parking / Livraison",
    "profil": "Livreur concurrent",
    "humeur": "Pressé",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Neutre",
    "energie": "Fatigué",
    "moment": "Après-midi",
    "centreInteret": "Travail",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Solidarité corporatiste",
    "theme": "Les galères du métier",
    "zoomIn": [
      {
        "accroche": "Votre diable a vu du pays, on dirait — vous êtes sur cette tournée depuis longtemps ?",
        "relance": "Moi le mien grince à chaque virage, je le maudis dix fois par jour. C'est quoi le matos qui change vraiment la vie sur ce métier ?"
      },
      {
        "accroche": "Votre scanner a l'air d'avoir rendu l'âme dix fois — c'est la boîte qui vous refile du matos préhistorique aussi ?",
        "relance": "Moi le mien plante toujours au pire moment, devant un client qui s'impatiente. C'est quoi qui vous fait perdre le plus de temps sur une tournée ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Troisième étage sans ascenseur, c'est jamais dans la fiche mais toujours dans la journée — vous faites quelle zone aujourd'hui ?",
        "relance": "On n'est pas dans la même boîte mais clairement dans la même douleur. C'est quoi le quartier que tout le monde redoute par ici ?"
      },
      {
        "accroche": "Se garer dans ce coin c'est déjà une mission à part entière — vous tournez longtemps avant de trouver une place, vous aussi ?",
        "relance": "Moi je me mets en double file en priant, à chaque arrêt. C'est quoi le secteur par ici où c'est mission impossible de se poser ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un vendredi, c'est l'enfer des livraisons partout — tout le monde veut son colis avant le week-end.",
        "relance": "Moi je compte les arrêts qui me restent comme un détenu. C'est quel jour le pire pour vous, niveau cadence ?"
      },
      {
        "accroche": "Cette heure de l'après-midi c'est le coup de moins bien, on court après le temps qui file — vous le sentez, ce creux, ou vous êtes lancé sans réfléchir ?",
        "relance": "Moi vers trois heures je carbure au sucre pour tenir. Vous avez un truc pour pas vous effondrer en plein milieu de tournée ?"
      }
    ]
  },
  {
    "id": 9,
    "environnement": "Pharmacie",
    "profil": "Pharmacien",
    "humeur": "Concentré",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Santé",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Alléger l'échange",
    "theme": "La file d'attente",
    "zoomIn": [
      {
        "accroche": "Vous avez le geste qui ne tremble jamais derrière le comptoir — c'est l'habitude ou c'est dans le tempérament ?",
        "relance": "Moi je perdrais la moitié des boîtes en cinq minutes. Comment on garde la tête froide avec trois personnes qui attendent ?"
      },
      {
        "accroche": "Vous déchiffrez ces ordonnances illisibles en une seconde — moi je vois des hiéroglyphes, c'est un talent que vous développez avec le temps ?",
        "relance": "Moi j'y comprends jamais rien à l'écriture des médecins. Vous les décodez à l'instinct ou y a un vrai code derrière ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous gérez trois files avec un calme chirurgical — c'est toujours comme ça le mercredi ou j'ai mal choisi mon créneau ?",
        "relance": "J'ai l'ordonnance mais j'ai perdu ma santé dans la queue. C'est quoi l'heure où on peut venir sans faire la guerre ?"
      },
      {
        "accroche": "L'après-midi ça a l'air plus posé qu'en fin de journée ici — c'est le bon moment pour venir sans se marcher dessus ?",
        "relance": "Moi je tombe toujours au pire moment, à la sortie des bureaux. Y a un créneau tranquille que les gens du quartier connaissent ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Avec le temps qui change, j'imagine que vous voyez débarquer tout le quartier enrhumé en même temps.",
        "relance": "Moi je sens que je vais y passer aussi, ça se joue à pas grand-chose. C'est la saison la plus folle pour vous, là ?"
      },
      {
        "accroche": "Tout le monde finit par passer ici tôt ou tard, c'est un peu le passage obligé du quartier — vous devez voir toute la vie des gens défiler.",
        "relance": "Moi je viens pour trois fois rien mais je repars toujours rassuré. Les gens viennent autant pour être écoutés que pour les médicaments, non ?"
      }
    ]
  },
  {
    "id": 10,
    "environnement": "Boutique de Luxe",
    "profil": "Client VIP",
    "humeur": "Pressé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Capter l'attention",
    "theme": "L'exclusivité",
    "zoomIn": [
      {
        "accroche": "Votre montre n'est pas un hasard — vous l'avez chinée ou c'est un coup de cœur assumé ?",
        "relance": "Moi j'y connais rien mais j'aimerais apprendre à reconnaître une belle pièce. On commence par regarder quoi ?"
      },
      {
        "accroche": "Vos souliers ne sortent pas d'une chaîne, ça se voit à trois mètres — c'est du sur-mesure ou vous avez juste l'œil pour dénicher ?",
        "relance": "Moi j'achète mes chaussures au feeling et je le regrette à chaque fois. On reconnaît une vraie belle paire à quoi, concrètement ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez l'air de savoir exactement ce que vous venez chercher — vous connaissez déjà la maison ou c'est une découverte ?",
        "relance": "Je traîne souvent ici juste pour l'œil, j'avoue. C'est quoi la pièce dont tout le monde parle en ce moment ?"
      },
      {
        "accroche": "Vous avez l'air du genre à passer par le rendez-vous privé plutôt que par la file — c'est comme ça qu'on est vraiment bien servi ici ?",
        "relance": "Moi je fais la queue comme tout le monde, j'y connais rien aux codes. C'est quoi qui fait basculer du statut de client lambda à celui d'habitué qu'on chouchoute ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un créneau pareil en pleine semaine, c'est presque calme — il faut viser ces heures-là pour être tranquille, non ?",
        "relance": "Moi je fuis les samedis bondés, ça me rend dingue. Vous aussi vous organisez tout pour éviter la foule ?"
      },
      {
        "accroche": "Au fond ce qui a de la valeur ici, c'est surtout ce qu'on ne trouve pas partout — c'est ça qui vous fait courir, la rareté ?",
        "relance": "Moi je cours plutôt après les bons plans, tout l'inverse. Une pièce rare, ça vaut vraiment le coup ou c'est surtout l'idée de l'avoir ?"
      }
    ]
  },
  {
    "id": 11,
    "environnement": "Chantier / Entrepôt",
    "profil": "Chef de chantier",
    "humeur": "Stressé",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Instaurer la confiance",
    "theme": "Les délais",
    "zoomIn": [
      {
        "accroche": "Votre casque a plus de stickers qu'un vieux skate — y en a un derrière chaque chantier ou c'est juste pour le style ?",
        "relance": "Moi je colle rien nulle part, trop indécis. C'est quoi le chantier qui vous a marqué au point d'y laisser une trace ?"
      },
      {
        "accroche": "Vous avez les plans roulés sous le bras comme un général avant l'assaut — c'est vous qui avez tout ce chantier en tête ?",
        "relance": "Moi je saurais même pas lire un plan à l'endroit. Tout ce qui se construit là, vous le visualisez déjà fini dans votre tête ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Je vous livre dans la fenêtre prévue — un truc de moins sur la liste. Le chantier il en est où, vous approchez de la livraison ?",
        "relance": "Je vois bien que vous jonglez avec dix urgences, je vais pas en rajouter. C'est quoi la phase qui vous stresse le plus, d'habitude ?"
      },
      {
        "accroche": "Ça démarre tôt et fort ici, tout le monde est déjà à fond dès le matin — c'est le meilleur moment pour avancer avant qu'il fasse trop chaud ?",
        "relance": "Moi je fais juste déposer et je repars, je vais pas vous freiner. C'est quoi le moment de la journée où tout peut déraper d'un coup ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Sur un planning comme ça, j'imagine que la météo décide la moitié de vos journées à votre place.",
        "relance": "Moi un peu de pluie et je suis déjà de mauvaise humeur. Vous arrivez à anticiper ou vous subissez au jour le jour ?"
      },
      {
        "accroche": "Sur un chantier j'ai l'impression que c'est une course permanente contre la montre, jamais une journée vraiment tranquille — c'est ça au quotidien ?",
        "relance": "Moi le stress des délais je le vis à ma petite échelle dans mon métier. Vous arrivez à décrocher le soir ou ça vous suit jusqu'à la maison ?"
      }
    ]
  },
  {
    "id": 12,
    "environnement": "Café / Brasserie",
    "profil": "Voisin de table télétravailleur",
    "humeur": "Concentré",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Briser l'isolement",
    "theme": "Le télétravail",
    "zoomIn": [
      {
        "accroche": "Votre casque a l'air de vous couper du monde entier — c'est le secret pour bosser dans le bruit ?",
        "relance": "Moi j'arrive pas à me concentrer sans, mais j'ai jamais trouvé le bon. Vous écoutez vraiment un truc ou c'est juste pour le silence ?"
      },
      {
        "accroche": "Votre ordi est couvert d'autocollants, ça raconte forcément un truc — vous bossez dans la tech ou c'est juste une collection ?",
        "relance": "Moi mon écran est vide et triste à côté du vôtre. C'est quoi votre domaine, pour vous installer comme ça au café tout l'après-midi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ça fait du bien de voir que je suis pas le seul à avoir fait du café mon bureau — vous venez souvent bosser ici ?",
        "relance": "Vos cinq onglets ouverts ont l'air aussi stressants que mon planning. C'est quoi votre table préférée pour être tranquille ?"
      },
      {
        "accroche": "L'après-midi ici c'est le bon compromis, assez de vie pour pas s'endormir mais pas trop bruyant — c'est pour ça que vous venez à cette heure ?",
        "relance": "Moi je fuis le silence de mon appart, ça me rend fou. Vous arrivez vraiment à être productif dans ce brouhaha ou vous faites semblant comme moi ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Y a une vibe particulière dans les cafés en pleine semaine — que des gens qui fuient leur bureau ou leur appart, on dirait.",
        "relance": "Moi je viens surtout pour pas devenir fou tout seul chez moi. Le télétravail vous a sauvé ou rendu un peu dingue aussi ?"
      },
      {
        "accroche": "Au fond on est une génération qui bosse un peu n'importe où, plus vraiment de frontière entre le bureau et le reste — ça vous va, vous, ce flou ?",
        "relance": "Moi je sais même plus quand ma journée commence ou s'arrête, honnêtement. Vous avez trouvé le moyen de mettre une limite ou vous bossez tout le temps ?"
      }
    ]
  },
  {
    "id": 13,
    "environnement": "Supermarché",
    "profil": "Client derrière en caisse",
    "humeur": "Impatient",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Fatigué",
    "moment": "Soir",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Désamorcer la tension",
    "theme": "La météo",
    "zoomIn": [
      {
        "accroche": "Votre veste est trempée — il s'est remis à tomber dehors, ou vous avez couru pour échapper à la file ?",
        "relance": "Moi j'ai oublié le parapluie comme un champion, encore une fois. C'est l'apocalypse dehors ou ça se calme ?"
      },
      {
        "accroche": "Votre parapluie dégouline encore, vous avez dû affronter le pire dehors — ça tombe vraiment des cordes là ?",
        "relance": "Moi j'ai renoncé au parapluie depuis longtemps, il se retourne à chaque bourrasque. Vous avez trouvé le modèle qui résiste ou c'est peine perdue ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Avec ce temps, la file de caisse devient presque agréable finalement — vous êtes du quartier ou détour exprès ?",
        "relance": "On a tous les deux fait notre shopping en mode survie, respect. C'est votre magasin habituel ou vous testez ?"
      },
      {
        "accroche": "Tout le monde débarque en même temps après le boulot, la file s'allonge à vue d'œil — c'est toujours l'embouteillage à cette heure ici ?",
        "relance": "Moi je fais mes courses en mode fin de journée épuisé, jamais malin. Vous avez une heure secrète où c'est enfin tranquille ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Une fin de journée pareille, tout le monde dans la queue a la même tête de fin de marathon.",
        "relance": "Moi je rêve juste de mon canapé, là. Vous aussi c'est la dernière mission avant de souffler, ou la soirée commence à peine ?"
      },
      {
        "accroche": "À cette heure tout le monde n'a plus qu'une idée, rentrer et poser ses sacs — on est tous sur la même longueur d'onde dans cette file, non ?",
        "relance": "Moi mon canapé m'appelle depuis cinq heures. C'est votre dernière corvée de la journée aussi ou la soirée démarre à peine pour vous ?"
      }
    ]
  },
  {
    "id": 14,
    "environnement": "Dans la rue",
    "profil": "Commerçant sur le seuil",
    "humeur": "Ennuyé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Générer de l'intérêt",
    "theme": "Le flux de clients",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air philosophe à regarder la rue passer — c'est la pause ou la vraie vie du métier, ces moments-là ?",
        "relance": "Moi j'aurais déjà tourné en rond dix fois, j'envie votre calme. On s'habitue aux temps morts ou jamais vraiment ?"
      },
      {
        "accroche": "Vous avez le café à la main et l'œil qui suit chaque passant — c'est votre observatoire du matin, ce seuil ?",
        "relance": "Moi je tiendrais pas dix minutes à regarder sans rien faire. Vous vous racontez des histoires sur les gens qui passent ou c'est juste la pause ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est calme ce matin — ou c'est le signe que vous gardez votre meilleure clientèle pour l'après-midi ?",
        "relance": "Je passe souvent devant sans jamais oser entrer, je l'avoue. C'est quoi votre meilleure heure côté passage ?"
      },
      {
        "accroche": "Vous venez tout juste d'ouvrir, la rue se réveille à peine — c'est le calme obligé avant que ça se remplisse ?",
        "relance": "Moi je passe toujours trop tôt, avant que tout soit lancé. À partir de quelle heure ça commence vraiment à bouger chez vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un début de semaine gris comme ça, la rue entière a l'air d'avoir appuyé sur pause — vous le sentez au nombre de gens ?",
        "relance": "Moi aussi je traîne des pieds aujourd'hui, faut dire. C'est la météo qui vide la rue ou juste le jour ?"
      },
      {
        "accroche": "Il y a un moment le matin où la rue hésite encore à se réveiller, tout se met en route au ralenti — vous le voyez chaque jour de votre poste ?",
        "relance": "Moi j'aime bien ces débuts de journée où rien n'est encore lancé. C'est votre moment préféré ou vous préférez quand ça grouille de monde ?"
      }
    ]
  },
  {
    "id": 15,
    "environnement": "Immeuble Résidentiel",
    "profil": "Gardien / Concierge",
    "humeur": "Bienveillant",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Tous",
    "centreInteret": "Quotidien",
    "proximite": "Habitué",
    "audace": 1,
    "objectif": "Fidéliser le contact",
    "theme": "La vie de l'immeuble",
    "zoomIn": [
      {
        "accroche": "Votre trousseau pourrait ouvrir la moitié de la ville — vous retenez chaque clé par cœur ou y a un système ?",
        "relance": "Moi je perds la mienne deux fois par semaine, c'est dire le niveau. Comment on garde le contrôle de tout ça sans devenir fou ?"
      },
      {
        "accroche": "Vos plantes dans la loge sont impeccables, mieux que tout mon appartement réuni — vous avez la main verte ou c'est juste de la patience ?",
        "relance": "Moi je fais faner un cactus, c'est dire le niveau. Vous vous en occupez depuis longtemps ou c'est une manie qui est venue avec le poste ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous êtes clairement la mémoire vivante de l'immeuble — tout passe par vous, depuis longtemps ?",
        "relance": "Je viens d'arriver et je connais encore personne. L'immeuble a beaucoup changé depuis que vous êtes là ?"
      },
      {
        "accroche": "Vous saluez tout le monde par son prénom, du petit dernier au plus ancien — vous connaissez vraiment chaque famille de l'immeuble ?",
        "relance": "Moi je viens d'emménager et je reconnais à peine mes voisins de palier. Comment on finit par tous les connaître sans jamais se tromper ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un dimanche tranquille comme ça, j'imagine que l'immeuble a une tout autre ambiance qu'en semaine.",
        "relance": "Moi j'adore ce calme du week-end, ça respire enfin. C'est le moment que vous préférez aussi, ou c'est là que tout se détraque ?"
      },
      {
        "accroche": "Un immeuble ça vit à son propre rythme, avec ses moments calmes et ses coups de feu — vous sentez l'ambiance changer selon les périodes ?",
        "relance": "Moi j'imagine pas tout ce qui se passe derrière les portes que vous croisez. Y a une saison où l'immeuble s'anime plus que d'autres ?"
      }
    ]
  },
  {
    "id": 16,
    "environnement": "Aéroport",
    "profil": "Hôtesse d'enregistrement",
    "humeur": "Professionnelle",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Rendre l'échange humain",
    "theme": "Les voyageurs du jour",
    "zoomIn": [
      {
        "accroche": "Vous avez le sourire de quelqu'un qui gère l'imprévu avant même qu'il arrive — c'est votre routine ou vous êtes du matin naturellement ?",
        "relance": "Moi je suis une catastrophe avant 8h, ça se voit sûrement. Sur ce genre de poste, on devient vite imperméable au stress des gens ?"
      },
      {
        "accroche": "Vous tapez sur votre clavier sans même regarder l'écran tout en gardant le contact avec les gens — c'est un réflexe qui vient avec les années ?",
        "relance": "Moi je fixe mes touches comme si j'apprenais encore. On finit par connaître le système par cœur ou il change tout le temps ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le terminal est encore calme mais ça va vite changer — c'est toujours cette heure la plus simple de la journée ?",
        "relance": "Je préfère toujours arriver tôt pour éviter la cohue. La tension des passagers en retard, vous arrivez à la laisser glisser ou ça finit par peser ?"
      },
      {
        "accroche": "On est juste avant la grosse vague des vols de la matinée là — c'est le moment où tout peut encore basculer si un seul appareil prend du retard ?",
        "relance": "Moi j'arrive toujours très en avance par pure angoisse. Un vol qui décale, ça met combien de temps à tout dérégler derrière ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Jours fériés, week-end de pont — j'imagine que la vibe ici change radicalement selon le calendrier.",
        "relance": "Moi là je pars en déplacement pro, loin du glamour. C'est quoi la destination que vous enviez le plus en regardant les billets passer ?"
      },
      {
        "accroche": "Le matin, entre ceux qui partent en vacances et ceux qui filent en réunion, l'énergie doit être complètement schizophrène dans la file.",
        "relance": "Moi je suis clairement dans la team réunion aujourd'hui, loin du rêve. Vous les repérez du premier coup d'œil, les vacanciers des voyageurs pro ?"
      }
    ]
  },
  {
    "id": 17,
    "environnement": "Gare / Quai SNCF",
    "profil": "Contrôleur",
    "humeur": "Pressé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Fatigué",
    "moment": "Soir",
    "centreInteret": "Voyage",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Alléger le contrôle",
    "theme": "Les retards",
    "zoomIn": [
      {
        "accroche": "Votre veste a l'air d'avoir fait autant de kilomètres que les trains — vous êtes sur cette ligne depuis longtemps ?",
        "relance": "Moi j'aurais les pieds en compote après deux heures debout. Sur les longues lignes, on prend le temps de s'asseoir ou c'est debout de bout en bout ?"
      },
      {
        "accroche": "Vous scannez les billets sans presque regarder l'écran — après toutes ces années, vous devinez presque qui a oublié le sien rien qu'à la tête ?",
        "relance": "Moi je fouille mes poches en panique à chaque contrôle. On repère vite les resquilleurs ou ils sont plus malins qu'on croit ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vingt minutes de retard annoncées — c'est déjà une bonne journée ou c'est la moyenne habituelle sur ce trajet ?",
        "relance": "Moi je suis monté sans trop y croire, fidèle à moi-même. C'est quoi la ligne la plus capricieuse de votre planning ?"
      },
      {
        "accroche": "Le train est bien plein ce soir, du monde debout dans les couloirs — c'est le rush du vendredi ou c'est comme ça toutes les fins de journée ?",
        "relance": "Moi j'ai eu de la chance de trouver une place assise. C'est quoi l'heure que vous préférez pour faire le service, quand c'est plus respirable ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un vendredi soir dans ce train, la moitié des gens rentre en mode décompression totale — vous le sentez dans les wagons ?",
        "relance": "Moi je compte les stations comme des victoires ce soir. Les voyageurs du vendredi, c'est une espèce à part comparé au lundi matin ?"
      },
      {
        "accroche": "À cette heure tout le wagon a basculé en mode silencieux, chacun dans sa bulle avec ses écouteurs — c'est plus reposant à contrôler qu'un train du matin ?",
        "relance": "Moi le soir je décroche complètement, je réponds à peine. Vous préférez ce calme ou le brouhaha du matin où au moins ça vit un peu ?"
      }
    ]
  },
  {
    "id": 18,
    "environnement": "Hôtel",
    "profil": "Réceptionniste",
    "humeur": "Accueillant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Créer une première impression mémorable",
    "theme": "Le séjour à venir",
    "zoomIn": [
      {
        "accroche": "Vous avez le badge du réceptionniste et l'air de quelqu'un qui a déjà répondu à toutes les questions possibles — c'est quoi la plus bizarre de la semaine ?",
        "relance": "Moi j'aurais séché sur la moitié, j'imagine. Les demandes insolites, ça vous fait encore sourire ou c'est devenu ordinaire ?"
      },
      {
        "accroche": "Vous avez retenu mon nom avant même que je sorte ma réservation — c'est une technique que vous travaillez ou vous êtes physionomiste de naissance ?",
        "relance": "Moi j'oublie un prénom trois secondes après qu'on me le donne. Ça vient avec le métier de retenir les visages comme ça, ou c'était déjà là ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'hôtel a une vraie personnalité — vous le recommandez pour autre chose que dormir ?",
        "relance": "Je voyage souvent pour le boulot, j'ai rarement le temps de profiter. C'est quoi le truc que tout le monde manque parce qu'il le sait pas ?"
      },
      {
        "accroche": "J'arrive un peu tard, la ville a l'air déjà endormie dehors — il reste un coin où grignoter à cette heure ou je suis condamné au minibar ?",
        "relance": "Moi je tombe toujours dans une ville juste après la fermeture de tout. C'est quoi le bon plan des voyageurs qui débarquent tard comme moi ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un dimanche soir, les arrivées ont une toute autre ambiance que le vendredi — les gens ont la tête à quoi en général ?",
        "relance": "Moi je débarque un peu hagard, clairement. C'est la semaine de la ville ou un week-end de plus qui se finit ici pour la plupart ?"
      },
      {
        "accroche": "Le soir, les gens débarquent tous avec leur histoire de la journée — trajet galère, réunion marathon, vacances qui commencent — vous encaissez toutes les humeurs d'un coup.",
        "relance": "Moi j'arrive vidé mais content d'être là. Vous arrivez à ne pas absorber le stress de ceux qui débarquent à cran ?"
      }
    ]
  },
  {
    "id": 19,
    "environnement": "Salon de Coiffure",
    "profil": "Coiffeur / Coiffeuse",
    "humeur": "Bavard",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Habitué",
    "audace": 1,
    "objectif": "Installer une connivence",
    "theme": "Le look et la transformation",
    "zoomIn": [
      {
        "accroche": "Vous avez les ciseaux qui bougent même quand vous parlez — c'est une seconde nature ou vous faites attention ?",
        "relance": "Moi j'arriverais pas à faire deux choses en même temps sans catastrophe. Vous apprenez ça en formation ou ça vient avec l'expérience ?"
      },
      {
        "accroche": "Votre propre coupe est toujours nickel — c'est la pression du métier ou vous testez vos idées sur vous d'abord ?",
        "relance": "Moi je laisse pousser jusqu'à la crise, j'assume. Vous expérimentez vos nouveautés sur votre tête avant de les proposer aux clients ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le salon est plein à cette heure — vous avez encore des créneaux cette semaine ou c'est complet ?",
        "relance": "Moi j'ai repoussé ce rendez-vous depuis trop longtemps. C'est quoi la période la plus folle dans l'année pour vous ?"
      },
      {
        "accroche": "À force de venir, ce fauteuil est devenu mon petit rituel de la semaine — vous les repérez, les habitués qui viennent autant pour causer que pour la coupe ?",
        "relance": "Moi je viens clairement aussi pour débrancher une heure. C'est quoi la conversation qui revient le plus souvent dans votre fauteuil ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On approche de l'été, tout le monde veut changer de tête en même temps — vous voyez vraiment la tendance arriver d'un coup ?",
        "relance": "Moi je suis pris de l'envie de changer mais je sais pas par quoi. C'est quoi la coupe que tout le monde demande en ce moment ?"
      },
      {
        "accroche": "Il y a un truc fou dans le fait qu'on ressorte d'ici avec le moral qui change, pas juste les cheveux — vous le voyez souvent, les gens qui arrivent grognons et repartent transformés ?",
        "relance": "Moi une bonne coupe et j'ai l'impression de repartir à neuf, c'est bête. C'est vrai qu'un changement de tête suit souvent un truc dans la vie des gens ?"
      }
    ]
  },
  {
    "id": 20,
    "environnement": "Cabinet Médical",
    "profil": "Secrétaire médicale",
    "humeur": "Débordée",
    "ageGroupe": "Tous",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Santé",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Ne pas alourdir l'attente",
    "theme": "La salle d'attente",
    "zoomIn": [
      {
        "accroche": "Vous jongler entre le téléphone, l'ordi et les patients avec une précision millimétrée — vous avez un système ou c'est l'instinct ?",
        "relance": "Moi j'ai du mal à gérer deux tâches en même temps sans tout rater. À quel moment on atteint ce niveau de maîtrise ?"
      },
      {
        "accroche": "Vous gardez une voix posée au téléphone même quand la salle déborde derrière vous — c'est un masque pro ou vous êtes zen de nature ?",
        "relance": "Moi je m'entends stresser dès que ça s'accumule. On apprend à garder ce calme dans la voix ou c'est déjà en vous au départ ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La salle d'attente est bien remplie — je me suis trompé de créneau ou c'est systématiquement comme ça ici ?",
        "relance": "Je suis pris à peu près vers quelle heure ? Je demande juste pour gérer ma journée mentalement."
      },
      {
        "accroche": "Le téléphone n'a pas arrêté de sonner depuis que je me suis assis — c'est toujours ce marathon le matin ou j'ai choisi le pire jour ?",
        "relance": "Moi je n'ai jamais réussi à joindre le cabinet du premier coup, je comprends mieux là. C'est quoi le moment de la journée où ça se calme un peu ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vu la météo de cette semaine, j'imagine que les consultations flambent — c'est vraiment lié ou c'est un mythe ?",
        "relance": "Moi je viens à titre préventif, je touche du bois. Le cabinet est plus calme en été ou ça ne change pas grand-chose ?"
      },
      {
        "accroche": "Un lundi matin, la salle a une drôle d'ambiance — tout le monde patiente en silence comme à la messe.",
        "relance": "Moi je culpabilise presque de faire attendre en arrivant. Les gens sont plus tendus le lundi ou c'est pareil toute la semaine ?"
      }
    ]
  },
  {
    "id": 21,
    "environnement": "Transport en Commun",
    "profil": "Passager assis à côté",
    "humeur": "Neutre",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Rompre le silence de façon naturelle",
    "theme": "Le trajet quotidien",
    "zoomIn": [
      {
        "accroche": "Votre livre a l'air de vous tenir en haleine — c'est quoi, si c'est pas indiscret ?",
        "relance": "Moi j'arrive plus à lire dans les transports, je m'endors ou je regarde mon téléphone. C'est quoi le genre ?"
      },
      {
        "accroche": "Vous avez le regard fixé dehors depuis un moment — c'est le genre de trajet où on réfléchit à sa journée ou juste où on essaie de pas se rendormir ?",
        "relance": "Moi je fais défiler mon téléphone dans le vide pour tenir. Vous, ce moment fenêtre, c'est votre petite bulle du matin ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce trajet est toujours aussi chargé à cette heure — vous le faites tous les jours ou c'est exceptionnel ?",
        "relance": "Moi je change d'horaires exprès pour éviter ça, en général. C'est quoi votre stratégie pour supporter la foule ?"
      },
      {
        "accroche": "On est serrés comme jamais ce matin, il a dû se passer un truc sur la ligne d'avant — vous avez entendu quelque chose ?",
        "relance": "Moi je pars toujours sans consulter les infos trafic, grave erreur. Vous avez une appli qui vous sauve ou vous tentez à l'aveugle comme moi ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un lundi matin dans ce wagon, tout le monde a la même tête de quelqu'un qui a raté l'alarme — solidarité.",
        "relance": "Moi je suis en mode survie jusqu'au café. Vous, vous arrivez à être productif dès le matin ou ça démarre doucement ?"
      },
      {
        "accroche": "Il y a un truc presque touchant dans ce wagon le matin — cent personnes qui vont dans la même direction sans jamais se parler.",
        "relance": "Moi j'ai toujours trouvé ça étrange qu'on soit si proches et si loin en même temps. Ça vous pèse ou ça vous va très bien, ce silence du matin ?"
      }
    ]
  },
  {
    "id": 22,
    "environnement": "Librairie",
    "profil": "Libraire",
    "humeur": "Passionné",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Obtenir une recommandation sincère",
    "theme": "Les coups de cœur",
    "zoomIn": [
      {
        "accroche": "Vous avez un livre à portée de main derrière la caisse — c'est ce que vous lisez en ce moment ou votre voisin de comptoir préféré ?",
        "relance": "Moi j'ai honte de ma pile à lire, elle attend depuis des mois. C'est quoi en ce moment qui vous a le plus accroché ?"
      },
      {
        "accroche": "Vos petits mots manuscrits sous les livres, c'est vous qui les écrivez tous ? On sent que c'est pas du copié-collé.",
        "relance": "Moi je choisis un bouquin à moitié grâce à ces mots-là, j'avoue. C'est quoi le livre pour lequel vous avez eu le plus de mal à trouver les mots ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La librairie est bien rangée mais on sent qu'il y a un vrai choix derrière — c'est vous qui faites la sélection ou c'est imposé ?",
        "relance": "Je me perds toujours ici dans le bon sens. C'est quoi le rayon où les gens passent le plus de temps sans s'en rendre compte ?"
      },
      {
        "accroche": "Il y a un calme ici l'après-midi qui donne pas envie de repartir — c'est l'heure où vous conseillez le mieux, quand c'est tranquille ?",
        "relance": "Moi je viens souvent juste pour flâner sans rien acheter, désolé. C'est quoi le moment de la journée que vous préférez dans la boutique ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "En ce moment j'ai envie d'un roman long et dense, un truc qui me coupe du bruit ambiant — vous connaissez ce type de demande ?",
        "relance": "Moi je cherche à décrocher sans culpabiliser. C'est quoi le livre que vous conseillez à quelqu'un qui a la tête pleine ?"
      },
      {
        "accroche": "J'ai l'impression qu'en ce moment les gens reviennent au papier pour décrocher des écrans — vous le sentez dans ce qui se vend ?",
        "relance": "Moi je lis sur mon téléphone et je ne retiens rien, c'est déprimant. Vous croyez vraiment que le livre papier tient bon face à tout ça ?"
      }
    ]
  },
  {
    "id": 23,
    "environnement": "Restaurant",
    "profil": "Serveur",
    "humeur": "Débordé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Fatigué",
    "moment": "Après-midi",
    "centreInteret": "Gastronomie",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Faciliter le service",
    "theme": "Le rush du midi",
    "zoomIn": [
      {
        "accroche": "Vous portez quatre assiettes d'un bras sans jamais trébucher — c'est une question d'entraînement ou de concentration pure ?",
        "relance": "Moi je renverse un verre à chaque fois que quelqu'un me regarde. Ça s'apprend vraiment ou faut être câblé différemment ?"
      },
      {
        "accroche": "Vous prenez les commandes sans rien noter — vous retenez vraiment tout ou vous priez un peu une fois en cuisine ?",
        "relance": "Moi j'oublie ma liste de courses entre le frigo et la porte. C'est un entraînement de la mémoire ou vous avez vos petits trucs ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le service a l'air de tourner à fond — je commande simple pour vous faciliter la vie, c'est quoi qui sort vite aujourd'hui ?",
        "relance": "Je suis pas pressé, je veux juste pas bloquer une table longtemps. C'est quoi le plat que tout le monde prend sans hésiter ?"
      },
      {
        "accroche": "On dirait que le gros du midi est passé, ça respire enfin — c'est le moment où vous soufflez ou déjà celui où vous remettez tout en place pour ce soir ?",
        "relance": "Moi je débarque toujours pile à contretemps, désolé. C'est quoi le vrai moment de pause dans une journée comme la vôtre ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un midi de semaine comme ça, j'imagine que vous voyez défiler toutes les dynamiques de boulot — tables de managers, repas business, solos pressés.",
        "relance": "Moi je suis en repas solo rapide, clairement pas le plus glamour. C'est quoi le type de table qui vous change le plus de la routine ?"
      },
      {
        "accroche": "Passer sa journée debout à nourrir des gens pressés, c'est un marathon que personne ne voit vraiment — on s'y habitue ou les jambes lâchent quand même ?",
        "relance": "Moi après deux heures debout je suis fini. C'est quoi qui vous fait tenir jusqu'au bout du service, votre carburant à vous ?"
      }
    ]
  },
  {
    "id": 24,
    "environnement": "Taxi / VTC",
    "profil": "Chauffeur",
    "humeur": "Bavard",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Tous",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Donner la bonne réplique d'ouverture",
    "theme": "La ville et ses anecdotes",
    "zoomIn": [
      {
        "accroche": "Votre voiture est impeccable pour un métier qui passe sa journée dehors — c'est une question d'organisation ou de discipline ?",
        "relance": "Moi ma voiture en dit long sur mon niveau de chaos. Sur de longues journées comme les vôtres, c'est quoi le truc qui fait vraiment la différence ?"
      },
      {
        "accroche": "Vous avez pris un raccourci que même le GPS ne connaît pas — vous avez toute la ville dans la tête ou c'est des années de terrain ?",
        "relance": "Moi je me perds encore avec l'appli dans la main. Au bout de combien de temps on connaît une ville mieux qu'une carte ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce quartier là, c'est toujours l'enfer ou c'est moi qui choisis les mauvaises heures ?",
        "relance": "Je connais encore mal la ville. C'est quoi le coin que vous évitez à tout prix en journée ?"
      },
      {
        "accroche": "On roule bien là finalement, je m'attendais à pire à cette heure — c'est un créneau que vous visez exprès ou c'est la chance du jour ?",
        "relance": "Moi je pars toujours au pire moment, une vraie malédiction. C'est quoi l'heure en or où la ville se laisse traverser tranquille ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vu ce qui se passe en ville cette semaine, j'imagine que les courses sont plus longues que d'habitude avec les bouchons.",
        "relance": "Moi j'essaie de pas regarder le compteur. C'est quoi les jours où vous faites le meilleur chiffre sans vous épuiser ?"
      },
      {
        "accroche": "À force de trimballer tout le monde toute la journée, vous devez entendre des histoires de fou — les gens se lâchent en voiture, non ?",
        "relance": "Moi je parle trop dès que je suis passager, ça doit vous fatiguer. C'est quoi la conversation la plus improbable que vous ayez eue à l'arrière ?"
      }
    ]
  },
  {
    "id": 25,
    "environnement": "Parc / Espace vert",
    "profil": "Joggeur de retour",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Sport",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Engager un échange complice",
    "theme": "L'effort et la récupération",
    "zoomIn": [
      {
        "accroche": "Vos chaussures ont pris une sacrée raclée — vous avez couru dans quoi, une rivière ?",
        "relance": "Moi je serais rentré au premier signe de boue. C'est quoi votre itinéraire habituel par ici ?"
      },
      {
        "accroche": "Vous vous étirez avec une méthode carrée, on voit que c'est pas votre première sortie — vous suivez un programme ou vous y allez au feeling ?",
        "relance": "Moi je ne m'étire jamais et je le paie le lendemain. C'est quoi le réflexe de récup que tout le monde néglige et qui change tout ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le parc est parfait à cette heure, encore calme — vous courez toujours à ce créneau ou c'est les circonstances qui décident ?",
        "relance": "Moi je n'arrive jamais à m'y mettre le matin. Comment on passe du côté des gens qui courent avant le café ?"
      },
      {
        "accroche": "À cette heure on partage le parc avec les chiens et les cyclistes, ça fait un petit monde à part — vous croisez toujours les mêmes têtes le matin ?",
        "relance": "Moi je commence à reconnaître deux ou trois habitués sans jamais leur parler. Ça finit par créer des liens, ces croisements matinaux, ou chacun reste dans sa bulle ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Ce temps de début de printemps remet tout le monde dehors d'un coup — on voit nettement plus de monde qu'il y a deux semaines.",
        "relance": "Moi la lumière qui revient me donne envie de m'y remettre, ça dure jamais longtemps. Vous courez toute l'année ou vous avez vos saisons ?"
      },
      {
        "accroche": "Il y a un truc avec la course le matin, on dirait que ça règle la journée entière — vous courez pour la tête autant que pour les jambes ?",
        "relance": "Moi les rares fois où je le fais, je suis insupportablement de bonne humeur après. C'est ça qui vous accroche ou c'est devenu une discipline pure ?"
      }
    ]
  },
  {
    "id": 26,
    "environnement": "Piscine",
    "profil": "Maître nageur",
    "humeur": "Concentré",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Sport",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer un lien avec l'habitué du lieu",
    "theme": "La discipline de l'eau",
    "zoomIn": [
      {
        "accroche": "Votre montre de sport a l'air de pouvoir faire une thèse sur mes performances — vous analysez vraiment tout le monde ou c'est automatique ?",
        "relance": "Moi j'ai pas envie de savoir ce que ça donnerait sur moi. Vous arrivez à désactiver le mode coach ou vous voyez toujours les défauts ?"
      },
      {
        "accroche": "Vous balayez les lignes d'eau du regard sans jamais vraiment vous arrêter sur personne — c'est épuisant de rester aussi vigilant des heures ?",
        "relance": "Moi je décrocherais au bout de dix minutes. Comment on garde cette attention sans jamais couper, surtout quand c'est calme comme là ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La piscine est encore calme — c'est le bon créneau pour nager sérieusement ou ça change pas tant que ça ?",
        "relance": "Je viens d'essayer de reprendre régulièrement, les premières longueurs sont mortelles. C'est quoi le truc technique qui change tout pour ceux qui reprennent ?"
      },
      {
        "accroche": "Les lignes rapides sont déjà prises par les mêmes nageurs acharnés, on dirait — c'est un club d'habitués le matin ou ça tourne beaucoup ?",
        "relance": "Moi je n'ose jamais me mettre dans la ligne rapide, peur de gêner. C'est quoi la règle tacite pour choisir sa ligne sans se tromper ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Début janvier, j'imagine que cette piscine ressemble à un autre endroit — tout le monde avec ses bonnes résolutions.",
        "relance": "Moi j'en fais partie, j'avoue. Vous avez une théorie sur pourquoi les trois quarts abandonnent avant février ?"
      },
      {
        "accroche": "Il y a un truc apaisant dans la nage, ce moment où on n'entend plus que sa propre respiration — à force, l'eau c'est encore un plaisir ou c'est le boulot ?",
        "relance": "Moi je viens autant pour la tête vide que pour le sport. Vous nagez encore pour vous en dehors du travail ou vous en avez fait le tour ?"
      }
    ]
  },
  {
    "id": 27,
    "environnement": "Boulangerie",
    "profil": "Boulanger / Vendeuse",
    "humeur": "Énergique",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Gastronomie",
    "proximite": "Habitué",
    "audace": 1,
    "objectif": "Commencer la journée sur une bonne note",
    "theme": "Les produits du jour",
    "zoomIn": [
      {
        "accroche": "Vous avez les yeux grands ouverts à cette heure-là — vous êtes du matin naturellement ou le four finit par vous conditionner ?",
        "relance": "Moi à 7h je suis inutilisable. C'est quoi l'heure à laquelle vous vous levez pour que le pain soit là à 6h ?"
      },
      {
        "accroche": "Vous arrangez les viennoiseries au millimètre dans la vitrine — c'est vous qui avez l'œil ou c'est la règle de la maison ?",
        "relance": "Moi je casse tout ce que je range, c'est un don. Ça compte vraiment tant que ça, la façon dont c'est présenté, pour donner envie aux gens ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ça sent incroyablement bon ici ce matin — c'est la fournée classique ou vous avez sorti un truc de spécial ?",
        "relance": "Je viens tous les matins mais je prends toujours la même chose par habitude. C'est quoi le produit que les gens ne pensent jamais à prendre et qui vaut le coup ?"
      },
      {
        "accroche": "Vous connaissez déjà la commande de la moitié des gens avant qu'ils ouvrent la bouche — moi y compris, j'imagine ?",
        "relance": "Moi je prends toujours pareil, vous devez me voir venir de loin. C'est quoi le client dont vous connaissez la commande par cœur depuis des années ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un mardi matin comme ça, les gens qui passent ont tous l'air d'avoir besoin de ce croissant comme d'un médicament.",
        "relance": "Moi je compte là-dessus pour démarrer, honnêtement. C'est les mêmes têtes tous les matins ou ça change beaucoup ?"
      },
      {
        "accroche": "Une boulangerie le matin, c'est un peu le premier arrêt de tout le quartier avant d'attaquer — vous voyez passer toute la vie du coin, non ?",
        "relance": "Moi c'est mon sas obligatoire avant de commencer la journée. Vous avez l'impression d'être le point de départ de la journée des gens ?"
      }
    ]
  },
  {
    "id": 28,
    "environnement": "Banque / Agence",
    "profil": "Conseiller financier",
    "humeur": "Professionnel",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Détendre un rendez-vous formel",
    "theme": "Les finances du quotidien",
    "zoomIn": [
      {
        "accroche": "Vous avez la façon de poser le stylo sur le bureau de quelqu'un qui a fait ça dix mille fois — c'est un tic ou une technique pour mettre les gens à l'aise ?",
        "relance": "Moi dès que j'entre dans une banque j'ai l'impression d'être audité. Comment vous faites pour que les gens se sentent pas jugés ?"
      },
      {
        "accroche": "Votre bureau est rangé au carré, pas un papier qui dépasse — c'est pour rassurer les clients ou c'est vous qui avez besoin de cet ordre ?",
        "relance": "Moi mon bureau ressemble à une scène de crime. Un espace nickel, ça change vraiment la confiance des gens qui s'assoient en face ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'agence est calme à cette heure — j'aurais pensé que ce genre de rendez-vous se faisait plutôt en fin de journée.",
        "relance": "Moi j'ai pris le premier créneau disponible pour éviter de reculer. C'est quoi la question que tout le monde arrive avec en tête mais n'ose pas poser en premier ?"
      },
      {
        "accroche": "On est bien installés, c'est presque solennel comme cadre — vous faites quoi pour que les gens se détendent avant d'attaquer les chiffres ?",
        "relance": "Moi j'arrive toujours un peu sur la défensive dans ce genre de rendez-vous. C'est quoi votre première phrase pour casser cette ambiance guindée ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "En ce moment avec tout ce qui bouge sur les taux, j'imagine que vous avez plus de clients stressés qu'à l'habitude.",
        "relance": "Moi je suis clairement pas serein sur le sujet. C'est quoi le discours que vous répétez le plus souvent pour remettre les gens en perspective ?"
      },
      {
        "accroche": "L'argent, c'est un des rares sujets dont personne n'ose vraiment parler, même entre proches — vous êtes un peu le confident malgré vous, non ?",
        "relance": "Moi je n'en parle jamais, même à mes potes, c'est tabou. Les gens se livrent facilement une fois assis en face de vous ou faut creuser ?"
      }
    ]
  },
  {
    "id": 29,
    "environnement": "Espace de Coworking",
    "profil": "Voisin de bureau",
    "humeur": "Concentré",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Briser la glace sans déranger",
    "theme": "Le travail à distance",
    "zoomIn": [
      {
        "accroche": "Vous avez un setup qui donne envie — c'est le bureau de quelqu'un qui pense à son dos ou à sa productivité en premier ?",
        "relance": "Moi j'ai toujours une chaise pourrie et un câble qui pend. C'est quoi l'investissement qui vous a le plus changé la vie au quotidien ?"
      },
      {
        "accroche": "Votre clavier fait un bruit qui donne l'impression que vous écrivez un roman — c'est un truc de passionné ou juste pour le plaisir des touches ?",
        "relance": "Moi je tape sur le clavier tout mou d'origine de mon portable. Ça change vraiment quelque chose au confort, ces claviers-là, ou c'est du gadget ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce coworking est pas mal pour la concentration — vous venez souvent ici ou vous testez ?",
        "relance": "Je cherche un endroit régulier, ma cuisine c'est plus possible. C'est quoi le critère qui vous a fait choisir celui-là ?"
      },
      {
        "accroche": "L'après-midi c'est le calme plat ici, on entendrait une mouche — c'est le meilleur moment pour avancer ou justement celui où vous décrochez ?",
        "relance": "Moi c'est le creux de l'aprem qui me tue, je fixe l'écran dans le vide. Vous avez un rituel pour relancer la machine à cette heure-là ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vu la fréquentation cette semaine, j'ai l'impression que les gens fuient un peu le bureau classique en ce moment.",
        "relance": "Moi je télétravaille à mi-temps et je cherche encore l'équilibre. Vous avez trouvé le bon rythme entre chez vous et ici ?"
      },
      {
        "accroche": "Bosser seul chez soi, ça finit par rendre un peu bizarre, non ? On vient presque ici juste pour entendre d'autres humains taper à côté.",
        "relance": "Moi je me parlais tout seul à la maison, il était temps de sortir. Vous, c'est le silence de chez vous que vous fuyez ou juste le canapé trop tentant ?"
      }
    ]
  },
  {
    "id": 30,
    "environnement": "Cours de Yoga",
    "profil": "Instructeur yoga",
    "humeur": "Calme",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Bien-être",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer un lien avant le cours",
    "theme": "La détente et le lâcher-prise",
    "zoomIn": [
      {
        "accroche": "Vous avez une façon d'arriver dans la salle qui fait baisser la pression de tout le monde — c'est travaillé ou c'est vous ?",
        "relance": "Moi j'arrive encore stressé de ma journée. Comment on passe du mode boulot au mode présent sans longue transition ?"
      },
      {
        "accroche": "Vous avez une voix qui pose le calme à elle seule — c'est un outil que vous travaillez autant que les postures ?",
        "relance": "Moi ma voix monte dès que je stresse, l'inverse total. La voix ça compte vraiment pour faire lâcher prise aux gens ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La salle se remplit bien pour ce créneau — c'est un groupe habituel ou ça change beaucoup d'une semaine à l'autre ?",
        "relance": "Je viens pour la première fois, j'espère pas être le seul à galérer. C'est quoi le conseil pour quelqu'un qui commence ?"
      },
      {
        "accroche": "Cette salle en fin de journée, lumière tamisée, c'est déjà une bulle avant même de commencer — vous choisissez cette ambiance exprès pour le soir ?",
        "relance": "Moi je passe la porte et je sens déjà la pression descendre d'un cran. C'est quoi le premier truc que vous mettez en place pour que les gens décrochent du dehors ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Après une semaine comme celle-là, je pense que tout le monde dans cette salle a besoin de souffler autant que moi.",
        "relance": "Moi je viens clairement pour décompresser plus que pour la performance. Vous le sentez, les gens en mode 'urgence de respirer' ?"
      },
      {
        "accroche": "On vit tellement dans le rush et les écrans que prendre une heure juste pour respirer, c'est presque un acte de résistance aujourd'hui — vous le voyez comme ça ?",
        "relance": "Moi j'ai un mal fou à rester sans rien faire cinq minutes. Vous croyez qu'on peut vraiment réapprendre à ralentir ou c'est perdu d'avance ?"
      }
    ]
  },
  {
    "id": 31,
    "environnement": "Fromagerie / Épicerie Fine",
    "profil": "Fromager",
    "humeur": "Passionné",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Gastronomie",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Apprendre quelque chose",
    "theme": "Les accords et les saisons",
    "zoomIn": [
      {
        "accroche": "Vous avez le regard de quelqu'un qui sait exactement quel fromage convient à quelle personne en trente secondes — c'est de l'instinct ou de l'expérience ?",
        "relance": "Moi j'arrive toujours en sachant pas quoi prendre. C'est quoi le signe qui vous dit que quelqu'un va aimer les choses corsées ?"
      },
      {
        "accroche": "Vos mains enveloppent chaque morceau avec un soin qui ressemble presque à un rituel — vous faites ça au feeling ou il y a une vraie méthode derrière ?",
        "relance": "Moi je repars toujours avec mon fromage écrasé au fond du sac. C'est quoi le geste tout bête qui change tout pour bien le conserver ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a un parfum dans cette boutique qui réveille quelque chose — c'est quoi en ce moment la pièce dont vous êtes le plus fier ?",
        "relance": "Je cherche quelque chose qui impressionne sans que ce soit un cliché. C'est quoi l'accord que personne ne pense à faire mais qui tue ?"
      },
      {
        "accroche": "Il y a une pièce posée bien en évidence sur le comptoir qui attire l'oeil direct — c'est la star du moment celle-là ?",
        "relance": "Moi je prends toujours la même chose par réflexe. C'est quoi la découverte que vous glissez aux clients pour les sortir de leurs habitudes ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On approche des beaux jours, j'imagine que les fromages de saison arrivent — c'est quoi qui change vraiment avec le printemps ?",
        "relance": "Moi je suis resté aux classiques toute l'année. C'est quoi le fromage que vous attendez le plus à cette période ?"
      },
      {
        "accroche": "En ce moment tout le monde revient au vrai goût, au fait main, au producteur qu'on connaît — vous le sentez arriver dans votre boutique aussi ?",
        "relance": "Moi j'ai longtemps acheté au supermarché sans me poser de questions. C'est quoi qui a vraiment changé selon vous dans la façon dont les gens mangent le fromage ?"
      }
    ]
  },
  {
    "id": 32,
    "environnement": "Galerie d'Art",
    "profil": "Galeriste",
    "humeur": "Distant",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Ouvrir un dialogue sans se prendre au sérieux",
    "theme": "Les œuvres du moment",
    "zoomIn": [
      {
        "accroche": "Vous regardez les gens regarder les œuvres — c'est plus intéressant que les tableaux eux-mêmes parfois ?",
        "relance": "Moi j'ai du mal à faire semblant de comprendre ce que je vois. C'est quoi la réaction d'un visiteur qui vous dit que quelque chose a vraiment marché ?"
      },
      {
        "accroche": "Vous vous tenez toujours près de cette œuvre-là, comme si c'était votre préférée — je me trompe ?",
        "relance": "Moi je saurais pas dire pourquoi une toile m'attire plus qu'une autre. C'est quoi qui fait que vous, vous vous attachez à une pièce en particulier ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'expo a l'air d'avoir une vraie cohérence — c'est un artiste que vous défendez depuis longtemps ou une découverte récente ?",
        "relance": "Je rentre souvent dans des galeries sans avoir le code. C'est quoi le meilleur endroit pour commencer quand on n'y connaît rien ?"
      },
      {
        "accroche": "L'espace est presque vide à cette heure, on entend nos pas — c'est le meilleur moment pour voir l'expo non ?",
        "relance": "Je passe souvent devant sans oser entrer, j'ai peur de pas être à ma place. C'est quoi que vous diriez à quelqu'un qui hésite sur le pas de la porte ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Le marché de l'art en ce moment, j'imagine que c'est en pleine mutation avec tout ce qui se passe sur le digital — vous le sentez dans les demandes ?",
        "relance": "Moi je comprends pas encore ce qui fait qu'une œuvre prend de la valeur. C'est quoi l'explication la plus honnête que vous donnez quand on vous pose la question ?"
      },
      {
        "accroche": "On dirait qu'en ce moment les gens ont un vrai besoin de beau, de s'arrêter devant quelque chose de vrai — vous le ressentez dans la fréquentation ?",
        "relance": "Moi je viens ici surtout pour couper avec les écrans. C'est quoi selon vous ce que les gens viennent vraiment chercher dans une galerie aujourd'hui ?"
      }
    ]
  },
  {
    "id": 33,
    "environnement": "Soirée Privée / Événement",
    "profil": "Invité inconnu au buffet",
    "humeur": "Curieux",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Créer un contact naturel en contexte social",
    "theme": "Les connexions inattendues",
    "zoomIn": [
      {
        "accroche": "Vous tenez votre verre avec le détachement de quelqu'un qui connaît du monde ici — vous êtes du côté de qui ?",
        "relance": "Moi je suis venu par un ami d'un ami, je connais personne. C'est quoi votre lien avec l'hôte ?"
      },
      {
        "accroche": "Vous avez pris exactement les deux mêmes trucs que moi sur le buffet, on a clairement le même radar — bon goût ou pure flemme ?",
        "relance": "Moi j'ai un talent pour repérer la seule bonne chose sur une table. Vous connaissez du monde ici ou vous êtes venu un peu à l'aveugle comme moi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est une bonne ambiance ici — il y a un mélange de gens intéressant ou c'est toujours les mêmes cercles ?",
        "relance": "Je suis pas très doué pour les soirées où je connais personne. Vous, vous arrivez comment à naviguer sans avoir l'air perdu ?"
      },
      {
        "accroche": "La musique vient de changer et tout le monde a relevé la tête en même temps — vous remarquez ce genre de petits moments dans une soirée ?",
        "relance": "Moi j'observe toujours ces trucs-là. Vous, vous êtes plutôt à fond dès le début ou vous montez en régime doucement ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Une soirée comme ça en pleine semaine, les gens sont soit 'j'en avais besoin' soit 'je sais pas pourquoi je suis là' — vous êtes lequel ?",
        "relance": "Moi clairement le second, mais je suis content d'être sorti. C'est quoi ce qui vous a décidé à venir ?"
      },
      {
        "accroche": "C'est fou de se dire qu'on est là à se parler alors qu'il y a une heure on savait même pas que l'autre existait — vous y pensez jamais à ce hasard ?",
        "relance": "Moi mes meilleures rencontres sont toutes nées d'un pur hasard comme ça. C'est quoi la rencontre la plus improbable que vous ayez faite en soirée ?"
      }
    ]
  },
  {
    "id": 34,
    "environnement": "Ascenseur de Bureaux",
    "profil": "Collègue d'un autre service",
    "humeur": "Gêné",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Sortir du silence pesant",
    "theme": "La vie de bureau",
    "zoomIn": [
      {
        "accroche": "Vous avez le badge d'un service que je croise peu — vous êtes sur quel étage ?",
        "relance": "Moi je reste souvent dans ma bulle au quatrième, j'ai l'impression de pas connaître la moitié du bâtiment. Ça fait longtemps que vous êtes là ?"
      },
      {
        "accroche": "Vous serrez ce gobelet comme si c'était votre survie de l'après-midi — c'est le troisième café ou vous tenez encore ?",
        "relance": "Moi à cette heure-là je carbure au café, sinon je décroche complètement. Vous êtes plutôt du matin ou vous montez en puissance l'après-midi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cet ascenseur met une éternité — il est toujours aussi lent ou c'est moi qui suis à cran aujourd'hui ?",
        "relance": "J'aurais dû prendre les escaliers, clairement. C'est votre bâtiment habituel ou vous passez ici à titre exceptionnel ?"
      },
      {
        "accroche": "On est tous les deux à fixer les étages qui défilent, le grand classique de l'ascenseur — vous montez ou vous descendez ?",
        "relance": "Moi je sais jamais où poser les yeux dans ces cabines. Vous travaillez dans ce bâtiment ou vous êtes juste de passage pour un rendez-vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un mercredi après-midi, c'est clairement le creux de la vague de la semaine — tout le monde a l'air en mode pilotage automatique.",
        "relance": "Moi je commence à compter les heures, j'avoue. C'est le moment de la semaine où vous êtes le plus productif, vous ?"
      },
      {
        "accroche": "C'est l'heure où le bâtiment se vide doucement, on sent tout le monde qui commence à décrocher — vous finissez tôt aujourd'hui ?",
        "relance": "Moi je traîne toujours un peu pour éviter les bouchons. C'est quoi votre astuce pour couper vraiment une fois la journée finie ?"
      }
    ]
  },
  {
    "id": 35,
    "environnement": "Bureau de Poste",
    "profil": "Agent postal",
    "humeur": "Débordé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Fatigué",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Rendre le passage agréable",
    "theme": "Les colis et l'attente",
    "zoomIn": [
      {
        "accroche": "Vous scannez les colis avec la précision d'un chirurgien malgré le rythme — c'est de la concentration pure ou de l'automatisme complet ?",
        "relance": "Moi après une heure je ferais des erreurs à la chaîne. C'est quoi le moment où l'automatisme prend vraiment le dessus ?"
      },
      {
        "accroche": "Vous avez toute une pile de colis qui vous attend derrière et vous gardez le sourire — c'est du sang-froid ou vous êtes juste blindé ?",
        "relance": "Moi rien qu'à voir cette montagne je serais découragé. C'est quoi qui vous aide à tenir quand ça s'accumule comme ça ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La file est courte ce matin — j'ai bien choisi mon heure ou c'est toujours plus calme le matin ici ?",
        "relance": "J'ai raté mon colis hier, je voulais pas rater la réouverture. C'est quoi le créneau à éviter absolument ?"
      },
      {
        "accroche": "Vous venez d'ouvrir et il y a déjà tout ce petit monde qui attend — c'est comme ça tous les matins à la première heure ?",
        "relance": "Moi je suis venu tôt exprès pour éviter la cohue de midi. C'est quoi le moment le plus tranquille de la journée pour passer selon vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Avec les fêtes qui approchent, j'imagine que le flux de colis ici va exploser dans les deux prochaines semaines.",
        "relance": "Moi j'ai déjà commandé tout en avance pour éviter les galères. C'est quoi la période la plus folle de l'année pour vous ?"
      },
      {
        "accroche": "Avec tout le monde qui commande en ligne maintenant, j'imagine que votre métier a complètement changé en quelques années — vous le vivez comment ?",
        "relance": "Moi je reçois plus de colis que de courrier depuis longtemps. C'est quoi qui a le plus changé pour vous dans le rythme du boulot ?"
      }
    ]
  },
  {
    "id": 36,
    "environnement": "Salle d'Embarquement",
    "profil": "Voyageur stressé à côté",
    "humeur": "Stressé",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Fatigué",
    "moment": "Tous",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Désamorcer la tension partagée",
    "theme": "Les retards et l'imprévu",
    "zoomIn": [
      {
        "accroche": "Vous vérifiez votre téléphone avec la fréquence de quelqu'un qui attend une greffe — c'est le vol ou autre chose ?",
        "relance": "Moi j'ai eu un retard de quatre heures une fois, j'ai failli craquer. Vous, vous êtes en correspondance serrée ou c'est juste l'angoisse naturelle ?"
      },
      {
        "accroche": "Vous serrez votre carte d'embarquement comme si elle allait s'envoler — c'est un vol important ou juste le stress de partir ?",
        "relance": "Moi avant un vol je relis mon billet dix fois pour rien. Vous voyagez pour le boulot ou c'est plutôt le grand départ ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le tableau d'affichage ne rassure personne là — vous avez une info sur ce qui se passe avec ce vol ?",
        "relance": "J'essaie de rester calme mais c'est de plus en plus dur. Vous avez un truc pour attendre sans exploser ?"
      },
      {
        "accroche": "On est tous scotchés à cette porte qui n'ouvre toujours pas — vous avez entendu quelque chose sur l'embarquement ?",
        "relance": "Moi j'ai horreur de ce flou où on sait pas si ça va bouger. Vous partez loin ou c'est un vol court ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Une salle d'embarquement bondée, c'est un concentré d'humanité sous pression — les gens réagissent tous pareil ou chacun son mode ?",
        "relance": "Moi je deviens silencieux et je lis, c'est mon truc. Vous, vous gérez comment l'attente quand vous pouvez rien contrôler ?"
      },
      {
        "accroche": "En voyage on a beau tout prévoir, il y a toujours un truc qui vient tout chambouler — vous êtes plutôt du genre à lâcher prise ou à tout contrôler ?",
        "relance": "Moi j'ai appris à force à improviser quand ça part en vrille. C'est quoi l'imprévu de voyage qui vous a le plus marqué ?"
      }
    ]
  },
  {
    "id": 37,
    "environnement": "Musée",
    "profil": "Guide culturel",
    "humeur": "Passionné",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Alimenter une curiosité sincère",
    "theme": "L'histoire derrière les œuvres",
    "zoomIn": [
      {
        "accroche": "Vous avez le regard de quelqu'un qui a une anecdote précise sur chaque pièce de la salle — laquelle vous préférez raconter ?",
        "relance": "Moi je lis les cartels sans vraiment retenir. C'est quoi le détail sur cette œuvre-là que personne ne remarque tout seul ?"
      },
      {
        "accroche": "Vous vous arrêtez toujours une seconde de plus devant cette toile-là, ça se voit que c'est une préférée — je me trompe ?",
        "relance": "Moi je passe devant sans savoir où regarder. C'est quoi l'histoire derrière celle-ci qu'on devinerait jamais tout seul ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce musée a une vraie ambiance à cette heure — moins de monde, la lumière naturelle… vous préférez guider avec peu de gens ou avec un grand groupe ?",
        "relance": "Je viens souvent au calme pour prendre le temps. C'est quoi la salle que vous recommandez à quelqu'un qui a une heure et veut pas regretter ?"
      },
      {
        "accroche": "Cette salle a une acoustique dingue, on chuchote sans même le vouloir — c'est votre coin préféré pour guider ?",
        "relance": "Moi je me perds toujours dans ces couloirs. C'est quoi le parcours que vous conseillez à quelqu'un qui veut pas juste survoler ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a quelque chose dans les musées qui fait que les gens ralentissent naturellement — dans la vie courante, personne prend autant de temps pour regarder.",
        "relance": "Moi je ressors toujours un peu plus calme. Vous, après des années ici, vous voyez encore les œuvres ou elles sont devenues un décor ?"
      },
      {
        "accroche": "C'est vertigineux de se dire que ces œuvres ont traversé des siècles pour finir devant nous ce matin — ça vous fait encore cet effet-là ?",
        "relance": "Moi je trouve ça fou qu'un simple objet nous relie à des gens disparus depuis longtemps. C'est quoi l'époque qui vous fascine le plus à raconter ?"
      }
    ]
  },
  {
    "id": 38,
    "environnement": "Immeuble Résidentiel",
    "profil": "Nouveau voisin",
    "humeur": "Réservé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Haute",
    "moment": "Tous",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Poser les bases d'un bon voisinage",
    "theme": "L'installation et le quartier",
    "zoomIn": [
      {
        "accroche": "Vous avez des cartons empilés avec une précision qui dit que vous avez déjà déménagé plusieurs fois — c'est votre système ou de la chance ?",
        "relance": "Moi mon dernier déménagement c'était le chaos absolu. C'est quoi la première chose que vous installez pour que ça ressemble à un chez-soi ?"
      },
      {
        "accroche": "Vous montez cette plante avec plus de précaution que les meubles — c'est votre chouchoute celle-là ?",
        "relance": "Moi la mienne a pas survécu au déménagement, un vrai carnage. C'est quoi le premier truc que vous tenez à installer pour vous sentir chez vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Bienvenue dans l'immeuble — vous venez juste d'arriver ou vous êtes là depuis quelques semaines ?",
        "relance": "Je suis là depuis deux ans et je connais encore à peine mes voisins. C'est quoi votre première impression du coin ?"
      },
      {
        "accroche": "On partage le même palier apparemment, on va se croiser souvent — vous vous installez à quel étage ?",
        "relance": "Moi je suis juste en face depuis un moment. C'est quoi qui vous a plu dans l'immeuble quand vous l'avez visité ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Déménager en ce moment avec le marché immobilier comme il est, c'est toute une aventure — vous avez trouvé facilement ?",
        "relance": "Moi j'ai mis six mois à me décider à bouger. C'est quoi le truc que vous cherchiez absolument et que vous avez trouvé ici ?"
      },
      {
        "accroche": "Changer de quartier c'est un peu tout réapprendre, la boulangerie, les raccourcis, les têtes — vous en êtes où dans vos repères ?",
        "relance": "Moi il m'a fallu des mois pour trouver mes petites adresses. C'est quoi que vous cherchez en priorité quand vous débarquez quelque part ?"
      }
    ]
  },
  {
    "id": 39,
    "environnement": "Espace de Coworking",
    "profil": "Indépendant souriant",
    "humeur": "Avenant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer un lien professionnel",
    "theme": "Le quotidien du freelance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air d'être installé ici comme chez vous, avec votre setup au millimètre — vous êtes un pilier de l'endroit ou c'est juste votre organisation naturelle ?",
        "relance": "Moi je change de place tous les jours, incapable de me poser. C'est quoi votre rituel pour vous mettre en mode boulot le matin ?"
      },
      {
        "accroche": "Vous avez un casque qui a l'air de vous couper du monde entier — c'est votre bulle de concentration ça ?",
        "relance": "Moi sans musique je suis incapable de me concentrer une minute. C'est quoi votre truc pour rester dans le flow toute une matinée ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'ambiance est plutôt bonne ici ce matin, ça bosse dans le calme — vous venez souvent à cette heure-là ?",
        "relance": "J'hésite à en faire mon QG. C'est quoi selon vous ce qui fait qu'on est vraiment productif dans un lieu comme ça ?"
      },
      {
        "accroche": "On se croise tous devant la machine à café sans jamais se parler, c'est un peu le point de rencontre de l'endroit — vous êtes plutôt du matin ici ?",
        "relance": "Moi je viens surtout pour pas bosser seul chez moi. C'est quoi qui vous a fait choisir le coworking plutôt que la maison ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou comme le travail a changé, on se retrouve tous à bosser côte à côte sans bosser ensemble — vous le vivez comment ce mode de vie ?",
        "relance": "Moi je me demande parfois si c'est la liberté ou la solitude. C'est quoi le meilleur côté du freelance pour vous ?"
      },
      {
        "accroche": "Être freelance c'est génial mais il faut une sacrée discipline pour pas partir dans tous les sens — vous avez trouvé votre équilibre ?",
        "relance": "Moi je jongle encore entre trop et pas assez de boulot. C'est quoi la chose que vous auriez aimé qu'on vous dise avant de vous lancer ?"
      }
    ]
  },
  {
    "id": 40,
    "environnement": "Pharmacie",
    "profil": "Client jovial",
    "humeur": "Bienveillant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Santé",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Détendre l'attente",
    "theme": "Prendre soin de soi",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de quelqu'un qui garde le sourire même dans la file d'attente d'une pharmacie — c'est un tempérament ou une bonne journée ?",
        "relance": "Moi l'attente ici me plombe toujours. C'est quoi votre secret pour rester de bonne humeur quand c'est un peu long ?"
      },
      {
        "accroche": "Vous avez toute une petite liste à la main, on dirait que vous avez anticipé votre passage — vous êtes du genre organisé ?",
        "relance": "Moi j'oublie toujours la moitié de ce que je venais chercher. C'est quoi votre astuce pour jamais rien oublier à la pharmacie ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a du monde aujourd'hui, on doit être en pleine saison des petits rhumes — vous tenez le coup avec ce temps ?",
        "relance": "Moi j'ai l'impression de tout attraper dès qu'il fait froid. C'est quoi votre réflexe santé quand la saison change ?"
      },
      {
        "accroche": "On patiente tranquillement tous les deux, c'est presque le seul endroit où on prend le temps sans râler — vous trouvez pas ?",
        "relance": "Moi j'en profite pour souffler un peu entre deux courses. Vous, vous venez ici par habitude ou c'est la plus proche de chez vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On parle beaucoup de prévention en ce moment, prendre soin de soi avant que ça aille mal — vous êtes plutôt du genre à anticiper ?",
        "relance": "Moi j'attends toujours le dernier moment. C'est quoi la petite habitude santé que vous ne lâcheriez pour rien au monde ?"
      },
      {
        "accroche": "On dirait qu'en ce moment tout le monde s'y met, à écouter son corps, à ralentir un peu — vous êtes sensible à cette vague-là aussi ?",
        "relance": "Moi je cours partout et je m'écoute jamais vraiment. C'est quoi la petite habitude qui vous fait le plus de bien au quotidien ?"
      }
    ]
  },
  {
    "id": 41,
    "environnement": "Salon de Coiffure",
    "profil": "Cliente à côté",
    "humeur": "Posée",
    "ageGroupe": "Tous",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Engager la conversation",
    "theme": "Le style et le changement",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de savoir exactement ce que vous voulez, vous êtes venue avec une idée précise en tête ?",
        "relance": "Moi je change d'avis dans le fauteuil à chaque fois. C'est quoi qui vous a décidée pour ce style-là aujourd'hui ?"
      },
      {
        "accroche": "Vous feuilletez ce magazine l'air de rien mais je parie que vous cherchez l'inspiration — vous hésitez encore ou c'est déjà décidé ?",
        "relance": "Moi j'arrive toujours avec une photo que le coiffeur regarde à peine. Vous, vous vous fiez plus à une image ou à ce qu'il vous conseille ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est toujours un petit moment suspendu ici, entre deux miroirs — vous venez dans ce salon depuis longtemps ?",
        "relance": "Moi je teste celui-ci pour la première fois. C'est quoi qui fait qu'on reste fidèle à un coiffeur selon vous ?"
      },
      {
        "accroche": "Il y a ce petit rituel du café qu'on vous propose en arrivant, j'aime bien cette parenthèse — c'est ce qui vous détend quand vous venez ?",
        "relance": "Moi je viens autant pour couper que pour ce moment un peu à part. C'est quoi qui fait pour vous une bonne expérience dans un salon ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Un changement de tête, ça tombe souvent quand on a envie de tourner une page — c'est un peu ça pour vous en ce moment ?",
        "relance": "Moi je coupe court à chaque fois que je veux repartir à zéro. C'est quoi le changement que vous aviez envie de vous offrir ?"
      },
      {
        "accroche": "Je trouve que ce qu'on porte sur la tête en dit long sur le moment qu'on traverse — vous vous reconnaissez là-dedans ?",
        "relance": "Moi mes coupes ont toujours suivi mes grandes décisions. C'est quoi le style qui vous a le plus ressemblé jusqu'ici ?"
      }
    ]
  },
  {
    "id": 42,
    "environnement": "Parc / Espace vert",
    "profil": "Promeneur de chien",
    "humeur": "Tranquille",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Nature",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Amorcer un échange simple",
    "theme": "Le plein air et les habitudes",
    "zoomIn": [
      {
        "accroche": "Votre chien a l'air de connaître le chemin par cœur, c'est lui qui vous promène ou l'inverse ?",
        "relance": "Moi je croise toujours les mêmes têtes ici sans jamais parler. C'est quoi son coin préféré dans ce parc ?"
      },
      {
        "accroche": "Il a une pêche incroyable votre chien, il vous tire déjà vers son parcours — il a une petite routine bien à lui on dirait ?",
        "relance": "Moi j'ai jamais eu de chien mais ça donne presque envie de voir ça. C'est quoi sa manie à lui pendant la promenade ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est calme à cette heure-ci, le parc est presque à nous — vous venez tous les matins ou c'est selon l'envie ?",
        "relance": "Moi j'essaie de m'y mettre pour commencer la journée. C'est quoi qui vous fait revenir ici plutôt qu'ailleurs ?"
      },
      {
        "accroche": "Les feuilles commencent à tomber, le parc change complètement en ce moment — vous le voyez se transformer au fil des jours vous aussi ?",
        "relance": "Moi je passe ici trop vite pour vraiment remarquer. C'est quoi la saison où vous préférez venir marcher ici ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Ça fait du bien ces petits bouts de nature en pleine ville, on en aurait presque besoin comme d'une pause — vous le ressentez aussi ?",
        "relance": "Moi je crois que je sous-estime à quel point ça me recentre. C'est quoi votre moment préféré ici au fil des saisons ?"
      },
      {
        "accroche": "Il y a un truc bien dans le fait de commencer la journée dehors plutôt que devant un écran — c'est un peu votre sas à vous ce moment ?",
        "relance": "Moi je saute direct sur mon téléphone au réveil, une horreur. C'est quoi qui vous a donné cette habitude de sortir dès le matin ?"
      }
    ]
  },
  {
    "id": 43,
    "environnement": "Cours de Yoga",
    "profil": "Voisin de tapis",
    "humeur": "Réservé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Soir",
    "centreInteret": "Bien-être",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Briser la glace avant le cours",
    "theme": "La pratique et le lâcher-prise",
    "zoomIn": [
      {
        "accroche": "Vous avez posé votre tapis pile au même endroit que la dernière fois, on a tous notre petit territoire ici — c'est votre place attitrée ?",
        "relance": "Moi je tourne encore pour trouver la mienne. C'est quoi qui vous a fait choisir ce coin de la salle ?"
      },
      {
        "accroche": "Vous avez un tapis qui a l'air d'avoir vécu pas mal de séances, ça se voit que vous pratiquez depuis un moment — j'me trompe ?",
        "relance": "Moi le mien sent encore le neuf, je débute complètement. C'est quoi le truc que vous auriez aimé savoir à vos débuts ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a toujours ce petit silence avant que le cours commence, j'aime bien ce moment — vous venez à cette séance régulièrement ?",
        "relance": "Moi je débute encore. C'est quoi selon vous qui fait qu'on accroche vraiment à un cours plutôt qu'à un autre ?"
      },
      {
        "accroche": "C'est agréable ce cours en fin de journée, ça clôt bien la journée — vous venez plutôt le soir exprès ?",
        "relance": "Moi j'ai choisi le soir pour vraiment déconnecter du boulot. C'est quoi qui vous fait tenir votre pratique dans la durée ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On court tous toute la journée et on vient chercher une heure de calme ici, c'est un peu paradoxal — ça vous fait cet effet-là aussi ?",
        "relance": "Moi j'ai du mal à débrancher le cerveau. C'est quoi qui vous a donné envie de vous mettre au yoga au départ ?"
      },
      {
        "accroche": "C'est marrant comme on met des années à comprendre qu'il faut aussi s'occuper de sa tête et pas juste de son corps — le yoga vous a apporté ça ?",
        "relance": "Moi j'ai découvert le lâcher-prise sur le tard. C'est quoi le changement que la pratique a fait naître chez vous sans que vous vous y attendiez ?"
      }
    ]
  },
  {
    "id": 44,
    "environnement": "Soirée Privée / Événement",
    "profil": "Invité en retrait",
    "humeur": "Discret",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Créer du lien dans un groupe",
    "theme": "Les rencontres et le hasard",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de préférer observer avant de vous lancer, je fais exactement pareil dans ces soirées — vous connaissez beaucoup de monde ici ?",
        "relance": "Moi je suis venu pour à peine deux personnes. C'est quoi votre lien avec l'hôte de la soirée ?"
      },
      {
        "accroche": "Vous êtes posté un peu en retrait comme moi, le dos au mur pour tout voir venir — c'est votre poste d'observation stratégique ça ?",
        "relance": "Moi je fais le tour du regard avant de me lancer, toujours. Vous êtes venu accompagné ou vous tentez le truc en solo ce soir ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est toujours le moment un peu flottant où personne n'ose vraiment se parler — vous vous en sortez comment dans ce genre de soirée ?",
        "relance": "Moi je me réfugie près du buffet en général. C'est quoi votre technique pour amorcer une conversation avec un inconnu ?"
      },
      {
        "accroche": "Il y a ce petit groupe là-bas qui rigole fort et nous deux un peu en marge, c'est toujours le même schéma dans ces soirées — vous vous glissez comment dans un groupe déjà formé ?",
        "relance": "Moi je me greffe en général à une conversation en posant une question. C'est quoi votre entrée en matière quand vous connaissez personne ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est marrant comme une soirée peut complètement changer selon une seule rencontre qu'on y fait — vous y croyez à ces hasards-là ?",
        "relance": "Moi les meilleures amitiés je les dois à des soirées où je ne voulais pas aller. C'est quoi la plus belle rencontre que vous ayez faite comme ça ?"
      },
      {
        "accroche": "C'est fou de penser qu'on pourrait tous les deux repartir de cette soirée avec un ami en plus ou rien du tout, juste selon qui on croise — vous y pensez à ça ?",
        "relance": "Moi je crois de plus en plus au bon moment, à la bonne personne au bon endroit. Vous êtes plutôt du genre à provoquer les choses ou à laisser venir ?"
      }
    ]
  },
  {
    "id": 45,
    "environnement": "Parc / Espace vert",
    "profil": "Joggeur pressé",
    "humeur": "Concentré",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Nature",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Placer un mot malgré la distance",
    "theme": "L'effort et le grand air",
    "zoomIn": [
      {
        "accroche": "Désolé de vous couper en plein effort — vous avez un rythme de vrai habitué, vous courez ce parcours tous les jours ?",
        "relance": "Moi je peine encore à tenir deux tours. C'est quoi le déclic qui vous a fait devenir aussi régulier ?"
      },
      {
        "accroche": "Désolé de vous arrêter — vous avez une montre qui a l'air de tout mesurer, vous courez avec des objectifs précis ou juste au feeling ?",
        "relance": "Moi je cours sans jamais rien mesurer, du coup je progresse pas. C'est quoi qui vous motive le plus, les chiffres ou la sensation ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez trouvé le seul créneau où le parc est encore respirable — c'est pour ça que vous venez si tôt ?",
        "relance": "Moi j'essaie de m'y mettre le matin sans y arriver. C'est quoi qui vous sort du lit à cette heure-là ?"
      },
      {
        "accroche": "L'air est encore frais à cette heure, c'est presque le meilleur moment pour courir ici — c'est ça que vous venez chercher si tôt ?",
        "relance": "Moi j'arrive jamais à me motiver quand il fait ce froid. C'est quoi qui vous fait affronter le petit matin comme ça ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Courir dehors quand tout le monde dort encore, il y a un truc presque méditatif là-dedans — vous le vivez comme ça ou c'est juste sportif ?",
        "relance": "Moi je crois que je cherche surtout à me vider la tête. C'est quoi qui vous fait revenir chaque matin malgré le froid ?"
      },
      {
        "accroche": "Il y a quelque chose dans l'effort du matin qui donne le ton de toute la journée, comme si on avait déjà gagné un truc — vous le ressentez comme ça ?",
        "relance": "Moi les jours où je bouge le matin je suis clairement plus solide ensuite. C'est quoi que la course vous apporte au-delà du sport ?"
      }
    ]
  },
  {
    "id": 46,
    "environnement": "Fromagerie / Épicerie Fine",
    "profil": "Client pressé au comptoir",
    "humeur": "Distant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Gastronomie",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Ouvrir un échange malgré la réserve",
    "theme": "Le goût et les bonnes adresses",
    "zoomIn": [
      {
        "accroche": "Vous avez pointé votre choix sans hésiter une seconde, ça sent le client qui sait ce qu'il aime — c'est votre incontournable celui-là ?",
        "relance": "Moi je reste planté devant la vitrine pendant dix minutes. C'est quoi le produit que vous prenez les yeux fermés à chaque fois ?"
      },
      {
        "accroche": "Votre panier est déjà bien garni, vous avez l'oeil de quelqu'un qui prépare un truc précis — vous recevez du monde ce soir ?",
        "relance": "Moi je repars toujours avec trois fois trop. C'est quoi le produit que vous ne pouvez pas vous empêcher de rajouter à chaque fois ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est une adresse qui a l'air de tenir la réputation du quartier — vous êtes un habitué ou vous passiez par hasard ?",
        "relance": "Moi je découvre l'endroit aujourd'hui. C'est quoi la spécialité de la maison qu'il ne faut surtout pas rater d'après vous ?"
      },
      {
        "accroche": "Il y a toujours cette petite file à cette heure-ci, signe que la maison est bonne — vous venez faire vos courses à ce moment-là d'habitude ?",
        "relance": "Moi je tombe toujours au pire moment. C'est quoi le meilleur créneau pour profiter des conseils du fromager sans la foule ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On revient toujours vers ces petites boutiques quand on veut vraiment bien manger, malgré tout ce qui va vite autour — vous êtes attaché à ça aussi ?",
        "relance": "Moi je fais l'effort seulement pour les grandes occasions. C'est quoi la dernière fois qu'un bon produit vous a vraiment marqué ?"
      },
      {
        "accroche": "Un bon produit c'est souvent ce qu'on offre pour dire je pense à vous, ça vaut tous les cadeaux — vous voyez ça pareil ?",
        "relance": "Moi j'offre plus volontiers un bon fromage qu'un bouquet. C'est quoi le dernier truc gourmand qui vous a fait vraiment plaisir à recevoir ?"
      }
    ]
  },
  {
    "id": 47,
    "environnement": "Salle de Sport",
    "profil": "Sportif concentré",
    "humeur": "Fermé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Sport",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Aborder sans casser la concentration",
    "theme": "L'entraînement et la régularité",
    "zoomIn": [
      {
        "accroche": "Je vais faire vite pour pas casser votre série — vous avez une technique super carrée sur cet exercice, ça fait longtemps que vous vous entraînez ?",
        "relance": "Moi je galère encore sur le mouvement. C'est quoi le conseil qui a tout changé pour vous quand vous avez débuté ?"
      },
      {
        "accroche": "Je vous vole dix secondes — vous chargez sacrément la barre, ça impose le respect, vous êtes sur un programme de force en ce moment ?",
        "relance": "Moi je plafonne toujours au même poids. C'est quoi qui vous a fait progresser le jour où vous stagniez ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est l'heure de pointe, faut jouer des coudes pour les machines — vous venez toujours à ce créneau ?",
        "relance": "Moi j'essaie de trouver le bon moment pour éviter l'affluence. C'est quoi votre astuce pour caler vos séances sans que ce soit blindé ?"
      },
      {
        "accroche": "Il y a une ambiance particulière le soir ici, tout le monde vient se vider la tête après le boulot — vous ressentez ça aussi ?",
        "relance": "Moi c'est mon sas avant de rentrer. C'est quoi qui vous fait choisir la muscu plutôt qu'un autre sport pour décompresser ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Tenir une routine sport dans une vie chargée, c'est presque le plus dur du truc — vous arrivez à rester régulier comment ?",
        "relance": "Moi je lâche dès que le boulot déborde. C'est quoi qui vous motive à revenir même les soirs sans envie ?"
      },
      {
        "accroche": "Le plus dingue dans le sport c'est que les résultats mettent des mois alors qu'on voudrait tout tout de suite — vous gérez cette patience comment ?",
        "relance": "Moi je me décourage si je ne vois rien en deux semaines. C'est quoi qui vous a appris à jouer sur le long terme ?"
      }
    ]
  },
  {
    "id": 48,
    "environnement": "Cabinet Médical",
    "profil": "Patient en salle d'attente",
    "humeur": "Anxieux",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Fatigué",
    "moment": "Matin",
    "centreInteret": "Santé",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Apaiser une attente tendue",
    "theme": "La patience et le moral",
    "zoomIn": [
      {
        "accroche": "On a tous cette tête un peu ailleurs dans une salle d'attente — vous avez l'air d'avoir trouvé le fauteuil le moins inconfortable, ça fait longtemps que vous patientez ?",
        "relance": "Moi je n'ose jamais demander où on en est. C'est quoi votre astuce pour faire passer le temps ici ?"
      },
      {
        "accroche": "Vous feuilletez ce vieux magazine comme moi, faute de mieux pour s'occuper l'esprit — vous patientez depuis un moment ?",
        "relance": "Moi je relis trois fois la même page sans rien retenir. C'est quoi votre truc pour ne pas trop cogiter en attendant ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ils ont l'air débordés ce matin, ça déborde un peu sur les horaires — vous aviez rendez-vous tôt vous aussi ?",
        "relance": "Moi j'ai appris à prévoir large maintenant. C'est quoi qui vous aide à rester zen quand ça traîne comme ça ?"
      },
      {
        "accroche": "C'est calme ce matin au moins, ça change des salles bondées — vous aviez réussi à avoir un créneau facilement ?",
        "relance": "Moi j'ai attendu trois semaines pour ce rendez-vous. C'est quoi votre astuce pour en décrocher un sans y passer des mois ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou comme on repousse toujours ces rendez-vous jusqu'au moment où on ne peut plus — vous êtes plutôt du genre à anticiper ou à attendre ?",
        "relance": "Moi je prends soin de tout sauf de moi. C'est quoi le truc que vous vous étiez promis de faire pour votre santé cette année ?"
      },
      {
        "accroche": "On attend toujours d'avoir mal quelque part pour enfin s'occuper de soi, c'est terrible — vous êtes plutôt à l'écoute de votre corps vous ?",
        "relance": "Moi j'ignore les signaux jusqu'au dernier moment. C'est quoi qui vous a fait prendre votre santé plus au sérieux ?"
      }
    ]
  },
  {
    "id": 49,
    "environnement": "Musée",
    "profil": "Visiteur solitaire",
    "humeur": "Absorbé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Partager un regard sur une œuvre",
    "theme": "L'art et les impressions",
    "zoomIn": [
      {
        "accroche": "Vous êtes resté un bon moment devant cette œuvre, ça se voit que quelque chose vous parle — c'est le détail ou l'ensemble qui vous retient ?",
        "relance": "Moi je passe souvent trop vite sans vraiment regarder. C'est quoi qui fait qu'une pièce vous arrête net comme ça ?"
      },
      {
        "accroche": "Vous prenez des notes devant les toiles, ça se voit que vous ne visitez pas ça en touriste — vous êtes du métier ou juste passionné ?",
        "relance": "Moi je repars toujours en ayant tout oublié. C'est quoi qui fait qu'une oeuvre reste gravée pour vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est agréable de visiter quand c'est aussi calme, on peut vraiment prendre son temps — vous connaissiez déjà cette expo ?",
        "relance": "Moi je suis venu un peu au hasard. C'est quoi la salle qui vaut vraiment le détour d'après vous ?"
      },
      {
        "accroche": "Cette lumière dans les salles change tout, on voit les oeuvres complètement différemment — vous étiez déjà venu ici ?",
        "relance": "Moi je découvre le lieu aujourd'hui. C'est quoi la salle où il faut absolument s'attarder d'après vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On vient chercher quoi au fond dans un musée, un peu de beauté, une pause hors du temps — c'est quoi qui vous y amène vous ?",
        "relance": "Moi je crois que je viens surtout pour ralentir. C'est quoi la dernière œuvre qui vous a vraiment remué ?"
      },
      {
        "accroche": "C'est fou comme deux personnes devant la même toile ne voient jamais la même chose — vous croyez qu'il faut connaître pour apprécier ?",
        "relance": "Moi je me sens souvent illégitime devant l'art moderne. C'est quoi qui vous touche vous, l'émotion ou l'histoire derrière ?"
      }
    ]
  },
  {
    "id": 50,
    "environnement": "Cours de Yoga",
    "profil": "Pratiquant renfermé",
    "humeur": "Distant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Fatigué",
    "moment": "Soir",
    "centreInteret": "Bien-être",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer un lien discret",
    "theme": "Le calme et la récupération",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air d'arriver ici pour vraiment décrocher, pas pour discuter — je comprends, mais je me lance quand même : grosse journée ?",
        "relance": "Moi je viens souvent lessivé aussi. C'est quoi qui vous fait tenir jusqu'au cours plutôt que rentrer direct t'écrouler ?"
      },
      {
        "accroche": "Vous installez votre tapis toujours dans le même coin tranquille, j'ai remarqué — c'est votre petit rituel pour couper du reste ?",
        "relance": "Moi je change de place à chaque fois sans jamais trouver la bonne. C'est quoi qui vous aide à vraiment vous poser en arrivant ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce cours du soir a un truc particulier, tout le monde arrive vidé et repart apaisé — ça vous fait cet effet-là aussi ?",
        "relance": "Moi je le garde comme mon sas de décompression. C'est quoi qui vous a fait choisir le créneau du soir ?"
      },
      {
        "accroche": "Ce prof a une voix qui suffit presque à faire redescendre la pression — vous suivez ce cours-là depuis longtemps ?",
        "relance": "Moi je viens tout juste d'arriver dans ce cours. C'est quoi qui vous a fait rester fidèle à celui-ci plutôt qu'un autre ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On passe nos journées à donner sans jamais récupérer, et cette heure-là c'est un peu la seule pour soi — vous le voyez comme ça ?",
        "relance": "Moi je culpabilise presque de prendre ce temps. C'est quoi qui vous aide vraiment à recharger les batteries en ce moment ?"
      },
      {
        "accroche": "On accumule toutes les tensions de la journée dans le corps sans même s'en rendre compte — vous le sentez où vous, le stress ?",
        "relance": "Moi c'est les épaules, toujours nouées. C'est quoi qui vous fait vraiment lâcher prise en ce moment ?"
      }
    ]
  },
  {
    "id": 51,
    "environnement": "Soirée Privée / Événement",
    "profil": "Invité qui fait tapisserie",
    "humeur": "Timide",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Sortir quelqu'un de sa réserve",
    "theme": "Le hasard des soirées",
    "zoomIn": [
      {
        "accroche": "On est deux à faire tapisserie dans ce coin, autant s'allier — vous non plus vous ne connaissez pas grand monde ici ?",
        "relance": "Moi je ne connais que la personne qui m'a traîné là. C'est quoi qui vous a décidé à venir ce soir ?"
      },
      {
        "accroche": "Vous surveillez votre verre comme si c'était votre seul allié de la soirée, je connais ça par coeur — vous êtes venu accompagné ?",
        "relance": "Moi je me réfugie près du buffet dès que je ne sais plus quoi faire. C'est quoi votre technique à vous pour tenir dans ces soirées ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a toujours ce moment un peu intimidant où tout le monde a déjà l'air de se connaître — vous vous sentez comment dans ces soirées ?",
        "relance": "Moi je suis clairement pas à l'aise dans les grands groupes. C'est quoi le format de soirée où vous vous sentez vraiment vous-même ?"
      },
      {
        "accroche": "La musique est un peu forte pour vraiment discuter, c'est le genre de soirée où on finit par crier — vous préférez quelle ambiance vous ?",
        "relance": "Moi je fuis dès que je ne peux plus m'entendre penser. C'est quoi le type de soirée où vous passez un vrai bon moment ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est étrange comme on peut se sentir seul au milieu d'une pièce pleine de monde — ça vous arrive aussi ou c'est juste moi ce soir ?",
        "relance": "Moi je préfère mille fois une vraie discussion à deux qu'une salle bondée. C'est quoi votre idée d'une bonne soirée à vous ?"
      },
      {
        "accroche": "Il y a des gens que ces soirées rechargent et d'autres que ça vide complètement — vous êtes plutôt lequel des deux ?",
        "relance": "Moi je repars toujours lessivé même quand c'était sympa. C'est quoi qui vous ressource vraiment après une semaine chargée ?"
      }
    ]
  },
  {
    "id": 52,
    "environnement": "Dans la rue",
    "profil": "Passante pressée",
    "humeur": "Sur la défensive",
    "ageGroupe": "Tous",
    "genre": "Femme",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Aborder avec tact et respect",
    "theme": "Le respect de l'espace",
    "zoomIn": [
      {
        "accroche": "Pardon de vous arrêter deux secondes, je vois que vous êtes pressée alors je fais court — vous auriez pas repéré une bonne adresse dans le coin par hasard ?",
        "relance": "Je débarque dans le quartier et je suis un peu perdu. C'est quoi l'endroit du coin qu'une locale comme vous recommanderait ?"
      },
      {
        "accroche": "Vous marchez d'un pas de quelqu'un qui connaît le quartier par coeur, ça tombe bien — je cherche mon chemin, vous auriez dix secondes ?",
        "relance": "Je viens d'arriver et je suis complètement perdu. C'est quoi le repère à connaître pour ne pas se paumer dans le coin ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce quartier bouge tout le temps, on a du mal à suivre entre ce qui ouvre et ce qui ferme — vous êtes du coin ?",
        "relance": "Moi je viens d'emménager à deux rues d'ici. C'est quoi qui a changé dans le quartier ces derniers temps d'après vous ?"
      },
      {
        "accroche": "Tout le monde presse le pas là avec ce ciel menaçant, moi le premier — vous savez s'il y a un coin sympa pour s'abriter deux minutes ?",
        "relance": "Moi je débarque et je ne connais rien. C'est quoi le café du coin où on est bien pour attendre que ça passe ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On court tous à cent à l'heure dans cette ville, on prend plus le temps de lever la tête — vous la trouvez comment l'ambiance en ce moment ?",
        "relance": "Moi j'essaie justement de ralentir un peu. C'est quoi votre petit coin préféré pour souffler dans le quartier ?"
      },
      {
        "accroche": "C'est rare qu'on s'arrête pour se parler dans la rue, on est tous dans notre bulle — vous trouvez pas que la ville isole un peu ?",
        "relance": "Moi j'essaie de sourire aux gens même pressé. C'est quoi qui vous redonne un peu foi en l'ambiance de la ville parfois ?"
      }
    ]
  },
  {
    "id": 53,
    "environnement": "Dans la rue",
    "profil": "Personne au style marqué",
    "humeur": "Réservée",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Complimenter sans être lourd",
    "theme": "Le style et l'allure",
    "zoomIn": [
      {
        "accroche": "Je me permets juste un mot avant de continuer mon chemin — votre veste est vraiment classe, c'est une trouvaille ou une marque que je devrais connaître ?",
        "relance": "Moi je galère à sortir des sentiers battus côté fringues. C'est quoi votre truc pour avoir un style aussi affirmé ?"
      },
      {
        "accroche": "Je me permets, promis je ne vous retarde pas — vos lunettes sont incroyables, un accessoire comme ça change tout un visage, c'est chiné où ?",
        "relance": "Moi je n'oserais jamais porter un truc aussi affirmé. C'est quoi qui vous donne cette audace côté style ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a des quartiers où les gens osent vraiment côté style, et ici on en fait clairement partie — vous vous habillez où en général ?",
        "relance": "Moi je tourne toujours dans les mêmes boutiques. C'est quoi la bonne adresse mode du coin que les gens connaissent pas ?"
      },
      {
        "accroche": "On sent que dans ce coin les gens soignent vraiment leur allure, c'est presque un défilé permanent — vous traînez souvent par ici ?",
        "relance": "Moi je manque cruellement d'inspiration. C'est quoi l'endroit du quartier qui vous inspire le plus côté look ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "La mode revient tellement vite en boucle qu'on sait plus ce qui est vintage ou tendance — vous suivez ça ou vous faites votre truc ?",
        "relance": "Moi je crois que je m'habille pareil depuis dix ans. C'est quoi la pièce qui pour vous ne se démode jamais ?"
      },
      {
        "accroche": "Au fond le style c'est une façon de dire qui on est sans parler, je trouve ça fascinant — vous vous habillez pour vous ou pour le regard des autres ?",
        "relance": "Moi je crois que je me cache un peu derrière mes fringues neutres. C'est quoi que votre style raconte de vous d'après vous ?"
      }
    ]
  },
  {
    "id": 54,
    "environnement": "Dans la rue",
    "profil": "Voisin de quartier",
    "humeur": "Avenant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Social",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Transformer un croisement en lien",
    "theme": "La vie de quartier",
    "zoomIn": [
      {
        "accroche": "On se croise tout le temps dans cette rue sans jamais se dire un mot, c'est presque comique — vous habitez par ici depuis longtemps ?",
        "relance": "Moi ça fait un an et je connais personne. C'est quoi le coin où les gens du quartier se retrouvent vraiment ?"
      },
      {
        "accroche": "Je vous vois souvent promener votre chien à cette heure-là, il a une sacrée bonne bouille — ça fait longtemps que vous êtes du quartier ?",
        "relance": "Moi j'hésite justement à en adopter un. C'est quoi le coin sympa pour les balades dans le secteur ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Belle matinée pour une fois, ça donne envie de traîner dehors — vous commencez la journée par une balade vous aussi ?",
        "relance": "Moi j'essaie de prendre l'air avant de bosser. C'est quoi votre parcours préféré pour un tour le matin ?"
      },
      {
        "accroche": "Le boulanger du coin a une file jusqu'à dehors ce matin, ça sent la bonne adresse — vous allez au même vous ?",
        "relance": "Moi je cherche encore ma boulangerie de coeur. C'est quoi le commerce du quartier que vous recommanderiez les yeux fermés ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou comme on peut vivre dans la même rue pendant des années sans se connaître — vous trouvez pas que ça se perd un peu, la vie de quartier ?",
        "relance": "Moi je trouve ça dommage qu'on se parle plus entre voisins. C'est quoi qui créerait plus de lien dans le coin selon vous ?"
      },
      {
        "accroche": "Je trouve qu'un quartier où les gens se disent bonjour, ça change tout au quotidien — vous l'avez connu plus vivant avant ?",
        "relance": "Moi je rêve d'un coin où on peut compter sur ses voisins. C'est quoi qui fait qu'on se sent vraiment chez soi quelque part selon vous ?"
      }
    ]
  },
  {
    "id": 55,
    "environnement": "Immeuble de Bureaux",
    "profil": "Collègue croisé dans le hall",
    "humeur": "Avenant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Social",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Transformer un croisement en lien",
    "theme": "La vie de l'immeuble",
    "zoomIn": [
      {
        "accroche": "On se croise tous les matins devant les ascenseurs sans jamais se parler — vous êtes à quel étage, on est peut-être voisins de palier professionnel ?",
        "relance": "Moi je suis au 4e, la boîte de design. C'est quoi votre boîte, on se demande toujours qui fait quoi dans cet immeuble ?"
      },
      {
        "accroche": "Vous avez toujours ce grand café à la main le matin, comme moi, on est clairement pas des gens du matin — vous bossez à quel étage ?",
        "relance": "Moi c'est le troisième, sans caféine je n'existe pas. C'est quoi la meilleure machine à café de l'immeuble, la vraie grande question ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce hall a un côté impersonnel fou, on pourrait se croiser dix ans sans se connaître — vous travaillez ici depuis longtemps ?",
        "relance": "Moi ça fait deux ans et je reconnais à peine trois visages. C'est quoi le seul endroit où les gens se parlent vraiment ici ?"
      },
      {
        "accroche": "L'ascenseur met toujours trois plombes le matin, on finit par se dévisager un peu gênés — vous montez haut vous ?",
        "relance": "Moi je prends parfois les escaliers juste pour éviter l'attente. C'est quoi votre truc pour survivre à l'heure de pointe du hall ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est marrant comme on passe plus de temps avec des inconnus de bureau qu'avec nos amis — vous le vivez comment ce rythme ?",
        "relance": "Moi je cours toute la semaine sans lever la tête. C'est quoi qui rend une journée de boulot vraiment agréable pour vous ?"
      },
      {
        "accroche": "Il y a ceux qui débarquent à fond dès huit heures et ceux qui émergent doucement, moi je rame — vous êtes de quelle équipe ?",
        "relance": "Moi il me faut une bonne heure pour être vraiment là. C'est quoi votre rituel pour bien attaquer la journée ?"
      }
    ]
  },
  {
    "id": 56,
    "environnement": "Immeuble de Bureaux",
    "profil": "Visiteur qui attend en réception",
    "humeur": "Impatient",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Meubler une attente commune",
    "theme": "L'attente et les rendez-vous",
    "zoomIn": [
      {
        "accroche": "On a tous les deux cette tête de gens qui poireautent en réception — vous attendez pour un rendez-vous vous aussi ou vous bossez ici ?",
        "relance": "Moi j'ai vingt minutes d'avance, l'angoisse d'être en retard. C'est quoi votre technique pour gérer l'attente avant un rendez-vous important ?"
      },
      {
        "accroche": "Vous consultez votre montre toutes les deux minutes, je fais pareil, l'attente rend dingue — vous avez un rendez-vous qui traîne aussi ?",
        "relance": "Moi je déteste faire poireauter les gens du coup je stresse pour deux. C'est quoi qui vous agace le plus quand on vous fait attendre ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ces halls d'entreprise sont tous pareils, canapé design et magazines que personne ne lit — vous venez souvent dans ce genre d'endroit ?",
        "relance": "Moi je fais le tour des boîtes toute la semaine pour le boulot. C'est quoi qui fait bonne impression quand on arrive quelque part selon vous ?"
      },
      {
        "accroche": "La réceptionniste jongle avec trois téléphones à la fois, chapeau — vous venez ici pour la première fois vous aussi ?",
        "relance": "Moi je découvre la boîte aujourd'hui. C'est quoi le détail qui vous rassure quand vous débarquez dans un endroit inconnu ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On juge tellement une boîte à son accueil, avant même d'avoir parlé à quelqu'un — vous y êtes sensible aussi à ces premières impressions ?",
        "relance": "Moi je me fais un avis en trente secondes en entrant quelque part. C'est quoi le détail qui vous met tout de suite à l'aise ou pas ?"
      },
      {
        "accroche": "On passe un temps fou de notre vie à attendre, en réception, aux caisses, partout — vous en faites quoi vous de ces moments morts ?",
        "relance": "Moi je n'ai jamais appris à ne rien faire, ça me rend fou. C'est quoi qui vous aide à prendre l'attente avec philosophie ?"
      }
    ]
  },
  {
    "id": 57,
    "environnement": "Marché en plein air",
    "profil": "Client devant l'étal",
    "humeur": "Curieux",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Gastronomie",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Échanger un bon plan cuisine",
    "theme": "Les produits de saison",
    "zoomIn": [
      {
        "accroche": "Vous avez l'œil pour choisir vos légumes, ça se voit que vous savez repérer les bons — c'est un truc que vous avez appris ou de l'instinct ?",
        "relance": "Moi je prends toujours à l'aveugle. C'est quoi le signe qui vous dit qu'un fruit est vraiment mûr et bon ?"
      },
      {
        "accroche": "Vous sentez les melons avant de choisir, le vrai geste de connaisseur — c'est une méthode qui marche vraiment ça ?",
        "relance": "Moi je tape dessus sans savoir ce que j'écoute. C'est quoi le truc infaillible pour tomber sur le bon à tous les coups ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce marché a une sélection vraiment au-dessus des autres du coin — vous faites vos courses ici toutes les semaines ?",
        "relance": "Moi je découvre l'endroit ce matin. C'est quoi l'étal qu'il ne faut surtout pas rater d'après vous ?"
      },
      {
        "accroche": "Ce maraîcher a toujours une file, c'est souvent bon signe pour la qualité — vous avez vos habitudes chez lui ?",
        "relance": "Moi je teste ce stand pour la première fois. C'est quoi le produit de chez lui qu'il faut absolument goûter ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Ça fait du bien de revenir au marché plutôt qu'au supermarché, on redécouvre le goût des saisons — vous êtes attaché à ça aussi ?",
        "relance": "Moi j'essaie de manger plus local. C'est quoi le produit de saison que vous attendez avec impatience en ce moment ?"
      },
      {
        "accroche": "Il y a un vrai plaisir à cuisiner un truc qu'on a choisi soi-même le matin, ça se perd un peu je trouve — vous cuisinez beaucoup vous ?",
        "relance": "Moi je m'y remets doucement le week-end. C'est quoi le plat de saison que vous adorez préparer en ce moment ?"
      }
    ]
  },
  {
    "id": 58,
    "environnement": "Marché en plein air",
    "profil": "Producteur de miel",
    "humeur": "Passionné",
    "ageGroupe": "Tous",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Nature",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Apprendre du savoir-faire",
    "theme": "La nature et les abeilles",
    "zoomIn": [
      {
        "accroche": "On sent que derrière votre stand il y a une vraie histoire, vous avez la passion de quelqu'un qui parle de son métier — vous êtes apiculteur depuis longtemps ?",
        "relance": "Moi je fantasme sur cette vie au grand air. C'est quoi qui vous a fait choisir ce métier au départ ?"
      },
      {
        "accroche": "Vous avez une gamme impressionnante, du plus clair au presque noir, chaque pot son caractère — c'est quoi qui fait toute cette différence de couleur ?",
        "relance": "Moi je pensais naïvement qu'un miel c'était un miel. C'est quoi votre préféré à vous parmi tout ce que vous produisez ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vos pots ont l'air d'être les stars du marché, ça se bouscule un peu — c'est le miel de la région ?",
        "relance": "Moi je goûte rarement du vrai miel local. C'est quoi qui change vraiment entre un miel de supermarché et le vôtre ?"
      },
      {
        "accroche": "Vous êtes là chaque semaine sur ce marché, les habitués foncent direct chez vous — vous faites beaucoup de marchés comme celui-là ?",
        "relance": "Moi je découvre votre stand aujourd'hui. C'est quoi le marché où vous prenez le plus de plaisir à venir ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On parle beaucoup des abeilles et de l'environnement en ce moment, vous devez être aux premières loges — ça change quoi pour vous ?",
        "relance": "Moi j'ai l'impression qu'on prend enfin conscience de ces choses-là. C'est quoi qui vous inquiète ou vous rend optimiste pour la suite ?"
      },
      {
        "accroche": "Votre métier vous met au rythme des saisons et de la météo comme peu de gens le vivent encore — ça change le rapport au temps ça non ?",
        "relance": "Moi je vis complètement déconnecté des saisons en ville. C'est quoi que la nature vous a appris que la ville fait oublier ?"
      }
    ]
  },
  {
    "id": 59,
    "environnement": "Parking / Livraison",
    "profil": "Voisin qui charge sa voiture",
    "humeur": "Détendu",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer un lien de voisinage",
    "theme": "Les galères de parking",
    "zoomIn": [
      {
        "accroche": "Vous avez l'art de tout faire rentrer dans le coffre, moi je galère toujours — c'est un déménagement ou juste de grosses courses ?",
        "relance": "Moi je m'y prends toujours mal. C'est quoi votre astuce pour caser tout ça sans jouer au Tetris pendant dix minutes ?"
      },
      {
        "accroche": "Vous avez un porte-vélo bien rodé sur le toit, ça donne envie de partir loin — vous vous échappez le week-end ?",
        "relance": "Moi mon vélo prend la poussière au garage. C'est quoi votre spot préféré pour rouler pas trop loin d'ici ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce parking c'est toujours la guerre pour une place — vous vous garez ici tous les jours vous aussi ?",
        "relance": "Moi je tourne un quart d'heure à chaque fois. C'est quoi votre créneau pour trouver une place sans galérer ?"
      },
      {
        "accroche": "Le camion de livraison bloque encore la moitié de l'allée, c'est récurrent ici — vous galérez souvent à sortir vous aussi ?",
        "relance": "Moi je manque de rester coincé une fois sur deux. C'est quoi l'horaire tranquille pour manoeuvrer sans stress dans ce parking ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou tout le temps qu'on perd dans ces histoires de voiture et de parking dans une vie — vous y pensez parfois ?",
        "relance": "Moi je me dis que je devrais passer au vélo. C'est quoi qui vous ferait lâcher la voiture, ou jamais de la vie ?"
      },
      {
        "accroche": "Ce sont tous ces petits trucs du quotidien qui grignotent nos journées sans qu'on voie rien venir — vous arrivez à vous simplifier la vie vous ?",
        "relance": "Moi j'accumule les corvées jusqu'à saturation. C'est quoi le truc que vous avez arrêté de faire pour vous alléger la vie ?"
      }
    ]
  },
  {
    "id": 60,
    "environnement": "Parking / Livraison",
    "profil": "Gardien du parking",
    "humeur": "Bourru",
    "ageGroupe": "Tous",
    "genre": "Homme",
    "vibe": "Neutre",
    "energie": "Fatigué",
    "moment": "Soir",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Humaniser un échange de service",
    "theme": "Les coulisses du lieu",
    "zoomIn": [
      {
        "accroche": "Vous devez tout voir passer depuis votre poste, les pressés, les perdus, les râleurs — on doit vous en faire voir de belles non ?",
        "relance": "Moi je serais incapable de garder mon calme. C'est quoi le truc le plus improbable que vous ayez vu ici ?"
      },
      {
        "accroche": "Vous avez tout un mur d'écrans devant vous, on dirait une salle de contrôle — vous arrivez vraiment à tout suivre là-dessus ?",
        "relance": "Moi je serais hypnotisé au bout de cinq minutes. C'est quoi qui attire votre oeil en premier sur ces écrans ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ça tourne sans arrêt un endroit comme ça, vous êtes un peu la mémoire des lieux — vous bossez ici depuis longtemps ?",
        "relance": "Moi je passe tous les jours sans jamais avoir pris le temps de dire bonjour. C'est quoi le meilleur moment de votre journée ici ?"
      },
      {
        "accroche": "C'est calme à cette heure-ci, la grosse affluence est passée — c'est le bon moment de la journée pour vous le soir ?",
        "relance": "Moi je finis tard aussi et j'aime ce calme du soir. C'est quoi le moment le plus tranquille de votre service ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a plein de métiers de l'ombre comme le vôtre qui font tourner la ville sans qu'on les remarque — vous le vivez comment ça ?",
        "relance": "Moi je trouve qu'on ne dit pas assez merci à ces gens-là. C'est quoi qui vous fait tenir dans ce boulot au quotidien ?"
      },
      {
        "accroche": "Vous bossez pile quand tout le monde rentre chez soi, ça doit faire un drôle de rythme de vie — vous vous y êtes fait avec le temps ?",
        "relance": "Moi j'aurais du mal avec les horaires décalés. C'est quoi le bon côté de bosser quand la ville se vide selon vous ?"
      }
    ]
  },
  {
    "id": 61,
    "environnement": "Chantier / Entrepôt",
    "profil": "Ouvrier à la pause",
    "humeur": "Chaleureux",
    "ageGroupe": "Tous",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Social",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Partager un moment de pause",
    "theme": "La camaraderie du chantier",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air d'être celui qui met l'ambiance dans l'équipe, on le sent tout de suite — ça fait longtemps que vous bossez avec eux ?",
        "relance": "Moi j'ai l'impression que la bonne équipe change tout dans ce genre de boulot. C'est quoi qui soude un groupe sur un chantier ?"
      },
      {
        "accroche": "Vous partagez votre casse-croûte avec toute l'équipe sans même y penser, ça en dit long sur l'ambiance — vous formez une bonne bande ici ?",
        "relance": "Moi je crois que ce sont ces petits gestes qui font tenir un groupe. C'est quoi le rituel qui vous rassemble tous à la pause ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La pause café sur un chantier c'est presque sacré, le seul vrai moment pour souffler — vous êtes sur ce site depuis le début ?",
        "relance": "Moi je passe juste en coup de vent. C'est quoi le chantier le plus dingue sur lequel vous avez bossé ?"
      },
      {
        "accroche": "Le chantier qui se réveille doucement au petit matin, avec le café qui fume et le froid qui pique, c'est une ambiance qu'on trouve nulle part ailleurs — vous démarrez tôt comme ça tous les jours ?",
        "relance": "Moi je ne fais que passer, mais cette énergie du matin me plaît bien. C'est quoi votre moment préféré dans une journée de chantier ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est un métier dur physiquement mais il y a une vraie fierté à construire quelque chose de concret — vous le ressentez comme ça ?",
        "relance": "Moi je bosse derrière un écran, j'envie parfois ceux qui voient le résultat de leurs mains. C'est quoi qui vous rend fier dans ce que vous faites ?"
      },
      {
        "accroche": "Ce que vous montez là sera encore debout dans cinquante ans, quelqu'un y vivra sans jamais savoir qui l'a bâti — ça vous fait quelque chose d'y penser ?",
        "relance": "Moi mon travail disparaît dès que j'éteins l'ordinateur. C'est quoi le bâtiment dont vous êtes le plus fier d'avoir fait partie ?"
      }
    ]
  },
  {
    "id": 62,
    "environnement": "Chantier / Entrepôt",
    "profil": "Cariste de l'entrepôt",
    "humeur": "Concentré",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Travail",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Aborder pendant le travail",
    "theme": "L'organisation et la logistique",
    "zoomIn": [
      {
        "accroche": "Vous manœuvrez cet engin comme si c'était une extension de vous, impressionnant — il faut combien de temps pour être aussi à l'aise ?",
        "relance": "Moi je serais tétanisé aux commandes. C'est quoi le plus dur à maîtriser au début dans ce métier ?"
      },
      {
        "accroche": "Vous alignez ces palettes au millimètre, on voit que rien n'est laissé au hasard chez vous — c'est un truc qui vient avec l'expérience ?",
        "relance": "Moi je mettrais tout de travers en cinq minutes. C'est quoi la petite fierté du métier qu'on ne remarque jamais de l'extérieur ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ça n'arrête pas ici, on dirait une fourmilière parfaitement réglée — c'est toujours ce rythme ou c'est un gros jour ?",
        "relance": "Moi je découvre les coulisses, on n'imagine pas le boulot derrière une simple livraison. C'est quoi qui coince le plus dans une journée ?"
      },
      {
        "accroche": "Cet entrepôt est un vrai labyrinthe, on doit facilement s'y perdre les premiers jours — vous connaissez chaque allée par cœur maintenant ?",
        "relance": "Moi je tournerais en rond pendant des heures ici. C'est quoi l'astuce pour se repérer dans un endroit pareil ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Tout le monde commande en ligne sans penser une seconde à la chaîne derrière — vous avez vu le métier changer avec ça ?",
        "relance": "Moi je me rends compte à quel point on dépend de gens comme vous. C'est quoi qui a le plus évolué dans votre travail ces dernières années ?"
      },
      {
        "accroche": "Quand on y pense, presque tout ce qu'on possède est passé entre des mains comme les vôtres à un moment, et on n'y pense jamais — ça vous frappe parfois ?",
        "relance": "Moi je réalise à peine le chemin que fait un colis avant d'arriver. C'est quoi que les gens ignorent complètement sur votre métier ?"
      }
    ]
  },
  {
    "id": 63,
    "environnement": "Aéroport",
    "profil": "Voyageur dans la file",
    "humeur": "Excité",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Partager l'excitation du départ",
    "theme": "Les destinations et l'évasion",
    "zoomIn": [
      {
        "accroche": "Vous avez cette énergie de quelqu'un qui part pour quelque chose de bien, ça se voit sur votre visage — c'est les vacances ou un voyage spécial ?",
        "relance": "Moi j'adore ce moment juste avant de partir. C'est quoi la destination qui vous fait le plus vibrer là maintenant ?"
      },
      {
        "accroche": "Votre sac a des étiquettes de partout, vous avez l'air d'un vrai baroudeur — c'est encore une nouvelle aventure qui commence ?",
        "relance": "Moi je collectionne les endroits où je rêve d'aller. C'est quoi le voyage qui vous a donné le goût de repartir sans cesse ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Les files d'attente d'aéroport, c'est le seul endroit où tout le monde va quelque part de différent — vous décollez d'où à peu près ?",
        "relance": "Moi je pars vers le sud. C'est quoi le meilleur voyage que vous ayez commencé depuis cet aéroport ?"
      },
      {
        "accroche": "Se lever aux aurores pour attraper un vol, il y a un truc excitant là-dedans malgré la fatigue — vous partez pour longtemps ?",
        "relance": "Moi j'adore cette effervescence du terminal au petit matin. C'est quoi votre rituel juste avant d'embarquer ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a un truc unique dans les aéroports, cette promesse que tout est possible juste après le contrôle — vous le ressentez aussi ?",
        "relance": "Moi je pourrais rester des heures à regarder les gens partir. C'est quoi le voyage qui a changé quelque chose en vous ?"
      },
      {
        "accroche": "Il y a cette idée derrière chaque départ qu'on va revenir un peu différent, un peu plus grand — vous voyagez pour ça aussi ?",
        "relance": "Moi chaque voyage me change quelque chose. C'est quoi que vous cherchez vraiment quand vous partez à l'autre bout du monde ?"
      }
    ]
  },
  {
    "id": 64,
    "environnement": "Aéroport",
    "profil": "Passager en correspondance",
    "humeur": "Épuisé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Fatigué",
    "moment": "Soir",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Réconforter une attente pénible",
    "theme": "Les galères de transit",
    "zoomIn": [
      {
        "accroche": "Vous avez la tête de quelqu'un qui enchaîne les vols depuis trop longtemps — grosse correspondance vous aussi ?",
        "relance": "Moi ça fait huit heures que je traîne ici. C'est quoi votre secret pour survivre à une escale interminable ?"
      },
      {
        "accroche": "Vous avez déniché le seul coin avec une prise qui marche, respect — vous campez ici depuis longtemps ?",
        "relance": "Moi ça fait trois heures que je cherche où recharger mon téléphone. C'est quoi votre kit de survie pour une escale qui n'en finit pas ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ces zones de transit c'est un monde à part, hors du temps et hors du sol — vous venez d'où et vous allez où au juste ?",
        "relance": "Moi je rentre d'un déplacement pro qui n'en finit pas. C'est quoi la pire escale que vous ayez vécue ?"
      },
      {
        "accroche": "Le terminal à moitié désert le soir, avec les boutiques qui ferment, ça a un côté un peu irréel — votre vol est retardé aussi ?",
        "relance": "Moi je patiente depuis des heures dans ce calme bizarre. C'est quoi la plus longue attente que vous ayez encaissée dans un aéroport ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou comme voyager, censé être un rêve, peut devenir aussi épuisant — vous le vivez comment ce paradoxe ?",
        "relance": "Moi je ne sais plus si j'aime voyager ou juste être arrivé. C'est quoi qui rend un voyage vraiment ressourçant pour vous ?"
      },
      {
        "accroche": "C'est étrange ces moments où on n'a plus aucune prise sur rien, juste à attendre que le temps passe — vous le vivez comment ce genre d'attente ?",
        "relance": "Moi je supporte de moins en moins de ne rien maîtriser. C'est quoi qui vous aide à lâcher prise quand tout est bloqué comme ça ?"
      }
    ]
  },
  {
    "id": 65,
    "environnement": "Gare / Quai SNCF",
    "profil": "Voyageur sur le quai",
    "humeur": "Détendu",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Amorcer un échange d'attente",
    "theme": "Le charme du train",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air serein alors que tout le monde s'agite, ça fait du bien à voir — vous êtes un habitué de cette ligne ?",
        "relance": "Moi je stresse toujours de rater mon train. C'est quoi votre astuce pour voyager aussi zen ?"
      },
      {
        "accroche": "Vous voyagez léger, juste un petit sac, ça sent le voyageur qui sait s'y prendre — vous partez souvent comme ça sur un coup de tête ?",
        "relance": "Moi je pars toujours avec trois valises de trop. C'est quoi votre secret pour voyager aussi léger ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a quelque chose d'apaisant dans l'attente sur un quai, entre deux trains — vous partez loin aujourd'hui ?",
        "relance": "Moi je rejoins la famille pour le week-end. C'est quoi le trajet en train que vous préférez faire ?"
      },
      {
        "accroche": "Cette gare a un charme un peu à l'ancienne, avec la grande horloge et les annonces qui résonnent — vous prenez cette ligne souvent ?",
        "relance": "Moi j'aime bien ces gares qui ont une âme. C'est quoi la plus belle gare que vous ayez traversée ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Le train c'est un peu le dernier endroit où on a le droit de ne rien faire, juste regarder défiler le paysage — vous en profitez comment ?",
        "relance": "Moi je lis ou je regarde par la fenêtre pendant des heures. C'est quoi votre rituel une fois installé dans le train ?"
      },
      {
        "accroche": "Prendre le train plutôt que l'avion, c'est presque un choix de vie aujourd'hui, une façon de ralentir — vous le voyez comme ça vous aussi ?",
        "relance": "Moi je préfère mille fois arriver lentement en ayant vu le paysage. C'est quoi qui vous plaît le plus dans le voyage en train ?"
      }
    ]
  },
  {
    "id": 66,
    "environnement": "Gare / Quai SNCF",
    "profil": "Voyageuse pressée et inquiète",
    "humeur": "Stressée",
    "ageGroupe": "Tous",
    "genre": "Femme",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Rassurer avec tact",
    "theme": "Les aléas des transports",
    "zoomIn": [
      {
        "accroche": "Vous consultez le panneau toutes les dix secondes, je fais pareil quand je stresse — vous avez peur de rater une correspondance ?",
        "relance": "Moi je suis jamais tranquille tant que je suis pas assis dans le train. C'est quoi qui vous met le plus la pression là ?"
      },
      {
        "accroche": "Vous serrez votre billet comme s'il allait s'envoler, je reconnais bien ce petit stress — vous avez peur de vous tromper de train ?",
        "relance": "Moi je vérifie mon quai dix fois avant de me poser. C'est quoi qui vous rassurerait le plus là tout de suite ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Encore un matin où les affichages font n'importe quoi, on ne sait plus quel quai croire — vous cherchez quelle ligne ?",
        "relance": "Moi je suis perdu avec tous ces changements de quai. C'est quoi votre technique pour ne pas paniquer quand tout est chamboulé ?"
      },
      {
        "accroche": "Le quai est noir de monde ce matin, on se demande comment tout ce monde va tenir dans le train — vous attendez celui de quelle heure ?",
        "relance": "Moi je déteste ces matins où tout le monde se marche dessus. C'est quoi votre astuce pour rester zen dans la cohue ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On dépend tellement de ces trains pour nos vies entières que le moindre retard fait tout s'écrouler — vous le vivez comment ce stress-là ?",
        "relance": "Moi j'ai appris à prévoir large pour ne plus subir. C'est quoi qui vous aiderait à voyager plus sereinement au quotidien ?"
      },
      {
        "accroche": "On court tous après le temps dès le réveil, comme si une minute de retard allait tout faire basculer — vous avez cette impression aussi le matin ?",
        "relance": "Moi j'ai fini par partir plus tôt juste pour arrêter de courir. C'est quoi qui vous mettrait un peu moins la pression le matin ?"
      }
    ]
  },
  {
    "id": 67,
    "environnement": "Hôtel",
    "profil": "Client au petit-déjeuner",
    "humeur": "Détendu",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Créer un lien entre voyageurs",
    "theme": "Les découvertes en voyage",
    "zoomIn": [
      {
        "accroche": "Vous avez le guide de la ville ouvert à côté de votre café, ça sent le programme chargé — vous découvrez le coin vous aussi ?",
        "relance": "Moi je n'ai encore rien prévu. C'est quoi le premier endroit que vous comptez aller voir ?"
      },
      {
        "accroche": "Vous avez déjà l'appareil photo autour du cou au petit-déj, ça sent le programme bien rempli — vous chassez quoi comme images dans le coin ?",
        "relance": "Moi je photographie tout et n'importe quoi en voyage. C'est quoi le genre d'endroit que vous cherchez toujours à capturer ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est toujours drôle ces petits-déjeuners d'hôtel où on est tous des voyageurs de passage — vous êtes là pour le travail ou le plaisir ?",
        "relance": "Moi je profite d'un week-end prolongé. C'est quoi qui vous a amené dans cette ville précisément ?"
      },
      {
        "accroche": "J'adore ces buffets d'hôtel où on entend cinq langues différentes à trois tables d'écart — vous venez de loin vous aussi ?",
        "relance": "Moi je trouve ça dépaysant rien que le petit-déjeuner. C'est quoi le pays qui vous a le plus surpris côté cuisine du matin ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a un truc particulier à se réveiller dans une ville qu'on ne connaît pas, tout est à explorer — vous aimez ça aussi voyager comme ça ?",
        "relance": "Moi je me perds toujours volontairement le premier jour. C'est quoi votre façon à vous de découvrir une nouvelle ville ?"
      },
      {
        "accroche": "Les meilleurs moments en voyage sont souvent ceux qu'on n'a pas prévus, un détour, une rencontre — vous laissez de la place au hasard vous aussi ?",
        "relance": "Moi mes plus beaux souvenirs viennent tous d'un truc pas planifié. C'est quoi la plus belle surprise qu'un voyage vous ait réservée ?"
      }
    ]
  },
  {
    "id": 68,
    "environnement": "Hôtel",
    "profil": "Concierge de l'hôtel",
    "humeur": "Serviable",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Obtenir de vraies bonnes adresses",
    "theme": "Les secrets de la ville",
    "zoomIn": [
      {
        "accroche": "Vous devez connaître cette ville par cœur à force de conseiller les gens — vous êtes du coin depuis toujours ?",
        "relance": "Moi je veux fuir les pièges à touristes. C'est quoi l'adresse que vous donnez seulement aux gens qui la méritent ?"
      },
      {
        "accroche": "J'ai aperçu votre petit carnet plein d'adresses griffonnées, c'est là que sont cachés les vrais trésors j'imagine — vous le tenez depuis longtemps ?",
        "relance": "Moi je note tout aussi dans un carnet. C'est quoi la meilleure adresse que vous y ayez jamais inscrite ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Un bon concierge vaut tous les guides du monde, on le sait entre voyageurs avertis — c'est quoi votre spécialité, les restos, les balades ?",
        "relance": "Moi je cherche un truc authentique pour ce soir. C'est quoi l'endroit où vous iriez vous-même après votre service ?"
      },
      {
        "accroche": "Le hall est calme cet après-midi, c'est le bon moment pour vous voler quelques conseils — vous avez un petit creux entre deux arrivées ?",
        "relance": "Moi je préfère demander à quelqu'un qui vit ici plutôt qu'à internet. C'est quoi le quartier que vous conseillez et qu'aucun guide ne mentionne ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vous voyez défiler des gens du monde entier, ça doit donner une drôle de vision des voyageurs — ils cherchent tous la même chose au fond ?",
        "relance": "Moi je crois qu'on voyage tous pour se sentir un peu vivants. C'est quoi la plus belle rencontre que ce métier vous a offerte ?"
      },
      {
        "accroche": "Votre métier c'est un peu de rendre les gens heureux le temps d'un séjour, c'est plutôt rare comme mission — ça vous plaît autant que ça en a l'air ?",
        "relance": "Moi je trouve beau ce métier de l'accueil. C'est quoi qui vous procure le plus de satisfaction quand vous aidez quelqu'un ?"
      }
    ]
  },
  {
    "id": 69,
    "environnement": "Transport en Commun",
    "profil": "Étudiant plongé dans un livre",
    "humeur": "Absorbé",
    "ageGroupe": "Jeune",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Rebondir sur une passion visible",
    "theme": "Les lectures et les idées",
    "zoomIn": [
      {
        "accroche": "Vous êtes tellement dans votre bouquin que vous avez failli rater l'arrêt, ça doit être bon — c'est quoi que vous lisez ?",
        "relance": "Moi je cherche justement ma prochaine lecture. C'est quoi le livre qui vous a le plus marqué récemment ?"
      },
      {
        "accroche": "Votre bouquin est couvert d'annotations et de coins pliés, on voit que vous le vivez à fond — c'est pour les cours ou par pur plaisir ?",
        "relance": "Moi j'annote toujours mes livres aussi, ça rend fous mes amis. C'est quoi le genre de passage qui vous donne envie de sortir un stylo ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le transport c'est le seul moment où on arrive vraiment à lire sans être dérangé — enfin, sauf par des curieux comme moi — vous faites ce trajet souvent ?",
        "relance": "Moi je n'arrive jamais à me concentrer dans le bruit. C'est quoi votre secret pour vous plonger dans un livre au milieu de tout ça ?"
      },
      {
        "accroche": "C'est l'heure où le bus se remplit d'étudiants qui rentrent, on sent la journée de cours dans l'air — vous rentrez de la fac ?",
        "relance": "Moi j'ai fait mes plus belles lectures dans les transports quand j'étais étudiant. C'est quoi qui vous a donné le goût de lire comme ça ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est rare de voir encore quelqu'un lire un vrai livre plutôt que scroller sur son téléphone — vous êtes un résistant ?",
        "relance": "Moi je passe trop de temps sur mon écran, ça me déprime. C'est quoi qui vous a gardé accroché à la lecture ?"
      },
      {
        "accroche": "Un bon livre c'est un peu comme vivre mille vies sans quitter son siège, il n'y a pas plus fort comme évasion — vous lisez pour vous échapper ou pour apprendre ?",
        "relance": "Moi la lecture m'a ouvert des portes que rien d'autre n'aurait pu. C'est quoi le livre qui a changé votre façon de voir les choses ?"
      }
    ]
  },
  {
    "id": 70,
    "environnement": "Transport en Commun",
    "profil": "Personne avec écouteurs",
    "humeur": "Distante",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Soir",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Aborder sans être intrusif",
    "theme": "La bulle du trajet",
    "zoomIn": [
      {
        "accroche": "Désolé de percer votre bulle une seconde — vous avez l'air à fond dans votre musique, ça doit être une sacrée playlist pour tenir ce trajet ?",
        "relance": "Moi la musique c'est ma survie dans les transports. C'est quoi qui tourne en boucle chez vous en ce moment ?"
      },
      {
        "accroche": "Pardon de vous déranger — vous battez la mesure du pied sans même vous en rendre compte, ça doit envoyer du lourd dans ces écouteurs — c'est quoi le style ?",
        "relance": "Moi la musique me fait oublier tout le trajet. C'est quoi l'artiste que vous pourriez écouter en boucle sans jamais vous lasser ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On est tous chacun dans notre coin avec nos écouteurs, c'est devenu la règle tacite du transport — vous rentrez du boulot vous aussi ?",
        "relance": "Moi cette ligne me pompe toute mon énergie le soir. C'est quoi qui vous aide à décompresser sur le trajet du retour ?"
      },
      {
        "accroche": "Tout le wagon a la tête des soirs de semaine, vidé par la journée — vous rentrez d'une grosse journée vous aussi ?",
        "relance": "Moi le trajet du soir c'est mon sas de décompression. C'est quoi qui vous fait le plus de bien une fois la journée finie ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou comme on peut être à trente collés les uns aux autres et pourtant chacun dans son monde — ça vous frappe aussi parfois ?",
        "relance": "Moi je trouve ça un peu triste au fond. C'est quoi qui vous ferait lever les yeux et parler à un inconnu, comme là ?"
      },
      {
        "accroche": "C'est fou comme on se fabrique tous une petite bulle pour tenir le rythme de la ville, chacun sa musique, son refuge — la vôtre vous protège de quoi ?",
        "relance": "Moi mes écouteurs c'est mon bouclier contre le bruit du monde. C'est quoi qui vous permet de recharger les batteries dans une journée trop pleine ?"
      }
    ]
  },
  {
    "id": 71,
    "environnement": "Librairie",
    "profil": "Lecteur dans un rayon",
    "humeur": "Pensif",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Échanger sur une passion commune",
    "theme": "Les coups de cœur littéraires",
    "zoomIn": [
      {
        "accroche": "Vous tournez autour de ce rayon depuis un moment, comme quelqu'un qui hésite entre trop de bonnes options — vous cherchez un titre précis ?",
        "relance": "Moi je repars toujours avec trois livres que je n'avais pas prévus. C'est quoi le dernier qui vous a scotché ?"
      },
      {
        "accroche": "Vous enchaînez les quatrièmes de couverture avec un vrai air de connaisseur — vous suivez un auteur en particulier ?",
        "relance": "Moi je choisis souvent un livre juste à sa première phrase. C'est quoi qui vous décide vous, la couverture, le résumé, le hasard ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cette librairie a une sélection vraiment pointue, on sent qu'il y a quelqu'un de passionné derrière — vous venez souvent farfouiller ici ?",
        "relance": "Moi je découvre l'endroit. C'est quoi le rayon où vous pourriez passer des heures ?"
      },
      {
        "accroche": "Il y a un calme presque religieux dans ce rayon l'après-midi, on chuchoterait presque — vous venez chercher l'inspiration ici souvent ?",
        "relance": "Moi je viens ici quand j'ai besoin de me poser. C'est quoi l'ambiance de librairie qui vous fait revenir ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a un plaisir rare à choisir un livre en vrai, à le feuilleter, loin des algorithmes qui décident pour nous — vous êtes attaché à ça ?",
        "relance": "Moi j'ai besoin de toucher les livres avant de choisir. C'est quoi qui fait qu'un bouquin vous appelle depuis une étagère ?"
      },
      {
        "accroche": "Je crois qu'un livre nous tombe entre les mains toujours au bon moment, comme s'il nous attendait — ça vous est déjà arrivé cette impression ?",
        "relance": "Moi certains livres m'ont trouvé pile quand j'en avais besoin. C'est quoi le bouquin qui est arrivé au bon moment dans votre vie ?"
      }
    ]
  },
  {
    "id": 72,
    "environnement": "Librairie",
    "profil": "Client indécis aux nouveautés",
    "humeur": "Hésitant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Soir",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Aider un choix en douceur",
    "theme": "Le vertige du choix",
    "zoomIn": [
      {
        "accroche": "Vous reposez et reprenez le même livre depuis cinq minutes, je connais ce dilemme par cœur — il vous tente mais quelque chose vous freine ?",
        "relance": "Moi j'ai toujours peur de me tromper de lecture. C'est quoi qui vous fait franchir le pas pour un livre au final ?"
      },
      {
        "accroche": "Vous avez déjà une belle pile dans les bras et vous hésitez encore, je connais ce combat — vous n'arrivez pas à vous limiter non plus ?",
        "relance": "Moi je repars toujours avec deux de trop. C'est quoi votre critère pour finalement en reposer un ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La table des nouveautés c'est un piège, tout a l'air génial et on ne sait plus où donner de la tête — vous cherchez pour vous ou pour offrir ?",
        "relance": "Moi je dois trouver un cadeau et je sèche complètement. C'est quoi le livre que vous offririez les yeux fermés ?"
      },
      {
        "accroche": "La librairie va bientôt fermer, ça ajoute un petit stress au moment de choisir — vous cherchiez quelque chose de précis ce soir ?",
        "relance": "Moi je décide toujours au dernier moment sous la contrainte. C'est quoi qui vous ferait dire allez, c'est celui-là ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On a tellement de choix aujourd'hui pour tout que ça en devient paralysant, même pour un simple livre — vous ressentez ça aussi ?",
        "relance": "Moi trop d'options me bloquent complètement. C'est quoi votre méthode pour vous décider sans y passer la soirée ?"
      },
      {
        "accroche": "Au fond, hésiter autant pour un livre c'est vouloir être sûr de bien occuper son temps libre, et il est précieux — vous vivez vos choix comme ça aussi ?",
        "relance": "Moi j'ai peur de gâcher mes rares soirées de lecture avec le mauvais livre. C'est quoi qui vous fait dire qu'un livre valait le temps passé dessus ?"
      }
    ]
  },
  {
    "id": 73,
    "environnement": "Restaurant",
    "profil": "Client à la table voisine",
    "humeur": "Convivial",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Créer un lien entre tables",
    "theme": "Le plaisir de la table",
    "zoomIn": [
      {
        "accroche": "Votre plat a l'air incroyable, on n'a pas pu s'empêcher de loucher dessus — c'est quoi que vous avez pris ?",
        "relance": "Moi je n'arrive jamais à choisir sur une carte. C'est quoi votre technique pour ne pas regretter votre commande ?"
      },
      {
        "accroche": "Vous avez commandé un vin qui a l'air d'un sacré choix, nous on n'y connaît rien — vous vous y connaissez ou c'est le serveur qui vous a guidés ?",
        "relance": "Moi je prends toujours le vin au hasard sur la carte. C'est quoi votre méthode pour tomber sur une bonne bouteille ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cet endroit a une ambiance vraiment chaleureuse, on se sent bien tout de suite — vous êtes des habitués ou vous découvrez comme nous ?",
        "relance": "Moi c'est ma première fois ici. C'est quoi le plat de la maison qu'il faut absolument goûter d'après vous ?"
      },
      {
        "accroche": "Il y a une sacrée effervescence dans ce resto ce soir, ça donne le sourire rien que d'être là — vous fêtez quelque chose de votre côté ?",
        "relance": "Moi on est là pour un petit événement. C'est quoi la dernière occasion qui vous a réunis autour d'une bonne table ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il n'y a rien de tel qu'un bon repas pour rassembler les gens, c'est un peu universel ça — vous êtes plutôt bonne table vous aussi ?",
        "relance": "Moi les meilleurs souvenirs sont toujours autour d'un repas. C'est quoi le dernier resto qui vous a vraiment marqué ?"
      },
      {
        "accroche": "On a cette chance en France de faire durer un repas des heures, juste pour le plaisir d'être ensemble — vous êtes du genre à traîner à table vous aussi ?",
        "relance": "Moi je pourrais rester des heures à discuter une fois l'assiette vide. C'est quoi le repas qui s'est le plus éternisé pour vous, dans le bon sens ?"
      }
    ]
  },
  {
    "id": 74,
    "environnement": "Restaurant",
    "profil": "Chef qui sort en salle",
    "humeur": "Passionné",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Gastronomie",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Complimenter et apprendre",
    "theme": "La cuisine et le métier",
    "zoomIn": [
      {
        "accroche": "On voit tout de suite la fierté du chef dans votre façon de présenter les plats — ce plat de ce soir, c'est une création à vous ?",
        "relance": "Moi je serais incapable d'inventer un plat. C'est quoi qui vous inspire quand vous imaginez une nouvelle recette ?"
      },
      {
        "accroche": "Vous scrutez discrètement nos réactions en salle, j'imagine que chaque assiette qui revient vide vous fait plaisir — c'est votre baromètre du soir ?",
        "relance": "Moi je ne vois pas comment on peut cuisiner sans stresser du jugement. C'est quoi qui vous dit qu'un plat est vraiment réussi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est rare qu'un chef prenne le temps de venir en salle, ça fait plaisir — grosse soirée en cuisine ce soir ?",
        "relance": "Moi j'imagine le stress d'un service complet. C'est quoi le plus dur à gérer un soir d'affluence ?"
      },
      {
        "accroche": "Votre carte a l'air de changer au fil des saisons, ça sent le produit frais déniché le matin même — vous allez au marché vous-même ?",
        "relance": "Moi j'adore quand une carte suit les saisons. C'est quoi le produit du moment qui vous rend le plus enthousiaste en cuisine ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "La gastronomie française est un vrai patrimoine, vous devez porter ça avec une certaine responsabilité — vous le vivez comment ?",
        "relance": "Moi je trouve qu'on redécouvre le goût du bien manger. C'est quoi qui a le plus changé dans votre métier ces dernières années ?"
      },
      {
        "accroche": "Au fond cuisiner pour des inconnus, c'est leur offrir un peu de vous dans chaque plat, c'est plutôt beau comme idée — vous le vivez comme un partage ?",
        "relance": "Moi je trouve qu'un bon plat raconte toujours quelqu'un. C'est quoi que vous cherchez à faire ressentir aux gens qui goûtent votre cuisine ?"
      }
    ]
  },
  {
    "id": 75,
    "environnement": "Taxi / VTC",
    "profil": "Chauffeur peu bavard",
    "humeur": "Réservé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Fatigué",
    "moment": "Soir",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Briser un silence poli",
    "theme": "Les longues journées au volant",
    "zoomIn": [
      {
        "accroche": "Je vous sens concentré sur la route, je vais pas vous embêter — mais dites, ça fait combien d'heures que vous roulez aujourd'hui ?",
        "relance": "Moi je serais lessivé à votre place. C'est quoi qui vous aide à tenir sur les longues journées au volant ?"
      },
      {
        "accroche": "Vous conduisez tout en souplesse, on se sent en sécurité tout de suite, c'est agréable — vous faites ça depuis un bon moment j'imagine ?",
        "relance": "Moi je serais incapable de rester calme dans la circulation. C'est quoi qui vous garde aussi zen au volant toute la journée ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La ville est calme à cette heure, ça doit être le seul moment tranquille de votre journée — vous préférez rouler le soir ?",
        "relance": "Moi j'aime bien cette ambiance de ville la nuit. C'est quoi votre créneau préféré pour bosser ?"
      },
      {
        "accroche": "Les rues se vident enfin à cette heure, on file sans un feu rouge — c'est plus reposant de rouler quand la ville dort ?",
        "relance": "Moi j'aime cette ville quand elle est vide comme ça. C'est quoi le trajet que vous préférez faire une fois la nuit tombée ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vous devez entendre toutes les histoires du monde dans votre voiture, une vraie boîte à confidences sur roues — ça vous marque parfois ?",
        "relance": "Moi je trouve ça fascinant tous ces gens qui passent. C'est quoi la course la plus mémorable que vous ayez faite ?"
      },
      {
        "accroche": "C'est un drôle de métier au fond, seul dans sa bulle des heures durant mais à croiser cent vies par jour — vous vous sentez plutôt seul ou entouré là-dedans ?",
        "relance": "Moi je crois que je parlerais tout seul à votre place. C'est quoi qui vous tient compagnie pendant toutes ces heures de route ?"
      }
    ]
  },
  {
    "id": 76,
    "environnement": "Taxi / VTC",
    "profil": "Chauffeur passionné de sa ville",
    "humeur": "Volubile",
    "ageGroupe": "Tous",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Profiter d'un guide local",
    "theme": "Les secrets de la ville",
    "zoomIn": [
      {
        "accroche": "Vous connaissez visiblement chaque raccourci de cette ville, on se sent en sécurité — vous conduisez ici depuis toujours ?",
        "relance": "Moi je débarque et je suis perdu. C'est quoi le quartier que vous préférez dans cette ville ?"
      },
      {
        "accroche": "Vous avez glissé une petite photo du vieux quartier sur votre tableau de bord, ça sent l'attachement à cette ville — vous êtes né ici ?",
        "relance": "Moi je viens juste d'arriver et je ne connais rien. C'est quoi le coin qui vous rend le plus fier de votre ville ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On passe devant des coins que je n'aurais jamais vus tout seul, c'est mieux qu'une visite guidée — c'est quoi ce bâtiment qu'on vient de croiser ?",
        "relance": "Moi j'adore découvrir une ville par les yeux d'un local. C'est quoi l'endroit que les touristes ratent toujours ?"
      },
      {
        "accroche": "Là on prend un itinéraire que jamais un GPS ne m'aurait proposé, vous coupez par des rues que je ne soupçonnais même pas — c'est un raccourci de vrai connaisseur ça ?",
        "relance": "Moi je serais resté bloqué sur le grand axe pendant une heure. C'est quoi le coin de la ville que même les GPS n'ont pas encore compris ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vous voyez la ville changer jour après jour depuis votre voiture, c'est un observatoire unique — elle va dans le bon sens d'après vous ?",
        "relance": "Moi j'ai l'impression que tout va trop vite partout. C'est quoi qui a le plus changé dans votre ville ces dernières années ?"
      },
      {
        "accroche": "Vous devez croiser toute la ville dans une journée, des humeurs, des vies, des histoires — on apprend beaucoup sur les gens dans ce métier non ?",
        "relance": "Moi je trouve qu'on se confie plus facilement à un chauffeur qu'à ses proches parfois. C'est quoi la chose la plus surprenante qu'on vous ait racontée dans la voiture ?"
      }
    ]
  },
  {
    "id": 77,
    "environnement": "Piscine",
    "profil": "Nageur de la ligne voisine",
    "humeur": "Motivé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Sport",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Partager la motivation sportive",
    "theme": "L'effort et la régularité",
    "zoomIn": [
      {
        "accroche": "Vous avez un crawl super régulier, ça se voit que c'est pas votre première longueur — vous nagez depuis longtemps ?",
        "relance": "Moi je m'essouffle au bout de deux longueurs. C'est quoi le conseil qui vous a fait progresser le plus ?"
      },
      {
        "accroche": "J'ai vu que vous enchaînez les virages culbute sans jamais casser le rythme, ça c'est de la vraie technique — vous avez fait de la compète ?",
        "relance": "Moi je m'arrête au mur à chaque fois comme un débutant. C'est quoi le truc à travailler en priorité pour gagner en fluidité ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est le bon plan de venir tôt, on a presque les lignes pour nous — vous êtes du genre matinal pour nager ?",
        "relance": "Moi j'essaie de m'y tenir mais c'est dur de sortir du lit. C'est quoi qui vous motive à venir aussi tôt ?"
      },
      {
        "accroche": "L'eau est parfaite ce matin, ni trop froide ni trop chaude, ils l'ont bien réglée — vous avez vos petites habitudes d'horaires ici ?",
        "relance": "Moi je teste plusieurs créneaux pour trouver le bon. C'est quoi le moment où la piscine est la plus agréable selon vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "La natation c'est le sport où on est vraiment seul avec sa tête, presque méditatif — vous venez pour le corps ou pour vous vider l'esprit ?",
        "relance": "Moi je crois que je viens surtout pour débrancher. C'est quoi que la nage vous apporte au-delà du sport ?"
      },
      {
        "accroche": "Ce qui m'impressionne dans la nage c'est la régularité que ça demande, revenir encore et encore — c'est ça le vrai secret pour progresser non ?",
        "relance": "Moi je tiens deux semaines puis je lâche tout. C'est quoi qui vous fait revenir même les matins où vous n'avez aucune envie ?"
      }
    ]
  },
  {
    "id": 78,
    "environnement": "Piscine",
    "profil": "Parent au bord du bassin",
    "humeur": "Bienveillant",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Social",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer un lien entre parents",
    "theme": "La vie de famille",
    "zoomIn": [
      {
        "accroche": "On est plusieurs à surveiller nos petits du coin de l'œil, la routine du mercredi — c'est le vôtre celui qui saute partout ?",
        "relance": "Moi le mien refuse de sortir de l'eau à chaque fois. C'est quoi votre technique pour les convaincre que le cours est fini ?"
      },
      {
        "accroche": "Vous avez la serviette déjà déployée avant même qu'il sorte de l'eau, ça c'est l'expérience du parent rodé — c'est le vôtre le petit poisson là-bas ?",
        "relance": "Moi j'oublie toujours un truc, le bonnet ou les lunettes. C'est quoi votre organisation pour ne rien oublier le mercredi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ces après-midis piscine avec les enfants, on se retrouve toujours les mêmes au bord du bassin — vous venez tous les mercredis vous aussi ?",
        "relance": "Moi je commence à reconnaître les têtes. C'est quoi les autres activités que vous faites faire aux vôtres ?"
      },
      {
        "accroche": "Ils ont l'air bien encadrés par le maître-nageur, on peut souffler cinq minutes pendant le cours — le vôtre est dans quel groupe de niveau ?",
        "relance": "Moi le mien vient de passer au grand bain, grande fierté. C'est quoi les progrès qui vous ont le plus étonné chez le vôtre ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou tout ce qu'on trimballe nos enfants pour qu'ils s'épanouissent, on ne s'arrête jamais — vous le vivez comment cette course ?",
        "relance": "Moi j'ai parfois l'impression d'être un taxi plus qu'un parent. C'est quoi qui compte le plus pour vous dans tout ça au fond ?"
      },
      {
        "accroche": "C'est beau de les voir apprendre un truc qu'ils garderont toute leur vie, comme nager — vous aimez les voir grandir comme ça vous aussi ?",
        "relance": "Moi ça me serre le cœur de les voir devenir autonomes si vite. C'est quoi l'étape de leur enfance qui vous touche le plus en ce moment ?"
      }
    ]
  },
  {
    "id": 79,
    "environnement": "Boulangerie",
    "profil": "Client dans la file",
    "humeur": "Pressé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Partager un moment de file",
    "theme": "Les petits plaisirs du matin",
    "zoomIn": [
      {
        "accroche": "Vous avez repéré les croissants qui sortent du four, moi aussi je les guette — vous craquez pour lesquels d'habitude ?",
        "relance": "Moi j'hésite toujours entre pain au choc et croissant. C'est quoi votre péché mignon du matin ?"
      },
      {
        "accroche": "Vous avez déjà la baguette bien serrée sous le bras, prêt à filer — vous êtes plutôt tradition ou pain de campagne vous ?",
        "relance": "Moi je change d'avis à chaque fois devant le comptoir. C'est quoi le pain que vous prenez les yeux fermés ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cette boulangerie a toujours la queue jusqu'à la porte, c'est bon signe — vous venez ici tous les matins vous aussi ?",
        "relance": "Moi je viens de m'installer dans le quartier. C'est quoi la spécialité de la maison qu'il faut absolument tester ?"
      },
      {
        "accroche": "L'odeur dès qu'on pousse la porte, ça réveille mieux qu'un café — c'est sur votre chemin du boulot cette boulangerie ?",
        "relance": "Moi je fais un petit détour exprès pour celle-ci. C'est quoi qui fait qu'on devient fidèle à une boulangerie plutôt qu'une autre ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a un vrai bonheur simple dans le pain frais du matin, un truc qui traverse les générations — vous y êtes attaché aussi ?",
        "relance": "Moi c'est mon petit rituel qui rend la journée meilleure. C'est quoi votre petit plaisir quotidien à vous ?"
      },
      {
        "accroche": "C'est fou comme un petit rien le matin peut donner le ton de toute la journée, même pressé — vous avez ce genre de rituel qui vous lance vous ?",
        "relance": "Moi sans mon détour boulangerie la journée démarre de travers. C'est quoi le petit geste du matin dont vous ne pourriez pas vous passer ?"
      }
    ]
  },
  {
    "id": 80,
    "environnement": "Boulangerie",
    "profil": "Habitué du matin",
    "humeur": "Jovial",
    "ageGroupe": "Senior",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Social",
    "proximite": "Habitué",
    "audace": 1,
    "objectif": "Nouer un lien de quartier",
    "theme": "Les habitudes et le voisinage",
    "zoomIn": [
      {
        "accroche": "On dirait que la boulangère connaît déjà votre commande par cœur, ça c'est le vrai statut d'habitué — vous venez ici depuis des années ?",
        "relance": "Moi je rêve d'être reconnu comme ça quelque part. C'est quoi qui fait qu'on s'attache à un commerce de quartier ?"
      },
      {
        "accroche": "Vous avez lancé un bonjour à la cantonade en entrant, tout le monde vous connaît ici — ça fait partie de votre tournée du matin ce petit passage ?",
        "relance": "Moi j'aimerais avoir ce genre de rituel qui rythme mes journées. C'est quoi votre parcours du matin dans le quartier ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est un peu le cœur du quartier ces boulangeries, on y croise toujours du monde qu'on connaît — vous habitez le coin depuis longtemps ?",
        "relance": "Moi je découvre le quartier. C'est quoi qui a le plus de charme ici selon un ancien comme vous ?"
      },
      {
        "accroche": "À cette heure on croise toujours les mêmes visages sur le trottoir, une vraie petite communauté — vous les connaissez tous depuis longtemps ?",
        "relance": "Moi je viens tout juste d'emménager et j'aimerais m'intégrer. C'est quoi le secret pour se faire une place dans un quartier comme ici ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Ces petits commerces qui résistent, c'est ce qui fait qu'un quartier reste vivant plutôt qu'anonyme — vous le ressentez comme ça ?",
        "relance": "Moi je trouve ça précieux, ces lieux où on se parle encore. C'est quoi qui a le plus changé dans le quartier à vos yeux ?"
      },
      {
        "accroche": "À notre époque où tout le monde a le nez sur son téléphone, ça fait du bien ces endroits où on prend encore le temps de se dire bonjour — vous trouvez pas ?",
        "relance": "Moi je crois qu'on a besoin de ces petits liens du quotidien plus qu'on ne l'admet. C'est quoi qui vous manquerait le plus si ces commerces disparaissaient ?"
      }
    ]
  },
  {
    "id": 81,
    "environnement": "Banque / Agence",
    "profil": "Personne dans la file d'attente",
    "humeur": "Agacée",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Désamorcer l'agacement partagé",
    "theme": "La patience des démarches",
    "zoomIn": [
      {
        "accroche": "On a tous les deux cette tête de gens qui pensaient en avoir pour cinq minutes — vous êtes là depuis longtemps aussi ?",
        "relance": "Moi je venais pour un truc censé être rapide. C'est quoi votre astuce pour ne pas péter un câble dans ces files ?"
      },
      {
        "accroche": "Vous regardez votre montre toutes les trente secondes, je fais exactement pareil — vous aviez prévu autre chose juste après j'imagine ?",
        "relance": "Moi j'ai un truc qui m'attend derrière et ça me stresse. C'est quoi qui vous met le plus en retard aujourd'hui ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est incroyable qu'il faille encore se déplacer et attendre pour ce genre de démarche en 2024 — vous gérez tout en agence vous aussi ?",
        "relance": "Moi je fais un maximum en ligne mais parfois pas le choix. C'est quoi qui vous oblige à venir sur place aujourd'hui ?"
      },
      {
        "accroche": "Un seul guichet d'ouvert un après-midi pareil, ils font exprès je crois — vous avez pris un ticket ou vous tentez la file directe ?",
        "relance": "Moi je n'ai jamais rien compris à leur système de numéros. C'est quoi votre stratégie pour que ça avance plus vite dans ces agences ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On passe un temps fou dans ces démarches administratives sans fin, c'est un peu le prix de la vie moderne — vous vivez ça comment ?",
        "relance": "Moi ça me déprime toute cette paperasse. C'est quoi qui vous simplifierait vraiment la vie si ça existait ?"
      },
      {
        "accroche": "On a l'impression que plus ça va, plus on nous fait faire le travail nous-mêmes tout en devant attendre quand même — vous avez ce sentiment aussi ?",
        "relance": "Moi j'ai parfois l'impression qu'on nous prend notre temps sans le moindre scrupule. C'est quoi qui vous ferait vraiment sentir respecté comme client ?"
      }
    ]
  },
  {
    "id": 82,
    "environnement": "Banque / Agence",
    "profil": "Client au guichet voisin",
    "humeur": "Posé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Amorcer un échange simple",
    "theme": "Les projets et l'argent",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de quelqu'un qui gère ses affaires tranquillement, sans stress — vous venez pour un projet ou juste de la routine ?",
        "relance": "Moi je viens de me lancer dans un projet un peu fou. C'est quoi votre rapport à ces grandes décisions financières ?"
      },
      {
        "accroche": "Vous avez sorti votre dossier bien rangé, tout est classé, ça se voit que vous êtes organisé — c'est pour un projet précis que vous préparez tout ça ?",
        "relance": "Moi je débarque toujours avec mes papiers en vrac. C'est quoi votre méthode pour garder vos affaires aussi carrées ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est calme ce matin, on est loin de la cohue habituelle — vous avez trouvé le bon créneau pour éviter l'attente ?",
        "relance": "Moi je viens toujours à l'ouverture pour ça. C'est quoi votre truc pour que ces passages en agence soient les moins pénibles ?"
      },
      {
        "accroche": "Vous avez rendez-vous avec un conseiller ou vous tentez comme moi au comptoir ? J'avoue que je ne sais jamais vraiment comment ça marche ici.",
        "relance": "Moi je crois que j'aurais dû prendre rendez-vous. C'est quoi qui vous fait préférer venir en personne plutôt que tout régler en ligne ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On a tous un rapport compliqué à l'argent, entre le nécessaire et l'angoisse — vous êtes plutôt fourmi ou vous profitez du présent ?",
        "relance": "Moi j'oscille entre les deux sans arrêt. C'est quoi votre philosophie pour vivre bien sans passer sa vie à compter ?"
      },
      {
        "accroche": "Au fond, tout ce qu'on vient régler ici c'est souvent lié à un projet de vie, une maison, un rêve — vous êtes du genre à planifier loin vous ?",
        "relance": "Moi j'ai du mal à me projeter à plus d'un an. C'est quoi le grand projet qui vous fait avancer en ce moment ?"
      }
    ]
  },
  {
    "id": 83,
    "environnement": "Galerie d'Art",
    "profil": "Visiteur devant une toile",
    "humeur": "Contemplatif",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Partager une émotion artistique",
    "theme": "L'art et le ressenti",
    "zoomIn": [
      {
        "accroche": "Vous êtes captivé par cette toile, ça se voit — moi je reste devant sans savoir ce que ça me fait, c'est quoi qui vous touche là-dedans ?",
        "relance": "Moi j'ai toujours peur de ne pas comprendre l'art. C'est quoi votre façon de regarder une œuvre pour vraiment la ressentir ?"
      },
      {
        "accroche": "Ça fait un moment que vous reculez puis vous vous rapprochez de ce tableau, vous cherchez quelque chose de précis dedans — vous voyez un détail qui m'échappe ?",
        "relance": "Moi je passe souvent à côté de l'essentiel dans une œuvre. C'est quoi le premier truc que vous regardez quand vous êtes devant une toile ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cette expo a une vraie cohérence, on sent une intention forte du début à la fin — vous connaissiez déjà le travail de l'artiste ?",
        "relance": "Moi je suis venu un peu par hasard. C'est quoi l'œuvre de la galerie qui vous a le plus arrêté ?"
      },
      {
        "accroche": "Le silence ici change complètement le regard, on entend presque les tableaux — vous venez souvent chercher ce calme dans les galeries ?",
        "relance": "Moi je fuis le bruit de dehors dans ces lieux. C'est quoi la galerie ou le musée où vous vous sentez le mieux ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On vient chercher quelque chose de particulier dans l'art, une émotion qu'on ne trouve pas ailleurs — c'est quoi qui vous y ramène vous ?",
        "relance": "Moi je crois que je cherche à être bousculé. C'est quoi la dernière œuvre qui vous a vraiment remué au fond ?"
      },
      {
        "accroche": "Je me demande toujours pourquoi on a tous ce besoin de beau, même quand ça ne sert à rien de concret — vous croyez que l'art nous est vital vous ?",
        "relance": "Moi je crois qu'on en a plus besoin qu'on ne le pense. C'est quoi qui vous manquerait le plus dans un monde sans art ?"
      }
    ]
  },
  {
    "id": 84,
    "environnement": "Galerie d'Art",
    "profil": "Artiste exposant",
    "humeur": "Sensible",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Aller à la rencontre du créateur",
    "theme": "Le processus créatif",
    "zoomIn": [
      {
        "accroche": "Attendez, c'est vous l'artiste derrière tout ça ? On sent une vraie signature, une patte — c'est quoi qui vous a mené à ce style ?",
        "relance": "Moi je suis fasciné par ceux qui créent. C'est quoi le déclic qui vous a fait devenir artiste ?"
      },
      {
        "accroche": "Il y a cette couleur qui revient dans presque toutes vos toiles, comme une obsession — c'est un fil rouge conscient ou ça vient tout seul ?",
        "relance": "Moi je suis intrigué par ce qui hante les artistes. C'est quoi le thème qui revient sans que vous le décidiez dans votre travail ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ça doit être vertigineux de voir des inconnus face à vos œuvres, chacun y projetant sa propre histoire — vous le vivez comment ce soir de vernissage ?",
        "relance": "Moi je n'oserais jamais m'exposer comme ça. C'est quoi le plus dur quand on montre son travail au public ?"
      },
      {
        "accroche": "Toute cette salle est venue pour vous ce soir, ça doit faire quelque chose de tenir le rôle central d'un vernissage — vous savourez ou vous avez hâte que ça passe ?",
        "relance": "Moi je serais tétanisé d'être le centre de l'attention. C'est quoi que vous préférez dans ces soirées de vernissage malgré tout ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vivre de son art aujourd'hui c'est un vrai pari, entre la passion et la réalité — vous arrivez à tenir cet équilibre ?",
        "relance": "Moi j'admire ceux qui suivent leur voie malgré tout. C'est quoi qui vous fait continuer même dans les moments de doute ?"
      },
      {
        "accroche": "Créer quelque chose qui touche des inconnus, c'est une façon de laisser une trace qui vous dépasse — c'est ça qui vous anime au fond ?",
        "relance": "Moi j'aimerais laisser quelque chose derrière moi aussi. C'est quoi que vous espérez que les gens gardent de votre travail ?"
      }
    ]
  },
  {
    "id": 85,
    "environnement": "Ascenseur de Bureaux",
    "profil": "Personne pressée entre deux étages",
    "humeur": "Tendue",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Détendre un trajet express",
    "theme": "Le rush du matin",
    "zoomIn": [
      {
        "accroche": "Vous avez la course du matin dans le regard, café dans une main, téléphone dans l'autre — grosse journée qui vous attend ?",
        "relance": "Moi j'ai l'impression de commencer déjà à la bourre. C'est quoi votre carburant pour tenir un matin chargé ?"
      },
      {
        "accroche": "Vous pianotez déjà des mails d'une main en surveillant les étages qui défilent, le vrai multitâche du matin — ça carbure fort chez vous aujourd'hui ?",
        "relance": "Moi je n'arrive même pas à lire un mail avant mon café. C'est quoi la première chose que vous réglez en arrivant au bureau ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ces vingt secondes d'ascenseur, c'est le seul moment de calme forcé de la matinée — vous montez tout en haut vous aussi ?",
        "relance": "Moi je suis au dernier, le temps d'un soupir avant l'open space. C'est quoi le service où vous filez comme ça ?"
      },
      {
        "accroche": "C'est marrant, personne ne se parle jamais dans ces ascenseurs, tout le monde fixe ses chaussures — on brise un peu le silence pour une fois ?",
        "relance": "Moi je trouve ça absurde qu'on s'ignore entre collègues d'immeuble. C'est quoi votre étage, qu'on mette au moins un visage sur un voisin ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou ce rythme qu'on s'impose tous, à courir dès la première minute de la journée — vous arrivez à décrocher parfois ?",
        "relance": "Moi j'ai du mal à lever le pied. C'est quoi qui vous permet vraiment de souffler dans une semaine chargée ?"
      },
      {
        "accroche": "On démarre tous pied au plancher dès le réveil sans jamais se demander pourquoi on court comme ça — ça vous arrive de vous poser la question vous ?",
        "relance": "Moi je me la pose de plus en plus souvent. C'est quoi qui donnerait vraiment du sens à toute cette agitation pour vous ?"
      }
    ]
  },
  {
    "id": 86,
    "environnement": "Ascenseur de Bureaux",
    "profil": "Nouveau venu qui cherche son étage",
    "humeur": "Hésitant",
    "ageGroupe": "Jeune",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Accueillir et rassurer",
    "theme": "Les premiers jours",
    "zoomIn": [
      {
        "accroche": "Vous hésitez sur les boutons, je parie que c'est un de vos premiers jours ici — je me trompe ?",
        "relance": "Moi je me souviens d'être arrivé complètement perdu. C'est quoi le poste que vous venez de décrocher ?"
      },
      {
        "accroche": "Votre badge est encore tout neuf et brillant, ça sent le tout premier jour ça — je me trompe ?",
        "relance": "Moi le mien est rayé de partout tellement ça fait longtemps. C'est quoi l'équipe que vous venez rejoindre ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce bâtiment est un vrai labyrinthe au début, tout le monde s'y perd la première semaine — vous cherchez quel service ?",
        "relance": "Moi j'ai mis un mois à trouver la cafèt. C'est quoi qui vous aiderait le plus à prendre vos marques ici ?"
      },
      {
        "accroche": "Si vous cherchez la machine à café ou les toilettes, je peux vous faire gagner un temps fou, j'ai mis des semaines à tout repérer — vous êtes à quel étage ?",
        "relance": "Moi personne ne m'avait rien montré en arrivant. C'est quoi qui vous ferait vous sentir vraiment accueilli ici ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Les premiers jours dans un nouveau boulot, c'est un mélange d'excitation et de trac, ça remue — vous le vivez comment là ?",
        "relance": "Moi j'adore et je déteste ces débuts à la fois. C'est quoi qui vous a donné envie de rejoindre cette boîte ?"
      },
      {
        "accroche": "Recommencer quelque part où on ne connaît personne, ça demande un vrai courage, on repart de zéro — c'est un grand changement pour vous ce nouveau poste ?",
        "relance": "Moi ces grands sauts dans l'inconnu me terrifient autant qu'ils m'attirent. C'est quoi qui vous a décidé à tenter cette nouvelle aventure ?"
      }
    ]
  },
  {
    "id": 87,
    "environnement": "Bureau de Poste",
    "profil": "Personne dans la file",
    "humeur": "Résignée",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Fermé",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Alléger une attente commune",
    "theme": "Les files interminables",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air aussi résigné que moi devant cette file qui n'avance pas — vous venez pour un colis vous aussi ?",
        "relance": "Moi je viens récupérer un truc censé être livré chez moi. C'est quoi votre technique pour prendre votre mal en patience ici ?"
      },
      {
        "accroche": "Vous avez le petit papier jaune à la main comme moi, le fameux avis de passage qu'on n'a jamais quand il faut — vous l'avez raté de peu aussi ?",
        "relance": "Moi le facteur passe toujours pile quand je sors cinq minutes. C'est quoi votre astuce pour ne jamais louper une livraison ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La poste, c'est le dernier endroit où le temps semble s'être arrêté, un guichet ouvert sur trois — vous y passez souvent ?",
        "relance": "Moi j'évite au maximum mais là pas le choix. C'est quoi le meilleur horaire pour éviter cette cohue selon vous ?"
      },
      {
        "accroche": "La borne à tickets est en panne, du coup c'est la loterie pour savoir qui passe quand — vous avez compris l'ordre de passage vous ?",
        "relance": "Moi je suis complètement perdu dans leur système. C'est quoi le jour où c'est le plus vivable de venir ici selon vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est marrant, on commande tout en ligne mais on finit toujours par revenir faire la queue ici — le tout numérique n'a pas tout résolu hein ?",
        "relance": "Moi je trouve qu'on a perdu au change parfois. C'est quoi le service à l'ancienne qui vous manque un peu aujourd'hui ?"
      },
      {
        "accroche": "Il n'y a plus qu'ici qu'on est vraiment forcé de ralentir et d'attendre, presque une leçon de patience malgré nous — vous le prenez comment ce genre de moment ?",
        "relance": "Moi j'ai désappris à attendre, tout m'énerve trop vite. C'est quoi qui vous aide à rester zen quand tout traîne comme ça ?"
      }
    ]
  },
  {
    "id": 88,
    "environnement": "Bureau de Poste",
    "profil": "Petit commerçant qui envoie ses colis",
    "humeur": "Affairé",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Haute",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "S'intéresser à l'activité de l'autre",
    "theme": "L'entreprise et la débrouille",
    "zoomIn": [
      {
        "accroche": "Vous avez une pile de colis impressionnante, ça sent le petit business qui tourne — c'est vous qui vendez tout ça ?",
        "relance": "Moi je rêve de me lancer dans quelque chose à moi. C'est quoi que vous vendez, si c'est pas indiscret ?"
      },
      {
        "accroche": "Vos colis sont emballés au carré, étiquettes nickel, on voit que vous avez l'habitude et le souci du détail — vous expédiez dans toute la France ?",
        "relance": "Moi je bricole mes envois n'importe comment. C'est quoi le truc que vous avez appris à force pour un emballage qui tient la route ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez l'air d'être un habitué du comptoir, ça se voit que l'envoi de colis fait partie de votre quotidien — c'est le rush du matin ?",
        "relance": "Moi je galère à envoyer un seul colis. C'est quoi votre organisation pour gérer tous ces envois sans y passer la journée ?"
      },
      {
        "accroche": "Vous faites ça avant d'ouvrir votre boutique j'imagine, histoire d'avoir la journée libre — c'est le meilleur moment pour éviter la queue ?",
        "relance": "Moi je m'y prends toujours à la mauvaise heure. C'est quoi votre créneau idéal pour expédier sans y perdre une matinée ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Monter son activité aujourd'hui c'est un sacré défi mais aussi une belle liberté — vous le vivez comment cette aventure d'indépendant ?",
        "relance": "Moi j'hésite à sauter le pas depuis des années. C'est quoi le conseil que vous donneriez à quelqu'un qui veut se lancer ?"
      },
      {
        "accroche": "Face aux mastodontes du web, ça force le respect de tenir un petit commerce et d'envoyer ses colis soi-même — vous arrivez à tirer votre épingle du jeu ?",
        "relance": "Moi je me demande comment les indépendants résistent aujourd'hui. C'est quoi votre force face aux gros que vous ne pourrez jamais suivre sur les prix ?"
      }
    ]
  },
  {
    "id": 89,
    "environnement": "Salle d'Embarquement",
    "profil": "Grand voyageur détendu",
    "humeur": "Serein",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Échanger des histoires de voyage",
    "theme": "L'expérience du voyage",
    "zoomIn": [
      {
        "accroche": "Vous attendez l'embarquement avec un calme olympien, ça sent le voyageur aguerri — vous prenez l'avion souvent ?",
        "relance": "Moi je stresse encore à chaque fois. C'est quoi votre secret pour rester aussi zen avant un vol ?"
      },
      {
        "accroche": "Votre valise est couverte d'étiquettes d'aéroports du monde entier, elle a plus voyagé que moi je crois — c'est quoi la dernière qui s'est ajoutée ?",
        "relance": "Moi ma valise n'a vu que trois pays en tout. C'est quoi la destination la plus lointaine que ces roulettes ont connue ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ces salles d'embarquement ont un charme bizarre, ce moment suspendu juste avant de partir — vous décollez vers où aujourd'hui ?",
        "relance": "Moi je pars pour un endroit dont je rêve depuis longtemps. C'est quoi la destination qui vous a le plus marqué jusqu'ici ?"
      },
      {
        "accroche": "On regarde tous les deux les avions manœuvrer sur le tarmac, il y a un truc hypnotique là-dedans — vous partez loin ou c'est un court trajet aujourd'hui ?",
        "relance": "Moi j'ai toujours le nez collé à la vitre avant un vol. C'est quoi le vol le plus mémorable que vous ayez pris ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Voyager change vraiment la façon de voir le monde, ça élargit tout — c'est ce que vous êtes venu chercher dans les voyages vous aussi ?",
        "relance": "Moi chaque voyage me transforme un peu. C'est quoi le pays qui vous a le plus bouleversé vos certitudes ?"
      },
      {
        "accroche": "Ce que j'aime dans le voyage c'est cette promesse de rencontres qu'on ne ferait jamais en restant chez soi — c'est ça qui vous fait repartir vous aussi ?",
        "relance": "Moi une seule rencontre en voyage peut changer tout un séjour. C'est quoi la rencontre à l'autre bout du monde qui vous a le plus marqué ?"
      }
    ]
  },
  {
    "id": 90,
    "environnement": "Salle d'Embarquement",
    "profil": "Voyageur qui travaille sur son laptop",
    "humeur": "Concentré",
    "ageGroupe": "Tous",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Aborder un pro en déplacement",
    "theme": "Le travail nomade",
    "zoomIn": [
      {
        "accroche": "Vous bossez jusqu'à la dernière minute avant d'embarquer, le vrai réflexe du pro en déplacement — grosse échéance qui vous poursuit ?",
        "relance": "Moi je n'arrive jamais à travailler dans ces conditions. C'est quoi votre secret pour rester concentré au milieu de tout ce bruit ?"
      },
      {
        "accroche": "Casque vissé sur les oreilles, vous êtes dans votre bulle au milieu de la cohue, un vrai bureau portatif — vous bouclez un truc urgent avant de couper ?",
        "relance": "Moi le moindre bruit me déconcentre. C'est quoi votre kit indispensable pour bosser efficace n'importe où ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Les salles d'embarquement sont devenues des bureaux à ciel ouvert, on est plusieurs à pianoter là — vous voyagez pour le travail vous aussi ?",
        "relance": "Moi j'enchaîne les déplacements en ce moment. C'est quoi qui rend un voyage d'affaires supportable pour vous ?"
      },
      {
        "accroche": "On se bat tous pour la même prise de courant près des sièges, le sport national du voyageur pro — vous avez trouvé votre coin tranquille vous ?",
        "relance": "Moi je repère toujours les prises avant même mon numéro de porte. C'est quoi votre rituel pour vous installer et bosser dans un aéroport ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On peut bosser de partout aujourd'hui, mais du coup on ne décroche jamais vraiment — vous arrivez à poser des limites vous ?",
        "relance": "Moi la frontière boulot-perso a complètement explosé. C'est quoi votre astuce pour vraiment déconnecter quand il le faut ?"
      },
      {
        "accroche": "Cette liberté de bosser de partout, on nous la vend comme un rêve mais elle a un prix, celui de n'être jamais vraiment posé — vous y trouvez votre compte vous ?",
        "relance": "Moi je ne sais plus si je suis libre ou juste joignable en permanence. C'est quoi qui rend ce mode de vie nomade vraiment épanouissant pour vous ?"
      }
    ]
  }
];
