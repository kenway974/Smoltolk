import React from "react";
import {
  ArrowLeft, Droplets, Brain, HeartPulse, Smile, Repeat,
  Sparkles, Zap, Wind, ShieldCheck, Users, Activity, Heart, Compass,
} from "lucide-react";

/* ── Palettes par système ── */
const SYS = {
  chimie:  { label: "La chimie",      tile: "bg-rose-100 text-rose-600",     rail: "border-l-rose-300",    kicker: "text-rose-500" },
  cerveau: { label: "Le cerveau",     tile: "bg-violet-100 text-violet-600", rail: "border-l-violet-300",  kicker: "text-violet-500" },
  corps:   { label: "Le corps",       tile: "bg-emerald-100 text-emerald-600", rail: "border-l-emerald-300", kicker: "text-emerald-500" },
  humeur:  { label: "L'humeur",       tile: "bg-amber-100 text-amber-600",   rail: "border-l-amber-300",   kicker: "text-amber-500" },
  cercle:  { label: "Le cercle",      tile: "bg-blue-100 text-blue-600",     rail: "border-l-blue-300",    kicker: "text-blue-500" },
};

function SectionHeader({ sys, icon, title, subtitle }) {
  const t = SYS[sys];
  return (
    <div className="flex items-start gap-3.5 mb-5">
      <span className={`flex items-center justify-center w-11 h-11 rounded-2xl flex-shrink-0 ${t.tile}`}>{icon}</span>
      <div className="min-w-0 pt-0.5">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${t.kicker} mb-1`}>{t.label}</p>
        <h2 className="font-serif-guide text-[24px] font-semibold text-stone-900 leading-tight tracking-tight">{title}</h2>
        <p className="text-sm text-stone-500 leading-snug mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

function Tip({ sys, icon, title, children }) {
  const t = SYS[sys];
  return (
    <div className={`rounded-2xl border border-stone-200 border-l-4 ${t.rail} bg-white p-4`}>
      <div className="flex items-start gap-3">
        <span className={`flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 ${t.tile}`}>{icon}</span>
        <div className="min-w-0 pt-0.5">
          <h3 className="font-serif-guide text-[17px] font-semibold text-stone-900 leading-snug mb-1">{title}</h3>
          <p className="text-sm text-stone-600 leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function BeneficesView({ onBack, onStart, onOpenSortie }) {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Ce que ça te fait</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        {/* Hero */}
        <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 mb-5"><HeartPulse size={28} strokeWidth={2} /></span>
        <h1 className="font-serif-guide text-[30px] font-semibold text-stone-900 leading-[1.12] tracking-tight">
          Parler, ce n'est pas rien.
        </h1>
        <p className="mt-3 text-[15px] text-stone-600 leading-relaxed">
          Dès que tu abordes quelqu'un, une cascade concrète se déclenche dans ton corps et ton cerveau — hormones, circuits, système nerveux. Et l'essentiel te fait du bien. Voici ce que montre la recherche : pas des promesses, des mécanismes réels.
        </p>

        {/* La chimie */}
        <section className="mt-10">
          <SectionHeader sys="chimie" icon={<Droplets size={20} strokeWidth={2} />} title="Ce que ça libère" subtitle="Un échange, c'est un vrai cocktail chimique — et la plupart des ingrédients apaisent ou motivent." />
          <div className="flex flex-col gap-3">
            <Tip sys="chimie" icon={<Heart size={17} strokeWidth={2} />} title="Ocytocine — l'hormone du lien">
              Un regard, un rire partagé, un moment de connexion sincère libère de l'ocytocine : elle installe la confiance, apaise la vigilance et donne cette sensation chaude d'être « avec » quelqu'un. C'est l'antidote chimique de la méfiance.
            </Tip>
            <Tip sys="chimie" icon={<Zap size={17} strokeWidth={2} />} title="Dopamine — la motivation, le plaisir">
              Une conversation qui accroche, une nouveauté, le fait d'être reconnu : petit shot de dopamine. C'est pour ça qu'un bon échange te laisse « up » et te donne envie du suivant. Le cerveau récompense le lien.
            </Tip>
            <Tip sys="chimie" icon={<Smile size={17} strokeWidth={2} />} title="Endorphines — le rire, l'anti-stress">
              Rire ensemble libère des endorphines, ton antidouleur et anti-tension naturel. Et le rire partagé en produit bien plus que le rire seul : c'est le corps qui récompense le fait d'être en groupe.
            </Tip>
            <Tip sys="chimie" icon={<Wind size={17} strokeWidth={2} />} title="Cortisol — qui redescend">
              Un lien social sécurisant fait baisser le cortisol, l'hormone du stress. L'isolement, lui, le maintient élevé en continu. Une conversation chaleureuse, c'est littéralement une pause pour ton système de stress.
            </Tip>
          </div>
        </section>

        {/* Le cerveau */}
        <section className="mt-10">
          <SectionHeader sys="cerveau" icon={<Brain size={20} strokeWidth={2} />} title="Un entraînement mental complet" subtitle="La conversation est l'un des exercices cognitifs les plus riches qui soient." />
          <div className="flex flex-col gap-3">
            <Tip sys="cerveau" icon={<Sparkles size={17} strokeWidth={2} />} title="Ton cerveau tourne à plein">
              Écouter, comprendre, anticiper, choisir tes mots, lire le visage d'en face, t'ajuster — le tout en temps réel et en simultané. Aucun jeu de mémoire ne sollicite autant de zones à la fois qu'une vraie conversation.
            </Tip>
            <Tip sys="cerveau" icon={<Users size={17} strokeWidth={2} />} title="Ça muscle l'empathie">
              Deviner ce que l'autre pense et ressent — la « théorie de l'esprit » — se travaille comme un muscle. Plus tu échanges, plus tu lis vite et juste les gens. Cette lecture sociale s'affine par la pratique, pas par la théorie.
            </Tip>
            <Tip sys="cerveau" icon={<ShieldCheck size={17} strokeWidth={2} />} title="Une protection pour plus tard">
              Les personnes socialement actives présentent en moyenne un risque plus faible de déclin cognitif et de démence avec l'âge. Le lien social est l'un des facteurs protecteurs du cerveau les mieux documentés — au même titre que le sommeil ou le sport.
            </Tip>
          </div>
        </section>

        {/* Le corps */}
        <section className="mt-10">
          <SectionHeader sys="corps" icon={<HeartPulse size={20} strokeWidth={2} />} title="Ça se voit sur ta santé" subtitle="Le lien social n'est pas un luxe émotionnel : c'est un paramètre de santé mesurable." />
          <div className="flex flex-col gap-3">
            <Tip sys="corps" icon={<Activity size={17} strokeWidth={2} />} title="Ton système nerveux se pose">
              Un échange chaleureux active le système parasympathique — le « frein » apaisant du corps. Rythme cardiaque qui se pose, respiration qui s'ouvre, sensation de sécurité. Le contact humain calme, physiquement.
            </Tip>
            <Tip sys="corps" icon={<Heart size={17} strokeWidth={2} />} title="Un effet sur la longévité, énorme">
              C'est le plus frappant : les grandes méta-analyses portant sur des centaines de milliers de personnes montrent qu'un bon tissu social est associé à une survie nettement meilleure — un effet comparable à l'arrêt du tabac, et supérieur à l'exercice. L'isolement chronique est un facteur de risque à part entière.
            </Tip>
            <Tip sys="corps" icon={<ShieldCheck size={17} strokeWidth={2} />} title="Moins d'inflammation">
              L'isolement prolongé est associé à un niveau d'inflammation plus élevé dans l'organisme. Le lien social régulier, à l'inverse, tend à la modérer. Ton corps distingue « entouré » de « seul », et il le traduit jusque dans tes cellules.
            </Tip>
          </div>
        </section>

        {/* L'humeur */}
        <section className="mt-10">
          <SectionHeader sys="humeur" icon={<Smile size={20} strokeWidth={2} />} title="Même un tout petit échange" subtitle="Pas besoin d'un grand moment : les micro-interactions comptent, et on les sous-estime." />
          <div className="flex flex-col gap-3">
            <Tip sys="humeur" icon={<Sparkles size={17} strokeWidth={2} />} title="Le barista, le voisin, l'inconnu">
              Parler à des quasi-inconnus améliore l'humeur et le sentiment d'appartenance — même quand on est persuadé que ça ne changera rien. Les études sont très nettes : on sous-estime systématiquement à quel point ces petits échanges font du bien, aux deux personnes.
            </Tip>
            <Tip sys="humeur" icon={<Zap size={17} strokeWidth={2} />} title="Chaque tentative fissure la peur">
              Une petite interaction réussie nourrit l'estime de soi et grignote l'anxiété sociale. L'évitement fait l'inverse : il renforce la peur en lui donnant raison. Oser, même petit, c'est déjà un soin.
            </Tip>
            <Tip sys="humeur" icon={<Users size={17} strokeWidth={2} />} title="Le besoin d'exister aux yeux des autres">
              Être vu, entendu, compté : c'est un besoin humain fondamental, pas une faiblesse. Le combler régulièrement, même par petites touches, stabilise l'humeur mieux que presque tout le reste.
            </Tip>
          </div>
        </section>

        {/* Le cercle vertueux */}
        <section className="mt-10">
          <SectionHeader sys="cercle" icon={<Repeat size={20} strokeWidth={2} />} title="Et ça se cumule" subtitle="Le meilleur : chaque fois rend la fois d'après plus facile." />
          <div className="flex flex-col gap-3">
            <Tip sys="cercle" icon={<Brain size={17} strokeWidth={2} />} title="L'exposition recâble ton cerveau">
              La peur sociale baisse par la pratique, pas par la réflexion. À force de le faire, ton cerveau arrête de sonner l'alarme pour un truc qui, il l'apprend, n'est pas dangereux. C'est du recâblage, lent mais réel.
            </Tip>
            <Tip sys="cercle" icon={<Repeat size={17} strokeWidth={2} />} title="La spirale peut tourner dans le bon sens">
              Un échange positif donne envie du suivant ; l'humeur remonte, tu oses plus, ça marche mieux, ce qui te donne encore plus envie. La même boucle qui t'enferme quand tu évites peut te porter quand tu t'y remets.
            </Tip>
          </div>
        </section>

        {/* Clôture */}
        <div className="mt-10 rounded-2xl bg-stone-900 text-stone-100 px-5 py-5">
          <p className="font-serif-guide text-[18px] leading-relaxed">
            Tu n'as même pas besoin d'y croire pour que ça marche. Ton corps, lui, répond — que tu le veuilles ou non. Alors autant s'en servir.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {onStart && (
              <button onClick={onStart} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-stone-900 text-[14px] font-semibold active:scale-[0.98] transition-transform">
                <Compass size={15} strokeWidth={2.2} /> Trouver une accroche
              </button>
            )}
            {onOpenSortie && (
              <button onClick={onOpenSortie} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white text-[14px] font-semibold active:scale-[0.98] transition-transform">
                Mode sortie
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-[12px] text-stone-400 leading-relaxed text-center">
          Ce sont des tendances issues de la recherche, pas des garanties individuelles ni un avis médical. Mais la direction est solide, et constante d'une étude à l'autre.
        </p>
      </div>
    </div>
  );
}
