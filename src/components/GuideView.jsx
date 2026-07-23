import React from "react";
import { ArrowLeft, Plus } from "lucide-react";

/* ── Petits blocs réutilisables ── */

function Say({ children, alt }) {
  return (
    <p className={`font-serif-guide text-[17px] leading-relaxed my-2.5 pl-3.5 border-l-2 ${alt ? "border-sky-300 text-stone-700" : "border-stone-300 text-stone-700"}`}>
      {children}
    </p>
  );
}

function Why({ children }) {
  return <p className="text-sm text-stone-400 italic my-2.5 leading-relaxed">{children}</p>;
}

const TONE = {
  warm: "border-t-emerald-300",
  neutral: "border-t-stone-300",
  cold: "border-t-rose-300",
};

function Fork({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
      {items.map((it, i) => (
        <div key={i} className={`p-3 rounded-lg bg-stone-50 border border-stone-200 border-t-2 ${TONE[it.tone] || TONE.neutral}`}>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-stone-400 mb-1.5">{it.sig}</span>
          <span className="block text-sm text-stone-700 leading-snug">{it.move}</span>
        </div>
      ))}
    </div>
  );
}

function Node({ title, tag, tagTone = "neutral", children, defaultOpen = false }) {
  const tagColor = { open: "text-emerald-600 border-emerald-300", risk: "text-amber-600 border-amber-300", deep: "text-sky-600 border-sky-300", neutral: "text-stone-500 border-stone-300" }[tagTone];
  return (
    <details open={defaultOpen} className="group rounded-xl border border-stone-200 bg-white open:border-stone-300 mb-2.5">
      <summary className="cursor-pointer flex items-start gap-2.5 px-4 py-3.5 select-none">
        <Plus size={16} strokeWidth={2.5} className="chev text-stone-400 mt-0.5 flex-shrink-0" />
        <span className="flex-1 font-medium text-[15px] text-stone-800 leading-snug">
          {title}
          {tag && (
            <span className={`ml-2 align-middle inline-block text-[10px] font-semibold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded border ${tagColor}`}>
              {tag}
            </span>
          )}
        </span>
      </summary>
      <div className="px-4 pb-4 pl-[42px] border-t border-dashed border-stone-200 pt-1">{children}</div>
    </details>
  );
}

function Gate({ items, verdict }) {
  return (
    <div className="mt-6 rounded-xl bg-stone-900 text-stone-100 px-5 py-4">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-300 mb-2.5">Checkpoint avant de monter</h3>
      <ul className="list-disc pl-4 text-sm space-y-1.5 marker:text-stone-500">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
      <p className="mt-3 text-[13px] text-stone-400">{verdict}</p>
    </div>
  );
}

function Palier({ depth, title, goal, intro, children }) {
  return (
    <section className="mt-14 scroll-mt-4">
      <div className="flex items-baseline gap-3 flex-wrap border-b border-stone-200 pb-2.5 mb-3">
        <span className="text-[12px] font-bold tracking-[0.06em] bg-stone-900 text-white px-2 py-1 rounded">{depth}</span>
        <h2 className="font-serif-guide text-[26px] font-semibold text-stone-900 tracking-tight">{title}</h2>
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-stone-400">{goal}</span>
      </div>
      <p className="text-[15px] text-stone-600 leading-relaxed max-w-[62ch] mb-5">{intro}</p>
      {children}
    </section>
  );
}

function MiniCard({ title, children }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-4">
      <h4 className="font-serif-guide text-[18px] font-semibold text-stone-900 mb-1.5">{title}</h4>
      <p className="text-sm text-stone-600 leading-relaxed">{children}</p>
    </div>
  );
}

/* ── La page ── */

