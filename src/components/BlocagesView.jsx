import React, { useState } from "react";
import { ArrowLeft, ChevronDown, ArrowRight, Compass, BookOpen, Target, Check } from "lucide-react";

const DONE_KEY = "smoltolk.blocages.v1";
function loadDone() { try { return JSON.parse(localStorage.getItem(DONE_KEY)) || {}; } catch { return {}; } }
function saveDone(d) { try { localStorage.setItem(DONE_KEY, JSON.stringify(d)); } catch { /* ignore */ } }

const TONES = [
  { pill: "bg-indigo-100 text-indigo-700", rail: "border-indigo-300" },
  { pill: "bg-emerald-100 text-emerald-700", rail: "border-emerald-300" },
  { pill: "bg-amber-100 text-amber-700", rail: "border-amber-300" },
  { pill: "bg-rose-100 text-rose-700", rail: "border-rose-300" },
  { pill: "bg-sky-100 text-sky-700", rail: "border-sky-300" },
  { pill: "bg-violet-100 text-violet-700", rail: "border-violet-300" },
];

function Line({ label, color, children }) {
  return (
    <p className="text-sm leading-relaxed mb-2.5">
      <span className={`font-semibold ${color}`}>{label} </span>
      <span className="text-stone-600">{children}</span>
    </p>
  );
}

