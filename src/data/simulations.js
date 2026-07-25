// Simulations de conversation "choisis ta réponse" pour Smoltolk.
// Données pures : aucun import, aucun React.
// Méthode : on ne monte pas d'un cran tant que l'autre n'a pas "rendu la monnaie"
// (il repose une question ou ajoute une info non demandée). Une réponse sèche et
// courte = il n'a pas payé, on n'insiste pas. Une sortie en douceur après un accueil
// froid est une réussite en soi (verdict "correct", jamais culpabilisant).

export const SIMULATIONS = [
  {
    id: "cafe-file-attente",
    titre: "Le café du matin",
    emoji: "☕",
    tint: "bg-amber-100 text-amber-600",
    lieu: "File d'attente d'un café",
    contexte:
      "Tu es dans la file d'un café bondé, un lundi matin. La personne devant toi attend, comme toi. Rien à perdre : c'est juste un petit moment partagé.",
    start: "debut",
    nodes: {
      debut: {
        pnj: "La personne devant toi soupire doucement en regardant l'écran des commandes qui n'avance pas.",
        options: [
          {
            texte: "Sacrée file ce matin, hein ?",
            to: "reponse_ouverte",
            quality: "green",
            feedback:
              "Parfait : tu commentes le moment que vous vivez tous les deux, sans rien exiger.",
          },
          {
            texte: "Vous venez souvent ici, vous ?",
            to: "reponse_polie",
            quality: "amber",
            feedback:
              "Pas grave, mais une question directe à un inconnu ressemble vite à un interrogatoire.",
          },
          {
            texte: "J'adore votre manteau, il vous va vraiment bien.",
            to: "reponse_gene",
            quality: "red",
            feedback:
              "Trop personnel d'emblée : ça peut mettre mal à l'aise avant même le premier mot.",
          },
        ],
      },
      reponse_ouverte: {
        pnj: "Elle se tourne à moitié, sourire fatigué : « Ah oui, c'est toujours comme ça le lundi. En plus ils sont en sous-effectif en ce moment. »",
        options: [
          {
            texte: "Ah, ça explique tout. J'espère qu'ils tiennent le coup, eux aussi !",
            to: "echange_2",
            quality: "green",
            feedback:
              "Elle t'a rendu la monnaie (une info en plus). Tu rebondis dessus : la conversation peut monter d'un cran.",
          },
          {
            texte: "Bref. Il fait beau au moins aujourd'hui.",
            to: "tiede",
            quality: "amber",
            feedback:
              "Changer de sujet aussi sec coupe l'élan qu'elle venait de te donner.",
          },
          {
            texte: "Franchement, ce café est mal géré, c'est toujours la cata ici.",
            to: "negatif",
            quality: "red",
            feedback:
              "Enchaîner sur du négatif plombe l'ambiance : peu de gens ont envie de suivre là-dedans.",
          },
        ],
      },
      reponse_polie: {
        pnj: "« Ouais, de temps en temps. » Elle répond poliment puis regarde à nouveau devant elle.",
        options: [
          {
            texte: "En tout cas ça sent super bon, ça donne faim.",
            to: "espace",
            quality: "green",
            feedback:
              "Réponse courte = elle n'a pas encore payé. Tu laisses de l'air avec un commentaire léger, sans la relancer.",
          },
          {
            texte: "Et vous prenez quoi d'habitude ?",
            to: "insiste_question",
            quality: "amber",
            feedback:
              "Enchaîner une deuxième question alors qu'elle est brève, c'est pousser un peu fort.",
          },
          {
            texte: "Vous habitez dans le quartier alors ?",
            to: "trop",
            quality: "red",
            feedback:
              "Là tu creuses dans sa vie privée alors qu'elle n'a rien ouvert : ça met mal à l'aise.",
          },
        ],
      },
      reponse_gene: {
        pnj: "« Euh… merci. » Elle sourit brièvement et détourne le regard.",
        options: [
          {
            texte: "Pardon, je me mêle ! Bonne journée en tout cas.",
            to: "recuperation",
            quality: "green",
            feedback:
              "Tu lis la gêne et tu recules avec le sourire : c'est exactement la bonne lecture.",
          },
          {
            texte: "Non mais vraiment, la couleur est parfaite pour vous.",
            to: "trop",
            quality: "amber",
            feedback:
              "Insister sur le compliment amplifie la gêne au lieu de la dissiper.",
          },
          {
            texte: "On se prend un café ensemble quand vous voulez ?",
            to: "end_rate",
            quality: "red",
            feedback:
              "Beaucoup trop vite : elle n'a envoyé aucun signal d'ouverture.",
          },
        ],
      },
      echange_2: {
        pnj: "Elle rit un peu. « C'est clair. Tu bosses dans le coin ? Moi je suis juste à côté, à l'agence. »",
        options: [
          {
            texte: "Ouais, à deux rues. Sympa comme quartier pour bosser, non ?",
            to: "bonus_final",
            quality: "green",
            feedback:
              "Elle a posé une question ET donné une info : tu réponds et tu renvoies. Vrai échange.",
          },
          {
            texte: "Ouais.",
            to: "tiede",
            quality: "amber",
            feedback:
              "Un mot sec après qu'elle t'a ouvert la porte, c'est dommage : à toi de payer à ton tour.",
          },
          {
            texte: "On se pose à une table ensemble alors ?",
            to: "trop",
            quality: "red",
            feedback:
              "Ça va trop vite : un bon échange en file ne veut pas dire s'installer ensemble.",
          },
        ],
      },
      tiede: {
        pnj: "« Mmh. » La conversation retombe un peu, elle jette un œil à son téléphone.",
        options: [
          {
            texte: "Bon, je te laisse à ton café. Bonne journée à toi !",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Tu sens que ça retombe et tu conclus chaleureusement : c'est la bonne sortie.",
          },
          {
            texte: "Sinon, tu fais quoi dans la vie ?",
            to: "insiste_question",
            quality: "amber",
            feedback:
              "Relancer par une grande question quand ça retombe, ça force un peu.",
          },
          {
            texte: "Attends, tu pars déjà ? On n'a même pas fini de parler.",
            to: "end_rate",
            quality: "red",
            feedback:
              "Reprocher son attention à quelqu'un qu'on vient de croiser, c'est trop.",
          },
        ],
      },
      negatif: {
        pnj: "« Ah… ouais. » Elle se referme un peu et regarde ailleurs.",
        options: [
          {
            texte: "Bon, j'exagère, le café est bon quand il arrive ! Ça vaut l'attente.",
            to: "recuperation",
            quality: "green",
            feedback:
              "Tu rattrapes en repassant au positif : bonne récupération.",
          },
          {
            texte: "Enfin bref. Il paraît qu'il va faire beau cette semaine.",
            to: "tiede",
            quality: "amber",
            feedback:
              "Le changement de sujet sauve un peu, mais l'élan est déjà cassé.",
          },
          {
            texte: "Et je te parle même pas du prix, c'est du vol.",
            to: "end_rate",
            quality: "red",
            feedback:
              "Continuer à râler enferme l'échange dans du négatif.",
          },
        ],
      },
      espace: {
        pnj: "Elle sourit, un peu plus détendue. « Ça oui. Bon courage pour ta journée en tout cas. »",
        options: [
          {
            texte: "Merci, à toi aussi ! Profite bien de ton café.",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Elle t'a rendu un mot gentil : tu réponds à la même hauteur et tu conclus bien.",
          },
          {
            texte: "Attends, tu prends quoi ? Je vais peut-être prendre pareil.",
            to: "tiede",
            quality: "amber",
            feedback:
              "Tu relances alors qu'elle amorçait un au revoir : petit contretemps.",
          },
          {
            texte: "On échange nos numéros pour continuer plus tard ?",
            to: "end_rate",
            quality: "red",
            feedback:
              "Un mot gentil de politesse n'est pas une invitation à aller plus loin.",
          },
        ],
      },
      insiste_question: {
        pnj: "« Je… voilà, un truc simple. » Elle répond du bout des lèvres, visiblement pressée.",
        options: [
          {
            texte: "Je te laisse tranquille, hein. Bonne journée !",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Tu lis qu'elle n'a pas envie et tu la libères avec le sourire : très juste.",
          },
          {
            texte: "Ok ok. La météo a l'air clémente aujourd'hui non ?",
            to: "tiede",
            quality: "amber",
            feedback:
              "Tu restes accroché alors que les signaux disent stop.",
          },
          {
            texte: "Et sinon tu es d'ici ou tu viens d'ailleurs ?",
            to: "end_rate",
            quality: "red",
            feedback:
              "Encore une question alors qu'elle se ferme : c'est insister de trop.",
          },
        ],
      },
      trop: {
        pnj: "Elle recule d'un demi-pas, un peu crispée, et regarde ailleurs.",
        options: [
          {
            texte: "Désolé, je m'emballe. Je te souhaite une bonne journée.",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Reconnaître la gêne et reculer, c'est exactement ce qu'il faut faire.",
          },
          {
            texte: "Rho, je plaisante, détends-toi un peu !",
            to: "tiede",
            quality: "amber",
            feedback:
              "Lui dire de se détendre reporte la gêne sur elle : pas idéal.",
          },
          {
            texte: "Allez, un café ensemble, tu ne le regretteras pas !",
            to: "end_rate",
            quality: "red",
            feedback:
              "Insister quand la personne se ferme, c'est justement ce qu'il faut éviter.",
          },
        ],
      },
      recuperation: {
        pnj: "Elle se déride un peu. « Haha, pas grave. »",
        options: [
          {
            texte: "Aller, plus que deux personnes devant nous. On y est presque !",
            to: "end_correct",
            quality: "green",
            feedback:
              "Tu restes léger et tu laisses respirer : l'échange se termine sur une note agréable.",
          },
          {
            texte: "Alors, tu commandes quoi finalement ?",
            to: "insiste_question",
            quality: "amber",
            feedback:
              "Une question de plus n'était pas nécessaire, l'ambiance était déjà bonne.",
          },
          {
            texte: "Du coup on se revoit ici demain, même heure ?",
            to: "end_rate",
            quality: "red",
            feedback:
              "Trop d'avance : rien n'indiquait qu'elle voulait un rendez-vous.",
          },
        ],
      },
      bonus_final: {
        pnj: "Vous discutez encore trente secondes, facilement. Son tour arrive. « Tiens, à moi. Sympa d'avoir papoté, ça a fait passer l'attente. Bonne journée ! »",
        options: [
          {
            texte: "Pareil, ça m'a fait plaisir. À la prochaine, peut-être !",
            to: "end_reussi",
            quality: "green",
            feedback:
              "Tu conclus chaleureux et sans pression : un bel échange, léger et complet.",
          },
          {
            texte: "Ouais. Au revoir.",
            to: "end_correct",
            quality: "amber",
            feedback:
              "Un peu plat pour finir un bon moment, mais rien de grave.",
          },
          {
            texte: "Attends, donne-moi ton numéro avant de partir !",
            to: "end_rate",
            quality: "red",
            feedback:
              "Forcer un contact casse la légèreté que vous veniez de créer.",
          },
        ],
      },
      end_reussi: {
        pnj: "Elle te fait un petit signe de la main en récupérant son café.",
        ending: {
          verdict: "réussi",
          titre: "Un moment léger, réussi",
          texte:
            "Tu as saisi un instant partagé, tu as rebondi quand elle t'a rendu la monnaie, et tu as conclu sans forcer. C'est exactement ça, le small talk : pas besoin d'un numéro pour que ce soit une réussite.",
        },
      },
      end_correct_sortie: {
        pnj: "Elle te rend ton sourire et se retourne vers le comptoir.",
        ending: {
          verdict: "correct",
          titre: "Sortie en douceur",
          texte:
            "Elle n'était pas d'humeur, et tu l'as senti : tu as tenté, tu as lu les signaux, et tu es reparti avec le sourire. Savoir s'arrêter au bon moment est une vraie compétence. C'est une réussite, pas un échec.",
        },
      },
      end_correct: {
        pnj: "Vous vous saluez, chacun repart avec son café.",
        ending: {
          verdict: "correct",
          titre: "Petit échange sympa",
          texte:
            "Tu as ouvert, tu as échangé quelques mots agréables et tu as conclu proprement. Ce n'est pas devenu une grande discussion, et c'est très bien : ces micro-contacts, mis bout à bout, c'est ça qui réhabitue au monde.",
        },
      },
      end_rate: {
        pnj: "Elle récupère son café et s'éloigne un peu plus vite que prévu.",
        ending: {
          verdict: "raté",
          titre: "Un cran trop loin",
          texte:
            "Tu as poussé alors que les signaux disaient « pas maintenant » : question de trop, contact demandé trop tôt, ou ton un peu appuyé. Aucun drame, ça arrive à tout le monde. La prochaine fois, attends qu'elle te rende la monnaie avant de monter d'un cran.",
        },
      },
    },
  },

  {
    id: "soiree-peu-de-monde",
    titre: "La soirée où tu connais personne",
    emoji: "🎉",
    tint: "bg-purple-100 text-purple-600",
    lieu: "Soirée chez un ami",
    contexte:
      "Tu arrives à la soirée d'un ami. Tu ne connais presque personne, et l'hôte vient de filer en cuisine. Dans le salon, un petit groupe discute en riant.",
    start: "arrivee",
    nodes: {
      arrivee: {
        pnj: "Trois personnes discutent près du canapé, verre à la main. Elles rient à une histoire. Tu es à deux mètres, un peu planté.",
        options: [
          {
            texte: "Tu t'approches, tu écoutes un instant et tu souris : « Je peux me greffer ? »",
            to: "approche_groupe",
            quality: "green",
            feedback:
              "Tu écoutes d'abord et tu demandes gentiment ta place : la meilleure façon de rejoindre un groupe.",
          },
          {
            texte: "Tu vas près du buffet et tu attends qu'on vienne te parler.",
            to: "buffet",
            quality: "amber",
            feedback:
              "Attendre passivement peut marcher, mais tu laisses tout au hasard.",
          },
          {
            texte: "Tu coupes le groupe : « Salut ! Moi c'est [toi], je bosse dans la tech, et vous ? »",
            to: "interruption",
            quality: "red",
            feedback:
              "Débarquer en coupant une histoire en cours, ça casse l'énergie du groupe.",
          },
        ],
      },
      approche_groupe: {
        pnj: "L'un d'eux te lance un « Ah salut, vas-y ! » avec un sourire, puis reprend son histoire de voyage au Portugal.",
        options: [
          {
            texte: "Tu écoutes et tu réagis : « Ah, Lisbonne ? J'en ai entendu que du bien. »",
            to: "dans_le_groupe",
            quality: "green",
            feedback:
              "Tu te branches sur leur sujet au lieu d'imposer le tien : c'est comme ça qu'on entre vraiment.",
          },
          {
            texte: "« Sinon, quelqu'un sait où sont les toilettes ? »",
            to: "hors_sujet",
            quality: "amber",
            feedback:
              "Question logistique en plein milieu de leur histoire : tu casses le fil.",
          },
          {
            texte: "« Le Portugal ? Moi je reviens de Bali, alors là niveau voyage… »",
            to: "one_up",
            quality: "red",
            feedback:
              "Ramener la couverture à toi (« moi c'est mieux »), c'est le meilleur moyen de refroidir un groupe.",
          },
        ],
      },
      buffet: {
        pnj: "Quelqu'un dérive aussi vers le buffet, attrape une chips et te sourit : « Ils sont bons ces petits trucs, non ? »",
        options: [
          {
            texte: "« Carrément. Faut que je me retienne de tout finir avant les autres ! »",
            to: "duo",
            quality: "green",
            feedback:
              "La personne a payé (elle t'a parlé), tu réponds avec légèreté et une touche de toi : nickel.",
          },
          {
            texte: "« Ouais. »",
            to: "sec",
            quality: "amber",
            feedback:
              "Elle t'ouvre la porte et tu réponds par un mot : l'échange risque de mourir là.",
          },
          {
            texte: "« Franchement je suis crevé, ma semaine a été horrible, je te raconte pas. »",
            to: "trop_perso",
            quality: "red",
            feedback:
              "Déballer ses soucis d'entrée, c'est lourd à porter pour quelqu'un qu'on vient de rencontrer.",
          },
        ],
      },
      interruption: {
        pnj: "Petit blanc. Sourire poli, un « salut » du bout des lèvres, puis le groupe reprend son histoire… sans vraiment t'intégrer.",
        options: [
          {
            texte: "Tu recules d'un pas, tu souris et tu vas voir ailleurs, plus tranquillement.",
            to: "buffet",
            quality: "green",
            feedback:
              "Tu sens que ce n'est pas passé et tu te repositionnes sans forcer : bonne récupération.",
          },
          {
            texte: "Tu réessaies, plus fort : « Non mais du coup, vous parliez de quoi ? »",
            to: "insiste_groupe",
            quality: "amber",
            feedback:
              "Réinsister juste après un accueil tiède, c'est ramer à contre-courant.",
          },
          {
            texte: "« Ok, je vois que je dérange, pas de souci hein. »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Souligner qu'on t'ignore met tout le monde mal à l'aise.",
          },
        ],
      },
      dans_le_groupe: {
        pnj: "Le conteur t'inclut : « Ouais, magnifique ! Et toi, tu connais Marc depuis quand ? »",
        options: [
          {
            texte: "« On bosse ensemble depuis deux ans. Et vous, vous vous êtes connus comment ? »",
            to: "conversation_lancee",
            quality: "green",
            feedback:
              "Il t'a posé une question (il paie) : tu réponds ET tu renvoies. La conversation est lancée.",
          },
          {
            texte: "« Deux ans. »",
            to: "sec",
            quality: "amber",
            feedback:
              "Réponse fermée alors qu'il t'ouvrait grand la porte : dommage.",
          },
          {
            texte: "« Alors Marc, laisse-moi te raconter comment on s'est rencontrés, c'est une longue histoire… »",
            to: "one_up",
            quality: "red",
            feedback:
              "Partir en monologue monopolise le groupe et coupe les autres.",
          },
        ],
      },
      hors_sujet: {
        pnj: "« Euh, au fond à droite je crois. » On te répond vite puis on revient à l'histoire de voyage.",
        options: [
          {
            texte: "« Merci ! Du coup, le Portugal, vous y étiez pour quoi ? »",
            to: "dans_le_groupe",
            quality: "green",
            feedback:
              "Tu te raccroches à leur fil : bien rattrapé, tu reviens dans l'échange.",
          },
          {
            texte: "« Et il y a à boire quelque part sinon ? »",
            to: "sec",
            quality: "amber",
            feedback:
              "Encore du logistique : tu t'éloignes toi-même de la conversation.",
          },
          {
            texte: "« Attendez, faut que je vous montre un truc sur mon téléphone. »",
            to: "insiste_groupe",
            quality: "red",
            feedback:
              "Détourner l'attention du groupe vers toi et ton écran, ça casse la dynamique.",
          },
        ],
      },
      one_up: {
        pnj: "Sourires polis, mais l'énergie retombe d'un cran. Le groupe se resserre légèrement.",
        options: [
          {
            texte: "Tu te reprends : « Mais bon, racontez, votre voyage avait l'air génial. »",
            to: "dans_le_groupe",
            quality: "green",
            feedback:
              "Tu rends la parole et tu remets le projecteur sur eux : belle récupération.",
          },
          {
            texte: "Tu hoches la tête et tu attends la suite en silence.",
            to: "sec",
            quality: "amber",
            feedback:
              "Le silence passif ne répare pas vraiment le petit froid installé.",
          },
          {
            texte: "« Enfin bref, moi j'ai fait dix pays cette année, donc bon. »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Continuer à te mettre en avant finit de refroidir tout le monde.",
          },
        ],
      },
      duo: {
        pnj: "Elle sourit. « Moi je connais l'hôte du boulot, on bossait ensemble avant. Et toi, tu le connais d'où ? »",
        options: [
          {
            texte: "« Par le foot, on joue le dimanche. Ah, vous étiez collègues alors ? »",
            to: "conversation_lancee",
            quality: "green",
            feedback:
              "Elle a partagé une info ET posé une question : tu réponds et tu relances. Ça roule.",
          },
          {
            texte: "« Ah, d'accord. »",
            to: "sec",
            quality: "amber",
            feedback:
              "Tu laisses tomber sa question au lieu d'y répondre : l'échange se dégonfle.",
          },
          {
            texte: "« Le boulot ? Parle-moi-en, moi mon job c'est un vrai calvaire en ce moment… »",
            to: "trop_perso",
            quality: "red",
            feedback:
              "Tu bascules trop vite dans du lourd et personnel : ça alourdit l'ambiance.",
          },
        ],
      },
      sec: {
        pnj: "Un silence s'installe. La personne regarde autour d'elle, son verre à la main.",
        options: [
          {
            texte: "« En tout cas ça m'a fait plaisir. Je vais dire bonjour à deux autres personnes, à tout à l'heure ! »",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Ça ne prend pas, tu offres une sortie facile et chaleureuse : parfaitement géré.",
          },
          {
            texte: "« Sinon tu fais quoi dans la vie toi ? »",
            to: "insiste_groupe",
            quality: "amber",
            feedback:
              "Combler le blanc par une grande question, c'est forcer un peu la machine.",
          },
          {
            texte: "« Bon, c'est un peu gênant ce silence, non ? »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Pointer le malaise à voix haute le rend encore plus lourd.",
          },
        ],
      },
      trop_perso: {
        pnj: "Elle hoche la tête poliment mais recule un peu, un peu débordée par le déballage.",
        options: [
          {
            texte: "« Pardon, je m'emballe ! Et toi, tu passes une bonne soirée ? »",
            to: "duo",
            quality: "green",
            feedback:
              "Tu allèges et tu lui rends la parole : tu répares vite, bien joué.",
          },
          {
            texte: "« Enfin bref, ça va aller. Tu disais ? »",
            to: "sec",
            quality: "amber",
            feedback:
              "Tu retombes sur tes pieds, mais l'ambiance reste un peu plombée.",
          },
          {
            texte: "« Et le pire, c'est mon manager, attends que je te raconte… »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Continuer à vider ton sac fait fuir : trop lourd, trop tôt.",
          },
        ],
      },
      insiste_groupe: {
        pnj: "On te répond gentiment, mais les regards commencent à se tourner ailleurs. L'énergie baisse.",
        options: [
          {
            texte: "« Bon, je vous laisse tranquilles, je fais un tour. Content de vous avoir croisés ! »",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Tu lis que ça s'essouffle et tu sors avec classe : c'est la bonne décision.",
          },
          {
            texte: "« En tout cas belle soirée hein ? Il y a du monde. »",
            to: "end_correct",
            quality: "amber",
            feedback:
              "Un dernier mot léger, correct, même si l'échange ne redécollera pas.",
          },
          {
            texte: "« Attendez, restez, j'ai encore plein de trucs à raconter ! »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Retenir un groupe qui décroche, c'est aller trop loin.",
          },
        ],
      },
      conversation_lancee: {
        pnj: "L'échange coule tout seul maintenant. « On retourne se prendre un verre, tu viens avec nous ? »",
        options: [
          {
            texte: "« Avec plaisir, je vous suis ! »",
            to: "end_reussi",
            quality: "green",
            feedback:
              "On t'intègre pour de bon : tu acceptes simplement, chaleureusement. Mission réussie.",
          },
          {
            texte: "« Euh… ouais, si vous voulez. »",
            to: "end_correct",
            quality: "amber",
            feedback:
              "Un oui hésitant refroidit un peu l'invitation, mais tu restes dans le coup.",
          },
          {
            texte: "« Oui ! Et on se cale un resto tous ensemble la semaine prochaine ? »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Vouloir tout verrouiller pour la suite, si vite, ça effraie plus que ça ne rapproche.",
          },
        ],
      },
      end_reussi: {
        pnj: "Tu passes le reste de la soirée à discuter avec eux, verre à la main.",
        ending: {
          verdict: "réussi",
          titre: "Intégré, tout simplement",
          texte:
            "Tu as écouté avant de parler, tu t'es branché sur leur sujet, et tu as accepté leur invitation sans en faire trop. C'est comme ça qu'on rejoint un groupe : en douceur, un cran à la fois.",
        },
      },
      end_correct_sortie: {
        pnj: "Tu t'éloignes avec le sourire, ton verre à la main, prêt à tenter ailleurs.",
        ending: {
          verdict: "correct",
          titre: "Tu as su tourner la page",
          texte:
            "Cet échange-là n'a pas pris, et tu ne l'as pas forcé : tu es reparti chaleureusement, sans te vexer. Dans une soirée, toutes les conversations n'accrochent pas, et savoir passer à la suivante est une force.",
        },
      },
      end_correct: {
        pnj: "Vous échangez encore quelques mots avant de vous disperser dans la soirée.",
        ending: {
          verdict: "correct",
          titre: "Un contact honnête",
          texte:
            "Tu as parlé à des inconnus dans une soirée où tu ne connaissais personne : c'est déjà beaucoup. Ce n'est pas devenu une grande amitié ce soir, et ce n'est pas le but. Tu as brisé la glace, c'est l'essentiel.",
        },
      },
      end_rate: {
        pnj: "Le groupe se reforme sans toi, et tu te retrouves un peu en retrait.",
        ending: {
          verdict: "raté",
          titre: "Trop vite, trop fort",
          texte:
            "Tu as poussé plus vite que le rythme du groupe : projecteur sur toi, plans forcés, ou insistance de trop. Rien de honteux, c'est un classique. La clé, la prochaine fois : écouter, laisser l'autre payer, et ne monter que quand ça suit.",
        },
      },
    },
  },

  {
    id: "collegue-recurrent",
    titre: "Le collègue qu'on recroise",
    emoji: "🤝",
    tint: "bg-teal-100 text-teal-600",
    lieu: "Au travail, à la machine à café",
    contexte:
      "À la machine à café, tu croises Sami, un collègue d'un autre service que tu vois souvent sans jamais vraiment lui parler. Comme vous vous recroiserez, rien ne presse : tu peux construire petit à petit.",
    start: "machine_cafe",
    nodes: {
      machine_cafe: {
        pnj: "Sami attend son café à côté de toi, il regarde la machine couler.",
        options: [
          {
            texte: "« Elle prend son temps ce matin, hein. »",
            to: "premier_echange",
            quality: "green",
            feedback:
              "Un commentaire léger sur le moment partagé : la porte d'entrée idéale entre collègues.",
          },
          {
            texte: "« Sérieux, quelle semaine de dingue, je suis débordé. »",
            to: "plainte",
            quality: "amber",
            feedback:
              "Ouvrir sur la charge de travail, c'est banal mais un peu plombant pour démarrer.",
          },
          {
            texte: "« Dis, tu es en couple toi ? »",
            to: "trop_direct",
            quality: "red",
            feedback:
              "Beaucoup trop intime pour un collègue à qui tu n'as jamais vraiment parlé.",
          },
        ],
      },
      premier_echange: {
        pnj: "« Ah ça, capricieuse le lundi surtout ! » Il rit un peu.",
        options: [
          {
            texte: "« Haha, clairement. Allez, bon café à toi. »",
            to: "jour_2",
            quality: "green",
            feedback:
              "Tu échanges un sourire et tu n'en demandes pas plus : entre collègues, on construit sur la durée.",
          },
          {
            texte: "« Tu bosses sur quoi en ce moment ? Ça se passe bien ? T'es là depuis longtemps ? »",
            to: "questions",
            quality: "amber",
            feedback:
              "Trois questions d'affilée, ça vire à l'interrogatoire au lieu de l'échange.",
          },
          {
            texte: "« On se fait un déj tous les deux cette semaine ? »",
            to: "trop_vite",
            quality: "red",
            feedback:
              "Proposer un déjeuner dès le premier vrai échange, c'est griller les étapes.",
          },
        ],
      },
      plainte: {
        pnj: "« Ouais… c'est speed en ce moment. » Il regarde son gobelet, poliment.",
        options: [
          {
            texte: "« Bon, au moins le café est là pour nous sauver. »",
            to: "premier_echange",
            quality: "green",
            feedback:
              "Tu repasses sur du léger et positif : tu rattrapes bien le départ un peu gris.",
          },
          {
            texte: "« Grave, moi j'ai trois deadlines cette semaine, c'est l'enfer. »",
            to: "jour_2_froid",
            quality: "amber",
            feedback:
              "Surenchérir sur le stress enferme l'échange dans les plaintes.",
          },
          {
            texte: "« Franchement entre nous, le nouveau chef est nul, non ? »",
            to: "commerage",
            quality: "red",
            feedback:
              "Entraîner un collègue dans les critiques dès le départ, c'est risqué et mettant mal à l'aise.",
          },
        ],
      },
      trop_direct: {
        pnj: "« Euh… ça va, ouais. » Il est un peu surpris et répond du bout des lèvres.",
        options: [
          {
            texte: "« Pardon, question au hasard ! Bref, bon café. »",
            to: "premier_echange",
            quality: "green",
            feedback:
              "Tu recules gentiment et tu repars sur du neutre : bonne récupération.",
          },
          {
            texte: "« Et tu habites loin du bureau sinon ? »",
            to: "questions",
            quality: "amber",
            feedback:
              "Enchaîner sur sa vie privée alors qu'il s'est crispé, c'est insister.",
          },
          {
            texte: "« Allez, tu peux me le dire, on est entre nous ! »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Le pousser à se confier de force, c'est franchir la ligne.",
          },
        ],
      },
      jour_2: {
        pnj: "Quelques jours plus tard, Sami te repère de loin et te lance : « Tiens, salut ! Alors, toujours vivant après cette semaine ? »",
        options: [
          {
            texte: "« De justesse ! Et toi, tu tiens le choc ? »",
            to: "jour_2_chaud",
            quality: "green",
            feedback:
              "C'est LUI qui vient te parler cette fois : il a rendu la monnaie. Tu réponds avec chaleur et tu relances. Le lien monte d'un cran.",
          },
          {
            texte: "« Ça va. »",
            to: "jour_2_froid",
            quality: "amber",
            feedback:
              "Il fait l'effort de venir vers toi, et tu réponds par deux mots : dommage de ne pas payer en retour.",
          },
          {
            texte: "« Ah bah tiens, mon acolyte de la machine à café ! Alors, on remet ça, l'ami ? »",
            to: "malaise",
            quality: "red",
            feedback:
              "Trop familier trop vite : le surnom et l'excès de complicité peuvent gêner.",
          },
        ],
      },
      questions: {
        pnj: "Ses réponses se font de plus en plus courtes, il commence à regarder ailleurs.",
        options: [
          {
            texte: "« Bon, je te lâche ! Moi c'est semaine chargée aussi, on se croise. »",
            to: "jour_2",
            quality: "green",
            feedback:
              "Tu arrêtes le questionnaire et tu partages un truc sur toi : tu rééquilibres et tu laisses de l'air.",
          },
          {
            texte: "« Et le week-end, tu fais quoi de beau d'habitude ? »",
            to: "jour_2_froid",
            quality: "amber",
            feedback:
              "Encore une question quand il se ferme : tu forces la porte.",
          },
          {
            texte: "« Allez, raconte-moi un peu ta vie, on ne se parle jamais ! »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Exiger qu'il se raconte, c'est mettre une pression que rien ne justifie.",
          },
        ],
      },
      trop_vite: {
        pnj: "« Euh, ouais, pourquoi pas un jour. » Il esquive poliment.",
        options: [
          {
            texte: "« Pas de pression, c'était juste comme ça. Bon café ! »",
            to: "jour_2",
            quality: "green",
            feedback:
              "Tu déminues la pression et tu laisses la porte ouverte : parfait pour un lien qui se construira dans le temps.",
          },
          {
            texte: "« Cool, on dit jeudi 12h30 alors, c'est noté ! »",
            to: "malaise",
            quality: "amber",
            feedback:
              "Verrouiller un créneau sur un « pourquoi pas », c'est prendre son « peut-être » pour un « oui ».",
          },
          {
            texte: "« Allez, dis oui, tu vas pas me faire manger tout seul ! »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Culpabiliser pour obtenir un oui, c'est exactement ce qu'il faut éviter.",
          },
        ],
      },
      commerage: {
        pnj: "« Ah… je le connais pas trop en fait. » Il se ferme un peu, mal à l'aise.",
        options: [
          {
            texte: "« T'as raison, laisse tomber. Sinon, bon week-end en approche ! »",
            to: "premier_echange",
            quality: "green",
            feedback:
              "Tu lâches le sujet glissant et tu repars sur du sain : bien rattrapé.",
          },
          {
            texte: "« Bon, j'dis ça, j'dis rien. Enfin, tu vois ce que je veux dire. »",
            to: "jour_2_froid",
            quality: "amber",
            feedback:
              "Sous-entendre sans lâcher l'affaire laisse un petit malaise.",
          },
          {
            texte: "« Sérieux, tout le monde le pense, personne n'ose le dire. »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Insister dans la critique met le collègue dans une position inconfortable.",
          },
        ],
      },
      jour_2_chaud: {
        pnj: "Vous discutez cinq bonnes minutes, ça rigole. « Écoute, faut vraiment qu'on aille manger un midi, sérieux. »",
        options: [
          {
            texte: "« Carrément, ça me ferait plaisir. Jeudi ou vendredi, tu préfères quoi ? »",
            to: "end_reussi",
            quality: "green",
            feedback:
              "C'est lui qui propose : tu acceptes chaleureusement et tu rends concret, sans forcer. Le lien est bien installé.",
          },
          {
            texte: "« Ouais, un de ces quatre. »",
            to: "end_correct",
            quality: "amber",
            feedback:
              "Un « un de ces quatre » un peu vague laisse retomber son élan, mais rien de cassé.",
          },
          {
            texte: "« Ah enfin ! Je le sentais bien, nous deux, on va devenir potes c'est sûr. »",
            to: "malaise",
            quality: "red",
            feedback:
              "En faire trop sur « nous deux » alors que ça commence à peine, ça met une pression inutile.",
          },
        ],
      },
      jour_2_froid: {
        pnj: "Il reste cordial mais distant, hoche la tête et fait mine de repartir vers son bureau.",
        options: [
          {
            texte: "« Allez, bonne journée, on se recroise à la machine ! »",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Tu acceptes le rythme, tu restes chaleureux et tu comptes sur les prochaines fois : c'est la bonne approche pour un lien qui dure.",
          },
          {
            texte: "« Attends, on se fait un café ensemble là, non ? »",
            to: "malaise",
            quality: "amber",
            feedback:
              "Le retenir alors qu'il s'en va, c'est pousser à contretemps.",
          },
          {
            texte: "« T'as l'air de me fuir, j'ai fait un truc ? »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Lui reprocher sa distance le met dans l'embarras et le fait fuir davantage.",
          },
        ],
      },
      malaise: {
        pnj: "Petit flottement. Il sourit poliment mais garde ses distances.",
        options: [
          {
            texte: "« Bon, je te laisse à ton café. À la prochaine, sans façon ! »",
            to: "end_correct_sortie",
            quality: "green",
            feedback:
              "Tu allèges, tu redonnes de l'espace et tu comptes sur le temps : c'est exactement ce qu'il faut.",
          },
          {
            texte: "« Enfin je dis ça pour rigoler hein, faut pas le prendre mal. »",
            to: "jour_2_froid",
            quality: "amber",
            feedback:
              "Te justifier longuement souligne le malaise plus que ça ne l'efface.",
          },
          {
            texte: "« Rho ça va, détends-toi, on rigole ! »",
            to: "end_rate",
            quality: "red",
            feedback:
              "Lui dire de se détendre reporte la gêne sur lui : à éviter.",
          },
        ],
      },
      end_reussi: {
        pnj: "Vous callez le déjeuner, et ce coup-ci il l'attend vraiment.",
        ending: {
          verdict: "réussi",
          titre: "Un lien qui s'installe",
          texte:
            "Tu n'as pas brûlé les étapes : un mot léger, puis tu as laissé le temps faire, et quand Sami est revenu vers toi de lui-même, tu as su monter d'un cran. C'est exactement ça, transformer un collègue croisé en vraie relation.",
        },
      },
      end_correct_sortie: {
        pnj: "Il repart vers son bureau, et vous vous recroiserez sûrement demain.",
        ending: {
          verdict: "correct",
          titre: "Tu respectes le rythme",
          texte:
            "Aujourd'hui, Sami n'était pas très disponible, et tu ne l'as pas forcé. Comme vous vous recroisez souvent, ce n'est que partie remise : les liens entre collègues se tissent sur des dizaines de petits bonjours, pas en une fois. Tu joues juste.",
        },
      },
      end_correct: {
        pnj: "Vous vous saluez, chacun repart avec son gobelet.",
        ending: {
          verdict: "correct",
          titre: "Sur la bonne voie",
          texte:
            "Vous avez échangé de vrais mots, l'ambiance est bonne. Tu es resté un peu en retrait au moment de concrétiser, mais le contact est établi. La prochaine fois qu'il vient te parler, ose rendre la monnaie un peu plus franchement.",
        },
      },
      end_rate: {
        pnj: "Il abrège et retourne à son bureau, un peu plus fermé qu'avant.",
        ending: {
          verdict: "raté",
          titre: "Tu as forcé le passage",
          texte:
            "Tu as voulu aller plus vite que le lien ne le permettait : question trop intime, plan imposé, ou reproche. Aucune catastrophe, et comme vous vous recroiserez, tout est rattrapable. Le secret : avancer d'un cran seulement quand l'autre revient vers toi.",
        },
      },
    },
  },
];

export const SIMULATION_BY_ID = Object.fromEntries(
  SIMULATIONS.map((s) => [s.id, s])
);
