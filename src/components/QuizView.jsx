import React, { useState } from "react";
import { ArrowLeft, Check, X, RotateCcw, Sparkles, HelpCircle } from "lucide-react";
import { MYTHES } from "../data/mythes";

/* Mélange une copie du tableau (Fisher-Yates). Appelé uniquement dans un
   handler / au montage via l'initialiseur d'état — jamais au chargement du module. */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Message de fin encourageant, selon le score. */
function finalMessage(score, total) {
  const ratio = total === 0 ? 0 : score / total;
  if (ratio === 1)
    return "Sans faute. Tu as l'œil pour démêler le vrai des fausses croyances — garde cette lucidité quand tu doutes en vrai.";
  if (ratio >= 0.7)
    return "Solide. Tu as déjà largement de quoi faire taire les petites voix qui exagèrent tes ratés.";
  if (ratio >= 0.4)
    return "Bien joué d'avoir essayé. L'important n'est pas le score, c'est que ces croyances pèsent moins une fois qu'on les a regardées en face.";
  return "Aucun souci : ces croyances sont tellement répandues qu'on les prend tous pour vraies. Les avoir vues de près, c'est déjà commencer à s'en libérer.";
}

export default function QuizView({ onBack }) {
  const [order, setOrder] = useState(() => shuffle(MYTHES));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null); // réponse de l'utilisateur : true = "mythe", false = "vrai"
  const [finished, setFinished] = useState(false);

  const total = order.length;
  const current = order[index];

  // L'utilisateur a-t-il raison ? current.mythe === answer
  const isCorrect = answer !== null && answer === current.mythe;

  function respond(saidMythe) {
    if (answer !== null) return; // déjà répondu
    setAnswer(saidMythe);
    if (saidMythe === current.mythe) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setAnswer(null);
    }
  }

  function restart() {
    setOrder(shuffle(MYTHES));
    setIndex(0);
    setScore(0);
    setAnswer(null);
    setFinished(false);
  }

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Vrai ou faux ?</span>
      </header>

      <div className="px-5 pb-24 pt-6 max-w-[720px] mx-auto">
        {finished ? (
          /* ── Carte finale ── */
          <div className="animate-card-enter">
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mb-5">
              <Sparkles size={28} strokeWidth={2} />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-500 mb-1">Terminé</p>
            <h1 className="font-serif-guide text-[30px] font-semibold text-stone-900 leading-[1.12] tracking-tight">
              {score} / {total} bonnes réponses
            </h1>
            <div className="mt-5 rounded-2xl bg-white border border-stone-200 p-5">
              <p className="text-[15px] text-stone-600 leading-relaxed">{finalMessage(score, total)}</p>
            </div>

            <button
              onClick={restart}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
            >
              <RotateCcw size={16} strokeWidth={2.2} /> Recommencer
            </button>
          </div>
        ) : (
          /* ── Carte question ── */
          <div>
            {/* Progression + score */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] font-semibold text-stone-400 tabular-nums">
                {index + 1} / {total}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-emerald-600 tabular-nums">
                <Check size={14} strokeWidth={2.4} /> {score}
              </span>
            </div>

            {/* Barre de progression */}
            <div className="h-1.5 w-full rounded-full bg-stone-200 overflow-hidden mb-6">
              <div
                className="h-full rounded-full bg-stone-900 transition-all duration-300"
                style={{ width: `${((index + (answer !== null ? 1 : 0)) / total) * 100}%` }}
              />
            </div>

            <div key={current.id} className="animate-card-enter">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-stone-900/5 text-stone-500 mb-5">
                <HelpCircle size={24} strokeWidth={2} />
              </span>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-stone-400 mb-3">
                Vrai, ou c'est un mythe ?
              </p>
              <h1 className="font-serif-guide text-[26px] font-semibold text-stone-900 leading-[1.2] tracking-tight">
                « {current.affirmation} »
              </h1>

              {answer === null ? (
                /* Boutons de réponse */
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => respond(false)}
                    className="flex flex-col items-center justify-center gap-1.5 px-4 py-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold active:scale-[0.97] transition-transform hover:bg-emerald-100"
                  >
                    <Check size={22} strokeWidth={2.2} />
                    <span className="text-[15px]">Vrai</span>
                  </button>
                  <button
                    onClick={() => respond(true)}
                    className="flex flex-col items-center justify-center gap-1.5 px-4 py-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 font-semibold active:scale-[0.97] transition-transform hover:bg-rose-100"
                  >
                    <X size={22} strokeWidth={2.2} />
                    <span className="text-[15px]">C'est un mythe</span>
                  </button>
                </div>
              ) : (
                /* Révélation */
                <div className="mt-8 animate-expand-in">
                  <div
                    className={`flex items-center gap-2.5 mb-4 ${
                      isCorrect ? "text-emerald-600" : "text-rose-600"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-9 h-9 rounded-xl ${
                        isCorrect ? "bg-emerald-100" : "bg-rose-100"
                      }`}
                    >
                      {isCorrect ? <Check size={19} strokeWidth={2.4} /> : <X size={19} strokeWidth={2.4} />}
                    </span>
                    <span className="text-[15px] font-semibold">
                      {isCorrect ? "Bien vu !" : "Raté — mais pas grave."}
                    </span>
                  </div>

                  <div
                    className={`rounded-2xl border border-l-4 bg-white p-4 ${
                      current.mythe ? "border-stone-200 border-l-rose-300" : "border-stone-200 border-l-emerald-300"
                    }`}
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-1.5 text-stone-400">
                      {current.mythe ? "C'est un mythe" : "C'est vrai"}
                    </p>
                    <p className="text-[15px] text-stone-600 leading-relaxed">{current.explication}</p>
                  </div>

                  <button
                    onClick={next}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold active:scale-[0.98] transition-transform"
                  >
                    {index + 1 >= total ? "Voir mon score" : "Suivant"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