function Blocage({ index, objection, tag, croyance, realite, action, defi, cta, done, onToggle }) {
  const [open, setOpen] = useState(false);
  const t = TONES[index % TONES.length];
  return (
    <div className={`rounded-2xl border border-stone-200 border-l-4 ${t.rail} bg-white overflow-hidden`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-4 flex items-start gap-3"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full mb-2 ${t.pill}`}>{tag}</span>
          <p className="font-serif-guide text-[17px] text-stone-900 leading-snug">« {objection} »</p>
        </div>
        <ChevronDown size={18} strokeWidth={2} className={`text-stone-400 mt-1 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 animate-expand-in">
          <Line label="La croyance :" color="text-stone-400">{croyance}</Line>
          <Line label="La réalité :" color="text-emerald-600">{realite}</Line>
          <Line label="On bosse dessus :" color="text-indigo-600">{action}</Line>
          {cta && (
            <button
              onClick={cta.onClick}
              className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-stone-800 hover:gap-2.5 transition-all"
            >
              {cta.icon}
              {cta.label}
              <ArrowRight size={15} strokeWidth={2} />
            </button>
          )}

          {defi && (
            <div className={`mt-3.5 rounded-xl border p-3.5 transition-colors ${done ? "border-emerald-200 bg-emerald-50/60" : "border-dashed border-stone-300 bg-stone-50"}`}>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${done ? "text-emerald-600" : "text-orange-600"}`}>
                  <Target size={12} strokeWidth={2.5} /> Ton mini-défi
                </span>
                <button
                  onClick={onToggle}
                  className={`inline-flex items-center gap-1 text-[12px] font-semibold px-2.5 py-1 rounded-full transition-colors active:scale-95 ${done ? "bg-emerald-600 text-white" : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300"}`}
                >
                  {done ? <><Check size={12} strokeWidth={3} /> Relevé</> : "Je le relève"}
                </button>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">{defi}</p>
              {done && <p className="text-[12px] text-emerald-600 mt-2 font-medium">Bien joué. Un cran de moins entre toi et les autres. 💪</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function BlocagesView({ onBack, onStart, onOpenGuide }) {
  const start = (icon, label) => ({ icon, label, onClick: onStart });
  const guide = (palier, icon, label) => ({ icon, label, onClick: () => onOpenGuide(palier) });

  const [done, setDone] = useState(loadDone);
  const toggle = (tag) => {
    const n = { ...done };
    if (n[tag]) delete n[tag]; else n[tag] = Date.now();
    setDone(n); saveDone(n);
  };
  const relevés = Object.keys(done).length;

  const BLOCAGES = [
    {
      objection: "Je ne sais jamais quoi dire",
      tag: "Le vide",
      defi: "Aujourd'hui, une seule fois : commente le contexte à voix haute près de quelqu'un — la file, la météo, un détail. Une phrase, pas plus.",
      croyance: "il faudrait arriver avec quelque chose d'intéressant, de prêt, dans la tête.",
      realite: "une bonne ouverture ne parle presque jamais de toi. Elle commente ce que vous vivez tous les deux, là, maintenant — la file, la météo, un détail. Le « quoi dire » est dans le décor, pas dans ton cerveau.",
      action: "appuie-toi sur le contexte au lieu de te creuser la tête. Et si le blanc te terrifie, pars avec une phrase déjà prête.",
      cta: start(<Compass size={15} strokeWidth={2} />, "Trouver une accroche prête"),
    },
    {
      objection: "Je n'arrive pas à rester présent, je pars dans ma tête",
      tag: "La présence",
      defi: "Dans ta prochaine conversation, attrape UN mot pas obligatoire dans ce que dit l'autre, et relance dessus. Un seul suffit.",
      croyance: "être présent serait un trait qu'on a ou qu'on n'a pas.",
      realite: "si tu pars dans ta tête, c'est que ton attention est sur toi (« est-ce que je suis nul, est-ce que ça se voit »). La présence, c'est juste déplacer cette attention sur l'autre. Ce n'est pas un don, c'est une direction de regard.",
      action: "donne-toi une tâche concrète : repérer, dans chaque réponse, le mot qui n'était pas obligatoire — et rebondir dessus. Impossible de ruminer quand tu chasses un fil.",
      cta: guide("p1", <BookOpen size={15} strokeWidth={2} />, "Le geste central : tirer un fil"),
    },
    {
      objection: "J'ai peur du rejet",
      tag: "Le rejet",
      defi: "Provoque-toi un petit non sans gravité : demande l'heure ou un conseil à un inconnu, juste pour voir que ça ne fait rien.",
      croyance: "un rejet serait une catastrophe, une preuve de ta valeur.",
      realite: "un « non » n'est pas dangereux — c'est une info, souvent sur le moment de l'autre, pas sur toi. Et le seul truc que les gens jugent vraiment, ce n'est pas ton approche, c'est ta réaction quand ça ne prend pas.",
      action: "prépare la sortie autant que l'entrée : un « pas de souci, bonne journée » souriant et immédiat te rend safe, et te fait progresser à chaque fois.",
      cta: guide("sortir", <BookOpen size={15} strokeWidth={2} />, "Partir proprement, même sur un non"),
    },
    {
      objection: "Je suis timide, c'est ma personnalité",
      tag: "La timidité",
      defi: "Trois « bonjour » à des inconnus aujourd'hui. Trois, pas un de plus. Tu les comptes.",
      croyance: "la timidité serait une condamnation à vie, gravée dans le caractère.",
      realite: "la timidité est un état, pas une identité. Plein d'introvertis sont excellents en conversation — parce que c'est une compétence, pas un tempérament. Ça se travaille par répétition, pas par transformation.",
      action: "vise le volume, pas la perfection : des micro-échanges de 30 secondes, souvent. C'est la quantité qui recâble, pas la théorie.",
    },
    {
      objection: "Je ne suis pas assez intéressant",
      tag: "L'intérêt",
      defi: "Au prochain échange, pose deux questions d'affilée sans parler de toi entre les deux.",
      croyance: "il faudrait être brillant, drôle, avoir des choses à raconter.",
      realite: "tu n'as pas besoin d'être intéressant. Tu dois être intéressé. Les gens adorent parler d'eux ; ton job n'est pas de performer, c'est de poser de bonnes questions et d'écouter. Vise 60 % elle, 40 % toi.",
      action: "remplace « qu'est-ce que je vais dire de bien » par « qu'est-ce que je peux lui demander ». Une bonne question bat une bonne punchline.",
      cta: guide("socle", <BookOpen size={15} strokeWidth={2} />, "Les principes qui tiennent tout"),
    },
    {
      objection: "Les gens n'ont pas envie qu'on les dérange",
      tag: "Déranger",
      defi: "Aborde quelqu'un et termine toi-même par une porte de sortie (« je te laisse, hein ! »). Le but : t'entraîner à partir léger.",
      croyance: "aborder quelqu'un serait forcément une intrusion mal vue.",
      realite: "la plupart des gens sont soulagés que quelqu'un brise la glace — tout le monde y pense, presque personne n'ose. Ce qui dérange, ce n'est pas d'aborder, c'est de coincer l'autre sans porte de sortie.",
      action: "laisse toujours une sortie évidente (« je te laisse, hein »). Paradoxalement, c'est ça qui met à l'aise et donne envie de rester.",
    },
    {
      objection: "Je rougis, je bafouille, et ça se voit",
      tag: "Ça se voit",
      defi: "La prochaine fois que tu stresses, nomme-le à voix haute : « je stresse un peu, là ». Et observe que ça retombe.",
      croyance: "montrer sa nervosité te décrédibilise.",
      realite: "une nervosité visible se lit comme de la sincérité, pas comme une faiblesse — surtout si tu la nommes (« je stresse un peu là, mais je voulais venir te dire bonjour »). Et personne ne te regarde d'aussi près que toi : on surestime énormément à quel point ça se remarque.",
      action: "arrête de cacher, assume à voix haute. Nommer ton trac le désamorce et le rend attachant.",
    },
    {
      objection: "Dès qu'il y a un blanc, je panique",
      tag: "Le silence",
      defi: "Après la prochaine réponse de quelqu'un, tiens deux secondes de silence avant de répondre. Compte dans ta tête.",
      croyance: "un silence serait un échec, un vide à combler d'urgence.",
      realite: "le silence est un outil, pas une alarme. Deux secondes après sa réponse, et souvent l'autre complète tout seul avec la partie intéressante. Combler à tout prix, c'est un réflexe d'anxiété — pas une nécessité.",
      action: "entraîne-toi à tenir deux secondes. Et si le blanc dure, tu peux toujours revenir au contexte que vous partagez.",
    },
    {
      objection: "Je n'ai pas le physique ni le charisme",
      tag: "Le charisme",
      defi: "Ta prochaine discussion, une seule mission : que l'autre se sente écouté. Tu regardes, tu rebondis, tu ne répares pas.",
      croyance: "le charisme serait une question de gueule, inné.",
      realite: "le charisme, c'est un comportement, pas un visage : de l'attention pleine, de la chaleur, de la présence. Trois choses 100 % apprenables. Les gens retiennent comment tu les as fait se sentir, pas ta mâchoire.",
      action: "travaille l'écoute et la chaleur (regarder, rebondir, ne pas réparer). C'est ça, le « charisme » — et ça se muscle.",
    },
    {
      objection: "De toute façon ça ne mène à rien",
      tag: "À quoi bon",
      defi: "Aujourd'hui, vise 3 tentatives — peu importe le résultat. Tu comptes les reps, pas les succès.",
      croyance: "si une conversation ne « donne » rien, elle est ratée.",
      realite: "le but n'est pas le résultat d'une fois, c'est la répétition. Chaque échange de 30 secondes est un rep de muscle social. La vraie connexion arrive parfois — mais c'est la pratique qui la rend possible, pas la chance.",
      action: "change de score : compte les tentatives, pas les succès. Vingt petites approches t'apprendront plus que n'importe quel conseil.",
    },
    {
      objection: "Je ne sais pas comment finir la conversation",
      tag: "Finir",
      defi: "Sors d'une conversation en premier, sur une bonne note : « faut que j'y aille, c'était cool ». Pars pendant que c'est bon.",
      croyance: "il faudrait attendre le « bon » moment, sinon on est mal poli.",
      realite: "partir au bon moment est une compétence rare, et personne ne rate une rencontre au début — on la rate en s'accrochant à la fin. Le mieux, c'est de partir pendant que c'est bon, pas après.",
      action: "pars sur un haut : « faut que j'y aille, j'ai passé un super moment ». Une sortie nette te rend mémorable et safe.",
      cta: guide("sortir", <BookOpen size={15} strokeWidth={2} />, "L'art de sortir au bon moment"),
    },
    {
      objection: "Je suis épuisé rien qu'à l'idée de faire la conversation",
      tag: "L'énergie",
      defi: "Un seul micro-échange aujourd'hui : bonjour + une question + un sourire. 90 secondes max, puis tu files.",
      croyance: "il faudrait tenir une longue conversation, sinon ça ne compte pas.",
      realite: "tu n'as pas à courir un marathon. Trois micro-échanges de 90 secondes, sur trois moments, valent bien mieux qu'une conversation de 40 minutes forcée — pour toi comme pour l'autre.",
      action: "autorise-toi le format court. Un « bonjour » + une question + un sourire, c'est déjà une victoire complète.",
    },
  ];

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors"
          aria-label="Retour"
        >
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Oui mais moi…</span>
      </header>

      <div className="px-5 pb-16 pt-6 max-w-[720px] mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-500 mb-3">Débloquer</p>
        <h1 className="font-serif-guide text-stone-900 font-semibold leading-[1.05] tracking-tight text-[clamp(28px,7vw,40px)] mb-3">
          « Oui, mais moi je n'y arrive pas parce que… »
        </h1>
        <p className="text-[15px] text-stone-500 leading-relaxed max-w-[54ch] mb-7">
          Ces phrases qu'on se répète pour justifier qu'on n'aborde pas. Presque toutes reposent sur une fausse croyance — et dans tous les cas, ça se travaille. Ouvre celle qui te parle.
        </p>

        {relevés > 0 && (
          <p className="mb-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
            <Target size={12} strokeWidth={2.5} /> {relevés} mini-défi{relevés > 1 ? "s" : ""} relevé{relevés > 1 ? "s" : ""} sur {BLOCAGES.length}
          </p>
        )}
        <div className="flex flex-col gap-3">
          {BLOCAGES.map((b, i) => <Blocage key={i} index={i} {...b} done={!!done[b.tag]} onToggle={() => toggle(b.tag)} />)}
        </div>

        <div className="mt-8 rounded-2xl bg-stone-900 text-stone-100 px-5 py-5">
          <p className="font-serif-guide text-lg mb-1">Le fond de l'affaire</p>
          <p className="text-sm text-stone-300 leading-relaxed">
            Parler aux gens n'est pas un talent qu'on a ou qu'on n'a pas. C'est une compétence — comme conduire ou cuisiner. Ça se rate, ça s'apprend, ça se muscle. Tu n'as pas à devenir quelqu'un d'autre : tu as juste à t'entraîner, une petite fois à la fois.
          </p>
          <button
            onClick={onStart}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-stone-900 text-sm font-semibold active:scale-95 transition-transform"
          >
            <Compass size={15} strokeWidth={2} /> Commencer maintenant
          </button>
        </div>
      </div>
    </div>
  );
}
