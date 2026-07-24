import React from "react";
import {
  ArrowLeft,
  Wind,
  Timer,
  Target,
  Anchor,
  DoorOpen,
  Eye,
  Ear,
  Pause,
  Scale,
  Radar,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  HeartHandshake,
  NotebookPen,
} from "lucide-react";

/* ── Palettes par moment ── */
const MOMENTS = {
  avant: {
    label: "Avant",
    tile: "bg-amber-100 text-amber-600",
    rail: "border-l-amber-300",
    kicker: "text-amber-500",
  },
  pendant: {
    label: "Pendant",
    tile: "bg-emerald-100 text-emerald-600",
    rail: "border-l-emerald-300",
    kicker: "text-emerald-500",
  },
  apres: {
    label: "Après",
    tile: "bg-violet-100 text-violet-600",
    rail: "border-l-violet-300",
    kicker: "text-violet-500",
  },
};

/* ── En-tête de section ── */
function SectionHeader({ tone, icon, title, subtitle }) {
  const t = MOMENTS[tone];
  return (
    <div className="flex items-start gap-3.5 mb-5">
      <span className={`flex items-center justify-center w-11 h-11 rounded-2xl flex-shrink-0 ${t.tile}`}>
        {icon}
      </span>
      <div className="min-w-0 pt-0.5">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${t.kicker} mb-1`}>
          {t.label}
        </p>
        <h2 className="font-serif-guide text-[24px] font-semibold text-stone-900 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-stone-500 leading-snug mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

/* ── Carte-conseil ── */
function Tip({ tone, icon, title, children }) {
  const t = MOMENTS[tone];
  return (
    <div className={`rounded-2xl border border-stone-200 border-l-4 ${t.rail} bg-white p-4`}>
      <div className="flex items-start gap-3">
        <span className={`flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 ${t.tile}`}>
          {icon}
        </span>
        <div className="min-w-0 pt-0.5">
          <h3 className="font-serif-guide text-[17px] font-semibold text-stone-900 leading-snug mb-1">
            {title}
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function OutilsView({ onBack }) {
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
        <span className="text-sm font-semibold text-stone-900">Boîte à outils</span>
      </header>

      <div className="px-5 pb-20 pt-6 max-w-[720px] mx-auto">
        <p className="text-[15px] text-stone-500 leading-relaxed max-w-[56ch] mb-9">
          Les zones d'ombre autour d'un échange, rangées en trois temps : avant de te lancer, pendant, et après — quoi qu'il arrive. À ouvrir quand tu bloques, pas à apprendre par cœur.
        </p>

        {/* ── AVANT ── */}
        <section className="mb-10">
          <SectionHeader
            tone="avant"
            icon={<Wind size={20} strokeWidth={2} />}
            title="Avant de te lancer"
            subtitle="Le trac est là. L'idée n'est pas de le faire taire, mais de te mettre en mouvement quand même."
          />
          <div className="flex flex-col gap-3">
            <Tip tone="avant" icon={<Wind size={17} strokeWidth={2} />} title="Le trac est normal, et même utile">
              Cœur qui bat, mains moites, souffle court : c'est de l'adrénaline, ton corps qui se prépare — pas un signal de danger. Même sensation qu'avant un truc excitant. Renomme-la : « je suis prêt », pas « je suis en train de flancher ».
            </Tip>
            <Tip tone="avant" icon={<Timer size={17} strokeWidth={2} />} title="La règle des 3 secondes">
              Dès que l'envie d'aborder apparaît, tu comptes trois secondes et tu y vas. Au-delà, ta tête a le temps d'inventer une bonne excuse. Le geste doit précéder la réflexion, sinon la réflexion gagne toujours.
            </Tip>
            <Tip tone="avant" icon={<Target size={17} strokeWidth={2} />} title="Baisse l'enjeu">
              L'objectif n'est pas que « ça marche ». L'objectif, c'est de l'avoir fait. Tu ne joues pas un résultat, tu comptes un rep. Vingt petites tentatives valent mieux qu'une réussite parfaite que tu attends depuis six mois.
            </Tip>
            <Tip tone="avant" icon={<Anchor size={17} strokeWidth={2} />} title="Un petit rituel physique">
              Avant d'y aller : une respiration lente, les épaules qui redescendent, le rythme qui ralentit. Le corps calme rassure la tête, pas l'inverse. Ça prend trois secondes et ça change ton point de départ.
            </Tip>
            <Tip tone="avant" icon={<DoorOpen size={17} strokeWidth={2} />} title="Repère une porte facile">
              Tu n'as rien à préparer d'intelligent. Cherche une observation que vous partagez, là, à portée de main : la file, la météo, un détail du lieu. La porte est dans le décor, pas dans ta tête.
            </Tip>
          </div>
        </section>

        {/* ── PENDANT ── */}
        <section className="mb-10">
          <SectionHeader
            tone="pendant"
            icon={<Eye size={20} strokeWidth={2} />}
            title="Pendant l'échange"
            subtitle="Rester présent et lire l'autre. Ton attention sur elle, pas sur le film qui tourne dans ta tête."
          />
          <div className="flex flex-col gap-3">
            <Tip tone="pendant" icon={<HeartHandshake size={17} strokeWidth={2} />} title="Le langage du corps, version simple">
              Corps orienté vers l'autre, épaules ouvertes, un contact visuel doux — présent, pas fixe : tu regardes, tu relâches, tu reviens. Et un sourire. Pas besoin de plus. Ton corps parle avant tes mots, autant qu'il dise la même chose.
            </Tip>
            <Tip tone="pendant" icon={<Ear size={17} strokeWidth={2} />} title="L'écoute active : tirer le fil">
              Dans chaque réponse, il y a un mot qui n'était pas obligatoire. Attrape-le et relance : « Comment ça ? », « Raconte », « Et ça t'a fait quoi ? ». Tu n'as pas à être intéressant, juste intéressé — et c'est impossible de ruminer quand tu chasses un fil.
            </Tip>
            <Tip tone="pendant" icon={<Pause size={17} strokeWidth={2} />} title="Le silence est un outil">
              Après sa réponse, tiens deux secondes avant de reprendre. Très souvent, l'autre complète tout seul — avec la partie la plus intéressante. Combler chaque blanc à toute vitesse, c'est un réflexe d'anxiété, pas une politesse.
            </Tip>
            <Tip tone="pendant" icon={<Scale size={17} strokeWidth={2} />} title="Le ratio 60/40">
              Vise que l'autre parle un peu plus que toi : environ 60 % elle, 40 % toi. En dessous de 30 % pour toi, tu fais passer un entretien. Au-dessus de 50 %, tu glisses vers le monologue. L'équilibre se sent plus qu'il ne se compte.
            </Tip>
            <Tip tone="pendant" icon={<Radar size={17} strokeWidth={2} />} title="Lire les signaux">
              Vert : corps orienté vers toi, questions qu'elle te renvoie, réponses qui débordent. Rouge : réponses sous cinq mots deux fois de suite, corps de biais, aucune relance. Le vert, tu montes d'un cran. Le rouge, c'est mort — tu sors élégamment.
            </Tip>
            <Tip tone="pendant" icon={<MessageCircle size={17} strokeWidth={2} />} title="Gérer un blanc ou un sujet qui ne prend pas">
              Un sujet qui ne décolle pas après deux relances est mort — ce n'est pas toi, c'est le sujet. Change d'angle sans le commenter (« bon, et sinon… »). Pas besoin d'annoncer que ça n'a pas marché : tu passes, simplement.
            </Tip>
          </div>
        </section>

        {/* ── APRÈS ── */}
        <section className="mb-10">
          <SectionHeader
            tone="apres"
            icon={<RotateCcw size={20} strokeWidth={2} />}
            title="Après, quoi qu'il arrive"
            subtitle="Débriefer sans te faire un procès. Ce qui s'est passé se range ; ce que tu es ne se juge pas là-dessus."
          />
          <div className="flex flex-col gap-3">
            <Tip tone="apres" icon={<HeartHandshake size={17} strokeWidth={2} />} title="Débrief bienveillant">
              Deux questions, pas une de plus : une chose qui a marché, une chose à tenter la prochaine fois. C'est tout. Pas de tribunal, pas de rejeu au ralenti de tes maladresses. Tu ajustes un geste, tu ne refais pas ton procès.
            </Tip>
            <Tip tone="apres" icon={<ShieldCheck size={17} strokeWidth={2} />} title="Encaisser un non, un froid">
              Le seul vrai test, ce n'est pas l'abord : c'est ta réaction quand ça ne prend pas. Un sourire, « bonne journée », tu pars. Fait proprement, un refus te rend safe. Et un « non » veut dire « je l'ai fait » — pas « j'ai échoué ».
            </Tip>
            <Tip tone="apres" icon={<RotateCcw size={17} strokeWidth={2} />} title="Couper le self-talk toxique">
              Repasser la scène en boucle, ce n'est pas de l'analyse, c'est de la rumination — ça n'apprend rien, ça abîme. Nomme le fait, jamais l'identité : « j'ai bafouillé » n'est pas « je suis nul ». Un geste se corrige ; une étiquette te colle à la peau.
            </Tip>
            <Tip tone="apres" icon={<NotebookPen size={17} strokeWidth={2} />} title="Consigne dans le cahier de bord">
              Note-le, même trois mots. Au jour le jour, le progrès est invisible et c'est frustrant. Sur la durée, la courbe monte — et tu ne la vois que si tu as gardé une trace. Le cahier existe pour te prouver ce que ta mémoire oublie.
            </Tip>
          </div>
        </section>

        <p className="font-serif-guide italic text-stone-400 text-[15px] leading-relaxed border-t border-stone-200 pt-6">
          Le volume bat la technique. L'outil te dit où regarder — il ne remplace pas d'y aller.
        </p>
      </div>
    </div>
  );
}