export default function GuideView({ onBack }) {
  return (
    <div className="guide min-h-svh">
      {/* Barre supérieure */}
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors"
          aria-label="Retour"
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Le guide</span>
      </header>

      <div className="px-5 pb-20 max-w-[720px] mx-auto">
        {/* Hero */}
        <div className="pt-8 pb-6 border-b-2 border-stone-900">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
            L'arbre de conversation · approche → profondeur
          </p>
          <h1 className="font-serif-guide text-stone-900 font-semibold leading-[1.02] tracking-tight mt-3 mb-4 text-[clamp(30px,8vw,46px)]">
            Tu n'as pas besoin d'être intéressant.{" "}
            <em className="italic font-normal text-stone-500">Tu dois être intéressé.</em>
          </h1>
          <p className="text-[15px] text-stone-600 leading-relaxed max-w-[56ch]">
            Une conversation n'est pas un script, c'est une succession de paliers. À chaque palier tu proposes un peu plus,
            tu observes ce qui revient, et tu décides : je monte, je reste, ou je pars.
          </p>
          <div className="mt-5 pl-4 py-3 border-l-2 border-amber-400 bg-amber-50/60 max-w-[60ch] text-[14px] text-stone-700 leading-relaxed rounded-r-lg">
            <strong className="font-semibold">La seule règle mécanique :</strong> ne monte jamais d'un palier tant que la
            personne ne t'a pas rendu quelque chose au palier actuel. Une réponse courte = elle n'a pas payé. Une question
            retournée = elle a payé double. C'est le seul signal à surveiller.
          </div>
        </div>

        {/* P0 */}
        <Palier depth="P0" title="Ouvrir" goal="Objectif : exister, 8 secondes"
          intro="À ce stade le contenu ne compte presque pas. Ce qui compte : que tu ne demandes rien, que tu sois ancré au contexte, et que tu laisses une porte de sortie évidente. La personne doit pouvoir t'ignorer sans gêne — c'est justement ça qui la met à l'aise.">
          <Node title="L'observation partagée" tag="Défaut" tagTone="open" defaultOpen>
            <Why>Le passe-partout. Tu commentes une chose que vous vivez tous les deux, à la seconde. Impossible à mal prendre parce que ce n'est pas sur elle.</Why>
            <Say>« Ça fait vingt minutes qu'on attend, je commence à croire que la file avance à reculons. »</Say>
            <Say alt>« Bon, je crois que t'as pris le seul truc du menu que personne n'ose commander. C'est bien ou c'est un piège ? »</Say>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-stone-400 mt-4 mb-1">Elle te répond →</h4>
            <Fork items={[
              { tone: "warm", sig: "Elle rebondit + ajoute", move: "Vert. Enchaîne direct sur P1 : « t'es d'ici ou tu passes ? »" },
              { tone: "neutral", sig: "Réponse polie, courte", move: "Une deuxième relance max. Si toujours court : tu souris, tu lâches. Ce n'est pas un échec." },
              { tone: "cold", sig: "Fermée, écouteurs, corps détourné", move: "« Bonne journée » et tu pars. Immédiatement. C'est ça qui fait de toi quelqu'un de safe." },
            ]} />
          </Node>

          <Node title="L'aveu direct" tag="Assumé" tagTone="risk">
            <Why>Tu nommes ce que tu fais. Ça désamorce tout : elle n'a plus à deviner tes intentions, donc plus à se protéger. Marche très bien si tu es visiblement un peu nerveux — la sincérité couvre la maladresse.</Why>
            <Say>« Je vais être honnête, je t'ai vue et j'avais envie de venir te dire bonjour. Je m'appelle [X]. »</Say>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Puis <strong className="font-semibold">tu te tais.</strong> Le silence après un aveu direct n'est pas un vide à combler, c'est l'espace qu'elle utilise pour décider. Combler ce silence est l'erreur n°1.</p>
            <Fork items={[
              { tone: "warm", sig: "Elle donne son prénom", move: "C'est un oui. Passe à P1 sans célébrer." },
              { tone: "neutral", sig: "Elle rit, gênée", move: "Rends-lui la sortie : « je te laisse, hein, j'avais juste envie de le dire. » Souvent elle relance elle-même." },
              { tone: "cold", sig: "« Je suis pressée »", move: "« Pas de souci, bonne soirée. » Tu pars content : tu l'as fait." },
            ]} />
          </Node>

          <Node title="Le service rendu / la demande minuscule">
            <Why>Effet Ben Franklin : rendre un micro-service crée de l'attachement chez celui qui rend le service. Demander quelque chose de trivial est donc plus efficace qu'offrir.</Why>
            <Say>« Tu connais le coin ? Je cherche un endroit correct pour bosser deux heures, pas un truc à touristes. »</Say>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Le piège : t'arrêter après la réponse. La demande est un prétexte, pas le but. Enchaîne toujours : <em className="italic">« Et toi t'es plutôt café ou plutôt bosser à la maison ? »</em></p>
          </Node>

          <Node title="En contexte social (soirée, cours, boxe, collègue)">
            <Why>Le contexte a déjà fait le travail d'introduction. Ici, ouvrir sur l'inconnu partagé est plus naturel que sur la personne.</Why>
            <Say>« Tu connais qui ici, toi ? Moi je connais littéralement une personne et elle a disparu. »</Say>
            <Say alt>« T'es là depuis combien de temps ? J'essaie de comprendre si je suis nul ou si tout le monde galère au début. »</Say>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Dans un contexte récurrent (salle, cours, boulot), <strong className="font-semibold">n'essaie pas de tout faire en une fois.</strong> Trois échanges de 90 secondes sur trois jours valent mieux qu'une conversation de 40 minutes forcée.</p>
          </Node>
        </Palier>

        {/* P1 */}
        <Palier depth="P1" title="Cadrer" goal="Objectif : trouver la matière"
          intro="Tu cherches un fil, pas un CV. La question « tu fais quoi dans la vie » n'est pas interdite, elle est juste pauvre : elle donne une étiquette, pas une matière. Reformule-la pour obtenir du vécu.">
          <Node title="Les quatre questions de cadrage (à la place de « tu fais quoi ? »)">
            <Say>« Qu'est-ce qui t'occupe le plus en ce moment ? »</Say>
            <Say>« T'es d'ici ou t'as atterri ici ? »</Say>
            <Say>« C'était quoi ton truc, avant ? Genre gamin, tu voulais faire quoi ? »</Say>
            <Say>« Comment t'as fini par faire ça ? »</Say>
            <Why>Chacune demande une histoire plutôt qu'une donnée. Une histoire contient toujours trois ou quatre fils à tirer ; une donnée n'en contient aucun.</Why>
          </Node>

          <Node title="Comment tirer un fil (le geste central de tout l'arbre)">
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Dans chaque réponse, il y a un mot qui n'était pas obligatoire. C'est <strong className="font-semibold">lui</strong> que tu attrapes. Elle ne l'a pas mis là par hasard.</p>
            <Say>— « J'ai bougé à Paris il y a deux ans, un peu sur un coup de tête. » → tu attrapes « coup de tête », pas « Paris ».</Say>
            <Say alt>— « Je suis infirmière, mais bon. » → tu attrapes « mais bon ».</Say>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Les trois relances universelles, dans l'ordre de puissance :</p>
            <Say>« Comment ça, un coup de tête ? »</Say>
            <Say>« Attends, raconte. »</Say>
            <Say>« Et ça t'a fait quoi ? »</Say>
            <Why>« Et ça t'a fait quoi » est la question qui fait passer un palier sans avoir l'air d'y toucher : elle demande du ressenti sur un fait déjà donné. Personne ne la refuse.</Why>
          </Node>

          <Node title="Elle donne trois mots et s'arrête" tag="Diagnostic" tagTone="risk">
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Trois causes, trois réponses différentes. Ne les confonds pas.</p>
            <Fork items={[
              { tone: "neutral", sig: "Timide / mise en route lente", move: "Donne d'abord toi. Raconte 20 secondes de ton truc, elle se calquera. La réciprocité se déclenche par l'exemple, pas par la question." },
              { tone: "warm", sig: "Sujet mal choisi", move: "Change complètement d'angle. Passe du factuel à l'opinion : « t'es plutôt du genre à tout planifier ou à improviser ? »" },
              { tone: "cold", sig: "Pas envie", move: "Aucune question, aucune relance, réponses sous 5 mots deux fois de suite. Sors. Élégamment." },
            ]} />
          </Node>

          <Gate
            items={[
              "Elle t'a posé au moins une question sans que tu l'aies sollicitée ?",
              "Elle a donné une info que tu n'avais pas demandée ?",
              "Le corps est orienté vers toi, ou toujours de biais ?",
            ]}
            verdict="Deux « oui » sur trois → monte au P2. Zéro ou un → reste au P1 et change de sujet, ou clôture proprement."
          />
        </Palier>

        {/* P2 */}
        <Palier depth="P2" title="Colorer" goal="Objectif : sortir du factuel, entrer dans le goût"
          intro="Ici tu quittes ce qu'elle fait pour ce qu'elle aime, déteste, choisit. C'est le palier où une conversation devient reconnaissable, où elle cesse d'être interchangeable. La plupart des gens n'y arrivent jamais et se demandent pourquoi leurs conversations sont plates.">
          <Node title="Les questions de goût et de caractère">
            <Say>« C'est quoi le dernier truc qui t'a vraiment scotchée ? Film, bouquin, n'importe. »</Say>
            <Say>« Sur quoi t'es intraitable ? Genre le truc où tu ne négocies pas. »</Say>
            <Say>« Y a un truc que tout le monde adore et que tu détestes ? »</Say>
            <Say>« Tu ferais quoi d'un mardi complètement libre, sans obligation ? »</Say>
            <Say>« C'est quoi ton avis impopulaire ? »</Say>
            <Why>Les questions négatives (ce que tu détestes, sur quoi tu ne cèdes pas) marchent souvent mieux que les positives : plus faciles à répondre honnêtement, plus révélatrices.</Why>
          </Node>

          <Node title="Le désaccord léger" tag="Accélérateur" tagTone="risk">
            <Why>Être toujours d'accord est fade et légèrement suspect. Un désaccord sur un sujet sans enjeu prouve que tu as une opinion à toi, et transforme l'interview en échange.</Why>
            <Say>« Non mais alors là je suis pas du tout d'accord. Défends-toi. »</Say>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed"><strong className="font-semibold">Trois conditions :</strong> sujet sans importance (nourriture, films, habitudes), ton clairement joueur, et tu concèdes un point au bout de deux échanges. Le but est le ping-pong, pas la victoire.</p>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">À ne jamais faire au P2 : désaccord sur ses valeurs, son métier, sa famille, son corps. Ça ce n'est pas de la tension, c'est de l'agression.</p>
          </Node>

          <Node title="Le callback — l'outil le plus sous-estimé">
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Elle a dit quelque chose au P1. Dix minutes plus tard, tu y reviens.</p>
            <Say>« Attends, tu m'as dit tout à l'heure que t'avais bougé sur un coup de tête. Ça, faut que tu m'expliques. »</Say>
            <Why>Un callback prouve deux choses d'un coup : que tu écoutais vraiment, et que vous avez maintenant une histoire commune. C'est le mécanisme par lequel une conversation se met à ressembler à une relation.</Why>
          </Node>

          <Node title="Elle bloque sur un sujet précis">
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Elle répond court, change d'angle, ou son ton se ferme sur une zone (le travail, l'ex, la famille, la ville d'origine).</p>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed"><strong className="font-semibold">Ne creuse pas. Nomme et libère :</strong></p>
            <Say>« Ok, sujet à éviter, noté. On passe. »</Say>
            <Why>Contre-intuitif : reculer volontairement sur un sujet sensible augmente la confiance bien plus qu'une écoute insistante. Tu viens de prouver qu'elle contrôle la profondeur. Très souvent elle y revient d'elle-même plus tard — et là, elle raconte tout.</Why>
          </Node>

          <Gate
            items={[
              "Vous avez ri au moins une fois, ensemble ?",
              "Elle a exprimé une opinion tranchée, pas juste une info ?",
              "Il existe une référence interne — une blague, un mot, un truc à vous ?",
            ]}
            verdict="Si oui : le P3 est ouvert. Sinon reste au P2, il est loin d'être épuisé. Beaucoup de très bonnes relations vivent entièrement ici."
          />
        </Palier>

        {/* P3 */}
        <Palier depth="P3" title="Approfondir" goal="Objectif : la vulnérabilité réciproque"
          intro="Le palier de l'intimité. Il obéit à une loi stricte : tu donnes en premier, et à la même profondeur que ce que tu demandes. Poser une question profonde sans t'être exposé toi-même, ce n'est pas de la proximité, c'est un interrogatoire. Et ça se sent immédiatement.">
          <Node title="La mécanique : donner avant de demander" tag="Loi" tagTone="deep">
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Structure en trois temps, toujours la même :</p>
            <Say>1. Tu poses ta pièce : « Moi ce qui m'a le plus changé, c'est le moment où j'ai arrêté de… »</Say>
            <Say>2. Tu ouvres : « …et toi, y a eu un moment comme ça ? »</Say>
            <Say>3. Tu écoutes sans réparer, sans conseiller, sans comparer.</Say>
            <Why>L'escalade de la vulnérabilité monte par paliers symétriques, et chacun s'expose avant de demander à l'autre de le faire. Retire la symétrie et le protocole ne marche plus.</Why>
          </Node>

          <Node title="Les questions du P3">
            <Say>« C'est quoi la décision qui a le plus changé ta vie ? »</Say>
            <Say>« De quoi t'es le plus fière, et que personne ne remarque ? »</Say>
            <Say>« Tu penses souvent à quoi quand t'es seule ? »</Say>
            <Say>« Y a un truc que t'as arrêté de faire et qui te manque ? »</Say>
            <Say>« De quoi t'as peur, en vrai ? »</Say>
            <Why>Ordre indicatif : les premières sont accessibles, la dernière ne se pose presque jamais avant plusieurs heures cumulées. Si tu doutes, elle est trop tôt.</Why>
          </Node>

          <Node title="Elle te confie quelque chose de lourd">
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed"><strong className="font-semibold">Ce que tu ne fais pas :</strong> proposer une solution, minimiser (« ça va aller »), raconter pire (« moi c'est arrivé aussi mais… »), changer de sujet par malaise.</p>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed"><strong className="font-semibold">Ce que tu fais :</strong></p>
            <Say>« Merci de me dire ça. »</Say>
            <Say>« C'était comment, à ce moment-là ? »</Say>
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Puis tu laisses le silence. Il est très inconfortable — c'est normal, tiens-le quand même.</p>
            <Why>Le réflexe de réparer coupe le récit. Le réflexe de comparer le confisque. La seule bonne réponse à une confidence est une preuve d'écoute, pas une contribution.</Why>
          </Node>

          <Node title="Ça devient trop lourd, trop vite" tag="Régulation" tagTone="risk">
            <p className="text-[15px] text-stone-700 my-2.5 leading-relaxed">Une conversation profonde a besoin de respirer. Après un moment fort, redescends volontairement d'un palier pendant dix minutes : une blague, une anecdote légère, un retour à un sujet du P2.</p>
            <Why>Les meilleures conversations font des vagues — elles montent, redescendent, remontent plus haut. Celles qui restent en haut sans redescendre finissent en épuisement, et souvent en gêne le lendemain.</Why>
          </Node>
        </Palier>

        {/* Sortir */}
        <Palier depth="FIN" title="Sortir" goal="Objectif : partir au bon moment"
          intro="La compétence la plus rare. Quasiment personne ne rate une rencontre au début — on les rate en s'accrochant à la fin. Pars pendant que c'est bon, jamais après.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            <MiniCard title="La sortie haute">Juste après un rire : « Faut que j'y aille. J'ai passé un très bon moment — on refait ça, donne-moi ton numéro. » Direct, assumé, sans justification.</MiniCard>
            <MiniCard title="La sortie neutre">Ça n'a pas décollé mais c'était correct : « Content de t'avoir rencontrée, bonne soirée. » Point. Ne demande rien. Zéro dégât, zéro regret.</MiniCard>
            <MiniCard title="Le contexte récurrent">Salle, cours, boulot : ne demande rien la première fois. « À la prochaine » suffit. La familiarité fait 80 % du travail à ta place.</MiniCard>
            <MiniCard title="Le refus">« Pas de souci, bonne soirée » — souriant, immédiat, sans négocier. Ta réaction à un non est le seul moment où tout le monde te juge vraiment.</MiniCard>
          </div>
        </Palier>

        {/* Socle */}
        <Palier depth="SOCLE" title="Ce qui tient tout l'arbre" goal="À relire avant de sortir" intro="">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            <MiniCard title="Le ratio 60/40">Elle parle 60 %, toi 40. En dessous de 30 % pour toi, tu fais passer un entretien. Au-dessus de 50 %, un monologue.</MiniCard>
            <MiniCard title="Deux relances, puis on change">Un sujet qui ne prend pas après deux tentatives est mort. Ce n'est pas toi, c'est le sujet. Change d'angle sans commenter.</MiniCard>
            <MiniCard title="Les questions ouvertes payent">« Comment », « qu'est-ce qui », « raconte » ouvrent. « Est-ce que » et « tu aimes ? » ferment. Reformule avant de parler.</MiniCard>
            <MiniCard title="Le silence est un outil">Deux secondes de silence après sa réponse et elle complète souvent avec la partie intéressante. La combler est un réflexe d'anxiété.</MiniCard>
            <MiniCard title="La sortie visible">Toujours laisser une porte : « je te laisse hein ». Paradoxalement, c'est ce qui donne envie de rester.</MiniCard>
            <MiniCard title="Le volume bat la technique">Vingt échanges ratés de 30 secondes t'apprendront plus que ce guide. L'arbre te dit où aller — il ne remplace pas d'y aller.</MiniCard>
          </div>
        </Palier>

        <p className="mt-12 pt-5 border-t-2 border-stone-900 text-[12px] text-stone-400">
          Arbre de conversation — P0 ouvrir · P1 cadrer · P2 colorer · P3 approfondir · sortir. Un palier à la fois.
        </p>
      </div>
    </div>
  );
}
