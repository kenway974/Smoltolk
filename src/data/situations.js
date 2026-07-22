// Structure : wizard fields (matching) + intention + pyramide Zoom In / Contexte / Zoom Out.
// Chaque niveau (zoomIn / contexte / zoomOut) est un TABLEAU de variantes { accroche, relance }.
//
// Champs wizard :
//   centreInteret · vibe (Ouvert/Neutre/Fermé) · ageGroupe · genre · proximite · audace · moment
//   intention — Faire connaissance / Pluie et beau temps / Demander un conseil / Flirter

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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre stylo n'a pas l'air d'être là par hasard — c'est un outil de travail ou une signature personnelle ?",
        "relance": "Moi j'écris encore avec ce qui traîne, j'avoue. C'est quoi le premier détail qui vous fait juger quelqu'un qui entre ici ?"
      },
      {
        "accroche": "Votre nœud de cravate est réglé au millimètre — c'est une exigence maison ou vous êtes déjà comme ça dans la vie ?",
        "relance": "Moi le matin je me bats déjà avec mes lacets, alors une cravate pareille… C'est quoi le premier truc qui trahit quelqu'un qui n'a pas l'habitude de ces endroits ?"
      },
      {
        "accroche": "Vos boutons de manchette sont assortis à la pochette au détail près, ça ne doit rien au hasard — c'est vous le maniaque du détail ou la maison l'exige ?",
        "relance": "Moi je perds un bouton de chemise sur deux, alors ce niveau me fascine. C'est quoi le détail vestimentaire qui trahit tout de suite quelqu'un aux yeux d'un pro comme vous ?"
      },
      {
        "accroche": "Vous avez une façon de plier le foulard avant de le tendre, presque une petite cérémonie — chaque geste est réglé comme ça ici ?",
        "relance": "Moi je fourre tout en boule dans un sac, autant vous dire. Il y a des gestes qu'on vous a appris et qui font toute la différence sur la façon dont on perçoit une pièce ?"
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
      },
      {
        "accroche": "L'éclairage est calé pour que chaque pièce ait l'air unique, on ne voit ça nulle part ailleurs — c'est étudié à ce point ?",
        "relance": "Moi dans mon boulot on met tout sous des néons blafards, ça tue n'importe quoi. Comment on décide de la lumière qui donne envie sans que ce soit trop théâtral ?"
      },
      {
        "accroche": "Même la musique est choisie pour qu'on ralentisse le pas, je l'ai remarqué en entrant — c'est vous qui composez cette ambiance ou elle est imposée ?",
        "relance": "Moi je bosse avec la radio à fond et des clients pressés, tout l'inverse. C'est quoi l'ingrédient invisible qui fait qu'un lieu comme ici respire le standing ?"
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
      },
      {
        "accroche": "En pleine semaine comme ça, j'imagine que les gens prennent le temps de flâner, alors que le week-end ça doit défiler à toute vitesse.",
        "relance": "Moi je fais toujours mes achats en courant, jamais posé. Il y a un moment de la journée où vous savez que vous allez enfin pouvoir souffler ?"
      },
      {
        "accroche": "Dans un endroit pareil, on a l'impression que le luxe c'est surtout de ne jamais montrer qu'on est pressé — c'est ça au fond, l'esprit de la maison ?",
        "relance": "Moi je transpire dès qu'il y a une file derrière moi, je suis à l'opposé. Les gens qui entrent ici sont vraiment aussi sereins qu'ils en ont l'air ou ils jouent un rôle ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous gardez le sourire alors que le tapis n'arrête pas — c'est naturel ou c'est de la haute discipline ?",
        "relance": "Moi à votre place j'aurais craqué avant la pause. C'est quoi votre astuce pour tenir quand ça défile sans fin ?"
      },
      {
        "accroche": "Vos mains vont plus vite que le tapis, j'ai du mal à suivre du regard — ça vient tout seul avec le temps, ce rythme ?",
        "relance": "Moi je mettrais trois heures à faire votre matinée. C'est quoi le geste qu'on finit par faire les yeux fermés à ce poste ?"
      },
      {
        "accroche": "Vous connaissez le prix de la moitié des articles sans même regarder l'écran — c'est le cerveau qui enregistre tout seul à force ?",
        "relance": "Moi je serais incapable de retenir trois prix d'affilée. Ça rentre au bout de combien de temps, ce genre de réflexe ?"
      },
      {
        "accroche": "Vous avez trouvé le mot gentil pour la dame juste avant moi alors que ça n'arrête pas — vous gardez de l'énergie pour chacun, c'est fou.",
        "relance": "Moi en fin de matinée je serais déjà un zombie sans un mot pour personne. Comment vous faites pour rester humaine avec chaque client quand ça n'arrête jamais ?"
      },
      {
        "accroche": "Vous replacez chaque article dans le bon sens avant de le passer, même quand ça pousse derrière — ce petit soin, c'est machinal chez vous ?",
        "relance": "Moi je balancerais tout en vrac sur le tapis sans réfléchir. C'est un réflexe qu'on prend au fil des années ou vous avez toujours été soigneuse comme ça ?"
      },
      {
        "accroche": "Vous gardez une voix posée alors que la machine bipe dans tous les sens autour de vous — ce calme, il vous vient d'où au milieu du vacarme ?",
        "relance": "Moi le bruit me rendrait dingue en une heure à peine. Vous finissez par ne plus l'entendre du tout ou vous vous forcez à rester zen ?"
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
      },
      {
        "accroche": "Il y a déjà trois caisses ouvertes et ça déborde quand même — c'est l'invasion du samedi qui commence tôt ou c'est comme ça tous les matins ?",
        "relance": "Moi j'arrive toujours pile au pire moment, je crois que c'est un don. À quelle heure d'un coup les allées se vident enfin ?"
      },
      {
        "accroche": "Les gens du matin ont l'air d'avoir tous leur petit rituel, le même passage, la même heure — vous reconnaissez les habitués rien qu'à leur panier ?",
        "relance": "Moi je débarque n'importe quand, jamais réglé. Y en a que vous voyez arriver comme une horloge, à la minute près ?"
      },
      {
        "accroche": "Les caisses automatiques sont pleines et pourtant tout le monde fait la queue chez vous — les gens préfèrent encore un vrai visage, on dirait ?",
        "relance": "Moi je choisis toujours la caisse avec quelqu'un, j'avoue. Ils viennent pour le contact ou juste parce que les machines les rendent fous ?"
      },
      {
        "accroche": "On sent que c'est le début du mois, les chariots sont pleins à craquer aujourd'hui — vous le voyez arriver rien qu'à ça ?",
        "relance": "Moi je fais mes grosses courses toujours au même moment, réglé comme une horloge. Y a des jours dans le mois où vous savez d'avance que ça va être la folie ?"
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
      },
      {
        "accroche": "À voir les chariots pleins à ras bord ce matin, on dirait que tout le monde s'est réveillé en se disant qu'il fallait faire des réserves.",
        "relance": "Moi je surcharge toujours par peur de manquer, c'est plus fort que moi. Il y a des jours où vous sentez que les gens achètent la terre entière ?"
      },
      {
        "accroche": "Le lundi tout le monde traîne un peu la patte dans la file, comme si le week-end pesait encore — vous le sentez à l'humeur des gens ?",
        "relance": "Moi le lundi je fais mes courses au ralenti, la tête ailleurs. Les gens sont plus doux en début de semaine ou plus grognons, franchement ?"
      },
      {
        "accroche": "Plus la matinée avance, plus les gens dans la file ont l'air pressés d'en finir, comme si l'estomac les rappelait — vous le sentez monter, cette impatience ?",
        "relance": "Moi passé onze heures je pense déjà au déjeuner, c'est plus fort que moi. L'humeur des gens change vraiment selon l'heure ou c'est dans ma tête ?"
      },
      {
        "accroche": "Au fond, ce qui défile sur votre tapis raconte toute la vie des gens, leurs habitudes, leurs petits plaisirs — vous devez en deviner, des choses, rien qu'au panier ?",
        "relance": "Moi mon panier trahit direct que je vis seul et que je cuisine mal. Vous vous faites des idées sur les gens rien qu'à leurs achats ou vous n'y prêtez plus attention ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Il a une démarche qui décide de tout — c'est vous ou lui qui mène la balade ?",
        "relance": "J'ai toujours rêvé d'un chien aussi sûr de lui, le mien serait une catastrophe. Il a quel caractère au quotidien ?"
      },
      {
        "accroche": "Il vous jette un œil toutes les cinq secondes, comme s'il vérifiait que vous suivez — il est toujours aussi attentif à vous ?",
        "relance": "Moi j'ai jamais réussi à avoir cette complicité avec un animal. Ça s'est fait comment entre vous, tout de suite ou avec le temps ?"
      },
      {
        "accroche": "Il a le poil qui brille comme s'il sortait du toilettage — c'est vous qui vous en occupez ou vous avez un bon adresse ?",
        "relance": "Moi je saurais même pas par quoi commencer avec un chien, j'aurais peur de mal faire. C'est beaucoup de boulot à entretenir, une bête comme ça ?"
      },
      {
        "accroche": "Il s'arrête pile pour renifler chaque coin, il a l'air de connaître le quartier mieux que vous — c'est lui qui a ses habitudes ou vous suivez le mouvement ?",
        "relance": "Moi je me perds encore dans ce quartier alors que lui a l'air d'avoir sa carte en tête. Il vous emmène toujours aux mêmes endroits ou il aime explorer ?"
      },
      {
        "accroche": "Il a une sagesse de vieux monsieur, rien ne le presse — il a toujours été aussi tranquille ou l'âge l'a calmé ?",
        "relance": "Moi j'imagine un chiot qui tire partout et je flippe déjà. Le caractère se pose vraiment avec les années ou ça dépend surtout de la race ?"
      },
      {
        "accroche": "Il a un petit bandana qui lui donne un genre fou — c'est vous qui l'accessoirisez ou c'est un cadeau de quelqu'un ?",
        "relance": "Moi je n'oserais jamais habiller un animal, j'aurais trop peur du ridicule. Il se laisse faire ou il déteste qu'on lui mette des trucs ?"
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
      },
      {
        "accroche": "Il y a un petit parc pas loin où tous les chiens ont l'air de se retrouver — vous y passez ou vous préférez les rues tranquilles ?",
        "relance": "Moi je viens d'emménager, je repère encore les bons coins. Les promeneurs se connaissent tous entre eux ici ou chacun reste dans son coin ?"
      },
      {
        "accroche": "Le quartier a un côté village le matin, on croise toujours les mêmes têtes à la même heure — vous faites partie des réguliers du coin ?",
        "relance": "Moi je débarque et je trouve ça hyper convivial pour une ville. C'est un quartier où les gens se parlent facilement ou c'est le chien qui ouvre les portes ?"
      },
      {
        "accroche": "Il y a ce petit commerce plus bas qui laisse toujours une gamelle d'eau dehors pour les chiens — vous connaissez tous les bons coins pour lui dans le quartier ?",
        "relance": "Moi je découvre à peine que le quartier est aussi accueillant pour les animaux. Vous avez repéré tous les endroits qui les gâtent ou c'est lui qui vous les a montrés ?"
      },
      {
        "accroche": "Le chemin le long de l'eau juste derrière est parfait pour marcher au calme — vous poussez jusque-là ou vous restez dans les rues ?",
        "relance": "Moi je découvre encore les recoins verts du coin, je viens d'emménager. C'est le genre d'endroit que seuls les promeneurs connaissent ou tout le monde y va ?"
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
      },
      {
        "accroche": "Ce genre de lumière le matin, ça donne envie de tout faire à pied et de prendre son temps — c'est le moment qui vous fait sortir aussi ?",
        "relance": "Moi j'oublie toujours à quel point ça fait du bien de commencer dehors. Vous, cette balade, c'est ce qui vous met de bonne humeur pour la journée ?"
      },
      {
        "accroche": "Avoir un chien, ça oblige à ralentir et à vivre au rythme des saisons alors que tout le monde court partout — vous le vivez comme une chance ?",
        "relance": "Moi j'ai l'impression de foncer sans jamais lever les yeux, ça me manque ce truc-là. Il vous a changé, ce rythme imposé, ou vous étiez déjà comme ça ?"
      },
      {
        "accroche": "C'est fou comme un chien vous fait parler à des inconnus qu'on n'aurait jamais abordés autrement — il vous ouvre des portes sans rien demander, non ?",
        "relance": "Moi je rêverais d'avoir cette excuse pour engager la conversation aussi facilement. Vous avez rencontré des gens que vous n'auriez jamais croisés sans lui ?"
      },
      {
        "accroche": "Au fond, avoir quelqu'un d'aussi content de vous suivre partout dès le matin, c'est une sacrée dose de bonne humeur pour démarrer — il vous booste autant que ça ?",
        "relance": "Moi je commence mes journées seul et grognon, ça donne presque envie. Vous diriez qu'il change vraiment votre humeur du matin ou vous seriez de bonne humeur de toute façon ?"
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
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Votre tatouage sur l'avant-bras a l'air d'avoir une histoire — c'est un truc qui veut dire quelque chose ?",
        "relance": "Moi j'hésite depuis des années, j'ose pas franchir le pas. Le premier, on le choisit comment sans le regretter ?"
      },
      {
        "accroche": "Votre tablier a vu passer des litres de café, on dirait qu'il raconte toute votre matinée — le gros du rush est déjà passé ?",
        "relance": "Moi rien qu'à vous voir enchaîner je suis fatigué. C'est quoi le pire, le monde qui s'entasse ou les commandes impossibles ?"
      },
      {
        "accroche": "Vos bagues, on dirait qu'il y en a une par époque de votre vie — il y en a une qui a une vraie histoire derrière ?",
        "relance": "Moi je porte jamais rien aux mains, j'oserais pas. Vous les gardez tout le temps, même quand vous bossez à cent à l'heure ?"
      },
      {
        "accroche": "Vous calez la mousse du cappuccino comme si c'était une œuvre, même en plein coup de feu — vous lâchez jamais sur le détail, hein ?",
        "relance": "Moi je renverserais tout à la première commande. Ça vous agace quand les gens engloutissent sans même regarder le dessin que vous avez fait ?"
      },
      {
        "accroche": "Vous avez un petit badge épinglé sur le tablier, ça a l'air d'avoir une signification — c'est le café qui l'impose ou c'est perso ?",
        "relance": "Moi je collectionne rien, j'ai peur de m'attacher aux objets. Il vient d'où, celui-là, si c'est pas indiscret ?"
      },
      {
        "accroche": "Vos baskets ont l'air pensées pour tenir debout dix heures d'affilée — c'est le vrai secret de survie du métier, de bonnes chaussures ?",
        "relance": "Moi mon dos crierait au bout d'une heure derrière ce comptoir. C'est les jambes qui lâchent en premier ou c'est surtout le mental à ce rythme ?"
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
      },
      {
        "accroche": "Je vois que la file s'allonge pile quand vous croyiez souffler — c'est toujours par vagues comme ça le matin ?",
        "relance": "Je vais faire vite, juste un allongé. C'est quoi le pire, la vague de 8h ou celle de la pause de 10h ?"
      },
      {
        "accroche": "Je vois que vous avez déjà les tasses alignées pour la prochaine salve, vous anticipez tout — c'est le seul moyen de survivre au rush ?",
        "relance": "Je vais pas vous ralentir, juste un noisette. On tient grâce à l'organisation ou c'est surtout le mental à ce poste ?"
      },
      {
        "accroche": "Je vois qu'il ne vous reste presque plus de croissants, le matin ça part à une vitesse folle — c'est toujours dévalisé aussi tôt ?",
        "relance": "Je vais me rabattre sur un simple expresso, tant pis. C'est quoi qui part en premier le matin, le sucré ou le salé ?"
      },
      {
        "accroche": "Je vois que c'est quasiment que des cafés à emporter ce matin, personne ne s'assoit — les gens ne prennent même plus le temps, hein ?",
        "relance": "Je vais faire pareil, un serré à emporter, je suis à la bourre aussi. Ça vous manque, les clients qui restaient s'asseoir tranquilles, ou c'est mieux pour le rythme ?"
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
      },
      {
        "accroche": "Un matin de pluie comme ça, j'imagine que tout le monde débarque en quête de chaleur autant que de café — vous le sentez à l'ambiance ?",
        "relance": "Moi la pluie me fait rêver d'un truc chaud et d'un coin au sec. Les jours gris, les gens traînent plus longtemps ou ils filent encore plus vite ?"
      },
      {
        "accroche": "Il y a un truc universel dans ce premier café du matin, tout le monde en a besoin comme d'une béquille pour démarrer — vous êtes un peu leur premier réconfort de la journée.",
        "relance": "Moi avant la première gorgée je suis même pas sûr d'exister. Ça vous fait quoi d'être le passage obligé qui remet tout le monde d'aplomb ?"
      },
      {
        "accroche": "Un matin comme ça, tout le monde débarque avec la même tête des mauvais jours, comme si personne n'avait choisi d'être réveillé — vous encaissez l'humeur de la ville entière, non ?",
        "relance": "Moi avant huit heures je suis d'une humeur de chien, je m'excuse d'avance. Vous finissez par prendre sur vous ou l'ambiance maussade déteint sur vous aussi ?"
      },
      {
        "accroche": "Au fond vous êtes peut-être la seule interaction humaine de la journée pour certains qui bossent seuls — vous sentez que pour eux ce passage compte plus qu'un simple café ?",
        "relance": "Moi je viens autant pour le bonjour que pour la caféine, dit comme ça c'est un peu triste. Vous le remarquez, ceux qui viennent surtout pour échanger deux mots ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez une montre qui a l'air de tout faire sauf le café — c'est un choix de geek ou de fonction ?",
        "relance": "Moi je suis resté à la montre qui donne juste l'heure, j'assume. Ça sert vraiment au quotidien tous ces gadgets ?"
      },
      {
        "accroche": "Vous avez un thermos taillé pour une longue garde — c'est le carburant obligatoire du poste ?",
        "relance": "Moi sans un café toutes les deux heures je m'endors debout. Comment on reste vigilant sur des heures aussi longues sans bouger d'un pouce ?"
      },
      {
        "accroche": "Vous avez un carnet à côté de vous où vous notez des trucs à la main — à l'ère du tout numérique, c'est rare, vous y tenez ?",
        "relance": "Moi je note tout sur mon téléphone et je retrouve jamais rien. Ça marche mieux le papier pour garder l'œil sur ce qui se passe ?"
      },
      {
        "accroche": "Vous avez les écrans de surveillance qui défilent devant vous en permanence — à force, vous repérez un truc anormal du premier coup d'œil ?",
        "relance": "Moi je verrais rien, je serais hypnotisé par les images. On développe un sixième sens pour détecter quand quelque chose cloche ?"
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
      },
      {
        "accroche": "Vous devez connaître les horaires de tout le monde par cœur, qui arrive tôt, qui traîne — vous voyez toute la vie du bâtiment depuis ce poste ?",
        "relance": "Moi je passe en coup de vent sans jamais regarder personne. On finit par deviner l'humeur des gens rien qu'à leur façon d'arriver le matin ?"
      },
      {
        "accroche": "C'est le grand défilé des arrivées là, tout le monde fonce vers l'ascenseur sans lever les yeux — vous, vous êtes le seul point fixe dans tout ce mouvement.",
        "relance": "Moi je fais partie de ceux qui filent sans dire bonjour, j'avoue, et j'ai un peu honte. Ça finit par peser, d'être invisible pour la plupart des gens qui passent ?"
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
      },
      {
        "accroche": "Un vendredi, j'imagine que l'énergie est déjà ailleurs, tout le monde a la tête au week-end bien avant l'heure — vous le sentez au poste ?",
        "relance": "Moi le vendredi après-midi je suis plus vraiment là non plus. Les gens sont plus détendus en fin de semaine ou juste plus pressés de filer ?"
      },
      {
        "accroche": "Il y a quelque chose de particulier dans ces métiers où on passe la journée à observer les autres vivre sans vraiment en faire partie — vous le ressentez comme ça ?",
        "relance": "Moi je crois que je m'inventerais des histoires sur chaque personne qui passe. Vous, à force, vous vous attachez aux gens ou vous gardez la distance ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vos mains disent que vous touchez vraiment la terre — vous produisez vous-même ou vous revendez ?",
        "relance": "Moi je fais crever un cactus en deux semaines, c'est dire. Ça s'apprend ou faut être tombé dedans petit ?"
      },
      {
        "accroche": "Vous rangez votre étal comme un tableau, tout est aligné au cordeau — c'est de l'habitude ou vous y tenez vraiment ?",
        "relance": "Moi mon frigo c'est le chaos total. Ça change quelque chose sur les ventes, une belle présentation, ou les gens s'en fichent au fond ?"
      },
      {
        "accroche": "Vous avez glissé des petits panneaux écrits à la main sur chaque cagette — c'est vous l'artiste ou quelqu'un de la famille ?",
        "relance": "Moi j'ai une écriture de médecin, personne comprend rien. Ça attire vraiment l'œil des gens, ces petits mots, ou c'est surtout pour vous ?"
      },
      {
        "accroche": "Vous faites goûter avant même qu'on demande, un bout par-ci un bout par-là — c'est votre façon à vous de vendre ?",
        "relance": "Moi je n'oserais jamais tendre un morceau à un inconnu comme ça. Les gens achètent plus quand ils goûtent ou c'est juste le plaisir de partager ?"
      },
      {
        "accroche": "Vous avez le teint de quelqu'un qui vit dehors toute l'année, ça se voit que vous êtes aux champs — vous êtes de la terre depuis toujours ou c'est venu sur le tard ?",
        "relance": "Moi je vire au homard au moindre rayon de soleil, alors je vous envie. On s'habitue vraiment à bosser dehors par tous les temps ou c'est une école de patience ?"
      },
      {
        "accroche": "Vous avez des variétés que je n'ai jamais vues nulle part, des noms que je ne sais même pas prononcer — vous chassez les trucs rares exprès ou ça pousse comme ça chez vous ?",
        "relance": "Moi je connais trois légumes et je m'arrête là, c'est dramatique. C'est quoi la variété oubliée que vous adorez faire redécouvrir aux gens ?"
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
      },
      {
        "accroche": "Vos fraises embaument jusqu'ici, on les sent avant de les voir — c'est le tout début de la saison ou déjà le meilleur moment ?",
        "relance": "Moi je me fie qu'à l'odeur pour choisir, c'est ma seule technique. C'est quoi le fruit du moment que je devrais absolument prendre avant que ça passe ?"
      },
      {
        "accroche": "Vous êtes déjà installé alors que le marché ouvre à peine, tout est frais du matin même — c'est arrivé du champ à l'aube, tout ça ?",
        "relance": "Moi j'achète toujours sans savoir depuis combien de temps c'est cueilli. Ça change vraiment tant que ça, le vrai frais du jour, au goût ?"
      },
      {
        "accroche": "Votre voisin d'étal a l'air de vous chambrer sans arrêt, il y a une sacrée ambiance entre vous — vous vous connaissez tous depuis des années sur ce marché ?",
        "relance": "Moi je rêverais de bosser dans une ambiance pareille au lieu de mon open space silencieux. Vous formez une vraie petite famille sur le marché ou chacun défend sa boutique ?"
      },
      {
        "accroche": "Avec les nuits qui fraîchissent, j'imagine que ça change déjà ce que vous pouvez sortir cette semaine — la météo vous dicte tout, non ?",
        "relance": "Moi je ne fais jamais le lien entre le temps qu'il fait et ce que je trouve sur l'étal. C'est quoi le produit qui va bientôt disparaître avec le changement de saison ?"
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
      },
      {
        "accroche": "Il y a une énergie sur le marché quand il fait beau qu'on ne trouve pas ailleurs, les gens papotent, prennent leur temps — vous vivez ça chaque semaine ?",
        "relance": "Moi je viens autant pour l'ambiance que pour remplir mon panier. Le beau temps, ça change vraiment l'humeur des clients ou vous voyez pas de différence ?"
      },
      {
        "accroche": "Vendre ce qui pousse au fil des mois, c'est presque un métier qui vous rebranche sur le vrai rythme des choses alors qu'on a tout oublié — vous le ressentez comme ça ?",
        "relance": "Moi en supermarché j'ai des tomates en décembre et ça me perturbe même plus. Ça vous agace, vous, cette déconnexion des gens avec les saisons ?"
      },
      {
        "accroche": "On sent que les gens reviennent au marché autant pour savoir d'où vient ce qu'ils mangent que pour la fraîcheur — vous le voyez, ce retour vers le vrai, chez vos clients ?",
        "relance": "Moi j'ai passé des années à acheter sans jamais me demander d'où ça venait. Vous croyez que c'est une vraie prise de conscience ou juste une mode qui passera ?"
      },
      {
        "accroche": "Faire ce métier, c'est un peu transmettre un savoir que plus grand monde n'a, reconnaître un bon produit, cuisiner de saison — vous avez l'impression de passer un flambeau, non ?",
        "relance": "Moi je serais infoutu de dire si une tomate est bonne avant de la croquer. Vous prenez le temps d'expliquer aux gens ou ils sont trop pressés pour écouter ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vos chaussures ont l'air taillées pour le squat — c'est quelle marque ? Je galère à trouver une paire stable.",
        "relance": "Moi je soulève en baskets de ville, mes chevilles vont lâcher. Ça vaut vraiment l'investissement ou c'est du marketing ?"
      },
      {
        "accroche": "Vous avez une gourde format bidon de chantier — c'est du sérieux, l'hydratation, ou vous compensez le café du matin ?",
        "relance": "Moi je bois trois gorgées et j'oublie pendant deux heures. Ça compte vraiment tant que ça sur une séance ou c'est un mythe de coach ?"
      },
      {
        "accroche": "Votre ceinture de force, elle a l'air d'avoir vécu — vous soulevez du lourd ou c'est juste pour l'assurance ?",
        "relance": "Moi je m'attaque aux charges sans rien, mon dos me le fait payer. Ça change vraiment quelque chose ou c'est surtout dans la tête ?"
      },
      {
        "accroche": "Vous avez la craie plein les mains, ça veut dire du sérieux ça — vous êtes plutôt force pure ou technique ?",
        "relance": "Moi je glisse sur la barre au bout de trois reps, c'est pathétique. La magnésie ça aide vraiment ou c'est surtout un truc de puriste ?"
      },
      {
        "accroche": "Votre montre a l'air de tout suivre à la seconde près — vous surveillez vraiment vos pulsations en direct ou c'est plus pour les stats après ?",
        "relance": "Moi je cours au feeling et je finis rouge écrevisse sans savoir pourquoi. Ça change vraiment quelque chose de bosser avec les chiffres ou c'est un truc de coach ?"
      },
      {
        "accroche": "Vous avez une corde à sauter accrochée à votre sac, on n'en voit plus beaucoup — c'est votre arme secrète pour le cardio, ce vieux truc ?",
        "relance": "Moi la dernière fois que j'ai sauté à la corde j'avais dix ans et je m'emmêlais les pieds. C'est vraiment aussi efficace qu'on dit ou c'est surtout nostalgique ?"
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
      },
      {
        "accroche": "Vous avez l'air de connaître chaque machine par son petit défaut, celle qui grince, celle qui coince — vous êtes ici depuis les débuts de la salle ?",
        "relance": "Moi je galère à trouver comment régler la moitié des appareils. Y a un coin de la salle que vous préférez, où on est vraiment tranquille ?"
      },
      {
        "accroche": "La salle est quasi déserte à cette heure, on a le champ libre sur tout — c'est votre créneau à vous aussi, avant que ça se remplisse ?",
        "relance": "Moi je viens tôt surtout pour pas croiser trop de monde. Les habitués du matin, c'est toujours les mêmes ou ça change souvent ?"
      },
      {
        "accroche": "Le coin cardio est encore désert à cette heure, les tapis n'attendent que vous — c'est là que vous commencez toujours ou vous gardez ça pour la fin ?",
        "relance": "Moi je fuis les tapis, je m'ennuie au bout de cinq minutes. C'est quoi votre astuce pour rendre le cardio moins mortellement long ?"
      },
      {
        "accroche": "La musique est encore à fond alors qu'on n'est que trois dans la salle, ça fait presque séance privée — c'est ce côté tranquille du matin qui vous plaît ?",
        "relance": "Moi je viens tôt surtout pour ne pas avoir de public quand je galère. Vous préférez cette ambiance calme ou vous carburez mieux quand c'est bondé et que ça pousse ?"
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
      },
      {
        "accroche": "Il y a un truc particulier chez les gens qui s'entraînent le matin, une discipline que les autres n'ont pas — vous le sentez à leur énergie ?",
        "relance": "Moi je me lève à l'arrache et je suis fier après, mais qu'est-ce que ça coûte. Ceux du matin, ils tiennent mieux sur la durée que ceux du soir, vous trouvez ?"
      },
      {
        "accroche": "Au fond, venir transpirer alors que le monde dort encore, c'est un peu se prouver à soi-même qu'on tient ses engagements — c'est ça qui motive les gens, selon vous ?",
        "relance": "Moi c'est surtout contre moi-même que je me bats en venant. Vous, ce qui vous fait tenir dans ce métier, c'est votre propre discipline ou voir progresser les autres ?"
      },
      {
        "accroche": "C'est marrant, le cardio c'est le truc que tout le monde repousse et fait la grimace, et pourtant personne n'y coupe — vous arrivez à le faire aimer aux gens, vous ?",
        "relance": "Moi je trouve toujours une bonne excuse pour zapper la partie course. C'est quoi votre argument imparable pour convaincre les récalcitrants comme moi ?"
      },
      {
        "accroche": "Au fond, je crois que les gens viennent transpirer autant pour vider la tête que pour le corps — vous le sentez, que ça se joue souvent dans le mental ?",
        "relance": "Moi ma meilleure séance c'est toujours après une journée pourrie, ça me lessive les idées. Vous diriez que vous faites plus du mental que du muscle, dans ce métier ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre diable a vu du pays, on dirait — vous êtes sur cette tournée depuis longtemps ?",
        "relance": "Moi le mien grince à chaque virage, je le maudis dix fois par jour. C'est quoi le matos qui change vraiment la vie sur ce métier ?"
      },
      {
        "accroche": "Votre scanner a l'air d'avoir rendu l'âme dix fois — c'est la boîte qui vous refile du matos préhistorique aussi ?",
        "relance": "Moi le mien plante toujours au pire moment, devant un client qui s'impatiente. C'est quoi qui vous fait perdre le plus de temps sur une tournée ?"
      },
      {
        "accroche": "Votre camionnette a un autocollant de club de foot à l'arrière, ça m'a fait sourire — c'est votre équipe de cœur ou celle du patron ?",
        "relance": "Moi j'écoute les matchs en tournée pour tenir le coup. Vous arrivez à suivre malgré les livraisons ou vous ratez tout le temps l'essentiel ?"
      },
      {
        "accroche": "Vos gants sont troués au même endroit que les miens, pile là où le carton frotte — c'est le mal universel du métier, ça ?",
        "relance": "Moi j'en use une paire par mois, c'est du gâchis. Vous avez trouvé une marque qui tient ou c'est mission impossible sur ce boulot ?"
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
      },
      {
        "accroche": "Le code d'accès qui marche jamais du premier coup, le client injoignable — vous aussi vous perdez dix minutes à chaque immeuble par ici ?",
        "relance": "On n'est pas dans la même boîte mais clairement dans la même galère. C'est quoi l'adresse dans le coin qui vous fait râler à chaque fois ?"
      },
      {
        "accroche": "Cette heure creuse de l'après-midi, c'est le seul moment où on peut enfin souffler entre deux arrêts — vous en profitez aussi ou vous êtes déjà à la bourre ?",
        "relance": "Moi je grappille cinq minutes ici et là pour tenir. Vous avez un coin tranquille où vous vous posez toujours pour souffler entre deux tournées ?"
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
      },
      {
        "accroche": "Un lundi, tout le monde a commandé le week-end et tout arrive en même temps — c'est le jour où les tournées explosent, chez vous aussi ?",
        "relance": "Moi le lundi je démarre déjà avec le double d'arrêts. C'est le pire jour de la semaine pour vous ou vous en avez un encore plus redouté ?"
      },
      {
        "accroche": "Ce boulot c'est une course permanente contre la montre, jamais une minute où on peut vraiment lever le pied — vous le vivez comme ça au quotidien ?",
        "relance": "Moi le soir je décompte les arrêts restants comme une délivrance. Vous arrivez à décrocher une fois rentré ou vous pensez encore aux colis dans votre lit ?"
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
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez le geste qui ne tremble jamais derrière le comptoir — c'est l'habitude ou c'est dans le tempérament ?",
        "relance": "Moi je perdrais la moitié des boîtes en cinq minutes. Comment on garde la tête froide avec trois personnes qui attendent ?"
      },
      {
        "accroche": "Vous déchiffrez ces ordonnances illisibles en une seconde — moi je vois des hiéroglyphes, c'est un talent que vous développez avec le temps ?",
        "relance": "Moi j'y comprends jamais rien à l'écriture des médecins. Vous les décodez à l'instinct ou y a un vrai code derrière ?"
      },
      {
        "accroche": "Vous répondez à la dame au téléphone tout en préparant ma commande sans lever les yeux — comment on fait deux choses délicates à la fois sans se tromper ?",
        "relance": "Moi je raccrocherais en oubliant la moitié. On apprend à jongler comme ça ou c'est le genre de truc qui vient tout seul avec les années ?"
      },
      {
        "accroche": "Vous prenez le temps d'expliquer la posologie même quand la file s'allonge derrière — vous ne bâclez jamais, hein ?",
        "relance": "Moi je me sentirais coupable de faire attendre les autres. Comment vous gérez cette pression de bien faire sans jamais lâcher sur la rigueur ?"
      },
      {
        "accroche": "Vous savez exactement dans quel tiroir plonger sans même chercher, avec des milliers de boîtes derrière vous — vous avez tout ça cartographié dans la tête ?",
        "relance": "Moi je perds mes clés trois fois par jour dans un studio. Ça rentre au bout de combien de temps, cette mémoire des rayons, ou vous avez un système ?"
      },
      {
        "accroche": "Vous avez rassuré la dame inquiète devant moi en deux phrases, elle est repartie apaisée — c'est presque un métier dans le métier, ça, calmer les gens ?",
        "relance": "Moi je paniquerais la personne encore plus en essayant de la rassurer. Ça s'apprend, ce ton qui apaise, ou c'est vous qui êtes comme ça naturellement ?"
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
      },
      {
        "accroche": "Il y a du monde mais tout avance sans accroc, chacun est servi en un temps record — c'est le rush habituel ou une journée particulière ?",
        "relance": "Moi je pensais en avoir pour une heure et finalement ça file. C'est quoi le vrai créneau mort où on peut venir peinard ?"
      },
      {
        "accroche": "En milieu d'après-midi c'est plus posé qu'à la sortie des écoles j'imagine — j'ai bien choisi mon moment ou c'est un hasard ?",
        "relance": "Moi je tombe toujours en pleine cohue, à 17h pile. Y a une heure secrète que les habitués du quartier se refilent pour éviter la queue ?"
      },
      {
        "accroche": "Vous avez installé un petit coin conseil à l'écart de la file, c'est malin pour les échanges plus discrets — c'est pensé pour désengorger l'attente ?",
        "relance": "Moi j'ai toujours peur qu'on entende mes soucis de santé dans la queue. Les gens osent plus se confier quand c'est un peu à l'écart comme ça ?"
      },
      {
        "accroche": "La file des ordonnances avance vite mais tout le monde s'attarde du côté crèmes et vitamines — c'est là que ça bouchonne vraiment cet après-midi ?",
        "relance": "Moi je viens pour un truc et je repars avec trois produits dont je n'ai pas besoin. Les gens flânent plus dans les rayons que dans la file, non ?"
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
      },
      {
        "accroche": "En ce moment tout le monde traîne le même rhume, ça doit se voir défiler à votre comptoir toute la journée.",
        "relance": "Moi je sens que je vais y passer, c'est qu'une question de jours. Il y a une période de l'année où c'est vraiment la folie pour vous ?"
      },
      {
        "accroche": "Au fond, une pharmacie c'est un des derniers endroits où on peut parler de ses petits soucis à quelqu'un qui écoute vraiment — vous le vivez comme ça, ce rôle ?",
        "relance": "Moi je viens pour un bobo et je repars toujours un peu rassuré, c'est bête. Les gens ont autant besoin d'être écoutés que soignés, vous croyez pas ?"
      },
      {
        "accroche": "Au fond vous devez voir passer des gens qui ont déjà tout diagnostiqué sur internet avant d'arriver — vous devez souvent défaire ce que les moteurs de recherche ont fait, non ?",
        "relance": "Moi je tape trois symptômes et je me crois condamné à chaque fois. Les gens vous font encore confiance ou ils débarquent avec leur avis déjà tout fait ?"
      },
      {
        "accroche": "C'est un des derniers endroits où on accepte encore d'attendre sans râler, parce qu'au fond on sait que ça vaut le coup — les gens sont plus patients ici qu'ailleurs, vous trouvez ?",
        "relance": "Moi je m'énerve dans toutes les files sauf celle-ci, c'est bizarre. Vous voyez les gens s'impatienter quand même ou ils prennent leur mal en patience ici ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre montre n'est pas un hasard — vous l'avez chinée ou c'est un coup de cœur assumé ?",
        "relance": "Moi j'y connais rien mais j'aimerais apprendre à reconnaître une belle pièce. On commence par regarder quoi ?"
      },
      {
        "accroche": "Vos souliers ne sortent pas d'une chaîne, ça se voit à trois mètres — c'est du sur-mesure ou vous avez juste l'œil pour dénicher ?",
        "relance": "Moi j'achète mes chaussures au feeling et je le regrette à chaque fois. On reconnaît une vraie belle paire à quoi, concrètement ?"
      },
      {
        "accroche": "Votre sac, c'est une pièce que je ne vois jamais en vitrine — c'est une série limitée ou une commande spéciale ?",
        "relance": "Moi j'achète toujours ce que tout le monde a, sans réfléchir. On reconnaît une vraie pièce rare à quoi, vous, qui avez l'œil ?"
      },
      {
        "accroche": "Vous avez un foulard noué d'une façon que je n'ai jamais vue, ça change tout à la silhouette — c'est un truc que vous avez inventé ?",
        "relance": "Moi je nouerais ça n'importe comment, ce serait un désastre. C'est le genre de détail qui fait toute la différence entre s'habiller et avoir du style, non ?"
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
      },
      {
        "accroche": "Vous filez droit vers le fond sans regarder les vitrines, vous savez déjà exactement ce que vous voulez — vous êtes un fidèle de la maison ?",
        "relance": "Moi je tourne en rond une heure avant de repartir les mains vides. C'est plus simple quand on connaît, on vous met de côté les nouveautés ?"
      },
      {
        "accroche": "Vous avez saluté le vendeur par son prénom en entrant, ça se voit que vous êtes attendu ici — c'est ça, être vraiment client d'une maison pareille ?",
        "relance": "Moi je passe totalement inaperçu, personne me calcule. C'est quoi qui fait qu'on passe de simple visiteur à quelqu'un qu'on connaît et qu'on chouchoute ?"
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
      },
      {
        "accroche": "En pleine semaine c'est presque désert ici, on a la boutique pour soi — vous calez toujours vos passages pour éviter la foule ?",
        "relance": "Moi les magasins bondés me font fuir, je supporte pas. Vous aussi vous organisez tout pour venir quand c'est calme ou ça vous est égal ?"
      },
      {
        "accroche": "Au fond, ce qui a de la valeur ici c'est le temps qu'on vous consacre, pas juste l'objet — c'est ça le vrai luxe pour vous, qu'on s'occupe de vous ?",
        "relance": "Moi je suis habitué à faire la queue et à me débrouiller seul, l'inverse total. Ce qui vous plaît, c'est l'objet en lui-même ou toute l'attention autour ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre casque a plus de stickers qu'un vieux skate — y en a un derrière chaque chantier ou c'est juste pour le style ?",
        "relance": "Moi je colle rien nulle part, trop indécis. C'est quoi le chantier qui vous a marqué au point d'y laisser une trace ?"
      },
      {
        "accroche": "Vous avez les plans roulés sous le bras comme un général avant l'assaut — c'est vous qui avez tout ce chantier en tête ?",
        "relance": "Moi je saurais même pas lire un plan à l'endroit. Tout ce qui se construit là, vous le visualisez déjà fini dans votre tête ?"
      },
      {
        "accroche": "Vos bottes ont vu tellement de boue qu'on devine plus la couleur d'origine — elles racontent combien de chantiers, celles-là ?",
        "relance": "Moi j'ai des chaussures de ville qui tiennent pas une saison, alors ça m'impressionne. C'est quoi le matériel sur lequel on lésine jamais, dans votre métier ?"
      },
      {
        "accroche": "Vous avez le talkie qui grésille toutes les trente secondes, ça n'arrête jamais de vous appeler — c'est vous le point central de tout le chantier ?",
        "relance": "Moi j'aurais déjà pété un câble avec tout le monde qui me sollicite en même temps. Comment on garde la tête froide quand ça vous tombe dessus de partout ?"
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
      },
      {
        "accroche": "Je vous pose ça à l'heure prévue, un souci de moins pour vous aujourd'hui — le gros œuvre est fini ou vous en êtes encore aux fondations ?",
        "relance": "Je vois que ça grouille de partout, je vais pas vous retenir. C'est quoi l'étape du chantier où tout le monde retient son souffle, d'habitude ?"
      },
      {
        "accroche": "Tout le monde est déjà à fond alors que le soleil est à peine levé, ça carbure dès la première heure ici — c'est le meilleur moment pour avancer, avant la chaleur ?",
        "relance": "Moi je fais juste déposer et je file, je vais pas casser le rythme. C'est à quel moment de la journée que tout peut basculer d'un coup, sur un chantier ?"
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
      },
      {
        "accroche": "Sur un truc comme ça, j'imagine qu'il suffit qu'un seul corps de métier prenne du retard pour que tout le planning s'écroule — c'est ça le vrai casse-tête ?",
        "relance": "Moi je gère à peine mon propre agenda, alors coordonner des dizaines de gens… Comment vous faites tenir tout ce monde sur les mêmes délais ?"
      },
      {
        "accroche": "Construire quelque chose qui restera debout des décennies alors que tout le reste va si vite, il y a un truc qui donne du sens là-dedans — vous le ressentez comme ça ?",
        "relance": "Moi mon boulot laisse aucune trace, ça s'efface le lendemain. Ça vous fait quelque chose de repasser des années après devant ce que vous avez bâti ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre casque a l'air de vous couper du monde entier — c'est le secret pour bosser dans le bruit ?",
        "relance": "Moi j'arrive pas à me concentrer sans, mais j'ai jamais trouvé le bon. Vous écoutez vraiment un truc ou c'est juste pour le silence ?"
      },
      {
        "accroche": "Votre ordi est couvert d'autocollants, ça raconte forcément un truc — vous bossez dans la tech ou c'est juste une collection ?",
        "relance": "Moi mon écran est vide et triste à côté du vôtre. C'est quoi votre domaine, pour vous installer comme ça au café tout l'après-midi ?"
      },
      {
        "accroche": "Vous avez un vrai petit carnet à côté du portable, vous notez à la main au milieu de tout ce numérique — c'est votre système à vous ?",
        "relance": "Moi je note tout sur des applis et je m'y perds complètement. Ça marche mieux le papier pour se concentrer ou c'est juste une habitude ?"
      },
      {
        "accroche": "Vous avez une deuxième batterie et un multiprise, vous êtes clairement équipé pour tenir le siège ici — vous passez vos journées entières au café ?",
        "relance": "Moi je tombe toujours en rade de batterie au pire moment. C'est devenu votre vrai bureau, cet endroit, ou vous tournez entre plusieurs spots ?"
      },
      {
        "accroche": "Vous avez un petit support pour surélever votre écran, vous prenez le confort au sérieux même en vadrouille — c'est le dos qui vous a appris à vous équiper comme ça ?",
        "relance": "Moi je bosse plié en deux sur mon ordi posé à plat, une catastrophe. Ça change vraiment quelque chose ou c'est du confort de luxe, ce genre d'accessoire ?"
      },
      {
        "accroche": "Ça fait deux heures que vous faites durer le même café, on est les rois du squat rentable, vous et moi — c'est votre technique pour rester sans culpabiliser ?",
        "relance": "Moi je commande un truc toutes les heures par culpabilité, ça me ruine. Vous avez trouvé le bon équilibre pour squatter sans vous sentir mal ou vous vous en fichez ?"
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
      },
      {
        "accroche": "On est trois à taper sur nos claviers dans le même coin, on a transformé le café en open space sans se concerter — vous venez souvent squatter ici aussi ?",
        "relance": "Moi je fuis mon appart où je deviens fou tout seul. Vous avez repéré la meilleure table pour être au calme ou vous prenez ce qui reste ?"
      },
      {
        "accroche": "L'après-midi c'est le bon dosage ici, assez de vie pour rester réveillé mais pas le brouhaha du midi — c'est pour ça que vous venez à cette heure précise ?",
        "relance": "Moi le silence total chez moi m'endort, j'ai besoin de ce fond sonore. Vous êtes vraiment plus productif dans ce bruit ou vous vous racontez des histoires comme moi ?"
      },
      {
        "accroche": "Cette table c'est la seule avec une prise à portée, on se l'arrache — vous avez vos habitudes ici au point de connaître les bons spots ?",
        "relance": "Moi je repère la prise avant même de dire bonjour, c'est devenu un réflexe. Vous avez une table attitrée ou vous prenez ce qui reste comme moi ?"
      },
      {
        "accroche": "Le serveur ne vous demande même plus votre commande, il a l'air de vous connaître par cœur — vous êtes un pilier de l'endroit, on dirait ?",
        "relance": "Moi je change de café tout le temps de peur de déranger. C'est mieux d'avoir son QG où on vous laisse tranquille ou vous aimez varier les ambiances ?"
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
      },
      {
        "accroche": "On est une génération à avoir fait sauter la frontière entre le café, le bureau et la maison — ça vous plaît vraiment ce flou ou ça vous épuise ?",
        "relance": "Moi je sais plus quand ma journée commence ni quand elle finit, honnêtement. Vous avez réussi à mettre des limites ou vous bossez un peu tout le temps ?"
      },
      {
        "accroche": "Au fond, pouvoir bosser de n'importe où c'est une liberté folle, mais ça veut aussi dire ne jamais vraiment débrancher — vous le vivez comment, ce marché ?",
        "relance": "Moi je réponds à des mails dans mon lit, c'est devenu n'importe quoi. Vous, vous arrivez à couper le soir ou le boulot vous suit partout aussi ?"
      },
      {
        "accroche": "Au fond je crois qu'on vient ici surtout pour entendre du bruit humain, sentir qu'on n'est pas seuls à ramer — le télétravail c'est un peu ça, fuir le silence, non ?",
        "relance": "Moi mon appart est devenu une cellule, je me parle à moi-même. Vous, ce qui vous manque le plus en bossant seul, c'est le contact ou juste l'ambiance ?"
      },
      {
        "accroche": "C'est quand même dingue de pouvoir décider chaque matin où on va poser son bureau, un café, un parc, chez soi — vous en profitez à fond ou vous finissez toujours au même endroit par habitude ?",
        "relance": "Moi j'ai cette liberté et je reviens toujours au même café comme un pigeon. Vous êtes du genre à changer de décor tout le temps ou vous avez besoin d'un repère fixe ?"
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
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Votre veste est trempée — il s'est remis à tomber dehors, ou vous avez couru pour échapper à la file ?",
        "relance": "Moi j'ai oublié le parapluie comme un champion, encore une fois. C'est l'apocalypse dehors ou ça se calme ?"
      },
      {
        "accroche": "Votre parapluie dégouline encore, vous avez dû affronter le pire dehors — ça tombe vraiment des cordes là ?",
        "relance": "Moi j'ai renoncé au parapluie depuis longtemps, il se retourne à chaque bourrasque. Vous avez trouvé le modèle qui résiste ou c'est peine perdue ?"
      },
      {
        "accroche": "Vos chaussures font floc à chaque pas, vous avez pris la saucée en beauté — c'est le déluge dehors ou juste une grosse averse ?",
        "relance": "Moi j'ai les chaussettes trempées jusqu'aux chevilles, un régal. Vous croyez que ça vaut le coup d'attendre que ça se calme ou c'est reparti pour la soirée ?"
      },
      {
        "accroche": "Vous avez encore le capuchon de votre manteau sur la tête, vous osez même pas l'enlever — ça caille autant que ça mouille dehors ?",
        "relance": "Moi je me suis habillé pour le printemps, j'ai tout faux comme d'habitude. Vous aviez anticipé ce temps de chien ou ça vous a pris de court aussi ?"
      },
      {
        "accroche": "Vos lunettes se sont embuées à la seconde où vous êtes entré, il fait un froid de canard dehors — ça pince autant que ça en a l'air ?",
        "relance": "Moi je passe mon temps à les essuyer dès qu'il fait froid, c'est infernal. Vous avez trouvé une astuce contre la buée ou vous subissez comme moi ?"
      },
      {
        "accroche": "Vous, au moins, vous aviez pensé au parapluie, vous êtes du genre prévoyant — vous regardez la météo tous les matins ou c'est l'instinct ?",
        "relance": "Moi je pars toujours en tee-shirt quand il neige, une vraie plaie. Vous checkez l'appli religieusement chaque matin ou vous flairez le temps qu'il va faire ?"
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
      },
      {
        "accroche": "On est tous là à faire la queue en dégoulinant, au moins il fait chaud dedans — vous vous êtes réfugié ici aussi le temps que ça passe ?",
        "relance": "Moi j'ai fait mes courses surtout pour rester à l'abri, j'avoue tout. C'est votre magasin habituel ou vous êtes juste entré fuir la pluie comme moi ?"
      },
      {
        "accroche": "Tout le quartier a débarqué en même temps après le boulot, la file n'en finit plus — c'est toujours le bouchon à cette heure-là ici ?",
        "relance": "Moi je fais mes courses toujours au pire moment, épuisé et pressé. Vous connaissez l'heure magique où c'est enfin vide, vous qui avez l'air d'un habitué ?"
      },
      {
        "accroche": "Tout le monde a l'air de faire des réserves ce soir, comme si on annonçait une tempête pour le week-end — vous aussi vous anticipez le mauvais temps ?",
        "relance": "Moi j'achète toujours trois fois trop dès qu'on annonce de la pluie, allez savoir pourquoi. Vous croyez à ces alertes météo ou vous faites comme si de rien n'était ?"
      },
      {
        "accroche": "On est bien au chaud ici finalement, personne n'est vraiment pressé de replonger dehors sous l'averse — vous faites durer un peu vous aussi ou vous foncez ?",
        "relance": "Moi je traîne exprès dans les rayons le temps que ça se calme, j'assume. Vous avez une technique pour deviner le bon moment pour ressortir ou vous tentez au flair ?"
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
      },
      {
        "accroche": "Un temps pareil un soir de semaine, tout le monde dans la file n'a plus qu'une envie, rentrer se mettre au chaud — on est tous logés à la même enseigne, non ?",
        "relance": "Moi je pense qu'à mon plaid et une soupe, là tout de suite. Vous aussi c'est la dernière ligne droite avant de souffler ou la soirée démarre à peine ?"
      },
      {
        "accroche": "Il y a des soirs où toute la file a la même tête de fin de journée, cette fatigue collective qu'on se partage sans se parler — vous le sentez, ce truc ce soir ?",
        "relance": "Moi j'ai clairement épuisé mon quota d'énergie sociale pour aujourd'hui. Vous êtes du genre à rebondir le soir ou à vous écrouler direct comme moi ?"
      },
      {
        "accroche": "C'est fou comme un coup de pluie suffit à ce que des inconnus se mettent à se parler, alors qu'un beau jour tout le monde s'ignore — la météo, c'est le seul truc qui nous relie tous, non ?",
        "relance": "Moi c'est ma phrase de secours quand je sais pas quoi dire à quelqu'un. Vous trouvez pas que le mauvais temps rend les gens plus bavards, bizarrement ?"
      },
      {
        "accroche": "Il fait déjà nuit noire et il n'est pas si tard, ça donne à tout le monde des envies d'hibernation — vous le sentez aussi, ce coup de mou dès que les jours raccourcissent ?",
        "relance": "Moi dès que la nuit tombe à cinq heures j'ai envie de me mettre en pyjama direct. Vous êtes du genre à lutter contre ce ralenti de l'hiver ou vous vous laissez porter ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air philosophe à regarder la rue passer — c'est la pause ou la vraie vie du métier, ces moments-là ?",
        "relance": "Moi j'aurais déjà tourné en rond dix fois, j'envie votre calme. On s'habitue aux temps morts ou jamais vraiment ?"
      },
      {
        "accroche": "Vous avez le café à la main et l'œil qui suit chaque passant — c'est votre observatoire du matin, ce seuil ?",
        "relance": "Moi je tiendrais pas dix minutes à regarder sans rien faire. Vous vous racontez des histoires sur les gens qui passent ou c'est juste la pause ?"
      },
      {
        "accroche": "Vous avez rentré et ressorti la même caisse trois fois, on dirait que vous cherchez à occuper les mains — c'est pour tromper l'attente, ces gestes-là ?",
        "relance": "Moi je tournerais en rond au bout de dix minutes sans client. On s'invente des occupations pour tenir ou on finit par apprécier ces temps morts ?"
      },
      {
        "accroche": "Vous connaissez visiblement chaque commerçant de la rue, vous vous faites des signes de loin — c'est toute une petite communauté, ce bout de trottoir ?",
        "relance": "Moi je vis dans le quartier sans connaître personne, c'est triste dit comme ça. Vous vous entraidez entre voisins de rue ou chacun reste dans sa boutique ?"
      },
      {
        "accroche": "Vous avez soigné votre vitrine au millimètre alors que la rue est vide, c'est presque de l'art pour personne — vous la refaites souvent pour attirer l'œil ?",
        "relance": "Moi je serais découragé de bosser une vitrine que personne ne regarde. Ça attire vraiment les gens à l'intérieur ou c'est surtout pour votre fierté ?"
      },
      {
        "accroche": "Vous avez le journal plié sous le bras, c'est le rituel du matin en attendant que ça bouge — vous le lisez en entier avant le premier client ?",
        "relance": "Moi je tournerais en rond sans savoir quoi faire de mes dix doigts. C'est un petit plaisir qu'on s'accorde dans les temps morts ou vous préféreriez que ça défile non-stop ?"
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
      },
      {
        "accroche": "Vous avez sorti le tableau et arrosé le seuil, tout est prêt mais la rue dort encore — c'est le calme obligé avant que ça démarre pour de bon ?",
        "relance": "Moi je passe toujours trop tôt, avant que le quartier se réveille vraiment. C'est vers quelle heure que le vrai flux commence chez vous ?"
      },
      {
        "accroche": "Il n'y a presque personne dehors pour l'instant, la rue se réveille au compte-gouttes — c'est le creux du matin ou une journée qui s'annonce molle ?",
        "relance": "Moi je passe devant tous les jours sans jamais oser pousser la porte, je l'avoue. C'est quoi votre meilleur créneau, celui où ça se remplit vraiment ?"
      },
      {
        "accroche": "Le boulanger d'en face a déjà sa file alors que vous attendez encore, chacun son heure de gloire dans la rue — le flux passe de commerce en commerce dans la journée ?",
        "relance": "Moi je n'avais jamais pensé que les clients tournaient comme ça d'une boutique à l'autre. Vous savez à quelle heure c'est votre tour d'avoir du monde ?"
      },
      {
        "accroche": "C'est jour de marché un peu plus loin, ça devrait vous ramener du passage tout à l'heure — vous profitez du flux des jours comme ça ?",
        "relance": "Moi je viens toujours au quartier les jours de marché sans réaliser que ça fait vivre tout le monde autour. Ces jours-là changent vraiment la donne pour vous ou pas tant que ça ?"
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
      },
      {
        "accroche": "Un temps pareil, ça donne à toute la rue une envie de rester au lit plutôt que de sortir faire les boutiques — vous le sentez au nombre de passants ?",
        "relance": "Moi aussi j'ai traîné avant de mettre le nez dehors, faut dire. C'est vraiment la météo qui commande le passage ou c'est plus l'ambiance du jour ?"
      },
      {
        "accroche": "Passer ses journées à regarder défiler la vie de la rue, c'est presque un poste d'observation sur le quartier entier — vous voyez tout changer au fil des années ?",
        "relance": "Moi j'habite ici et je remarque rien, la tête dans le guidon. Vous, depuis votre seuil, vous avez vu le coin se transformer beaucoup ?"
      },
      {
        "accroche": "Au fond, tenir une boutique de rue aujourd'hui c'est presque un acte de résistance face à tout ce qui se commande en ligne — vous le vivez comme ça, ce métier ?",
        "relance": "Moi j'achète tout sur internet et je culpabilise en voyant les rideaux baissés. Vous sentez que les gens reviennent vers les petits commerces ou c'est de plus en plus dur ?"
      },
      {
        "accroche": "Il y a un truc presque zen dans votre métier, savoir attendre sans s'agiter pendant que tout le monde court après le temps — c'est une sagesse que le poste vous a apprise ?",
        "relance": "Moi je supporte pas de ne rien faire deux minutes, ça me rend fou. Vous avez appris à apprécier ces moments suspendus ou ça vous pèse encore parfois ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre trousseau pourrait ouvrir la moitié de la ville — vous retenez chaque clé par cœur ou y a un système ?",
        "relance": "Moi je perds la mienne deux fois par semaine, c'est dire le niveau. Comment on garde le contrôle de tout ça sans devenir fou ?"
      },
      {
        "accroche": "Vos plantes dans la loge sont impeccables, mieux que tout mon appartement réuni — vous avez la main verte ou c'est juste de la patience ?",
        "relance": "Moi je fais faner un cactus, c'est dire le niveau. Vous vous en occupez depuis longtemps ou c'est une manie qui est venue avec le poste ?"
      },
      {
        "accroche": "Vous avez un tableau d'affichage tenu au cordeau, chaque mot bien à sa place — c'est vous le maniaque de l'ordre ou c'est le poste qui l'exige ?",
        "relance": "Moi je perds les papiers importants dans la seconde. Vous arrivez à ce que les gens lisent vraiment vos annonces ou ça sert à rien la plupart du temps ?"
      },
      {
        "accroche": "Vous avez toujours un petit mot ou une blague pour chacun qui passe la porte — c'est votre nature ou c'est venu avec le métier ?",
        "relance": "Moi je saurais pas quoi dire à tout le monde comme ça, du matin au soir. Ça vous vient tout seul ou vous vous forcez les jours sans entrain ?"
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
      },
      {
        "accroche": "Vous savez déjà pour qui est ce colis avant même de lire l'étiquette — vous connaissez les habitudes de chaque appartement à ce point ?",
        "relance": "Moi je reconnais à peine mes voisins de palier depuis que j'ai emménagé. On finit par tout savoir des gens sans le vouloir, dans ce métier ?"
      },
      {
        "accroche": "Vous gérez les histoires de boîtes aux lettres, de fuites, de voisins fâchés — vous êtes un peu le médiateur de tout l'immeuble en plus du reste ?",
        "relance": "Moi je fuirais les conflits de voisinage à toutes jambes. Comment on garde tout le monde content quand chacun vient se plaindre de l'autre ?"
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
      },
      {
        "accroche": "En été, avec la moitié des gens partis en vacances, l'immeuble doit devenir tout calme d'un coup — ça vous change le quotidien, ces périodes creuses ?",
        "relance": "Moi j'adore ce silence quand tout le monde est parti, ça respire. C'est le moment que vous préférez ou vous vous ennuyez un peu sans le va-et-vient ?"
      },
      {
        "accroche": "Un immeuble c'est une petite société avec ses joies, ses drames, ses secrets, et vous en êtes le témoin discret de tout ça — vous le vivez comme ça, votre rôle ?",
        "relance": "Moi j'imagine même pas la moitié de ce qui se joue derrière les portes que vous croisez. Il y a des choses qui vous touchent encore ou vous avez tout vu ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez le sourire de quelqu'un qui gère l'imprévu avant même qu'il arrive — c'est votre routine ou vous êtes du matin naturellement ?",
        "relance": "Moi je suis une catastrophe avant 8h, ça se voit sûrement. Sur ce genre de poste, on devient vite imperméable au stress des gens ?"
      },
      {
        "accroche": "Vous tapez sur votre clavier sans même regarder l'écran tout en gardant le contact avec les gens — c'est un réflexe qui vient avec les années ?",
        "relance": "Moi je fixe mes touches comme si j'apprenais encore. On finit par connaître le système par cœur ou il change tout le temps ?"
      },
      {
        "accroche": "Votre foulard est encore parfaitement noué à cette heure où moi je tiens à peine debout — vous soignez le détail même au petit matin ou c'est l'uniforme qui l'impose ?",
        "relance": "Moi le matin je sors avec le pull à l'envers une fois sur deux. On finit par mettre un point d'honneur à rester impeccable quand on est en vitrine comme ça ?"
      },
      {
        "accroche": "Vous décollez les étiquettes bagages et vous les enroulez sur la valise en un seul geste, sans regarder — c'est le genre de truc qu'on ne remarque qu'après des milliers de fois ?",
        "relance": "Moi je m'emmêle avec un simple sticker. C'est quoi le geste du métier que personne ne voit mais qui vous a demandé le plus de temps à maîtriser ?"
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
      },
      {
        "accroche": "Les écrans d'affichage sont encore tout au vert derrière vous, pas un seul retard — c'est ce calme rare avant que ça se mette à clignoter partout ?",
        "relance": "Moi je fixe ces panneaux comme si ma vie en dépendait dès que j'arrive. C'est vous les premiers au courant quand un vol commence à déraper ?"
      },
      {
        "accroche": "Vous êtes déjà en poste alors que le café des voyageurs n'a même pas ouvert — vous prenez toujours le tout premier créneau du terminal ?",
        "relance": "Moi sans mon café je ne réponds de rien avant 9h. C'est quoi qui vous cale pour tenir dès l'ouverture des comptoirs ?"
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
      },
      {
        "accroche": "C'est fou quand on y pense, chaque personne dans cette file part vers une journée totalement différente de la mienne — c'est un truc que vous devez ressentir en permanence à ce comptoir, non ?",
        "relance": "Moi je pars pour une réunion sans relief, pas très dépaysant. Ça vous donne encore envie de voyager vous-même ou vous voyez tellement de départs que ça banalise ?"
      },
      {
        "accroche": "Le matin, tout le monde ici tient un billet qui est un petit bout de projet — vacances, retrouvailles, grand départ — il y a une énergie particulière, non ?",
        "relance": "Moi je fais partie des voyages obligés du jour, moins romantique. Vous arrivez à deviner qui part pour un truc qui compte vraiment rien qu'à leur façon d'arriver ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre veste a l'air d'avoir fait autant de kilomètres que les trains — vous êtes sur cette ligne depuis longtemps ?",
        "relance": "Moi j'aurais les pieds en compote après deux heures debout. Sur les longues lignes, on prend le temps de s'asseoir ou c'est debout de bout en bout ?"
      },
      {
        "accroche": "Vous scannez les billets sans presque regarder l'écran — après toutes ces années, vous devinez presque qui a oublié le sien rien qu'à la tête ?",
        "relance": "Moi je fouille mes poches en panique à chaque contrôle. On repère vite les resquilleurs ou ils sont plus malins qu'on croit ?"
      },
      {
        "accroche": "Vous avez la casquette qui a vu passer un paquet de saisons — vous êtes plutôt attaché à ce côté uniforme ou c'est juste l'outil de travail ?",
        "relance": "Moi je perds mes affaires en trois jours, alors une casquette qui dure des années ça m'impressionne. On s'attache à ce genre de repères sur le métier ou c'est purement pratique ?"
      },
      {
        "accroche": "Vous traversez le wagon en gardant l'équilibre pile quand ça tangue, sans même tenir les barres — le corps finit par mémoriser les secousses, non ?",
        "relance": "Moi je m'accroche partout au moindre virage. Au bout de combien de temps on marche dans un train comme sur la terre ferme ?"
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
      },
      {
        "accroche": "Le tableau annonçait déjà du rouge sur la moitié des départs ce soir — c'est une soirée particulière ou les fins de journée c'est souvent la loterie ?",
        "relance": "Moi je suis monté en croisant les doigts, comme d'habitude. C'est quoi le créneau où vous savez d'avance que ça va coincer ?"
      },
      {
        "accroche": "Il fait déjà nuit dehors et le quai s'était vidé d'un coup avant qu'on parte — c'est le dernier gros train de la soirée ou il en reste derrière vous ?",
        "relance": "Moi je vise toujours celui-là pour rentrer, quitte à courir. Vous préférez finir sur les trains tardifs plus tranquilles ou c'est là que la fatigue tape ?"
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
      },
      {
        "accroche": "Il y a un truc apaisant dans un train du soir, tout le monde rentre vers quelque chose, une maison, quelqu'un — vous le sentez dans l'ambiance des wagons ?",
        "relance": "Moi ce trajet c'est mon sas pour redevenir moi-même avant d'arriver. Vous, à force de finir vos journées dans ces retours, ça vous donne quoi comme rapport au soir ?"
      },
      {
        "accroche": "À cette heure les retards font râler tout le monde, mais au fond on est tous logés à la même enseigne, coincés ensemble — ça crée presque une petite solidarité, non ?",
        "relance": "Moi j'ai remarqué qu'on se parle plus facilement entre passagers quand ça bloque. Vous, un train à l'arrêt, ça change l'humeur des gens envers vous ou ça reste tendu ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez le badge du réceptionniste et l'air de quelqu'un qui a déjà répondu à toutes les questions possibles — c'est quoi la plus bizarre de la semaine ?",
        "relance": "Moi j'aurais séché sur la moitié, j'imagine. Les demandes insolites, ça vous fait encore sourire ou c'est devenu ordinaire ?"
      },
      {
        "accroche": "Vous avez retenu mon nom avant même que je sorte ma réservation — c'est une technique que vous travaillez ou vous êtes physionomiste de naissance ?",
        "relance": "Moi j'oublie un prénom trois secondes après qu'on me le donne. Ça vient avec le métier de retenir les visages comme ça, ou c'était déjà là ?"
      },
      {
        "accroche": "Vous avez le sourire aussi frais qu'à l'ouverture alors qu'il est tard — vous êtes du soir naturellement ou c'est le métier qui vous a musclé là-dessus ?",
        "relance": "Moi à cette heure j'ai plus la force de faire semblant d'être aimable. Comment on garde cette énergie d'accueil quand la journée traîne en longueur ?"
      },
      {
        "accroche": "Vous glissez la carte de la chambre dans la pochette en griffonnant les infos sans regarder — c'est le genre de gestes qu'on répète des centaines de fois par soirée ?",
        "relance": "Moi je referais tomber la carte deux fois avant d'y arriver. C'est quoi le moment de la soirée où l'afflux d'arrivées est le plus dense ?"
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
      },
      {
        "accroche": "Le hall a une vraie atmosphère le soir, cette lumière basse qui invite à ralentir — c'est pensé pour accueillir les voyageurs fatigués comme moi ?",
        "relance": "Moi je débarque toujours lessivé et un hall pareil ça me réconcilie avec la journée. C'est quoi le petit détail de l'accueil dont les clients vous parlent le plus ?"
      },
      {
        "accroche": "Vous allez me parler du petit-déjeuner de demain, je le sens venir — c'est le moment que les habitués attendent le plus ou j'idéalise ?",
        "relance": "Moi le petit-déj d'hôtel c'est mon vrai motif de motivation le matin, j'assume. C'est quoi le truc de la maison que les gens redemandent avant même de repartir ?"
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
      },
      {
        "accroche": "Il y a un truc particulier à débarquer le soir dans une ville qu'on ne connaît pas, on se sent un peu suspendu entre deux vies — vous accueillez beaucoup de gens dans cet état ?",
        "relance": "Moi j'adore et ça m'angoisse à la fois, cet entre-deux. Vous êtes un peu le premier repère rassurant des gens qui arrivent perdus, non ?"
      },
      {
        "accroche": "Un hôtel, c'est un endroit où personne n'est vraiment chez soi mais où tout le monde veut se sentir attendu — c'est ça le vrai cœur de votre métier, non ?",
        "relance": "Moi il me faut juste un accueil sincère pour me sentir bien quelque part. C'est quoi le geste tout simple qui fait qu'un client se sent chez lui en cinq minutes ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez les ciseaux qui bougent même quand vous parlez — c'est une seconde nature ou vous faites attention ?",
        "relance": "Moi j'arriverais pas à faire deux choses en même temps sans catastrophe. Vous apprenez ça en formation ou ça vient avec l'expérience ?"
      },
      {
        "accroche": "Votre propre coupe est toujours nickel — c'est la pression du métier ou vous testez vos idées sur vous d'abord ?",
        "relance": "Moi je laisse pousser jusqu'à la crise, j'assume. Vous expérimentez vos nouveautés sur votre tête avant de les proposer aux clients ?"
      },
      {
        "accroche": "Vous avez toujours un peigne qui apparaît dans votre main comme par magie, même quand vous causez — c'est devenu un prolongement de vous, ce truc ?",
        "relance": "Moi je perds mon peigne dans ma propre salle de bain. Vous avez développé cette gestuelle à force ou c'était naturel dès le début ?"
      },
      {
        "accroche": "Vous jetez toujours un dernier coup d'œil dans le miroir en tournant ma tête au millimètre — c'est le réflexe du perfectionniste ou vous voyez un truc que moi je ne verrai jamais ?",
        "relance": "Moi je me trouve bien avant même que vous ayez fini, je suis bon public. C'est quoi le détail que vous corrigez tout le temps et que le client ne remarque même pas ?"
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
      },
      {
        "accroche": "Il y a toujours cette petite musique de fond ici qui met tout de suite à l'aise — c'est vous qui choisissez la playlist ou ça tourne en boucle ?",
        "relance": "Moi je me surprends à me détendre dès que je m'assois, l'ambiance y est pour beaucoup. Vous adaptez ça selon les clients ou vous gardez votre univers à vous ?"
      },
      {
        "accroche": "Cet après-midi c'est plus tranquille que d'habitude ici, on peut vraiment prendre le temps — c'est le bon moment pour tenter un truc un peu nouveau sur ma tête ?",
        "relance": "Moi je viens toujours à l'arrache entre deux rendez-vous d'habitude. C'est quoi le créneau que vous préférez, quand vous pouvez vraiment soigner le boulot ?"
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
      },
      {
        "accroche": "On dirait qu'à chaque changement de saison les gens ont besoin de tourner une page sur leur tête aussi — vous le sentez arriver, ces envies de renouveau ?",
        "relance": "Moi dès que le temps change j'ai envie de tout changer sans savoir quoi. C'est vrai qu'une envie de nouvelle coupe cache souvent une envie de nouveau départ ?"
      },
      {
        "accroche": "C'est fou le pouvoir qu'a un miroir ici, les gens se jugent, se réinventent, se rassurent en une heure — vous êtes un peu au premier rang de leur rapport à eux-mêmes, non ?",
        "relance": "Moi je n'ose jamais vraiment me regarder ailleurs qu'ici. Vous voyez souvent des gens reprendre confiance juste avec un bon changement de look ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous jongler entre le téléphone, l'ordi et les patients avec une précision millimétrée — vous avez un système ou c'est l'instinct ?",
        "relance": "Moi j'ai du mal à gérer deux tâches en même temps sans tout rater. À quel moment on atteint ce niveau de maîtrise ?"
      },
      {
        "accroche": "Vous gardez une voix posée au téléphone même quand la salle déborde derrière vous — c'est un masque pro ou vous êtes zen de nature ?",
        "relance": "Moi je m'entends stresser dès que ça s'accumule. On apprend à garder ce calme dans la voix ou c'est déjà en vous au départ ?"
      },
      {
        "accroche": "Vous notez les rendez-vous d'une main tout en écoutant de l'autre oreille — vous avez un système bien rôdé ou c'est de la pure survie le matin ?",
        "relance": "Moi je n'arrive même pas à écrire en écoutant quelqu'un. C'est le rush du matin qui vous a forcée à développer ça ou vous étiez déjà comme ça ?"
      },
      {
        "accroche": "Vous glissez un mot rassurant à chaque personne qui repart, même en plein coup de feu — c'est un réflexe ou vous y faites vraiment attention ?",
        "relance": "Moi quand je suis débordé je deviens sec sans le vouloir. Comment vous gardez ce petit geste humain même quand tout s'accumule ?"
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
      },
      {
        "accroche": "Toutes les chaises sont prises et j'ai attrapé le dernier coin libre — c'est le grand classique du lundi matin ou j'ai vraiment mal choisi mon jour ?",
        "relance": "Moi je pensais être malin en venant tôt, raté. C'est quoi le moment de la semaine où la salle est enfin respirable ?"
      },
      {
        "accroche": "La porte du cabinet s'ouvre et se referme à un rythme régulier, on dirait presque une horloge — le docteur tient le tempo ou ça déborde vite derrière ?",
        "relance": "Moi je guette cette porte comme le métro à l'heure de pointe. Vous arrivez à anticiper le retard qui s'accumule ou ça vous échappe une fois lancé ?"
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
      },
      {
        "accroche": "Il y a un truc étrange dans une salle d'attente, des inconnus assis ensemble qui ont tous une petite inquiétude en tête — vous ressentez cette ambiance particulière tous les matins ?",
        "relance": "Moi j'arrive toujours avec ma petite angoisse que je cache derrière mon téléphone. Vous finissez par lire sur les visages qui va bien et qui ne va pas ?"
      },
      {
        "accroche": "Le matin, tout le monde débarque ici en ayant posé sa demi-journée, un peu tendu à l'idée de faire attendre le boulot derrière — c'est palpable, cette impatience ?",
        "relance": "Moi je calcule déjà le retard que je vais prendre pour la suite. Vous arrivez à désamorcer les gens pressés ou vous encaissez surtout leur stress ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre livre a l'air de vous tenir en haleine — c'est quoi, si c'est pas indiscret ?",
        "relance": "Moi j'arrive plus à lire dans les transports, je m'endors ou je regarde mon téléphone. C'est quoi le genre ?"
      },
      {
        "accroche": "Vous avez le regard fixé dehors depuis un moment — c'est le genre de trajet où on réfléchit à sa journée ou juste où on essaie de pas se rendormir ?",
        "relance": "Moi je fais défiler mon téléphone dans le vide pour tenir. Vous, ce moment fenêtre, c'est votre petite bulle du matin ?"
      },
      {
        "accroche": "Vous avez des écouteurs qui ont l'air de vous couper totalement du monde — c'est de la musique pour vous réveiller ou plutôt un podcast pour occuper le trajet ?",
        "relance": "Moi je mets un truc et je finis toujours par regarder dans le vide sans écouter. Vous, c'est votre rituel pour rendre ce trajet supportable ?"
      },
      {
        "accroche": "Vous tenez votre gobelet de café comme une bouée de sauvetage — le vôtre non plus il ne démarre pas sans caféine, ce trajet ?",
        "relance": "Moi sans mon café du matin je suis une menace publique. Vous le prenez toujours à emporter pour le boire ici ou c'est le luxe du jour ?"
      },
      {
        "accroche": "Votre sac de sport à cette heure, vous enchaînez déjà une séance avant le boulot — c'est ça, votre carburant pour la journée ?",
        "relance": "Moi rien que l'idée de bouger avant midi me fatigue. Vous tenez ce rythme tous les matins ou c'est juste les jours courageux ?"
      },
      {
        "accroche": "Vous faites vos mots croisés à la main pendant que tout le monde scrolle sur son téléphone, ça a un charme fou — c'est votre rituel anti-écran du matin ?",
        "relance": "Moi je fixe mon téléphone sans rien y faire de valable, c'est déprimant. Ça vous réveille mieux les neurones que le défilement bête, ce genre de jeu ?"
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
      },
      {
        "accroche": "On vient de rester bloqués deux bonnes minutes portes ouvertes à ce dernier arrêt — vous savez si la ligne fait des siennes ce matin ou c'est l'ordinaire ?",
        "relance": "Moi je pars toujours sans marge, du coup le moindre arrêt me stresse. Vous, vous avez appris à prévoir large ou vous jouez avec le feu comme moi ?"
      },
      {
        "accroche": "Il y a encore de la place assise ce matin, c'est suffisamment rare pour le souligner — vous avez visé un horaire malin ou c'est le hasard du jour ?",
        "relance": "Moi je tombe toujours pile sur la rame bondée, une vraie malédiction. C'est quoi votre astuce d'horaire pour éviter la cohue ?"
      },
      {
        "accroche": "On passe toujours ce pont où toute la rame regarde par la fenêtre en même temps, c'est le seul beau moment du trajet — vous le guettez aussi ou vous ne le voyez même plus ?",
        "relance": "Moi je ne m'en lasse pas, c'est ma récompense du matin. Vous connaissez ce trajet par cœur au point de ne plus rien remarquer ou vous levez encore les yeux ?"
      },
      {
        "accroche": "Vous avez visé la place près de la vitre comme moi, c'est la meilleure du wagon pour être tranquille — vous avez vos petits repères sur cette ligne ?",
        "relance": "Moi je fais toujours la course pour ce coin précis, c'est ridicule. Vous avez votre place attitrée dans la tête ou vous prenez ce qui se présente ?"
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
      },
      {
        "accroche": "C'est marrant, ce trajet c'est le seul moment de la journée où je ne dois rien à personne — vous le vivez comme une corvée ou comme une petite parenthèse à vous ?",
        "relance": "Moi j'ai fini par le voir comme mon seul vrai temps mort. Vous en profitez pour souffler ou vous préparez déjà votre journée mentalement ?"
      },
      {
        "accroche": "On refait tous exactement le même chemin chaque matin sans jamais se croiser vraiment — vous avez déjà remarqué qu'on voit les mêmes visages sans se parler ?",
        "relance": "Moi je reconnais deux ou trois têtes sans jamais oser un mot. Vous croyez qu'on pourrait vraiment se parler dans ces trajets ou c'est contre nature ?"
      },
      {
        "accroche": "Je me dis parfois que ce trajet c'est le seul sas entre la maison et le boulot, le temps de changer de casquette avant d'arriver — vous vous en servez pour ça aussi, souffler entre deux mondes ?",
        "relance": "Moi sans ce temps mort je débarquerais au bureau la tête encore dans mon petit-déjeuner. Vous en profitez pour vous préparer mentalement ou vous préférez ne penser à rien ?"
      },
      {
        "accroche": "C'est vertigineux si on additionne toutes les heures qu'on passe là-dedans dans une vie, c'est presque une seconde maison mine de rien — vous y pensez parfois ou vaut mieux pas calculer ?",
        "relance": "Moi j'ai fait le calcul une fois et je l'ai regretté, c'est effrayant. Vous avez fini par apprivoiser ce temps ou vous le subissez encore chaque matin ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez un livre à portée de main derrière la caisse — c'est ce que vous lisez en ce moment ou votre voisin de comptoir préféré ?",
        "relance": "Moi j'ai honte de ma pile à lire, elle attend depuis des mois. C'est quoi en ce moment qui vous a le plus accroché ?"
      },
      {
        "accroche": "Vos petits mots manuscrits sous les livres, c'est vous qui les écrivez tous ? On sent que c'est pas du copié-collé.",
        "relance": "Moi je choisis un bouquin à moitié grâce à ces mots-là, j'avoue. C'est quoi le livre pour lequel vous avez eu le plus de mal à trouver les mots ?"
      },
      {
        "accroche": "Vous rangez cette pile en caressant presque chaque couverture au passage — on sent que ce ne sont pas juste des objets pour vous ?",
        "relance": "Moi j'ai un rapport un peu coupable à mes livres, je les entasse sans les ouvrir. C'est quoi le bouquin que vous avez du mal à laisser partir de vos rayons ?"
      },
      {
        "accroche": "Votre table des nouveautés est disposée avec un vrai sens de la mise en scène, il y a une logique là-dedans — c'est vous qui la pensez comme un parcours ?",
        "relance": "Moi je fonce toujours au hasard sans méthode. C'est quoi le titre que vous avez mis en avant en espérant secrètement qu'on le remarque ?"
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
      },
      {
        "accroche": "Il y a ce petit fauteuil au fond qui donne juste envie de s'installer et d'oublier l'heure — vous le laissez exprès pour qu'on prenne le temps ?",
        "relance": "Moi je pourrais y passer l'après-midi sans culpabiliser, presque. C'est quoi le coin de la boutique où vous aimeriez que les gens s'attardent plus ?"
      },
      {
        "accroche": "Cet après-midi la boutique est plongée dans un silence de bibliothèque, on chuchoterait presque — c'est l'heure que vous préférez pour vraiment échanger avec les gens ?",
        "relance": "Moi je n'ose plus poser mes questions quand c'est calme comme ça, allez savoir pourquoi. C'est plus facile de conseiller dans ce silence ou vous préférez l'effervescence ?"
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
      },
      {
        "accroche": "En ce moment j'ai surtout besoin d'un livre qui me fasse voyager loin de mon quotidien — vous devez entendre cette demande d'évasion tout le temps, non ?",
        "relance": "Moi c'est plus une envie de fuir cinq minutes qu'un vrai projet littéraire. C'est quoi le livre que vous tendez aux gens qui ont juste besoin de partir ailleurs ?"
      },
      {
        "accroche": "J'ai l'impression qu'on lit de moins en moins mais qu'on en a de plus en plus besoin, pour se poser — vous le ressentez dans les gens qui poussent votre porte ?",
        "relance": "Moi je m'y remets par vagues, avec la culpabilité d'avoir décroché. Vous croyez qu'on peut vraiment réapprendre à prendre le temps de lire aujourd'hui ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous portez quatre assiettes d'un bras sans jamais trébucher — c'est une question d'entraînement ou de concentration pure ?",
        "relance": "Moi je renverse un verre à chaque fois que quelqu'un me regarde. Ça s'apprend vraiment ou faut être câblé différemment ?"
      },
      {
        "accroche": "Vous prenez les commandes sans rien noter — vous retenez vraiment tout ou vous priez un peu une fois en cuisine ?",
        "relance": "Moi j'oublie ma liste de courses entre le frigo et la porte. C'est un entraînement de la mémoire ou vous avez vos petits trucs ?"
      },
      {
        "accroche": "Vous slalomez entre les tables à toute vitesse sans jamais bousculer personne — c'est un vrai sens du timing ou vous avez la carte de la salle dans la tête ?",
        "relance": "Moi je me cogne dans les meubles de ma propre cuisine. Ça s'apprend, cette façon de se faufiler partout, ou c'est le rythme qui vous l'impose ?"
      },
      {
        "accroche": "Vous repérez d'un coup d'œil quelle table a fini, laquelle attend, laquelle veut l'addition — vous scannez tout ça en permanence sans y penser ?",
        "relance": "Moi je perds le fil dès qu'il y a plus de deux choses à suivre. C'est un radar qui vient avec l'habitude ou vous avez toujours eu l'œil partout ?"
      },
      {
        "accroche": "Vous avez les chaussures d'un pro qui tient debout des heures, c'est le premier investissement du métier, non — vos pieds vous remercient au moins ?",
        "relance": "Moi après une heure debout je cherche déjà une chaise. C'est les jambes qui lâchent en premier dans ce boulot ou on s'y fait vraiment ?"
      },
      {
        "accroche": "Vous avez le tire-bouchon dégainé avant même que la table le demande, tout est anticipé chez vous — c'est le rush qui vous a appris à toujours avoir un coup d'avance ?",
        "relance": "Moi je cours chercher chaque truc au dernier moment dans ma cuisine. C'est l'anticipation le vrai secret pour survivre au coup de feu ou c'est surtout de l'endurance ?"
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
      },
      {
        "accroche": "Ça bourdonne encore pas mal dans la salle, toutes les tables sont pleines — c'est le pic du service là ou ça commence doucement à retomber ?",
        "relance": "Moi je vais faire simple pour pas vous compliquer la vie en plein rush. C'est quoi le plat que la cuisine sort le plus vite quand ça pousse comme ça ?"
      },
      {
        "accroche": "Il reste ces bonnes odeurs de cuisine qui flottent alors que le plus gros est passé — c'est le creux enfin arrivé ou vous enchaînez déjà sur autre chose ?",
        "relance": "Moi j'arrive toujours pile quand vous pensiez souffler, navré. C'est quand, le vrai moment où vous posez les pieds dans une journée pareille ?"
      },
      {
        "accroche": "Votre ardoise du jour a l'air alléchante mais tout part vite j'imagine — c'est quoi qu'il vous reste avant que la cuisine ne soit à sec ?",
        "relance": "Moi je choisis toujours en dernier et il ne reste plus rien, une malédiction. C'est le plat du jour qui part en premier ou les gens jouent la sécurité avec la carte ?"
      },
      {
        "accroche": "Vous jetez un œil au carnet de réservations toutes les deux minutes, ça doit être déjà blindé pour ce soir — vous enchaînez sans vraie pause entre midi et le service du soir ?",
        "relance": "Moi je pensais qu'il y avait un vrai creux l'après-midi dans ce métier. Vous arrivez vraiment à souffler entre les deux ou c'est du non-stop déguisé ?"
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
      },
      {
        "accroche": "C'est fou tout ce qui se joue autour d'une table le midi, des deals, des retrouvailles, des ruptures parfois — vous devez être témoin de sacrées scènes sans jamais pouvoir rien dire, non ?",
        "relance": "Moi je parle trop fort au resto, vous devez tout entendre. C'est quoi la scène la plus mémorable que vous ayez surprise en servant ?"
      },
      {
        "accroche": "On voit l'assiette arriver mais jamais tout ce que ça demande derrière pour qu'un midi tourne rond — c'est un ballet invisible que personne ne soupçonne, non ?",
        "relance": "Moi je réalise à peine le boulot que ça représente en vous regardant. C'est quoi la partie du métier la plus dure que le client ne voit jamais ?"
      },
      {
        "accroche": "On entend partout que le métier peine à recruter, que c'est de plus en plus dur de tenir ces cadences — vous le vivez au quotidien, cette pression qui monte ?",
        "relance": "Moi je serais incapable de tenir un seul service à ce rythme, chapeau. Vous croyez que c'est le rythme qui fait fuir les gens du métier ou autre chose ?"
      },
      {
        "accroche": "Au fond vous offrez aux gens une des rares vraies pauses de leur journée, le seul moment où ils s'assoient et décrochent — vous le voyez comme ça, votre rôle ?",
        "relance": "Moi mon déjeuner c'est souvent un sandwich devant l'ordi, ça me déprime. Vous sentez que les gens savourent vraiment ce moment ou ils sont pressés même à table ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre voiture est impeccable pour un métier qui passe sa journée dehors — c'est une question d'organisation ou de discipline ?",
        "relance": "Moi ma voiture en dit long sur mon niveau de chaos. Sur de longues journées comme les vôtres, c'est quoi le truc qui fait vraiment la différence ?"
      },
      {
        "accroche": "Vous avez pris un raccourci que même le GPS ne connaît pas — vous avez toute la ville dans la tête ou c'est des années de terrain ?",
        "relance": "Moi je me perds encore avec l'appli dans la main. Au bout de combien de temps on connaît une ville mieux qu'une carte ?"
      },
      {
        "accroche": "Vous avez des chargeurs, des bonbons, tout ce qu'il faut à portée à l'arrière — vous avez pensé à tout, c'est l'expérience qui vous a appris à anticiper les galères des clients ?",
        "relance": "Moi j'oublie toujours mon chargeur pile quand j'en ai besoin. C'est quoi la petite attention que les clients remarquent le plus dans votre voiture ?"
      },
      {
        "accroche": "Vous conduisez d'une main tranquille comme si la circulation ne vous atteignait plus du tout — plus rien ne vous stresse au volant après toutes ces heures ?",
        "relance": "Moi je klaxonne et je râle au moindre feu rouge. On finit par devenir zen dans le trafic ou vous avez toujours eu ce sang-froid ?"
      },
      {
        "accroche": "Vous avez un petit porte-bonheur accroché au rétroviseur, ça a l'air d'y tenir une place particulière — il vous suit depuis vos débuts au volant ?",
        "relance": "Moi je n'accroche jamais rien, j'ai peur de m'encombrer. Il a une histoire, ce petit truc, ou c'est juste pour égayer les longues journées ?"
      },
      {
        "accroche": "Vous aviez la radio calée pile sur les infos trafic avant même de démarrer, vous jouez toujours un coup d'avance — c'est le réflexe de survie du métier ?",
        "relance": "Moi je découvre le bouchon une fois coincé dedans, trop tard. Vous anticipez tout à la radio ou vous flairez les embouteillages à l'instinct après tant d'années ?"
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
      },
      {
        "accroche": "On passe devant ce chantier qui a l'air éternel — ça fait des mois qu'il pourrit la circulation ou ça bouge enfin ?",
        "relance": "Moi je me perds dès qu'un itinéraire habituel change à cause des travaux. Vous, vous connaissez déjà tous les plans B de la ville par cœur ?"
      },
      {
        "accroche": "La ville est plutôt calme sur ce trajet, on glisse tranquille — c'est le bon moment de la journée ou j'ai juste eu de la chance en montant ?",
        "relance": "Moi je tombe systématiquement dans les bouchons, un vrai aimant. C'est quoi l'heure creuse que vous guettez pour rouler peinard ?"
      },
      {
        "accroche": "On vient de passer devant ce vieux bâtiment que tout le monde photographie sans savoir ce que c'est — vous devez connaître son histoire à force de passer devant ?",
        "relance": "Moi je traverse cette ville sans jamais lever le nez sur ce qui m'entoure. C'est quoi le coin de la ville dont vous racontez toujours l'histoire à vos clients ?"
      },
      {
        "accroche": "Ce quartier a l'air d'avoir complètement changé de tête, il y a des terrasses partout maintenant — vous l'avez vu se métamorphoser au fil de vos courses ?",
        "relance": "Moi je ne remarque jamais ces changements, la ville défile sans que je la voie. C'est quoi le coin qui a le plus changé depuis que vous roulez ici ?"
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
      },
      {
        "accroche": "Vous voyez la ville se transformer heure par heure du matin au soir, c'est un point de vue que personne d'autre n'a vraiment — elle a plusieurs visages dans une seule journée, non ?",
        "relance": "Moi je ne vois qu'une tranche de la ville, celle de mes horaires. C'est quoi le moment de la journée où vous la trouvez la plus belle, votre ville ?"
      },
      {
        "accroche": "Il y a un truc unique dans votre voiture, ce huis clos où les gens montent, se confient et disparaissent — vous devez recueillir des bouts de vie toute la journée, non ?",
        "relance": "Moi je me lâche direct dès que je suis passager, c'est plus fort que moi. Les gens vous parlent plus facilement parce qu'ils savent qu'ils ne vous reverront jamais ?"
      },
      {
        "accroche": "À force de sillonner partout, vous devez sentir l'humeur de la ville mieux que quiconque, les jours de tension, les soirs de fête — vous êtes un peu le thermomètre du coin, non ?",
        "relance": "Moi je ne perçois qu'une petite bulle autour de moi, jamais l'ensemble. Vous sentez vraiment quand la ville est électrique ou d'humeur joyeuse, rien qu'en roulant ?"
      },
      {
        "accroche": "C'est un drôle de métier au fond, faire un bout de chemin avec des inconnus qu'on ne reverra jamais, comme des petits voyages minute — vous vous attachez parfois ou c'est trop fugace ?",
        "relance": "Moi je me confie toujours trop vite à un inconnu de passage, allez savoir pourquoi. Il y a des clients qui vous ont marqué malgré le fait que ça n'a duré que vingt minutes ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vos chaussures ont pris une sacrée raclée — vous avez couru dans quoi, une rivière ?",
        "relance": "Moi je serais rentré au premier signe de boue. C'est quoi votre itinéraire habituel par ici ?"
      },
      {
        "accroche": "Vous vous étirez avec une méthode carrée, on voit que c'est pas votre première sortie — vous suivez un programme ou vous y allez au feeling ?",
        "relance": "Moi je ne m'étire jamais et je le paie le lendemain. C'est quoi le réflexe de récup que tout le monde néglige et qui change tout ?"
      },
      {
        "accroche": "Votre montre a clignoté trois fois pendant que vous récupériez — vous checkez vos temps à chaud ou vous décortiquez tout ça tranquillement après ?",
        "relance": "Moi je regarde mes stats juste pour me déprimer, franchement. Ça vous pousse vraiment à progresser, ces chiffres, ou ça finit par mettre la pression ?"
      },
      {
        "accroche": "Vous reprenez votre souffle avec un calme impressionnant, aucun essoufflement de débutant — vous travaillez la respiration autant que les jambes ?",
        "relance": "Moi je halète comme un phoque au bout de cinq minutes. C'est quoi le secret pour tenir la distance sans finir à bout de souffle comme moi ?"
      },
      {
        "accroche": "Vous avez un strap au genou mais ça ne vous a pas empêché de boucler votre tour — vous composez avec une vieille douleur ou c'est juste du préventif ?",
        "relance": "Moi une petite gêne et je m'arrête aussitôt, trouillard. C'est quoi le réflexe qui vous permet de courir avec sans que ça empire ?"
      },
      {
        "accroche": "Vous portez des chaussettes de compression, c'est le détail des gens qui prennent la récup au sérieux — ça change vraiment quelque chose ou c'est surtout dans la tête ?",
        "relance": "Moi je cours en chaussettes de tennis dépareillées, autant vous dire mon niveau. C'est quoi l'équipement de récup qui vaut vraiment l'investissement selon vous ?"
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
      },
      {
        "accroche": "Le sol est encore couvert de rosée, on est clairement parmi les premiers dehors — c'est ce que vous cherchez, ce parc avant que tout le monde débarque ?",
        "relance": "Moi je n'arrive jamais à sortir avant que ça grouille de monde. Comment on prend goût à ce parc encore désert du petit matin ?"
      },
      {
        "accroche": "Il y a cette lumière un peu dorée à cette heure qui rend même l'effort agréable — c'est pour ça que vous courez le matin plutôt que le soir ?",
        "relance": "Moi je repousse toujours ma sortie au soir et je finis par annuler. C'est vraiment mieux le matin ou c'est juste une question d'organisation ?"
      },
      {
        "accroche": "Il y a ces agrès en bois un peu plus loin que personne n'utilise jamais — vous finissez votre sortie par un peu de renfo là-dessus ou vous zappez complètement ?",
        "relance": "Moi je passe devant tous les matins sans jamais oser m'y accrocher. Ça vaut le coup de compléter la course avec ce genre de trucs ou c'est gadget ?"
      },
      {
        "accroche": "Cette boucle autour du plan d'eau, elle doit faire un compte rond bien pratique pour se repérer — vous en enchaînez combien de tours en général le matin ?",
        "relance": "Moi j'abandonne dès que je perds le compte, ça vous dit tout. C'est quoi votre astuce pour tenir la distance sans regarder la montre toutes les deux minutes ?"
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
      },
      {
        "accroche": "Il y a un truc addictif dans cette sensation juste après l'effort, ce calme un peu euphorique — c'est ça qui vous fait revenir chaque matin plus que la performance ?",
        "relance": "Moi les rares fois où je cours, c'est cet après que je cherche, pas les kilomètres. Vous courez pour cette sensation ou c'est devenu une vraie discipline chiffrée ?"
      },
      {
        "accroche": "On dirait que courir le matin c'est autant se prouver un truc à soi-même que se dépenser — vous ressentez cette petite fierté de l'avoir fait avant les autres ?",
        "relance": "Moi le simple fait d'être sorti du lit me suffit comme victoire. C'est ce dépassement qui vous accroche ou vous ne vous posez même plus la question ?"
      },
      {
        "accroche": "Il y a un truc rassurant à se dire qu'on entretient la machine tant qu'on peut encore — vous courez un peu pour vieillir en forme aussi, au fond ?",
        "relance": "Moi je repousse toujours au lundi prochain cette fameuse remise en forme. C'est cette idée de tenir la distance sur des années qui vous motive ou juste le plaisir du moment ?"
      },
      {
        "accroche": "Reprendre après une coupure c'est presque plus dur que de continuer, il faut ravaler son orgueil sur les temps qu'on faisait avant — vous l'avez vécu comment, ce retour ?",
        "relance": "Moi je me décourage rien qu'en repensant à ce que j'arrivais à faire il y a deux ans. C'est quoi qui vous a fait remettre les baskets malgré cette frustration ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre montre de sport a l'air de pouvoir faire une thèse sur mes performances — vous analysez vraiment tout le monde ou c'est automatique ?",
        "relance": "Moi j'ai pas envie de savoir ce que ça donnerait sur moi. Vous arrivez à désactiver le mode coach ou vous voyez toujours les défauts ?"
      },
      {
        "accroche": "Vous balayez les lignes d'eau du regard sans jamais vraiment vous arrêter sur personne — c'est épuisant de rester aussi vigilant des heures ?",
        "relance": "Moi je décrocherais au bout de dix minutes. Comment on garde cette attention sans jamais couper, surtout quand c'est calme comme là ?"
      },
      {
        "accroche": "Vous avez le sifflet à portée de bouche en permanence sans jamais vous en servir — c'est plus dissuasif qu'autre chose, ce truc, non ?",
        "relance": "Moi je stresserais à devoir surveiller autant de monde d'un coup. C'est quoi le genre de comportement qui vous fait vraiment lever le sifflet ?"
      },
      {
        "accroche": "Vous restez planté au bord des heures sans jamais vous asseoir — le corps s'habitue à cette immobilité ou c'est une discipline en soi ?",
        "relance": "Moi je ne tiens pas dix minutes debout sans gigoter. Comment vous faites pour rester aussi statique et attentif à la fois si longtemps ?"
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
      },
      {
        "accroche": "L'eau est encore parfaitement lisse, personne n'a troublé la surface — c'est le moment que les puristes viennent chercher, ce bassin intact ?",
        "relance": "Moi j'ai toujours un peu peur de casser ce calme en plongeant. C'est quoi le créneau où l'eau est la plus agréable pour vraiment nager ?"
      },
      {
        "accroche": "Ça sent déjà bon le chlore du grand nettoyage, on sent que la piscine vient d'ouvrir — vous êtes là avant même les premiers nageurs ?",
        "relance": "Moi cette odeur me ramène direct à l'école, c'est marrant. C'est quoi votre rituel avant que le premier nageur ne saute à l'eau ?"
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
      },
      {
        "accroche": "C'est un drôle de poste au fond, entouré de monde toute la journée mais un peu seul dans votre bulle de vigilance — vous le vivez comment, cette solitude en pleine foule ?",
        "relance": "Moi je confonds souvent être entouré et ne pas être seul. Vous, ce rôle un peu à part, ça vous pèse ou vous y trouvez votre compte ?"
      },
      {
        "accroche": "Il y a un truc avec l'eau, ça oblige à une régularité que peu de sports demandent, on ne triche pas avec une longueur — vous voyez qui va tenir rien qu'à leur façon d'aborder le bassin ?",
        "relance": "Moi j'abandonne toujours au bout de trois séances, comme par hasard. C'est quoi qui différencie ceux qui s'accrochent de ceux qui lâchent, selon vous ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez les yeux grands ouverts à cette heure-là — vous êtes du matin naturellement ou le four finit par vous conditionner ?",
        "relance": "Moi à 7h je suis inutilisable. C'est quoi l'heure à laquelle vous vous levez pour que le pain soit là à 6h ?"
      },
      {
        "accroche": "Vous arrangez les viennoiseries au millimètre dans la vitrine — c'est vous qui avez l'œil ou c'est la règle de la maison ?",
        "relance": "Moi je casse tout ce que je range, c'est un don. Ça compte vraiment tant que ça, la façon dont c'est présenté, pour donner envie aux gens ?"
      },
      {
        "accroche": "Vous avez encore un peu de farine sur les avant-bras, vous sortez tout juste du fournil — c'est vous qui êtes derrière tout ce qui est en vitrine ce matin ?",
        "relance": "Moi le peu que je cuisine finit brûlé, alors le pain c'est de la magie pour moi. C'est quoi le produit du jour dont vous êtes le plus fier quand il sort du four ?"
      },
      {
        "accroche": "Vous pliez le sac et rendez la monnaie en un seul mouvement, sans même y penser — c'est le genre de cadence qu'on prend à force de matins comme ça ?",
        "relance": "Moi je m'emmêle avec la monnaie dès qu'il y a du monde derrière. C'est quoi le coup de feu de la matinée où tout doit aller vite comme ça ?"
      },
      {
        "accroche": "Vous avez déjà une trace de chocolat sur le tablier, ça sent la pâtisserie en cours derrière — vous faites le salé et le sucré ou chacun son poste ici ?",
        "relance": "Moi je rate même les gâteaux en sachet, c'est dire mon talent. C'est quoi le truc le plus délicat à réussir dans tout ce que vous sortez le matin ?"
      },
      {
        "accroche": "Vous avez les mains marquées par le four, on voit tout de suite le métier — on finit par s'y faire à cette chaleur ou vous vous brûlez toujours un peu ?",
        "relance": "Moi je me brûle en sortant une pizza surgelée, alors votre four me terrifie. C'est quoi le geste qu'on apprend à force pour ne plus se cramer ?"
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
      },
      {
        "accroche": "Il y a déjà une petite file qui se forme derrière moi, c'est l'heure de pointe des baguettes — ça déboule toujours pile à ce moment le matin ?",
        "relance": "Moi j'essaie de venir avant la cohue mais je tombe toujours dedans. C'est quoi le meilleur créneau pour avoir le pain encore tiède et la paix ?"
      },
      {
        "accroche": "La baguette que vous me tendez est encore tiède, c'est presque un luxe à cette heure — la fournée vient juste de sortir ou vous enchaînez toute la matinée ?",
        "relance": "Moi le pain chaud c'est mon seul vrai bonheur simple de la journée. Vous enchaînez les fournées jusqu'à quelle heure pour qu'il y en ait toujours de frais ?"
      },
      {
        "accroche": "Vous avez marqué une fougasse aux olives sur l'ardoise ce matin, ça change de d'habitude — c'est vous qui décidez des petites nouveautés du jour ?",
        "relance": "Moi je prends toujours la même baguette par pur réflexe. C'est quoi la fournée spéciale dont vous êtes le plus fier quand vous la mettez à l'ardoise ?"
      },
      {
        "accroche": "C'est encore calme là, juste la radio en fond avant que ça débarque — c'est un peu votre moment préféré de la journée, ce petit creux du matin ?",
        "relance": "Moi j'adorerais ces cinq minutes de calme avant le rush, dans n'importe quel boulot. C'est quoi le moment de la matinée où au contraire ça part complètement en cavalcade ?"
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
      },
      {
        "accroche": "C'est fou comme une boulangerie garde ce truc intact, ce petit plaisir quotidien auquel presque personne ne renonce — vous tenez un des derniers rituels sacrés des gens, non ?",
        "relance": "Moi je zappe le sport mais jamais mon pain du matin, c'est dire. Vous croyez que c'est le goût ou l'habitude qui ramène les gens tous les jours ?"
      },
      {
        "accroche": "Vous connaissez sûrement le quartier mieux que personne, à voir défiler tout le monde dès l'aube — vous sentez l'humeur du coin rien qu'à la tête des clients du matin ?",
        "relance": "Moi je passe vous voir avant même de dire bonjour à mes collègues, c'est vous dire. Vous êtes un peu le thermomètre du quartier, non, à voir passer tout le monde ?"
      },
      {
        "accroche": "Faire un truc de ses mains que tout le quartier attend chaque matin, il n'y en a plus tant que ça — c'est ça qui vous fait tenir le rythme des levers à quatre heures ?",
        "relance": "Moi j'ai déjà du mal à me lever pour un boulot que je choisis pas. C'est quoi qui vous accroche vraiment à ce métier au point d'accepter ces horaires de dingue ?"
      },
      {
        "accroche": "On perd des boulangeries un peu partout et pourtant les gens y tiennent comme à rien d'autre — vous le sentez, ce côté un peu résistant de votre métier ?",
        "relance": "Moi je serais le premier à râler si la mienne fermait, sans jamais rien faire pour. Vous croyez que c'est encore un métier d'avenir ou vous vous faites du souci ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez la façon de poser le stylo sur le bureau de quelqu'un qui a fait ça dix mille fois — c'est un tic ou une technique pour mettre les gens à l'aise ?",
        "relance": "Moi dès que j'entre dans une banque j'ai l'impression d'être audité. Comment vous faites pour que les gens se sentent pas jugés ?"
      },
      {
        "accroche": "Votre bureau est rangé au carré, pas un papier qui dépasse — c'est pour rassurer les clients ou c'est vous qui avez besoin de cet ordre ?",
        "relance": "Moi mon bureau ressemble à une scène de crime. Un espace nickel, ça change vraiment la confiance des gens qui s'assoient en face ?"
      },
      {
        "accroche": "Vous avez deux écrans remplis de chiffres et vous n'avez pas cligné une fois en me parlant — vous arrivez vraiment à suivre les deux en même temps ?",
        "relance": "Moi une colonne de chiffres et je décroche direct. Comment vous faites pour rester dans la conversation sans vous noyer dans vos écrans ?"
      },
      {
        "accroche": "Vous avez une poignée de main posée, ni molle ni écrasante, la parfaite mesure — c'est un truc que ce métier vous apprend à calibrer ?",
        "relance": "Moi je serre trop fort quand je suis mal à l'aise, ça se sent. C'est important pour vous, cette première seconde où le client se fait un avis ?"
      },
      {
        "accroche": "Vous avez une voix posée qui doit désamorcer pas mal de tensions en face de vous — c'est naturel chez vous ou vous avez appris à parler comme ça aux gens stressés ?",
        "relance": "Moi je monte dans les aigus dès que je parle argent, ça trahit tout. C'est un vrai outil de votre métier, cette façon de rassurer rien qu'au ton ?"
      },
      {
        "accroche": "Vous avez glissé une petite plante au milieu des dossiers, ça humanise un peu le bureau — c'est votre façon de rendre l'endroit moins froid pour ceux qui s'assoient là ?",
        "relance": "Moi le décor d'une banque me stresse avant même qu'on ait parlé. Ça compte vraiment, ces petits détails, pour que les gens se lâchent en face de vous ?"
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
      },
      {
        "accroche": "Il y a ces brochures sur les crédits partout dans la salle, ça met un peu la pression avant même de vous voir — c'est voulu ou j'interprète trop ?",
        "relance": "Moi je lis ces trucs et je repars plus inquiet qu'en arrivant. C'est quoi la vraie question que les gens devraient poser au lieu de flipper sur les dépliants ?"
      },
      {
        "accroche": "Ce fauteuil en face de vous, on s'y assoit toujours un peu raide, comme à un examen — vous faites quelque chose pour désamorcer ça dès le début ?",
        "relance": "Moi j'arrive avec mes chiffres en tête comme si j'allais me faire gronder. C'est quoi votre façon de faire tomber cette tension en une phrase ?"
      },
      {
        "accroche": "On patiente dans ce hall un peu aseptisé avant de vous voir, ça met tout de suite dans l'ambiance chiffres — vous, ça vous fait quoi de bosser dans un décor pareil toute la journée ?",
        "relance": "Moi rien que la moquette grise me met la pression. Vous finissez par ne plus le voir, cet environnement, ou ça déteint un peu sur l'humeur ?"
      },
      {
        "accroche": "On a pile une demi-heure calée pour parler de toute une vie financière, c'est un peu court quand on y pense — vous arrivez à créer un vrai lien dans ce format minuté ?",
        "relance": "Moi il me faut déjà dix minutes juste pour oser dire ce qui m'inquiète. C'est quoi votre technique pour aller à l'essentiel sans que ça fasse expédié ?"
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
      },
      {
        "accroche": "Au fond, derrière chaque dossier il y a un projet de vie, une maison, un enfant, une peur de l'avenir — vous ne faites pas que des chiffres, vous touchez à leurs rêves, non ?",
        "relance": "Moi je vois l'argent comme une contrainte, jamais comme un projet. Vous arrivez à faire voir aux gens que c'est un moyen et pas une fin ?"
      },
      {
        "accroche": "On nous apprend tout à l'école sauf à gérer notre argent, c'est fou quand on y pense — vous devez rattraper cette lacune chez pas mal de gens en face de vous, non ?",
        "relance": "Moi je gère mes comptes complètement à l'instinct, ça fait peur. C'est quoi la base que tout le monde devrait savoir et que presque personne ne maîtrise ?"
      },
      {
        "accroche": "Avec les applis qui font tout maintenant, les gens viennent surtout vous voir quand ça se complique — vous êtes devenu le recours des moments difficiles plus que le conseiller du quotidien ?",
        "relance": "Moi je gère tout sur mon téléphone jusqu'à ce que ça déraille, et là je panique. Ça a changé votre métier, ce virage, ou ça l'a rendu plus intéressant au fond ?"
      },
      {
        "accroche": "On dirait qu'il y a ceux qui mettent tout de côté par peur et ceux qui claquent tout par principe — vous voyez défiler ces deux camps en face de vous ?",
        "relance": "Moi je suis clairement dans l'équipe qui dépense d'abord et réfléchit après. C'est quoi le juste milieu que vous essayez de faire trouver aux gens entre les deux ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez un setup qui donne envie — c'est le bureau de quelqu'un qui pense à son dos ou à sa productivité en premier ?",
        "relance": "Moi j'ai toujours une chaise pourrie et un câble qui pend. C'est quoi l'investissement qui vous a le plus changé la vie au quotidien ?"
      },
      {
        "accroche": "Votre clavier fait un bruit qui donne l'impression que vous écrivez un roman — c'est un truc de passionné ou juste pour le plaisir des touches ?",
        "relance": "Moi je tape sur le clavier tout mou d'origine de mon portable. Ça change vraiment quelque chose au confort, ces claviers-là, ou c'est du gadget ?"
      },
      {
        "accroche": "Vous avez un casque qui a l'air de vous isoler dans une autre dimension — c'est indispensable pour bosser ici ou vous fuyez surtout mon regard ?",
        "relance": "Moi je n'arrive à me concentrer nulle part, casque ou pas. C'est vraiment ça qui fait la différence pour vous couper du bruit, ou c'est psychologique ?"
      },
      {
        "accroche": "Vous avez ramené votre propre mug et une petite plante sur le bureau — vous venez tellement souvent que vous avez fini par vous installer pour de bon ?",
        "relance": "Moi je débarque avec juste mon portable, comme de passage. C'est en apprivoisant les lieux comme ça qu'on s'y sent enfin bien pour bosser ?"
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
      },
      {
        "accroche": "La machine à café est devenue le seul point de rassemblement de l'étage, on s'y croise tous — c'est là que les langues se délient dans ce genre d'endroit ?",
        "relance": "Moi c'est ma seule vraie pause sociale de la journée, cette machine. Vous avez fini par connaître du monde ici ou chacun reste dans son coin ?"
      },
      {
        "accroche": "Il y a cette lumière de fin d'après-midi qui tape sur les bureaux et donne envie de tout ranger — vous tenez jusqu'au bout ou vous pliez bagage à cette heure ?",
        "relance": "Moi dès que la lumière baisse mon cerveau débranche tout seul. Vous avez un horaire de fin fixe ou vous partez au feeling de la fatigue ?"
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
      },
      {
        "accroche": "C'est marrant qu'on paie pour venir travailler entourés d'inconnus alors qu'on pourrait rester chez soi — au fond on cherche juste à ne pas être seuls, non ?",
        "relance": "Moi je viens surtout pour me forcer à sortir du pyjama, avouons-le. Vous, c'est le cadre qui vous manque à la maison ou juste la présence des autres ?"
      },
      {
        "accroche": "La frontière entre le boulot et la maison est devenue tellement floue avec le télétravail — venir ici, c'est votre façon de reposer une vraie limite ?",
        "relance": "Moi je répondais aux mails depuis mon lit, il fallait que ça s'arrête. Vous avez trouvé le truc pour vraiment décrocher le soir ou c'est le combat permanent ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez une façon d'arriver dans la salle qui fait baisser la pression de tout le monde — c'est travaillé ou c'est vous ?",
        "relance": "Moi j'arrive encore stressé de ma journée. Comment on passe du mode boulot au mode présent sans longue transition ?"
      },
      {
        "accroche": "Vous avez une voix qui pose le calme à elle seule — c'est un outil que vous travaillez autant que les postures ?",
        "relance": "Moi ma voix monte dès que je stresse, l'inverse total. La voix ça compte vraiment pour faire lâcher prise aux gens ?"
      },
      {
        "accroche": "Vous avez un maintien tellement droit et détendu à la fois, on dirait que la posture vient toute seule chez vous — c'est des années de pratique qui font ça ?",
        "relance": "Moi je m'affale sur ma chaise dès que je m'assois. Ça finit par imprégner tout le corps, cette pratique, même en dehors du tapis ?"
      },
      {
        "accroche": "Vous accueillez chaque personne qui entre avec un vrai regard, sans jamais presser — c'est déjà une partie du cours, cette attention, non ?",
        "relance": "Moi j'arrive souvent la tête ailleurs, encore dans ma journée. C'est quoi le premier signe qui vous dit qu'une personne n'a pas encore lâché son stress du dehors ?"
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
      },
      {
        "accroche": "Les tapis sont déjà alignés au carré, il y a un vrai soin dans la préparation de la salle — c'est important pour vous que l'espace soit prêt avant qu'on arrive ?",
        "relance": "Moi j'arriverais et je poserais mon tapis n'importe comment. Ça compte tant que ça, l'ordre de la salle, pour aider les gens à se poser ?"
      },
      {
        "accroche": "Il y a cette petite musique et cette odeur qui flottent déjà quand on entre, ça désamorce direct — vous soignez ces détails pour préparer le terrain avant le premier mouvement ?",
        "relance": "Moi je sens la pression tomber rien qu'en franchissant la porte, c'est fou. C'est quoi le premier élément que vous mettez en place pour créer cette bulle du soir ?"
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
      },
      {
        "accroche": "Le soir, prendre une heure pour son corps au lieu de s'écrouler devant un écran, c'est presque à contre-courant de tout — vous voyez beaucoup de gens qui luttent pour se l'autoriser ?",
        "relance": "Moi je culpabilise à chaque fois que je prends du temps pour moi, c'est absurde. Comment vous aidez les gens à voir ça comme un besoin et pas un luxe ?"
      },
      {
        "accroche": "On passe la journée à ignorer complètement notre corps, et là d'un coup on lui redonne toute la place — c'est un peu des retrouvailles avec soi-même, ces cours, non ?",
        "relance": "Moi je réalise à quel point je suis déconnecté de mon corps seulement une fois sur le tapis. Vous croyez qu'on peut vraiment réapprendre à s'écouter ou c'est un travail sans fin ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez le regard de quelqu'un qui sait exactement quel fromage convient à quelle personne en trente secondes — c'est de l'instinct ou de l'expérience ?",
        "relance": "Moi j'arrive toujours en sachant pas quoi prendre. C'est quoi le signe qui vous dit que quelqu'un va aimer les choses corsées ?"
      },
      {
        "accroche": "Vos mains enveloppent chaque morceau avec un soin qui ressemble presque à un rituel — vous faites ça au feeling ou il y a une vraie méthode derrière ?",
        "relance": "Moi je repars toujours avec mon fromage écrasé au fond du sac. C'est quoi le geste tout bête qui change tout pour bien le conserver ?"
      },
      {
        "accroche": "Vous coupez chaque tranche à l'oeil sans jamais repasser la balance, c'est un coup de main qui se travaille des années ça ?",
        "relance": "Moi je serais infoutu de deviner cent grammes à la louche. C'est quoi le fromage qui pardonne rien si on le coupe mal ?"
      },
      {
        "accroche": "Vous avez ce petit tablier plein de traces qui raconte toute une journée derrière le comptoir, vous êtes du matin très tôt vous ?",
        "relance": "Moi le matin je suis à peine réveillé alors que vous êtes déjà à fond. C'est quoi le meilleur moment pour goûter un fromage dans la journée ?"
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
      },
      {
        "accroche": "On sent le froid de la cave dès qu'on passe la porte, ça sent le vrai travail ici, c'est vous qui affinez tout sur place ?",
        "relance": "Moi je pensais que tout arrivait déjà prêt en boutique. C'est quoi le fromage qui demande le plus de patience à affiner ?"
      },
      {
        "accroche": "Il y a un petit écriteau à la craie avec un nom que j'ai jamais vu, ça attise ma curiosité direct, c'est une trouvaille récente ?",
        "relance": "Moi je reste toujours sur les grands classiques par peur de me tromper. C'est quoi le fromage méconnu que vous rêveriez de faire découvrir à tout le monde ?"
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
      },
      {
        "accroche": "Avec ce temps qui se radoucit, j'imagine que les fromages de chèvre commencent à revenir en force, c'est le début de la belle saison pour vous ?",
        "relance": "Moi je mange un peu la même chose toute l'année sans réfléchir. C'est quoi le fromage qui a vraiment un pic dans l'année à ne pas rater ?"
      },
      {
        "accroche": "On dirait qu'en ce moment les gens veulent savoir d'où vient ce qu'ils mangent, connaître le producteur, l'histoire, vous le sentez dans les questions qu'on vous pose ?",
        "relance": "Moi j'ai commencé à m'y intéresser assez tard. C'est quoi la question que les clients vous posent le plus souvent aujourd'hui par rapport à avant ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous regardez les gens regarder les œuvres — c'est plus intéressant que les tableaux eux-mêmes parfois ?",
        "relance": "Moi j'ai du mal à faire semblant de comprendre ce que je vois. C'est quoi la réaction d'un visiteur qui vous dit que quelque chose a vraiment marché ?"
      },
      {
        "accroche": "Vous vous tenez toujours près de cette œuvre-là, comme si c'était votre préférée — je me trompe ?",
        "relance": "Moi je saurais pas dire pourquoi une toile m'attire plus qu'une autre. C'est quoi qui fait que vous, vous vous attachez à une pièce en particulier ?"
      },
      {
        "accroche": "Vous avez rangé les cartels tout petits, presque effacés, comme si vous vouliez qu'on regarde d'abord, c'est un parti pris ça ?",
        "relance": "Moi j'ai toujours le réflexe de lire l'étiquette avant l'oeuvre. C'est quoi qui vous gêne le plus quand un visiteur fait ça ?"
      },
      {
        "accroche": "Vous avez laissé un grand vide autour de cette sculpture alors que le reste est plus serré, c'est réfléchi comme accrochage j'imagine ?",
        "relance": "Moi je n'aurais jamais deviné qu'un espace vide pouvait vouloir dire quelque chose. C'est quoi qui se joue dans la façon de placer une pièce dans la salle ?"
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
      },
      {
        "accroche": "La lumière tombe pile sur les toiles à cette heure, on dirait que tout a été calé pour ce moment précis, c'est le cas ?",
        "relance": "Je ne pensais pas que l'heure de la visite changeait autant les choses. C'est quoi le meilleur moment de la journée pour découvrir cette expo selon vous ?"
      },
      {
        "accroche": "Il n'y a que nous dans la salle et ça donne une intimité un peu rare avec les oeuvres, c'est ça que vous préférez dans les jours creux ?",
        "relance": "Moi j'ose davantage m'approcher quand il n'y a personne. C'est quoi que vous conseillez à quelqu'un qui a peur de mal regarder une oeuvre ?"
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
      },
      {
        "accroche": "On dirait qu'aujourd'hui les gens veulent posséder une image plutôt que la vivre, entre les écrans et les photos, ça change votre métier ça non ?",
        "relance": "Moi le premier je photographie tout sans jamais vraiment regarder. C'est quoi que ça enlève, à votre avis, de tout vouloir capturer comme ça ?"
      },
      {
        "accroche": "Il y a quelque chose de rassurant dans une galerie, ça résiste au temps qui s'accélère partout ailleurs, vous le voyez comme un refuge vous aussi ?",
        "relance": "Moi je viens ici surtout pour ralentir cinq minutes. C'est quoi selon vous ce qui pousse quelqu'un à franchir la porte d'une galerie aujourd'hui ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous tenez votre verre avec le détachement de quelqu'un qui connaît du monde ici — vous êtes du côté de qui ?",
        "relance": "Moi je suis venu par un ami d'un ami, je connais personne. C'est quoi votre lien avec l'hôte ?"
      },
      {
        "accroche": "Vous avez pris exactement les deux mêmes trucs que moi sur le buffet, on a clairement le même radar — bon goût ou pure flemme ?",
        "relance": "Moi j'ai un talent pour repérer la seule bonne chose sur une table. Vous connaissez du monde ici ou vous êtes venu un peu à l'aveugle comme moi ?"
      },
      {
        "accroche": "Vous saluez la moitié de la salle d'un signe de tête, vous êtes clairement dans votre élément, c'est vous qui avez amené tout ce monde ?",
        "relance": "Moi je suis le seul étranger de la soirée on dirait. C'est quoi qui vous relie à toute cette bande ?"
      },
      {
        "accroche": "Vous avez zappé le champagne pour aller direct au truc marron au fond du buffet, respect, on a le même instinct, verdict ?",
        "relance": "Moi je vise toujours le plat que personne n'ose tester. Vous êtes du genre à tout goûter en soirée ou vous jouez la sécurité ?"
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
      },
      {
        "accroche": "C'est rare une soirée où on sent que les gens sont vraiment venus se parler et pas juste se montrer, vous trouvez pas ?",
        "relance": "Moi j'ai souvent l'impression de faire tapisserie dans ces événements. Vous, vous avez une méthode pour vous sentir à l'aise tout de suite ?"
      },
      {
        "accroche": "Il y a eu ce petit flottement quand les lumières ont baissé et là tout le monde s'est lâché d'un coup, vous les repérez ces bascules dans une soirée vous ?",
        "relance": "Moi je guette toujours le moment où l'ambiance décolle vraiment. Vous êtes plutôt du genre à lancer la machine ou à suivre le mouvement ?"
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
      },
      {
        "accroche": "Sortir un soir de semaine c'est presque un acte de rébellion aujourd'hui, tout le monde reste chez soi, vous vous êtes forcé ou ça venait tout seul ?",
        "relance": "Moi j'ai failli annuler dix fois avant de venir. C'est quoi qui vous fait dire oui quand la flemme vous tente de rester au chaud ?"
      },
      {
        "accroche": "C'est vertigineux de penser qu'une seule discussion ce soir peut changer une rencontre en amitié de dix ans, vous y croyez à ces bascules du hasard ?",
        "relance": "Moi presque tous mes potes viennent d'un pur coup de dés comme ça. C'est quoi la rencontre la plus folle que le hasard vous ait offerte ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez le badge d'un service que je croise peu — vous êtes sur quel étage ?",
        "relance": "Moi je reste souvent dans ma bulle au quatrième, j'ai l'impression de pas connaître la moitié du bâtiment. Ça fait longtemps que vous êtes là ?"
      },
      {
        "accroche": "Vous serrez ce gobelet comme si c'était votre survie de l'après-midi — c'est le troisième café ou vous tenez encore ?",
        "relance": "Moi à cette heure-là je carbure au café, sinon je décroche complètement. Vous êtes plutôt du matin ou vous montez en puissance l'après-midi ?"
      },
      {
        "accroche": "Vous avez une pile de dossiers sous le bras qui a l'air de peser une tonne, vous filez en réunion ou vous les rapatriez pour souffler ?",
        "relance": "Moi je transporte toujours plus de paperasse que nécessaire, va savoir pourquoi. Vous êtes plutôt tout numérique ou encore attaché au papier ?"
      },
      {
        "accroche": "Vous avez la carte d'accès qui pendouille à un cordon d'un autre service que le mien, on doit jamais se croiser d'habitude, vous êtes à quel étage ?",
        "relance": "Moi je reste scotché au quatrième toute la journée. Ça fait longtemps que vous êtes dans la boîte ?"
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
      },
      {
        "accroche": "On se retrouve tous les deux à guetter le petit chiffre des étages sans rien dire, le grand moment de solitude de l'ascenseur, vous montez haut ?",
        "relance": "Moi je sais jamais quoi faire de mes mains dans ces cabines. Vous bossez ici ou vous venez pour un rendez-vous ?"
      },
      {
        "accroche": "Il fait une chaleur pas possible dans cet ascenseur cet après-midi, c'est toujours comme ça ou c'est la clim qui a lâché aujourd'hui ?",
        "relance": "Moi je fonds sur place dès qu'il y a trois personnes dedans. Vous passez souvent par ici ou c'est exceptionnel ?"
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
      },
      {
        "accroche": "C'est le trou d'air du milieu d'après-midi, ce moment où tout le monde traîne un peu la patte, vous le sentez aussi passer ce creux ?",
        "relance": "Moi à cette heure-là je carbure au café pour tenir. Vous êtes plutôt du matin ou vous remontez la pente en fin de journée ?"
      },
      {
        "accroche": "On dirait que tout le monde attend déjà le week-end alors qu'on est même pas jeudi, la semaine paraît longue en ce moment vous trouvez pas ?",
        "relance": "Moi j'ai l'impression que les journées s'étirent en été. C'est quoi qui vous aide à garder le rythme jusqu'au bout de la semaine ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous scannez les colis avec la précision d'un chirurgien malgré le rythme — c'est de la concentration pure ou de l'automatisme complet ?",
        "relance": "Moi après une heure je ferais des erreurs à la chaîne. C'est quoi le moment où l'automatisme prend vraiment le dessus ?"
      },
      {
        "accroche": "Vous avez toute une pile de colis qui vous attend derrière et vous gardez le sourire — c'est du sang-froid ou vous êtes juste blindé ?",
        "relance": "Moi rien qu'à voir cette montagne je serais découragé. C'est quoi qui vous aide à tenir quand ça s'accumule comme ça ?"
      },
      {
        "accroche": "Vous gérez le comptoir et le téléphone qui sonne en même temps sans jamais lâcher le sourire, c'est du sang-froid ou une habitude de dingue ?",
        "relance": "Moi je perds mes moyens dès qu'on me parle sur deux fronts. C'est quoi le truc qui vous permet de rester zen quand tout arrive d'un coup ?"
      },
      {
        "accroche": "Vous avez déjà les mains pleines d'encre à peine la matinée commencée, ça tamponne à toute vitesse dans le coin, c'est ça le vrai rythme ?",
        "relance": "Moi je pensais que le tampon c'était fini depuis longtemps. C'est quoi la tâche qui vous prend le plus de temps dans une journée ?"
      },
      {
        "accroche": "Vos doigts vont plus vite que l'écran on dirait, vous tapez les codes sans même les regarder — c'est le genre de vitesse qu'on prend au bout de combien d'années ?",
        "relance": "Moi je cherche encore mes touches sur un clavier que je connais par cœur. C'est devenu un automatisme total ou vous restez concentré à fond quand même ?"
      },
      {
        "accroche": "Vous soulevez ces colis énormes sans broncher, c'est presque du portage à la chaîne — on finit par se muscler à ce métier ou vous avez des trucs pour épargner le dos ?",
        "relance": "Moi je me bloque le dos en portant un pack d'eau, alors chapeau. C'est quoi la partie la plus physique de la journée que les gens n'imaginent même pas ?"
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
      },
      {
        "accroche": "Il n'y a presque personne à cette heure, c'est le calme avant la tempête ou le matin c'est toujours tranquille ici ?",
        "relance": "Moi j'ai visé tôt exprès pour éviter la queue. C'est quoi le pire créneau à éviter dans la journée ?"
      },
      {
        "accroche": "Vous avez déjà tout le stock de colis derrière qui déborde des étagères et il est à peine neuf heures, la journée s'annonce chargée on dirait ?",
        "relance": "Moi je culpabilise presque de vous rajouter un passage. C'est quoi le jour de la semaine où ça vous submerge le plus ?"
      },
      {
        "accroche": "Il y a cette borne à tickets maintenant, on prend un numéro comme chez le boucher — ça a vraiment fluidifié la file ou les gens râlent pareil qu'avant ?",
        "relance": "Moi je trouve ça pratique mais j'ai l'impression que ça énerve les habitués. Ça vous a changé la vie au guichet, ce système, ou c'est du pareil au même ?"
      },
      {
        "accroche": "On vient ici pour dix trucs différents, du timbre au retrait d'argent, ça doit compliquer votre matinée — c'est quoi la demande qui vous prend le plus de temps par personne ?",
        "relance": "Moi j'arrive toujours en me trompant de file, forcément. Vous préférez cette variété ou vous rêveriez d'un guichet qui ne fait qu'une seule chose ?"
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
      },
      {
        "accroche": "Avec l'été qui arrive, j'imagine que c'est la valse des changements d'adresse et des réexpéditions vacances, ça vous en fait du travail ça non ?",
        "relance": "Moi je pense jamais à prévenir pour mon courrier quand je pars. C'est quoi l'erreur que les gens font tout le temps avant de partir en vacances ?"
      },
      {
        "accroche": "On reçoit tous nos colis à domicile maintenant, du coup venir au bureau de poste c'est presque devenu un truc de nostalgique, vous le vivez comment ce virage ?",
        "relance": "Moi je mets rarement les pieds ici, je fais tout en ligne. C'est quoi qui a le plus changé dans les gens que vous voyez passer au guichet ?"
      },
      {
        "accroche": "Pour pas mal de gens du quartier, surtout les plus âgés, passer ici c'est presque la seule sortie et le seul échange de la journée — vous le ressentez, ce rôle-là ?",
        "relance": "Moi je vois ma voisine venir chaque jour juste pour parler à quelqu'un, ça m'a touché. Vous vous sentez un peu plus qu'un guichet pour certains habitués ?"
      },
      {
        "accroche": "On veut tout livré le lendemain maintenant, la patience a complètement disparu — vous sentez que les gens attendent de vous une vitesse un peu folle ?",
        "relance": "Moi le premier je m'agace si mon colis traîne d'un jour, j'ai honte. C'est quoi le truc que les gens ne réalisent pas sur le temps que ça prend vraiment ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous vérifiez votre téléphone avec la fréquence de quelqu'un qui attend une greffe — c'est le vol ou autre chose ?",
        "relance": "Moi j'ai eu un retard de quatre heures une fois, j'ai failli craquer. Vous, vous êtes en correspondance serrée ou c'est juste l'angoisse naturelle ?"
      },
      {
        "accroche": "Vous serrez votre carte d'embarquement comme si elle allait s'envoler — c'est un vol important ou juste le stress de partir ?",
        "relance": "Moi avant un vol je relis mon billet dix fois pour rien. Vous voyagez pour le boulot ou c'est plutôt le grand départ ?"
      },
      {
        "accroche": "Vous tapotez du pied depuis dix minutes sans même vous en rendre compte, c'est la correspondance qui vous stresse ou juste l'attente ?",
        "relance": "Moi je fais craquer mes doigts quand je poireaute, une vraie plaie. Vous, vous êtes plutôt du genre à angoisser avant chaque vol ?"
      },
      {
        "accroche": "Vous avez votre valise à portée de main, prête à bondir dès que ça bouge, vous avez peur de rater l'embarquement ou c'est juste par réflexe ?",
        "relance": "Moi je suis toujours le premier debout dans la file pour rien du tout. Vous voyagez souvent ou c'est un vol un peu spécial celui-là ?"
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
      },
      {
        "accroche": "Le panneau vient encore de repasser sur retardé, personne comprend rien, vous avez capté quelque chose sur ce qui coince vous ?",
        "relance": "Moi ce flou total me rend dingue plus que le retard lui-même. Vous avez une astuce pour tenir sans péter un câble dans ces moments-là ?"
      },
      {
        "accroche": "On est tous massés devant cette porte qui reste désespérément fermée, vous avez entendu une annonce ou c'est le silence radio pour vous aussi ?",
        "relance": "Moi je déteste ne pas savoir si je dois m'asseoir ou rester debout. Vous partez pour longtemps ou c'est juste un saut de puce ?"
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
      },
      {
        "accroche": "Une salle d'embarquement c'est un condensé de gens qui vont dans mille directions différentes et qui partagent juste ce moment suspendu, c'est fascinant vous trouvez pas ?",
        "relance": "Moi je m'invente toujours des histoires sur les gens autour. Vous, vous partez pour quoi, boulot, retrouvailles, évasion ?"
      },
      {
        "accroche": "En voyage on a beau tout planifier au millimètre, il y a toujours le grain de sable qui vient tout renverser, vous êtes plutôt à en rire ou à en pleurer vous ?",
        "relance": "Moi j'ai appris à lâcher prise à coups de galères mémorables. C'est quoi le voyage qui a le plus mal tourné et qui vous fait rire aujourd'hui ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez le regard de quelqu'un qui a une anecdote précise sur chaque pièce de la salle — laquelle vous préférez raconter ?",
        "relance": "Moi je lis les cartels sans vraiment retenir. C'est quoi le détail sur cette œuvre-là que personne ne remarque tout seul ?"
      },
      {
        "accroche": "Vous vous arrêtez toujours une seconde de plus devant cette toile-là, ça se voit que c'est une préférée — je me trompe ?",
        "relance": "Moi je passe devant sans savoir où regarder. C'est quoi l'histoire derrière celle-ci qu'on devinerait jamais tout seul ?"
      },
      {
        "accroche": "Vous avez ce petit carnet dans la main qui a l'air rempli de notes accumulées au fil des ans, c'est votre mémoire secrète sur ces oeuvres ?",
        "relance": "Moi j'oublie tout dès que je sors d'un musée. C'est quoi l'anecdote que vous gardez toujours sous le coude pour surprendre les visiteurs ?"
      },
      {
        "accroche": "Vous baissez instinctivement la voix devant certaines pièces et pas d'autres, comme si celles-là méritaient plus de respect, c'est conscient chez vous ça ?",
        "relance": "Moi je parle toujours au même volume partout sans réfléchir. C'est quoi l'oeuvre de cette salle qui vous impressionne encore vous-même ?"
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
      },
      {
        "accroche": "La lumière du début d'après-midi tape pile sur les cadres dorés, ça change tout dans l'ambiance, c'est votre créneau préféré pour guider ?",
        "relance": "Moi je viens souvent aux heures creuses sans savoir pourquoi. C'est quoi la salle que vous conseillez de garder pour la fin d'une visite ?"
      },
      {
        "accroche": "On a le musée presque pour nous à cette heure, ça donne un luxe rare de flâner sans être bousculé, vous préférez guider dans ce calme-là ?",
        "relance": "Moi je respire mieux quand il y a moins de monde autour des toiles. C'est quoi l'oeuvre qu'on rate toujours quand il y a la foule ?"
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
      },
      {
        "accroche": "Dans un musée les gens chuchotent et marchent lentement alors que dehors tout le monde court, c'est comme si le lieu imposait un autre tempo, vous le ressentez toujours ce basculement ?",
        "relance": "Moi je ressors d'ici avec la tête plus légère à chaque fois. Vous, après tant d'années, vous voyez encore ces oeuvres avec des yeux neufs ?"
      },
      {
        "accroche": "C'est fou de penser que quelqu'un a peint ça il y a des siècles sans imaginer qu'on serait là à la regarder aujourd'hui, ça vous donne encore le vertige vous ?",
        "relance": "Moi je trouve ça bouleversant ce fil invisible avec le passé. C'est quoi l'artiste dont vous auriez rêvé de croiser le regard une seule fois ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez des cartons empilés avec une précision qui dit que vous avez déjà déménagé plusieurs fois — c'est votre système ou de la chance ?",
        "relance": "Moi mon dernier déménagement c'était le chaos absolu. C'est quoi la première chose que vous installez pour que ça ressemble à un chez-soi ?"
      },
      {
        "accroche": "Vous montez cette plante avec plus de précaution que les meubles — c'est votre chouchoute celle-là ?",
        "relance": "Moi la mienne a pas survécu au déménagement, un vrai carnage. C'est quoi le premier truc que vous tenez à installer pour vous sentir chez vous ?"
      },
      {
        "accroche": "Vous avez étiqueté chaque carton avec la pièce de destination écrite dessus, c'est carré comme méthode, ça c'est l'organisation d'un pro du déménagement ?",
        "relance": "Moi mes cartons sont un mystère total une fois fermés. C'est quoi votre astuce pour pas passer une semaine à tout chercher après ?"
      },
      {
        "accroche": "Vous montez les escaliers avec un vélo sur l'épaule sans même souffler, vous êtes du genre sportif ou juste bien rôdé aux déménagements ?",
        "relance": "Moi j'aurais déjà abandonné le vélo au rez-de-chaussée. C'est quoi le premier coin que vous aménagez pour vous sentir vraiment chez vous ?"
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
      },
      {
        "accroche": "On a la même boîte aux lettres qui coince, un grand classique de l'immeuble, vous avez déjà eu droit au coup de la clé qui tourne dans le vide ?",
        "relance": "Moi j'ai mis un mois à comprendre le truc pour l'ouvrir. C'est quoi votre première impression des lieux depuis que vous êtes arrivé ?"
      },
      {
        "accroche": "On va se partager la buanderie et le local à vélos apparemment, autant faire connaissance tout de suite, vous emménagez à quel étage ?",
        "relance": "Moi je suis là depuis un moment, si jamais vous avez besoin d'un tuyau. C'est quoi qui vous a fait choisir ce quartier ?"
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
      },
      {
        "accroche": "Déménager en plein été c'est courageux avec la chaleur et tout le monde en vacances, ça a été la galère pour trouver des bras vous ?",
        "relance": "Moi j'ai toujours déménagé au pire moment, un vrai talent. C'est quoi le truc que vous cherchiez absolument et que vous avez enfin déniché ici ?"
      },
      {
        "accroche": "S'installer quelque part c'est reconstruire toute une petite géographie perso, le bon boulanger, le raccourci, le café du coin, vous en êtes où dans vos repères ?",
        "relance": "Moi il m'a fallu des mois pour adopter mes petites habitudes de quartier. C'est quoi la première adresse que vous cherchez toujours en arrivant dans un coin ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air d'être installé ici comme chez vous, avec votre setup au millimètre — vous êtes un pilier de l'endroit ou c'est juste votre organisation naturelle ?",
        "relance": "Moi je change de place tous les jours, incapable de me poser. C'est quoi votre rituel pour vous mettre en mode boulot le matin ?"
      },
      {
        "accroche": "Vous avez un casque qui a l'air de vous couper du monde entier — c'est votre bulle de concentration ça ?",
        "relance": "Moi sans musique je suis incapable de me concentrer une minute. C'est quoi votre truc pour rester dans le flow toute une matinée ?"
      },
      {
        "accroche": "Vous avez une deuxième tasse de café déjà vide à côté du clavier, vous carburez à la caféine pour attaquer ou c'est juste le plaisir du matin ?",
        "relance": "Moi sans mon café je suis inutilisable avant dix heures. C'est quoi votre rituel pour vraiment vous mettre dedans le matin ?"
      },
      {
        "accroche": "Vous avez collé un petit post-it avec ce qui ressemble à votre to-do du jour bien en évidence, c'est votre technique pour tenir le cap ça ?",
        "relance": "Moi je fais des listes que je perds aussitôt. C'est quoi votre méthode pour pas partir dans tous les sens quand on bosse en solo ?"
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
      },
      {
        "accroche": "Il y a une énergie tranquille ici ce matin, chacun dans sa bulle mais pas seul, c'est ça qui vous a fait adopter l'endroit ?",
        "relance": "Moi j'hésite encore à prendre un abonnement. C'est quoi le vrai avantage du coworking qu'on ne soupçonne pas avant d'y être ?"
      },
      {
        "accroche": "Il y a ce moment sympa vers dix heures où tout le monde se retrouve autour du café sans se connaître vraiment, vous participez à ce petit rituel vous ?",
        "relance": "Moi je viens surtout pour rompre la solitude du boulot à la maison. C'est quoi qui vous a poussé à quitter le télétravail chez vous ?"
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
      },
      {
        "accroche": "On est une génération à réinventer complètement le rapport au travail, plus de bureau fixe, plus d'horaires, vous vous y retrouvez dans ce grand chamboulement vous ?",
        "relance": "Moi je me demande parfois si on a gagné en liberté ou juste changé de cage. C'est quoi le truc que vous ne troqueriez pour rien dans cette vie de freelance ?"
      },
      {
        "accroche": "Être son propre patron c'est un rêve mais faut une discipline de fer pour pas se noyer, vous avez trouvé votre rythme de croisière vous ?",
        "relance": "Moi je passe encore du burn-out au désert selon les mois. C'est quoi le conseil que vous donneriez à quelqu'un qui hésite à se lancer ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de quelqu'un qui garde le sourire même dans la file d'attente d'une pharmacie — c'est un tempérament ou une bonne journée ?",
        "relance": "Moi l'attente ici me plombe toujours. C'est quoi votre secret pour rester de bonne humeur quand c'est un peu long ?"
      },
      {
        "accroche": "Vous avez toute une petite liste à la main, on dirait que vous avez anticipé votre passage — vous êtes du genre organisé ?",
        "relance": "Moi j'oublie toujours la moitié de ce que je venais chercher. C'est quoi votre astuce pour jamais rien oublier à la pharmacie ?"
      },
      {
        "accroche": "Vous avez l'air de connaître le pharmacien par son prénom, vous êtes un habitué fidèle du quartier vous ?",
        "relance": "Moi je change de pharmacie à chaque fois, du coup on me connaît nulle part. C'est quoi qui vous fait rester fidèle à la même adresse ?"
      },
      {
        "accroche": "Vous avez un petit sac de tisanes qui dépasse de votre panier, vous êtes plutôt remèdes de grand-mère que cachets vous ?",
        "relance": "Moi je fonce direct sur le médicament sans réfléchir. C'est quoi votre remède naturel qui marche vraiment selon vous ?"
      },
      {
        "accroche": "Vous avez sorti votre propre sac plutôt que de prendre celui du comptoir, on voit le réflexe — vous êtes du genre à faire attention à tout ça au quotidien vous ?",
        "relance": "Moi j'oublie systématiquement mon sac et je repars les bras chargés. C'est quoi le petit geste écolo que vous tenez vraiment sur la durée vous ?"
      },
      {
        "accroche": "Vous lisez la notice avant même de sortir de la pharmacie, ça c'est du sérieux — vous vérifiez toujours tout ou c'est ce médicament précis qui vous intrigue ?",
        "relance": "Moi je jette la notice sans jamais l'ouvrir, mauvaise habitude. C'est important pour vous de comprendre ce que vous prenez ou c'est juste de la prudence ?"
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
      },
      {
        "accroche": "Il fait une chaleur écrasante dehors et tout le monde débarque ici pour la crème solaire ou les moustiques, vous êtes de quelle équipe vous ?",
        "relance": "Moi j'oublie toujours de me protéger jusqu'au premier coup de soleil. C'est quoi votre réflexe santé indispensable de l'été ?"
      },
      {
        "accroche": "On attend tranquillement tous les deux et c'est bien l'un des rares endroits où personne ne râle vraiment, vous trouvez pas que la pharmacie a ce petit côté apaisant ?",
        "relance": "Moi j'en profite pour souffler entre deux courses. Vous venez ici par habitude ou parce que c'est la plus proche de chez vous ?"
      },
      {
        "accroche": "Ils ont même mis des petits fauteuils pour patienter maintenant, c'est presque une salle d'attente — vous trouvez pas que la pharmacie est devenue un vrai lieu où on prend le temps ?",
        "relance": "Moi j'en profite pour souffler cinq minutes entre deux courses. Vous, c'est un passage obligé ou un endroit où vous aimez bien traîner un peu ?"
      },
      {
        "accroche": "Il y a de tout maintenant dans ces rayons, des crèmes aux compléments, on s'y perdrait — vous vous fiez aux conseils du comptoir ou vous piochez un peu au feeling comme moi ?",
        "relance": "Moi j'achète des flacons que je ne finis jamais, sur un coup de tête. C'est quoi le produit que vous prenez toujours et que vous conseilleriez les yeux fermés ?"
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
      },
      {
        "accroche": "On entend partout qu'il faut mieux dormir, mieux bouger, écouter son corps, vous êtes réceptif à toutes ces injonctions bien-être du moment vous ?",
        "relance": "Moi je culpabilise plus que je n'agis, à vrai dire. C'est quoi la seule habitude santé que vous tenez vraiment sur la durée ?"
      },
      {
        "accroche": "On dirait qu'en ce moment tout le monde veut ralentir, prendre soin de soi avant que le corps réclame, vous êtes sensible à cette vague-là aussi ?",
        "relance": "Moi je cours partout et je m'écoute jamais assez. C'est quoi le petit geste tout simple qui vous fait le plus de bien au quotidien ?"
      },
      {
        "accroche": "On veut tous se soigner tout seul avec ce qu'on lit en ligne maintenant, avant même de demander — vous êtes plutôt Docteur Google ou vous faites confiance au comptoir vous ?",
        "relance": "Moi je me diagnostique dix maladies graves par soir sur internet. C'est quoi votre réflexe quand un truc vous inquiète, vous cherchez ou vous demandez direct ?"
      },
      {
        "accroche": "On dit que la santé c'est le seul vrai luxe et on ne le comprend souvent que trop tard — vous en avez pris conscience à quel moment vous ?",
        "relance": "Moi il a fallu une bonne frayeur pour que je commence à faire un peu attention. C'est quoi le déclic qui vous a fait prendre soin de vous plus sérieusement ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de savoir exactement ce que vous voulez, vous êtes venue avec une idée précise en tête ?",
        "relance": "Moi je change d'avis dans le fauteuil à chaque fois. C'est quoi qui vous a décidée pour ce style-là aujourd'hui ?"
      },
      {
        "accroche": "Vous feuilletez ce magazine l'air de rien mais je parie que vous cherchez l'inspiration — vous hésitez encore ou c'est déjà décidé ?",
        "relance": "Moi j'arrive toujours avec une photo que le coiffeur regarde à peine. Vous, vous vous fiez plus à une image ou à ce qu'il vous conseille ?"
      },
      {
        "accroche": "Vous avez apporté votre propre shampoing dans votre sac, vous êtes du genre à savoir exactement ce qui va à vos cheveux vous ?",
        "relance": "Moi je laisse le coiffeur tout décider, je m'y connais pas du tout. C'est quoi la règle que vous ne transigez jamais pour vos cheveux ?"
      },
      {
        "accroche": "Vous regardez le résultat dans le miroir avec un petit sourire satisfait, on dirait que ça vous plaît déjà, c'était le changement que vous espériez ?",
        "relance": "Moi je fais toujours semblant d'aimer même quand je suis pas sûre. Vous osez dire quand ça ne vous convient pas dans le fauteuil vous ?"
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
      },
      {
        "accroche": "C'est un salon avec une vraie âme, la déco, la musique douce, on s'y sent bien tout de suite, vous êtes une habituée de l'endroit ?",
        "relance": "Moi je le teste pour la première fois aujourd'hui. C'est quoi selon vous qui fait qu'on se sent vraiment bien dans un salon ?"
      },
      {
        "accroche": "Il y a ce moment un peu suspendu où on est plongé dans les magazines en attendant son tour, presque une parenthèse, vous aimez ce temps mort vous aussi ?",
        "relance": "Moi je viens autant pour ça que pour la coupe, à vrai dire. C'est quoi qui fait pour vous d'une visite chez le coiffeur un vrai bon moment ?"
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
      },
      {
        "accroche": "Souvent on change de coiffure quand on a besoin de marquer un tournant dans sa vie, une envie de neuf, c'est un peu ça pour vous en ce moment ?",
        "relance": "Moi je coupe tout à chaque grande décision, comme un rituel. C'est quoi le changement que vous aviez envie de vous offrir aujourd'hui ?"
      },
      {
        "accroche": "Je trouve qu'une coupe raconte toujours quelque chose de la période qu'on traverse, comme un petit marqueur du moment, vous vous reconnaissez là-dedans vous ?",
        "relance": "Moi mes cheveux ont suivi tous mes grands virages de vie. C'est quoi la coupe qui vous a le plus ressemblé jusqu'ici ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre chien a l'air de connaître le chemin par cœur, c'est lui qui vous promène ou l'inverse ?",
        "relance": "Moi je croise toujours les mêmes têtes ici sans jamais parler. C'est quoi son coin préféré dans ce parc ?"
      },
      {
        "accroche": "Il a une pêche incroyable votre chien, il vous tire déjà vers son parcours — il a une petite routine bien à lui on dirait ?",
        "relance": "Moi j'ai jamais eu de chien mais ça donne presque envie de voir ça. C'est quoi sa manie à lui pendant la promenade ?"
      },
      {
        "accroche": "Votre chien s'arrête pile au même arbre à chaque tour on dirait, il a ses petites habitudes bien à lui, c'est son rituel ça ?",
        "relance": "Moi je croise les mêmes chiens tous les matins sans jamais oser parler à leurs maîtres. C'est quoi sa manie la plus rigolote pendant la balade ?"
      },
      {
        "accroche": "Vous avez la laisse enroulée autour du poignet comme quelqu'un qui a l'habitude de gérer un sacré tempérament, il vous en fait voir vous ?",
        "relance": "Moi j'ai jamais eu de chien mais ça me tente de plus en plus. C'est quoi le truc qu'on sous-estime totalement avant d'en adopter un ?"
      },
      {
        "accroche": "Il a une allure de chien de berger, ça doit avoir besoin de courir un truc pareil — vous arrivez à le fatiguer avec juste le parc ou il vous en réclame toujours plus ?",
        "relance": "Moi je serais épuisé avant lui, clairement. C'est quoi le secret pour canaliser un chien qui a autant d'énergie sans y passer la matinée ?"
      },
      {
        "accroche": "Il s'assoit dès que vous ralentissez, sans un mot, c'est bluffant — vous avez bossé le dressage vous-même ou c'est un naturel chez lui ?",
        "relance": "Moi le mien tirerait comme un fou si j'en avais un, j'en suis sûr. C'est quoi le truc qui a le plus payé quand vous l'avez éduqué ?"
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
      },
      {
        "accroche": "La rosée est encore sur l'herbe à cette heure, on a le parc rien que pour nous, vous êtes un lève-tôt convaincu vous ?",
        "relance": "Moi j'essaie de m'y mettre sans jamais vraiment y arriver. C'est quoi qui vous fait choisir ce parc plutôt qu'un autre pour commencer la journée ?"
      },
      {
        "accroche": "Les premières feuilles commencent à joncher les allées, le parc se transforme complètement en ce moment, vous le voyez changer jour après jour vous aussi ?",
        "relance": "Moi je passe toujours trop vite pour vraiment le remarquer. C'est quoi la saison où vous préférez venir marcher ici ?"
      },
      {
        "accroche": "Il y a ce coin clôturé pour les chiens un peu plus loin, je me demande s'il sert vraiment — vous le lâchez là-bas ou vous préférez la balade en liberté dans les allées ?",
        "relance": "Moi je trouve ça un peu triste ces enclos, mais je connais rien. C'est mieux pour eux ce genre d'espace ou rien ne vaut une vraie balade selon vous ?"
      },
      {
        "accroche": "À cette heure on entend les oiseaux avant tout le reste, la ville est encore endormie — c'est ce calme-là que vous venez chercher chaque matin ?",
        "relance": "Moi je rate toujours ce moment, je sors quand ça grouille déjà. C'est ça le vrai luxe du lève-tôt selon vous, ce parc encore silencieux ?"
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
      },
      {
        "accroche": "Ces petits bouts de verdure au milieu du béton, ça devient presque vital pour souffler un peu, vous le ressentez comme un vrai besoin vous aussi ?",
        "relance": "Moi je crois que je sous-estime à quel point ça me recentre. C'est quoi votre moment préféré ici au fil de l'année ?"
      },
      {
        "accroche": "Commencer la journée dehors plutôt que le nez dans les écrans, ça change tout sur l'humeur, c'est un peu votre sas de décompression ce moment vous ?",
        "relance": "Moi je saute sur mon téléphone dès le réveil, une horreur. C'est quoi qui vous a donné cette bonne habitude de sortir dès le matin ?"
      },
      {
        "accroche": "Au fond c'est un peu lui qui vous impose cette bonne habitude de sortir tous les jours, beau temps mauvais temps — sans lui, vous seriez autant dehors vous croyez ?",
        "relance": "Moi je resterais collé à mon canapé sans un truc qui me pousse dehors. C'est un vrai moteur ce chien pour vous garder actif, ou vous étiez déjà comme ça avant ?"
      },
      {
        "accroche": "Vous devez voir ce parc changer à chaque saison à force d'y venir tous les jours, un truc que la plupart des gens ratent complètement — ça vous reconnecte un peu au temps qui passe, non ?",
        "relance": "Moi je serais incapable de dire quel arbre a déjà perdu ses feuilles ici. C'est ça qui vous plaît dans cette routine, remarquer les petits changements ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez posé votre tapis pile au même endroit que la dernière fois, on a tous notre petit territoire ici — c'est votre place attitrée ?",
        "relance": "Moi je tourne encore pour trouver la mienne. C'est quoi qui vous a fait choisir ce coin de la salle ?"
      },
      {
        "accroche": "Vous avez un tapis qui a l'air d'avoir vécu pas mal de séances, ça se voit que vous pratiquez depuis un moment — j'me trompe ?",
        "relance": "Moi le mien sent encore le neuf, je débute complètement. C'est quoi le truc que vous auriez aimé savoir à vos débuts ?"
      },
      {
        "accroche": "Vous avez une petite bouteille et une serviette pliées au carré à côté du tapis, on voit le rituel bien rodé, vous pratiquez depuis longtemps vous ?",
        "relance": "Moi j'oublie toujours la moitié de mes affaires. C'est quoi le petit truc indispensable que vous emportez à chaque séance vous ?"
      },
      {
        "accroche": "Vous vous étirez déjà tout seul dans votre coin avant même que ça commence, vous connaissez votre corps par coeur on dirait, c'est l'expérience ça ?",
        "relance": "Moi j'attends toujours qu'on me dise quoi faire. C'est quoi le mouvement tout simple qui vous a le plus aidé au début ?"
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
      },
      {
        "accroche": "Il y a une odeur d'encens et une lumière tamisée dans cette salle qui pose direct l'ambiance, c'est ça qui vous fait revenir à ce cours vous ?",
        "relance": "Moi je découvre encore l'endroit. C'est quoi qui fait selon vous qu'on accroche vraiment à une salle plutôt qu'à une autre ?"
      },
      {
        "accroche": "Ce créneau du soir, c'est presque la parenthèse qui referme la journée en douceur, vous venez exprès à cette heure vous ?",
        "relance": "Moi j'ai choisi le soir pour décrocher enfin du boulot. C'est quoi qui vous aide à ne pas lâcher votre pratique dans la durée ?"
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
      },
      {
        "accroche": "C'est un drôle de paradoxe de courir toute la journée pour venir chercher une heure d'immobilité ici, ça vous parle ce grand écart vous ?",
        "relance": "Moi j'ai un mal fou à débrancher le cerveau une fois sur le tapis. C'est quoi qui vous a donné envie de vous mettre au yoga au départ ?"
      },
      {
        "accroche": "On passe des années à muscler son corps avant de comprendre qu'il faut aussi apaiser sa tête, le yoga vous a ouvert cette porte-là vous ?",
        "relance": "Moi j'ai découvert le lâcher-prise sur le tard, presque par hasard. C'est quoi le changement que la pratique a fait naître chez vous sans prévenir ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de préférer observer avant de vous lancer, je fais exactement pareil dans ces soirées — vous connaissez beaucoup de monde ici ?",
        "relance": "Moi je suis venu pour à peine deux personnes. C'est quoi votre lien avec l'hôte de la soirée ?"
      },
      {
        "accroche": "Vous êtes posté un peu en retrait comme moi, le dos au mur pour tout voir venir — c'est votre poste d'observation stratégique ça ?",
        "relance": "Moi je fais le tour du regard avant de me lancer, toujours. Vous êtes venu accompagné ou vous tentez le truc en solo ce soir ?"
      },
      {
        "accroche": "Vous avez ce petit sourire de celui qui trouve la scène amusante à observer plutôt qu'à vivre, je fais pareil, vous connaissez du monde ici vous ?",
        "relance": "Moi je suis venu pour deux personnes à tout casser. C'est quoi votre lien avec celui qui organise tout ça ?"
      },
      {
        "accroche": "Vous tenez votre verre à deux mains comme un petit bouclier, je reconnais ce réflexe parce que je fais exactement pareil, on est du même genre de timides vous et moi ?",
        "relance": "Moi le verre c'est ma contenance officielle en soirée. Vous êtes venu accompagné ou vous vous êtes lancé en solo ce soir ?"
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
      },
      {
        "accroche": "C'est ce moment un peu bancal du début où les groupes sont pas encore formés et où tout le monde se cherche, vous préférez attendre ou vous foncez vous ?",
        "relance": "Moi je gravite près du buffet le temps de me chauffer. C'est quoi votre technique pour vous glisser dans une conversation qui a déjà commencé ?"
      },
      {
        "accroche": "Il y a la terrasse un peu plus au calme là-bas et le gros du monde à l'intérieur, on est deux à avoir choisi le retrait, c'est votre zone de confort ça aussi ?",
        "relance": "Moi je respire mieux loin du brouhaha. Vous êtes plutôt du genre à rester en périphérie toute la soirée ou vous finissez par plonger dans la mêlée ?"
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
      },
      {
        "accroche": "C'est fou de penser qu'une soirée entière peut basculer sur une seule bonne conversation avec un inconnu, vous y croyez à ces petits coups du sort vous ?",
        "relance": "Moi mes plus belles amitiés viennent toutes de soirées où je traînais des pieds. C'est quoi la rencontre la plus marquante que le hasard vous ait offerte ?"
      },
      {
        "accroche": "On pourrait aussi bien repartir chacun de son côté sans se souvenir de l'autre demain, ou devenir des amis de dix ans, tout se joue à un fil, ça vous vertige pas vous ?",
        "relance": "Moi je crois de plus en plus au bon moment avec la bonne personne. Vous êtes plutôt du genre à provoquer les rencontres ou à laisser le hasard faire ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Désolé de vous couper en plein effort — vous avez un rythme de vrai habitué, vous courez ce parcours tous les jours ?",
        "relance": "Moi je peine encore à tenir deux tours. C'est quoi le déclic qui vous a fait devenir aussi régulier ?"
      },
      {
        "accroche": "Désolé de vous arrêter — vous avez une montre qui a l'air de tout mesurer, vous courez avec des objectifs précis ou juste au feeling ?",
        "relance": "Moi je cours sans jamais rien mesurer, du coup je progresse pas. C'est quoi qui vous motive le plus, les chiffres ou la sensation ?"
      },
      {
        "accroche": "Désolé de vous couper en plein élan, mais vos chaussures ont l'air d'avoir avalé des centaines de kilomètres, vous êtes un vrai mordu vous ?",
        "relance": "Moi je cours avec des baskets de ville qui me flinguent les genoux. C'est quoi le premier vrai investissement à faire quand on veut s'y mettre sérieusement ?"
      },
      {
        "accroche": "Pardon de vous arrêter net, mais vous respirez encore tranquillement après ce rythme, c'est un souffle qui se construit sur des années ça non ?",
        "relance": "Moi je suis déjà cramé au bout de cinq minutes. C'est quoi le secret pour tenir sur la distance sans exploser en vol ?"
      },
      {
        "accroche": "Pardon, je fais vite — vous courez avec la musique à fond dans les oreilles, c'est votre carburant ou vous avez besoin du silence certains jours ?",
        "relance": "Moi sans un bon son je m'arrête au bout de dix minutes. C'est quoi qui vous porte vraiment quand les jambes commencent à lâcher, le rythme ou la tête ?"
      },
      {
        "accroche": "Désolé de vous couper — vous êtes en short par ce froid alors que je grelotte en manteau, vous chauffez vraiment si vite que ça une fois lancé ?",
        "relance": "Moi je pars couvert comme pour une expédition et je le regrette rarement. C'est une question d'habitude, ce rapport au froid, ou vous êtes juste blindé ?"
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
      },
      {
        "accroche": "Vous avez le parc quasi désert et la lumière rasante rien que pour vous à cette heure, c'est ça le luxe que vous venez chercher si tôt ?",
        "relance": "Moi je rêve de m'y mettre le matin sans jamais réussir à sortir du lit. C'est quoi le déclic qui vous fait vous lever aussi tôt ?"
      },
      {
        "accroche": "Le sol est encore humide de la nuit et le parc sent bon la terre fraîche, c'est le meilleur moment pour courir ici vous trouvez pas ?",
        "relance": "Moi la fraîcheur du petit matin me décourage tout de suite. C'est quoi qui vous donne le courage d'affronter ça chaque jour ?"
      },
      {
        "accroche": "Pardon deux secondes — cette grande boucle, vous devez la connaître au mètre près à force, elle fait quoi, dans les cinq kilomètres ?",
        "relance": "Moi je me perds encore dans ce parc au bout d'un an. C'est mieux d'avoir un parcours balisé comme ça dans la tête ou vous variez pour pas vous lasser ?"
      },
      {
        "accroche": "Désolé de vous arrêter — il y a cette montée un peu raide au fond que tout le monde évite soigneusement, vous, vous l'attaquez à chaque tour ?",
        "relance": "Moi je fais un détour rien que pour ne pas la voir, cette côte. C'est là que ça se joue vraiment, ces portions qui piquent, ou c'est de l'orgueil ?"
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
      },
      {
        "accroche": "Courir pendant que la ville dort encore, il y a un côté presque solitaire et libre à la fois, vous le vivez comme un moment rien qu'à vous ?",
        "relance": "Moi je crois que je cours surtout pour être seul cinq minutes avec ma tête. C'est quoi qui vous ramène ici chaque matin malgré tout ?"
      },
      {
        "accroche": "Il y a ce sentiment d'avoir déjà accompli quelque chose avant même que la journée commence quand on court au réveil, ça vous porte pour la suite vous aussi ?",
        "relance": "Moi les matins où je bouge je me sens invincible tout le reste du jour. C'est quoi que la course vous apporte bien au-delà du simple sport ?"
      },
      {
        "accroche": "Sortir courir quand rien ne vous y oblige, dans le froid, c'est presque une école de volonté — vous croyez que ça déteint sur le reste de votre vie ?",
        "relance": "Moi je lâche à la première excuse venue, dans le sport comme ailleurs. Vous pensez que cette discipline-là finit par vous rendre plus solide partout ?"
      },
      {
        "accroche": "Il y a ce truc de prendre soin de sa machine avant que la journée vous bouffe, un moment rien qu'à vous — c'est devenu non négociable pour vous, ce rendez-vous du matin ?",
        "relance": "Moi je sacrifie toujours ce moment-là dès que le réveil sonne. C'est quoi qui rend ce rituel intouchable pour vous, au point de vous lever quoi qu'il arrive ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez pointé votre choix sans hésiter une seconde, ça sent le client qui sait ce qu'il aime — c'est votre incontournable celui-là ?",
        "relance": "Moi je reste planté devant la vitrine pendant dix minutes. C'est quoi le produit que vous prenez les yeux fermés à chaque fois ?"
      },
      {
        "accroche": "Votre panier est déjà bien garni, vous avez l'oeil de quelqu'un qui prépare un truc précis — vous recevez du monde ce soir ?",
        "relance": "Moi je repars toujours avec trois fois trop. C'est quoi le produit que vous ne pouvez pas vous empêcher de rajouter à chaque fois ?"
      },
      {
        "accroche": "Vous demandez une coupe bien précise au fromager, ça se voit que vous savez exactement le résultat que vous voulez — c'est pour un plateau ce soir ?",
        "relance": "Moi je prends toujours au pif et je me trompe d'épaisseur. C'est quoi le fromage que vous mettez sur un plateau pour être sûr de plaire à tout le monde ?"
      },
      {
        "accroche": "Vous avez l'oeil sur cette bouteille pendant que ça emballe, l'accord parfait se prépare — vous avez déjà l'idée du vin qui va aller avec ?",
        "relance": "Moi je marie tout au hasard et ça finit rarement bien. C'est quoi votre règle à vous pour ne jamais rater un accord ?"
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
      },
      {
        "accroche": "Rien qu'à l'odeur en passant la porte on sait qu'on est au bon endroit — vous connaissiez déjà la maison ou c'est le nez qui vous a guidé ?",
        "relance": "Moi je me suis fait attraper par l'odeur en passant. C'est quoi le produit d'ici qui sent aussi bon qu'il est bon d'après vous ?"
      },
      {
        "accroche": "Il y a un tableau d'arrivages du jour à l'entrée, ça donne le ton d'une vraie maison — vous venez pour un produit précis affiché dessus ?",
        "relance": "Moi je me laisse toujours tenter par ce qui est écrit sur l'ardoise. C'est quoi l'arrivage de saison à ne pas louper ici en ce moment ?"
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
      },
      {
        "accroche": "Il y a des goûts qui nous ramènent direct en enfance, un fromage un peu fort et hop, la cuisine des grands-parents — ça vous fait ça aussi ?",
        "relance": "Moi c'est une odeur de comté qui me replonge chez ma grand-mère. C'est quoi le goût qui vous ramène dans un souvenir à chaque fois ?"
      },
      {
        "accroche": "Bien manger c'est un des rares petits luxes qui reste accessible à tout le monde, je trouve — vous vous faites plaisir souvent sur ce terrain-là ?",
        "relance": "Moi je m'autorise un bon produit quand la semaine a été rude. C'est quoi le petit plaisir gourmand que vous ne vous refusez jamais ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Je vais faire vite pour pas casser votre série — vous avez une technique super carrée sur cet exercice, ça fait longtemps que vous vous entraînez ?",
        "relance": "Moi je galère encore sur le mouvement. C'est quoi le conseil qui a tout changé pour vous quand vous avez débuté ?"
      },
      {
        "accroche": "Je vous vole dix secondes — vous chargez sacrément la barre, ça impose le respect, vous êtes sur un programme de force en ce moment ?",
        "relance": "Moi je plafonne toujours au même poids. C'est quoi qui vous a fait progresser le jour où vous stagniez ?"
      },
      {
        "accroche": "Je fais vite pour pas vous couper — vous enchaînez les tractions comme si de rien, moi c'est mon cauchemar, elle est venue comment cette aisance ?",
        "relance": "Moi je reste bloqué à trois maximum. C'est quoi qui vous a débloqué sur cet exercice-là ?"
      },
      {
        "accroche": "Je vous prends dix secondes — vous notez chaque série dans votre carnet, ça sent le mec méthodique, ça vous sert vraiment ce suivi ?",
        "relance": "Moi je fais tout au feeling et je tourne en rond. C'est quoi que vous suivez en priorité pour voir que vous progressez ?"
      },
      {
        "accroche": "Je fais vite pour pas vous déranger — vous avez votre shaker préparé pile à côté, ça sent le mec qui gère aussi la nutrition, ça compte vraiment autant que l'entraînement ?",
        "relance": "Moi je m'entraîne dur et je ruine tout avec une pizza le soir. C'est quoi la base côté alimentation qui a le plus d'impact selon vous ?"
      },
      {
        "accroche": "Dix secondes promis — vous sortez vos propres sangles et votre ceinture, on voit l'habitué, ça fait vraiment la différence ce petit matériel perso ?",
        "relance": "Moi j'utilise le matériel de la salle sans savoir à quoi la moitié sert. C'est quoi le premier accessoire qui vaut le coup quand on veut passer un cap ?"
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
      },
      {
        "accroche": "Ils ont refait toute la zone poids libres récemment, c'est autre chose maintenant — vous vous entraîniez déjà ici avant les travaux ?",
        "relance": "Moi j'ai découvert la salle juste après. C'est quoi le coin de la salle où vous passez le plus clair de vos séances ?"
      },
      {
        "accroche": "C'est étonnamment calme ce soir pour une fois, on a presque la salle pour nous — vous tombez souvent sur ce genre de créneau tranquille ?",
        "relance": "Moi je rêve d'avoir les machines libres comme ça. C'est quoi le jour ou l'heure en or que vous avez repéré pour être peinard ?"
      },
      {
        "accroche": "La musique est à fond ce soir, ça pousse ou ça finit par vous saouler à la longue — vous mettez vos écouteurs par-dessus vous ?",
        "relance": "Moi j'ai besoin de ma propre playlist sinon je décroche. C'est quoi qui vous met vraiment dedans pour une grosse séance, l'ambiance ou votre bulle à vous ?"
      },
      {
        "accroche": "On approche de la fermeture, c'est le rush des derniers comme nous — vous venez souvent gratter la dernière heure pour être plus tranquille ?",
        "relance": "Moi je vise toujours ces créneaux limites pour éviter la foule. C'est quoi le meilleur moment que vous ayez repéré pour avoir les machines à vous ?"
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
      },
      {
        "accroche": "Au fond je crois qu'on vient autant se muscler la tête que le corps ici, ça vide vraiment l'esprit — c'est ça que vous venez chercher aussi ?",
        "relance": "Moi une bonne séance et tous mes soucis passent au second plan. C'est quoi que le sport vous apporte le plus, le physique ou le mental ?"
      },
      {
        "accroche": "On voit tellement de corps parfaits partout maintenant que ça fausse tout, on se compare pour rien — vous arrivez à faire abstraction de ça vous ?",
        "relance": "Moi je me décourage à force de comparer. C'est quoi qui vous garde motivé pour vous et pas pour l'image ?"
      },
      {
        "accroche": "Faire du sport le soir pour décharger la journée, il y a ceux que ça détend et ceux que ça tient éveillés toute la nuit — vous, ça vous vide ou ça vous relance ?",
        "relance": "Moi une séance tardive et je fixe le plafond jusqu'à deux heures. C'est quoi votre rituel pour redescendre après avoir tout donné le soir ?"
      },
      {
        "accroche": "À un moment le sport arrête d'être une corvée et devient juste un truc qu'on est, ça fait partie de soi — vous avez passé ce cap vous ?",
        "relance": "Moi je suis encore au stade où chaque séance se négocie avec ma flemme. C'est quoi qui a fait basculer ça pour vous, un déclic ou juste le temps ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On a tous cette tête un peu ailleurs dans une salle d'attente — vous avez l'air d'avoir trouvé le fauteuil le moins inconfortable, ça fait longtemps que vous patientez ?",
        "relance": "Moi je n'ose jamais demander où on en est. C'est quoi votre astuce pour faire passer le temps ici ?"
      },
      {
        "accroche": "Vous feuilletez ce vieux magazine comme moi, faute de mieux pour s'occuper l'esprit — vous patientez depuis un moment ?",
        "relance": "Moi je relis trois fois la même page sans rien retenir. C'est quoi votre truc pour ne pas trop cogiter en attendant ?"
      },
      {
        "accroche": "Vous serrez votre dossier comme si votre vie en dépendait, je fais pareil dans ces moments — c'est un premier rendez-vous ici pour vous ?",
        "relance": "Moi je note toujours mes questions et j'oublie de les poser. C'est quoi votre truc pour ne pas perdre vos moyens une fois dans le cabinet ?"
      },
      {
        "accroche": "Vous avez eu la bonne idée d'amener un vrai livre, moi je fixe le mur bêtement — ça vous aide à faire passer l'attente ça ?",
        "relance": "Moi je n'arrive jamais à me concentrer sur quoi que ce soit ici. C'est quoi qui vous occupe l'esprit quand vous devez patienter longtemps ?"
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
      },
      {
        "accroche": "Le téléphone de l'accueil n'arrête pas de sonner ce matin, ça met une drôle d'ambiance — vous attendez depuis un moment vous aussi ?",
        "relance": "Moi le bruit ambiant me stresse encore plus. C'est quoi qui vous aide à ne pas vous laisser gagner par l'agitation ici ?"
      },
      {
        "accroche": "On dirait que tout le quartier a chopé le même rhume, ça tousse de partout ce matin — vous êtes là pour ça aussi ou autre chose ?",
        "relance": "Moi je viens seulement quand ça traîne vraiment trop. C'est quoi qui vous décide enfin à prendre rendez-vous d'habitude ?"
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
      },
      {
        "accroche": "On ne réalise à quel point la santé compte que le jour où elle flanche, avant on n'y pense jamais — ça vous a déjà fait cet effet-là ?",
        "relance": "Moi il a fallu une grosse frayeur pour que je change mes habitudes. C'est quoi le déclic qui vous a fait faire plus attention à vous ?"
      },
      {
        "accroche": "Le pire c'est pas le rendez-vous, c'est cette attente où on imagine tout et n'importe quoi — vous avez tendance à dramatiser vous aussi ?",
        "relance": "Moi mon imagination part toujours au pire pour rien. C'est quoi votre façon de garder les pieds sur terre dans ces moments ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous êtes resté un bon moment devant cette œuvre, ça se voit que quelque chose vous parle — c'est le détail ou l'ensemble qui vous retient ?",
        "relance": "Moi je passe souvent trop vite sans vraiment regarder. C'est quoi qui fait qu'une pièce vous arrête net comme ça ?"
      },
      {
        "accroche": "Vous prenez des notes devant les toiles, ça se voit que vous ne visitez pas ça en touriste — vous êtes du métier ou juste passionné ?",
        "relance": "Moi je repars toujours en ayant tout oublié. C'est quoi qui fait qu'une oeuvre reste gravée pour vous ?"
      },
      {
        "accroche": "Vous croquez la scène dans un carnet plutôt que de la prendre en photo comme tout le monde — vous dessinez pour mieux la retenir ?",
        "relance": "Moi je mitraille et je ne regarde jamais vraiment. C'est quoi qui vous a donné envie de dessiner ce que vous voyez plutôt que photographier ?"
      },
      {
        "accroche": "Vous prenez du recul puis vous vous rapprochez, vous cherchez le bon angle pour cette toile — c'est le détail qui vous intrigue ?",
        "relance": "Moi je reste planté au même endroit sans savoir quoi regarder. C'est quoi qui fait qu'une oeuvre mérite qu'on tourne autour comme ça pour vous ?"
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
      },
      {
        "accroche": "C'est la dernière semaine de cette expo, on a bien fait de ne pas trop traîner — vous étiez venu spécialement pour elle ?",
        "relance": "Moi j'ai failli la rater complètement. C'est quoi l'expo qui vous a le plus marqué dans ce musée jusqu'ici ?"
      },
      {
        "accroche": "Il y a ce silence de musée où même nos pas résonnent, ça oblige à ralentir — vous aimez visiter seul comme moi ?",
        "relance": "Moi je viens exprès en semaine pour avoir les salles à moi. C'est quoi le moment idéal pour visiter tranquille selon vous ?"
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
      },
      {
        "accroche": "C'est vertigineux de se dire qu'on regarde un truc peint il y a des siècles et qu'il nous parle encore — ça vous fait cet effet-là aussi ?",
        "relance": "Moi je trouve fou qu'une émotion traverse autant de temps. C'est quoi l'époque ou le style qui vous fascine le plus vous ?"
      },
      {
        "accroche": "On vit dans un monde tellement utilitaire que s'arrêter juste pour du beau, ça devient presque un acte rare — vous prenez ce temps-là souvent ?",
        "relance": "Moi je m'oblige à ces pauses sinon je ne fais que courir. C'est quoi qui nourrit votre besoin de beau au quotidien en dehors d'ici ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air d'arriver ici pour vraiment décrocher, pas pour discuter — je comprends, mais je me lance quand même : grosse journée ?",
        "relance": "Moi je viens souvent lessivé aussi. C'est quoi qui vous fait tenir jusqu'au cours plutôt que rentrer direct t'écrouler ?"
      },
      {
        "accroche": "Vous installez votre tapis toujours dans le même coin tranquille, j'ai remarqué — c'est votre petit rituel pour couper du reste ?",
        "relance": "Moi je change de place à chaque fois sans jamais trouver la bonne. C'est quoi qui vous aide à vraiment vous poser en arrivant ?"
      },
      {
        "accroche": "Vous avez tout votre matériel bien à vous, brique et sangle comprises, ça sent le pratiquant sérieux — vous en faites depuis longtemps ?",
        "relance": "Moi j'emprunte encore le matériel de la salle. C'est quoi qui vous a fait passer le cap d'investir dans le vôtre ?"
      },
      {
        "accroche": "Vous êtes déjà les yeux fermés à respirer alors que le cours n'a pas commencé, ça se voit que vous savez couper — c'est un réflexe ça ?",
        "relance": "Moi j'arrive encore la tête pleine du boulot. C'est quoi votre truc pour laisser la journée à la porte en arrivant ?"
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
      },
      {
        "accroche": "Ils tamisent tout et allument l'encens avant qu'on commence, rien que ça la pression descend déjà — ça vous fait de l'effet cette mise en condition ?",
        "relance": "Moi j'ai besoin de ce sas avant de vraiment lâcher. C'est quoi le détail du cours qui vous aide le plus à vous poser ?"
      },
      {
        "accroche": "Il fait déjà nuit quand on sort d'ici en cette saison, ça rend le cours encore plus cocon — vous tenez le rythme même quand les soirées sont courtes ?",
        "relance": "Moi l'hiver j'ai un mal fou à sortir de chez moi le soir. C'est quoi qui vous fait venir même quand la flemme gagne ?"
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
      },
      {
        "accroche": "On nous demande d'être performant partout tout le temps, et ici c'est le seul endroit où ralentir est le but — ça vous fait du bien de lâcher cette course ?",
        "relance": "Moi j'ai du mal à ne rien faire sans culpabiliser. C'est quoi qui vous a réconcilié avec l'idée de prendre votre temps ?"
      },
      {
        "accroche": "On finit par vivre dans notre tête en oubliant complètement notre corps, et un cours comme ça nous y ramène — vous étiez déconnecté de ça avant ?",
        "relance": "Moi je ne m'écoutais jamais avant de finir cramé. C'est quoi qui vous a appris à repérer quand vous avez besoin de souffler ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On est deux à faire tapisserie dans ce coin, autant s'allier — vous non plus vous ne connaissez pas grand monde ici ?",
        "relance": "Moi je ne connais que la personne qui m'a traîné là. C'est quoi qui vous a décidé à venir ce soir ?"
      },
      {
        "accroche": "Vous surveillez votre verre comme si c'était votre seul allié de la soirée, je connais ça par coeur — vous êtes venu accompagné ?",
        "relance": "Moi je me réfugie près du buffet dès que je ne sais plus quoi faire. C'est quoi votre technique à vous pour tenir dans ces soirées ?"
      },
      {
        "accroche": "Vous vous êtes réfugié près de la bibliothèque comme moi, on repère les vrais introvertis à ça — vous connaissez l'hôte au moins ?",
        "relance": "Moi je suis venu par politesse et je le regrette déjà un peu. C'est quoi qui vous a fait accepter l'invitation ce soir ?"
      },
      {
        "accroche": "Vous jetez des coups d'oeil vers la porte, je crois qu'on partage la même envie de fuite polie — vous calculez déjà votre sortie ou vous restez ?",
        "relance": "Moi je me fixe toujours une heure pour partir sans culpabiliser. C'est quoi votre technique pour tenir jusque-là dans ce genre de soirée ?"
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
      },
      {
        "accroche": "Le buffet c'est un peu le refuge des timides ce soir, on est plusieurs à graviter autour sans oser bouger — vous avez repéré quelqu'un à qui parler vous ?",
        "relance": "Moi je fais semblant d'étudier les petits fours depuis dix minutes. C'est quoi votre point de repli dans une soirée où vous ne connaissez personne ?"
      },
      {
        "accroche": "L'appart est superbe mais du coup on ose à peine toucher à quoi que ce soit — vous êtes déjà venu chez l'hôte vous ?",
        "relance": "Moi je découvre tout ce petit monde ce soir. C'est quoi qui vous mettrait vraiment à l'aise dans une soirée comme celle-ci ?"
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
      },
      {
        "accroche": "C'est fou comme c'est devenu compliqué de se faire de vrais amis passé un certain âge, tout reste en surface — vous ressentez ça aussi ?",
        "relance": "Moi je garde une poignée de proches et ça me suffit. C'est quoi selon vous qui fait qu'une rencontre devient une vraie amitié ?"
      },
      {
        "accroche": "J'avoue que le bavardage poli me fatigue vite, je préfère mille fois une conversation qui va au fond des choses — vous êtes pareil ou vous aimez le léger ?",
        "relance": "Moi je m'ennuie dès qu'on parle météo. C'est quoi le sujet qui vous fait vraiment décoller dans une discussion ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Pardon de vous arrêter deux secondes, je vois que vous êtes pressée alors je fais court — vous auriez pas repéré une bonne adresse dans le coin par hasard ?",
        "relance": "Je débarque dans le quartier et je suis un peu perdu. C'est quoi l'endroit du coin qu'une locale comme vous recommanderait ?"
      },
      {
        "accroche": "Vous marchez d'un pas de quelqu'un qui connaît le quartier par coeur, ça tombe bien — je cherche mon chemin, vous auriez dix secondes ?",
        "relance": "Je viens d'arriver et je suis complètement perdu. C'est quoi le repère à connaître pour ne pas se paumer dans le coin ?"
      },
      {
        "accroche": "Pardon je fais vite — votre sac vient de la boulangerie du coin, c'est un signe que c'est la bonne d'après vous ?",
        "relance": "Moi je cherche une adresse fiable dans le quartier. C'est quoi le commerce du coin qui vaut vraiment le détour selon une habituée ?"
      },
      {
        "accroche": "Désolé de vous couper, promis dix secondes — vous avez l'air de connaître, je cherche un endroit sympa pour bosser au calme avec un café, une idée ?",
        "relance": "Moi je viens d'arriver et je bosse à distance. C'est quoi le café du coin où on peut s'installer sans se faire pousser dehors ?"
      },
      {
        "accroche": "Pardon, dix secondes promis — vous tenez un gobelet d'un café que je ne connais pas, et ça c'est souvent bon signe, il est où votre repaire dans le coin ?",
        "relance": "Moi je débarque et je tourne en rond pour un café correct. C'est quoi l'adresse du coin qu'une habituée comme vous garde jalousement ?"
      },
      {
        "accroche": "Désolé de vous sortir de votre musique deux secondes — vous avez l'air de foncer droit au but, vous sauriez m'indiquer une pharmacie encore ouverte par ici ?",
        "relance": "Moi je viens d'arriver et je suis complètement paumé dans ce quartier. C'est quoi le repère à connaître pour ne pas se perdre dans le coin ?"
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
      },
      {
        "accroche": "Ils ont mis la rue sens dessus dessous avec ces travaux, on ne sait plus par où passer — vous connaissez un raccourci vous ?",
        "relance": "Moi je tourne en rond depuis dix minutes. C'est quoi le chemin le plus simple pour rejoindre le centre d'ici ?"
      },
      {
        "accroche": "Il y a une sacrée animation cet après-midi, on dirait qu'il se passe un truc dans le quartier — vous savez ce que c'est vous ?",
        "relance": "Moi je suis tombé dessus par hasard. C'est quoi le genre d'événement qui vaut le coup de rester dans le coin d'après vous ?"
      },
      {
        "accroche": "Pardon, je vois que vous filez vers l'arrêt — vous savez si le bus passe encore par là avec tous ces travaux, ou faut marcher jusqu'au métro ?",
        "relance": "Moi je galère avec les transports depuis que je viens d'emménager ici. C'est quoi le moyen le plus simple pour rejoindre le centre quand tout est bloqué ?"
      },
      {
        "accroche": "On est serrés comme des sardines sur ce trottoir cet après-midi, c'est toujours comme ça à cette heure — vous connaissez une rue parallèle plus tranquille par hasard ?",
        "relance": "Moi je découvre le quartier et je subis la foule sans savoir l'éviter. C'est quoi le petit itinéraire de contournement que seuls les habitués connaissent ?"
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
      },
      {
        "accroche": "On est tous le nez dans notre téléphone dans la rue maintenant, on se rentre presque dedans — vous trouvez pas qu'on ne se regarde plus vraiment ?",
        "relance": "Moi j'essaie de lever les yeux plus souvent. C'est quoi qui vous fait décrocher de l'écran quand vous marchez vous ?"
      },
      {
        "accroche": "C'est marrant, on peut vivre des années dans une ville sans jamais échanger un mot avec un inconnu — ça vous manque parfois ce genre de contact ?",
        "relance": "Moi un simple sourire d'inconnu peut changer ma journée. C'est quoi le petit geste qui vous a redonné foi en les gens récemment ?"
      },
      {
        "accroche": "C'est fou comme aborder quelqu'un dans la rue est devenu presque suspect aujourd'hui, alors qu'avant on demandait l'heure sans y penser — vous trouvez pas qu'on s'est un peu barricadés ?",
        "relance": "Moi j'hésite trois fois avant d'oser demander mon chemin, de peur de déranger. C'est quoi qui vous fait baisser la garde quand un inconnu vous adresse la parole vous ?"
      },
      {
        "accroche": "On dirait que la ville nous met tous en accéléré sans qu'on choisisse vraiment, on avance en pilote automatique — vous arrivez à lever le pied parfois vous ?",
        "relance": "Moi je marche vite même quand je n'ai nulle part où aller, c'est absurde. C'est quoi votre coin ou votre moment pour vraiment ralentir dans cette course ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Je me permets juste un mot avant de continuer mon chemin — votre veste est vraiment classe, c'est une trouvaille ou une marque que je devrais connaître ?",
        "relance": "Moi je galère à sortir des sentiers battus côté fringues. C'est quoi votre truc pour avoir un style aussi affirmé ?"
      },
      {
        "accroche": "Je me permets, promis je ne vous retarde pas — vos lunettes sont incroyables, un accessoire comme ça change tout un visage, c'est chiné où ?",
        "relance": "Moi je n'oserais jamais porter un truc aussi affirmé. C'est quoi qui vous donne cette audace côté style ?"
      },
      {
        "accroche": "Je me permets, juste un mot et je file — vos bottes sont canon, c'est le genre de pièce qui fait toute une allure, vous les avez dénichées où ?",
        "relance": "Moi je reste bloqué sur les mêmes baskets depuis des années. C'est quoi qui vous a donné envie d'oser des pièces plus fortes ?"
      },
      {
        "accroche": "Pardon de vous aborder comme ça — cette association de couleurs sur vous, c'est super maîtrisé, c'est réfléchi ou instinctif chez vous ?",
        "relance": "Moi je joue toujours safe avec du noir de la tête aux pieds. C'est quoi votre secret pour oser des couleurs sans que ça jure ?"
      },
      {
        "accroche": "Je me permets juste avant de filer — votre sac a un truc, ni tout à fait vintage ni tout neuf, c'est le genre de pièce qui fait l'allure, il vient d'où ?",
        "relance": "Moi je garde le même sac fatigué depuis des années par flemme. C'est quoi votre façon de dénicher ces pièces qui ont un vrai caractère ?"
      },
      {
        "accroche": "Pardon de vous aborder — cette manière de superposer les pièces, l'écharpe sur la veste, c'est super maîtrisé, ça vous vient d'instinct ou vous préparez vos tenues la veille ?",
        "relance": "Moi je réfléchis dix minutes le matin pour finir en jean-tee-shirt. C'est quoi le secret pour que les superpositions aient l'air naturelles et pas forcées ?"
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
      },
      {
        "accroche": "On est pile devant les friperies du coin, ça tombe bien vu votre allure — vous chinez souvent dans le quartier vous ?",
        "relance": "Moi je n'ai jamais l'oeil pour dénicher les bonnes pièces. C'est quoi la friperie du coin qui vaut vraiment le coup d'après vous ?"
      },
      {
        "accroche": "Les vitrines du quartier se sont mises à leur plus beau cette saison, ça donne envie de tout — vous vous laissez tenter par les nouveautés vous ?",
        "relance": "Moi je regarde sans jamais oser pousser la porte. C'est quoi la boutique du coin où vous êtes sûre de trouver votre bonheur ?"
      },
      {
        "accroche": "On est pile dans le coin des petites boutiques de créateurs, ça tombe bien vu votre allure — vous poussez la porte de ce genre d'endroits vous ?",
        "relance": "Moi je n'ose jamais entrer, j'ai peur de ne pas être à la hauteur du lieu. C'est quoi l'adresse de créateur du quartier que vous conseilleriez les yeux fermés ?"
      },
      {
        "accroche": "Ce coin de rue c'est un peu le spot où tout le monde vient se montrer en terrasse, on dirait un défilé — vous venez y chercher l'inspiration ou vous êtes juste de passage ?",
        "relance": "Moi je regarde les gens habillés avec goût comme des extraterrestres, fasciné. C'est quoi qui vous inspire le plus pour votre style, la rue ou autre chose ?"
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
      },
      {
        "accroche": "On croule sous les fringues jetables aujourd'hui, du coup une vraie belle pièce ça se remarque tout de suite — vous êtes plutôt qualité qui dure vous ?",
        "relance": "Moi j'accumule des trucs que je ne mets jamais. C'est quoi la pièce que vous gardez et rachèteriez les yeux fermés ?"
      },
      {
        "accroche": "Je trouve qu'un vêtement dans lequel on se sent bien, ça change carrément la façon dont on se tient — vous ressentez ça aussi quand vous êtes bien mise ?",
        "relance": "Moi les bons jours ça se voit direct dans ce que je porte. C'est quoi la tenue qui vous donne un vrai coup de boost à vous ?"
      },
      {
        "accroche": "J'ai l'impression que bien s'habiller c'est un peu une armure pour affronter la journée, ça donne de l'assurance — c'est ce que ça vous apporte à vous aussi ?",
        "relance": "Moi les jours où je me sens mal fringué, je rase les murs toute la journée. C'est quoi la pièce qui vous donne ce petit surplus de confiance quand vous la portez ?"
      },
      {
        "accroche": "On revient tous doucement vers la seconde main, et au fond ça donne des styles bien plus perso que le neuf uniforme des grandes enseignes — vous chinez pour l'originalité ou pour la planète vous ?",
        "relance": "Moi j'achète encore trop de fast fashion que je jette au bout d'un an. C'est quoi qui vous a fait basculer vers ces pièces plus rares et durables ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On se croise tout le temps dans cette rue sans jamais se dire un mot, c'est presque comique — vous habitez par ici depuis longtemps ?",
        "relance": "Moi ça fait un an et je connais personne. C'est quoi le coin où les gens du quartier se retrouvent vraiment ?"
      },
      {
        "accroche": "Je vous vois souvent promener votre chien à cette heure-là, il a une sacrée bonne bouille — ça fait longtemps que vous êtes du quartier ?",
        "relance": "Moi j'hésite justement à en adopter un. C'est quoi le coin sympa pour les balades dans le secteur ?"
      },
      {
        "accroche": "On se croise souvent le matin le sac de courses à la main, on a le même timing on dirait — vous faites vos courses tôt vous aussi ?",
        "relance": "Moi j'y vais tôt pour éviter la foule. C'est quoi le commerce du coin où vous avez vos petites habitudes ?"
      },
      {
        "accroche": "Je vous vois souvent partir courir à cette heure, ça motive de voir quelqu'un d'aussi régulier — vous avez un circuit dans le quartier ?",
        "relance": "Moi je me remets tout doucement au sport. C'est quoi le parcours sympa pour courir sans se prendre les voitures dans le coin ?"
      },
      {
        "accroche": "Je vous vois toujours partir à vélo le matin, vous avez l'air d'avoir trouvé le bon plan pour éviter les bouchons — vous faites tout le quartier comme ça vous ?",
        "relance": "Moi je reste bloqué dans les embouteillages en pestant chaque matin. C'est quoi le meilleur itinéraire à vélo pour se déplacer peinard dans le coin ?"
      },
      {
        "accroche": "Vous avez un de ces balcons fleuris qu'on repère depuis la rue, ça met de la vie dans l'immeuble — c'est vous qui avez la main verte du quartier ?",
        "relance": "Moi je fais mourir même les cactus, c'est un exploit inversé. C'est quoi la plante increvable à mettre pour quelqu'un de nul comme moi selon vous ?"
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
      },
      {
        "accroche": "Le petit marché s'installe pile ce matin, ça met une ambiance sympa dans la rue — vous y faites un tour vous aussi ?",
        "relance": "Moi je le découvre tout juste. C'est quoi le stand du marché à ne pas rater d'après vous ?"
      },
      {
        "accroche": "Vous avez vu, ils ont ouvert un nouveau café au coin, ça manquait dans le quartier — vous êtes déjà allé le tester vous ?",
        "relance": "Moi je guette qu'il y ait moins de monde pour y aller. C'est quoi l'endroit du quartier où vous aimez traîner le matin ?"
      },
      {
        "accroche": "C'est l'heure où tout le quartier accompagne les enfants à l'école, ça grouille de monde d'un coup — vous avez le même timing tous les matins vous ?",
        "relance": "Moi je me cale exprès juste après pour éviter la cohue. C'est quoi le petit rythme du quartier que vous avez fini par apprendre à force d'habiter ici ?"
      },
      {
        "accroche": "Ils ont repeint la façade au bout de la rue, le quartier se refait doucement une beauté — vous trouvez qu'il change en bien ou vous regrettez un peu l'ancien ?",
        "relance": "Moi je viens d'arriver, donc je ne sais pas ce que c'était avant. C'est quoi qui a le plus changé dans le coin depuis que vous y êtes vous ?"
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
      },
      {
        "accroche": "Avant on se prêtait du sucre entre voisins, aujourd'hui on ose à peine sonner à côté — vous trouvez pas que cette entraide se perd ?",
        "relance": "Moi j'aimerais qu'on ose plus se rendre service dans l'immeuble. C'est quoi qui recréerait un peu de solidarité dans le coin selon vous ?"
      },
      {
        "accroche": "Je crois que c'est le quartier plus que la ville qui fait qu'on se sent chez soi quelque part — c'est ça qui vous a fait choisir ce coin vous ?",
        "relance": "Moi je suis tombé amoureux de l'ambiance ici avant même de l'appart. C'est quoi qui vous a attaché à ce quartier vous ?"
      },
      {
        "accroche": "Je trouve que ce sont les petits commerçants qui tiennent encore le lien dans un quartier, le jour où ils ferment tout se refroidit d'un coup — vous le ressentez comme ça vous ?",
        "relance": "Moi j'ai vu ma rue devenir triste quand l'épicier du coin a baissé le rideau. C'est quoi le commerce qui fait vraiment battre le cœur de votre quartier selon vous ?"
      },
      {
        "accroche": "Au fond ça commence par un simple bonjour dans la rue, et de fil en aiguille on finit par se rendre des services — c'est peut-être aussi bête que ça, recréer du lien, non ?",
        "relance": "Moi j'ai fini par arroser les plantes d'une voisine juste parce qu'on se disait bonjour. C'est quoi le premier pas qui a créé du lien pour vous dans le coin ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On se croise tous les matins devant les ascenseurs sans jamais se parler — vous êtes à quel étage, on est peut-être voisins de palier professionnel ?",
        "relance": "Moi je suis au 4e, la boîte de design. C'est quoi votre boîte, on se demande toujours qui fait quoi dans cet immeuble ?"
      },
      {
        "accroche": "Vous avez toujours ce grand café à la main le matin, comme moi, on est clairement pas des gens du matin — vous bossez à quel étage ?",
        "relance": "Moi c'est le troisième, sans caféine je n'existe pas. C'est quoi la meilleure machine à café de l'immeuble, la vraie grande question ?"
      },
      {
        "accroche": "Votre badge est d'une boîte que je ne croise jamais, on doit être à des étages opposés — vous faites quoi dans cet immeuble vous ?",
        "relance": "Moi je suis dans la petite agence du fond au 4e. C'est quoi votre secteur, je suis toujours curieux de savoir qui bosse ici ?"
      },
      {
        "accroche": "Vous débarquez avec votre casque de vélo, respect de pédaler jusqu'ici le matin — vous venez à vélo tous les jours vous ?",
        "relance": "Moi je rêve de lâcher les transports bondés. C'est quoi votre trajet, c'est faisable à vélo sans y laisser sa peau ?"
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
      },
      {
        "accroche": "La cafét du rez est le seul endroit où on croise vraiment du monde ici — vous y descendez pour votre pause vous aussi ?",
        "relance": "Moi j'y traîne exprès pour souffler cinq minutes. C'est quoi le meilleur créneau pour y prendre un café peinard selon vous ?"
      },
      {
        "accroche": "Ils ont changé tout le système de badges, j'ai mis trois jours à comprendre — vous vous y êtes fait vous à ces nouveautés ?",
        "relance": "Moi je reste bloqué au portique une fois sur deux. C'est quoi le truc pratique de l'immeuble que personne ne connaît d'après vous ?"
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
      },
      {
        "accroche": "On passe tellement d'heures ici que ça devient une deuxième maison, presque plus que chez soi — vous arrivez à couper le soir vous ?",
        "relance": "Moi j'ai un mal fou à décrocher une fois rentré. C'est quoi votre rituel pour vraiment laisser le boulot au bureau ?"
      },
      {
        "accroche": "Depuis le télétravail on se demande tous à quoi ça sert encore de venir, et pourtant croiser du monde ça manque — vous préférez quoi vous au fond ?",
        "relance": "Moi j'ai besoin de sortir de chez moi pour bosser. C'est quoi qui vous fait aimer venir au bureau malgré tout ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On a tous les deux cette tête de gens qui poireautent en réception — vous attendez pour un rendez-vous vous aussi ou vous bossez ici ?",
        "relance": "Moi j'ai vingt minutes d'avance, l'angoisse d'être en retard. C'est quoi votre technique pour gérer l'attente avant un rendez-vous important ?"
      },
      {
        "accroche": "Vous consultez votre montre toutes les deux minutes, je fais pareil, l'attente rend dingue — vous avez un rendez-vous qui traîne aussi ?",
        "relance": "Moi je déteste faire poireauter les gens du coup je stresse pour deux. C'est quoi qui vous agace le plus quand on vous fait attendre ?"
      },
      {
        "accroche": "On dirait qu'on passe le même grand oral, le dossier sous le bras et tout — vous avez un rendez-vous important vous aussi ?",
        "relance": "Moi j'ai révisé mon speech dans le métro comme un étudiant. C'est quoi votre technique pour retomber sur vos pieds si ça part de travers en rendez-vous ?"
      },
      {
        "accroche": "Vous tapez du pied comme moi, l'attente avant un rendez-vous c'est un supplice — vous êtes du genre à toujours arriver en avance vous aussi ?",
        "relance": "Moi je préfère poireauter plutôt que risquer le retard. C'est quoi qui vous stresse le plus, l'attente ou le rendez-vous en lui-même ?"
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
      },
      {
        "accroche": "Ils ont mis le paquet sur la déco du hall, ça en jette mais ça intimide un peu — vous venez pour la première fois vous aussi ?",
        "relance": "Moi ça me met toujours un peu la pression ces endroits léchés. C'est quoi qui vous met à l'aise quand vous débarquez dans une grosse boîte ?"
      },
      {
        "accroche": "Ils proposent le café à l'accueil au moins, ça aide à faire passer l'attente — vous en avez pris un vous ou vous tenez au stress pur ?",
        "relance": "Moi je carbure au café dans ces moments. C'est quoi votre petit rituel pour vous détendre avant de passer ?"
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
      },
      {
        "accroche": "Tout se joue dans les premières minutes dans le boulot, avant même d'avoir dit un mot — vous y croyez vraiment vous, à la première impression ?",
        "relance": "Moi je soigne toujours mon entrée quitte à en faire trop. C'est quoi qui vous marque en bien chez quelqu'un que vous rencontrez pour la première fois ?"
      },
      {
        "accroche": "On court tellement toute la journée qu'être forcé de s'asseoir et attendre, c'est presque un luxe déguisé — vous le prenez comment vous ces pauses imposées ?",
        "relance": "Moi je n'arrive jamais à profiter de ces moments creux. C'est quoi qui vous aiderait à voir l'attente autrement ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'œil pour choisir vos légumes, ça se voit que vous savez repérer les bons — c'est un truc que vous avez appris ou de l'instinct ?",
        "relance": "Moi je prends toujours à l'aveugle. C'est quoi le signe qui vous dit qu'un fruit est vraiment mûr et bon ?"
      },
      {
        "accroche": "Vous sentez les melons avant de choisir, le vrai geste de connaisseur — c'est une méthode qui marche vraiment ça ?",
        "relance": "Moi je tape dessus sans savoir ce que j'écoute. C'est quoi le truc infaillible pour tomber sur le bon à tous les coups ?"
      },
      {
        "accroche": "Vous faites le plein d'herbes fraîches, ça sent le plat qui se prépare — vous cuisinez un truc précis ce midi ?",
        "relance": "Moi je n'ose jamais toucher aux herbes fraîches, j'ai peur de gâcher. C'est quoi l'herbe qui change tout dans un plat d'après vous ?"
      },
      {
        "accroche": "Vous avez choisi ce légume que je n'ai jamais su cuisiner, vous avez l'air de savoir quoi en faire — ça se prépare comment ce truc-là ?",
        "relance": "Moi j'achète des trucs curieux et ils finissent oubliés au frigo. C'est quoi votre recette fétiche pour un légume un peu original ?"
      },
      {
        "accroche": "Vous avez sorti le vrai panier en osier, pas le sac plastique, ça c'est du client de marché convaincu — vous venez faire le plein ici toutes les semaines vous ?",
        "relance": "Moi je débarque toujours les mains vides et je repars les bras cassés. C'est quoi l'ordre malin pour faire son marché sans tout écraser au fond du sac ?"
      },
      {
        "accroche": "Vous embarquez des tomates par kilos entiers, ça sent la sauce ou les conserves maison — vous mettez de côté pour l'hiver vous ?",
        "relance": "Moi j'achète toujours au coup par coup et je gaspille la moitié. C'est quoi le geste qui vaut le coup de faire soi-même quand un produit est en pleine saison ?"
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
      },
      {
        "accroche": "On est tôt, tout est encore impeccable sur les étals, ça change de la fin de marché — vous venez toujours à la fraîche vous ?",
        "relance": "Moi je viens tôt exprès pour le choix. C'est quoi le bon créneau pour tomber sur le meilleur ici selon vous ?"
      },
      {
        "accroche": "Les premières fraises viennent d'arriver sur les étals, c'est le signe que la saison change — vous guettez ça vous aussi ?",
        "relance": "Moi j'attends certains produits toute l'année. C'est quoi celui dont vous guettez le retour avec le plus d'impatience ?"
      },
      {
        "accroche": "Le maraîcher fait goûter ses fraises là, c'est rare et ça donne confiance — vous vous fiez à la dégustation ou vous avez déjà vos stands attitrés vous ?",
        "relance": "Moi je goûte tout et je finis par acheter n'importe quoi, sans méthode. C'est quoi le stand du marché dont vous ne changeriez pour rien au monde ?"
      },
      {
        "accroche": "Les prix ici piquent un peu plus qu'en supermarché mais ça se voit dans l'assiette — vous faites tout votre panier au marché ou vous complétez ailleurs vous ?",
        "relance": "Moi je craque sur deux-trois trucs ici et je fais le reste en grande surface. C'est quoi le produit pour lequel ça vaut vraiment le coup de payer le prix du marché selon vous ?"
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
      },
      {
        "accroche": "Ça fait du bien de mettre un visage sur ce qu'on mange plutôt qu'un code-barres — vous êtes attaché à ce contact direct avec les producteurs vous ?",
        "relance": "Moi je culpabilise de trop acheter en grande surface. C'est quoi qui vous a fait revenir vers le marché vous ?"
      },
      {
        "accroche": "Je trouve qu'on perd un peu ces recettes toutes simples qui se transmettaient de génération en génération — vous cuisinez des trucs de famille vous ?",
        "relance": "Moi je regrette de ne pas avoir noté celles de ma grand-mère. C'est quoi le plat qui vous rappelle votre enfance à chaque bouchée ?"
      },
      {
        "accroche": "On parle tellement de manger local maintenant, et ici c'est concret, à deux pas de chez le producteur — vous faites ça par conviction ou juste parce que c'est meilleur vous ?",
        "relance": "Moi je culpabilise sur mes fraises d'Espagne en plein hiver, sans jamais rien changer. C'est quoi qui vous a fait vraiment basculer vers le local vous ?"
      },
      {
        "accroche": "Il y a un truc dans le fait de flâner au marché le matin, ça n'a rien à voir avec pousser un caddie sous les néons — c'est devenu un vrai petit rituel pour vous ce moment ?",
        "relance": "Moi je fais mes courses en vitesse le soir, sans jamais lever le nez. C'est quoi qui vous plaît le plus ici, les produits ou juste l'ambiance du marché ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On sent que derrière votre stand il y a une vraie histoire, vous avez la passion de quelqu'un qui parle de son métier — vous êtes apiculteur depuis longtemps ?",
        "relance": "Moi je fantasme sur cette vie au grand air. C'est quoi qui vous a fait choisir ce métier au départ ?"
      },
      {
        "accroche": "Vous avez une gamme impressionnante, du plus clair au presque noir, chaque pot son caractère — c'est quoi qui fait toute cette différence de couleur ?",
        "relance": "Moi je pensais naïvement qu'un miel c'était un miel. C'est quoi votre préféré à vous parmi tout ce que vous produisez ?"
      },
      {
        "accroche": "Vous ne vendez pas que du miel, il y a de la propolis, des bougies, tout un monde — vous valorisez tout ce que font vos abeilles alors ?",
        "relance": "Moi j'ignorais qu'une ruche donnait autant de choses. C'est quoi le produit que les gens connaissent le moins et qui vaut le détour ?"
      },
      {
        "accroche": "Vous avez accroché des photos de vos ruches en pleine nature, ça donne envie d'y être — c'est par ici que vous les installez ?",
        "relance": "Moi je ne me doutais pas du décor qu'il y avait derrière un pot de miel. C'est quoi le plus beau coin où vous posez vos ruches ?"
      },
      {
        "accroche": "Vous avez un pot un peu à part, presque crémeux, cristallisé, qui intrigue tout le monde — c'est un miel particulier ou juste le temps qui le transforme comme ça ?",
        "relance": "Moi je croyais bêtement qu'un miel qui durcit était un miel raté. C'est quoi qui fait qu'un miel prend cette texture plutôt qu'une autre ?"
      },
      {
        "accroche": "Vous avez posé un vrai cadre de ruche sur la table, avec la cire et tout, ça change des simples pots alignés — c'est pour montrer aux gens le boulot des abeilles derrière ?",
        "relance": "Moi je n'avais jamais vu à quoi ça ressemblait vraiment de si près. C'est quoi le truc qui étonne le plus les gens quand vous leur expliquez comment ça marche ?"
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
      },
      {
        "accroche": "Vous faites goûter avant d'acheter, c'est rare et ça donne confiance — vous laissez les gens se faire leur propre idée alors ?",
        "relance": "Moi je me fie toujours au vendeur sans savoir. C'est quoi la différence de goût que je devrais chercher entre deux de vos miels ?"
      },
      {
        "accroche": "On est en pleine saison de récolte, vos pots doivent être des plus frais là — c'est le bon moment pour faire le plein vous diriez ?",
        "relance": "Moi je ne sais jamais quand un miel est au top. C'est quoi la période où votre miel est vraiment à son meilleur ?"
      },
      {
        "accroche": "Vous avez marqué que tout vient de vos ruches à quelques kilomètres d'ici, c'est du vrai local — vous êtes le seul apiculteur sur ce marché ou il y a de la concurrence ?",
        "relance": "Moi j'achète du miel sans jamais regarder d'où il vient, j'avoue. C'est quoi qui change vraiment quand le miel vient d'à côté plutôt que du bout du monde ?"
      },
      {
        "accroche": "Il y a toujours des gamins qui s'arrêtent devant votre stand, fascinés par les abeilles — vous en profitez pour leur glisser deux-trois trucs vous ?",
        "relance": "Moi enfant j'aurais adoré qu'on m'explique tout ça sur un marché. C'est quoi la question que les enfants vous posent le plus souvent devant vos pots ?"
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
      },
      {
        "accroche": "On a de moins en moins de gens qui font un vrai métier de leurs mains comme vous, ça se raréfie — vous avez peur que ce savoir-faire se perde ?",
        "relance": "Moi j'admire ceux qui vivent d'une vraie passion manuelle. C'est quoi qui vous ferait plaisir à transmettre à quelqu'un un jour ?"
      },
      {
        "accroche": "Votre métier c'est un peu l'inverse de notre époque pressée, tout se fait au rythme de la nature — ça vous rend plus patient vous croyez ?",
        "relance": "Moi je m'énerve dès que ça ne va pas assez vite. C'est quoi que le contact avec les abeilles vous a appris sur la patience ?"
      },
      {
        "accroche": "On oublie qu'une bonne partie de ce qu'on mange dépend directement de vos abeilles, c'est vertigineux quand on y pense — vous vous sentez un peu gardien d'un truc plus grand que le miel vous ?",
        "relance": "Moi je réalise à peine à quel point tout est lié à ces petites bêtes. C'est quoi qui vous inquiète le plus quand vous voyez les saisons se dérégler ?"
      },
      {
        "accroche": "Les gens reviennent doucement vers les vrais produits, ceux qui ont une histoire et un visage derrière — vous le sentez, ce retour vers l'authentique sur vos marchés ?",
        "relance": "Moi je fais plus attention à qui produit ce que j'achète depuis quelques années. C'est quoi qui vous rend optimiste pour la suite quand vous voyez vos clients ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'art de tout faire rentrer dans le coffre, moi je galère toujours — c'est un déménagement ou juste de grosses courses ?",
        "relance": "Moi je m'y prends toujours mal. C'est quoi votre astuce pour caser tout ça sans jouer au Tetris pendant dix minutes ?"
      },
      {
        "accroche": "Vous avez un porte-vélo bien rodé sur le toit, ça donne envie de partir loin — vous vous échappez le week-end ?",
        "relance": "Moi mon vélo prend la poussière au garage. C'est quoi votre spot préféré pour rouler pas trop loin d'ici ?"
      },
      {
        "accroche": "Vous chargez tout un attirail de bricolage, ça sent le gros projet du week-end — vous vous lancez dans quoi de beau ?",
        "relance": "Moi je remets mes travaux depuis des mois. C'est quoi le chantier maison dont vous êtes le plus fier vous ?"
      },
      {
        "accroche": "Vous chargez comme pour partir camper une semaine, ça donne envie de prendre le large — vous partez en vadrouille ce week-end ?",
        "relance": "Moi je rêve d'un week-end au vert sans rien prévoir. C'est quoi votre coin d'escapade préféré pas trop loin d'ici ?"
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
      },
      {
        "accroche": "Ils ont enfin installé des bornes de recharge dans le parking, il était temps — vous êtes passé à l'électrique vous ou pas encore ?",
        "relance": "Moi j'hésite à sauter le pas depuis un moment. C'est quoi qui vous déciderait à changer de voiture vous ?"
      },
      {
        "accroche": "Les places sont tellement serrées ici qu'on ouvre à peine sa portière, c'est un vrai sport — vous avez le coup de main pour vous garer sans galérer vous ?",
        "relance": "Moi je m'y reprends à trois fois à chaque fois. C'est quoi le coin du parking le moins galère selon vous ?"
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
      },
      {
        "accroche": "C'est marrant, la voiture c'est censé être la liberté et au final on passe notre temps à lui trouver une place — vous la vivez comment cette relation vous ?",
        "relance": "Moi je l'adore pour les virées et je la déteste en ville. C'est quoi qui vous ferait vraiment plaisir côté déplacements idéalement ?"
      },
      {
        "accroche": "C'est souvent au parking qu'on finit par se dire bonjour entre voisins, plus que dans l'immeuble — vous connaissez du monde ici vous ?",
        "relance": "Moi je papote plus ici qu'à mon propre palier. C'est quoi qui fait qu'on finit par se lier avec ses voisins selon vous ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous devez tout voir passer depuis votre poste, les pressés, les perdus, les râleurs — on doit vous en faire voir de belles non ?",
        "relance": "Moi je serais incapable de garder mon calme. C'est quoi le truc le plus improbable que vous ayez vu ici ?"
      },
      {
        "accroche": "Vous avez tout un mur d'écrans devant vous, on dirait une salle de contrôle — vous arrivez vraiment à tout suivre là-dessus ?",
        "relance": "Moi je serais hypnotisé au bout de cinq minutes. C'est quoi qui attire votre oeil en premier sur ces écrans ?"
      },
      {
        "accroche": "Vous avez aménagé votre poste avec votre radio et votre thermos, un vrai petit QG — c'est votre coin à vous pour tenir les longues soirées ?",
        "relance": "Moi je ne tiendrais pas cinq minutes sans bouger. C'est quoi qui vous tient compagnie pendant les heures creuses ici ?"
      },
      {
        "accroche": "Vous avez un trousseau de clés impressionnant à la ceinture, vous devez ouvrir la moitié de l'immeuble — vous connaissez chaque recoin ici alors ?",
        "relance": "Moi je me perdrais dans tous ces niveaux. C'est quoi le coin du parking que personne ne connaît à part vous ?"
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
      },
      {
        "accroche": "Vous entamez la nuit pendant que tout le monde plie, c'est un drôle de moment la relève du soir — vous préférez ce service à celui de jour vous ?",
        "relance": "Moi je serais incapable de commencer à bosser quand les autres rentrent. C'est quoi qui vous plaît le plus dans le service du soir ?"
      },
      {
        "accroche": "Il commence à faire frais le soir dans votre guérite, ça caille vite dans ces postes — vous êtes bien équipé au moins pour tenir ?",
        "relance": "Moi j'aurais froid rien qu'à rester assis là. C'est quoi votre truc pour tenir le coup les soirs où ça pince ?"
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
      },
      {
        "accroche": "On croise des dizaines de gens comme vous chaque jour sans jamais vraiment les voir, c'est un peu injuste — vous vous sentez reconnu dans votre boulot vous ?",
        "relance": "Moi j'essaie toujours de prendre le temps de dire bonjour à ceux qu'on oublie. C'est quoi le petit geste des gens qui vous touche vraiment dans votre journée ?"
      },
      {
        "accroche": "Un poste comme le vôtre, seul de longues heures, ça doit laisser un temps fou pour réfléchir à tout et rien — ça vous pèse ou ça vous va la solitude ?",
        "relance": "Moi le silence trop longtemps me rend fou. C'est quoi qui vous trotte dans la tête pendant ces longues heures calmes ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air d'être celui qui met l'ambiance dans l'équipe, on le sent tout de suite — ça fait longtemps que vous bossez avec eux ?",
        "relance": "Moi j'ai l'impression que la bonne équipe change tout dans ce genre de boulot. C'est quoi qui soude un groupe sur un chantier ?"
      },
      {
        "accroche": "Vous partagez votre casse-croûte avec toute l'équipe sans même y penser, ça en dit long sur l'ambiance — vous formez une bonne bande ici ?",
        "relance": "Moi je crois que ce sont ces petits gestes qui font tenir un groupe. C'est quoi le rituel qui vous rassemble tous à la pause ?"
      },
      {
        "accroche": "Vous avez les mains qui racontent toute une vie de boulot, ça force le respect — vous êtes tombé dans le bâtiment jeune ?",
        "relance": "Moi j'ai jamais rien construit de mes mains, ça m'impressionne. C'est quoi qui vous a donné le goût de ce métier au départ ?"
      },
      {
        "accroche": "Vous connaissez le prénom de tout le monde qui passe, on dirait que vous êtes un peu le pilier ici — ça fait un moment que vous tenez ce rôle ?",
        "relance": "Moi j'ai toujours admiré ceux qui rassemblent naturellement les gens. C'est quoi qui fait qu'on devient le point de repère d'une équipe comme ça ?"
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
      },
      {
        "accroche": "Vous avez trouvé le seul coin à l'abri du vent pour souffler, bien joué — c'est votre spot habituel pour la pause ?",
        "relance": "Moi je fais que traverser le site. C'est quoi le meilleur endroit que vous ayez déniché pour manger tranquille sur un chantier ?"
      },
      {
        "accroche": "On entend les machines qui s'arrêtent une par une, on dirait que le chantier retient son souffle le temps de la pause — c'est le rituel tous les jours à cette heure ?",
        "relance": "Moi je passe juste récupérer un truc. C'est quoi qui fait qu'une pause vous requinque vraiment sur une longue journée ?"
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
      },
      {
        "accroche": "Il y a une vraie solidarité entre vous, on sent que vous vous couvrez les uns les autres quand ça devient dur — c'est ça qui fait tenir sur ce genre de métier ?",
        "relance": "Moi dans mon boulot chacun reste dans son coin, ça me manque un peu. C'est quoi le moment où vous vous êtes senti le plus soutenu par l'équipe ?"
      },
      {
        "accroche": "Vous bossez dehors par tous les temps, il faut une sacrée dose de courage pour affronter ça matin après matin — vous vous y êtes fait avec le temps ?",
        "relance": "Moi je râle dès qu'il pleut sur le trajet du bureau. C'est quoi qui vous donne l'énergie de vous lever quand la météo s'annonce pourrie ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous manœuvrez cet engin comme si c'était une extension de vous, impressionnant — il faut combien de temps pour être aussi à l'aise ?",
        "relance": "Moi je serais tétanisé aux commandes. C'est quoi le plus dur à maîtriser au début dans ce métier ?"
      },
      {
        "accroche": "Vous alignez ces palettes au millimètre, on voit que rien n'est laissé au hasard chez vous — c'est un truc qui vient avec l'expérience ?",
        "relance": "Moi je mettrais tout de travers en cinq minutes. C'est quoi la petite fierté du métier qu'on ne remarque jamais de l'extérieur ?"
      },
      {
        "accroche": "Vous anticipez chaque mouvement avant même qu'on vous le demande, on voit le vrai réflexe du métier — ça devient une seconde nature à force ?",
        "relance": "Moi il me faudrait des années pour avoir ce coup d'œil. C'est quoi qui distingue un bon cariste d'un débutant selon vous ?"
      },
      {
        "accroche": "Vous jonglez avec le scanner et les commandes sans jamais lever la tête, une vraie mécanique bien huilée — c'est le rythme qui rentre tout seul ?",
        "relance": "Moi je m'emmêlerais les pinceaux en deux secondes. C'est quoi le geste que vous faites cent fois par jour sans même y penser maintenant ?"
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
      },
      {
        "accroche": "Les chariots se croisent sans jamais se toucher, on dirait une chorégraphie parfaitement millimétrée — il y a un ordre précis derrière tout ce ballet ?",
        "relance": "Moi je vois juste du mouvement partout, ça m'étourdit. C'est quoi la règle d'or pour que tout ce monde circule sans accroc ?"
      },
      {
        "accroche": "Ça sent la grosse journée d'expédition, les quais sont pleins à craquer — c'est un pic de commandes en ce moment ?",
        "relance": "Moi je découvre l'envers du décor. C'est quoi la période de l'année où ça devient vraiment infernal pour vous ?"
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
      },
      {
        "accroche": "Sans des postes comme le vôtre, toute la chaîne s'arrêterait net, et pourtant personne n'y pense jamais — ça vous agace ce manque de reconnaissance ?",
        "relance": "Moi je réalise à peine tout ce qui repose sur vous. C'est quoi qui vous ferait vous sentir un peu plus valorisé dans ce métier ?"
      },
      {
        "accroche": "Avec toutes ces machines qui arrivent, on se demande à quoi ressemblera l'entrepôt dans dix ans — vous vous posez la question pour votre métier ?",
        "relance": "Moi j'ai un peu peur pour l'avenir dans plein de boulots. C'est quoi la part du métier qu'aucune machine ne pourra jamais remplacer d'après vous ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez cette énergie de quelqu'un qui part pour quelque chose de bien, ça se voit sur votre visage — c'est les vacances ou un voyage spécial ?",
        "relance": "Moi j'adore ce moment juste avant de partir. C'est quoi la destination qui vous fait le plus vibrer là maintenant ?"
      },
      {
        "accroche": "Votre sac a des étiquettes de partout, vous avez l'air d'un vrai baroudeur — c'est encore une nouvelle aventure qui commence ?",
        "relance": "Moi je collectionne les endroits où je rêve d'aller. C'est quoi le voyage qui vous a donné le goût de repartir sans cesse ?"
      },
      {
        "accroche": "Vous avez ce grand sourire de quelqu'un qui a compté les jours avant ce départ — ça fait longtemps que vous attendez ce voyage ?",
        "relance": "Moi j'adore cette impatience juste avant de partir. C'est quoi qui vous a donné envie de cette destination-là en particulier ?"
      },
      {
        "accroche": "Vous avez sorti le chapeau et les lunettes avant même de décoller, on sent que la tête est déjà sur place — vous filez vers le soleil j'imagine ?",
        "relance": "Moi je me projette toujours en vacances des semaines à l'avance. C'est quoi la première chose que vous comptez faire une fois arrivé là-bas ?"
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
      },
      {
        "accroche": "C'est fou de se dire que dans cette file, chacun s'envole vers une histoire complètement différente — vous, c'est le grand départ vers où ?",
        "relance": "Moi je mets le cap sur le soleil. C'est quoi la destination de rêve que vous gardez encore dans un coin de votre tête ?"
      },
      {
        "accroche": "Le terminal qui s'anime au lever du jour, avec les cafés qui ouvrent et les valises qui roulent, il y a une énergie folle — vous partez tôt comme ça souvent ?",
        "relance": "Moi j'adore attraper les premiers vols, ça donne l'impression de voler du temps. C'est quoi votre petite habitude pour bien démarrer un jour de voyage ?"
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
      },
      {
        "accroche": "Un aéroport, c'est un des rares endroits où on croise autant de rêves qui décollent en même temps — vous ressentez cette effervescence vous aussi ?",
        "relance": "Moi je trouve ça grisant tout ce monde en partance. C'est quoi le départ qui vous a procuré le plus fort sentiment de liberté ?"
      },
      {
        "accroche": "Partir, c'est un peu accepter de tout laisser derrière soi le temps d'un voyage, et ça fait un bien fou — vous avez besoin de ça de temps en temps ?",
        "relance": "Moi j'ai besoin de couper complètement pour me retrouver. C'est quoi que vous laissez derrière vous avec le plus de soulagement quand vous partez ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez la tête de quelqu'un qui enchaîne les vols depuis trop longtemps — grosse correspondance vous aussi ?",
        "relance": "Moi ça fait huit heures que je traîne ici. C'est quoi votre secret pour survivre à une escale interminable ?"
      },
      {
        "accroche": "Vous avez déniché le seul coin avec une prise qui marche, respect — vous campez ici depuis longtemps ?",
        "relance": "Moi ça fait trois heures que je cherche où recharger mon téléphone. C'est quoi votre kit de survie pour une escale qui n'en finit pas ?"
      },
      {
        "accroche": "Vous avez le regard vide de quelqu'un qui a perdu la notion de l'heure depuis trois fuseaux horaires — vous êtes en transit depuis quand au juste ?",
        "relance": "Moi j'ai complètement décroché de savoir quel jour on est. C'est quoi qui vous aide à ne pas sombrer complètement pendant ces attentes sans fin ?"
      },
      {
        "accroche": "Vous vous êtes fabriqué un vrai petit campement avec le manteau roulé en oreiller, la technique du pro de l'escale — vous êtes coincé ici pour longtemps ?",
        "relance": "Moi je n'arrive jamais à me poser dans ces endroits. C'est quoi votre astuce pour réussir à vous reposer un peu au milieu de tout ce bruit ?"
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
      },
      {
        "accroche": "Ces halls de correspondance ont un côté hors du monde, ni tout à fait parti ni vraiment arrivé — vous enchaînez sur quelle destination après ça ?",
        "relance": "Moi je rentre d'un voyage qui traîne en longueur. C'est quoi l'escale interminable qui vous a le plus mis les nerfs à vif ?"
      },
      {
        "accroche": "Les néons blafards, les annonces qui résonnent dans le vide, un aéroport la nuit ça a quelque chose d'un peu fantomatique — votre vol est retardé aussi ?",
        "relance": "Moi j'attends dans ce calme un peu pesant depuis des heures. C'est quoi la nuit d'aéroport la plus longue que vous ayez encaissée ?"
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
      },
      {
        "accroche": "On idéalise tellement les voyages qu'on oublie tout ce qu'il faut endurer avant d'y arriver — vous trouvez que le jeu en vaut la chandelle malgré tout ?",
        "relance": "Moi je me demande parfois si je voyage encore par plaisir ou par habitude. C'est quoi qui rend un voyage assez beau pour vous faire oublier ces galères ?"
      },
      {
        "accroche": "Il y a quelque chose d'usant à passer sa vie entre deux endroits, jamais vraiment posé quelque part — vous ressentez ça après des journées comme celle-ci ?",
        "relance": "Moi ces transitions sans fin finissent par me vider. C'est quoi le moment où vous vous sentez enfin arrivé, vraiment posé quelque part ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air serein alors que tout le monde s'agite, ça fait du bien à voir — vous êtes un habitué de cette ligne ?",
        "relance": "Moi je stresse toujours de rater mon train. C'est quoi votre astuce pour voyager aussi zen ?"
      },
      {
        "accroche": "Vous voyagez léger, juste un petit sac, ça sent le voyageur qui sait s'y prendre — vous partez souvent comme ça sur un coup de tête ?",
        "relance": "Moi je pars toujours avec trois valises de trop. C'est quoi votre secret pour voyager aussi léger ?"
      },
      {
        "accroche": "Vous avez pris le temps de vous poser avec un bon bouquin en attendant, ça respire le voyageur qui savoure — vous faites toujours de vos trajets un moment à vous ?",
        "relance": "Moi je passe mon temps à vérifier les panneaux, incapable de me poser. C'est quoi votre rituel pour transformer un simple trajet en vrai moment de plaisir ?"
      },
      {
        "accroche": "Vous avez ce petit sourire de quelqu'un qui n'a nulle part où être pressé, ça donne envie — vous partez pour le plaisir ou pour retrouver quelqu'un ?",
        "relance": "Moi je voyage toujours avec un but précis en tête. C'est quoi le voyage que vous avez fait juste pour le trajet, sans vraie destination ?"
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
      },
      {
        "accroche": "Le quai baigné de lumière de l'après-midi, avec ce petit vent tiède, on serait presque bien à attendre — vous prenez le prochain vous aussi ?",
        "relance": "Moi je pars retrouver des amis pour quelques jours. C'est quoi votre meilleur souvenir d'attente sur un quai comme celui-là ?"
      },
      {
        "accroche": "On sent que cette gare a vu passer des générations, les vieux bancs, la charpente en métal, ça a un cachet fou — vous connaissez son histoire un peu ?",
        "relance": "Moi je m'attarde toujours à regarder les détails de ces vieilles gares. C'est quoi le lieu de passage qui vous a le plus touché en voyage ?"
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
      },
      {
        "accroche": "Le train a ce truc magique de nous faire traverser des paysages qu'on n'aurait jamais vus autrement, défilant comme un film — vous prenez le temps de regarder dehors vous aussi ?",
        "relance": "Moi je peux passer tout le trajet le nez collé à la fenêtre. C'est quoi le plus beau paysage que vous ayez découvert depuis un train ?"
      },
      {
        "accroche": "Il y a une vraie douceur à accepter d'arriver plus tard mais autrement, à contre-courant de cette course permanente — vous cultivez cette lenteur vous aussi ?",
        "relance": "Moi j'ai appris à savourer le fait de ne pas être pressé. C'est quoi qui vous a donné envie de ralentir dans votre façon de voyager ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous consultez le panneau toutes les dix secondes, je fais pareil quand je stresse — vous avez peur de rater une correspondance ?",
        "relance": "Moi je suis jamais tranquille tant que je suis pas assis dans le train. C'est quoi qui vous met le plus la pression là ?"
      },
      {
        "accroche": "Vous serrez votre billet comme s'il allait s'envoler, je reconnais bien ce petit stress — vous avez peur de vous tromper de train ?",
        "relance": "Moi je vérifie mon quai dix fois avant de me poser. C'est quoi qui vous rassurerait le plus là tout de suite ?"
      },
      {
        "accroche": "Vous faites les cent pas au bord du quai, je reconnais bien cette impatience qui monte — vous avez peur que votre train soit annoncé au dernier moment ?",
        "relance": "Moi je n'arrive jamais à rester en place tant que le quai n'est pas affiché. C'est quoi qui vous ferait décompresser un peu en attendant ?"
      },
      {
        "accroche": "Vous avez déjà votre valise bien en main, prête à foncer dès l'annonce, je connais ce réflexe — vous avez une correspondance serrée derrière ?",
        "relance": "Moi je me mets toujours une pression folle sur les changements. C'est quoi le pire moment de stress que vous ayez vécu à cause d'un train ?"
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
      },
      {
        "accroche": "Encore une annonce de retard qui tombe, on se demande comment ils font pour tout dérégler à cette heure — vous attendiez quel train au juste ?",
        "relance": "Moi ces matins désorganisés me rendent dingue. C'est quoi qui vous permet de garder votre calme quand tout part en vrille comme ça ?"
      },
      {
        "accroche": "La foule qui se presse vers le même wagon, c'est toujours un moment un peu tendu ce matin — vous visez quelle voiture pour éviter la cohue ?",
        "relance": "Moi je stresse toujours de ne pas trouver de place. C'est quoi votre technique pour vous placer au bon endroit sur le quai ?"
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
      },
      {
        "accroche": "C'est fou de voir à quel point une simple minute de retard peut faire dérailler toute une journée de travail — vous vivez cette pression tous les matins ?",
        "relance": "Moi j'ai fini par tout caler avec de la marge pour ne plus subir. C'est quoi qui rendrait vos matins un peu moins tendus au quotidien ?"
      },
      {
        "accroche": "On confie tellement de choses à ces horaires qu'un simple grain de sable et c'est toute notre organisation qui vacille — ça vous pèse cette dépendance ?",
        "relance": "Moi j'ai appris à lâcher un peu ce que je ne contrôle pas. C'est quoi qui vous aiderait à moins dépendre de ces imprévus le matin ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez le guide de la ville ouvert à côté de votre café, ça sent le programme chargé — vous découvrez le coin vous aussi ?",
        "relance": "Moi je n'ai encore rien prévu. C'est quoi le premier endroit que vous comptez aller voir ?"
      },
      {
        "accroche": "Vous avez déjà l'appareil photo autour du cou au petit-déj, ça sent le programme bien rempli — vous chassez quoi comme images dans le coin ?",
        "relance": "Moi je photographie tout et n'importe quoi en voyage. C'est quoi le genre d'endroit que vous cherchez toujours à capturer ?"
      },
      {
        "accroche": "Vous avez déjà tracé tout un itinéraire sur votre plan de la ville, ça sent l'organisateur né — vous préparez toujours vos journées à ce point ?",
        "relance": "Moi je pars toujours à l'aventure sans rien prévoir. C'est quoi l'endroit incontournable que vous ne rateriez pour rien au monde dans cette ville ?"
      },
      {
        "accroche": "Vous vous êtes servi de tout ce qui a l'air local sur le buffet, ça sent le voyageur curieux — vous aimez goûter à tout quand vous découvrez un endroit ?",
        "relance": "Moi je teste toujours les spécialités du coin dès le petit-déjeuner. C'est quoi la découverte culinaire qui vous a le plus surpris en voyage ?"
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
      },
      {
        "accroche": "Ces matins d'hôtel ont un charme particulier, on partage la table sans se connaître mais tous un peu ailleurs — vous êtes de passage pour combien de temps ?",
        "relance": "Moi je m'offre une petite escapade de quelques jours. C'est quoi qui vous a décidé à venir découvrir cette ville-là ?"
      },
      {
        "accroche": "On entend des accents de partout autour des tables ce matin, c'est un vrai petit village du monde ce buffet — vous arrivez de quel coin vous ?",
        "relance": "Moi j'adore cette impression de voyage rien qu'au petit-déjeuner. C'est quoi le pays où vous avez le mieux mangé le matin ?"
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
      },
      {
        "accroche": "Ouvrir les volets sur une ville inconnue le premier matin, il y a peu de sensations aussi grisantes — vous avez ce petit frisson de la découverte vous aussi ?",
        "relance": "Moi je prends toujours un moment pour respirer l'ambiance avant de sortir. C'est quoi votre premier réflexe en arrivant dans une nouvelle ville ?"
      },
      {
        "accroche": "Voyager, c'est aussi retrouver cette curiosité d'enfant qu'on perd un peu dans la routine, tout redevient intéressant — vous le ressentez comme ça vous aussi ?",
        "relance": "Moi je me sens plus vivant, plus attentif dès que je pars. C'est quoi que le voyage réveille en vous que le quotidien endort ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous devez connaître cette ville par cœur à force de conseiller les gens — vous êtes du coin depuis toujours ?",
        "relance": "Moi je veux fuir les pièges à touristes. C'est quoi l'adresse que vous donnez seulement aux gens qui la méritent ?"
      },
      {
        "accroche": "J'ai aperçu votre petit carnet plein d'adresses griffonnées, c'est là que sont cachés les vrais trésors j'imagine — vous le tenez depuis longtemps ?",
        "relance": "Moi je note tout aussi dans un carnet. C'est quoi la meilleure adresse que vous y ayez jamais inscrite ?"
      },
      {
        "accroche": "Vous avez l'air de connaître autant les gens qui passent que les rues d'à côté, on sent le vrai local — vous conseillez cette ville depuis des années ?",
        "relance": "Moi je veux surtout éviter les endroits bondés de touristes. C'est quoi le coin que seuls les habitués du quartier connaissent vraiment ?"
      },
      {
        "accroche": "On voit que vous avez la réponse à tout avant même qu'on finisse la question, un vrai réflexe de terrain — vous avez fait toute votre carrière dans l'accueil ?",
        "relance": "Moi je fais toujours plus confiance à un humain qu'à une appli. C'est quoi la meilleure recommandation que vous ayez faite à un client ?"
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
      },
      {
        "accroche": "Autant demander au bon endroit plutôt que de me fier au premier avis venu sur internet — vous êtes plutôt bonnes tables ou balades secrètes vous ?",
        "relance": "Moi je cherche un endroit avec du caractère pour ce soir. C'est quoi l'adresse que vous gardez précieusement pour les clients qui la méritent ?"
      },
      {
        "accroche": "Le hall est tranquille en cet instant, c'est le moment idéal pour profiter de vos lumières — vous avez deux minutes pour un voyageur perdu ?",
        "relance": "Moi j'ai toujours préféré les conseils de quelqu'un qui vit sur place. C'est quoi la petite pépite du coin qu'aucun guide ne mentionne jamais ?"
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
      },
      {
        "accroche": "Vous devez lire les gens à livre ouvert à force, deviner ce qu'ils cherchent avant même qu'ils le disent — ça vous donne une drôle de vision de l'humain ?",
        "relance": "Moi je trouve fascinant ceux qui savent cerner les gens si vite. C'est quoi que les voyageurs révèlent d'eux sans même s'en rendre compte ?"
      },
      {
        "accroche": "Il y a quelque chose de beau à passer ses journées à rendre le séjour des autres un peu plus doux, c'est rare comme métier — ça vous nourrit autant que ça en a l'air ?",
        "relance": "Moi j'admire ceux dont le boulot c'est le bonheur des gens. C'est quoi le petit geste tout simple qui change le plus un séjour selon vous ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous êtes tellement dans votre bouquin que vous avez failli rater l'arrêt, ça doit être bon — c'est quoi que vous lisez ?",
        "relance": "Moi je cherche justement ma prochaine lecture. C'est quoi le livre qui vous a le plus marqué récemment ?"
      },
      {
        "accroche": "Votre bouquin est couvert d'annotations et de coins pliés, on voit que vous le vivez à fond — c'est pour les cours ou par pur plaisir ?",
        "relance": "Moi j'annote toujours mes livres aussi, ça rend fous mes amis. C'est quoi le genre de passage qui vous donne envie de sortir un stylo ?"
      },
      {
        "accroche": "Vous avez souligné la moitié d'une page à ce que je vois, ça doit vous parler drôlement — c'est un roman ou plutôt de la réflexion ?",
        "relance": "Moi j'adore quand un livre me pousse à sortir le crayon. C'est quoi la phrase qui vous a le plus marqué dans une lecture récente ?"
      },
      {
        "accroche": "Vous lisez avec un petit sourire au coin des lèvres, ça doit être une sacrée histoire pour vous mettre dans cet état — c'est quoi ce bouquin ?",
        "relance": "Moi je cherche justement un livre qui me fasse cet effet-là. C'est quoi le dernier roman qui vous a fait ressentir quelque chose de fort ?"
      },
      {
        "accroche": "Vous en êtes déjà aux dernières pages et vous ralentissez comme pour le faire durer, je connais ça — c'est le genre de livre qu'on n'a pas envie de finir ?",
        "relance": "Moi je repousse toujours la fin des bouquins que j'aime. C'est quoi le dernier livre que vous auriez voulu ne jamais terminer ?"
      },
      {
        "accroche": "La tranche de votre bouquin est toute cassée, on dirait un livre que vous avez relu dix fois — c'est un de vos préférés que vous ressortez ?",
        "relance": "Moi j'ai deux ou trois livres que je relis sans arrêt. C'est quoi le livre que vous pourriez rouvrir encore et encore sans vous lasser ?"
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
      },
      {
        "accroche": "C'est marrant, le bus c'est devenu ma bibliothèque personnelle, le seul endroit où je lis vraiment — vous aussi vous profitez du trajet pour ça ?",
        "relance": "Moi sans ces trajets je ne lirais jamais rien. C'est quoi qui vous a poussé à faire de vos transports un moment de lecture ?"
      },
      {
        "accroche": "On sent la fin des cours dans l'air, le bus se remplit de sacs et de fatigue étudiante — vous rentrez d'une longue journée à la fac vous aussi ?",
        "relance": "Moi j'ai gardé des bouquins des années passées dans les transports étudiant. C'est quoi la matière ou le sujet qui vous passionne le plus en ce moment ?"
      },
      {
        "accroche": "Sur cette ligne on a le temps de caler un bon chapitre avant le terminus, c'est presque fait pour lire — vous avez trouvé le trajet parfait pour ça vous aussi ?",
        "relance": "Moi j'ai un peu choisi ma ligne pour ça, j'avoue. C'est quoi votre coin préféré pour vous plonger vraiment dans un livre ?"
      },
      {
        "accroche": "Vous vous êtes installé côté fenêtre pour avoir la lumière sur vos pages, le bon réflexe du lecteur — vous prenez toujours cette place-là pour lire ?",
        "relance": "Moi je me bats toujours pour la place près de la vitre. C'est quoi les conditions parfaites pour que vous vous plongiez complètement dans un bouquin ?"
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
      },
      {
        "accroche": "À votre âge tenir un vrai livre plutôt qu'un écran, c'est presque un acte de résistance aujourd'hui — vous l'avez toujours eu ce goût de la lecture ?",
        "relance": "Moi je m'en veux de passer autant de temps à scroller. C'est quoi qui vous a préservé de cette addiction aux écrans, à vous ?"
      },
      {
        "accroche": "Il y a une richesse folle à se plonger dans les pensées d'un autre, comme si on empruntait sa tête le temps d'un livre — c'est ça qui vous attire dans la lecture ?",
        "relance": "Moi j'ai l'impression de grandir à chaque bon bouquin. C'est quoi l'auteur qui a le plus changé votre façon de penser ?"
      },
      {
        "accroche": "Prendre le temps de lire, c'est un peu refuser d'aller à la vitesse de tout le reste, une façon de ralentir — c'est ce que ça vous apporte à vous aussi ?",
        "relance": "Moi je cours tellement que j'oublie de m'arrêter pour lire. C'est quoi que la lecture arrive à apaiser dans votre tête ?"
      },
      {
        "accroche": "Il y a un truc génial dans le fait qu'un livre peut lancer des débats sans fin entre gens qui l'ont lu, ça crée du lien — vous aimez en discuter autour de vous vous aussi ?",
        "relance": "Moi j'adore tomber sur quelqu'un qui a lu le même bouquin que moi. C'est quoi le livre dont vous pourriez parler pendant des heures ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Désolé de percer votre bulle une seconde — vous avez l'air à fond dans votre musique, ça doit être une sacrée playlist pour tenir ce trajet ?",
        "relance": "Moi la musique c'est ma survie dans les transports. C'est quoi qui tourne en boucle chez vous en ce moment ?"
      },
      {
        "accroche": "Pardon de vous déranger — vous battez la mesure du pied sans même vous en rendre compte, ça doit envoyer du lourd dans ces écouteurs — c'est quoi le style ?",
        "relance": "Moi la musique me fait oublier tout le trajet. C'est quoi l'artiste que vous pourriez écouter en boucle sans jamais vous lasser ?"
      },
      {
        "accroche": "Navré de m'inviter dans votre bulle — vous avez le genre de casque qui coûte un bras, vous devez être un vrai passionné de son — c'est quoi qui tourne là-dedans ?",
        "relance": "Moi je ne jure que par la musique dans les transports. C'est quoi le morceau qui vous met de bonne humeur à tous les coups ?"
      },
      {
        "accroche": "Pardon de vous sortir de votre monde une seconde — vous fermez les yeux comme si la musique vous emportait ailleurs, ça doit être quelque chose — c'est quoi ce son ?",
        "relance": "Moi la musique c'est ma façon de m'évader dans la foule. C'est quoi la chanson qui vous transporte complètement à chaque écoute ?"
      },
      {
        "accroche": "Pardon de m'immiscer une seconde — vous articulez les paroles sans le vouloir, ça doit être un morceau que vous adorez — c'est quoi qui tourne là ?",
        "relance": "Moi il y a des chansons que je connais par cœur sans même m'en rendre compte. C'est quoi le morceau dont vous connaissez chaque parole par cœur ?"
      },
      {
        "accroche": "Désolé de vous interrompre — vous avez l'air suspendu à ce que vous écoutez, on dirait presque une histoire plus qu'une musique — c'est un podcast qui vous tient en haleine ?",
        "relance": "Moi les podcasts me font oublier des trajets entiers. C'est quoi que vous écoutez qui vous captive au point d'oublier où vous êtes ?"
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
      },
      {
        "accroche": "Personne ne se regarde, tout le monde plongé dans son écran, c'est le rituel silencieux du trajet du soir — vous rentrez d'une longue journée vous aussi ?",
        "relance": "Moi ce trajet c'est mon moment pour me vider la tête. C'est quoi votre façon à vous de tourner la page une fois le boulot fini ?"
      },
      {
        "accroche": "Il fait déjà nuit dehors et le wagon avance dans le noir, ça a un côté un peu suspendu ces trajets du soir — vous faites ce chemin tous les jours ?",
        "relance": "Moi j'aime bien ce moment un peu flottant entre le travail et la maison. C'est quoi qui vous fait le plus de bien pendant ce sas du soir ?"
      },
      {
        "accroche": "On finit par croiser les mêmes visages sur ce trajet du soir sans jamais se parler, c'est amusant — vous prenez cette ligne tous les jours vous aussi ?",
        "relance": "Moi je reconnais des gens sans leur avoir jamais adressé un mot. C'est quoi qui vous ferait enfin briser la glace avec un habitué du trajet ?"
      },
      {
        "accroche": "Le balancement du wagon a presque endormi la moitié des gens, c'est l'effet des trajets du soir — vous luttez pour ne pas piquer du nez vous aussi ?",
        "relance": "Moi je rate mon arrêt une fois sur deux tellement ça berce. C'est quoi qui vous tient éveillé sur le chemin du retour ?"
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
      },
      {
        "accroche": "C'est vertigineux de penser qu'on partage le même wagon sans rien savoir les uns des autres, chacun avec sa vie entière — ça vous traverse l'esprit parfois ?",
        "relance": "Moi je m'invente des histoires sur les gens autour, j'avoue. C'est quoi qui vous ferait engager la conversation avec un parfait inconnu, comme maintenant ?"
      },
      {
        "accroche": "On a tous besoin de ce petit refuge pour tenir le rythme de la ville, un coin de silence au milieu du vacarme — la musique c'est le vôtre j'imagine ?",
        "relance": "Moi sans mon casque je crois que la ville m'épuiserait. C'est quoi qui vous permet de vous ressourcer au milieu de tout ce bruit ?"
      },
      {
        "accroche": "C'est fou de penser qu'on a tous notre propre bande-son qui accompagne les mêmes rues grises, ça transforme le décor — la musique change votre regard sur le trajet vous ?",
        "relance": "Moi une bonne chanson peut rendre magique le trajet le plus banal. C'est quoi le morceau qui embellit n'importe quel moment pour vous ?"
      },
      {
        "accroche": "Après une journée où on est sollicité de partout, se couper du monde un moment c'est presque vital — ces écouteurs c'est votre façon de souffler j'imagine ?",
        "relance": "Moi j'ai besoin de ce sas de silence avant de rentrer chez moi. C'est quoi qui vous aide vraiment à couper avec la journée une fois dedans ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous tournez autour de ce rayon depuis un moment, comme quelqu'un qui hésite entre trop de bonnes options — vous cherchez un titre précis ?",
        "relance": "Moi je repars toujours avec trois livres que je n'avais pas prévus. C'est quoi le dernier qui vous a scotché ?"
      },
      {
        "accroche": "Vous enchaînez les quatrièmes de couverture avec un vrai air de connaisseur — vous suivez un auteur en particulier ?",
        "relance": "Moi je choisis souvent un livre juste à sa première phrase. C'est quoi qui vous décide vous, la couverture, le résumé, le hasard ?"
      },
      {
        "accroche": "Vous lisez les premières pages debout dans le rayon, c'est le vrai test avant de craquer ça — le début vous a accroché ?",
        "relance": "Moi je juge tout à la première page aussi. C'est quoi le livre dont le début vous a happé au point de ne plus pouvoir le lâcher ?"
      },
      {
        "accroche": "Vous reposez toujours vos livres pile où il faut, on voit le respect du vrai lecteur — vous passez beaucoup de temps dans les librairies ?",
        "relance": "Moi je pourrais m'y perdre des heures. C'est quoi qui vous attire d'abord dans un rayon, un titre, une couverture, un nom d'auteur ?"
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
      },
      {
        "accroche": "On sent une vraie main derrière ces tables, les choix sont audacieux, loin des best-sellers habituels — vous avez trouvé des pépites ici avant ?",
        "relance": "Moi je découvre cet endroit aujourd'hui. C'est quoi la dernière trouvaille inattendue que vous ayez faite dans une librairie ?"
      },
      {
        "accroche": "La lumière tamisée, le parquet qui craque, cette librairie a un vrai supplément d'âme comparé aux grandes enseignes — vous êtes attaché à ces lieux vous aussi ?",
        "relance": "Moi je fuis les rayons impersonnels des grandes surfaces. C'est quoi qui fait qu'une librairie devient votre repaire à vous ?"
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
      },
      {
        "accroche": "Choisir un livre en le tenant, en sentant le papier, c'est un plaisir que rien de numérique ne remplacera jamais — vous y tenez comme moi à ce rituel ?",
        "relance": "Moi j'ai besoin de le feuilleter pour savoir s'il est fait pour moi. C'est quoi le signe qui vous dit qu'un livre est le bon quand vous l'avez en main ?"
      },
      {
        "accroche": "Il y a des livres qui semblent nous choisir plus qu'on ne les choisit, arrivant pile quand on en a besoin — vous croyez à ces hasards heureux vous aussi ?",
        "relance": "Moi certaines lectures sont tombées à point nommé dans ma vie. C'est quoi le livre qui vous a accompagné dans un moment important ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous reposez et reprenez le même livre depuis cinq minutes, je connais ce dilemme par cœur — il vous tente mais quelque chose vous freine ?",
        "relance": "Moi j'ai toujours peur de me tromper de lecture. C'est quoi qui vous fait franchir le pas pour un livre au final ?"
      },
      {
        "accroche": "Vous avez déjà une belle pile dans les bras et vous hésitez encore, je connais ce combat — vous n'arrivez pas à vous limiter non plus ?",
        "relance": "Moi je repars toujours avec deux de trop. C'est quoi votre critère pour finalement en reposer un ?"
      },
      {
        "accroche": "Vous lisez le résumé pour la troisième fois, je connais cette petite hésitation par cœur — quelque chose vous tente mais vous n'osez pas vous lancer ?",
        "relance": "Moi j'ai toujours peur de repartir avec le mauvais livre. C'est quoi qui finit par vous décider quand un bouquin vous fait de l'œil ?"
      },
      {
        "accroche": "Vous comparez ces deux couvertures comme si votre soirée en dépendait, je reconnais bien ce petit dilemme — vous hésitez entre deux genres complètement différents ?",
        "relance": "Moi je n'arrive jamais à trancher entre deux envies de lecture. C'est quoi qui vous aide à choisir quand deux livres vous attirent autant ?"
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
      },
      {
        "accroche": "La table des nouveautés donne le vertige, tout semble prometteur et on ne sait plus où poser les yeux — vous cherchez de quoi vous faire plaisir ce soir ?",
        "relance": "Moi je viens juste flâner mais tout me tente. C'est quoi le livre récent qui vous a le plus donné envie de tout laisser tomber pour lire ?"
      },
      {
        "accroche": "Les lumières commencent à baisser, ça met un peu la pression pour choisir avant la fermeture — vous étiez venu chercher un titre précis ?",
        "relance": "Moi je décide toujours à la dernière minute quand on me presse. C'est quoi qui vous ferait enfin dire c'est bon, je prends celui-là ?"
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
      },
      {
        "accroche": "On croule sous les choix pour la moindre chose aujourd'hui, au point que ça finit par nous figer complètement — vous ressentez cette fatigue de devoir toujours choisir ?",
        "relance": "Moi trop d'options me paralysent pour de bon. C'est quoi votre petit truc pour vous décider sans passer des heures à peser le pour et le contre ?"
      },
      {
        "accroche": "Hésiter autant, c'est au fond vouloir bien remplir ces rares moments à soi qu'on a de plus en plus de mal à trouver — vous vivez vos loisirs comme ça aussi ?",
        "relance": "Moi j'ai si peu de temps libre que j'ai peur de le gâcher. C'est quoi qui vous fait sentir qu'une soirée a été vraiment bien employée ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre plat a l'air incroyable, on n'a pas pu s'empêcher de loucher dessus — c'est quoi que vous avez pris ?",
        "relance": "Moi je n'arrive jamais à choisir sur une carte. C'est quoi votre technique pour ne pas regretter votre commande ?"
      },
      {
        "accroche": "Vous avez commandé un vin qui a l'air d'un sacré choix, nous on n'y connaît rien — vous vous y connaissez ou c'est le serveur qui vous a guidés ?",
        "relance": "Moi je prends toujours le vin au hasard sur la carte. C'est quoi votre méthode pour tomber sur une bonne bouteille ?"
      },
      {
        "accroche": "Votre dessert vient d'arriver et toute la table a fait des yeux ronds, il a l'air divin — c'est quoi cette merveille que vous avez prise ?",
        "relance": "Moi je craque toujours au moment du dessert. C'est quoi le dessert qui vous fait dire tant pis pour la ligne à tous les coups ?"
      },
      {
        "accroche": "Vous avez l'air de bien connaître la maison, vous n'avez même pas ouvert la carte — vous venez souvent ou vous avez vos petites habitudes ici ?",
        "relance": "Moi je découvre l'endroit ce soir. C'est quoi le plat qu'il ne faut surtout pas rater quand on met les pieds ici pour la première fois ?"
      },
      {
        "accroche": "Vous avez pris une belle planche à partager au milieu de la table, c'est convivial ça donne envie — vous êtes plutôt du genre à picorer dans tout vous ?",
        "relance": "Moi j'adore quand on partage les plats, on goûte à tout. C'est quoi le plat que vous commandez toujours pour le mettre au centre et partager ?"
      },
      {
        "accroche": "Vous avez immortalisé votre assiette avant d'y toucher, elle devait valoir le coup — c'est si beau que ça ce qu'on vous a servi ?",
        "relance": "Moi je photographie mes plats et je me fais charrier à chaque fois. C'est quoi le plus beau plat qu'on vous ait jamais posé devant vous ?"
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
      },
      {
        "accroche": "La déco, la musique, tout donne envie de s'attarder dans cet endroit, c'est vraiment agréable — vous aviez repéré ce resto ou c'est une belle surprise ?",
        "relance": "Moi c'est un ami qui me l'a soufflé. C'est quoi le meilleur resto qu'on vous ait recommandé et qui a tenu ses promesses ?"
      },
      {
        "accroche": "Ça rit fort à toutes les tables ce soir, il y a une ambiance de fête contagieuse ici — vous célébrez une occasion spéciale de votre côté ?",
        "relance": "Moi on s'est réunis pour souffler un peu après une grosse période. C'est quoi la meilleure fête que vous ayez passée autour d'une table ?"
      },
      {
        "accroche": "Cette salle est pleine à craquer un soir de semaine, il faut réserver des semaines à l'avance paraît-il — vous aviez anticipé ou vous avez eu de la chance pour la table ?",
        "relance": "Moi j'ai tenté ma chance sans réserver, j'ai eu du bol. C'est quoi le resto le plus dur à décrocher où vous ayez fini par manger ?"
      },
      {
        "accroche": "On voit la cuisine ouverte d'ici, c'est un spectacle en soi de les regarder s'activer — ça vous a attiré aussi cette ambiance vous ?",
        "relance": "Moi je pourrais rester à regarder une brigade en action pendant des heures. C'est quoi qui vous fait choisir un resto, l'assiette ou l'ambiance ?"
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
      },
      {
        "accroche": "Partager un bon repas, c'est un des rares plaisirs qui met tout le monde d'accord peu importe d'où on vient — vous êtes du genre à réunir les gens autour d'une table ?",
        "relance": "Moi j'adore recevoir et voir les gens heureux de manger. C'est quoi le repas partagé qui vous a laissé le meilleur souvenir ?"
      },
      {
        "accroche": "Il y a cette idée que ce qui compte vraiment, ce n'est pas tant le plat que les gens avec qui on le partage — vous êtes d'accord avec ça vous aussi ?",
        "relance": "Moi les meilleurs plats restent fades sans la bonne compagnie. C'est quoi le repas qui vous a marqué plus pour les gens que pour l'assiette ?"
      },
      {
        "accroche": "Goûter une cuisine qu'on ne connaît pas, c'est un peu voyager sans bouger de sa chaise — vous êtes du genre curieux qui teste tout au resto vous ?",
        "relance": "Moi je commande toujours le truc que je n'ai jamais goûté. C'est quoi le plat le plus dépaysant qui vous ait surpris en bien ?"
      },
      {
        "accroche": "Une sortie au resto, ça garde toujours ce petit air de fête même sans occasion, ça casse la routine — vous vous offrez ça souvent vous ?",
        "relance": "Moi je trouve que ça remonte le moral mieux que tout. C'est quoi la sortie resto qui vous a le plus fait de bien récemment ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On voit tout de suite la fierté du chef dans votre façon de présenter les plats — ce plat de ce soir, c'est une création à vous ?",
        "relance": "Moi je serais incapable d'inventer un plat. C'est quoi qui vous inspire quand vous imaginez une nouvelle recette ?"
      },
      {
        "accroche": "Vous scrutez discrètement nos réactions en salle, j'imagine que chaque assiette qui revient vide vous fait plaisir — c'est votre baromètre du soir ?",
        "relance": "Moi je ne vois pas comment on peut cuisiner sans stresser du jugement. C'est quoi qui vous dit qu'un plat est vraiment réussi ?"
      },
      {
        "accroche": "On sent que chaque assiette est dressée comme un petit tableau, vous avez vraiment le souci du détail — c'est important pour vous que ce soit beau autant que bon ?",
        "relance": "Moi je serais incapable de soigner une présentation pareille. C'est quoi qui compte le plus pour vous quand vous envoyez un plat en salle ?"
      },
      {
        "accroche": "Vous parlez de vos plats avec des étoiles dans les yeux, on voit tout de suite la vraie passion — vous cuisinez depuis tout petit ou c'est venu plus tard ?",
        "relance": "Moi je cuisine à peine des pâtes correctement. C'est quoi le moment où vous avez su que la cuisine, ce serait votre vie ?"
      },
      {
        "accroche": "Vous avez encore le tablier marqué du service, on voit que vous sortez à peine des fourneaux — vous ne quittez jamais vraiment votre cuisine des yeux hein ?",
        "relance": "Moi je ne tiendrais pas la chaleur d'un piano cinq minutes. C'est quoi qui vous fait tenir debout derrière les fourneaux tout un service ?"
      },
      {
        "accroche": "Vous prenez le temps d'expliquer le plat en le posant, avec les mots justes, on sent que chaque assiette a son histoire — celle-ci elle vient d'où ?",
        "relance": "Moi j'aime savoir ce que je mange et d'où ça vient. C'est quoi le plat de votre carte qui cache la plus belle histoire ?"
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
      },
      {
        "accroche": "Ça devait chauffer en cuisine, on sentait l'effervescence jusqu'ici — vous prenez toujours le temps de venir saluer les tables malgré le rush ?",
        "relance": "Moi je n'imagine même pas la pression d'un service complet. C'est quoi qui vous procure le plus d'adrénaline pendant un gros soir ?"
      },
      {
        "accroche": "On devine des produits vraiment travaillés, ça sent le circuit court et le producteur du coin — vous choisissez vos fournisseurs vous-même ?",
        "relance": "Moi je fais de plus en plus attention à la provenance de ce que je mange. C'est quoi le producteur ou l'ingrédient dont vous êtes le plus fier ?"
      },
      {
        "accroche": "Le gros du service est passé, vous faites votre tournée des tables tranquillement, c'est le bon moment pour souffler — c'est votre rituel de fin de soirée ça ?",
        "relance": "Moi après un coup de feu pareil je m'écroulerais. C'est quoi qui vous fait le plus plaisir une fois le dernier plat envoyé ?"
      },
      {
        "accroche": "Votre ardoise change tous les jours à ce que je vois, vous devez composer avec ce que vous trouvez le matin — c'est un casse-tête ou un plaisir cette contrainte ?",
        "relance": "Moi j'aurais peur de la page blanche chaque matin. C'est quoi qui vous inspire quand vous découvrez les produits du jour ?"
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
      },
      {
        "accroche": "Transmettre un savoir-faire, former des jeunes en cuisine, c'est une belle responsabilité au fond — vous voyez votre métier aussi comme ça ?",
        "relance": "Moi je trouve précieux ceux qui transmettent leur passion. C'est quoi que vous essayez d'apprendre en priorité à ceux qui débutent avec vous ?"
      },
      {
        "accroche": "Nourrir les gens, c'est presque prendre soin d'eux d'une certaine façon, c'est plus qu'un métier — vous le vivez comme ça vous aussi ?",
        "relance": "Moi je trouve qu'un bon repas peut vraiment consoler quelqu'un. C'est quoi la plus belle réaction qu'un de vos plats ait provoquée chez un client ?"
      },
      {
        "accroche": "C'est un métier qui bouffe les soirs et les week-ends, il faut une sacrée passion pour tenir dans la durée — qu'est-ce qui vous fait aimer ça encore après tout ce temps ?",
        "relance": "Moi je respecte ceux qui bossent quand les autres font la fête. C'est quoi qui vous donne encore la même flamme qu'au premier jour ?"
      },
      {
        "accroche": "On dirait qu'on revient à une cuisine plus simple, plus vraie, moins de chichis et plus de goût — vous sentez ce virage dans votre métier vous aussi ?",
        "relance": "Moi je trouve qu'on redonne enfin sa valeur au produit brut. C'est quoi la mode en cuisine qui vous agace et celle qui vous réjouit ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Je vous sens concentré sur la route, je vais pas vous embêter — mais dites, ça fait combien d'heures que vous roulez aujourd'hui ?",
        "relance": "Moi je serais lessivé à votre place. C'est quoi qui vous aide à tenir sur les longues journées au volant ?"
      },
      {
        "accroche": "Vous conduisez tout en souplesse, on se sent en sécurité tout de suite, c'est agréable — vous faites ça depuis un bon moment j'imagine ?",
        "relance": "Moi je serais incapable de rester calme dans la circulation. C'est quoi qui vous garde aussi zen au volant toute la journée ?"
      },
      {
        "accroche": "Vous avez un thermos de café bien calé à côté de vous, l'équipement du vrai marathonien de la route — c'est votre carburant pour les longues soirées ?",
        "relance": "Moi je dormirais debout après deux heures de volant. C'est quoi votre astuce pour rester bien réveillé sur les fins de journée interminables ?"
      },
      {
        "accroche": "Vous connaissez ce raccourci sans même regarder le GPS, on sent le chauffeur qui a la ville dans la peau — vous roulez dans ce coin depuis longtemps ?",
        "relance": "Moi je serais perdu sans mon téléphone. C'est quoi le quartier que vous préférez traverser dans cette ville, celui que vous ne vous lassez pas de sillonner ?"
      },
      {
        "accroche": "Vous avez mis une petite musique douce en fond, ça rend le trajet apaisant, je vais pas casser l'ambiance — c'est ce qui vous détend sur les longues courses ?",
        "relance": "Moi le silence au volant me pèserait vite. C'est quoi qui vous tient compagnie pendant vos heures de conduite ?"
      },
      {
        "accroche": "Je vois une petite photo accrochée à votre rétro, ça doit faire du bien d'avoir un repère comme ça pendant les longues soirées — c'est votre bulle à vous ce coin-là ?",
        "relance": "Moi j'aurais besoin d'un petit truc perso pour tenir des heures. C'est quoi qui vous rattache à la maison quand vous enchaînez les courses ?"
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
      },
      {
        "accroche": "Les rues éclairées défilent tranquillement, il y a presque quelque chose de paisible à rouler à cette heure — vous préférez les courses de nuit vous aussi ?",
        "relance": "Moi je trouve la ville plus douce une fois la nuit tombée. C'est quoi le moment de votre journée où vous vous sentez le mieux au volant ?"
      },
      {
        "accroche": "On croise à peine deux voitures, la ville semble vous appartenir à cette heure — c'est plus reposant de bosser quand tout est calme comme ça ?",
        "relance": "Moi j'aime cette impression de ville endormie. C'est quoi le trajet que vous prenez toujours plaisir à faire une fois le silence installé ?"
      },
      {
        "accroche": "À cette heure c'est peut-être une de vos dernières courses avant de rentrer, la fin est proche — vous vous fixez un nombre d'heures ou vous roulez tant que ça tourne ?",
        "relance": "Moi je ne saurais jamais quand m'arrêter à votre place. C'est quoi le signe qui vous dit qu'il est temps de rentrer le soir ?"
      },
      {
        "accroche": "Il y a une ambiance particulière la nuit dans une voiture, presque hors du temps, feutrée — c'est un moment que vous appréciez malgré la fatigue vous ?",
        "relance": "Moi je trouve la nuit plus douce mais plus solitaire aussi. C'est quoi qui rend vos trajets de nuit différents de ceux de la journée ?"
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
      },
      {
        "accroche": "Vous voyez sûrement défiler des gens de toutes les vies possibles, chacun avec son histoire, le temps d'une course — ça finit par vous en apprendre sur les gens ?",
        "relance": "Moi je trouve ça vertigineux tous ces destins qui se croisent chez vous. C'est quoi que ces rencontres brèves vous ont appris sur les gens ?"
      },
      {
        "accroche": "Passer ses journées entre deux vies, à conduire des inconnus vers leurs moments importants sans jamais en faire partie, c'est un drôle de rôle — vous le ressentez comment ?",
        "relance": "Moi je me demande ce que ça fait d'être ce passeur discret. C'est quoi le trajet qui vous a le plus touché sans que le client s'en doute une seconde ?"
      },
      {
        "accroche": "Rouler quand tout le monde dort ou fait la fête, c'est un rythme à part, un peu à contre-courant du monde — vous vous y êtes fait avec le temps vous ?",
        "relance": "Moi je crois que je perdrais la notion du jour et de la nuit. C'est quoi le plus dur à sacrifier dans ces horaires décalés ?"
      },
      {
        "accroche": "Au fond vous êtes votre propre patron dans cet habitacle, personne sur le dos, juste la route — c'est cette liberté qui vous a plu dans le métier vous ?",
        "relance": "Moi j'aime bien l'idée de n'avoir de comptes à rendre à personne. C'est quoi qui vous plaît le plus dans le fait de bosser seul comme ça ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous connaissez visiblement chaque raccourci de cette ville, on se sent en sécurité — vous conduisez ici depuis toujours ?",
        "relance": "Moi je débarque et je suis perdu. C'est quoi le quartier que vous préférez dans cette ville ?"
      },
      {
        "accroche": "Vous avez glissé une petite photo du vieux quartier sur votre tableau de bord, ça sent l'attachement à cette ville — vous êtes né ici ?",
        "relance": "Moi je viens juste d'arriver et je ne connais rien. C'est quoi le coin qui vous rend le plus fier de votre ville ?"
      },
      {
        "accroche": "Vous avez ce petit accent qui sent le terroir d'ici à plein nez, ça respire l'enfance dans le coin — vous avez grandi dans ces rues ?",
        "relance": "Moi j'ai un accent tellement neutre qu'on ne sait jamais d'où je viens. C'est quoi le quartier où vous avez passé votre jeunesse dans cette ville ?"
      },
      {
        "accroche": "Vous avez collé un petit fanion de l'équipe locale au rétro, ça sent le vrai supporter du cru — vous êtes de la ville de cœur j'imagine ?",
        "relance": "Moi je n'ai jamais eu de ville à défendre comme ça. C'est quoi qui vous rend le plus fier quand on parle de votre ville à un étranger ?"
      },
      {
        "accroche": "Vous avez un petit porte-clés à l'effigie d'un monument d'ici qui pend au contact, ça sent le fier de sa ville — vous ne vous verriez vivre nulle part ailleurs vous ?",
        "relance": "Moi je n'ai jamais eu ce lien fort avec un endroit. C'est quoi qui vous attache autant à cette ville plutôt qu'une autre ?"
      },
      {
        "accroche": "Vous commentez chaque rue qu'on croise comme un vrai guide, vous devez connaître cette ville par cœur — vous en seriez incollable sur son histoire j'imagine ?",
        "relance": "Moi je serais infoutu de raconter l'histoire de ma propre rue. C'est quoi l'anecdote sur cette ville que personne ne connaît et que vous adorez raconter ?"
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
      },
      {
        "accroche": "On longe cette rivière et je découvre une carte postale à chaque virage, jamais je n'aurais trouvé ça seul — c'est quoi ce pont qu'on vient de passer ?",
        "relance": "Moi je serais resté enfermé dans les grandes avenues touristiques. C'est quoi le point de vue sur la ville que seuls les locaux connaissent ?"
      },
      {
        "accroche": "Là vous ralentissez pile devant une petite place que je n'aurais jamais remarquée, vous avez l'œil du guide — c'est un coin qui compte pour vous celui-là ?",
        "relance": "Moi je passe à côté de tout sans rien voir quand je conduis. C'est quoi le petit endroit de la ville où vous emmèneriez un ami de passage ?"
      },
      {
        "accroche": "On traverse là un quartier qui grouille de vie, ça sent le coin authentique loin des cartes postales — c'est ici qu'il faut venir pour sentir la vraie ville selon vous ?",
        "relance": "Moi je serais passé à côté sans m'arrêter. C'est quoi le quartier où il faut traîner pour comprendre l'âme de cette ville ?"
      },
      {
        "accroche": "On passe devant un endroit qui a l'air d'avoir une sacrée histoire, vous devez en voir des changements dans cette ville au fil des années — elle a beaucoup bougé selon vous ?",
        "relance": "Moi j'aime bien quand une ville garde des traces de son passé. C'est quoi qui a le plus changé ici depuis que vous y roulez ?"
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
      },
      {
        "accroche": "Vous devez sentir l'ambiance de la ville avant tout le monde, la fête, la grogne, les soirs où ça bout — c'est un thermomètre votre voiture non ?",
        "relance": "Moi je ne capte l'humeur d'une ville qu'après des semaines. C'est quoi le soir de l'année où votre ville est vraiment méconnaissable ?"
      },
      {
        "accroche": "À force de sillonner les mêmes rues jour et nuit, vous devez avoir une lecture de la ville que personne d'autre n'a — vous la comprenez mieux que ses habitants non ?",
        "relance": "Moi je crois qu'on ne connaît jamais vraiment la ville où on vit. C'est quoi que les gens d'ici ignorent complètement de leur propre ville selon vous ?"
      },
      {
        "accroche": "On sent que vous portez votre ville haut, prêt à la défendre contre ceux qui n'y voient rien, c'est beau cet attachement — d'où ça vous vient cet amour du coin vous ?",
        "relance": "Moi j'envie ceux qui ont des racines aussi fortes quelque part. C'est quoi qui rend votre ville irremplaçable à vos yeux face à toutes les autres ?"
      },
      {
        "accroche": "On dirait que chaque ville a son caractère, sa personnalité, comme quelqu'un qu'on apprend à connaître — la vôtre, vous la décririez comment à un inconnu ?",
        "relance": "Moi je trouve qu'on ressent l'âme d'un endroit sans savoir l'expliquer. C'est quoi le mot qui résume le mieux le tempérament de votre ville selon vous ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez un crawl super régulier, ça se voit que c'est pas votre première longueur — vous nagez depuis longtemps ?",
        "relance": "Moi je m'essouffle au bout de deux longueurs. C'est quoi le conseil qui vous a fait progresser le plus ?"
      },
      {
        "accroche": "J'ai vu que vous enchaînez les virages culbute sans jamais casser le rythme, ça c'est de la vraie technique — vous avez fait de la compète ?",
        "relance": "Moi je m'arrête au mur à chaque fois comme un débutant. C'est quoi le truc à travailler en priorité pour gagner en fluidité ?"
      },
      {
        "accroche": "Vous respirez toujours du même côté, un rythme réglé comme du papier à musique, ça c'est du travail — vous avez appris avec un coach ou sur le tas ?",
        "relance": "Moi je respire n'importe comment et je bois la tasse. C'est quoi l'exercice qui vous a débloqué la respiration en crawl ?"
      },
      {
        "accroche": "J'ai remarqué que vous alternez les nages sans jamais souffler entre les séries, vous avez un vrai plan de séance dans la tête — vous suivez un programme précis ?",
        "relance": "Moi je fais des longueurs au hasard sans logique. C'est quoi la structure de séance qui vous fait le plus progresser ?"
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
      },
      {
        "accroche": "On a la chance d'avoir un couloir chacun ce matin, ça n'arrive jamais aux heures de pointe — vous adaptez vos horaires pour éviter la foule vous aussi ?",
        "relance": "Moi je fuis les créneaux bondés où on se marche dessus. C'est quoi le pire moment de la semaine pour nager ici selon vous ?"
      },
      {
        "accroche": "Ils ont enfin réparé le chauffage, on ne grelotte plus en entrant dans l'eau ce matin — vous êtes du genre sensible à la température vous ?",
        "relance": "Moi une eau trop froide me coupe toute motivation. C'est quoi qui fait pour vous la différence entre une bonne et une mauvaise séance ici ?"
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
      },
      {
        "accroche": "Il y a un truc rassurant dans la nage, ce silence sous l'eau où plus rien ne vous atteint — c'est cette bulle que vous venez chercher vous aussi ?",
        "relance": "Moi c'est le seul endroit où mon cerveau se tait enfin. C'est quoi que vous ressentez quand vous sortez de l'eau après une bonne séance ?"
      },
      {
        "accroche": "Ce que j'admire chez les nageurs assidus, c'est cette discipline tranquille, sans applaudissements, juste pour soi — c'est ça qui vous porte vous ?",
        "relance": "Moi je lâche dès que personne ne me regarde. C'est quoi votre moteur pour tenir sur le long terme sans jamais rien attendre en retour ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On est plusieurs à surveiller nos petits du coin de l'œil, la routine du mercredi — c'est le vôtre celui qui saute partout ?",
        "relance": "Moi le mien refuse de sortir de l'eau à chaque fois. C'est quoi votre technique pour les convaincre que le cours est fini ?"
      },
      {
        "accroche": "Vous avez la serviette déjà déployée avant même qu'il sorte de l'eau, ça c'est l'expérience du parent rodé — c'est le vôtre le petit poisson là-bas ?",
        "relance": "Moi j'oublie toujours un truc, le bonnet ou les lunettes. C'est quoi votre organisation pour ne rien oublier le mercredi ?"
      },
      {
        "accroche": "On fait tous les deux ce petit signe de la main dès qu'ils lèvent la tête vers les gradins, le réflexe du parent supporter — c'est le vôtre avec le bonnet rouge ?",
        "relance": "Moi le mien me cherche du regard toutes les deux minutes. C'est quoi le petit rituel que vous avez avec le vôtre au bord du bassin ?"
      },
      {
        "accroche": "Vous avez déjà le goûter et la brique de jus prêts dans le sac, l'anticipation du parent qui connaît la faim d'après piscine — c'est le vôtre le petit là au fond ?",
        "relance": "Moi j'oublie toujours le goûter et c'est le drame en sortant. C'est quoi votre astuce pour gérer la faim d'ogre d'après la piscine ?"
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
      },
      {
        "accroche": "On finit par se caler tous sur le même créneau du mercredi, les mêmes parents, les mêmes bancs — vous enchaînez d'autres activités après vous aussi ?",
        "relance": "Moi mon mercredi est un vrai marathon d'activités. C'est quoi le rythme que vous arrivez à tenir avec les vôtres sans exploser ?"
      },
      {
        "accroche": "Le maître-nageur a l'air d'avoir une patience d'ange avec ce groupe, ça rassure de les laisser entre de bonnes mains — le vôtre l'aime bien son moniteur ?",
        "relance": "Moi le mien ne jure que par le sien depuis qu'il a osé sauter du plot. C'est quoi le déclic qui a donné confiance au vôtre dans l'eau ?"
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
      },
      {
        "accroche": "On veut tellement bien faire pour eux qu'on en oublie parfois de juste profiter de ces années — vous arrivez à savourer l'instant vous ?",
        "relance": "Moi je cours tellement que je rate le moment présent. C'est quoi le souvenir tout simple avec les vôtres qui vous rend le plus heureux ?"
      },
      {
        "accroche": "Ces petits progrès qu'on célèbre, une brasse, une tête sous l'eau, ce sont eux qui construisent leur confiance pour la vie — vous le ressentez comme ça vous aussi ?",
        "relance": "Moi je réalise que ce qui se joue là dépasse la natation. C'est quoi la qualité que vous espérez le plus voir grandir chez le vôtre ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez repéré les croissants qui sortent du four, moi aussi je les guette — vous craquez pour lesquels d'habitude ?",
        "relance": "Moi j'hésite toujours entre pain au choc et croissant. C'est quoi votre péché mignon du matin ?"
      },
      {
        "accroche": "Vous avez déjà la baguette bien serrée sous le bras, prêt à filer — vous êtes plutôt tradition ou pain de campagne vous ?",
        "relance": "Moi je change d'avis à chaque fois devant le comptoir. C'est quoi le pain que vous prenez les yeux fermés ?"
      },
      {
        "accroche": "Vous fixez la vitrine des viennoiseries avec la même gourmandise que moi, difficile de résister le matin — vous êtes plutôt sucré ou salé au réveil vous ?",
        "relance": "Moi je craque toujours pour le sucré alors que je devrais me tenir. C'est quoi la petite douceur qui vous fait oublier vos bonnes résolutions ?"
      },
      {
        "accroche": "Vous avez sorti votre monnaie pile à l'avance, prêt à filer sans traîner, le vrai pro du matin — vous prenez toujours la même chose pour aller plus vite ?",
        "relance": "Moi je fais poireauter toute la file à hésiter devant le comptoir. C'est quoi la commande que vous pourriez passer les yeux fermés le matin ?"
      },
      {
        "accroche": "Vous avez déjà un café à la main et vous visez le comptoir, le combo parfait du matin — c'est votre rituel café-viennoiserie pour bien démarrer vous ?",
        "relance": "Moi sans mon café le matin je ne suis même pas là. C'est quoi le duo gagnant qui vous lance vraiment la journée ?"
      },
      {
        "accroche": "Vous lorgnez le dernier pain au chocolat en vitrine, je l'avais repéré aussi, va falloir jouer serré — vous seriez prêt à vous battre pour lui vous ?",
        "relance": "Moi je serais capable de doubler tout le monde pour le dernier. C'est quoi la viennoiserie pour laquelle vous feriez la queue une heure ?"
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
      },
      {
        "accroche": "Même à cette heure il faut jouer des coudes tellement c'est plein, elle a une sacrée réputation cette boulangerie — c'est votre cantine du matin celle-ci ?",
        "relance": "Moi je viens d'atterrir dans le quartier et je teste tout. C'est quoi le truc de cette maison pour lequel ça vaut le coup de faire la queue ?"
      },
      {
        "accroche": "On entend le four qui tourne derrière, la fournée de dix heures va bientôt sortir, ça se sent — vous calez votre passage sur les sorties de fournée vous ?",
        "relance": "Moi je viens toujours à la mauvaise heure quand tout est refroidi. C'est quoi le moment idéal pour avoir le pain encore tiède selon vous ?"
      },
      {
        "accroche": "À cette heure c'est le défilé des gens pressés qui attrapent leur pain avant le boulot, un vrai ballet — vous faites partie des habitués de la première heure vous ?",
        "relance": "Moi je viens toujours dans la même tranche horaire par habitude. C'est quoi qui vous fait venir à cette heure précise plutôt qu'une autre ?"
      },
      {
        "accroche": "On m'a dit que leur spécialité valait le détour, c'est pour ça que je tente ma chance ici — vous confirmez la réputation de la maison vous qui devez connaître ?",
        "relance": "Moi je me fie toujours au bouche-à-oreille pour ces choses-là. C'est quoi le produit de cette boulangerie qui mérite vraiment qu'on fasse la queue ?"
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
      },
      {
        "accroche": "C'est fou comme une simple viennoiserie peut adoucir même les matins les plus gris, un vrai réconfort — vous avez ce genre de petite parenthèse vous aussi ?",
        "relance": "Moi c'est ma récompense pour affronter la journée. C'est quoi le petit réconfort dont vous ne pourriez pas vous passer le matin ?"
      },
      {
        "accroche": "Il y a des gestes du matin qu'on répète sans y penser mais qui nous ancrent, comme ce passage au chaud avant le froid dehors — vous tenez à ces habitudes vous ?",
        "relance": "Moi si je saute mon rituel du matin je suis décalé toute la journée. C'est quoi l'habitude toute bête qui vous met dans les bons rails ?"
      },
      {
        "accroche": "Même pressé, on trouve toujours deux minutes pour se faire ce petit plaisir, comme si on refusait de sacrifier ça — vous non plus vous ne zappez jamais ce moment vous ?",
        "relance": "Moi je zappe le petit-déj mais jamais ma viennoiserie. C'est quoi le petit plaisir que vous refusez de sacrifier même les jours de rush ?"
      },
      {
        "accroche": "Il y a des odeurs de boulangerie qui nous ramènent direct en enfance, c'est plus fort que nous — ça vous fait le même effet à vous cette odeur au réveil ?",
        "relance": "Moi ça me rappelle les dimanches matin chez mes grands-parents. C'est quoi le goût ou l'odeur qui vous replonge direct en enfance ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On dirait que la boulangère connaît déjà votre commande par cœur, ça c'est le vrai statut d'habitué — vous venez ici depuis des années ?",
        "relance": "Moi je rêve d'être reconnu comme ça quelque part. C'est quoi qui fait qu'on s'attache à un commerce de quartier ?"
      },
      {
        "accroche": "Vous avez lancé un bonjour à la cantonade en entrant, tout le monde vous connaît ici — ça fait partie de votre tournée du matin ce petit passage ?",
        "relance": "Moi j'aimerais avoir ce genre de rituel qui rythme mes journées. C'est quoi votre parcours du matin dans le quartier ?"
      },
      {
        "accroche": "Vous avez votre place attitrée au comptoir et un mot pour chacun, on dirait que vous tenez la maison — vous faites partie des murs ici depuis longtemps ?",
        "relance": "Moi je passe partout inaperçu, personne ne retient mon nom. C'est quoi qui fait qu'on finit par se sentir chez soi dans un commerce ?"
      },
      {
        "accroche": "La vendeuse a déjà mis votre pain de côté avant même que vous demandiez, ça c'est le privilège du fidèle — vous venez à la même heure tous les jours ?",
        "relance": "Moi je rêve qu'on anticipe mes envies comme ça quelque part. C'est quoi le petit rituel qui vous fait tenir à ce rendez-vous du matin ?"
      },
      {
        "accroche": "Vous avez sorti votre cabas comme si vous connaissiez la maison par cœur, ça sent le rituel bien rodé — vous faites votre tournée des commerces chaque matin vous ?",
        "relance": "Moi j'aimerais avoir cette petite routine qui rythme mes journées. C'est quoi votre parcours immuable du matin dans le coin ?"
      },
      {
        "accroche": "Vous avez lancé une petite blague à la vendeuse comme un vieux copain, on voit les années de complicité — ça fait combien de temps que vous vous connaissez tous ?",
        "relance": "Moi j'adorerais avoir ce genre de complicité avec mes commerçants. C'est quoi qui crée ce lien à force, au-delà du simple bonjour ?"
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
      },
      {
        "accroche": "On entend les gens se donner des nouvelles au comptoir, c'est plus qu'une boulangerie ici, c'est un lieu de vie — vous connaissez toute la petite tribu du matin vous ?",
        "relance": "Moi je viens d'arriver et je regarde tout ça de loin. C'est quoi le meilleur moyen de se faire adopter par les habitués d'un coin ?"
      },
      {
        "accroche": "Le quartier a l'air d'avoir gardé son âme de village malgré tout, avec ses commerçants qu'on salue par leur prénom — c'était déjà comme ça avant vous ?",
        "relance": "Moi je cherche justement un quartier avec cette chaleur-là. C'est quoi qui donne encore cette ambiance de village à ce coin selon vous ?"
      },
      {
        "accroche": "Vous devez avoir vu ce quartier changer au fil des années, les commerces qui vont et viennent — il reste beaucoup de l'esprit d'avant selon vous ?",
        "relance": "Moi je débarque et je n'ai pas connu tout ça. C'est quoi qui a disparu du quartier et qui vous manque le plus aujourd'hui ?"
      },
      {
        "accroche": "Vous saluez la moitié des gens qu'on croise sur le trottoir, on dirait que tout le monde vous connaît ici — c'est le genre de quartier où on se dit tous bonjour encore ?",
        "relance": "Moi je ne connais même pas le nom de mes voisins de palier. C'est quoi qui fait qu'un quartier reste soudé comme le vôtre ?"
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
      },
      {
        "accroche": "Ces petits bonjours du matin, ces visages qu'on reconnaît, c'est ça qui empêche une ville de devenir froide — vous y tenez comme à un trésor vous aussi ?",
        "relance": "Moi je crois que ces liens-là valent de l'or et qu'on les néglige. C'est quoi la rencontre de quartier qui a le plus compté pour vous ?"
      },
      {
        "accroche": "On parle de solitude partout, et pourtant il suffit d'un lieu comme ici pour retisser du lien tous les matins — vous croyez que ça peut sauver un quartier vous ?",
        "relance": "Moi je pense qu'on sous-estime le pouvoir de ces petits rendez-vous. C'est quoi qui manquerait vraiment aux gens du coin si ce lieu fermait ?"
      },
      {
        "accroche": "Les gens comme vous qui connaissent le quartier depuis toujours, c'est une mémoire vivante qu'on n'écoute plus assez — vous trouvez qu'on prend encore le temps d'écouter les anciens vous ?",
        "relance": "Moi je regrette de ne pas avoir plus questionné mes grands-parents. C'est quoi ce que votre génération aurait à transmettre qu'on est en train de perdre ?"
      },
      {
        "accroche": "Il y a quelque chose de précieux dans ces petites habitudes qui rythment les journées, ça leur donne une saveur — c'est ce qui rend vos matins agréables à vous aussi ?",
        "relance": "Moi je cours tellement que mes journées se ressemblent toutes. C'est quoi le secret pour garder du plaisir dans les gestes de tous les jours ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "On a tous les deux cette tête de gens qui pensaient en avoir pour cinq minutes — vous êtes là depuis longtemps aussi ?",
        "relance": "Moi je venais pour un truc censé être rapide. C'est quoi votre astuce pour ne pas péter un câble dans ces files ?"
      },
      {
        "accroche": "Vous regardez votre montre toutes les trente secondes, je fais exactement pareil — vous aviez prévu autre chose juste après j'imagine ?",
        "relance": "Moi j'ai un truc qui m'attend derrière et ça me stresse. C'est quoi qui vous met le plus en retard aujourd'hui ?"
      },
      {
        "accroche": "Vous soupirez à peu près au même rythme que moi devant ce guichet qui n'avance pas, on est raccord — vous pensiez en avoir pour deux minutes vous aussi ?",
        "relance": "Moi je m'étais dit un aller-retour rapide, tu parles. C'est quoi qui vous fait le plus enrager dans ce genre d'attente sans fin ?"
      },
      {
        "accroche": "Vous avez déjà rangé et ressorti vos papiers trois fois, signe qu'on désespère de passer un jour — vous êtes venu pour un truc simple aussi j'imagine ?",
        "relance": "Moi je venais pour une signature de rien du tout. C'est quoi la démarche la plus absurde pour laquelle on vous a déjà fait poireauter ici ?"
      },
      {
        "accroche": "Vous tapez du pied à un rythme qui trahit un ras-le-bol que je partage totalement — vous aviez sûrement mieux à faire de votre après-midi vous aussi ?",
        "relance": "Moi j'avais mille trucs de prévus après ça. C'est quoi qui vous agace le plus, l'attente ou l'impression de perdre votre temps pour rien ?"
      },
      {
        "accroche": "On fixe tous les deux ce seul guichet ouvert en espérant un miracle, la solidarité des désespérés — vous y croyez encore à passer avant la fermeture vous ?",
        "relance": "Moi j'ai renoncé à faire des plans pour la fin d'après-midi. C'est quoi le record d'attente absurde que vous ayez déjà battu quelque part ?"
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
      },
      {
        "accroche": "On nous répète de tout faire en ligne et pourtant nous voilà à faire la queue comme il y a vingt ans — vous auriez préféré régler ça de chez vous vous aussi ?",
        "relance": "Moi j'ai essayé leur appli et j'ai fini par abandonner. C'est quoi la démarche que vous n'arrivez jamais à boucler sans venir sur place ?"
      },
      {
        "accroche": "Ils ferment deux guichets pile à l'heure où tout le monde débarque, c'est un timing à se demander s'ils le font exprès — vous avez déjà compris leur logique vous ?",
        "relance": "Moi je crois que personne ne comprend leurs horaires. C'est quoi le créneau miracle que vous visez pour éviter cette galère ?"
      },
      {
        "accroche": "Le compteur des numéros est bloqué depuis dix minutes, on se demande s'il fonctionne encore, c'est du grand art — vous avez compris comment ça marche vous ?",
        "relance": "Moi je crois que ce tableau se moque de nous. C'est quoi le pire système d'attente sur lequel vous soyez déjà tombé ?"
      },
      {
        "accroche": "Il faut poser une demi-journée pour venir tellement leurs horaires collent avec ceux de tout le monde qui bosse — vous avez dû vous arranger pour être là vous aussi ?",
        "relance": "Moi j'ai carrément posé mon après-midi pour ça. C'est quoi le truc qui vous a le plus compliqué la vie à cause de ces horaires impossibles ?"
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
      },
      {
        "accroche": "On dirait que notre époque nous vole notre temps par petits bouts, une file par-ci, une attente par-là — vous avez cette impression de courir après les minutes vous aussi ?",
        "relance": "Moi j'ai le sentiment de passer ma vie à attendre quelque chose. C'est quoi que vous feriez de tout ce temps si on vous le rendait ?"
      },
      {
        "accroche": "À force de tout automatiser, on a l'impression d'être devenu un numéro qu'on fait patienter sans égard — vous ressentez cette déshumanisation vous aussi ?",
        "relance": "Moi je regrette le temps où un guichetier vous connaissait. C'est quoi le petit geste humain qui rendrait ces démarches moins glaçantes selon vous ?"
      },
      {
        "accroche": "On nous promet que tout va plus vite et pourtant on n'a jamais autant attendu, c'est un comble — vous avez l'impression d'avoir gagné du temps avec le progrès vous ?",
        "relance": "Moi je cours plus qu'avant alors que tout est censé être plus rapide. C'est quoi qui vous ferait vraiment gagner du temps dans votre quotidien ?"
      },
      {
        "accroche": "On a tous désappris à attendre, le moindre délai nous rend fou aujourd'hui, moi le premier — vous trouvez qu'on est devenus trop impatients nous aussi vous ?",
        "relance": "Moi je m'énerve pour trois minutes de retard maintenant. C'est quoi qui vous aide à relativiser quand tout va trop lentement ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de quelqu'un qui gère ses affaires tranquillement, sans stress — vous venez pour un projet ou juste de la routine ?",
        "relance": "Moi je viens de me lancer dans un projet un peu fou. C'est quoi votre rapport à ces grandes décisions financières ?"
      },
      {
        "accroche": "Vous avez sorti votre dossier bien rangé, tout est classé, ça se voit que vous êtes organisé — c'est pour un projet précis que vous préparez tout ça ?",
        "relance": "Moi je débarque toujours avec mes papiers en vrac. C'est quoi votre méthode pour garder vos affaires aussi carrées ?"
      },
      {
        "accroche": "Vous avez cette assurance tranquille de quelqu'un qui sait exactement pourquoi il est là, ça détonne dans une banque — c'est un projet mûri de longue date vous ?",
        "relance": "Moi j'avance toujours à tâtons avec ces choses-là. C'est quoi qui vous rend aussi serein face aux décisions d'argent ?"
      },
      {
        "accroche": "Vous avez pris le temps de tout relire avant de passer au guichet, pas du genre à foncer tête baissée — vous préparez toujours vos rendez-vous comme ça vous ?",
        "relance": "Moi je découvre mes propres papiers sur place à chaque fois. C'est quoi votre méthode pour ne jamais vous laisser surprendre par ces démarches ?"
      },
      {
        "accroche": "Vous avez sorti un petit carnet où vous notez vos chiffres, la vieille école qui a du bon — vous tenez vos comptes à la main comme ça vous ?",
        "relance": "Moi je ne sais jamais où passe mon argent, tout est flou. C'est quoi votre système pour garder l'œil sur vos finances ?"
      },
      {
        "accroche": "Vous attendez votre tour sans la moindre impatience, plongé dans vos papiers, ça change des gens tendus ici — vous prenez toujours ces démarches avec ce calme vous ?",
        "relance": "Moi ce genre d'endroit me stresse d'avance. C'est quoi votre secret pour rester zen face à la paperasse et aux chiffres ?"
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
      },
      {
        "accroche": "À cette heure c'est presque désert, on a l'agence pour nous, un vrai luxe — vous avez appris à viser les bons horaires vous aussi ?",
        "relance": "Moi je fais tout pour éviter la cohue de midi. C'est quoi votre astuce pour que ces passages restent les plus rapides possible ?"
      },
      {
        "accroche": "On hésite tous entre le comptoir express et le rendez-vous conseiller, jamais sûr de faire le bon choix — vous, vous fonctionnez comment d'habitude ici ?",
        "relance": "Moi je regrette toujours mon choix une fois sur place. C'est quoi qui vous décide à passer en agence plutôt qu'à tout faire par écran ?"
      },
      {
        "accroche": "On est parmi les premiers ce matin, ça a un côté agréable une agence encore endormie — vous aimez expédier ce genre de corvée dès le matin vous ?",
        "relance": "Moi je préfère régler l'ennuyeux en premier pour être tranquille. C'est quoi votre façon d'organiser vos corvées pour qu'elles pèsent moins ?"
      },
      {
        "accroche": "On est quelques irréductibles à venir en personne plutôt que de tout faire par écran, ça a du bon le contact humain — vous préférez traiter ces choses en face vous aussi ?",
        "relance": "Moi je ne fais confiance à personne au téléphone pour l'argent. C'est quoi qui vous décide à vous déplacer plutôt qu'à cliquer de chez vous ?"
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
      },
      {
        "accroche": "L'argent c'est presque tabou, on n'ose jamais vraiment en parler alors que ça nous ronge tous un peu — vous êtes du genre à en discuter librement vous ?",
        "relance": "Moi j'ai été élevé à ne jamais en parler et ça me pèse. C'est quoi le rapport à l'argent qu'on vous a transmis enfant vous ?"
      },
      {
        "accroche": "On passe notre vie à mettre de côté pour un après qui n'arrive jamais, c'est un drôle d'équilibre à trouver — vous penchez vers l'épargne ou vers l'instant vous ?",
        "relance": "Moi j'ai peur de sacrifier le présent pour un futur incertain. C'est quoi qui vous aide à trouver le bon dosage entre prévoir et profiter ?"
      },
      {
        "accroche": "Au fond l'argent n'est qu'un moyen, c'est ce qu'on en fait qui compte vraiment, les projets, les gens — vous voyez ça comme ça vous aussi ?",
        "relance": "Moi j'essaie de ne pas en faire une fin en soi mais c'est dur. C'est quoi qui donne du sens à l'argent que vous mettez de côté ?"
      },
      {
        "accroche": "On travaille tous un peu pour se sentir en sécurité, ce fameux matelas qui rassure — c'est ça qui vous motive vous ou vous cherchez autre chose ?",
        "relance": "Moi la sécurité passe avant tout pour moi, peut-être trop. C'est quoi qui vous rassure vraiment quand vous pensez à l'avenir ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous êtes captivé par cette toile, ça se voit — moi je reste devant sans savoir ce que ça me fait, c'est quoi qui vous touche là-dedans ?",
        "relance": "Moi j'ai toujours peur de ne pas comprendre l'art. C'est quoi votre façon de regarder une œuvre pour vraiment la ressentir ?"
      },
      {
        "accroche": "Ça fait un moment que vous reculez puis vous vous rapprochez de ce tableau, vous cherchez quelque chose de précis dedans — vous voyez un détail qui m'échappe ?",
        "relance": "Moi je passe souvent à côté de l'essentiel dans une œuvre. C'est quoi le premier truc que vous regardez quand vous êtes devant une toile ?"
      },
      {
        "accroche": "Vous avez incliné la tête devant cette toile comme pour l'écouter, c'est beau à voir — moi je reste sec, c'est quoi qui vous parle autant là-dedans ?",
        "relance": "Moi j'ai toujours peur de passer à côté du sens. C'est quoi qui fait qu'une œuvre vous attrape alors qu'une autre vous laisse froid ?"
      },
      {
        "accroche": "Vous êtes revenu deux fois devant ce même tableau alors qu'il y en a plein d'autres, il doit avoir un truc particulier — c'est quoi qui vous ramène vers lui ?",
        "relance": "Moi je survole tout sans vraiment m'arrêter. C'est quoi le signe qui vous dit qu'une œuvre mérite qu'on lui donne du temps ?"
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
      },
      {
        "accroche": "L'accrochage est vraiment pensé, la lumière change à chaque salle et guide le regard — vous êtes sensible à cette mise en scène vous aussi ?",
        "relance": "Moi je n'avais jamais réalisé à quel point l'éclairage comptait. C'est quoi la salle de cette expo qui vous a le plus saisi ?"
      },
      {
        "accroche": "On chuchote presque instinctivement ici, comme dans une église, l'ambiance impose le respect — c'est ce recueillement que vous venez chercher dans les galeries vous ?",
        "relance": "Moi j'ai besoin de ce calme pour vraiment voir les choses. C'est quoi le lieu d'art où vous vous êtes senti le plus apaisé ?"
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
      },
      {
        "accroche": "C'est étrange comme une image peut réveiller des émotions qu'on croyait enfouies, mieux que des mots parfois — l'art vous fait cet effet-là à vous aussi ?",
        "relance": "Moi une toile peut me nouer la gorge sans que je sache pourquoi. C'est quoi l'œuvre qui vous a ému aux larmes sans crier gare ?"
      },
      {
        "accroche": "On court après l'utile toute la journée et puis on vient ici perdre du temps devant du beau, comme un contrepoids nécessaire — vous le vivez comme ça vous aussi ?",
        "relance": "Moi je crois que c'est cet inutile-là qui me tient debout. C'est quoi que l'art vient équilibrer dans votre vie de tous les jours ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Attendez, c'est vous l'artiste derrière tout ça ? On sent une vraie signature, une patte — c'est quoi qui vous a mené à ce style ?",
        "relance": "Moi je suis fasciné par ceux qui créent. C'est quoi le déclic qui vous a fait devenir artiste ?"
      },
      {
        "accroche": "Il y a cette couleur qui revient dans presque toutes vos toiles, comme une obsession — c'est un fil rouge conscient ou ça vient tout seul ?",
        "relance": "Moi je suis intrigué par ce qui hante les artistes. C'est quoi le thème qui revient sans que vous le décidiez dans votre travail ?"
      },
      {
        "accroche": "On sent une vraie évolution entre vos premières toiles et les dernières, comme un chemin qui se dessine — c'est venu progressivement ce style ou d'un coup ?",
        "relance": "Moi je suis fasciné par la façon dont un artiste se trouve. C'est quoi le moment où vous avez senti que vous teniez enfin votre voix ?"
      },
      {
        "accroche": "Il y a une matière incroyable dans vos toiles, on dirait qu'on pourrait les toucher, ça sort de l'ordinaire — c'est une technique que vous avez inventée vous ?",
        "relance": "Moi je ne soupçonnais pas qu'on pouvait faire ça avec de la peinture. C'est quoi la contrainte technique qui vous pousse le plus à expérimenter ?"
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
      },
      {
        "accroche": "Vous surprenez peut-être des bribes de ce que les gens murmurent devant vos toiles ce soir, ça doit être troublant — vous écoutez ou vous fuyez ces commentaires vous ?",
        "relance": "Moi je serais suspendu à chaque réaction. C'est quoi la remarque d'un visiteur qui vous a le plus touché lors d'un vernissage ?"
      },
      {
        "accroche": "Un vernissage c'est le grand jour mais aussi le lâcher-prise, l'œuvre ne vous appartient plus vraiment ce soir — vous vivez ça comme un adieu ou une naissance vous ?",
        "relance": "Moi je ne saurais pas laisser partir quelque chose que j'ai créé. C'est quoi le plus dur, le moment de finir une toile ou celui de la montrer ?"
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
      },
      {
        "accroche": "L'inspiration ça ne se commande pas, il doit y avoir des périodes de désert entre les élans — comment vous traversez les moments où rien ne vient vous ?",
        "relance": "Moi la page blanche me paralyserait complètement. C'est quoi votre façon de rallumer la flamme quand l'envie de créer s'éteint ?"
      },
      {
        "accroche": "Mettre une part si intime de soi sous les yeux de tous, c'est presque se mettre à nu, ça demande un courage fou — d'où vous vient cette force de vous exposer vous ?",
        "relance": "Moi je garderais tout ça caché par peur du jugement. C'est quoi qui vous donne le cran de montrer une part aussi personnelle de vous ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez la course du matin dans le regard, café dans une main, téléphone dans l'autre — grosse journée qui vous attend ?",
        "relance": "Moi j'ai l'impression de commencer déjà à la bourre. C'est quoi votre carburant pour tenir un matin chargé ?"
      },
      {
        "accroche": "Vous pianotez déjà des mails d'une main en surveillant les étages qui défilent, le vrai multitâche du matin — ça carbure fort chez vous aujourd'hui ?",
        "relance": "Moi je n'arrive même pas à lire un mail avant mon café. C'est quoi la première chose que vous réglez en arrivant au bureau ?"
      },
      {
        "accroche": "Vous jetez des coups d'œil nerveux à votre montre comme si la réunion avait déjà commencé sans vous — un rendez-vous qui vous met la pression dès l'arrivée ?",
        "relance": "Moi je commence toujours ma journée en courant après le temps. C'est quoi le truc qui vous stresse le plus dès le pied posé au bureau ?"
      },
      {
        "accroche": "Vous serrez votre badge dans une main et un dossier dans l'autre, prêt à dégainer dès l'ouverture des portes — grosse présentation qui vous attend là-haut ?",
        "relance": "Moi rien que d'y penser j'ai les mains moites. C'est quoi votre technique pour aborder un rendez-vous important sans vous laisser dévorer par le trac ?"
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
      },
      {
        "accroche": "Ces quelques secondes coincés ensemble, c'est bien le seul moment où personne ne peut nous demander quoi que ce soit — vous montez à quel étage vous ?",
        "relance": "Moi j'avoue que je savoure cette petite pause forcée. C'est quoi le service où vous filez si vite tous les matins ?"
      },
      {
        "accroche": "On se croise sûrement tous les jours dans cette cabine sans jamais un mot, c'est un peu triste quand on y pense — on rompt la malédiction du silence pour une fois ?",
        "relance": "Moi je trouve ça fou de partager un immeuble sans se connaître. C'est quoi votre boîte, qu'on sache enfin qui travaille juste à côté ?"
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
      },
      {
        "accroche": "On enchaîne les matins pied au plancher sans jamais reprendre son souffle, un vrai sprint permanent — vous sentez que ce rythme finit par peser vous aussi ?",
        "relance": "Moi je crois que je carbure à l'adrénaline sans plus savoir m'arrêter. C'est quoi le signal qui vous dit qu'il faut vraiment lever le pied ?"
      },
      {
        "accroche": "On se laisse happer par la machine dès le réveil sans jamais se demander si tout ça nous rend heureux — ça vous traverse l'esprit parfois au milieu du rush vous ?",
        "relance": "Moi la question me revient de plus en plus fort. C'est quoi qui donnerait enfin un vrai sens à toutes ces journées à cent à l'heure pour vous ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous hésitez sur les boutons, je parie que c'est un de vos premiers jours ici — je me trompe ?",
        "relance": "Moi je me souviens d'être arrivé complètement perdu. C'est quoi le poste que vous venez de décrocher ?"
      },
      {
        "accroche": "Votre badge est encore tout neuf et brillant, ça sent le tout premier jour ça — je me trompe ?",
        "relance": "Moi le mien est rayé de partout tellement ça fait longtemps. C'est quoi l'équipe que vous venez rejoindre ?"
      },
      {
        "accroche": "Vous scrutez le plan des étages affiché à côté des boutons, le réflexe classique du tout premier jour — je me trompe ou vous débarquez aujourd'hui ?",
        "relance": "Moi j'étais tellement perdu à mes débuts que je descendais au mauvais étage. C'est quoi le service que vous venez rejoindre ?"
      },
      {
        "accroche": "Vous avez ce sac tout neuf et ce petit air de découvrir les lieux, ça sent la première prise de poste — vous commencez juste ici ?",
        "relance": "Moi je me revois débarquer sans savoir où poser mes affaires. C'est quoi le poste pour lequel vous venez d'être pris ?"
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
      },
      {
        "accroche": "Ne vous fiez pas à la numérotation des étages, elle est complètement piégeuse, on s'y perd tous au début — vous cherchez quel service au juste ?",
        "relance": "Moi j'ai tourné trois fois avant de trouver mon bureau le premier jour. C'est quoi qui vous rassurerait le plus pour vos débuts ici ?"
      },
      {
        "accroche": "Si vous voulez le bon plan, le café du troisième est mille fois meilleur que celui du hall, un secret qu'on met des semaines à découvrir — vous êtes à quel étage vous ?",
        "relance": "Moi personne ne m'avait filé les bons tuyaux en arrivant. C'est quoi le genre de petit coup de pouce qui vous ferait vous sentir accueilli ici ?"
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
      },
      {
        "accroche": "Un premier jour c'est toute une vie qui bascule, on quitte ses repères pour l'inconnu, ça brasse pas mal d'émotions — vous êtes plutôt fébrile ou impatient là ?",
        "relance": "Moi ces débuts me faisaient vibrer autant que trembler. C'est quoi qui vous a le plus attiré vers ce nouveau poste ?"
      },
      {
        "accroche": "Oser tout recommencer ailleurs quand on avait ses habitudes, c'est un vrai pari sur soi — c'était mûri de longue date cette décision de changer vous ?",
        "relance": "Moi il m'a fallu des mois avant d'oser franchir le pas d'un nouveau départ. C'est quoi le déclic qui vous a poussé à tenter cette aventure ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air aussi résigné que moi devant cette file qui n'avance pas — vous venez pour un colis vous aussi ?",
        "relance": "Moi je viens récupérer un truc censé être livré chez moi. C'est quoi votre technique pour prendre votre mal en patience ici ?"
      },
      {
        "accroche": "Vous avez le petit papier jaune à la main comme moi, le fameux avis de passage qu'on n'a jamais quand il faut — vous l'avez raté de peu aussi ?",
        "relance": "Moi le facteur passe toujours pile quand je sors cinq minutes. C'est quoi votre astuce pour ne jamais louper une livraison ?"
      },
      {
        "accroche": "Vous fixez le tableau d'affichage des guichets avec le même désespoir tranquille que moi, on est logés à la même enseigne — c'est un colis qui vous amène aussi ?",
        "relance": "Moi j'attends un paquet que le facteur n'a jamais réussi à me livrer. C'est quoi la chose qui vous fait tenir sans exploser dans ces files interminables ?"
      },
      {
        "accroche": "Vous vérifiez votre numéro de ticket toutes les dix secondes en priant qu'on l'appelle, exactement mon manège — vous êtes loin dans la file vous aussi ?",
        "relance": "Moi je crois que le mien ne passera jamais. C'est quoi votre stratégie pour occuper l'esprit pendant tout ce temps mort ?"
      },
      {
        "accroche": "Vous jonglez avec un colis pas commode à porter, on voit que vous n'êtes pas là par plaisir non plus — vous en avez pour longtemps à patienter avec ça vous ?",
        "relance": "Moi j'ai un paquet encombrant qui me scie les bras. C'est quoi votre technique pour tenir sans craquer dans une file pareille ?"
      },
      {
        "accroche": "Vous consultez l'heure sans arrêt, on partage visiblement la même angoisse de voir l'après-midi y passer — vous aviez autre chose de prévu vous aussi ?",
        "relance": "Moi j'ai un truc derrière que je vais finir par rater. C'est quoi la fois où une file d'attente vous a fait louper quelque chose d'important ?"
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
      },
      {
        "accroche": "On dirait que le temps s'étire différemment dans ce bureau de poste, comme figé, avec ses guichets à moitié fermés — vous êtes obligé d'y passer souvent vous ?",
        "relance": "Moi je repousse toujours au dernier moment tellement je redoute l'attente. C'est quoi l'horaire le plus vivable pour venir ici selon vous ?"
      },
      {
        "accroche": "Ils ont mis un panneau d'excuse pour le manque de personnel, ça résume bien l'ambiance du jour — vous avez déjà tenté de venir un autre créneau vous ?",
        "relance": "Moi j'ai essayé toutes les heures sans jamais trouver la bonne. C'est quoi le jour de la semaine où c'est le moins cauchemardesque ici selon vous ?"
      },
      {
        "accroche": "Le pauvre guichetier fait tout tout seul, on ne peut même pas lui en vouloir vu la cadence — vous venez souvent affronter ça ou c'est exceptionnel vous ?",
        "relance": "Moi je le plains autant que je nous plains. C'est quoi l'heure creuse que vous visez pour éviter ce genre de scène ?"
      },
      {
        "accroche": "Ils vont bientôt fermer et la file n'a pas bougé, on joue tous contre la montre là — vous pensez passer avant le rideau vous ?",
        "relance": "Moi je me suis déjà fait recaler à une minute de la fermeture. C'est quoi le pire moment pour tomber ici selon votre expérience ?"
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
      },
      {
        "accroche": "On a tout accéléré dans nos vies, sauf peut-être ici où il faut réapprendre à patienter de force — vous le prenez comme une punition ou comme une pause vous ?",
        "relance": "Moi j'ai complètement perdu l'habitude d'attendre sans m'agacer. C'est quoi qui vous aide à faire la paix avec ces moments où tout ralentit ?"
      },
      {
        "accroche": "C'est marrant, on fuit tous ces endroits mais ce sont peut-être les derniers où on croise vraiment ses voisins de galère — vous y voyez du positif malgré tout vous ?",
        "relance": "Moi je me surprends parfois à discuter avec l'inconnu de la file. C'est quoi la rencontre improbable que vous avez déjà faite en faisant la queue ?"
      },
      {
        "accroche": "Ces bureaux disparaissent un à un, bientôt il faudra tout faire seul derrière un écran, ça a un côté triste — ça vous manquerait ce genre d'endroit malgré la galère vous ?",
        "relance": "Moi je râle mais je serais nostalgique s'ils fermaient. C'est quoi le service à l'ancienne dont la disparition vous attristerait le plus ?"
      },
      {
        "accroche": "Au fond c'est peut-être un des rares moments où on est forcé de ne rien faire, une pause qu'on ne s'accorde jamais autrement — vous arrivez à en profiter un peu vous ?",
        "relance": "Moi j'ai oublié comment ne rien faire sans culpabiliser. C'est quoi qui vous occuperait l'esprit agréablement pendant une attente comme celle-là ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez une pile de colis impressionnante, ça sent le petit business qui tourne — c'est vous qui vendez tout ça ?",
        "relance": "Moi je rêve de me lancer dans quelque chose à moi. C'est quoi que vous vendez, si c'est pas indiscret ?"
      },
      {
        "accroche": "Vos colis sont emballés au carré, étiquettes nickel, on voit que vous avez l'habitude et le souci du détail — vous expédiez dans toute la France ?",
        "relance": "Moi je bricole mes envois n'importe comment. C'est quoi le truc que vous avez appris à force pour un emballage qui tient la route ?"
      },
      {
        "accroche": "Vous avez des étiquettes de suivi par dizaines qui dépassent de votre sac, ça sent le carnet de commandes bien rempli — les affaires marchent en ce moment ?",
        "relance": "Moi j'ai toujours voulu monter une boutique en ligne sans jamais oser. C'est quoi le produit qui part le mieux chez vous en ce moment ?"
      },
      {
        "accroche": "Vous connaissez déjà le tarif et le format par cœur avant même que le guichetier ouvre la bouche, ça c'est le vrai vétéran de l'expédition — vous envoyez tous les jours ?",
        "relance": "Moi je pose mille questions à chaque envoi tellement je m'y perds. C'est quoi le truc à savoir absolument pour ne pas se ruiner en frais de port ?"
      },
      {
        "accroche": "Vos colis ont un petit emballage soigné avec votre marque dessus, on sent le pro qui a le souci de l'image — vous glissez un petit mot perso à vos clients vous ?",
        "relance": "Moi je trouve ça malin de soigner l'emballage comme ça. C'est quoi le détail qui fait que vos clients se souviennent de vous à la réception ?"
      },
      {
        "accroche": "Vous avez des colis de toutes les tailles avec des étiquettes fragile partout, ça sent le produit fait main et délicat — c'est vous qui fabriquez ce que vous vendez ?",
        "relance": "Moi j'ai toujours admiré ceux qui créent de leurs mains. C'est quoi le plus dur, fabriquer le produit ou réussir à le vendre ?"
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
      },
      {
        "accroche": "Vous débarquez pile à l'ouverture avec vos colis prêts, la stratégie du commerçant qui veut sa journée libre — c'est le rush matinal avant d'ouvrir boutique ?",
        "relance": "Moi je viens toujours à l'heure de pointe comme un débutant. C'est quoi votre routine pour expédier tout ça avant même le premier client ?"
      },
      {
        "accroche": "Vous avez tout regroupé en une seule fournée pour ne venir qu'une fois, l'optimisation du pro qui compte son temps — vous groupez toujours vos envois comme ça vous ?",
        "relance": "Moi je fais des allers-retours dans tous les sens sans logique. C'est quoi votre système pour ne pas passer votre vie au comptoir de la poste ?"
      },
      {
        "accroche": "Le guichetier vous connaît déjà et vous saluez tout le monde, on voit que vous faites partie du décor ici — c'est votre passage obligé de chaque matin ce comptoir ?",
        "relance": "Moi je débarque comme un touriste à chaque fois. C'est quoi qui a fait de la poste un rendez-vous quotidien pour vous plutôt qu'une corvée ?"
      },
      {
        "accroche": "Avec cette pile, vos affaires ont l'air de bien tourner en ce moment, il y a des périodes plus chargées que d'autres j'imagine — c'est le coup de feu pour vous là ?",
        "relance": "Moi je ne mesure pas ce que représente gérer les pics de commandes. C'est quoi la période de l'année qui vous met le plus sous pression ?"
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
      },
      {
        "accroche": "Être son propre patron, c'est autant d'angoisses que de fiertés, on porte tout sur ses épaules — vous le referiez sans hésiter avec le recul vous ?",
        "relance": "Moi je rêve de cette liberté mais la peur me retient. C'est quoi la plus grande satisfaction que vous tirez de bosser pour vous et personne d'autre ?"
      },
      {
        "accroche": "Ce lien direct avec le client, le colis emballé à la main, c'est justement ce que les géants ne sauront jamais offrir — c'est ça votre vraie carte à jouer vous ?",
        "relance": "Moi je crois que les gens ont soif de ce côté humain qu'on a perdu. C'est quoi le petit geste qui fidélise vos clients mieux que n'importe quelle pub ?"
      },
      {
        "accroche": "Quand on est seul aux commandes, on est à la fois patron, vendeur, livreur et comptable, c'est du sport — vous arrivez à tout porter sans y laisser votre santé vous ?",
        "relance": "Moi rien que d'y penser ça me donne le vertige. C'est quoi la casquette que vous détestez le plus porter dans votre activité ?"
      },
      {
        "accroche": "Il y a une fierté particulière à vivre de quelque chose qu'on a créé de zéro, ça n'a pas de prix — c'est ça qui vous fait tenir malgré les galères vous ?",
        "relance": "Moi un boulot qui a du sens ça me ferait tout accepter. C'est quoi le moment où vous vous êtes dit que vous aviez eu raison de vous lancer ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous attendez l'embarquement avec un calme olympien, ça sent le voyageur aguerri — vous prenez l'avion souvent ?",
        "relance": "Moi je stresse encore à chaque fois. C'est quoi votre secret pour rester aussi zen avant un vol ?"
      },
      {
        "accroche": "Votre valise est couverte d'étiquettes d'aéroports du monde entier, elle a plus voyagé que moi je crois — c'est quoi la dernière qui s'est ajoutée ?",
        "relance": "Moi ma valise n'a vu que trois pays en tout. C'est quoi la destination la plus lointaine que ces roulettes ont connue ?"
      },
      {
        "accroche": "Vous avez ce petit oreiller de voyage déjà autour du cou et le regard tranquille, tout l'attirail du habitué des longs vols — vous enchaînez souvent les grandes distances vous ?",
        "relance": "Moi j'arrive toujours à l'aéroport la boule au ventre. C'est quoi votre rituel pour aborder un vol comme si c'était une simple balade ?"
      },
      {
        "accroche": "Votre passeport est tellement tamponné qu'il déborde, ça raconte une sacrée collection de frontières franchies — c'est quoi le dernier pays qui y a laissé sa marque ?",
        "relance": "Moi mon passeport est presque vierge à côté du vôtre. C'est quoi le tampon dont vous êtes le plus fier dans toutes ces pages ?"
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
      },
      {
        "accroche": "Il y a ce moment étrange en salle d'embarquement, ni tout à fait parti ni encore ici, comme une parenthèse hors du temps — vous savourez ce flottement vous aussi ?",
        "relance": "Moi j'aime bien ce sas où tout est encore possible avant de décoller. C'est quoi le meilleur départ dont vous gardez un souvenir marquant ?"
      },
      {
        "accroche": "Le panneau annonce un léger retard, du coup on a le temps de regarder le ballet des passagers, chacun avec son histoire — vous partez pour affaires ou pour le plaisir vous ?",
        "relance": "Moi je m'invente toujours des vies en regardant les gens embarquer. C'est quoi le voyage le plus inattendu que vous ayez fait sur un coup de tête ?"
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
      },
      {
        "accroche": "Partir loin, ça a le pouvoir de recadrer toute une vie, de remettre les vraies priorités à leur place — c'est cette remise à zéro que vous cherchez vous aussi ?",
        "relance": "Moi je reviens toujours de voyage avec des idées plus claires. C'est quoi la leçon qu'un pays lointain vous a apprise sur vous-même ?"
      },
      {
        "accroche": "Il y a cette magie du voyage qui fait qu'on redevient un peu enfant devant l'inconnu, curieux de tout — vous ressentez encore cet émerveillement à chaque départ vous ?",
        "relance": "Moi la moindre nouveauté à l'étranger me rend gamin. C'est quoi le moment de pur émerveillement que vous avez vécu ailleurs et jamais oublié ?"
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
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous bossez jusqu'à la dernière minute avant d'embarquer, le vrai réflexe du pro en déplacement — grosse échéance qui vous poursuit ?",
        "relance": "Moi je n'arrive jamais à travailler dans ces conditions. C'est quoi votre secret pour rester concentré au milieu de tout ce bruit ?"
      },
      {
        "accroche": "Casque vissé sur les oreilles, vous êtes dans votre bulle au milieu de la cohue, un vrai bureau portatif — vous bouclez un truc urgent avant de couper ?",
        "relance": "Moi le moindre bruit me déconcentre. C'est quoi votre kit indispensable pour bosser efficace n'importe où ?"
      },
      {
        "accroche": "Vous alignez les tableaux et les mails sans lever le nez, une vraie mécanique bien huilée malgré l'agitation — c'est un dossier qui ne vous lâche pas jusqu'au décollage ?",
        "relance": "Moi je serais incapable d'aligner deux idées dans ce brouhaha. C'est quoi votre méthode pour rester dans votre bulle au milieu de la foule ?"
      },
      {
        "accroche": "Vous avez sorti la batterie externe et le clavier pliable, l'équipement du pro qui a fait de cet aéroport son bureau — vous bouclez un truc urgent avant de couper le réseau ?",
        "relance": "Moi je perds mes moyens dès que je change d'environnement. C'est quoi l'accessoire dont vous ne partez jamais sans pour bosser partout ?"
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
      },
      {
        "accroche": "On voit défiler les mêmes profils absorbés par leur écran dans ces halls, une petite armée de nomades du bureau — vous voyagez pour le boulot vous aussi j'imagine ?",
        "relance": "Moi je passe plus de temps en aéroport qu'au bureau ces derniers temps. C'est quoi qui rend un déplacement pro vraiment vivable pour vous ?"
      },
      {
        "accroche": "Vous avez déniché la table près de la baie vitrée avec le calme et la lumière, le vrai spot pour bosser tranquille — vous repérez toujours le meilleur coin comme ça vous ?",
        "relance": "Moi je m'installe n'importe où et je le regrette après. C'est quoi votre check-list pour transformer un bout d'aéroport en poste de travail correct ?"
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
      },
      {
        "accroche": "À force de pouvoir bosser partout, on finit par emporter le bureau jusque dans ses vacances sans même s'en rendre compte — vous arrivez à vraiment couper vous ?",
        "relance": "Moi je consulte mes mails même allongé sur la plage. C'est quoi la règle que vous vous imposez pour ne pas laisser le travail tout envahir ?"
      },
      {
        "accroche": "On nous vend le nomadisme comme la liberté ultime, mais à toujours pouvoir travailler on n'est peut-être jamais vraiment en repos — vous y trouvez votre équilibre vous ?",
        "relance": "Moi je ne sais plus distinguer mon temps libre de mon temps de travail. C'est quoi qui rendrait cette vie sur les routes vraiment épanouissante pour vous ?"
      }
    ]
  },
  {
    "id": 91,
    "environnement": "Magasin de vêtements",
    "profil": "Cliente qui hésite",
    "humeur": "Souriante",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Séduire avec tact",
    "theme": "Le style",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Cette veste que vous tenez a un vrai caractère, elle vous ressemble je trouve. Vous la prenez pour une occasion spéciale ?",
        "relance": "Moi je craque toujours pour les pièces un peu audacieuses. C'est quoi votre style à vous, plutôt sobre ou plutôt affirmé ?"
      },
      {
        "accroche": "J'adore la couleur que vous avez repérée, elle irait super bien avec votre teint. Vous avez l'œil pour ces choses-là ?",
        "relance": "Moi je suis incapable de choisir une couleur sans hésiter dix minutes. Vous faites confiance à votre instinct, vous ?"
      },
      {
        "accroche": "Vos lunettes sont magnifiques, elles donnent un petit air mystérieux. C'est un choix assumé ou un coup de cœur ?",
        "relance": "Moi j'ai mis des années à oser un accessoire qui se remarque. Vous aimez qu'on remarque vos petits détails ?"
      },
      {
        "accroche": "Ce sac que vous portez tranche joliment avec le reste, ça se voit que vous aimez jouer. Vous mélangez souvent les styles ?",
        "relance": "Moi je n'ose jamais mélanger, j'admire les gens qui le font avec autant d'aisance. Ça vous vient naturellement ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On est tombés sur la même étagère au même moment, ça doit être un signe. Vous cherchez quelque chose de précis ?",
        "relance": "Moi je viens souvent ici sans rien acheter, juste pour l'ambiance. Vous, vous êtes plutôt repérage ou coup de tête ?"
      },
      {
        "accroche": "Cette boutique a un charme fou, on s'y attarde volontiers. C'est votre adresse préférée ou vous découvrez ?",
        "relance": "Moi j'ai mes petites boutiques fétiches où je traîne des heures. Vous en avez une où vous vous sentez chez vous ?"
      },
      {
        "accroche": "La musique ici met de bonne humeur, on se croirait presque en voyage. Ça vous donne envie de tout essayer, vous aussi ?",
        "relance": "Moi la musique change complètement mon envie d'acheter. Vous êtes sensible à l'ambiance d'un lieu, vous ?"
      },
      {
        "accroche": "On est deux à hésiter devant le même portant, autant s'entraider. Vous seriez de bon conseil pour départager ?",
        "relance": "Moi je suis nul pour me décider tout seul, un avis me sauve toujours. Vous aimez donner votre avis, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des gens qui portent leurs vêtements et d'autres que les vêtements portent, vous êtes clairement la première catégorie. C'est un truc travaillé ou naturel ?",
        "relance": "Moi je crois que le style ça raconte quelque chose de nous. Vous diriez que le vôtre raconte quoi ?"
      },
      {
        "accroche": "J'ai l'impression que vous avez cette élégance tranquille qui ne force rien. Vous êtes comme ça dans la vie aussi ?",
        "relance": "Moi je passe mon temps à en faire trop, j'envie les gens posés. Vous êtes plutôt du genre calme ou pétillante ?"
      },
      {
        "accroche": "On sent que vous prenez plaisir à choisir, et ça change tout. La mode c'est un vrai jeu pour vous ?",
        "relance": "Moi j'ai longtemps vu ça comme une corvée avant d'y prendre goût. Vous, ça vous amuse depuis toujours ?"
      },
      {
        "accroche": "Vous dégagez une énergie qui donne envie de discuter, c'est rare. Vous êtes toujours aussi solaire ?",
        "relance": "Moi je carbure aux bonnes rencontres improbables. Vous croyez aux belles rencontres au hasard d'un magasin, vous ?"
      }
    ]
  },
  {
    "id": 92,
    "environnement": "Magasin de vêtements",
    "profil": "Vendeuse expérimentée",
    "humeur": "Bienveillante",
    "ageGroupe": "Senior",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Demander un avis",
    "theme": "Le bon choix",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de connaître chaque pièce du magasin par cœur, votre regard s'y arrête avec assurance. Vous me conseilleriez quoi pour un entretien important ?",
        "relance": "Moi je n'y connais rien en coupe, je me fie toujours à quelqu'un d'expérimenté. Vous avez une astuce simple pour ne pas se tromper ?"
      },
      {
        "accroche": "J'ai vu que vous réajustiez ce col d'un geste, ça se voit que vous avez l'œil. Cette chemise, elle taille grand selon vous ?",
        "relance": "Moi je prends toujours la mauvaise taille par flemme d'essayer. Vous diriez qu'on doit toujours essayer avant, vous ?"
      },
      {
        "accroche": "Vous portez une écharpe nouée d'une façon que je n'arrive jamais à reproduire. Vous auriez deux secondes pour me montrer ?",
        "relance": "Moi mes nœuds finissent toujours de travers. C'est une question d'habitude ou il y a un vrai secret ?"
      },
      {
        "accroche": "Votre badge dit que vous êtes ici depuis un moment, vous devez tout savoir sur ces marques. Laquelle tient le mieux dans le temps ?",
        "relance": "Moi j'achète souvent sur un coup de tête et je le regrette. Vous, comment vous repérez la qualité d'un tissu ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Je suis un peu perdu dans ce rayon, et vous avez l'air d'être la bonne personne. Vous pourriez m'orienter vers quelque chose de sobre ?",
        "relance": "Moi je repousse toujours ce genre d'achat à la dernière minute. Vous conseillez de venir quand le magasin est calme, vous ?"
      },
      {
        "accroche": "C'est ma première fois dans cette boutique et il y a beaucoup de choix. Par où vous me diriez de commencer ?",
        "relance": "Moi je me laisse vite déborder par le choix. Vous avez une méthode pour ne pas y passer des heures ?"
      },
      {
        "accroche": "On m'a dit que c'était ici qu'on trouvait les meilleurs conseils du quartier. Vous confirmez la réputation ?",
        "relance": "Moi je fais confiance au bouche-à-oreille avant tout. Vous, vous voyez passer beaucoup d'habitués fidèles ?"
      },
      {
        "accroche": "J'ai besoin d'une tenue pour un mariage et je suis complètement démuni. Vous en habillez souvent, des invités paniqués comme moi ?",
        "relance": "Moi je stresse dès qu'il faut être élégant. Vous auriez un conseil pour rester classe sans en faire trop ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Avec l'expérience, vous devez sentir tout de suite ce qui va à quelqu'un. C'est un instinct qui se développe avec le temps ?",
        "relance": "Moi je débute complètement dans l'art de m'habiller correctement. Vous diriez que ça s'apprend à tout âge ?"
      },
      {
        "accroche": "J'imagine que la mode a beaucoup changé depuis vos débuts dans le métier. Qu'est-ce qui revient toujours selon vous ?",
        "relance": "Moi je cours après les tendances et je m'y perds. Vous croyez qu'il vaut mieux miser sur les classiques ?"
      },
      {
        "accroche": "Vous devez avoir vu passer des milliers de clients hésitants comme moi. Qu'est-ce qui fait qu'on est vraiment à l'aise dans un vêtement ?",
        "relance": "Moi je me sens souvent déguisé quand je sors de ma zone de confort. Vous conseillez d'oser petit à petit, vous ?"
      },
      {
        "accroche": "Il y a des gens qui ont ce don de mettre les autres en valeur, et ça se sent chez vous. C'est ce qui vous plaît dans ce métier ?",
        "relance": "Moi j'admire ceux qui font ce travail avec autant de patience. Qu'est-ce qui vous donne le plus de satisfaction là-dedans ?"
      }
    ]
  },
  {
    "id": 93,
    "environnement": "Magasin de vêtements",
    "profil": "Autre client du rayon",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Briser la glace",
    "theme": "Le choix",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez pris trois fois le même pull dans des couleurs différentes, on est deux à galérer je crois. Vous partez sur laquelle ?",
        "relance": "Moi je ressors souvent avec la version la plus sûre par sécurité. Vous êtes plutôt prudent ou aventurier dans vos choix, vous ?"
      },
      {
        "accroche": "J'ai remarqué que vous compariez les étiquettes attentivement, vous cherchez une matière précise ?",
        "relance": "Moi je regarde toujours la composition maintenant, ça m'a évité des catastrophes. Vous avez déjà été déçu par un tissu, vous ?"
      },
      {
        "accroche": "Ce manteau que vous tenez, je l'ai reposé cinq fois moi-même. Il vous tente aussi ?",
        "relance": "Moi j'ai du mal à me lancer sur les pièces chères. Vous, vous craquez facilement ou vous réfléchissez longtemps ?"
      },
      {
        "accroche": "Vous avez l'air de savoir exactement ce que vous voulez, ça se voit à votre façon de filtrer. C'est une mission précise aujourd'hui ?",
        "relance": "Moi j'arrive toujours sans plan et je repars perdu. Vous faites une liste avant de venir, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Les cabines sont prises d'assaut, on va patienter un moment tous les deux. Vous en avez pour beaucoup d'essayages ?",
        "relance": "Moi je déteste attendre pour les cabines, c'est mon petit calvaire. Vous, la patience c'est votre fort ou pas du tout ?"
      },
      {
        "accroche": "C'est la période des soldes, autant dire l'aventure dans les rayons. Vous chassez la bonne affaire aussi ?",
        "relance": "Moi je repars toujours avec des trucs dont je n'ai pas besoin en soldes. Vous arrivez à rester raisonnable, vous ?"
      },
      {
        "accroche": "Ce magasin est un vrai labyrinthe, j'ai déjà perdu le rayon d'entrée. Vous vous y retrouvez, vous ?",
        "relance": "Moi j'ai un sens de l'orientation catastrophique, même en boutique. Vous êtes du genre à tout explorer méthodiquement ?"
      },
      {
        "accroche": "Il fait un temps à rester à l'abri, autant flâner ici tranquillement. Vous êtes venu pour ça aussi ou avec une idée en tête ?",
        "relance": "Moi les jours gris j'adore traîner dans les boutiques sans but. Vous, le lèche-vitrine ça vous détend ou ça vous ennuie ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Choisir des vêtements ça en dit long sur les gens, je trouve ça fascinant à observer. Vous, vous achetez avec la tête ou le cœur ?",
        "relance": "Moi je suis clairement une tête qui voudrait être un cœur. Vous vous laissez guider par vos envies, vous ?"
      },
      {
        "accroche": "On a tous une pièce qu'on garde des années et une qu'on ne met jamais. Vous êtes plutôt fidèle à vos vêtements ?",
        "relance": "Moi j'ai un placard rempli de fausses bonnes idées. Vous faites le tri régulièrement, vous ?"
      },
      {
        "accroche": "Il y a quelque chose de reposant à prendre son temps dans un magasin, loin de la course habituelle. Vous vivez ça comme une pause aussi ?",
        "relance": "Moi c'est presque un moment à moi, ces sorties shopping. Vous, vous rechargez les batteries comment d'habitude ?"
      },
      {
        "accroche": "Finalement on cherche tous un peu à se sentir bien dans ce qu'on porte, au-delà du style. Ça compte beaucoup pour vous ?",
        "relance": "Moi le confort a fini par gagner sur l'apparence avec le temps. Et vous, vous privilégiez quoi entre les deux ?"
      }
    ]
  },
  {
    "id": 94,
    "environnement": "Magasin de chaussures",
    "profil": "Vendeur chevronné",
    "humeur": "Posé",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Demander un avis",
    "theme": "Le bon soulier",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous avez soulevé cette paire comme quelqu'un qui connaît le cuir, ça se voit tout de suite. Elle vaut son prix selon vous ?",
        "relance": "Moi je suis incapable de reconnaître un bon cuir d'un mauvais. Vous avez un truc simple pour faire la différence ?"
      },
      {
        "accroche": "Je vois que vous vérifiez la semelle avant tout, c'est ça le vrai réflexe du connaisseur ?",
        "relance": "Moi je regarde surtout le look et je le paie cher ensuite. Vous conseillez de partir de la semelle, vous ?"
      },
      {
        "accroche": "Vos propres chaussures ont l'air impeccables malgré l'usage, vous devez savoir les entretenir. Vous me donneriez le secret ?",
        "relance": "Moi les miennes sont mortes en trois mois faute d'entretien. C'est quoi le geste de base à ne pas rater ?"
      },
      {
        "accroche": "Vous portez ce modèle vous-même, c'est plutôt bon signe. Vous les recommanderiez pour marcher toute la journée ?",
        "relance": "Moi je cherche du confort avant l'allure maintenant. Vous diriez qu'on peut avoir les deux, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Je cherche une paire pour un travail où je reste debout des heures, et je suis perdu. Vous m'orienteriez vers quoi ?",
        "relance": "Moi j'ai toujours acheté au feeling et mes pieds l'ont payé. Vous conseillez d'essayer en fin de journée, c'est vrai ce truc ?"
      },
      {
        "accroche": "C'est un vrai casse-tête ce rayon, il y a trop de modèles qui se ressemblent. Comment vous feriez le tri à ma place ?",
        "relance": "Moi je finis toujours par prendre la première paire correcte. Vous, vous prenez le temps de tout comparer ?"
      },
      {
        "accroche": "On m'a envoyé ici en me disant que le conseil valait le déplacement. Vous confirmez que vous êtes l'expert de la maison ?",
        "relance": "Moi je préfère un bon conseil à mille avis en ligne. Vous voyez encore beaucoup de gens qui viennent pour ça ?"
      },
      {
        "accroche": "J'ai besoin de chaussures habillées pour un événement et je n'y connais rien. Vous en vendez souvent à des gens aussi perdus que moi ?",
        "relance": "Moi l'élégance et moi ça fait deux, franchement. Vous auriez un modèle passe-partout à me conseiller ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Avec les années vous devez deviner la pointure d'un client au premier coup d'œil. Ça vient vraiment avec l'expérience ?",
        "relance": "Moi je me trompe encore de taille à chaque fois. Vous diriez que le pied change avec l'âge, vous ?"
      },
      {
        "accroche": "On dit qu'on reconnaît quelqu'un à ses chaussures, vous devez en savoir des choses sur les gens. C'est vrai ce dicton selon vous ?",
        "relance": "Moi je néglige complètement mes pieds, j'ai tort je crois. Qu'est-ce que ça dit de moi ça, à votre avis ?"
      },
      {
        "accroche": "Le métier a dû changer avec le temps, entre les matières et les modes. Qu'est-ce qui reste une valeur sûre pour vous ?",
        "relance": "Moi je cours après le dernier modèle à la mode et je m'y perds. Vous conseillez de miser sur l'intemporel, vous ?"
      },
      {
        "accroche": "Ça se sent que vous aimez transmettre, vous prenez le temps d'expliquer. C'est ce qui vous plaît le plus dans ce travail ?",
        "relance": "Moi j'apprends toujours quelque chose en discutant avec un bon vendeur. Qu'est-ce que les clients devraient savoir et ignorent souvent ?"
      }
    ]
  },
  {
    "id": 95,
    "environnement": "Magasin de chaussures",
    "profil": "Cliente qui essaie",
    "humeur": "Enjouée",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Mode",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Séduire avec tact",
    "theme": "Les baskets",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Ces baskets que vous essayez ont un sacré style, elles vous vont trop bien. Vous les prenez pour sortir ou pour tous les jours ?",
        "relance": "Moi je vis en baskets, c'est presque une signature. Vous êtes plutôt confort ou plutôt allure, vous ?"
      },
      {
        "accroche": "J'adore comment vous avez assorti vos chaussettes à votre pull, ça montre que vous soignez les détails. C'est calculé, ça ?",
        "relance": "Moi les détails c'est ma petite obsession. Vous êtes du genre à tout accorder ou à jouer les contrastes ?"
      },
      {
        "accroche": "Vous marchez déjà avec dans le magasin comme si elles étaient à vous, c'est bon signe. Le coup de cœur est confirmé ?",
        "relance": "Moi je sais tout de suite si une paire est faite pour moi. Vous vous fiez à votre instinct dans la vie aussi ?"
      },
      {
        "accroche": "Votre sourire quand vous les avez enfilées valait le détour, ça se voit que ça vous plaît. Vous craquez souvent comme ça ?",
        "relance": "Moi je suis une catastrophe, je craque pour tout ce qui brille. Vous savez résister ou vous êtes impulsive comme moi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On teste tous les deux des paires au même moment, c'est presque un défilé improvisé. Vous me diriez laquelle me va, vous ?",
        "relance": "Moi j'adore avoir un avis extérieur, ça change tout. Vous êtes de bon conseil ou vous dites toujours oui pour faire plaisir ?"
      },
      {
        "accroche": "Ce magasin met une musique qui donne envie de danser avec les chaussures d'essai. Vous la sentez aussi cette énergie ?",
        "relance": "Moi je choisis toujours mieux quand l'ambiance est bonne. Vous, un lieu qui vous met de bonne humeur ça change vos envies ?"
      },
      {
        "accroche": "Le vendeur nous a laissés seuls devant le même mur de baskets, autant s'entraider. Vous avez repéré la perle rare ?",
        "relance": "Moi je trouve toujours la bonne paire trop tard, une fois rentrée. Vous décidez vite ou vous tergiversez comme moi ?"
      },
      {
        "accroche": "On fait la queue tous les deux pour essayer, autant rendre l'attente sympa. Vous venez souvent traîner ici ?",
        "relance": "Moi j'en fais un vrai loisir de ces virées shopping. Vous, c'est plaisir ou mission commando aujourd'hui ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des gens qui illuminent un magasin rien qu'en entrant, et vous en faites clairement partie. Vous avez toujours cette pêche ?",
        "relance": "Moi je carbure à l'énergie des autres, ça se recharge. Vous êtes du matin ou vous montez en régime dans la journée ?"
      },
      {
        "accroche": "On dit qu'une paire de chaussures peut changer une journée, vous avez l'air d'y croire aussi. C'est votre petit plaisir à vous ?",
        "relance": "Moi une nouvelle paire et je me sens invincible. Vous avez un truc qui vous booste le moral comme ça ?"
      },
      {
        "accroche": "Vous dégagez une spontanéité qui donne envie de papoter, c'est agréable et rare. Vous êtes toujours aussi facile à aborder ?",
        "relance": "Moi j'adore les gens qui se laissent surprendre par une conversation. Vous croyez aux rencontres improbables, vous ?"
      },
      {
        "accroche": "Choisir des chaussures avec autant de plaisir, ça montre quelqu'un qui aime la vie. Je me trompe ?",
        "relance": "Moi j'essaie de prendre plaisir aux petites choses du quotidien. Et vous, c'est quoi votre secret pour rester légère ?"
      }
    ]
  },
  {
    "id": 96,
    "environnement": "Magasin de chaussures",
    "profil": "Autre client indécis",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Papoter légèrement",
    "theme": "L'attente",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez déjà trois boîtes empilées à vos pieds, la mission a l'air sérieuse. Vous trouvez votre bonheur ?",
        "relance": "Moi j'en essaie dix pour repartir avec zéro, en général. Vous, vous repartez souvent les mains vides ?"
      },
      {
        "accroche": "Vos chaussures actuelles sont trempées, la pluie a dû vous surprendre aussi. Vous cherchez du coup une paire imperméable ?",
        "relance": "Moi je me fais avoir à chaque averse, jamais les bonnes chaussures. Vous regardez la météo avant de sortir, vous ?"
      },
      {
        "accroche": "Vous testez la semelle en tapant du pied, c'est le bon réflexe ça. Vous cherchez du confortable avant tout ?",
        "relance": "Moi le confort a gagné depuis que je marche beaucoup. Vous, vous faites pas mal de kilomètres à pied ?"
      },
      {
        "accroche": "Vous hésitez entre les deux mêmes modèles que moi, c'est amusant. Vous pencheriez pour lequel, franchement ?",
        "relance": "Moi je change d'avis toutes les deux minutes devant un choix. Vous, vous tranchez vite d'habitude ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On attend le vendeur depuis un moment tous les deux, il y a du monde aujourd'hui. Vous êtes pressé ou tranquille ?",
        "relance": "Moi j'ai tout mon après-midi, ça tombe bien. Vous en avez pour longtemps encore, vous ?"
      },
      {
        "accroche": "Avec ce temps gris dehors, le magasin est plein à craquer. Vous vous êtes réfugié ici aussi à cause de l'averse ?",
        "relance": "Moi dès qu'il pleut je me retrouve à faire les magasins sans raison. Vous, la pluie ça change vos plans souvent ?"
      },
      {
        "accroche": "Ils ont réorganisé tout le rayon, je ne retrouve plus rien. Vous vous y retrouvez, vous ?",
        "relance": "Moi je suis un habitué et là je suis complètement perdu. Vous venez souvent ici ou c'est une découverte ?"
      },
      {
        "accroche": "La file pour les caisses n'avance pas d'un pouce, on va prendre racine. Vous avez trouvé ce que vous cherchiez au moins ?",
        "relance": "Moi j'ai fini par prendre la première paire correcte pour en finir. Vous, vous êtes du genre patient dans les files ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou le temps qu'on peut passer à choisir une simple paire de chaussures. Vous trouvez ça reposant ou pénible, vous ?",
        "relance": "Moi ça me vide la tête bizarrement, ces petites courses. Vous, vous décompressez comment le week-end ?"
      },
      {
        "accroche": "Avec la saison qui change, on se retrouve tous à refaire notre garde-robe. Vous préparez déjà l'automne, vous ?",
        "relance": "Moi je m'y prends toujours trop tard pour changer de chaussures. Vous êtes plutôt prévoyant ou dernière minute ?"
      },
      {
        "accroche": "On dit qu'il faut de bonnes chaussures et un bon lit, on passe notre vie dans les deux. Vous êtes d'accord avec ce dicton ?",
        "relance": "Moi j'ai enfin compris qu'il fallait investir dans ses pieds. Vous avez appris ça avec le temps aussi ?"
      },
      {
        "accroche": "Ces après-midis pluvieux ont un petit côté cocon finalement, même en magasin. Vous aimez ce genre de journées calmes ?",
        "relance": "Moi j'avoue préférer la pluie tranquille à l'agitation de l'été. Vous êtes plutôt saison chaude ou saison douce ?"
      }
    ]
  },
  {
    "id": 97,
    "environnement": "Arrêt de bus",
    "profil": "Personne qui attend",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Briser la glace",
    "theme": "L'attente",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous consultez l'appli toutes les dix secondes, je fais pareil de mon côté. Il annonce quoi, votre écran ?",
        "relance": "Moi je ne fais jamais confiance aux horaires affichés. Vous, vous vous fiez à l'appli ou au panneau ?"
      },
      {
        "accroche": "Votre parapluie a l'air bien plus fiable que le mien, vous avez anticipé la journée. La météo s'annonce mauvaise selon vous ?",
        "relance": "Moi je pars toujours sans rien et je le regrette. Vous êtes du genre prévoyant en toute circonstance ?"
      },
      {
        "accroche": "J'ai vu votre badge, vous devez travailler dans le coin. C'est le trajet quotidien pour vous aussi ?",
        "relance": "Moi je fais ce trajet depuis peu et je m'y perds encore. Vous, vous connaissez le secteur par cœur ?"
      },
      {
        "accroche": "Votre café à emporter sent divinement bon d'ici, vous avez une bonne adresse. C'est le petit rituel du matin ?",
        "relance": "Moi je ne démarre pas sans mon café, c'est vital. Vous, vous tenez le coup au réveil comment ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ça fait un quart d'heure qu'on attend ce bus fantôme, on est dans la même galère. Vous savez s'il est passé ou pas ?",
        "relance": "Moi j'ai déjà raté le précédent de trois minutes, super début de journée. Vous avez le temps ou vous êtes short comme moi ?"
      },
      {
        "accroche": "Cet abribus ne protège de rien avec ce vent, on fait ce qu'on peut. Vous attendez cette ligne aussi ?",
        "relance": "Moi j'ai fini par connaître tous les mauvais abris de la ville. Vous faites ce trajet tous les jours, vous ?"
      },
      {
        "accroche": "Il y a foule ce matin, on va se serrer dans le bus j'ai l'impression. C'est toujours comme ça à cette heure ?",
        "relance": "Moi j'essaie toujours de décaler pour éviter la cohue. Vous, vous avez trouvé le bon créneau pour voyager tranquille ?"
      },
      {
        "accroche": "On est les deux seuls à attendre dans le calme pendant que tout le monde court. Vous prenez la vie du bon côté aussi ?",
        "relance": "Moi j'ai appris à ne plus stresser pour un bus raté. Vous êtes zen ou ça vous agace ces attentes, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est marrant tous ces gens qui attendent ensemble sans jamais se parler. On brise un peu la routine là, non ?",
        "relance": "Moi je trouve ça dommage qu'on reste tous dans notre bulle. Vous, vous parlez facilement aux inconnus ?"
      },
      {
        "accroche": "Les transports c'est un peu le seul moment où on ralentit dans la journée. Vous en profitez pour souffler ou vous bouillonnez ?",
        "relance": "Moi j'essaie d'en faire une pause plutôt qu'une contrainte. Vous occupez ce temps comment, vous ?"
      },
      {
        "accroche": "On passe un temps fou à attendre dans une vie, autant que ce soit agréable. Vous voyez le verre à moitié plein aussi ?",
        "relance": "Moi j'ai décidé de moins râler contre les petits imprévus. Vous, vous gardez le sourire facilement le matin ?"
      },
      {
        "accroche": "Il y a quelque chose d'apaisant à commencer la journée doucement comme ça. Vous êtes du matin ou c'est la lutte ?",
        "relance": "Moi il me faut une bonne heure pour émerger vraiment. Vous êtes opérationnel dès le réveil, vous ?"
      }
    ]
  },
  {
    "id": 98,
    "environnement": "Arrêt de bus",
    "profil": "Voyageur habitué",
    "humeur": "Bavard",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Papoter légèrement",
    "theme": "La météo",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez sorti l'écharpe alors qu'il faisait doux ce matin, vous avez senti le changement venir. Ça se rafraîchit pour de bon vous croyez ?",
        "relance": "Moi je m'habille toujours à côté de la plaque niveau météo. Vous avez le nez pour ces choses-là, vous ?"
      },
      {
        "accroche": "Votre journal parle sûrement de cet été pourri qu'on nous annonce. Vous y croyez, vous, à ces prévisions ?",
        "relance": "Moi je ne regarde plus la météo tellement elle se trompe. Vous vous y fiez encore, vous ?"
      },
      {
        "accroche": "Je vous ai déjà croisé à cet arrêt il me semble, vous êtes un habitué de la ligne. Elle est fiable au moins ?",
        "relance": "Moi je râle après ce bus depuis des années. Vous avez fait la paix avec ses retards, vous ?"
      },
      {
        "accroche": "Vous regardez le ciel avec méfiance, moi aussi je le trouve menaçant. On va se prendre l'averse avant le bus vous pensez ?",
        "relance": "Moi je pars toujours sans parapluie par optimisme mal placé. Vous êtes plutôt prudent côté météo, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Quel drôle de temps aujourd'hui, on ne sait pas comment s'habiller. Vous vous y retrouvez, vous, dans ces saisons détraquées ?",
        "relance": "Moi je ressors le manteau et le lendemain c'est plein soleil. Vous trouvez aussi que les saisons n'ont plus de sens ?"
      },
      {
        "accroche": "Le bus est encore en retard, mais au moins il fait bon pour attendre. On ne va pas se plaindre du soleil, hein ?",
        "relance": "Moi j'attends toujours plus volontiers quand il fait beau. Vous, la météo change votre patience aussi ?"
      },
      {
        "accroche": "Ça sent la pluie, on va peut-être finir trempés avant l'arrivée du bus. Vous avez de quoi vous abriter, vous ?",
        "relance": "Moi j'ai renoncé à lutter contre les averses surprises. Vous partagez le mien s'il tombe des cordes ?"
      },
      {
        "accroche": "Il y a plus de monde que d'habitude à cet arrêt aujourd'hui, la chaleur a dû sortir les gens. Vous trouvez aussi que la ville s'anime avec le beau temps ?",
        "relance": "Moi le soleil me donne envie de traîner dehors des heures. Vous, ça vous met en forme le beau temps ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "On dit toujours qu'en France on parle du temps quand on n'a rien à se dire, et pourtant ça rapproche. Vous trouvez pas ?",
        "relance": "Moi j'adore ces petites discussions de rien du tout entre inconnus. Vous êtes bavard avec les gens que vous croisez, vous ?"
      },
      {
        "accroche": "Chaque saison a son charme finalement, même les jours gris. Vous, vous avez une préférée dans l'année ?",
        "relance": "Moi je suis un inconditionnel de l'automne et de ses couleurs. Vous êtes plutôt été ou plutôt saisons douces ?"
      },
      {
        "accroche": "C'est fou comme le temps qu'il fait joue sur l'humeur des gens. Vous le ressentez aussi sur votre moral, vous ?",
        "relance": "Moi un rayon de soleil et je repars du bon pied. Vous avez votre petite recette pour garder le moral les jours gris ?"
      },
      {
        "accroche": "On râle contre la pluie mais sans elle rien ne pousserait, faut relativiser. Vous prenez la météo avec philosophie, vous ?",
        "relance": "Moi j'ai appris à ne plus me plaindre du ciel avec l'âge. Vous relativisez facilement ce genre de petits tracas ?"
      }
    ]
  },
  {
    "id": 99,
    "environnement": "Arrêt de bus",
    "profil": "Étudiante qui attend",
    "humeur": "Souriante",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Séduire avec tact",
    "theme": "L'attente partagée",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Votre tote bag couvert de badges raconte visiblement plein d'histoires. Il y en a un qui a une signification particulière ?",
        "relance": "Moi je collectionne les pins de concerts un peu partout. Vous êtes plutôt musique ou plutôt cinéma, vous ?"
      },
      {
        "accroche": "Vous lisez debout en attendant le bus, c'est plutôt rare et charmant. Il est si prenant que ça, votre livre ?",
        "relance": "Moi j'oublie le monde entier dès que je plonge dans un roman. Vous me conseilleriez quoi comme prochaine lecture, vous ?"
      },
      {
        "accroche": "Vos écouteurs sont autour du cou, du coup je tente ma chance de vous parler. C'était quoi la bande-son de votre journée ?",
        "relance": "Moi j'ai toujours une playlist collée à l'humeur du moment. Vous écoutez quoi quand vous voulez sourire, vous ?"
      },
      {
        "accroche": "Votre sourire en regardant votre téléphone est communicatif, ça donne le sourire aussi. Bonne nouvelle j'espère ?",
        "relance": "Moi je suis incapable de cacher ce que je ressens, ça se lit sur mon visage. Vous êtes du genre expressive aussi, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On attend ce bus depuis un moment, autant rendre la soirée plus sympa à deux. Vous rentrez de loin, vous ?",
        "relance": "Moi j'ai un trajet interminable qui passe mieux en discutant. Vous, l'attente vous ennuie ou vous en profitez ?"
      },
      {
        "accroche": "Il commence à faire frais, cet arrêt n'est pas des plus accueillants pour patienter. Vous avez l'habitude de cette ligne ?",
        "relance": "Moi je connais chaque retard de ce bus par cœur maintenant. Vous faites ce trajet souvent, vous ?"
      },
      {
        "accroche": "La ville a un charme fou le soir, on dirait un décor rien que pour nous deux. Vous aimez cette ambiance nocturne aussi ?",
        "relance": "Moi j'adore la ville quand elle se calme le soir. Vous êtes plutôt lève-tôt ou oiseau de nuit, vous ?"
      },
      {
        "accroche": "On est les deux seuls à sourire à cet arrêt pendant que tout le monde tire la tête. Vous avez passé une bonne journée, vous ?",
        "relance": "Moi j'essaie toujours de finir la journée sur une note légère. Vous gardez le sourire facilement, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des gens qu'on remarque tout de suite dans une foule, et vous en faites partie. Vous avez toujours cette présence ?",
        "relance": "Moi je crois beaucoup aux premières impressions. Vous, vous vous fiez à votre intuition sur les gens ?"
      },
      {
        "accroche": "C'est rare ces petits moments suspendus où on peut vraiment discuter avec un inconnu. Vous croyez aux belles rencontres au hasard, vous ?",
        "relance": "Moi je trouve que les plus jolies histoires commencent sans prévenir. Vous êtes du genre à provoquer votre chance ?"
      },
      {
        "accroche": "Vous dégagez une énergie douce qui donne envie de ralentir, c'est agréable. Vous êtes toujours aussi posée le soir ?",
        "relance": "Moi le soir je passe enfin en mode tranquille. Vous, vous rechargez les batteries comment après une longue journée ?"
      },
      {
        "accroche": "Attendre un bus à deux, ça a soudain l'air moins pénible qu'à l'instant. Vous trouvez pas que ça change tout, la compagnie ?",
        "relance": "Moi je préfère mille fois attendre en riant qu'en silence. Et vous, vous engagez facilement la conversation d'habitude ?"
      }
    ]
  },
  {
    "id": 100,
    "environnement": "Réception d'entreprise",
    "profil": "Visiteur qui patiente",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Briser la glace",
    "theme": "L'attente en réception",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre badge visiteur est comme le mien, on doit être les deux invités du jour. Vous venez pour quel service, vous ?",
        "relance": "Moi je viens pour un rendez-vous qui me stresse un peu, j'avoue. Vous, vous êtes plutôt à l'aise dans ce genre de moments ?"
      },
      {
        "accroche": "Vous avez sorti un carnet plutôt qu'un téléphone, ça se remarque et c'est chouette. Vous prenez toujours vos notes à la main ?",
        "relance": "Moi j'ai tout mis sur mon portable et je perds la moitié. Vous êtes resté fidèle au papier, vous ?"
      },
      {
        "accroche": "Votre dossier a l'air épais, la réunion s'annonce sérieuse. Vous présentez quelque chose ce matin ?",
        "relance": "Moi j'ai toujours peur d'oublier un document important. Vous êtes du genre hyper préparé, vous ?"
      },
      {
        "accroche": "J'ai vu votre café de la machine, vous avez osé le noir corsé du matin. Il est buvable au moins, celui d'ici ?",
        "relance": "Moi je juge une boîte à sa machine à café, c'est bête mais vrai. Vous avez des standards élevés là-dessus aussi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'hôtesse nous a dit cinq minutes il y a un quart d'heure, on partage la même patience. Vous attendez quelqu'un de précis ?",
        "relance": "Moi les salles d'attente c'est mon grand exercice de patience. Vous, ça vous agace ou vous prenez votre mal en patience ?"
      },
      {
        "accroche": "Ces locaux sont impressionnants, on se sent tout petit dans ce hall. C'est votre première visite ici aussi ?",
        "relance": "Moi je suis toujours intimidé par les grandes entreprises. Vous, ces décors ça vous impressionne ou vous êtes habitué ?"
      },
      {
        "accroche": "Il y a une ambiance feutrée ici, on n'ose presque pas parler fort. Vous trouvez ça reposant ou un peu froid, vous ?",
        "relance": "Moi je préfère les endroits qui vivent un peu plus. Vous êtes plutôt calme ou animation dans votre travail ?"
      },
      {
        "accroche": "On est les deux seuls à patienter pendant que tout le monde s'active autour. Vous en profitez pour souffler avant d'y aller ?",
        "relance": "Moi j'utilise ces minutes pour me préparer mentalement. Vous avez un petit rituel avant un rendez-vous, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est marrant, on croise des dizaines d'inconnus dans ces halls sans jamais se parler. On change un peu la règle là, non ?",
        "relance": "Moi je trouve qu'un mot échangé rend l'attente bien plus douce. Vous parlez facilement aux gens que vous croisez, vous ?"
      },
      {
        "accroche": "Ces moments d'attente avant un rendez-vous ont un petit côté suspendu que j'aime bien. Vous vivez ça comment, vous ?",
        "relance": "Moi j'essaie d'en faire une respiration plutôt qu'une tension. Vous gérez le stress d'avant comment, vous ?"
      },
      {
        "accroche": "On rencontre parfois des gens intéressants dans les endroits les plus banals, comme ici. Vous croyez aux rencontres de hasard, vous ?",
        "relance": "Moi j'ai déjà noué de belles relations dans des files d'attente. Vous êtes ouvert à ce genre de discussions, vous ?"
      },
      {
        "accroche": "Le monde du travail est petit, on finit toujours par recroiser les gens. Vous êtes de la région ou vous venez de loin ?",
        "relance": "Moi je suis surpris à chaque fois de retomber sur les mêmes têtes. Vous êtes bien implanté dans le coin, vous ?"
      }
    ]
  },
  {
    "id": 101,
    "environnement": "Réception d'entreprise",
    "profil": "Cadre expérimenté",
    "humeur": "Posé",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Demander un avis",
    "theme": "L'expérience du métier",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Votre badge indique un poste à responsabilités, vous devez connaître la maison sur le bout des doigts. Vous auriez un conseil pour un premier entretien ici ?",
        "relance": "Moi je débute et je cherche à comprendre les codes du secteur. Vous diriez qu'il faut jouer la carte de la simplicité, vous ?"
      },
      {
        "accroche": "Vous avez cette assurance tranquille des gens qui ont de la bouteille. Vous êtes dans le métier depuis longtemps ?",
        "relance": "Moi j'en suis à mes premières années et tout me semble un défi. Qu'est-ce que vous auriez aimé savoir à mes débuts, vous ?"
      },
      {
        "accroche": "Je vous ai vu saluer la moitié du hall, vous connaissez visiblement tout le monde. Le relationnel c'est la clé dans ce milieu ?",
        "relance": "Moi je suis plutôt réservé et j'ai du mal à réseauter. Vous auriez une astuce pour aller plus facilement vers les gens ?"
      },
      {
        "accroche": "Vous consultez vos notes avec une méthode qui force le respect. Vous avez développé votre organisation avec les années ?",
        "relance": "Moi je me noie encore dans mes dossiers, franchement. Vous auriez un système simple à me recommander, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On patiente tous les deux, et honnêtement je serais preneur du regard de quelqu'un d'expérimenté. Vous connaissez bien cette entreprise ?",
        "relance": "Moi j'arrive de l'extérieur et je découvre tout. Vous conseillez quoi pour bien s'intégrer quelque part, vous ?"
      },
      {
        "accroche": "Ce genre de rendez-vous m'impressionne encore, alors que vous avez l'air serein. C'est l'habitude qui fait ça ?",
        "relance": "Moi je gère mal la pression d'avant réunion. Vous avez une méthode pour rester calme dans ces moments, vous ?"
      },
      {
        "accroche": "Vous semblez être un habitué de ces lieux, moi je découvre le secteur. Qu'est-ce qui compte vraiment pour réussir ici, selon vous ?",
        "relance": "Moi je manque encore de recul sur ce milieu. Vous diriez que c'est les compétences ou le réseau qui priment ?"
      },
      {
        "accroche": "On m'a conseillé d'écouter les anciens du métier plutôt que les tutos en ligne. Vous partagez cette idée, vous ?",
        "relance": "Moi j'apprends bien plus en discutant qu'en lisant. Qu'est-ce qu'on ne vous apprend nulle part et que l'expérience seule donne ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Avec le recul, vous devez voir arriver les jeunes avec un mélange d'amusement et de bienveillance. Qu'est-ce qui a le plus changé dans le métier ?",
        "relance": "Moi je me demande si les fondamentaux restent les mêmes malgré tout. Vous diriez que l'essentiel ne bouge pas, vous ?"
      },
      {
        "accroche": "On dit qu'une carrière se construit sur les bons conseils reçus au bon moment. Lequel vous a le plus marqué, vous ?",
        "relance": "Moi je cherche justement ces repères en début de parcours. Vous auriez un principe simple qui vous a toujours guidé ?"
      },
      {
        "accroche": "J'imagine que vous avez vu passer des générations entières de débutants comme moi. Qu'est-ce qui distingue ceux qui percent, selon vous ?",
        "relance": "Moi j'essaie de comprendre ce qui fait vraiment la différence. Vous diriez que c'est le travail ou l'état d'esprit ?"
      },
      {
        "accroche": "Ça se sent que vous aimez transmettre, vous prenez le temps de répondre posément. C'est important pour vous d'aider les plus jeunes ?",
        "relance": "Moi j'ai toujours progressé grâce à des mentors généreux. Qu'est-ce qui vous donne envie de partager votre expérience, vous ?"
      }
    ]
  },
  {
    "id": 102,
    "environnement": "Réception d'entreprise",
    "profil": "Collègue croisé",
    "humeur": "Souriant",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Papoter légèrement",
    "theme": "Le début de journée",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez le manteau encore tout mouillé, la pluie de ce matin ne vous a pas raté non plus. Le trajet a été rude ?",
        "relance": "Moi je suis arrivé trempé jusqu'aux chaussettes, super début. Vous venez de loin pour affronter ce temps ?"
      },
      {
        "accroche": "Votre café fume encore, vous venez d'attaquer la journée vous aussi. La machine du hall vaut le coup ?",
        "relance": "Moi tant que je n'ai pas mon café, je ne réponds de rien. Vous êtes du genre à carburer au café aussi ?"
      },
      {
        "accroche": "Votre parapluie ruisselle encore, vous avez eu le bon réflexe ce matin. Vous regardez toujours la météo avant de partir ?",
        "relance": "Moi je pars systématiquement sans, par pure flemme. Vous êtes plus prévoyant que moi visiblement, vous ?"
      },
      {
        "accroche": "Vous avez l'air en pleine forme malgré ce lundi gris, ça fait plaisir à voir. C'est le secret pour bien démarrer, la bonne humeur ?",
        "relance": "Moi il me faut un peu de temps pour émerger le matin. Vous êtes du matin ou vous faites semblant comme moi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Quel temps ce matin, on se serait cru en plein automne alors qu'on est en été. Vous vous y retrouvez, vous, dans ces saisons ?",
        "relance": "Moi je ne sais plus comment m'habiller d'un jour à l'autre. Vous trouvez aussi que la météo fait n'importe quoi ?"
      },
      {
        "accroche": "Le hall est plein ce matin, tout le monde s'est réfugié à l'abri en même temps. Vous avez eu du mal à venir, vous ?",
        "relance": "Moi les jours de pluie tout le monde arrive en retard, c'est mécanique. Vous avez galéré dans les transports aussi ?"
      },
      {
        "accroche": "C'est plus agréable d'attendre au chaud que dehors sous cette averse, on ne va pas se plaindre. Vous patientez pour un rendez-vous, vous ?",
        "relance": "Moi j'apprécie ces petites pauses au sec avant d'attaquer. Vous, vous en profitez pour souffler un peu, vous ?"
      },
      {
        "accroche": "Ils annoncent du soleil pour cet après-midi, il y a de l'espoir finalement. Vous avez prévu d'en profiter à la pause, vous ?",
        "relance": "Moi dès qu'un rayon pointe, je sors marcher un peu. Vous, vous prenez l'air à midi ou vous restez au bureau ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est fou comme un lundi pluvieux peut plomber toute une matinée. Vous arrivez à garder le moral malgré le temps, vous ?",
        "relance": "Moi j'ai ma petite playlist pour contrer les jours gris. Vous avez un truc pour vous remettre d'aplomb, vous ?"
      },
      {
        "accroche": "On passe la moitié de nos conversations à parler de la météo, et pourtant ça détend toujours. Vous trouvez pas ?",
        "relance": "Moi j'adore ces petits échanges de rien qui brisent la glace. Vous êtes du genre à papoter avec les collègues, vous ?"
      },
      {
        "accroche": "Chaque saison a son ambiance jusque dans les bureaux, je trouve. Vous préférez les matins d'été ou l'atmosphère cocon de l'hiver, vous ?",
        "relance": "Moi j'ai un faible pour l'automne et sa lumière douce. Vous êtes plutôt soleil ou saisons feutrées ?"
      },
      {
        "accroche": "Finalement le temps qu'il fait dehors donne un peu le ton de la journée au bureau. Vous le ressentez aussi sur l'ambiance générale ?",
        "relance": "Moi je vois bien l'équipe plus enjouée les jours de beau temps. Vous croyez que le moral collectif suit la météo, vous ?"
      }
    ]
  },
  {
    "id": 103,
    "environnement": "Fast-food",
    "profil": "Client dans la file",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Gastronomie",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Briser la glace",
    "theme": "Le choix du menu",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous fixez le menu depuis un moment, on est deux à hésiter devant les nouveautés. Vous partez sur quoi, vous ?",
        "relance": "Moi je prends toujours la même chose par sécurité, c'est triste. Vous êtes du genre à tester les nouveautés ou fidèle à vos classiques ?"
      },
      {
        "accroche": "Vous avez pris le plateau pour deux, quelqu'un a de la chance d'être régalé. Vous connaissez les bons choix de la carte, vous ?",
        "relance": "Moi je me trompe une fois sur deux dans mes commandes. Vous auriez une valeur sûre à me conseiller, vous ?"
      },
      {
        "accroche": "J'ai vu que vous commandiez sur la borne comme un pro, moi je galère à chaque fois. Vous avez le coup de main, vous ?",
        "relance": "Moi ces écrans me rendent fou avec toutes les options. Vous, la techno c'est plutôt naturel pour vous ?"
      },
      {
        "accroche": "Votre badge de boulot dépasse, vous grignotez sur votre pause vous aussi. C'est le repas rapide entre deux missions ?",
        "relance": "Moi je cours toujours pour manger un morceau au travail. Vous, vous prenez le temps de déjeuner d'habitude ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La file n'avance pas d'un pouce, on va avoir le temps de choisir dix fois. Vous êtes pressé ou tranquille, vous ?",
        "relance": "Moi j'ai appris à prendre mon mal en patience dans ces files. Vous, l'attente ça vous agace ou vous relativisez ?"
      },
      {
        "accroche": "Il y a un monde fou pour un simple après-midi, ça déborde de partout. C'est toujours comme ça à cette heure ici ?",
        "relance": "Moi j'évite les heures de pointe autant que possible. Vous connaissez le bon créneau pour venir tranquille, vous ?"
      },
      {
        "accroche": "Ça sent bon partout ici, difficile de résister quand on a un petit creux. Vous craquez souvent pour une pause gourmande, vous ?",
        "relance": "Moi je passe rarement devant sans céder à la tentation. Vous êtes plutôt raisonnable ou gourmand comme moi ?"
      },
      {
        "accroche": "On partage la même table haute faute de place, autant se dire bonjour. Vous êtes du quartier, vous ?",
        "relance": "Moi je viens ici quand je suis de passage dans le coin. Vous fréquentez souvent cet endroit, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est devenu un vrai lieu de vie ces endroits, on y croise tout le monde. Vous trouvez pas que ça brasse du monde ?",
        "relance": "Moi j'aime bien observer l'ambiance de ces lieux populaires. Vous êtes plutôt observateur ou vous filez vite, vous ?"
      },
      {
        "accroche": "On a tous notre commande fétiche qui nous ramène en enfance ici. Vous en avez une qui vous rappelle des souvenirs, vous ?",
        "relance": "Moi c'est le même menu depuis que j'ai dix ans, sans mentir. Vous êtes nostalgique de ce genre de petits plaisirs, vous ?"
      },
      {
        "accroche": "Il y a quelque chose de réconfortant dans une pause comme celle-ci au milieu d'une journée chargée. Vous vivez ça comme une vraie coupure, vous ?",
        "relance": "Moi ces petites pauses me sauvent les grosses journées. Vous, vous décompressez comment quand ça s'accélère ?"
      },
      {
        "accroche": "Finalement on se retrouve tous ici, peu importe d'où on vient, pour le même petit plaisir. C'est ça qui rend l'endroit sympa, non ?",
        "relance": "Moi j'aime cette idée qu'on soit tous logés à la même enseigne ici. Vous êtes sensible à ce genre d'ambiance, vous ?"
      }
    ]
  },
  {
    "id": 104,
    "environnement": "Fast-food",
    "profil": "Cliente dans la file",
    "humeur": "Enjouée",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Gastronomie",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Séduire avec tact",
    "theme": "La gourmandise",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Vous avez commandé un supplément de frites sans hésiter, j'admire l'assurance. Vous assumez la gourmandise jusqu'au bout, vous ?",
        "relance": "Moi j'ai toujours les yeux plus gros que le ventre ici. Vous êtes plutôt raisonnable ou vous craquez comme moi ?"
      },
      {
        "accroche": "Votre choix de sauce en dit long, vous avez pris la plus originale de la carte. Vous aimez sortir des sentiers battus, vous ?",
        "relance": "Moi je teste toujours la nouveauté au risque d'être déçue. Vous êtes du genre curieux ou fidèle à vos habitudes ?"
      },
      {
        "accroche": "Votre tee-shirt de groupe est génial, on a visiblement les mêmes goûts musicaux. Vous les avez déjà vus en concert, vous ?",
        "relance": "Moi je ne rate jamais une occasion d'aller les voir sur scène. Vous seriez plutôt festival ou petite salle intime, vous ?"
      },
      {
        "accroche": "Votre rire avec vos amis s'entend jusqu'ici, c'est communicatif. Vous êtes toujours d'aussi bonne humeur, vous ?",
        "relance": "Moi la bonne humeur des autres, ça me contamine direct. Vous êtes du genre solaire en soirée, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La file est longue ce soir, autant la rendre plus agréable à deux. Vous venez souvent décompresser ici le soir, vous ?",
        "relance": "Moi c'est mon petit rituel après une longue journée. Vous, c'est plutôt sortie improvisée ou habitude, vous ?"
      },
      {
        "accroche": "On hésite tous les deux devant le même menu, je crois qu'un avis extérieur s'impose. Vous me conseilleriez quoi, vous ?",
        "relance": "Moi je suis incapable de choisir sans un coup de pouce. Vous êtes plutôt du genre à décider vite, vous ?"
      },
      {
        "accroche": "L'ambiance est électrique ce soir ici, ça met de bonne humeur. Vous la sentez aussi cette énergie du samedi soir, vous ?",
        "relance": "Moi les soirées animées comme ça me donnent la pêche. Vous, vous êtes plutôt soirée calme ou soirée qui bouge ?"
      },
      {
        "accroche": "On s'est retrouvés à la même table haute, le hasard fait parfois bien les choses. Vous êtes du coin, vous ?",
        "relance": "Moi j'habite à deux pas et je finis souvent mes soirées ici. Vous, vous êtes de passage ou fidèle du quartier ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des gens qui illuminent une salle entière rien qu'en riant, et c'est votre cas. Vous avez toujours cette énergie, vous ?",
        "relance": "Moi je me nourris des rencontres qui pétillent. Vous croyez aux bonnes surprises au coin d'une file d'attente, vous ?"
      },
      {
        "accroche": "On dit qu'on découvre les gens à leur façon de savourer les petits plaisirs, et vous avez l'air de croquer la vie. Je me trompe ?",
        "relance": "Moi j'essaie de profiter à fond des moments simples. Et vous, c'est quoi votre recette pour garder cette légèreté ?"
      },
      {
        "accroche": "C'est rare de croiser quelqu'un d'aussi facile à aborder dans un endroit pareil. Vous parlez aussi facilement à tout le monde, vous ?",
        "relance": "Moi j'adore les gens qui n'ont pas peur d'une conversation spontanée. Vous êtes toujours aussi ouverte, vous ?"
      },
      {
        "accroche": "Ces soirées improvisées ont un charme fou, on ne sait jamais qui on va rencontrer. Vous aimez vous laisser surprendre, vous ?",
        "relance": "Moi je crois que les meilleurs souvenirs ne se planifient pas. Vous êtes plutôt du genre spontanée ou organisée, vous ?"
      }
    ]
  },
  {
    "id": 105,
    "environnement": "Fast-food",
    "profil": "Employé expérimenté",
    "humeur": "Serviable",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Gastronomie",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Demander un avis",
    "theme": "Le bon choix au comptoir",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous connaissez visiblement la carte par cœur, vous servez avec une aisance impressionnante. Vous me conseilleriez quoi pour un premier essai ?",
        "relance": "Moi je viens rarement et je suis un peu perdu devant tout ce choix. Vous avez une valeur sûre à me recommander, vous ?"
      },
      {
        "accroche": "Vous avez recommandé un menu au client d'avant sans hésiter, ça se voit que vous savez. Lequel part le mieux en général, vous ?",
        "relance": "Moi je me fie toujours aux conseils de ceux qui connaissent la maison. Qu'est-ce que les habitués prennent, vous ?"
      },
      {
        "accroche": "Vous avez l'air de faire ça depuis longtemps, avec un vrai calme derrière le comptoir. Vous auriez une astuce pour commander sans se tromper ?",
        "relance": "Moi je regrette souvent mon choix une fois attablé. Comment on évite la déception à votre avis, vous ?"
      },
      {
        "accroche": "Je vous ai vu conseiller la sauce parfaite à quelqu'un, vous avez l'œil pour ça. Vous m'orienteriez vers laquelle, vous ?",
        "relance": "Moi je prends toujours la même par manque d'imagination. Vous en avez une un peu secrète à me faire découvrir, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "C'est ma première fois dans cette enseigne et je suis un peu dépassé par le menu. Vous pourriez m'aiguiller, vous ?",
        "relance": "Moi je me laisse vite déborder par trop d'options. Vous conseillez de commencer par les classiques, vous ?"
      },
      {
        "accroche": "Il y a du monde et je ne veux pas retarder la file avec mes hésitations. Vous auriez un conseil rapide pour me décider, vous ?",
        "relance": "Moi je stresse toujours de faire attendre les gens derrière. Vous, vous voyez souvent des indécis comme moi, vous ?"
      },
      {
        "accroche": "On m'a dit que c'était le meilleur du quartier, et vous devez y être pour quelque chose. C'est quoi le plat qui fait votre réputation, vous ?",
        "relance": "Moi je fais confiance à ceux qui bossent dans le lieu avant tout. Qu'est-ce que vous prenez vous-même à la pause, vous ?"
      },
      {
        "accroche": "Je viens chercher de quoi faire plaisir à des enfants difficiles, et je sèche complètement. Vous auriez une idée qui plaît à tous les coups, vous ?",
        "relance": "Moi avec les petits je ne sais jamais sur quoi miser. Qu'est-ce qui marche à tous les coups avec eux, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Avec l'expérience vous devez deviner ce qui va plaire à un client rien qu'en le regardant. Ça se développe avec le temps, ce flair ?",
        "relance": "Moi je suis toujours indécis, même après des années. Vous diriez qu'il y a un profil de bon client facile à conseiller ?"
      },
      {
        "accroche": "Le métier a dû beaucoup changer avec toutes ces bornes et ces nouveautés. Qu'est-ce qui reste immuable selon vous ?",
        "relance": "Moi j'ai du mal à suivre le rythme de toutes ces évolutions. Vous préférez l'ancienne façon de faire ou la nouvelle, vous ?"
      },
      {
        "accroche": "Vous voyez défiler un monde fou chaque jour, ça doit en dire long sur les gens. Qu'est-ce qui vous surprend encore après tout ce temps ?",
        "relance": "Moi j'imagine mal la patience qu'il faut pour ce métier. Qu'est-ce qui vous plaît le plus dans le contact avec les clients, vous ?"
      },
      {
        "accroche": "Ça se sent que vous aimez rendre service, vous prenez le temps malgré la file. C'est important pour vous, ce contact humain ?",
        "relance": "Moi j'apprécie toujours quand quelqu'un prend le temps de bien conseiller. Qu'est-ce qui vous motive à faire ça avec le sourire, vous ?"
      }
    ]
  },
  {
    "id": 106,
    "environnement": "Bibliothèque",
    "profil": "Étudiante en révisions",
    "humeur": "Concentrée",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Créer un premier lien simple",
    "theme": "Silence studieux",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vos surligneurs sont classés par couleur, ça a l'air super carré votre méthode, vous fonctionnez comment ?",
        "relance": "Moi je surligne tout en jaune et je m'y retrouve plus après, vous avez un code pour chaque couleur ?"
      },
      {
        "accroche": "Je vois un gros pavé de droit sur votre table, vous êtes dans quelle matière ?",
        "relance": "Moi j'ai lâché le droit en deux semaines à la fac, qu'est-ce qui vous plaît là-dedans ?"
      },
      {
        "accroche": "Vous avez des post-it partout sur votre écran, c'est votre truc anti-panique avant les partiels ?",
        "relance": "Moi je note tout sur ma main et ça part au premier lavage, vous les gardez longtemps ?"
      },
      {
        "accroche": "Votre thermos a l'air d'être votre meilleur allié cet aprem, c'est café ou thé la potion magique ?",
        "relance": "Moi sans un thé toutes les heures je m'endors sur mes fiches, vous tenez jusqu'à quelle heure ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cette salle est hyper calme aujourd'hui, vous venez souvent réviser ici ?",
        "relance": "Moi je découvre l'endroit, c'est mon premier passage, vous avez un coin préféré ?"
      },
      {
        "accroche": "Il n'y a presque plus une place de libre, on dirait que tout le monde a eu la même idée, c'est toujours plein comme ça ?",
        "relance": "Moi j'ai galéré vingt minutes à trouver une chaise, vous arrivez tôt pour avoir votre spot ?"
      },
      {
        "accroche": "Le radiateur derrière nous fait un bruit rigolo, vous l'aviez remarqué ou c'est moi qui deviens dingue ?",
        "relance": "Moi ça fait dix minutes que ça me déconcentre, vous arrivez à faire abstraction du bruit ?"
      },
      {
        "accroche": "On partage la même grande table depuis une heure sans un mot, autant se dire bonjour, vous bossez sur quoi de beau ?",
        "relance": "Moi je prépare un oral qui me stresse pas mal, et vous, c'est la dernière ligne droite ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve ça fou comme une bibliothèque nous rend tous plus sérieux d'un coup, vous ressentez ça aussi ?",
        "relance": "Moi je bosse deux fois mieux ici que chez moi, et vous, c'est quoi votre lieu de concentration idéal ?"
      },
      {
        "accroche": "Réviser à plusieurs dans le silence, c'est bizarre comme sentiment d'être ensemble mais seuls, non ?",
        "relance": "Moi ça me rassure de voir d'autres gens galérer en même temps que moi, ça vous motive vous aussi ?"
      },
      {
        "accroche": "J'ai l'impression qu'on apprend mieux quand on est entouré de gens qui bossent, vous y croyez à cette énergie collective ?",
        "relance": "Moi seul chez moi je procrastine des heures, vous avez besoin des autres pour avancer aussi ?"
      },
      {
        "accroche": "C'est marrant, on est à l'ère du tout numérique et pourtant on revient tous vers les livres papier, ça vous parle ?",
        "relance": "Moi je retiens rien sur écran, il me faut du papier, et vous, plutôt tablette ou vieux bouquin ?"
      }
    ]
  },
  {
    "id": 107,
    "environnement": "Bibliothèque",
    "profil": "Lecteur retraité passionné",
    "humeur": "Paisible",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Culture",
    "proximite": "Habitué",
    "audace": 2,
    "objectif": "Recueillir une recommandation de lecture",
    "theme": "Transmission littéraire",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous avez une pile de romans historiques impressionnante, vous auriez un titre à conseiller à un débutant comme moi ?",
        "relance": "Moi je n'ai jamais osé m'y mettre par peur de m'ennuyer, par lequel vous me diriez de commencer ?"
      },
      {
        "accroche": "Vos lunettes de lecture ont l'air d'avoir vu passer des milliers de pages, vous lisez depuis toujours ?",
        "relance": "Moi je me suis remis à lire tard, la trentaine passée, vous avez toujours été un grand lecteur ?"
      },
      {
        "accroche": "Je vois que vous prenez des notes en marge de votre livre, c'est une habitude que vous conseilleriez ?",
        "relance": "Moi j'ai peur d'abîmer mes bouquins en écrivant dedans, vous en pensez quoi de les annoter ?"
      },
      {
        "accroche": "Ce carnet à côté de vous a l'air rempli de références, vous notez tout ce que vous lisez ?",
        "relance": "Moi j'oublie les livres deux mois après les avoir finis, comment vous faites pour retenir ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous semblez connaître cette bibliothèque par cœur, vous sauriez où trouver un bon roman policier ?",
        "relance": "Moi je tourne en rond dans les rayons sans savoir quoi prendre, vous avez vos coins de prédilection ?"
      },
      {
        "accroche": "C'est calme le matin ici, vous venez à cette heure pour être tranquille ?",
        "relance": "Moi je découvre que le matin c'est le meilleur moment, vous avez toujours ce rituel ?"
      },
      {
        "accroche": "La bibliothécaire vous salue par votre nom, vous devez être un pilier de l'endroit, vous venez depuis longtemps ?",
        "relance": "Moi je débarque tout juste dans le quartier, vous me conseilleriez de m'inscrire ici ?"
      },
      {
        "accroche": "Ils ont refait le rayon des nouveautés là-bas, vous y avez déjà déniché quelque chose de bien ?",
        "relance": "Moi je suis un peu perdu avec toutes les sorties récentes, vous suivez l'actualité littéraire ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je me demande souvent ce qui fait qu'un livre nous marque à vie, vous auriez une théorie là-dessus ?",
        "relance": "Moi c'est toujours une émotion précise qui me reste, et vous, qu'est-ce qui rend un roman inoubliable ?"
      },
      {
        "accroche": "Avec l'expérience, on doit finir par savoir tout de suite si un livre va nous plaire, vous avez ce flair ?",
        "relance": "Moi je me fais encore avoir par les jolies couvertures, comment vous choisissez vos lectures ?"
      },
      {
        "accroche": "J'ai l'impression que les gens lisent de moins en moins, vous trouvez aussi que ça se perd ?",
        "relance": "Moi je culpabilise de passer trop de temps sur mon téléphone, vous arrivez à garder le réflexe du livre ?"
      },
      {
        "accroche": "On dit qu'un bon livre nous change un peu à chaque fois, vous en avez un qui a changé votre vie ?",
        "relance": "Moi il y en a un qui m'a fait choisir mon métier, vous en avez un qui vous a marqué à ce point ?"
      }
    ]
  },
  {
    "id": 108,
    "environnement": "Bibliothèque",
    "profil": "Jeune homme rêveur au rayon poésie",
    "humeur": "Songeur",
    "ageGroupe": "Jeune",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 3,
    "objectif": "Créer une étincelle avec délicatesse",
    "theme": "Charme feutré",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Un homme qui traîne au rayon poésie un mardi après-midi, ça m'intrigue, c'est quoi votre poète secret ?",
        "relance": "Moi j'ai un faible pour Prévert, c'est simple et ça touche juste, vous auriez un vers à me faire découvrir ?"
      },
      {
        "accroche": "Vous avez un demi-sourire depuis tout à l'heure en lisant, votre livre est aussi charmant que ça ?",
        "relance": "Moi quand un texte me plaît j'ai le même sourire idiot, qu'est-ce qui vous met de si bonne humeur là ?"
      },
      {
        "accroche": "Votre marque-page est une vieille carte postale, ça cache une jolie histoire ou je me fais des films ?",
        "relance": "Moi je garde tous mes tickets de ciné en marque-page, et vous, c'est un souvenir particulier ?"
      },
      {
        "accroche": "Vous avez souligné un passage à la main dans votre livre, ça devait vraiment vous parler, je peux savoir lequel ?",
        "relance": "Moi je souligne toujours les phrases qui me font penser à quelqu'un, c'est le cas pour vous aussi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On se croise devant le même rayon depuis dix minutes, je crois que le destin veut qu'on se parle, vous cherchez quoi ?",
        "relance": "Moi je fais semblant de chercher un livre alors que je vous observais, avouez que vous aussi vous hésitiez ?"
      },
      {
        "accroche": "Il fait une lumière magnifique par cette fenêtre juste là, c'est votre place attitrée cette jolie lumière ?",
        "relance": "Moi je choisis toujours ma table selon la lumière, on a peut-être le même goût pour les beaux coins ?"
      },
      {
        "accroche": "C'est rare de croiser quelqu'un d'aussi calme dans une ville aussi pressée, vous êtes toujours aussi zen ?",
        "relance": "Moi j'ai mis des années à ralentir, vous avez ce truc naturellement ou c'est le lieu qui vous apaise ?"
      },
      {
        "accroche": "On chuchote tous les deux comme des conspirateurs, autant assumer, on prend un café dehors quand vous avez fini ?",
        "relance": "Moi j'ai fini mon chapitre et je meurs d'envie de discuter à voix haute, vous me suivez pour une pause ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'il faut un certain courage pour lire de la poésie aujourd'hui, ça en dit long sur quelqu'un, vous ne trouvez pas ?",
        "relance": "Moi je crois qu'on lit de la poésie quand on ressent les choses fort, vous êtes de cette espèce-là ?"
      },
      {
        "accroche": "C'est beau une bibliothèque, c'est un des rares endroits où deux inconnus peuvent partager un silence sans gêne, vous aimez ça aussi ?",
        "relance": "Moi j'y trouve quelque chose de romanesque, et vous, ça vous inspire quoi cet endroit ?"
      },
      {
        "accroche": "On dit qu'on tombe amoureux des gens à travers ce qu'ils lisent, vous y croyez à cette idée ?",
        "relance": "Moi je jette toujours un œil aux livres des autres dans le métro, vous faites pareil ou c'est indiscret ?"
      },
      {
        "accroche": "Il y a un charme fou dans les rencontres qui ne se cherchent pas, vous croyez au hasard des bonnes rencontres ?",
        "relance": "Moi je crois que les plus belles arrivent quand on ne les attend pas, vous êtes plutôt hasard ou destin ?"
      }
    ]
  },
  {
    "id": 109,
    "environnement": "Cinéma",
    "profil": "Spectateur seul avant la séance",
    "humeur": "Curieux",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Engager une conversation simple",
    "theme": "Avant la séance",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Vous avez pris le format XXL de pop-corn, vous jouez dans la cour des vrais amateurs, c'est sucré ou salé la vraie religion ?",
        "relance": "Moi je suis team salé sans négociation possible, vous êtes de quel côté de la guerre du pop-corn ?"
      },
      {
        "accroche": "Je vois votre ticket dans la main, on va peut-être voir le même film, vous êtes venu pour quoi ce soir ?",
        "relance": "Moi j'ai pris ma place au dernier moment sur un coup de tête, et vous, c'était prévu depuis longtemps ?"
      },
      {
        "accroche": "Votre écharpe est déjà de sortie alors qu'on est à l'intérieur, vous avez froid ou c'est un porte-bonheur de cinéma ?",
        "relance": "Moi j'ai toujours un pull dans mon sac car les salles sont glaciales, vous aussi vous prévoyez le coup ?"
      },
      {
        "accroche": "Vous consultez les affiches avec attention, vous hésitez encore entre deux films ?",
        "relance": "Moi j'ai failli changer d'avis trois fois devant le programme, vous êtes plutôt décidé d'avance ou spontané ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On fait la queue depuis un moment tous les deux, vous savez si la séance est complète ce soir ?",
        "relance": "Moi je stresse toujours de ne pas avoir de place, vous réservez en ligne d'habitude ?"
      },
      {
        "accroche": "Ce cinéma a un charme d'ancien avec ses fauteuils rouges, vous êtes un habitué du coin ?",
        "relance": "Moi je le découvre ce soir et je le trouve mille fois mieux que les multiplexes, vous venez souvent ici ?"
      },
      {
        "accroche": "Ils passent une bande-annonce sympa sur l'écran du hall, vous l'avez vue, ça vous tente ce prochain film ?",
        "relance": "Moi je me laisse toujours avoir par les bandes-annonces, et vous, ça vous donne envie ce genre-là ?"
      },
      {
        "accroche": "Il y a du monde pour un soir de semaine, ça doit être un bon film pour attirer autant de gens, vous avez eu de bons échos ?",
        "relance": "Moi je suis venu sans rien savoir de l'histoire, et vous, vous aviez lu des critiques avant ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'aller au cinéma seul c'est un vrai plaisir sous-estimé, vous ressentez ça aussi ?",
        "relance": "Moi c'est mon petit rituel pour souffler, et vous, c'est plutôt sortie solo ou entre amis d'habitude ?"
      },
      {
        "accroche": "C'est fou qu'on continue à se déplacer en salle à l'époque du streaming, il y a quelque chose d'irremplaçable, non ?",
        "relance": "Moi rien ne vaut le grand écran et le noir complet, vous êtes plutôt salle ou canapé vous ?"
      },
      {
        "accroche": "Un film peut vraiment changer notre humeur pour toute la soirée, vous croyez à ce pouvoir des histoires ?",
        "relance": "Moi je sors parfois transformé d'une séance, et vous, quel genre de film vous met en joie ?"
      },
      {
        "accroche": "J'aime l'idée qu'on va tous rire ou pleurer ensemble dans le noir sans se connaître, vous trouvez ça beau aussi ?",
        "relance": "Moi ce moment collectif me touche à chaque fois, ça vous fait quelque chose à vous ce partage silencieux ?"
      }
    ]
  },
  {
    "id": 110,
    "environnement": "Cinéma",
    "profil": "Jeune femme au comptoir des glaces",
    "humeur": "Enjouée",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 3,
    "objectif": "Séduire avec légèreté",
    "theme": "Rencontre pétillante",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Vous hésitez depuis un moment devant les glaces, je peux vous aider à faire ce choix crucial de la soirée ?",
        "relance": "Moi je prends toujours la même par peur de regretter, vous êtes plutôt classique ou aventurière niveau parfum ?"
      },
      {
        "accroche": "Votre rire s'entend jusqu'ici, vous avez l'air d'attaquer la soirée de la meilleure des façons, c'est comédie ce soir ?",
        "relance": "Moi j'ai justement choisi un film léger pour rire un peu, on a peut-être le même programme, non ?"
      },
      {
        "accroche": "Vos ongles sont assortis à votre veste, ce genre de détail me fait toujours penser que la personne a du goût, je me trompe ?",
        "relance": "Moi je suis incapable d'assortir quoi que ce soit, vous m'apprendrez le secret autour d'un verre après le film ?"
      },
      {
        "accroche": "Vous portez le même parfum que quelqu'un que j'aimais beaucoup, c'est troublant, je peux savoir lequel ?",
        "relance": "Moi je repère les gens à leur parfum avant même leur visage, le vôtre me reste déjà en tête, c'est grave docteur ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On va sûrement voir le même film vu qu'il n'y a qu'une séance à cette heure, autant s'asseoir côte à côte, non ?",
        "relance": "Moi je déteste être seule sur toute une rangée, vous seriez d'accord pour qu'on partage l'accoudoir ?"
      },
      {
        "accroche": "Ce hall est bien trop beau pour qu'on le traverse chacun de son côté sans se parler, vous ne trouvez pas ?",
        "relance": "Moi je me disais justement que ce serait dommage de ne pas engager la conversation, je me trompe sur vous ?"
      },
      {
        "accroche": "La séance est en retard, ça nous laisse le temps parfait pour faire connaissance, on commence par quoi ?",
        "relance": "Moi j'adore quand un imprévu offre une occasion pareille, vous croyez au petit coup de pouce du destin ?"
      },
      {
        "accroche": "Il fait un froid de canard dehors et il fait tout doux ici, on est carrément bien pour discuter, vous ne partez pas tout de suite ?",
        "relance": "Moi je n'ai aucune envie de ressortir dans ce froid, restons au chaud à papoter un peu, ça vous dit ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'on devine beaucoup d'une personne à sa façon de rire, et le vôtre promet, vous êtes toujours comme ça ?",
        "relance": "Moi j'ai un rire qui gêne tout le cinéma, vous risquez de me repérer pendant le film, ça vous fait peur ?"
      },
      {
        "accroche": "Les meilleures soirées sont souvent celles qu'on n'avait pas prévues, vous êtes d'accord avec ça ?",
        "relance": "Moi je sens que celle-ci part bien grâce à cette rencontre, vous laissez souvent le hasard décider pour vous ?"
      },
      {
        "accroche": "Il paraît qu'on peut tomber sous le charme de quelqu'un en cinq minutes, vous y croyez vous à ces choses-là ?",
        "relance": "Moi je suis plutôt du genre à me laisser surprendre, et vous, prudente ou joueuse en amour ?"
      },
      {
        "accroche": "J'aime les gens qui dégagent une énergie positive comme la vôtre, c'est rare, d'où ça vient chez vous ?",
        "relance": "Moi je carbure à la bonne humeur des autres, vous êtes contagieuse ce soir, c'est votre nature profonde ?"
      }
    ]
  },
  {
    "id": 111,
    "environnement": "Cinéma",
    "profil": "Habitué du café du hall",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Papoter en attendant sans enjeu",
    "theme": "Petite pause bavarde",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez pris un chocolat chaud alors qu'on est en pleine journée, c'est le genre de petit plaisir qui réchauffe, hein ?",
        "relance": "Moi je craque toujours pour un chaud même en plein aprem, vous êtes gourmand comme moi ou raisonnable ?"
      },
      {
        "accroche": "Votre parapluie dégouline encore, ça tombe fort dehors on dirait, vous avez pris cher sur le chemin ?",
        "relance": "Moi je suis arrivé trempé jusqu'aux chaussettes, vous avez réussi à échapper à l'averse vous ?"
      },
      {
        "accroche": "Vous feuilletez le programme papier, ça se fait de plus en plus rare, vous êtes plutôt du genre à tout planifier ?",
        "relance": "Moi je décide toujours à la dernière minute devant l'écran, et vous, vous aimez avoir un plan à l'avance ?"
      },
      {
        "accroche": "Votre sac a l'air rempli de courses, vous avez calé le cinéma entre deux missions de la journée ?",
        "relance": "Moi je case toujours une séance après mes courses pour souffler, vous faites ça souvent le milieu de semaine ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce petit café dans le hall est plutôt sympa pour tuer le temps, vous attendez la prochaine séance aussi ?",
        "relance": "Moi j'ai vingt minutes à patienter et je m'ennuie ferme, vous savez à quelle heure ça commence vous ?"
      },
      {
        "accroche": "Il pleut des cordes dehors, on est bien contents d'être au sec ici, non ?",
        "relance": "Moi je me suis carrément réfugié au ciné à cause de la météo, et vous, c'était prévu ou vous fuyez la pluie aussi ?"
      },
      {
        "accroche": "C'est calme cet après-midi comparé aux soirs de week-end, vous préférez venir aux heures creuses ?",
        "relance": "Moi j'évite la foule autant que possible, vous êtes du même avis pour les séances tranquilles ?"
      },
      {
        "accroche": "Ils ont changé toute la déco du hall depuis la dernière fois, vous l'aviez remarqué ?",
        "relance": "Moi j'aimais bien l'ancienne ambiance, et vous, vous trouvez que c'est mieux ou moins bien maintenant ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il n'y a rien de mieux qu'une séance de ciné un jour de pluie, vous ne trouvez pas ?",
        "relance": "Moi la pluie me donne toujours envie de me poser au chaud, vous êtes plutôt cocooning quand il fait mauvais aussi ?"
      },
      {
        "accroche": "C'est agréable ces petits moments suspendus où on n'a rien à faire qu'attendre, vous savez en profiter vous ?",
        "relance": "Moi je cours tout le temps alors ces pauses me font du bien, et vous, vous arrivez à ralentir facilement ?"
      },
      {
        "accroche": "On dirait que tout le monde vient chercher un peu de réconfort au cinéma quand la météo est grise, vous croyez à cet effet ?",
        "relance": "Moi un mauvais temps me pousse toujours vers une salle obscure, ça vous fait le même effet ou pas du tout ?"
      },
      {
        "accroche": "Franchement, une boisson chaude et un bon film, c'est une recette imbattable pour une journée réussie, vous validez ?",
        "relance": "Moi ce serait mon programme idéal tous les jours de pluie, et vous, c'est quoi votre recette antimorosité ?"
      }
    ]
  },
  {
    "id": 112,
    "environnement": "Laverie",
    "profil": "Voisin retraité et bavard",
    "humeur": "Serein",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Habitué",
    "audace": 2,
    "objectif": "Obtenir une astuce pratique",
    "theme": "Sagesse du quotidien",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous avez l'air de savoir exactement quel programme lancer, moi je suis un peu perdu, vous auriez un conseil pour les couleurs ?",
        "relance": "Moi j'ai déjà déteint un pull tout neuf, vous faites comment pour ne jamais vous tromper ?"
      },
      {
        "accroche": "Votre lessive sent divinement bon, c'est quoi votre secret pour un linge qui embaume comme ça ?",
        "relance": "Moi j'achète toujours au hasard en supermarché, vous auriez une marque à me recommander ?"
      },
      {
        "accroche": "Vous pliez votre linge avec une technique super nette, vous m'apprendriez à faire pareil ?",
        "relance": "Moi mes t-shirts ressemblent à des boules de papier, vous avez une méthode qui gagne du temps ?"
      },
      {
        "accroche": "Vous avez apporté votre propre panier plutôt qu'un sac, c'est plus malin, vous avez d'autres astuces comme ça ?",
        "relance": "Moi je transporte tout dans un sac plastique qui craque à chaque fois, vous équipez comment votre routine ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez l'air de bien connaître cette laverie, vous sauriez quelle machine tourne le mieux ?",
        "relance": "Moi je tombe toujours sur celle qui essore mal, vous avez repéré lesquelles éviter ?"
      },
      {
        "accroche": "C'est tranquille le matin ici, vous venez à cette heure exprès pour avoir toutes les machines ?",
        "relance": "Moi je viens de m'installer dans le quartier, vous me conseilleriez plutôt le matin ou le soir pour être peinard ?"
      },
      {
        "accroche": "Le distributeur de jetons a l'air capricieux, vous savez comment il faut s'y prendre ?",
        "relance": "Moi il a avalé ma pièce sans rien me donner, vous auriez une combine pour ces machines-là ?"
      },
      {
        "accroche": "On attend tous les deux que ça tourne, vous patientez comment vous d'habitude pendant ce temps mort ?",
        "relance": "Moi je tourne en rond sans savoir quoi faire, vous ramenez de quoi vous occuper vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "À force d'expérience, vous devez avoir plein de petits gestes qui simplifient la vie, vous en partageriez un avec moi ?",
        "relance": "Moi je découvre à peine comment gérer un intérieur seul, quel conseil vous auriez aimé recevoir jeune ?"
      },
      {
        "accroche": "Je trouve qu'on ne nous apprend jamais ces trucs du quotidien à l'école, vous avez appris tout ça sur le tas ?",
        "relance": "Moi j'ai tout appris en ratant, et vous, quelqu'un vous a transmis ces astuces ou vous avez tâtonné ?"
      },
      {
        "accroche": "Il paraît qu'on juge la maturité de quelqu'un à sa façon de gérer sa lessive, vous en pensez quoi vous ?",
        "relance": "Moi j'ai mis des années à devenir autonome là-dessus, à partir de quand on devient vraiment adulte selon vous ?"
      },
      {
        "accroche": "C'est fou comme les tâches simples deviennent apaisantes avec l'âge, vous trouvez ça reposant vous cette routine ?",
        "relance": "Moi je commence à y voir un moment calme plutôt qu'une corvée, vous vivez ça comme un plaisir ou une contrainte ?"
      }
    ]
  },
  {
    "id": 113,
    "environnement": "Laverie",
    "profil": "Voisine du quartier pressée",
    "humeur": "Décontractée",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Meubler l'attente en discutant",
    "theme": "Discussion sans enjeu",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez sorti un bouquin pour patienter, bonne idée, il est bien au moins pour tuer le temps ?",
        "relance": "Moi j'ai oublié mon livre et je m'ennuie à regarder tourner le tambour, vous lisez quoi de sympa ?"
      },
      {
        "accroche": "Vos écouteurs autour du cou, vous étiez en pleine playlist là, c'est quoi la bande-son de votre lessive ?",
        "relance": "Moi je mets toujours un podcast pour patienter, et vous, plutôt musique ou silence pendant l'attente ?"
      },
      {
        "accroche": "Vous avez un sac de linge énorme ce soir, c'est la grande lessive du mois ?",
        "relance": "Moi j'ai laissé traîner trois semaines et je le paie ce soir, vous êtes du genre organisée ou dernière minute aussi ?"
      },
      {
        "accroche": "Vos baskets sont dans une machine à part, vous les lavez souvent comme ça vous ?",
        "relance": "Moi je n'ai jamais osé mettre les miennes en machine de peur de les abîmer, ça tient le coup les vôtres ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On dirait que toutes les machines sont prises ce soir, vous attendez qu'une se libère aussi ?",
        "relance": "Moi ça fait dix minutes que je guette, vous savez combien de temps il reste sur celle-là ?"
      },
      {
        "accroche": "C'est animé pour un soir de semaine cette laverie, c'est toujours comme ça d'habitude ?",
        "relance": "Moi je viens rarement le soir, et vous, c'est votre créneau habituel ce coup de feu ?"
      },
      {
        "accroche": "Il fait une chaleur pas possible avec tous ces sèche-linge qui tournent, vous trouvez pas ?",
        "relance": "Moi je ressors toujours d'ici en nage, vous vous habituez ou ça vous assomme aussi cette étuve ?"
      },
      {
        "accroche": "Le quartier a l'air sympa dans le coin, vous habitez juste à côté ?",
        "relance": "Moi je viens d'emménager à deux rues, et vous, vous êtes là depuis longtemps dans le secteur ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est marrant, la laverie c'est un des derniers endroits où les voisins se parlent encore, vous trouvez pas ?",
        "relance": "Moi j'aime bien ce petit côté rencontre de quartier, et vous, vous connaissez du monde par ici ?"
      },
      {
        "accroche": "On râle sur la corvée de linge mais au fond ce moment forcé de pause fait un peu de bien, non ?",
        "relance": "Moi c'est le seul créneau où je ne fais rien de la semaine, vous le vivez comment vous ce temps mort ?"
      },
      {
        "accroche": "Je me dis qu'on passe une bonne partie de notre vie à attendre des machines, c'est fou quand on y pense, non ?",
        "relance": "Moi j'essaie d'en profiter pour souffler, et vous, vous êtes plutôt du genre à optimiser chaque minute ?"
      },
      {
        "accroche": "Les petites routines comme ça finissent par rythmer nos semaines, vous aimez avoir vos habitudes vous ?",
        "relance": "Moi j'ai besoin de mes repères pour tenir la semaine, vous fonctionnez à la routine ou à l'improvisation ?"
      }
    ]
  },
  {
    "id": 114,
    "environnement": "Laverie",
    "profil": "Étudiant étranger souriant",
    "humeur": "Avenant",
    "ageGroupe": "Jeune",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Social",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Faire connaissance simplement",
    "theme": "Premier contact",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre tote-bag a un logo d'une fac que je connais, vous étudiez dans le coin ?",
        "relance": "Moi j'ai fait mes études pas loin, ça me rappelle des souvenirs, vous êtes dans quelle filière ?"
      },
      {
        "accroche": "Vous avez un petit accent charmant, vous venez d'où si je peux me permettre ?",
        "relance": "Moi j'ai vécu un an à l'étranger et ça m'a marqué, qu'est-ce qui vous a amené jusqu'ici ?"
      },
      {
        "accroche": "Vous avez l'air de galérer avec les instructions de la machine, je vous donne un coup de main ?",
        "relance": "Moi la première fois j'ai lancé un cycle à vide comme un champion, vous vous en sortez sinon ?"
      },
      {
        "accroche": "Votre carnet est couvert de notes dans une autre langue, ça m'intrigue, c'est pour vos cours ?",
        "relance": "Moi j'ai toujours rêvé d'être bilingue, vous jonglez entre combien de langues au quotidien ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On est les deux seuls ici cet après-midi, autant se dire bonjour, vous venez souvent à cette heure ?",
        "relance": "Moi c'est mon créneau tranquille de la semaine, et vous, vous avez trouvé votre rythme dans le quartier ?"
      },
      {
        "accroche": "Cette laverie est un peu cachée, pas facile à trouver quand on est nouveau, vous l'avez dénichée comment ?",
        "relance": "Moi un voisin me l'a indiquée, et vous, vous commencez à repérer les bons plans du coin ?"
      },
      {
        "accroche": "Il y a un petit café juste en face qui a l'air sympa, vous l'avez déjà testé pendant que ça tourne ?",
        "relance": "Moi j'y file toujours prendre un truc en attendant, ça vous dirait d'y aller le temps du cycle ?"
      },
      {
        "accroche": "On attend tous les deux pareil, autant papoter, vous êtes installé dans le quartier depuis longtemps ?",
        "relance": "Moi ça fait deux ans que j'y suis et j'adore, et vous, vous vous sentez bien ici pour l'instant ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve ça courageux de venir étudier loin de chez soi, ça demande sacrément d'ouverture, vous vivez ça comment ?",
        "relance": "Moi je ne sais pas si j'aurais osé, qu'est-ce qui vous a donné envie de tenter l'aventure ?"
      },
      {
        "accroche": "C'est fou comme des petits lieux du quotidien deviennent un vrai repère quand on est nouveau quelque part, vous trouvez aussi ?",
        "relance": "Moi quand j'ai déménagé, la laverie a été ma première habitude, et vous, vous commencez à vous sentir chez vous ?"
      },
      {
        "accroche": "Rencontrer des gens dans un nouveau pays, ça doit être à la fois excitant et intimidant, vous le prenez comment ?",
        "relance": "Moi je suis plutôt timide au début, vous, vous allez facilement vers les autres ou ça vous coûte un peu ?"
      },
      {
        "accroche": "J'ai l'impression que les meilleures amitiés naissent souvent dans les endroits les plus banals, vous y croyez à ça ?",
        "relance": "Moi j'ai rencontré mon meilleur pote dans une file d'attente, et vous, vos belles rencontres, c'était comment ?"
      }
    ]
  },
  {
    "id": 115,
    "environnement": "Plage",
    "profil": "Jeune femme qui lit sous un parasol",
    "humeur": "Rayonnante",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Nature",
    "proximite": "Croisé",
    "audace": 3,
    "objectif": "Séduire avec charme et tact",
    "theme": "Flirt estival",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Votre livre a l'air de vous passionner, vous n'avez pas levé les yeux depuis un moment, il est si captivant que ça ?",
        "relance": "Moi je n'arrive jamais à lire à la plage tellement je suis distrait, vous avez le secret de la concentration, dites-moi tout ?"
      },
      {
        "accroche": "Votre chapeau de paille vous va terriblement bien, vous devez le savoir, c'est un souvenir de vacances ?",
        "relance": "Moi j'ai toujours l'air ridicule avec un chapeau, vous portez ça avec une aisance folle, c'est un don ?"
      },
      {
        "accroche": "Vous avez choisi le plus beau coin de la plage, à l'ombre et face à l'eau, vous avez l'œil pour les bons spots, non ?",
        "relance": "Moi je me suis grillé au soleil comme un débutant, vous m'accueilleriez sous votre parasol le temps d'une discussion ?"
      },
      {
        "accroche": "Votre carnet de croquis dépasse de votre sac, vous dessinez la mer ou vous croquez les gens en douce ?",
        "relance": "Moi je suis incapable de tracer un rond correct, vous me montreriez ce que vous avez dessiné aujourd'hui ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On a tous les deux fui la foule pour ce coin plus calme, on a visiblement le même bon goût, vous venez souvent ici ?",
        "relance": "Moi je cherche toujours les endroits tranquilles, vous avez d'autres bons plans sur cette plage à me confier ?"
      },
      {
        "accroche": "Le coucher de soleil va être magnifique d'ici une heure, ce serait dommage de le regarder chacun de son côté, non ?",
        "relance": "Moi je ne rate jamais un coucher de soleil, ça vous dirait qu'on le partage tout à l'heure ?"
      },
      {
        "accroche": "L'eau est parfaite à cette heure, vous comptez vous baigner ou vous êtes plutôt team bronzette ?",
        "relance": "Moi j'hésite à y aller seul, vous seriez partante pour une baignade avant que le soleil descende ?"
      },
      {
        "accroche": "Cette petite brise rend l'après-midi parfait, on est carrément au bon endroit au bon moment, vous ne trouvez pas ?",
        "relance": "Moi je me dis qu'il faut savoir savourer ces instants-là, vous êtes du genre à profiter de la vie vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a quelque chose dans les rencontres de bord de mer qui rend tout plus simple et léger, vous ressentez ça aussi ?",
        "relance": "Moi je suis toujours plus moi-même en vacances, et vous, la mer vous rend plus ouverte aussi ?"
      },
      {
        "accroche": "On dit que la mer révèle le vrai caractère des gens, calmes ou aventuriers, vous êtes plutôt de quel côté ?",
        "relance": "Moi je suis un aventurier des vagues, et vous, vous préférez contempler ou vous jeter à l'eau ?"
      },
      {
        "accroche": "J'aime l'idée que l'été rend les gens plus audacieux, plus vivants, vous croyez à cette magie estivale ?",
        "relance": "Moi l'été me donne toujours envie d'oser des choses, comme venir vous parler, ça vous fait le même effet ?"
      },
      {
        "accroche": "Face à l'immensité de la mer, on se sent tout petit mais bizarrement libre, vous vivez ça comment vous ?",
        "relance": "Moi ça me remet toujours les idées en place, et vous, la mer vous inspire quoi au fond ?"
      }
    ]
  },
  {
    "id": 116,
    "environnement": "Plage",
    "profil": "Pêcheur du coin expérimenté",
    "humeur": "Posé",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Nature",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Demander conseil à un connaisseur",
    "theme": "Savoir du littoral",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous avez tout un attirail de pêche vraiment sérieux, vous auriez un conseil pour un total débutant comme moi ?",
        "relance": "Moi je n'ai jamais tenu une canne de ma vie, par quoi vous me diriez de commencer ?"
      },
      {
        "accroche": "Votre casquette a bien vécu, elle a dû voir passer des saisons entières ici, vous pêchez depuis longtemps ?",
        "relance": "Moi je débarque dans la région, et vous, vous connaissez ce coin de côte depuis toujours ?"
      },
      {
        "accroche": "Vous scrutez l'eau avec attention, vous lisez quelque chose que je ne vois pas, c'est quoi les bons signes ?",
        "relance": "Moi je serais incapable de dire où ça mord, vous repérez ça à quoi exactement ?"
      },
      {
        "accroche": "Votre seau est déjà bien rempli à cette heure, vous avez visiblement la main, c'est quoi votre secret du matin ?",
        "relance": "Moi je me lève tôt sans jamais rien attraper, vous croyez que c'est l'heure ou la technique qui fait tout ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous devez connaître cette plage par cœur, vous sauriez me dire les meilleurs coins pour se baigner sans danger ?",
        "relance": "Moi j'ai peur des courants que je ne connais pas, vous auriez des endroits à éviter à me signaler ?"
      },
      {
        "accroche": "C'est calme et beau le matin ici, vous venez tôt exprès pour ce moment ?",
        "relance": "Moi je découvre à peine le lever du jour sur cette côte, vous avez ce rituel depuis longtemps ?"
      },
      {
        "accroche": "La marée descend vite là, vous savez lire les horaires les yeux fermés j'imagine, comment vous vous repérez ?",
        "relance": "Moi je me fais toujours surprendre par la marée, vous auriez une astuce simple pour ne pas se faire piéger ?"
      },
      {
        "accroche": "Le ciel a une drôle de couleur ce matin, vous qui connaissez le coin, ça annonce quoi selon vous ?",
        "relance": "Moi je ne sais jamais lire le temps, vous vous fiez à la météo ou à votre instinct de vieux loup de mer ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "La pêche demande une sacrée patience, c'est une vertu qui vous a servi ailleurs dans la vie j'imagine ?",
        "relance": "Moi je suis d'une impatience terrible, quel conseil vous donneriez à quelqu'un qui veut apprendre à ralentir ?"
      },
      {
        "accroche": "Je me dis qu'à force d'observer la mer, on finit par en apprendre beaucoup sur soi, vous vivez ça comme ça ?",
        "relance": "Moi je cherche justement un peu de calme intérieur, la mer vous a appris quoi au fil des années ?"
      },
      {
        "accroche": "On dirait un savoir qui se transmet de génération en génération, quelqu'un vous a appris ou vous avez tout découvert seul ?",
        "relance": "Moi personne ne m'a rien transmis de ce genre, vous pensez que ça se perd ces savoirs-là aujourd'hui ?"
      },
      {
        "accroche": "Vivre au rythme des marées plutôt que de la montre, ça doit changer le rapport au temps, vous le ressentez comment ?",
        "relance": "Moi je cours après le temps toute la journée, comment on fait pour retrouver ce rythme plus lent selon vous ?"
      }
    ]
  },
  {
    "id": 117,
    "environnement": "Plage",
    "profil": "Vacancier voisin de serviette",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Voyage",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Lier connaissance entre voisins de plage",
    "theme": "Voisinage estival",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre serviette a un imprimé que j'adore, ça vient d'un voyage ou d'une boutique du coin ?",
        "relance": "Moi je collectionne les serviettes moches de tous mes voyages, la vôtre a une bien plus jolie histoire j'imagine, c'est quoi ?"
      },
      {
        "accroche": "Vous avez un super bouquin de voyage à la main, vous préparez votre prochaine destination ?",
        "relance": "Moi je lis toujours des guides sur des pays où je n'irai jamais, et vous, c'est un vrai projet ou du rêve ?"
      },
      {
        "accroche": "Votre glacière a l'air bien équipée, vous êtes du genre à tout prévoir pour la journée plage ?",
        "relance": "Moi j'oublie toujours l'eau et je le regrette à midi, vous avez la checklist parfaite vous on dirait ?"
      },
      {
        "accroche": "Vos tongs ont fait un paquet de kilomètres vu leur état, elles vous suivent partout ces vétérantes ?",
        "relance": "Moi je change de tongs chaque été, et vous, vous êtes fidèle à votre équipement de vacances ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On est voisins de serviette depuis ce matin, autant faire connaissance, vous êtes là pour longtemps ?",
        "relance": "Moi je suis en vacances pour la semaine, et vous, vous profitez de la région combien de temps ?"
      },
      {
        "accroche": "Cette plage est vraiment agréable, vous êtes du coin ou en vacances comme moi ?",
        "relance": "Moi je découvre la région et je suis conquis, vous me conseilleriez quoi à visiter dans le secteur ?"
      },
      {
        "accroche": "Il y a une petite paillote sympa là-bas, vous l'avez déjà testée pour boire un truc ?",
        "relance": "Moi je meurs d'envie d'y aller mais je n'ose pas seul, vous savez si ça vaut le coup ?"
      },
      {
        "accroche": "On a de la chance avec la météo aujourd'hui, ça donne envie de rester jusqu'au soir, vous prolongez vous aussi ?",
        "relance": "Moi je compte bien profiter jusqu'au coucher de soleil, et vous, plutôt lève-tôt ou couche-tard à la plage ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "J'aime cette idée qu'à la plage tout le monde met le pied à égalité, sans chichi, vous ressentez ça aussi ?",
        "relance": "Moi je trouve qu'on se parle plus facilement ici qu'en ville, et vous, vous allez facilement vers les gens ?"
      },
      {
        "accroche": "Les vacances ont ce pouvoir de nous rendre plus disponibles aux autres, vous le vivez comme ça vous ?",
        "relance": "Moi je fais toujours de belles rencontres en voyage, et vous, vous en gardez des contacts après ?"
      },
      {
        "accroche": "C'est fou comme une journée à la plage suffit à recharger les batteries, vous croyez au pouvoir réparateur de la mer ?",
        "relance": "Moi je repars toujours d'ici totalement apaisé, et vous, c'est quoi votre remède anti-stress à vous ?"
      },
      {
        "accroche": "Je me dis que les meilleurs souvenirs de vacances tiennent souvent à des rencontres inattendues, vous êtes d'accord ?",
        "relance": "Moi mes plus beaux voyages c'est grâce aux gens croisés en route, et vous, c'est les lieux ou les gens qui vous marquent ?"
      }
    ]
  },
  {
    "id": 118,
    "environnement": "Festival / Concert",
    "profil": "Festivalière énergique près de la scène",
    "humeur": "Exaltée",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 3,
    "objectif": "Créer une connexion dans l'euphorie",
    "theme": "Étincelle sous les projecteurs",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Vous connaissez toutes les paroles par cœur, vous êtes clairement la plus grande fan ici, depuis quand vous les suivez ?",
        "relance": "Moi je découvre ce groupe ce soir et je suis déjà conquis, vous me raconterez leur meilleur album après le concert ?"
      },
      {
        "accroche": "Vos paillettes sur les joues brillent autant que votre sourire, c'est votre tenue de bataille pour les festivals ?",
        "relance": "Moi je n'ai jamais osé le total look festival, vous portez ça avec une classe folle, vous m'apprendrez ?"
      },
      {
        "accroche": "Vous dansez avec une énergie incroyable, c'est communicatif, vous êtes toujours comme ça en concert ?",
        "relance": "Moi je suis timide au début et je me lâche à la fin, vous, vous êtes à fond dès la première note on dirait ?"
      },
      {
        "accroche": "Votre bracelet de festival est couvert de tampons, vous avez fait toute la tournée ou quoi ?",
        "relance": "Moi c'est mon premier festival de l'été, et vous, vous êtes une habituée qui enchaîne les dates ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On est serrés comme des sardines devant la scène, autant que ce soit avec quelqu'un de sympa, vous tenez le coup ?",
        "relance": "Moi je vais craquer pour le rappel avec vous plutôt que tout seul, on reste ensemble pour la fin ?"
      },
      {
        "accroche": "L'ambiance est électrique ce soir, on est clairement au meilleur endroit du festival, vous ne trouvez pas ?",
        "relance": "Moi je sens que ça va être un concert mémorable, ça vous dirait qu'on vive ça ensemble jusqu'au bout ?"
      },
      {
        "accroche": "Le prochain groupe est génial paraît-il, vous restez pour la suite ou vous filez ailleurs ?",
        "relance": "Moi je ne bouge pas de la soirée, et vous, on pourrait continuer l'aventure de scène en scène ensemble ?"
      },
      {
        "accroche": "Il fait une chaleur de folie dans cette foule, ça vous dirait qu'on aille chercher à boire tous les deux ?",
        "relance": "Moi je meurs de soif et l'idée de discuter au calme deux minutes me tente, vous me suivez au bar ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a une magie dans les concerts, on partage une émotion pure avec des inconnus, vous ressentez ça aussi ?",
        "relance": "Moi ces moments me donnent l'impression d'être vraiment vivant, et vous, c'est quoi qui vous fait vibrer ce soir ?"
      },
      {
        "accroche": "On dit que la musique rapproche les gens plus vite que les mots, vous y croyez vous à cette idée ?",
        "relance": "Moi je me sens déjà en terrain connu avec vous grâce à ce concert, ça vous fait le même effet la musique ?"
      },
      {
        "accroche": "J'adore l'énergie des gens qui vivent la musique à fond comme vous, ça dit beaucoup sur une personne, non ?",
        "relance": "Moi je carbure à cette intensité, et vous, vous êtes du genre à tout vivre à fond dans la vie aussi ?"
      },
      {
        "accroche": "Ces soirs-là, on a l'impression que tout est possible, vous croyez aux belles rencontres de festival vous ?",
        "relance": "Moi je crois que les meilleures histoires commencent dans des moments comme celui-ci, et vous, plutôt rêveuse ou terre à terre ?"
      }
    ]
  },
  {
    "id": 119,
    "environnement": "Festival / Concert",
    "profil": "Habitué grisonnant des festivals",
    "humeur": "Complice",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Recueillir les conseils d'un vétéran",
    "theme": "Mémoire des concerts",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Votre t-shirt d'un vieux festival mythique en jette, vous avez vu passer les grandes heures, un conseil pour un novice ?",
        "relance": "Moi c'est mon tout premier gros festival, vous auriez des astuces de survie à partager avec le débutant que je suis ?"
      },
      {
        "accroche": "Vous avez des bouchons d'oreilles bien placés, vous êtes visiblement un pro, ça vaut vraiment le coup selon vous ?",
        "relance": "Moi je ressors toujours des concerts en sifflant des oreilles, vous me conseilleriez quel matériel exactement ?"
      },
      {
        "accroche": "Vous vous êtes posé pile au bon endroit pour le son, vous avez l'œil pour ça, comment vous choisissez votre place ?",
        "relance": "Moi je me colle toujours trop près et j'entends mal, vous auriez une règle d'or pour bien se placer ?"
      },
      {
        "accroche": "Votre petit sac est super bien organisé, vous savez exactement quoi emporter, quels indispensables vous me conseilleriez ?",
        "relance": "Moi je viens toujours les mains vides et je le regrette, qu'est-ce qu'il ne faut surtout pas oublier selon vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez l'air de connaître ce festival par cœur, vous sauriez me dire quelles scènes valent le détour ce soir ?",
        "relance": "Moi je suis un peu perdu dans le programme, vous auriez des groupes à ne surtout pas rater à me recommander ?"
      },
      {
        "accroche": "C'est bien organisé cette édition, vous êtes déjà venu les années précédentes ?",
        "relance": "Moi c'est ma grande première ici, et vous, vous revenez chaque année à ce rendez-vous ?"
      },
      {
        "accroche": "Il commence à faire frais avec la nuit qui tombe, vous qui êtes rodé, on se couvre comment pour tenir la soirée ?",
        "relance": "Moi je suis venu en t-shirt comme un imprudent, vous prévoyez toujours le coup pour les nuits fraîches vous ?"
      },
      {
        "accroche": "Le coin restauration est bondé là-bas, vous qui connaissez, vous sauriez où manger un truc correct sans faire la queue ?",
        "relance": "Moi je meurs de faim et je ne sais pas où aller, vous auriez un bon plan de vétéran à me souffler ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vous avez dû voir la musique live évoluer énormément avec les années, ça a changé en mieux ou en moins bien selon vous ?",
        "relance": "Moi je n'ai connu que les festivals d'aujourd'hui, qu'est-ce que les jeunes comme moi ratent de la belle époque ?"
      },
      {
        "accroche": "Il y a un savoir-faire pour bien vivre un festival sur la durée, vous avez appris ça avec l'expérience j'imagine ?",
        "relance": "Moi je risque d'être épuisé avant la fin, comment on fait pour tenir le rythme sans s'écrouler selon vous ?"
      },
      {
        "accroche": "Je me dis qu'un concert marquant, ça reste gravé toute une vie, vous en avez un inoubliable en tête ?",
        "relance": "Moi j'espère vivre un moment pareil ce soir, c'était quoi le concert qui vous a le plus marqué à vous ?"
      },
      {
        "accroche": "La musique a ce don de rassembler toutes les générations au même endroit, vous trouvez ça beau vous aussi ?",
        "relance": "Moi j'adore voir tous les âges mélangés ici, vous croyez que c'est ça qui fait durer la passion ?"
      }
    ]
  },
  {
    "id": 120,
    "environnement": "Festival / Concert",
    "profil": "Voisin de file au food-truck",
    "humeur": "Bonne humeur",
    "ageGroupe": "Adulte",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Gastronomie",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Discuter de tout et de rien en attendant",
    "theme": "Papotage de file d'attente",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez repéré ce qui a l'air bon sur la carte ? Moi je suis perdu devant tous ces choix, vous partez sur quoi ?",
        "relance": "Moi je craque toujours pour le plus gras à cette heure, et vous, plutôt raisonnable ou vous lâchez tout en festival ?"
      },
      {
        "accroche": "Votre gobelet consigné a déjà bien servi ce soir on dirait, vous en êtes à combien de tournées ?",
        "relance": "Moi j'ai déjà perdu le mien deux fois, vous avez une méthode pour ne pas le semer partout vous ?"
      },
      {
        "accroche": "Vos bottes en caoutchouc étaient une sacrée bonne idée vu la boue, vous êtes un vrai pro de la logistique festival ?",
        "relance": "Moi j'ai les baskets fichues depuis une heure, vous prévoyez toujours l'équipement adapté vous on dirait ?"
      },
      {
        "accroche": "Votre imperméable a l'air d'avoir bien encaissé l'averse de tout à l'heure, vous avez anticipé la météo vous ?",
        "relance": "Moi je me suis fait tremper comme un bleu, vous aviez vu venir la pluie ou vous êtes juste prévoyant de nature ?"
      }
    ],
    "contexte": [
      {
        "accroche": "La file avance à deux à l'heure, on va avoir le temps de sympathiser, vous en êtes à combien de concerts ce soir ?",
        "relance": "Moi j'ai déjà enchaîné trois scènes et je suis rincé, et vous, la soirée se passe bien de votre côté ?"
      },
      {
        "accroche": "Ça sent super bon depuis ce food-truck, on a bien fait de patienter je crois, vous avez faim aussi vous ?",
        "relance": "Moi je n'ai rien mangé depuis midi, l'attente me paraît interminable, vous tenez comment vous ?"
      },
      {
        "accroche": "L'ambiance est top ce soir malgré la petite pluie de tout à l'heure, vous avez passé une bonne journée jusqu'ici ?",
        "relance": "Moi la pluie a failli me démoraliser mais l'ambiance a tout sauvé, et vous, ça vous a gâché le plaisir ou pas ?"
      },
      {
        "accroche": "On entend le prochain groupe faire ses balances au loin, ça promet, vous restez pour eux aussi ?",
        "relance": "Moi je suis venu surtout pour ce groupe-là, et vous, vous êtes plutôt là pour un artiste précis ou pour l'ambiance ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "C'est marrant comme une file d'attente devient sympa quand l'ambiance est bonne, vous trouvez pas ?",
        "relance": "Moi d'habitude je déteste attendre mais là ça va, et vous, vous êtes patient de nature ou c'est l'exception ?"
      },
      {
        "accroche": "Un festival, c'est fait de plein de petits moments comme ça entre deux concerts, vous aimez autant ces à-côtés vous ?",
        "relance": "Moi je trouve que c'est parfois là que naissent les meilleurs souvenirs, et vous, c'est la musique ou l'ambiance qui vous fait venir ?"
      },
      {
        "accroche": "La météo capricieuse fait un peu partie du charme des festivals au fond, vous prenez ça avec philosophie vous aussi ?",
        "relance": "Moi j'ai appris à en rire depuis le temps, et vous, la pluie vous décourage ou ça fait partie du jeu ?"
      },
      {
        "accroche": "Je trouve qu'il suffit d'un bon repas et de bonne musique pour que la soirée soit réussie, vous validez cette recette ?",
        "relance": "Moi ce serait mon programme idéal chaque week-end, et vous, c'est quoi votre définition d'une soirée parfaite ?"
      }
    ]
  },
  {
    "id": 121,
    "environnement": "Boîte de nuit",
    "profil": "Danseuse au bar",
    "humeur": "Enjouée",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 3,
    "objectif": "Engager la conversation avec charme",
    "theme": "Ambiance et musique",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "J'adore votre sourire, il éclaire toute la piste. C'est la musique qui vous met dans cet état ?",
        "relance": "Moi je souris toujours quand le rythme me plaît. Et vous, qu'est-ce qui vous fait vibrer ce soir ?"
      },
      {
        "accroche": "Ce petit pas de danse que vous venez de faire était superbe. Vous dansez depuis longtemps ?",
        "relance": "Moi je me suis lancé sur le tard, sans vraiment savoir bouger. Vous avez appris où, vous ?"
      },
      {
        "accroche": "Votre bracelet attire l'oeil, il a l'air de raconter une histoire. Il vient d'où ?",
        "relance": "Moi je garde toujours un objet qui me suit partout. Vous avez un porte-bonheur, vous aussi ?"
      },
      {
        "accroche": "Vous avez un regard qui pétille dès que ce morceau passe. C'est un souvenir particulier ?",
        "relance": "Moi une chanson peut me ramener dix ans en arrière. Laquelle vous fait cet effet ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il fait une chaleur folle près de la piste ce soir. Vous tenez bon ou vous cherchez un coin plus frais ?",
        "relance": "Moi je fais une pause au bar dès que ça devient trop dense. On partage un verre au calme ?"
      },
      {
        "accroche": "Le DJ enchaine des pépites depuis tout à l'heure. Vous connaissiez déjà cet endroit ?",
        "relance": "Moi c'est ma première fois ici, je découvre. Vous me conseilleriez quoi comme spot ?"
      },
      {
        "accroche": "On est serrés comme des sardines mais l'énergie est top. Vous venez souvent le samedi ?",
        "relance": "Moi je préfère les soirs où on peut vraiment parler. Vous êtes plutôt danse ou discussion ?"
      },
      {
        "accroche": "Ce coin lounge a l'air bien plus tranquille que la piste. Vous voulez qu'on s'y pose deux minutes ?",
        "relance": "Moi j'aime finir la soirée à discuter dans un coin posé. Ça vous tente de m'y suivre ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des soirées où tout semble parfaitement aligné. Vous ressentez ça aussi ce soir ?",
        "relance": "Moi je crois beaucoup aux soirs qui laissent une trace. Celle-ci en fait partie pour vous ?"
      },
      {
        "accroche": "J'aime cette idée qu'une rencontre peut changer une soirée entière. Vous y croyez, vous ?",
        "relance": "Moi les plus belles histoires ont souvent commencé par un simple regard. Et pour vous, ça se passe comment ?"
      },
      {
        "accroche": "La nuit a ce truc de rendre les gens plus vrais. Vous trouvez aussi ?",
        "relance": "Moi je me sens plus moi-même quand les lumières baissent. Vous vous reconnaissez là-dedans ?"
      },
      {
        "accroche": "Il paraît que la musique dit tout de nous. Vous êtes plutôt rythme ou mélodie ?",
        "relance": "Moi une belle mélodie me touche en plein coeur. Qu'est-ce qui vous chavire, vous ?"
      }
    ]
  },
  {
    "id": 122,
    "environnement": "Boîte de nuit",
    "profil": "Homme accoudé au comptoir",
    "humeur": "Détendu",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Croisé",
    "audace": 3,
    "objectif": "Créer une complicité en douceur",
    "theme": "Verres et regards",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Votre veste a une coupe vraiment élégante, ça change de l'ambiance. Vous l'avez dénichée où ?",
        "relance": "Moi je craque toujours pour une belle pièce bien taillée. Vous avez un style de prédilection ?"
      },
      {
        "accroche": "Vous avez une façon calme de regarder la salle qui intrigue. Vous observez plus que vous dansez ?",
        "relance": "Moi j'aime bien lire l'ambiance avant de me lancer. Vous êtes plutôt observateur aussi ?"
      },
      {
        "accroche": "Ce petit sourire en coin vous va bien. On dirait que la soirée vous amuse. Ça se passe comment ?",
        "relance": "Moi je m'amuse dès qu'il y a de bonnes rencontres. Et vous, la soirée tient ses promesses ?"
      },
      {
        "accroche": "Votre montre a un cachet fou, très sobre. C'est un modèle qui compte pour vous ?",
        "relance": "Moi j'ai un faible pour les objets qui ont une histoire. Le vôtre en a une ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le barman met un temps fou ce soir, on a le temps de papoter. Vous attendez quoi comme cocktail ?",
        "relance": "Moi je teste toujours la spécialité de la maison. Vous osez les nouveautés, vous ?"
      },
      {
        "accroche": "Ce comptoir est le meilleur poste d'observation de la boîte. Vous l'aviez remarqué aussi ?",
        "relance": "Moi je finis toujours accoudé ici en fin de soirée. C'est votre coin habituel ?"
      },
      {
        "accroche": "La piste se remplit d'un coup dès que ce style passe. Ça vous donne envie d'y aller ?",
        "relance": "Moi j'attends le bon morceau pour me lancer. On y va ensemble quand il tombe ?"
      },
      {
        "accroche": "Il y a une belle énergie ici ce soir, plus douce que d'habitude. Vous ressentez la même chose ?",
        "relance": "Moi j'aime ces soirées où l'ambiance est chaleureuse sans excès. C'est ce que vous cherchez, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'une conversation vaut parfois toute une nuit de danse. Vous partagez cette idée ?",
        "relance": "Moi je repars souvent d'une soirée pour une seule belle discussion. Ça vous parle ?"
      },
      {
        "accroche": "La séduction, c'est surtout une histoire de justesse, je crois. Vous en pensez quoi ?",
        "relance": "Moi je préfère mille fois la finesse à l'insistance. Vous êtes sur la même longueur d'onde ?"
      },
      {
        "accroche": "Il y a des rencontres qui arrivent au bon moment, comme par hasard. Vous y croyez, vous ?",
        "relance": "Moi le timing fait tout dans une rencontre. Vous avez déjà vécu ça ?"
      },
      {
        "accroche": "J'aime cette idée que la nuit rebat les cartes. Vous vous sentez plus audacieux le soir ?",
        "relance": "Moi la nuit me rend un peu plus curieux des autres. Et vous, ça vous change ?"
      }
    ]
  },
  {
    "id": 123,
    "environnement": "Boîte de nuit",
    "profil": "Groupe d'amis en terrasse fumeurs",
    "humeur": "Bavard",
    "ageGroupe": "Jeune",
    "genre": "Indéfini",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Se mêler à un groupe sympathique",
    "theme": "Pause en terrasse",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre tee-shirt de groupe est génial, un vrai clin d'oeil. Vous les avez vus en concert ?",
        "relance": "Moi j'ai découvert ce groupe l'an dernier et je ne m'en remets pas. Vous les écoutez depuis longtemps ?"
      },
      {
        "accroche": "Vous avez l'air d'être la bande la plus détendue de la terrasse. Vous vous connaissez depuis quand ?",
        "relance": "Moi mes amis d'enfance sont toujours les plus précieux. Vous êtes une vieille bande ?"
      },
      {
        "accroche": "Votre rire s'entend jusqu'au bar, c'est communicatif. C'est quoi la bonne blague ?",
        "relance": "Moi j'adore les groupes qui savent rire de tout. On partage cette énergie ?"
      },
      {
        "accroche": "Ce badge sur votre sac est original. Il veut dire quelque chose ?",
        "relance": "Moi je collectionne les petits pins bizarres. Vous avez une passion cachée aussi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cette terrasse est le seul endroit où on s'entend parler ce soir. Vous y venez souvent pour souffler ?",
        "relance": "Moi je fais toujours une pause dehors au bout d'une heure. Vous faites pareil ?"
      },
      {
        "accroche": "Il fait bon dehors, ça change de la fournaise à l'intérieur. Vous préférez l'ambiance ou le calme ?",
        "relance": "Moi je suis un peu entre les deux selon les soirs. Et vous, plutôt piste ou terrasse ?"
      },
      {
        "accroche": "On dirait que tout le monde se retrouve ici pour les meilleures discussions. Vous refaites le monde aussi ?",
        "relance": "Moi les vraies conversations arrivent toujours dehors, va savoir pourquoi. Vous l'avez remarqué ?"
      },
      {
        "accroche": "Vous avez l'air de bien connaître le coin. C'est votre boîte habituelle ?",
        "relance": "Moi je découvre cet endroit ce soir. Vous auriez d'autres bons plans à me souffler ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "J'aime cette idée qu'on peut se faire des amis en une soirée. Ça vous est déjà arrivé ?",
        "relance": "Moi mes plus belles amitiés sont nées par hasard. Vous avez une histoire comme ça ?"
      },
      {
        "accroche": "Il y a des groupes qui dégagent une vraie bonne énergie, comme le vôtre. Vous cultivez ça exprès ?",
        "relance": "Moi j'attire toujours les gens un peu barrés et j'adore ça. Vous êtes le noyau festif de la bande ?"
      },
      {
        "accroche": "Sortir, c'est surtout une histoire de bonnes rencontres, je trouve. Vous voyez ça comment ?",
        "relance": "Moi je sors plus pour les gens que pour la musique. Et vous, c'est quoi le moteur ?"
      },
      {
        "accroche": "Les meilleures soirées sont souvent celles qu'on n'avait pas prévues. Vous êtes d'accord ?",
        "relance": "Moi je me méfie des plans trop carrés, ça tue la magie. Vous laissez faire le hasard, vous ?"
      }
    ]
  },
  {
    "id": 124,
    "environnement": "Station-service",
    "profil": "Automobiliste chevronné",
    "humeur": "Serviable",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Obtenir un conseil de route",
    "theme": "Itinéraire et bons plans",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Votre voiture a l'air d'avoir avalé pas mal de kilomètres. Elle tient bien la route sur long trajet ?",
        "relance": "Moi j'hésite justement à partir loin avec la mienne. Vous roulez beaucoup ?"
      },
      {
        "accroche": "Votre porte-vélos est bien pensé, ça a l'air costaud. Vous en conseilleriez un modèle ?",
        "relance": "Moi je galère toujours à fixer le mien. Vous avez un truc pour que ça tienne ?"
      },
      {
        "accroche": "Votre carte routière papier m'intrigue, on n'en voit plus. Vous préférez ça au GPS ?",
        "relance": "Moi le GPS me fait parfois tourner en rond. Vous vous fiez plutôt à quoi ?"
      },
      {
        "accroche": "Vos plaques viennent d'une région que j'adore. Vous connaissez bien le coin ?",
        "relance": "Moi j'y passe justement demain sans trop savoir où m'arrêter. Vous auriez une adresse ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cette station est un vrai carrefour, tout le monde y passe. Vous connaissez la route vers le sud ?",
        "relance": "Moi je descends vers la côte et j'hésite sur l'itinéraire. Vous prendriez l'autoroute ou les nationales ?"
      },
      {
        "accroche": "Les prix à la pompe ici piquent un peu, non ? Vous savez s'il y a moins cher plus loin ?",
        "relance": "Moi je fais toujours le plein au même endroit par habitude. Vous avez repéré une bonne adresse ?"
      },
      {
        "accroche": "Il y a un monde fou sur les routes aujourd'hui. Vous partez loin, vous aussi ?",
        "relance": "Moi je vise à éviter les bouchons de fin de journée. Vous partiriez à quelle heure ?"
      },
      {
        "accroche": "Le café de cette station a l'air correct pour une pause. Vous vous arrêtez souvent ici ?",
        "relance": "Moi je cherche toujours le bon spot pour couper la route. Vous en avez un à me recommander ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'un long trajet se prépare presque comme une aventure. Vous êtes plutôt planifié ou spontané ?",
        "relance": "Moi j'aime tout organiser à l'avance, ça me rassure. Vous fonctionnez comment sur la route ?"
      },
      {
        "accroche": "L'expérience du volant, ça ne s'invente pas. Vous avez appris quoi au fil des années ?",
        "relance": "Moi je débute encore sur les longs trajets. Quel conseil vous donneriez à un jeune conducteur ?"
      },
      {
        "accroche": "On dit que le voyage compte plus que la destination. Vous êtes d'accord avec ça ?",
        "relance": "Moi je m'arrête à chaque joli point de vue, quitte à traîner. Et vous, vous filez droit ?"
      },
      {
        "accroche": "Les vraies bonnes adresses, on les tient souvent des habitués. Vous en avez collectionné pas mal ?",
        "relance": "Moi je fais confiance au bouche-à-oreille plus qu'aux guides. Vous partagez cette philosophie ?"
      }
    ]
  },
  {
    "id": 125,
    "environnement": "Station-service",
    "profil": "Cliente pressée à la pompe",
    "humeur": "Détendue",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Papoter le temps du plein",
    "theme": "Météo et petit matin",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Votre mug de café a l'air de vous sauver la vie ce matin. Il fallait ça pour démarrer ?",
        "relance": "Moi je ne dis pas un mot avant mon premier café. Vous êtes du matin, vous ?"
      },
      {
        "accroche": "Vos lunettes de soleil annoncent une belle journée. Vous y croyez, vous, au beau temps ?",
        "relance": "Moi j'ai pris les miennes au cas où, on ne sait jamais. Vous suivez la météo, vous ?"
      },
      {
        "accroche": "Votre écharpe est bien enroulée, il fait frisquet ce matin. Vous avez senti le froid arriver ?",
        "relance": "Moi j'ai été pris de court par cette fraîcheur. Vous êtes plutôt bien couvert d'habitude ?"
      },
      {
        "accroche": "Votre plaque est d'ici, on est presque voisins. Vous faites la route tous les matins ?",
        "relance": "Moi je fais ce trajet chaque jour et je ne m'en lasse pas. Et vous, c'est la routine ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a une drôle de lumière ce matin, entre brume et soleil. Vous trouvez ça beau aussi ?",
        "relance": "Moi j'adore ces matins un peu voilés, ça a du charme. Vous préférez le soleil franc, vous ?"
      },
      {
        "accroche": "La station est calme à cette heure, ça fait du bien. Vous partez tôt exprès ?",
        "relance": "Moi je pars aux aurores pour éviter le monde. Vous avez la même astuce ?"
      },
      {
        "accroche": "On annonce de la pluie pour cet après-midi, paraît-il. Vous avez prévu le coup ?",
        "relance": "Moi j'ai toujours un parapluie qui traine dans le coffre. Vous êtes du genre prévoyant ?"
      },
      {
        "accroche": "Le café de la boutique sent bon jusqu'ici. Vous vous laissez tenter avant de repartir ?",
        "relance": "Moi je craque à chaque fois, c'est mon petit rituel. Vous avez le vôtre aussi ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'un matin bien démarré donne le ton de toute la journée. Vous ressentez ça aussi ?",
        "relance": "Moi si je rate mon réveil, tout part de travers. Vous êtes du soir ou du matin, vous ?"
      },
      {
        "accroche": "La météo a un vrai pouvoir sur l'humeur, je trouve. Vous êtes sensible au temps qu'il fait ?",
        "relance": "Moi un rayon de soleil me rend de bonne humeur pour rien. Et vous, ça vous change ?"
      },
      {
        "accroche": "Il y a quelque chose d'apaisant dans les petites routines du quotidien. Vous aimez les vôtres ?",
        "relance": "Moi je tiens à mes rituels du matin comme à la prunelle de mes yeux. Vous êtes pareille ?"
      },
      {
        "accroche": "On dit que le monde appartient à ceux qui se lèvent tôt. Vous y croyez, vous ?",
        "relance": "Moi je me le répète tous les matins sans forcément y arriver. Vous êtes plutôt lève-tôt ?"
      }
    ]
  },
  {
    "id": 126,
    "environnement": "Station-service",
    "profil": "Voyageur au food-truck",
    "humeur": "Curieux",
    "ageGroupe": "Jeune",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Gastronomie",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Sympathiser autour d'une pause repas",
    "theme": "Pause gourmande sur la route",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre sandwich a l'air bien plus appétissant que le mien. C'est quoi votre commande ?",
        "relance": "Moi j'ai pris au hasard et je le regrette un peu. Vous connaissiez déjà ce food-truck ?"
      },
      {
        "accroche": "Votre casquette a un logo de festival que je reconnais. Vous y étiez cette année ?",
        "relance": "Moi je rêve d'y aller depuis des années. C'était à la hauteur ?"
      },
      {
        "accroche": "Votre road-trip a l'air bien chargé, la voiture déborde. Vous partez pour longtemps ?",
        "relance": "Moi je pars deux semaines sans vraiment d'itinéraire. Vous improvisez aussi ?"
      },
      {
        "accroche": "Votre carnet de voyage dépasse de votre sac, ça m'intrigue. Vous notez tout ce que vous vivez ?",
        "relance": "Moi je voudrais tenir un journal mais je n'y arrive jamais. Vous avez un secret pour vous y tenir ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce food-truck est une vraie surprise pour une station. Vous vous arrêtez souvent manger ici ?",
        "relance": "Moi je cherche toujours les pauses repas un peu originales. Vous avez d'autres bons coins ?"
      },
      {
        "accroche": "Il y a une petite file mais l'attente vaut le coup, non ? Vous patientez pour quoi ?",
        "relance": "Moi je suis prêt à attendre pour un bon plat maison. Vous êtes du genre patient, vous ?"
      },
      {
        "accroche": "On mange dehors avec ce beau temps, c'est parfait pour couper la route. Vous partez d'où ?",
        "relance": "Moi je descends du nord depuis ce matin. Et vous, vous allez loin ?"
      },
      {
        "accroche": "Ces tables partagées, c'est convivial pour une aire d'autoroute. On se pose ensemble ?",
        "relance": "Moi j'aime bien discuter avec les gens de passage. Ça vous dérange si je m'installe ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'un bon repas raconte toujours quelque chose d'un endroit. Vous êtes gourmand, vous ?",
        "relance": "Moi je choisis mes escales selon ce qu'on peut y manger. Et vous, ça guide vos voyages ?"
      },
      {
        "accroche": "Les rencontres sur la route ont un charme particulier, je trouve. Vous en faites souvent ?",
        "relance": "Moi j'ai des amis rencontrés sur une aire d'autoroute, croyez-le ou non. Ça vous est déjà arrivé ?"
      },
      {
        "accroche": "Voyager sans plan, c'est un peu la liberté totale. Vous êtes plutôt cadré ou spontané ?",
        "relance": "Moi je pars sans savoir où je dormirai le soir. Vous seriez capable de ça, vous ?"
      },
      {
        "accroche": "On découvre parfois mieux un pays par son ventre que par ses monuments. Vous voyez ce que je veux dire ?",
        "relance": "Moi je retiens un voyage à ses saveurs avant tout. Et vous, quel souvenir vous marque le plus ?"
      }
    ]
  },
  {
    "id": 127,
    "environnement": "Camping",
    "profil": "Voisine de tente",
    "humeur": "Chaleureuse",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Nature",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Faire connaissance avec le voisinage",
    "theme": "Vie de camping",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre tente a une couleur superbe, on la repère de loin. Vous campez souvent avec ?",
        "relance": "Moi la mienne a rendu l'âme l'an dernier, j'en cherche une neuve. Vous en êtes contente ?"
      },
      {
        "accroche": "Votre réchaud sent divinement bon dès le matin. Vous nous préparez quoi de bon ?",
        "relance": "Moi je me contente d'un café soluble, c'est triste. Vous cuisinez vraiment en camping ?"
      },
      {
        "accroche": "Votre chapeau de paille a un vrai style vacances. Vous êtes là pour longtemps ?",
        "relance": "Moi je reste une petite semaine à me reposer. Et vous, c'est le grand séjour ?"
      },
      {
        "accroche": "Votre chien a l'air adorable et super sage. Il voyage partout avec vous ?",
        "relance": "Moi j'adorerais camper avec un compagnon comme lui. Il s'adapte bien à la vie dehors ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On est vraiment bien placés dans ce coin ombragé du camping. Vous aviez réservé cet emplacement exprès ?",
        "relance": "Moi je suis tombé dessus par chance. Vous connaissez d'autres bons coins ici ?"
      },
      {
        "accroche": "Le camping se réveille tout doucement ce matin, c'est agréable. Vous êtes du matin, vous ?",
        "relance": "Moi je savoure ce calme avant l'affluence. Vous avez le même rituel ?"
      },
      {
        "accroche": "Les sanitaires sont étonnamment propres pour un camping. Vous êtes déjà venue ici avant ?",
        "relance": "Moi c'est ma première fois dans ce coin. Vous me conseilleriez quoi à voir aux alentours ?"
      },
      {
        "accroche": "L'odeur des barbecues commence déjà à monter partout. Vous êtes plutôt grillades ou pique-nique ?",
        "relance": "Moi je vis au barbecue tout l'été, sans exception. Vous partagez cette passion ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve que le camping crée des liens comme nulle part ailleurs. Vous ressentez ça aussi ?",
        "relance": "Moi je repars toujours avec de nouveaux amis d'ici. Ça vous est déjà arrivé ?"
      },
      {
        "accroche": "Vivre dehors quelques jours, ça remet les idées en place. Vous cherchez ça aussi ?",
        "relance": "Moi j'ai besoin de nature pour vraiment décrocher. Et vous, ça vous ressource ?"
      },
      {
        "accroche": "Il y a un art de vivre simple au camping qui me plaît beaucoup. Vous aimez ce côté-là ?",
        "relance": "Moi j'apprécie de me passer du superflu quelques jours. Vous vous y retrouvez ?"
      },
      {
        "accroche": "On dit que les vacances révèlent les vraies personnalités. Vous êtes d'accord avec ça ?",
        "relance": "Moi je me sens plus moi-même une fois la tente plantée. Et vous, ça vous change ?"
      }
    ]
  },
  {
    "id": 128,
    "environnement": "Camping",
    "profil": "Campeur expérimenté",
    "humeur": "Posé",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Soir",
    "centreInteret": "Nature",
    "proximite": "Habitué",
    "audace": 1,
    "objectif": "Demander conseil sur le matériel",
    "theme": "Astuces de plein air",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Votre installation est impressionnante, tout est parfaitement pensé. Vous campez depuis longtemps ?",
        "relance": "Moi je débute et je tâtonne encore pas mal. Vous auriez un conseil pour bien commencer ?"
      },
      {
        "accroche": "Votre lampe frontale a l'air super efficace. Vous en conseilleriez un modèle en particulier ?",
        "relance": "Moi la mienne me lâche au bout d'une heure. Comment vous choisissez la vôtre ?"
      },
      {
        "accroche": "Votre hamac a l'air parfait entre ces deux arbres. C'est confortable pour dormir vraiment ?",
        "relance": "Moi j'hésite à franchir le pas du hamac. Vous le recommanderiez pour la nuit entière ?"
      },
      {
        "accroche": "Votre feu de camp tient magnifiquement, ça a l'air d'un art. Vous avez une technique ?",
        "relance": "Moi je galère toujours à l'allumer sans tricher. Vous m'apprendriez votre méthode ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez l'air de connaître ce camping par coeur. Vous y revenez chaque année ?",
        "relance": "Moi c'est ma première saison ici. Vous me diriez quoi éviter et quoi ne pas rater ?"
      },
      {
        "accroche": "La nuit tombe et il commence à faire frais. Vous avez une astuce pour bien se couvrir ?",
        "relance": "Moi j'ai toujours froid la nuit sous la tente. Vous dormez avec quoi, vous ?"
      },
      {
        "accroche": "Le coin a l'air idéal pour des randos. Vous auriez un sentier à me conseiller ?",
        "relance": "Moi je cherche une balade pas trop dure pour demain. Vous connaissez le bon niveau ?"
      },
      {
        "accroche": "Les moustiques sont redoutables ce soir près du lac. Vous avez une parade qui marche ?",
        "relance": "Moi je me fais dévorer malgré tout. Vous utilisez quoi comme protection ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "L'expérience du plein air, ça s'apprend surtout sur le terrain, non ? Vous en avez tiré quoi ?",
        "relance": "Moi je fais toutes les erreurs de débutant. Quelle leçon vous auriez aimé connaître plus tôt ?"
      },
      {
        "accroche": "Je trouve qu'on ne remplace pas les conseils d'un vieux routier du camping. Vous en avez vu, des saisons ?",
        "relance": "Moi je pioche mes astuces un peu partout sans méthode. Vous, comment avez-vous appris ?"
      },
      {
        "accroche": "Bien s'équiper, c'est la moitié d'un beau séjour dehors, je crois. Vous êtes d'accord ?",
        "relance": "Moi j'investis petit à petit dans du bon matos. Par quoi vous auriez commencé, vous ?"
      },
      {
        "accroche": "La nature récompense ceux qui la respectent, dit-on. Vous partagez cette idée ?",
        "relance": "Moi je fais attention à ne rien laisser derrière moi. Vous avez vos propres règles là-dessus ?"
      }
    ]
  },
  {
    "id": 129,
    "environnement": "Camping",
    "profil": "Vacancière au bord du lac",
    "humeur": "Rêveuse",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Soir",
    "centreInteret": "Nature",
    "proximite": "Croisé",
    "audace": 3,
    "objectif": "Séduire avec délicatesse au coucher du soleil",
    "theme": "Coucher de soleil au bord de l'eau",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Votre regard est happé par ce coucher de soleil, ça se comprend. Vous venez ici chaque soir ?",
        "relance": "Moi je ne rate jamais ce moment près de l'eau. On pourrait le partager ce soir ?"
      },
      {
        "accroche": "Votre livre a l'air de vous transporter loin. Vous lisez quoi de si captivant ?",
        "relance": "Moi je cherche justement une belle lecture pour ce séjour. Vous me le conseilleriez ?"
      },
      {
        "accroche": "Vous avez une sérénité qui va bien avec ce décor. La nature vous apaise autant ?",
        "relance": "Moi je me sens revivre au bord d'un lac. Et vous, c'est votre refuge aussi ?"
      },
      {
        "accroche": "Votre carnet à dessin dépasse de votre sac, c'est charmant. Vous croquez le paysage ?",
        "relance": "Moi je serais incapable de dessiner ça, je vous envie. Vous me montreriez ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce coin de lac est un vrai petit paradis à cette heure. Vous l'aviez repéré vous aussi ?",
        "relance": "Moi je cherchais l'endroit le plus tranquille du camping. On dirait qu'on a eu la même idée, non ?"
      },
      {
        "accroche": "L'eau est incroyablement calme ce soir, c'est presque un miroir. Vous vous baignez, vous ?",
        "relance": "Moi je n'ose jamais à cette heure. Vous me donneriez le courage de plonger ?"
      },
      {
        "accroche": "On entend juste les grillons et l'eau, c'est magique. Vous savourez souvent ce silence ?",
        "relance": "Moi ces instants suspendus me touchent beaucoup. Ça vous parle autant qu'à moi ?"
      },
      {
        "accroche": "Le ciel prend des couleurs folles au-dessus du lac. On reste admirer ça ensemble deux minutes ?",
        "relance": "Moi j'aime partager les belles choses plutôt que d'en profiter seul. Ça vous tente ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des couchers de soleil qui donnent envie de ralentir le temps. Vous ressentez ça aussi ?",
        "relance": "Moi certains instants, je voudrais les garder pour toujours. Celui-ci en fait partie pour vous ?"
      },
      {
        "accroche": "Je trouve que la nature rapproche les gens sans effort. Vous êtes d'accord ?",
        "relance": "Moi les plus belles rencontres se font loin du bruit. Vous partagez cette idée ?"
      },
      {
        "accroche": "Le camping a ce don de rendre tout plus simple et plus vrai. Vous le ressentez ?",
        "relance": "Moi je me livre plus facilement ici qu'en ville. Et vous, ça vous ouvre aussi ?"
      },
      {
        "accroche": "On dit que les vacances font naître les plus jolies histoires. Vous y croyez, vous ?",
        "relance": "Moi je garde un souvenir tendre de chaque été. Celui-ci s'annonce comment pour vous ?"
      }
    ]
  },
  {
    "id": 130,
    "environnement": "Vestiaire de sport",
    "profil": "Sportif aguerri",
    "humeur": "Motivé",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Sport",
    "proximite": "Habitué",
    "audace": 1,
    "objectif": "Demander un conseil d'entrainement",
    "theme": "Progression et technique",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vos chaussures ont l'air taillées pour la performance. Vous les conseilleriez pour débuter ?",
        "relance": "Moi je cours avec de vieilles baskets et je le sens passer. Vous choisissez ça comment ?"
      },
      {
        "accroche": "Votre gourde a des repères d'hydratation bien pensés. Vous suivez ça de près ?",
        "relance": "Moi j'oublie toujours de boire à l'effort. Vous avez une astuce pour y penser ?"
      },
      {
        "accroche": "Vos gants d'haltéro ont l'air bien rodés. Ça change vraiment quelque chose à la prise ?",
        "relance": "Moi je m'abime les mains sans protection. Vous me recommanderiez un modèle ?"
      },
      {
        "accroche": "Votre montre de sport affiche des stats impressionnantes. Vous vous en servez pour progresser ?",
        "relance": "Moi je m'entraine un peu au feeling, sans données. Ça vaut le coup de s'y mettre, vous croyez ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous avez l'air de bien connaître cette salle. Vous vous entrainez ici depuis longtemps ?",
        "relance": "Moi je viens de m'inscrire et je me repère mal. Vous me conseilleriez par quoi commencer ?"
      },
      {
        "accroche": "La salle est bondée à cette heure, dur de tourner. Vous avez un créneau plus tranquille à me souffler ?",
        "relance": "Moi je perds un temps fou à attendre les machines. Vous venez à quelle heure, vous ?"
      },
      {
        "accroche": "Le coach a l'air costaud sur les conseils techniques. Vous suivez ses programmes ?",
        "relance": "Moi j'hésite à prendre un suivi personnalisé. Ça vous a aidé, vous ?"
      },
      {
        "accroche": "Après l'effort, vous filez direct ou vous étirez ici ? Ça a l'air de compter pour vous.",
        "relance": "Moi je zappe toujours les étirements et je le regrette. Vous en faites systématiquement ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve que la régularité compte plus que l'intensité au sport. Vous voyez ça comment ?",
        "relance": "Moi j'ai du mal à tenir dans la durée. Comment vous gardez la motivation, vous ?"
      },
      {
        "accroche": "Progresser, c'est surtout une histoire de patience, non ? Vous en avez fait l'expérience ?",
        "relance": "Moi je voudrais tout tout de suite et ça me dessert. Quel conseil vous donneriez à un impatient ?"
      },
      {
        "accroche": "On dit que le mental fait la moitié de la performance. Vous êtes d'accord ?",
        "relance": "Moi je lâche souvent avant la fatigue réelle. Comment vous poussez vos limites, vous ?"
      },
      {
        "accroche": "Bien récupérer est aussi important que bien s'entrainer, paraît-il. Vous soignez ça ?",
        "relance": "Moi je néglige totalement le repos. Vous auriez une routine à me conseiller ?"
      }
    ]
  },
  {
    "id": 131,
    "environnement": "Vestiaire de sport",
    "profil": "Adhérent habitué",
    "humeur": "Bavard",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Habitué",
    "audace": 1,
    "objectif": "Papoter avant la séance",
    "theme": "Petites discussions du vestiaire",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Votre sac de sport a l'air d'en avoir vu, des séances. Vous venez souvent, vous ?",
        "relance": "Moi j'essaie de tenir trois fois par semaine sans toujours y arriver. Et vous, c'est le rythme ?"
      },
      {
        "accroche": "Votre maillot d'équipe me dit quelque chose. Vous suivez le championnat de près ?",
        "relance": "Moi je ne rate jamais un match le week-end. Vous êtes un vrai supporter aussi ?"
      },
      {
        "accroche": "Votre casque audio a l'air top pour s'isoler. Vous vous entrainez toujours en musique ?",
        "relance": "Moi sans mes playlists je ne tiens pas dix minutes. Vous écoutez quoi pour vous motiver ?"
      },
      {
        "accroche": "Votre serviette floquée est classe, petit détail sympa. C'est un souvenir de quelque part ?",
        "relance": "Moi j'accumule les goodies de courses et compétitions. Vous en collectionnez aussi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il pleut des cordes dehors, au moins on est au sec ici. Vous avez couru sous l'averse ?",
        "relance": "Moi j'ai fini trempé jusqu'aux os avant d'arriver. Vous avez eu plus de chance ?"
      },
      {
        "accroche": "Le vestiaire est tranquille cet après-midi, ça change. Vous préférez ces heures creuses ?",
        "relance": "Moi je viens exprès quand il y a moins de monde. Vous avez le même réflexe ?"
      },
      {
        "accroche": "Ils ont changé les machines de place, on se perd un peu. Vous vous y retrouvez, vous ?",
        "relance": "Moi j'ai tourné dix minutes avant de comprendre. Vous en pensez quoi de la nouvelle disposition ?"
      },
      {
        "accroche": "La clim est un peu fraiche dans les vestiaires aujourd'hui, non ? Vous trouvez aussi ?",
        "relance": "Moi je me couvre toujours après la douche ici. Vous êtes frileux, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve que le sport, c'est autant social que physique. Vous voyez ça comme ça ?",
        "relance": "Moi je viens presque autant pour l'ambiance que pour l'effort. Et vous, c'est quoi le moteur ?"
      },
      {
        "accroche": "Garder une routine sportive, c'est un vrai défi au quotidien. Vous tenez comment, vous ?",
        "relance": "Moi je lâche dès que le boulot déborde. Vous avez une astuce pour ne pas décrocher ?"
      },
      {
        "accroche": "On dit qu'un corps qui bouge aide la tête à respirer. Vous ressentez ça aussi ?",
        "relance": "Moi une bonne séance efface toute la pression de la journée. Et vous, ça vous vide la tête ?"
      },
      {
        "accroche": "Les habitués d'une salle finissent par former une petite famille, non ? Vous le vivez comme ça ?",
        "relance": "Moi je connais presque tout le monde ici à force. Vous êtes plutôt solo ou groupe, vous ?"
      }
    ]
  },
  {
    "id": 132,
    "environnement": "Vestiaire de sport",
    "profil": "Nouvelle inscrite",
    "humeur": "Timide",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Sport",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Mettre à l'aise une nouvelle venue",
    "theme": "Premiers pas à la salle",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre tenue est vraiment sympa, ça donne envie de s'y mettre. Vous débutez ici, vous aussi ?",
        "relance": "Moi j'ai commencé il y a peu et j'étais intimidé au début. Vous en êtes à vos débuts ?"
      },
      {
        "accroche": "Votre bouteille avec les petits messages motivants m'a fait sourire. Ça marche sur vous ?",
        "relance": "Moi j'ai besoin de tous les coups de pouce possibles. Vous avez vos trucs pour vous motiver ?"
      },
      {
        "accroche": "Vos baskets ont l'air toutes neuves, belle acquisition. Vous les étrennez ce soir ?",
        "relance": "Moi j'avais l'impression de démarrer une nouvelle vie avec les miennes. Ça vous fait cet effet ?"
      },
      {
        "accroche": "Votre bracelet d'activité clignote, vous êtes déjà dans le bain. Vous suivez vos stats de près ?",
        "relance": "Moi je regarde mes pas dix fois par jour, c'est maladif. Vous êtes accro aux chiffres aussi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Ce vestiaire est un vrai labyrinthe quand on débute, non ? Vous trouvez vos repères ?",
        "relance": "Moi j'ai mis une semaine à comprendre où était quoi. Vous voulez que je vous montre le coin ?"
      },
      {
        "accroche": "C'est plutôt calme ce soir, parfait pour s'y retrouver tranquillement. Vous venez à cette heure exprès ?",
        "relance": "Moi je préfère largement les créneaux tranquilles pour débuter. Vous cherchez ça aussi ?"
      },
      {
        "accroche": "Les cours collectifs commencent bientôt, l'ambiance est top. Vous comptiez en essayer un ?",
        "relance": "Moi j'ai osé le premier la semaine dernière et j'ai adoré. Ça vous tenterait ?"
      },
      {
        "accroche": "On se croise souvent au même horaire, on doit avoir le même rythme. Vous venez quels jours ?",
        "relance": "Moi je vise le mardi et le jeudi soir en général. On pourrait se motiver ensemble, non ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve que le plus dur, c'est de passer la porte les premières fois. Vous l'avez ressenti ?",
        "relance": "Moi j'ai failli abandonner avant même de commencer. Qu'est-ce qui vous a décidée, vous ?"
      },
      {
        "accroche": "Débuter quelque chose de nouveau demande un vrai courage, je trouve. Vous en pensez quoi ?",
        "relance": "Moi je suis fier d'avoir osé me lancer. Vous vous êtes déjà lancée dans un défi comme ça ?"
      },
      {
        "accroche": "On dit qu'un bon groupe rend n'importe quel effort plus facile. Vous êtes d'accord ?",
        "relance": "Moi je tiens surtout grâce aux gens sympas que je croise ici. Vous êtes plutôt entourée ou solo ?"
      },
      {
        "accroche": "Prendre soin de soi, c'est peut-être le plus beau des projets. Vous le voyez comme ça ?",
        "relance": "Moi j'ai mis du temps à me prioriser un peu. Et vous, qu'est-ce qui vous a poussée à sauter le pas ?"
      }
    ]
  },
  {
    "id": 133,
    "environnement": "Salle d'attente",
    "profil": "Patiente patiente",
    "humeur": "Détendue",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Détendre l'attente par un brin de causette",
    "theme": "Tuer le temps ensemble",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Votre magazine a l'air plus intéressant que ceux du présentoir. Il parle de quoi ?",
        "relance": "Moi je tourne en rond avec les vieux journaux de la table. Vous aviez prévu le coup ?"
      },
      {
        "accroche": "Votre écharpe a de jolies couleurs, ça réveille la salle. Vous l'avez tricotée vous-même ?",
        "relance": "Moi je rêve de savoir tricoter mais je n'ose pas m'y mettre. Vous avez appris comment ?"
      },
      {
        "accroche": "Votre agenda est bien rempli, ça donne le vertige. Vous êtes toujours aussi organisée ?",
        "relance": "Moi je note tout et j'oublie quand même la moitié. Vous avez un système qui marche ?"
      },
      {
        "accroche": "Votre parapluie dégouline encore, il tombe des trombes dehors. Vous avez été surprise aussi ?",
        "relance": "Moi je n'avais rien prévu et j'ai couru sous l'averse. Vous suivez la météo, vous ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'attente s'éternise un peu ce matin, non ? Vous patientez depuis longtemps ?",
        "relance": "Moi je poireaute depuis vingt bonnes minutes. Vous avez eu droit à combien de retard ?"
      },
      {
        "accroche": "Cette salle est étonnamment calme et douce, ça détend. Vous venez ici régulièrement ?",
        "relance": "Moi c'est ma première visite, je ne savais pas trop à quoi m'attendre. Vous connaissez bien l'endroit ?"
      },
      {
        "accroche": "Il fait un temps affreux dehors, au moins on est au chaud. Vous avez bravé la pluie aussi ?",
        "relance": "Moi j'ai hésité à annuler avec ce déluge. Vous êtes venue de loin ?"
      },
      {
        "accroche": "Le distributeur de café dans le coin a l'air correct. Vous vous êtes laissé tenter ?",
        "relance": "Moi j'hésite à en prendre un pour patienter. Vous me diriez s'il est buvable ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve que les salles d'attente nous forcent à ralentir, pour une fois. Vous vivez ça comment ?",
        "relance": "Moi j'en profite pour souffler un peu, faute de mieux. Vous en faites quoi, vous, de ce temps ?"
      },
      {
        "accroche": "La patience, c'est presque un art qu'on perd un peu tous, non ? Vous êtes du genre patient ?",
        "relance": "Moi je m'agace vite quand ça traine. Vous avez un secret pour rester zen, vous ?"
      },
      {
        "accroche": "On croise des gens de tous horizons dans ces salles, c'est fou. Vous aimez observer aussi ?",
        "relance": "Moi j'imagine parfois la vie des gens autour de moi. Vous faites ça aussi ou c'est juste moi ?"
      },
      {
        "accroche": "Le temps passe bien plus vite quand on discute, je trouve. Vous êtes d'accord ?",
        "relance": "Moi une bonne conversation fait oublier n'importe quelle attente. Ça vous fait cet effet aussi ?"
      }
    ]
  },
  {
    "id": 134,
    "environnement": "Salle d'attente",
    "profil": "Jeune homme sur son carnet",
    "humeur": "Curieux",
    "ageGroupe": "Jeune",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 2,
    "objectif": "Faire connaissance autour d'une curiosité",
    "theme": "Passions et découvertes",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre carnet est couvert de croquis, ça a l'air passionnant. Vous dessinez depuis longtemps ?",
        "relance": "Moi j'ai toujours rêvé de savoir croquer sur le vif. Vous avez appris seul ?"
      },
      {
        "accroche": "Votre livre a une couverture intrigante, je ne connais pas. C'est bien, ce que vous lisez ?",
        "relance": "Moi je cherche justement une nouvelle lecture. Vous me le recommanderiez ?"
      },
      {
        "accroche": "Votre tote-bag de librairie me parle, j'adore cet endroit. Vous êtes un rat de bibliothèque ?",
        "relance": "Moi je pourrais passer des heures entre les rayons. Vous êtes du genre lecteur boulimique aussi ?"
      },
      {
        "accroche": "Votre badge d'expo m'a tapé dans l'oeil, c'était comment ? J'hésitais à y aller.",
        "relance": "Moi j'ai raté la dernière et je m'en veux encore. Ça valait le détour ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'attente peut être longue, autant en profiter pour discuter. Vous patientez depuis un moment ?",
        "relance": "Moi je m'ennuie ferme au bout de dix minutes. Vous, vous savez vous occuper visiblement ?"
      },
      {
        "accroche": "Cette salle est plutôt agréable, presque cosy. Vous venez souvent par ici ?",
        "relance": "Moi je découvre le quartier aujourd'hui. Vous auriez des coins sympas à me conseiller ?"
      },
      {
        "accroche": "Il y a une petite étagère de livres dans le coin, sympa l'idée. Vous avez jeté un oeil ?",
        "relance": "Moi j'adore ces boites à livres improvisées. Vous en avez déjà trouvé une pépite ?"
      },
      {
        "accroche": "On est les seuls à ne pas fixer notre téléphone dans cette salle, c'est amusant. Vous préférez autre chose ?",
        "relance": "Moi je fuis un peu les écrans dès que je peux. Vous êtes plutôt carnet ou livre, vous ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'on découvre une personne à travers ses passions. Quelle est la vôtre ?",
        "relance": "Moi je m'anime dès qu'on parle de ce qui me tient à coeur. Et vous, qu'est-ce qui vous fait vibrer ?"
      },
      {
        "accroche": "Il y a des rencontres inattendues qui viennent égayer une journée banale. Vous croyez au hasard ?",
        "relance": "Moi les meilleures discussions arrivent quand je ne les attends pas. Ça vous parle aussi ?"
      },
      {
        "accroche": "Prendre le temps de créer ou de lire, c'est presque un luxe aujourd'hui. Vous vous l'accordez ?",
        "relance": "Moi je me force à préserver ces moments-là. Vous y arrivez, vous ?"
      },
      {
        "accroche": "On dit que la curiosité mène aux plus belles surprises. Vous êtes plutôt curieux de nature ?",
        "relance": "Moi je pose mille questions, parfois trop. Et vous, qu'est-ce qui pique votre curiosité en ce moment ?"
      }
    ]
  },
  {
    "id": 135,
    "environnement": "Salle d'attente",
    "profil": "Dame expérimentée",
    "humeur": "Bienveillante",
    "ageGroupe": "Senior",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Santé",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Recueillir un conseil de vie",
    "theme": "Sagesse et expérience",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Votre foulard est magnifique, il a un vrai cachet. Vous avez l'oeil pour ces choses-là ?",
        "relance": "Moi je n'ose jamais me lancer sur les accessoires. Vous auriez un conseil pour oser un peu ?"
      },
      {
        "accroche": "Vous tricotez avec une aisance impressionnante. Vous faites ça depuis toujours ?",
        "relance": "Moi j'aimerais tellement m'y mettre pour me détendre. Par quoi vous me conseilleriez de commencer ?"
      },
      {
        "accroche": "Votre carnet de recettes a l'air précieux, presque un trésor. C'est de famille ?",
        "relance": "Moi je rate systématiquement mes gâteaux. Vous auriez une astuce infaillible à partager ?"
      },
      {
        "accroche": "Vos plantes dans le petit sac ont l'air en pleine forme. Vous avez la main verte, vous ?",
        "relance": "Moi je fais mourir tout ce que je touche côté jardinage. Vous m'expliqueriez votre secret ?"
      }
    ],
    "contexte": [
      {
        "accroche": "L'attente est longue mais vous avez l'air sereine. Vous venez souvent dans cette salle ?",
        "relance": "Moi je m'impatiente toujours dans ces moments. Vous auriez un conseil pour prendre les choses avec calme ?"
      },
      {
        "accroche": "Vous semblez connaître les lieux et le personnel. Vous êtes une habituée ici ?",
        "relance": "Moi c'est ma première fois et je suis un peu perdu. Vous me diriez à quoi m'attendre ?"
      },
      {
        "accroche": "Il fait doux ce matin, ça donne envie de flâner après. Vous en profitez pour vous balader ?",
        "relance": "Moi je cherche justement de bonnes habitudes pour mes matinées. Vous auriez une routine à me conseiller ?"
      },
      {
        "accroche": "Cette salle est plus chaleureuse que la plupart, non ? Vous fréquentez d'autres cabinets ?",
        "relance": "Moi je ne sais jamais lesquels valent le coup. Vous sauriez m'orienter vers les bons ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Je trouve qu'on apprend beaucoup en écoutant ceux qui ont de l'expérience. Vous avez vu du pays ?",
        "relance": "Moi je suis un peu au carrefour de ma vie en ce moment. Quel conseil vous donneriez à quelqu'un comme moi ?"
      },
      {
        "accroche": "Avec le recul, on relativise sûrement bien des soucis, non ? Vous voyez les choses comment ?",
        "relance": "Moi je me tracasse pour un rien, ça m'épuise. Vous auriez une sagesse à me transmettre là-dessus ?"
      },
      {
        "accroche": "On dit que la santé est le vrai trésor qu'on comprend trop tard. Vous êtes d'accord ?",
        "relance": "Moi je néglige un peu la mienne, je l'avoue. Qu'est-ce que vous auriez fait plus tôt, vous ?"
      },
      {
        "accroche": "Prendre le temps de vivre, c'est peut-être le plus grand des luxes. Vous y êtes arrivée, vous ?",
        "relance": "Moi je cours après le temps sans arrêt. Comment vous avez appris à ralentir ?"
      }
    ]
  },
  {
    "id": 136,
    "environnement": "Ascenseur d'hôtel",
    "profil": "Voyageuse élégante",
    "humeur": "détendue",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Voyage",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Créer un moment complice",
    "theme": "Séduction discrète en voyage",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Votre foulard a une couleur incroyable, il vous vient d où ?",
        "relance": "Moi je craque toujours pour les pièces qui ont une histoire, la vôtre elle raconte quoi ?"
      },
      {
        "accroche": "Vous avez un sourire qui donne envie de sourire aussi, c est votre soirée qui est belle ?",
        "relance": "Moi je trouve qu un bon moment ça se lit sur le visage, le vôtre respire quoi ce soir ?"
      },
      {
        "accroche": "J adore vos boucles d oreilles, elles ont l air de venir de loin, je me trompe ?",
        "relance": "Moi je ramène toujours un petit bijou de mes voyages, et vous, vous collectionnez quoi ?"
      },
      {
        "accroche": "Votre parfum est vraiment délicat, vous accepteriez de me dire ce que c est ?",
        "relance": "Moi je suis très sensible aux parfums qui restent en mémoire, lequel vous suit partout ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Cet ascenseur prend son temps, on dirait qu il veut nous laisser discuter, ça vous va ?",
        "relance": "Moi je trouve ces petits moments suspendus assez charmants, vous ils vous mettent à l aise ou pas ?"
      },
      {
        "accroche": "Vous descendez dîner aussi ? On m a dit que le bar d en bas valait le détour, vous tentez ?",
        "relance": "Moi je déteste dîner seul dans un bel endroit, ça vous dirait qu on compare nos impressions ?"
      },
      {
        "accroche": "Bel hôtel n est ce pas, vous êtes là pour le plaisir ou pour le travail ?",
        "relance": "Moi je mélange souvent les deux, et là franchement le plaisir prend le dessus, et vous ?"
      },
      {
        "accroche": "On se retrouve dans le même ascenseur, c est peut être un signe, non ?",
        "relance": "Moi j aime bien croire aux petits hasards, celui là vous inspire quoi ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des soirées où tout semble un peu plus léger, vous ressentez ça ce soir ?",
        "relance": "Moi j adore ces instants où le temps ralentit, qu est ce qui vous fait cet effet là d habitude ?"
      },
      {
        "accroche": "Voyager seul, ça pousse à rencontrer des gens, vous trouvez pas ?",
        "relance": "Moi je fais mes plus belles rencontres loin de chez moi, et vous, ça vous arrive souvent ?"
      },
      {
        "accroche": "Il y a une énergie particulière dans les hôtels le soir, vous la sentez aussi ?",
        "relance": "Moi je trouve ça presque romanesque, ce genre d ambiance ça vous parle ?"
      },
      {
        "accroche": "On croise mille visages en voyage et parfois un seul retient l attention, ça vous est déjà arrivé ?",
        "relance": "Moi ce soir ça m arrive un peu, et vous, vous vous fiez à ces intuitions ?"
      }
    ]
  },
  {
    "id": 137,
    "environnement": "Ascenseur d'hôtel",
    "profil": "Client en déplacement",
    "humeur": "affable",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Travail",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Engager un échange simple",
    "theme": "Rencontre entre voyageurs",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Joli badge de conférence, vous êtes là pour l événement du hall aussi ?",
        "relance": "Moi je suis venu surtout pour les rencontres, et vous, plutôt les ateliers ou le réseau ?"
      },
      {
        "accroche": "Vous avez un sacré café à la main, c est celui du lobby ou vous avez trouvé mieux ?",
        "relance": "Moi je cherche toujours le meilleur café d un hôtel dès le matin, vous avez repéré une adresse ?"
      },
      {
        "accroche": "Votre valise est déjà prête, vous filez tôt ou vous rentrez chez vous ?",
        "relance": "Moi je pars toujours à la dernière minute, et vous, plutôt organisé ou pas ?"
      },
      {
        "accroche": "Vous avez l air de bien connaître les lieux, c est votre hôtel habituel ?",
        "relance": "Moi c est ma première fois ici, si vous avez un bon plan je suis preneur, vous en avez un ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Bien dormi dans cet hôtel ? Les chambres ont l air confortables, non ?",
        "relance": "Moi j ai plutôt bien récupéré, et vous, vous êtes du matin ou vous traînez au lit ?"
      },
      {
        "accroche": "Le petit déjeuner en bas vaut le coup à votre avis ?",
        "relance": "Moi je ne rate jamais un buffet le matin, et vous, vous êtes plutôt salé ou sucré ?"
      },
      {
        "accroche": "On descend au même étage, vous partez explorer la ville aujourd hui ?",
        "relance": "Moi j ai deux heures devant moi et aucune idée d où aller, vous connaissez le coin ?"
      },
      {
        "accroche": "L ascenseur est lent ce matin, ça vous laisse le temps d un café mental, non ?",
        "relance": "Moi tant que je n ai pas mon premier café je ne réponds de rien, et vous, réveillé ou pas ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Les hôtels ça reste des endroits pleins de vies de passage, vous trouvez pas ?",
        "relance": "Moi j aime imaginer d où viennent les gens que je croise, et vous, vous êtes curieux comme ça ?"
      },
      {
        "accroche": "Voyager pour le travail ça finit par se ressembler d une ville à l autre, non ?",
        "relance": "Moi je m accroche aux petits détails pour me souvenir de chaque endroit, et vous, votre truc c est quoi ?"
      },
      {
        "accroche": "Il y a des matins où on part sans savoir qui on va croiser, plutôt sympa non ?",
        "relance": "Moi je trouve que les meilleures conversations arrivent par hasard, ça vous parle ?"
      },
      {
        "accroche": "On passe tellement de temps à courir en déplacement, vous arrivez à souffler un peu ?",
        "relance": "Moi j essaie de garder un moment pour moi chaque jour, et vous, vous y arrivez ?"
      }
    ]
  },
  {
    "id": 138,
    "environnement": "Ascenseur d'hôtel",
    "profil": "Résidente de passage",
    "humeur": "posée",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Papoter légèrement",
    "theme": "Petite conversation d ascenseur",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez un parapluie tout trempé, ça tombe fort dehors ?",
        "relance": "Moi je sortais justement, vous me conseillez d attendre un peu ?"
      },
      {
        "accroche": "Jolie tenue légère, vous espérez que le soleil revient aujourd hui ?",
        "relance": "Moi je guette la moindre éclaircie depuis ce matin, vous croyez que ça va se lever ?"
      },
      {
        "accroche": "Vous portez déjà l écharpe, il fait si frais que ça dehors ?",
        "relance": "Moi je ne sais jamais comment m habiller à cette saison, et vous, vous prévoyez comment ?"
      },
      {
        "accroche": "Vos lunettes de soleil sont prêtes, vous avez une bonne info météo pour l après midi ?",
        "relance": "Moi je me fie plus au ciel qu aux applis, et vous, vous regardez la météo ou pas ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Quel temps capricieux aujourd hui, vous avez pu profiter un peu quand même ?",
        "relance": "Moi j ai couru entre deux averses, et vous, votre journée s est bien passée ?"
      },
      {
        "accroche": "On est bien au chaud dans cet hôtel avec ce temps, vous ne trouvez pas ?",
        "relance": "Moi je n ai pas envie de ressortir tout de suite, et vous, vous bravez la pluie ?"
      },
      {
        "accroche": "Il paraît que ça se dégage pour ce soir, vous avez entendu la même chose ?",
        "relance": "Moi j y crois moyennement, et vous, plutôt optimiste sur la météo ?"
      },
      {
        "accroche": "Cette saison est vraiment indécise cette année, ça vous a surpris aussi ?",
        "relance": "Moi je m étais habillé pour l été, raté, et vous, vous vous en sortez mieux ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Le temps qu il fait change vraiment l humeur d une journée, vous ne trouvez pas ?",
        "relance": "Moi un rayon de soleil et tout va mieux, et vous, ça joue sur votre moral aussi ?"
      },
      {
        "accroche": "On dirait que les saisons se mélangent de plus en plus, ça vous frappe aussi ?",
        "relance": "Moi je ne sais plus quoi mettre le matin, et vous, vous vous y retrouvez ?"
      },
      {
        "accroche": "Il y a des jours de pluie qui donnent presque envie de rester dedans à ne rien faire, non ?",
        "relance": "Moi j adore ça de temps en temps, et vous, la pluie ça vous inspire quoi ?"
      },
      {
        "accroche": "Peu importe le temps, une journée reste ce qu on en fait, vous êtes d accord ?",
        "relance": "Moi j essaie de garder le sourire quel que soit le ciel, et vous, votre secret c est quoi ?"
      }
    ]
  },
  {
    "id": 139,
    "environnement": "Marché de Noël",
    "profil": "Promeneur curieux",
    "humeur": "joyeux",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Créer un lien chaleureux",
    "theme": "Ambiance festive partagée",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Votre vin chaud a l air délicieux, il vient de quel chalet ?",
        "relance": "Moi je cherche le meilleur du marché depuis une heure, vous m aiguillez ?"
      },
      {
        "accroche": "Joli bonnet, vous êtes clairement dans l esprit ce soir, c est votre marché préféré ?",
        "relance": "Moi j adore ces ambiances, et vous, vous venez chaque année ?"
      },
      {
        "accroche": "Vous avez déjà les bras pleins de paquets, vous avez trouvé les bonnes affaires ?",
        "relance": "Moi je n ose jamais me lancer, vous avez repéré un stand à ne pas rater ?"
      },
      {
        "accroche": "Ce pain d épices que vous tenez sent d ici, c est aussi bon que ça en a l air ?",
        "relance": "Moi je suis incapable de résister aux odeurs sucrées, et vous, votre gourmandise c est quoi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Il y a un monde fou ce soir, vous arrivez à profiter malgré la foule ?",
        "relance": "Moi j adore cette énergie même s il faut jouer des coudes, et vous, vous aimez ou ça vous fatigue ?"
      },
      {
        "accroche": "Les guirlandes rendent tout un peu magique, vous ne trouvez pas ?",
        "relance": "Moi je retombe en enfance chaque fois, et vous, Noël ça vous fait cet effet ?"
      },
      {
        "accroche": "On dirait que tout le quartier s est donné rendez vous ici, vous êtes du coin ?",
        "relance": "Moi je viens du bout de la ville juste pour ça, et vous, c est votre marché de quartier ?"
      },
      {
        "accroche": "Ça sent la cannelle et les marrons à chaque coin, vous avez déjà goûté quelque chose ?",
        "relance": "Moi je commence toujours par le salé avant le sucré, et vous, votre ordre de dégustation ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Les marchés de Noël ont un truc qui réunit les gens, vous ressentez ça aussi ?",
        "relance": "Moi je trouve que ça met tout le monde de bonne humeur, et vous, ça vous réchauffe le coeur ?"
      },
      {
        "accroche": "Il y a une douceur particulière dans l air à cette période, non ?",
        "relance": "Moi j attends cette ambiance toute l année, et vous, c est votre moment préféré ?"
      },
      {
        "accroche": "C est fou comme quelques lumières suffisent à rendre une ville plus chaleureuse, vous trouvez pas ?",
        "relance": "Moi ça me rend nostalgique et heureux à la fois, et vous, ça vous évoque quoi ?"
      },
      {
        "accroche": "On se parle plus facilement dans ce genre d ambiance, vous l avez remarqué ?",
        "relance": "Moi je trouve les gens plus souriants ici qu ailleurs, vous êtes d accord ?"
      }
    ]
  },
  {
    "id": 140,
    "environnement": "Marché de Noël",
    "profil": "Artisan chevronné",
    "humeur": "bienveillant",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Gastronomie",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Demander un avis éclairé",
    "theme": "Conseils d un connaisseur",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vos confitures ont l air faites maison, vous me conseillez laquelle pour offrir ?",
        "relance": "Moi je suis toujours perdu au moment de choisir un cadeau gourmand, vous auriez une valeur sûre ?"
      },
      {
        "accroche": "Vous avez l oeil du connaisseur, ce fromage là il se marie avec quoi selon vous ?",
        "relance": "Moi je reçois ce week end et je veux bien faire, vous partez sur quoi à ma place ?"
      },
      {
        "accroche": "Ce pain d épices que vous vendez, il se garde longtemps d après vous ?",
        "relance": "Moi j aimerais en ramener à ma famille loin d ici, vous pensez que ça tiendra le voyage ?"
      },
      {
        "accroche": "Vous connaissez sûrement les bons producteurs, lequel me recommandez vous ici ?",
        "relance": "Moi je débarque et je ne sais pas par où commencer, vous me guideriez ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous tenez ce stand depuis longtemps, ce marché a beaucoup changé selon vous ?",
        "relance": "Moi je le découvre cette année, vous en pensez quoi de l ambiance aujourd hui ?"
      },
      {
        "accroche": "Avec toute votre expérience, qu est ce qu il ne faut surtout pas manquer ici ?",
        "relance": "Moi je n ai qu une heure devant moi, vous feriez quoi en priorité à ma place ?"
      },
      {
        "accroche": "Vous voyez passer beaucoup de monde, les gens cherchent quoi surtout à Noël ?",
        "relance": "Moi je veux offrir quelque chose d original cette année, vous auriez une idée ?"
      },
      {
        "accroche": "On sent que vous aimez votre métier, c est quoi qui vous a lancé là dedans ?",
        "relance": "Moi je rêve parfois de changer de voie, vous conseilleriez de se lancer ou pas ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Le savoir faire artisanal se perd un peu partout, vous le ressentez aussi ?",
        "relance": "Moi je trouve ça précieux ces métiers qui durent, vous pensez que ça va se transmettre ?"
      },
      {
        "accroche": "Avec le temps on apprend à reconnaître la qualité, vous me diriez quoi pour bien choisir ?",
        "relance": "Moi je me fais souvent avoir par les belles étiquettes, vous avez un truc pour ne pas se tromper ?"
      },
      {
        "accroche": "Les fêtes ça rassemble autour de la table, vous avez vu ça évoluer avec les années ?",
        "relance": "Moi j essaie de garder les traditions vivantes, vous en pensez quoi de tout ça ?"
      },
      {
        "accroche": "Il faut du temps pour bien faire les choses, c est une leçon que vous avez apprise, non ?",
        "relance": "Moi je suis toujours pressé et je le regrette, vous me diriez quoi à mon âge ?"
      }
    ]
  },
  {
    "id": 141,
    "environnement": "Marché de Noël",
    "profil": "Passante souriante",
    "humeur": "enjouée",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Soir",
    "centreInteret": "Social",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Séduire avec légèreté",
    "theme": "Complicité sous les lumières",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Vos joues rosies par le froid vous vont vraiment bien, c est le vin chaud ou l air d ici ?",
        "relance": "Moi j avoue que cette ambiance me met de bonne humeur, et vous, qu est ce qui vous fait sourire ce soir ?"
      },
      {
        "accroche": "Vous avez un rire qu on entend d ici, c est votre soirée qui est réussie ?",
        "relance": "Moi j adore les gens qui rient franchement, et vous, il vous faut quoi pour passer un bon moment ?"
      },
      {
        "accroche": "Ce bonnet vous donne un air tout doux, vous l avez trouvé sur un stand d ici ?",
        "relance": "Moi je fond pour les petits détails qui ont du charme, et vous, vous craquez sur quoi ?"
      },
      {
        "accroche": "Vous tenez deux vins chauds, faut il que je m inquiète d un rendez vous ?",
        "relance": "Moi je tentais ma chance là, vous me diriez que la place est prise ou pas ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On se retrouve devant le même stand, on a visiblement bon goût tous les deux, non ?",
        "relance": "Moi je crois beaucoup à ces petits hasards, celui là vous inspire quoi ?"
      },
      {
        "accroche": "Ces lumières donnent presque envie de flâner à deux, vous ne trouvez pas ?",
        "relance": "Moi je déteste me balader seul dans une aussi belle ambiance, ça vous dirait qu on continue ensemble ?"
      },
      {
        "accroche": "Vous avez l air de connaître le marché, vous m offririez une petite visite guidée ?",
        "relance": "Moi je suis un peu perdu mais content de l être là, vous accepteriez de me guider ?"
      },
      {
        "accroche": "Il fait froid mais votre sourire réchauffe l ambiance, vous venez souvent ici ?",
        "relance": "Moi c est ma première fois et je tombe déjà bien, et vous, c est votre rituel de décembre ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a des soirs où l air a un goût de fête, vous ressentez ça aussi ce soir ?",
        "relance": "Moi j adore ces instants suspendus, et vous, qu est ce qui rend une soirée magique pour vous ?"
      },
      {
        "accroche": "Noël ça donne envie de partager de bons moments, vous êtes plutôt entourée en ce moment ?",
        "relance": "Moi je crois que les plus belles rencontres arrivent quand on s y attend le moins, vous y croyez aussi ?"
      },
      {
        "accroche": "C est fou comme quelques guirlandes rendent tout plus romantique, vous trouvez pas ?",
        "relance": "Moi je me laisse facilement emporter par ces ambiances, et vous, vous êtes romantique ?"
      },
      {
        "accroche": "On se sourit plus facilement dans ce genre d endroit, vous l avez remarqué aussi ?",
        "relance": "Moi je trouve que ça ouvre le coeur ces marchés, et le vôtre il est d humeur bavarde ce soir ?"
      }
    ]
  },
  {
    "id": 142,
    "environnement": "Brocante",
    "profil": "Chineur expérimenté",
    "humeur": "affable",
    "ageGroupe": "Senior",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Recueillir un conseil avisé",
    "theme": "L oeil du connaisseur",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous manipulez cette pièce comme un habitué, elle vaut quelque chose selon vous ?",
        "relance": "Moi j ai toujours peur de me faire avoir, vous auriez un conseil pour repérer une bonne affaire ?"
      },
      {
        "accroche": "Vous avez l oeil sur ce vieux cadre, vous pensez que ça se restaure facilement ?",
        "relance": "Moi je craque sur un meuble abîmé juste là, vous le prendriez à ma place ?"
      },
      {
        "accroche": "Ce livre ancien que vous tenez a l air précieux, comment on reconnaît une vraie pièce d après vous ?",
        "relance": "Moi je débute dans la chine, vous auriez deux ou trois règles à me transmettre ?"
      },
      {
        "accroche": "Vous semblez savoir négocier, on marchande jusqu où ici sans vexer le vendeur ?",
        "relance": "Moi je n ose jamais discuter le prix, vous me montreriez comment vous faites ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous êtes arrivé tôt, c est le secret pour dénicher les bonnes affaires ?",
        "relance": "Moi je traîne toujours et j arrive après la bataille, vous conseillez quelle heure ?"
      },
      {
        "accroche": "Cette brocante a l air réputée, vous en faites beaucoup dans la région ?",
        "relance": "Moi je cherche les meilleures adresses, vous auriez des coins à me recommander ?"
      },
      {
        "accroche": "Il y a de tout ici, vous savez déjà ce que vous cherchez ou vous vous laissez surprendre ?",
        "relance": "Moi je viens souvent sans idée précise, vous pensez que c est une erreur ?"
      },
      {
        "accroche": "Avec l expérience on doit flairer les bons stands, lesquels vaut il mieux viser ici ?",
        "relance": "Moi je me disperse toujours, vous feriez le tour dans quel ordre à ma place ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Les vieux objets ont chacun une histoire, c est ça qui vous plaît dans la chine ?",
        "relance": "Moi j adore imaginer la vie qu ils ont eue, vous pensez qu on devine leur passé ?"
      },
      {
        "accroche": "On jette trop et on garde trop peu de nos jours, vous ne trouvez pas ?",
        "relance": "Moi j essaie de donner une seconde vie aux choses, vous me diriez que ça a du sens ?"
      },
      {
        "accroche": "Il faut de la patience pour bien chiner, c est une leçon que vous avez apprise avec le temps ?",
        "relance": "Moi je suis toujours trop pressé, vous conseilleriez quoi pour prendre le temps ?"
      },
      {
        "accroche": "La valeur des choses c est parfois très personnel, vous êtes d accord avec ça ?",
        "relance": "Moi je garde des babioles sans valeur mais qui comptent, vous en avez aussi ?"
      }
    ]
  },
  {
    "id": 143,
    "environnement": "Brocante",
    "profil": "Chineuse du dimanche",
    "humeur": "curieuse",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Culture",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Faire connaissance simplement",
    "theme": "Passion commune pour la chine",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Joli sac plein de trouvailles, vous avez déjà fait de belles prises ce matin ?",
        "relance": "Moi je reviens toujours avec trois fois trop de choses, et vous, vous savez vous limiter ?"
      },
      {
        "accroche": "Vous avez l air fan de vinyles vu votre pile, vous cherchez un artiste précis ?",
        "relance": "Moi je fouille les bacs par plaisir plus que par méthode, et vous, c est quoi votre genre ?"
      },
      {
        "accroche": "Cette lampe que vous tenez est superbe, elle est pour chez vous ?",
        "relance": "Moi je décore toute ma maison en brocante, et vous, vous avez un style particulier ?"
      },
      {
        "accroche": "Vos petites lunettes rétro collent parfaitement à l ambiance, c est une trouvaille d ici ?",
        "relance": "Moi j adore les objets qui ont du vécu, et vous, vous chinez pour vous ou pour offrir ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Belle brocante n est ce pas, c est votre première fois ici aussi ?",
        "relance": "Moi je la découvre aujourd hui, et vous, vous êtes plutôt habituée des lieux ?"
      },
      {
        "accroche": "On se croise sur les mêmes stands, on a peut être les mêmes goûts, non ?",
        "relance": "Moi je vais toujours vers les vieux objets du quotidien, et vous, vers quoi vous allez ?"
      },
      {
        "accroche": "Il y a un monde fou ce matin, vous arrivez à fouiller tranquillement ?",
        "relance": "Moi j aime prendre mon temps même dans la cohue, et vous, vous êtes patiente ?"
      },
      {
        "accroche": "Le soleil est parfait pour flâner aujourd hui, vous comptez y passer la matinée ?",
        "relance": "Moi j y passerais bien des heures, et vous, vous avez un budget temps ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Chiner c est un peu partir à la chasse au trésor, vous ressentez ça aussi ?",
        "relance": "Moi j adore l excitation de la trouvaille, et vous, qu est ce qui vous plaît là dedans ?"
      },
      {
        "accroche": "Les objets anciens racontent une époque, ça vous touche cette idée ?",
        "relance": "Moi j imagine toujours qui les a possédés avant, et vous, vous êtes sentimentale comme ça ?"
      },
      {
        "accroche": "C est fou tout ce qu on trouve quand on prend le temps de fouiller, vous trouvez pas ?",
        "relance": "Moi je fais mes plus belles découvertes par hasard, et vous, ça vous arrive souvent ?"
      },
      {
        "accroche": "Ces marchés rassemblent des gens qui aiment les mêmes choses, c est agréable non ?",
        "relance": "Moi je discute plus facilement ici qu ailleurs, et vous, vous aimez cette ambiance ?"
      }
    ]
  },
  {
    "id": 144,
    "environnement": "Brocante",
    "profil": "Vendeuse aguerrie",
    "humeur": "chaleureuse",
    "ageGroupe": "Senior",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Croisé",
    "audace": 1,
    "objectif": "Solliciter son expertise",
    "theme": "Le regard d une habituée",
    "intention": "Demander un conseil",
    "zoomIn": [
      {
        "accroche": "Vous avez de belles pièces sur votre stand, laquelle me conseilleriez vous pour débuter une collection ?",
        "relance": "Moi je ne connais rien mais j ai envie d apprendre, par quoi vous me feriez commencer ?"
      },
      {
        "accroche": "Cette petite théière est ravissante, vous pensez qu elle est encore utilisable ?",
        "relance": "Moi j hésite entre l objet déco et l objet du quotidien, vous en pensez quoi ?"
      },
      {
        "accroche": "Vous connaissez sûrement la valeur des choses, ce bibelot vaut il son prix selon vous ?",
        "relance": "Moi je veux offrir sans me ruiner, vous m orienteriez vers quoi ?"
      },
      {
        "accroche": "Vous avez l air de tout savoir sur vos objets, celui ci il vient d où ?",
        "relance": "Moi j adore quand un objet a une histoire, vous auriez une pièce avec une belle histoire à me conseiller ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Vous tenez ce stand depuis des années j imagine, la brocante marche encore bien ?",
        "relance": "Moi je rêve de vendre mes trouvailles un jour, vous me diriez de me lancer ou pas ?"
      },
      {
        "accroche": "Avec votre expérience, qu est ce qui plaît le plus aux gens en ce moment ?",
        "relance": "Moi je cherche justement une idée de cadeau original, vous auriez une piste ?"
      },
      {
        "accroche": "Vous voyez défiler beaucoup de monde, on reconnaît vite un bon chineur ?",
        "relance": "Moi je débute et ça se voit sûrement, vous me donneriez un conseil de pro ?"
      },
      {
        "accroche": "Il fait doux cet après midi, c est bon pour les affaires ce genre de temps ?",
        "relance": "Moi je flâne surtout quand il fait beau, et vous, la météo change vos ventes ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Vous en avez vu passer des objets et des gens, ça donne une belle vision des choses non ?",
        "relance": "Moi j adore ces métiers qui rassemblent, vous conseilleriez ce mode de vie à quelqu un ?"
      },
      {
        "accroche": "On tient de moins en moins à réparer les choses aujourd hui, vous le voyez aussi ?",
        "relance": "Moi j essaie de garder ce réflexe de réparer, vous me diriez que c est la bonne voie ?"
      },
      {
        "accroche": "La patience doit être la clé dans votre métier, vous êtes d accord ?",
        "relance": "Moi je manque cruellement de patience, vous auriez un conseil pour en gagner ?"
      },
      {
        "accroche": "Chaque objet finit par trouver preneur, c est presque une philosophie non ?",
        "relance": "Moi je trouve ça rassurant cette idée, vous la voyez comme ça aussi ?"
      }
    ]
  },
  {
    "id": 145,
    "environnement": "Aire d'autoroute",
    "profil": "Voyageur en pause",
    "humeur": "détendu",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Après-midi",
    "centreInteret": "Voyage",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Créer un contact rapide",
    "theme": "Rencontre sur la route",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Belle plaque, vous venez de loin comme moi ?",
        "relance": "Moi je descends plein sud depuis ce matin, et vous, c est un long trajet aussi ?"
      },
      {
        "accroche": "Vous avez un café bien mérité à la main, la route est longue jusqu ici ?",
        "relance": "Moi je carbure au café sur autoroute, et vous, c est votre carburant aussi ?"
      },
      {
        "accroche": "Joli van aménagé, vous partez en vacances ou vous vivez dessus ?",
        "relance": "Moi je rêve de faire pareil un jour, et vous, ça fait longtemps que vous roulez comme ça ?"
      },
      {
        "accroche": "Votre chien a l air ravi de la pause, il voyage bien en voiture ?",
        "relance": "Moi le mien déteste la route, et vous, vous avez un truc pour le calmer ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Grosse affluence sur cette aire aujourd hui, vous avez trouvé une place facilement ?",
        "relance": "Moi j ai tourné dix minutes, et vous, c est bouché sur votre portion aussi ?"
      },
      {
        "accroche": "On profite tous d une petite pause bien méritée, vous roulez encore longtemps ?",
        "relance": "Moi il me reste trois bonnes heures, et vous, vous arrivez bientôt ?"
      },
      {
        "accroche": "Le sandwich de la station il vaut quoi à votre avis, vous avez testé ?",
        "relance": "Moi j hésite à me lancer, vous me conseillez ou je passe mon tour ?"
      },
      {
        "accroche": "C est fou le monde qui se croise sur ces aires, vous êtes sur un grand trajet ?",
        "relance": "Moi je fais la traversée du pays, et vous, vous allez jusqu où ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Les longs trajets ça laisse le temps de penser, vous aimez conduire ?",
        "relance": "Moi je trouve ça presque reposant sur autoroute, et vous, plaisir ou corvée ?"
      },
      {
        "accroche": "On croise plein de vies sur la route sans jamais se parler, c est curieux non ?",
        "relance": "Moi j imagine toujours où vont les gens, et vous, vous êtes rêveur comme ça ?"
      },
      {
        "accroche": "Il y a un petit goût de liberté à être sur la route, vous ressentez ça aussi ?",
        "relance": "Moi j adore ce sentiment de départ, et vous, vous aimez voyager ?"
      },
      {
        "accroche": "Ces pauses sur autoroute cassent bien la monotonie, vous en faites souvent ?",
        "relance": "Moi je m arrête toutes les deux heures, et vous, plutôt d une traite ou par étapes ?"
      }
    ]
  },
  {
    "id": 146,
    "environnement": "Aire d'autoroute",
    "profil": "Automobiliste en pause café",
    "humeur": "posée",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Matin",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Échanger sur le trajet",
    "theme": "Météo et conditions de route",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Votre pare brise est couvert de gouttes, il pleut fort sur votre route ?",
        "relance": "Moi je roule dans le brouillard depuis une heure, et vous, ça se dégage devant ?"
      },
      {
        "accroche": "Vous rangez déjà les lunettes de soleil, le ciel s est couvert d un coup ?",
        "relance": "Moi je pensais avoir du beau temps toute la journée, raté, et vous, vous vous attendiez à quoi ?"
      },
      {
        "accroche": "Vous avez la doudoune alors qu il fait doux ici, il fait plus frais d où vous venez ?",
        "relance": "Moi j ai traversé trois climats ce matin, et vous, c est pareil sur votre trajet ?"
      },
      {
        "accroche": "Votre café fume, la pause au chaud fait du bien par ce temps non ?",
        "relance": "Moi je m arrête surtout pour me réchauffer, et vous, vous tenez le coup au volant ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Sale temps pour rouler aujourd hui, ça se passe comment sur votre portion ?",
        "relance": "Moi j ai ralenti à cause de la pluie, et vous, la circulation est fluide ?"
      },
      {
        "accroche": "On dirait que ça se lève enfin dehors, vous avez eu droit à la même averse ?",
        "relance": "Moi j espère que ça tiendra jusqu à l arrivée, et vous, vous êtes optimiste ?"
      },
      {
        "accroche": "Ces aires sont bien pratiques quand le temps se gâte, vous vous arrêtez souvent ?",
        "relance": "Moi je fais une pause dès que ça devient dur à conduire, et vous, vous forcez ou pas ?"
      },
      {
        "accroche": "La météo change tout le temps sur ce trajet, ça vous a surprise aussi ?",
        "relance": "Moi je ne sais jamais comment m habiller pour la route, et vous, vous prévoyez comment ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Le temps qu il fait ça change vraiment une journée de route, vous ne trouvez pas ?",
        "relance": "Moi un ciel gris et je traîne des pieds, et vous, la météo joue sur votre humeur ?"
      },
      {
        "accroche": "Les saisons sont de plus en plus imprévisibles, vous le remarquez aussi sur la route ?",
        "relance": "Moi je ne me fie plus aux prévisions, et vous, vous regardez encore la météo ?"
      },
      {
        "accroche": "Il y a un charme aux trajets sous la pluie quand on est au sec, vous trouvez pas ?",
        "relance": "Moi j aime bien le bruit des essuie glaces, et vous, ça vous apaise ou ça vous agace ?"
      },
      {
        "accroche": "Beau temps ou pas, il faut bien arriver à destination, vous êtes d accord ?",
        "relance": "Moi j essaie de rester zen quel que soit le ciel, et vous, votre astuce pour le trajet ?"
      }
    ]
  },
  {
    "id": 147,
    "environnement": "Aire d'autoroute",
    "profil": "Voyageuse solaire",
    "humeur": "pétillante",
    "ageGroupe": "Jeune",
    "genre": "Femme",
    "vibe": "Ouvert",
    "energie": "Haute",
    "moment": "Après-midi",
    "centreInteret": "Voyage",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Créer une étincelle",
    "theme": "Charme d une pause partagée",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Vos lunettes de soleil vous donnent un air de road trip parfait, vous partez à l aventure ?",
        "relance": "Moi j adore les gens qui prennent la route sans trop savoir où, et vous, vous improvisez ?"
      },
      {
        "accroche": "Vous avez un sourire qui rend cette aire beaucoup plus sympa, votre voyage se passe bien ?",
        "relance": "Moi je trouve que ça change tout de croiser un joli sourire en route, et vous, ça vous arrive ?"
      },
      {
        "accroche": "Jolie playlist qui s échappe de votre voiture, on a peut être les mêmes goûts, non ?",
        "relance": "Moi je choisis mes rencontres à la musique, et vous, ça vous parle cette idée ?"
      },
      {
        "accroche": "Votre carnet de route a l air bien rempli, vous notez toutes vos aventures ?",
        "relance": "Moi je garde une trace de chaque voyage, et vous, vous en écririez une ligne sur aujourd hui ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On fait la pause au même moment, nos routes se croisent joliment non ?",
        "relance": "Moi je crois aux petits hasards de la route, celui là vous inspire quoi ?"
      },
      {
        "accroche": "Un café à deux c est toujours mieux qu un café seul, vous en prendriez un ?",
        "relance": "Moi je déteste faire ma pause en solitaire, ça vous dirait qu on la partage ?"
      },
      {
        "accroche": "Vous allez vers le sud vous aussi ? On roule peut être dans la même direction, non ?",
        "relance": "Moi j aime bien l idée de croiser la même personne deux fois sur la route, pas vous ?"
      },
      {
        "accroche": "Cette pause est bien plus agréable depuis que vous êtes là, vous partez bientôt ?",
        "relance": "Moi je prolongerais bien la mienne un peu, vous n êtes pas trop pressée ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a quelque chose de romanesque à croiser quelqu un sur la route, vous trouvez pas ?",
        "relance": "Moi je me dis que les plus belles histoires commencent en voyage, vous y croyez aussi ?"
      },
      {
        "accroche": "Prendre la route ça donne un vrai sentiment de liberté, vous le ressentez aussi ?",
        "relance": "Moi j adore cette impression que tout est possible en voyage, et vous, ça vous grise ?"
      },
      {
        "accroche": "On rencontre les gens autrement quand on est loin de chez soi, vous ne trouvez pas ?",
        "relance": "Moi je suis plus spontané sur la route, et vous, ça vous rend plus ouverte aussi ?"
      },
      {
        "accroche": "Un voyage c est plein de moments qu on n oublie pas, celui là commence bien non ?",
        "relance": "Moi je sens que je me souviendrai de cette pause, et vous, elle vous laisse quoi ?"
      }
    ]
  },
  {
    "id": 148,
    "environnement": "Covoiturage",
    "profil": "Passager sympathique",
    "humeur": "affable",
    "ageGroupe": "Adulte",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Matin",
    "centreInteret": "Social",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Briser la glace en voiture",
    "theme": "Premiers échanges de trajet",
    "intention": "Faire connaissance",
    "zoomIn": [
      {
        "accroche": "Joli sac de rando, vous partez pour un week end en pleine nature ?",
        "relance": "Moi je profite de chaque trajet pour m évader, et vous, c est quoi votre destination ?"
      },
      {
        "accroche": "Vous avez apporté de quoi lire, c est un long trajet pour vous aussi ?",
        "relance": "Moi je n arrive jamais à lire en voiture, et vous, vous tenez le coup ?"
      },
      {
        "accroche": "Votre thermos a l air bien pratique, vous êtes un habitué du covoiturage ?",
        "relance": "Moi c est ma première fois, et vous, vous en faites souvent ?"
      },
      {
        "accroche": "Vous avez un accent que je situe mal, vous venez d une autre région ?",
        "relance": "Moi j adore deviner d où viennent les gens, et vous, c est quoi vos origines ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On va passer quelques heures ensemble, autant faire connaissance non ?",
        "relance": "Moi je trouve que ça passe plus vite quand on discute, et vous, plutôt bavard ou silencieux ?"
      },
      {
        "accroche": "Le conducteur a l air sympa, vous le connaissiez déjà ou c est comme moi votre première fois ?",
        "relance": "Moi je découvre tout le monde aujourd hui, et vous, vous appréhendez ou pas ?"
      },
      {
        "accroche": "On démarre pile à l heure, ça commence bien ce trajet non ?",
        "relance": "Moi je stresse toujours d être en retard, et vous, plutôt ponctuel ?"
      },
      {
        "accroche": "Belle brochette de voyageurs ce matin, vous allez tous jusqu au bout du trajet ?",
        "relance": "Moi je descends à mi chemin, et vous, vous allez jusqu où ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Le covoiturage c est une drôle de façon de rencontrer des gens, vous trouvez pas ?",
        "relance": "Moi j ai fait de belles rencontres comme ça, et vous, ça vous est déjà arrivé ?"
      },
      {
        "accroche": "Partager un trajet ça oblige un peu à s ouvrir aux autres, vous aimez ça ?",
        "relance": "Moi je suis plutôt réservé mais ça me fait du bien, et vous, ça vous vient facilement ?"
      },
      {
        "accroche": "On croise des inconnus le temps d une route et parfois ça marque, non ?",
        "relance": "Moi je me souviens de certains trajets des années après, et vous, vous en gardez des souvenirs ?"
      },
      {
        "accroche": "C est fou tout ce qu on peut se raconter entre parfaits inconnus, vous ne trouvez pas ?",
        "relance": "Moi je me confie parfois plus facilement à un inconnu, et vous, ça vous parle ?"
      }
    ]
  },
  {
    "id": 149,
    "environnement": "Covoiturage",
    "profil": "Passagère tranquille",
    "humeur": "posée",
    "ageGroupe": "Adulte",
    "genre": "Femme",
    "vibe": "Neutre",
    "energie": "Basse",
    "moment": "Après-midi",
    "centreInteret": "Quotidien",
    "proximite": "Inconnu",
    "audace": 1,
    "objectif": "Papoter sans forcer",
    "theme": "Petite conversation de route",
    "intention": "Pluie et beau temps",
    "zoomIn": [
      {
        "accroche": "Vous avez pris le pull alors qu il fait bon, vous vous attendez à un temps plus frais à l arrivée ?",
        "relance": "Moi je pars toujours trop couvert ou pas assez, et vous, vous anticipez bien la météo ?"
      },
      {
        "accroche": "Votre parapluie dépasse du sac, on annonce de la pluie là où vous allez ?",
        "relance": "Moi je ne pars jamais sans, on ne sait jamais, et vous, plutôt prévoyante ?"
      },
      {
        "accroche": "Vous avez les lunettes de soleil prêtes, vous espérez du beau temps pour la suite ?",
        "relance": "Moi je guette le moindre rayon en ce moment, et vous, vous aimez le soleil ?"
      },
      {
        "accroche": "Votre café glacé donne envie, il fait vraiment chaud pour la saison non ?",
        "relance": "Moi je ne sais plus si c est l été ou l automne, et vous, ça vous perturbe aussi ?"
      }
    ],
    "contexte": [
      {
        "accroche": "Le ciel se couvre un peu là dehors, vous croyez qu on va rouler sous la pluie ?",
        "relance": "Moi j espère que ça tiendra, et vous, la pluie en voiture ça vous inquiète ?"
      },
      {
        "accroche": "Beau temps pour un trajet finalement, ça rend la route plus agréable non ?",
        "relance": "Moi je préfère mille fois rouler par temps clair, et vous, ça change quelque chose pour vous ?"
      },
      {
        "accroche": "On dirait que la météo est de notre côté aujourd hui, vous avez vérifié les prévisions ?",
        "relance": "Moi je regarde toujours avant de partir, et vous, vous vous fiez à quoi ?"
      },
      {
        "accroche": "Il faisait gris ce matin et voilà le soleil, drôle de journée non ?",
        "relance": "Moi ce temps changeant me déboussole, et vous, vous vous adaptez facilement ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Le temps qu il fait ça donne le ton d une journée, vous ne trouvez pas ?",
        "relance": "Moi un beau ciel et tout me paraît plus léger, et vous, ça joue sur votre moral ?"
      },
      {
        "accroche": "Les saisons se dérèglent un peu partout, vous le ressentez aussi ?",
        "relance": "Moi je ne reconnais plus les mois tellement ça change, et vous, ça vous surprend ?"
      },
      {
        "accroche": "Il y a des jours de pluie qui invitent au calme, vous aimez ces ambiances ?",
        "relance": "Moi j adore rester au chaud quand il pleut, et vous, la pluie ça vous inspire quoi ?"
      },
      {
        "accroche": "Beau temps ou non, une journée reste ce qu on en fait, vous êtes d accord ?",
        "relance": "Moi j essaie de garder le sourire quel que soit le ciel, et vous, votre secret ?"
      }
    ]
  },
  {
    "id": 150,
    "environnement": "Covoiturage",
    "profil": "Passager charmant",
    "humeur": "enjoué",
    "ageGroupe": "Jeune",
    "genre": "Homme",
    "vibe": "Ouvert",
    "energie": "Moyenne",
    "moment": "Soir",
    "centreInteret": "Culture",
    "proximite": "Croisé",
    "audace": 2,
    "objectif": "Séduire avec délicatesse",
    "theme": "Complicité pendant le trajet",
    "intention": "Flirter",
    "zoomIn": [
      {
        "accroche": "Vous avez un sourire qui rend ce trajet déjà plus agréable, votre journée s est bien passée ?",
        "relance": "Moi je trouve qu un joli sourire raccourcit la route, et vous, il vous faut quoi pour sourire ?"
      },
      {
        "accroche": "J adore le livre que vous tenez, on a peut être les mêmes lectures, non ?",
        "relance": "Moi je juge un peu les gens à leurs livres, et le vôtre me plaît bien, il raconte quoi ?"
      },
      {
        "accroche": "Votre playlist a l air d avoir du goût, vous accepteriez de partager un morceau ?",
        "relance": "Moi je choisis mes voisins de trajet à la musique, et vous, vous écoutez quoi ce soir ?"
      },
      {
        "accroche": "Vous avez un rire communicatif, c est agréable de tomber sur vous pour ce trajet non ?",
        "relance": "Moi j espérais une bonne compagnie et je suis servi, et vous, vous appréhendiez ?"
      }
    ],
    "contexte": [
      {
        "accroche": "On va passer un bon moment ensemble sur cette route, ça tombe plutôt bien non ?",
        "relance": "Moi je trouve que le trajet s annonce sympa avec vous, et vous, vous êtes du genre à discuter ?"
      },
      {
        "accroche": "Le hasard nous a placés côte à côte, joli hasard non ?",
        "relance": "Moi j aime bien croire que rien n arrive par hasard, et vous, vous y croyez un peu ?"
      },
      {
        "accroche": "La nuit qui tombe rend ce trajet presque agréable à deux, vous ne trouvez pas ?",
        "relance": "Moi j adore ces trajets du soir, et vous, ça vous met dans quelle humeur ?"
      },
      {
        "accroche": "On a encore quelques heures de route, autant en faire un bon souvenir non ?",
        "relance": "Moi je sens que je vais bien rire, et vous, vous êtes de bonne compagnie ?"
      }
    ],
    "zoomOut": [
      {
        "accroche": "Il y a quelque chose de romanesque à discuter avec un inconnu la nuit sur la route, vous trouvez pas ?",
        "relance": "Moi je crois que les meilleures rencontres arrivent par surprise, vous y croyez aussi ?"
      },
      {
        "accroche": "On se confie plus facilement quand la route défile, vous l avez remarqué ?",
        "relance": "Moi je deviens presque bavard en voiture le soir, et vous, ça vous délie la langue aussi ?"
      },
      {
        "accroche": "Un trajet partagé ça crée parfois de vrais liens, vous y croyez à ça ?",
        "relance": "Moi j ai gardé contact avec des gens croisés en covoiturage, et vous, ça vous tenterait ?"
      },
      {
        "accroche": "Ce genre de soirée sur la route ça a un charme particulier, vous ressentez ça aussi ?",
        "relance": "Moi je trouve ces moments suspendus assez précieux, et vous, ça vous parle ?"
      }
    ]
  }
];
