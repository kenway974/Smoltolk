import React, { useState, useMemo } from "react";
import {
  ArrowLeft, Plus, Flame, Trash2, X, Check, MapPin, TrendingUp,
  CalendarDays, Star, Sparkles, Award, ChevronDown, Trophy, Target,
  Minus, Download, Upload,
} from "lucide-react";
import {
  useJournal, addEntry, removeEntry,
  computeStats, computeWeekReview, computeConfidencePoints, computeBadges,
  RESULTATS, RESULTAT_BY_KEY,
  useWeeklyGoal, setWeeklyGoal, exportData, importData,
} from "../utils/journal";
import { INTENTIONS } from "../data/intentions";
import { SITUATIONS_DATA } from "../data/situations";

const LIEUX = [...new Set(SITUATIONS_DATA.map((s) => s.environnement))]
  .filter((e) => e !== "Partout")
  .sort();

function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return "à l'instant";
  const m = Math.floor(s / 60);
  if (m < 60) return `il y a ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `il y a ${h} h`;
  const j = Math.floor(h / 24);
  if (j === 1) return "hier";
  if (j < 7) return `il y a ${j} j`;
  return new Date(ts).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

// ---- Étoiles de ressenti ---------------------------------------------------
function Stars({ value, onChange, size = 22 }) {
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n === value ? null : n)}
          className="active:scale-90 transition-transform"
          aria-label={`${n} sur 5`}
        >
          <Star
            size={size}
            strokeWidth={2}
            className={n <= (value || 0) ? "fill-amber-400 text-amber-400" : "text-stone-300"}
          />
        </button>
      ))}
    </div>
  );
}

// ---- Courbe de confiance (sparkline SVG) -----------------------------------
function Sparkline({ points }) {
  if (points.length < 2) return null;
  const W = 100, H = 32, pad = 3;
  const xs = points.map((_, i) => pad + (i * (W - 2 * pad)) / (points.length - 1));
  const ys = points.map((p) => H - pad - ((p.value - 1) / 4) * (H - 2 * pad));
  const d = xs.map((x, i) => `${i ? "L" : "M"}${x.toFixed(1)} ${ys[i].toFixed(1)}`).join(" ");
  const area = `${d} L${xs[xs.length - 1].toFixed(1)} ${H} L${xs[0].toFixed(1)} ${H} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-9" preserveAspectRatio="none">
      <defs>
        <linearGradient id="confg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#confg)" />
      <path d={d} fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => (
        <circle key={i} cx={x} cy={ys[i]} r={i === xs.length - 1 ? 2.6 : 1.6} fill="#10b981" />
      ))}
    </svg>
  );
}

// ---- Puce sélectionnable ---------------------------------------------------
function Chip({ active, onClick, activeClass = "bg-stone-900 text-white border-stone-900", children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-[13px] font-medium border transition-colors active:scale-95 ${
        active ? activeClass : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
      }`}
    >
      {children}
    </button>
  );
}

// ---- Formulaire « J'ai osé » ----------------------------------------------
function AddForm({ onClose, initial = {} }) {
  const [lieu, setLieu] = useState(initial.lieu || "");
  const [avecQui, setAvecQui] = useState(initial.avecQui || "");
  const [intention, setIntention] = useState(initial.intention || null);
  const [resultat, setResultat] = useState(null);
  const [ressenti, setRessenti] = useState(null);
  const [note, setNote] = useState("");
  const [debrief, setDebrief] = useState(false);
  const [marche, setMarche] = useState("");
  const [prochaine, setProchaine] = useState("");

  const canSave = lieu.trim() || avecQui.trim() || resultat || ressenti;

  const save = () => {
    if (!canSave) return;
    addEntry({
      lieu: lieu.trim(),
      avecQui: avecQui.trim(),
      intention,
      resultat,
      ressenti,
      note: note.trim(),
      marche: marche.trim(),
      prochaine: prochaine.trim(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center bg-stone-900/40 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full sm:max-w-[480px] max-h-[92svh] overflow-y-auto bg-[#f5f3ef] rounded-t-3xl sm:rounded-3xl border border-stone-200 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#f5f3ef]/95 backdrop-blur-sm px-5 py-4 flex items-center justify-between border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-emerald-600 text-white"><Sparkles size={16} strokeWidth={2.5} /></span>
            <h2 className="text-[15px] font-semibold text-stone-900">J'ai osé</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-stone-400 hover:bg-stone-200/60 active:scale-90 transition-colors"><X size={18} /></button>
        </div>

        <div className="px-5 py-5 flex flex-col gap-5">
          {/* Lieu */}
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Où ?</label>
            <input
              list="journal-lieux"
              value={lieu}
              onChange={(e) => setLieu(e.target.value)}
              placeholder="Café, boulot, salle de sport…"
              className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-emerald-400"
            />
            <datalist id="journal-lieux">
              {LIEUX.map((l) => <option key={l} value={l} />)}
            </datalist>
          </div>

          {/* Avec qui */}
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Avec qui ?</label>
            <input
              value={avecQui}
              onChange={(e) => setAvecQui(e.target.value)}
              placeholder="Un inconnu, une collègue, le barista…"
              className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-emerald-400"
            />
          </div>

          {/* Intention */}
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Intention</label>
            <div className="flex flex-wrap gap-2">
              {INTENTIONS.map((i) => (
                <Chip key={i.key} active={intention === i.label} onClick={() => setIntention(intention === i.label ? null : i.label)} activeClass={i.activeColor}>
                  <span className="mr-1">{i.emoji}</span>{i.label}
                </Chip>
              ))}
            </div>
          </div>

          {/* Résultat */}
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Comment c'est allé ?</label>
            <div className="flex flex-wrap gap-2">
              {RESULTATS.map((r) => (
                <Chip key={r.key} active={resultat === r.key} onClick={() => setResultat(resultat === r.key ? null : r.key)} activeClass={r.active}>
                  <span className="mr-1">{r.emoji}</span>{r.label}
                </Chip>
              ))}
            </div>
          </div>

          {/* Ressenti */}
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Ton ressenti</label>
            <Stars value={ressenti} onChange={setRessenti} />
          </div>

          {/* Note */}
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Une note (optionnel)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              placeholder="Ce qui s'est passé, ce que tu retiens…"
              className="w-full resize-none rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-emerald-400"
            />
          </div>

          {/* Débrief guidé (optionnel) */}
          <div className="rounded-xl border border-dashed border-stone-300 bg-white/50 overflow-hidden">
            <button
              type="button"
              onClick={() => setDebrief((v) => !v)}
              className="w-full flex items-center justify-between px-3.5 py-3 text-left active:scale-[0.99] transition-transform"
            >
              <span className="text-[13px] font-semibold text-stone-700">🧭 Débrief guidé <span className="font-normal text-stone-400">— 30 secondes pour progresser</span></span>
              <ChevronDown size={16} strokeWidth={2.5} className={`text-stone-400 transition-transform ${debrief ? "rotate-180" : ""}`} />
            </button>
            {debrief && (
              <div className="px-3.5 pb-4 pt-1 flex flex-col gap-3.5 border-t border-dashed border-stone-200">
                <div>
                  <label className="block text-[12px] font-medium text-emerald-700 mb-1.5">✅ Qu'est-ce qui a marché ?</label>
                  <input value={marche} onChange={(e) => setMarche(e.target.value)} placeholder="Même un tout petit truc…" className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-emerald-400" />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-blue-700 mb-1.5">🎯 Qu'est-ce que tu tenterais la prochaine fois ?</label>
                  <input value={prochaine} onChange={(e) => setProchaine(e.target.value)} placeholder="Un seul ajustement, pas dix…" className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-blue-400" />
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">Pas de procès : on cherche un point d'appui et un petit réglage, jamais un coupable.</p>
              </div>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 bg-[#f5f3ef]/95 backdrop-blur-sm px-5 py-4 border-t border-stone-200 flex gap-3">
          <button onClick={onClose} className="px-4 py-2.5 rounded-xl text-[14px] font-medium text-stone-500 hover:bg-stone-200/60 transition-colors">Annuler</button>
          <button
            onClick={save}
            disabled={!canSave}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-emerald-600 enabled:hover:bg-emerald-700 disabled:opacity-40 transition-colors active:scale-[0.98]"
          >
            <Check size={16} strokeWidth={2.5} /> Consigner
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- Bloc statistique ------------------------------------------------------
function Stat({ icon: Icon, value, label, tint }) {
  return (
    <div className="flex-1 rounded-2xl border border-stone-200 bg-white p-3.5 text-center">
      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-1.5 ${tint}`}><Icon size={16} strokeWidth={2.2} /></span>
      <p className="text-[22px] font-serif-guide font-semibold text-stone-900 leading-none">{value}</p>
      <p className="mt-1 text-[11px] text-stone-400 leading-tight">{label}</p>
    </div>
  );
}

// ---- Une entrée du journal -------------------------------------------------
function EntryRow({ e }) {
  const r = e.resultat ? RESULTAT_BY_KEY[e.resultat] : null;
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
          {e.lieu && <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-stone-800"><MapPin size={12} strokeWidth={2} className="text-stone-400" />{e.lieu}</span>}
          {e.avecQui && <span className="text-[13px] text-stone-500">· {e.avecQui}</span>}
        </div>
        <button
          onClick={() => removeEntry(e.id)}
          className="p-1.5 -mr-1 -mt-1 rounded-lg text-stone-300 hover:text-rose-500 hover:bg-rose-50 transition-colors active:scale-90 flex-shrink-0"
          title="Supprimer"
        >
          <Trash2 size={14} strokeWidth={2} />
        </button>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        {r && <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium border ${r.tint}`}>{r.emoji} {r.label}</span>}
        {e.intention && <span className="text-[11px] text-stone-400">{e.intention}</span>}
        {typeof e.ressenti === "number" && (
          <span className="inline-flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={11} strokeWidth={2} className={n <= e.ressenti ? "fill-amber-400 text-amber-400" : "text-stone-200"} />)}
          </span>
        )}
      </div>

      {e.note && <p className="mt-2 text-[13px] text-stone-500 leading-relaxed italic">« {e.note} »</p>}
      {(e.marche || e.prochaine) && (
        <div className="mt-2.5 flex flex-col gap-1.5">
          {e.marche && <p className="text-[12px] text-emerald-700 leading-snug"><span className="font-semibold">✅ A marché :</span> {e.marche}</p>}
          {e.prochaine && <p className="text-[12px] text-blue-700 leading-snug"><span className="font-semibold">🎯 Prochaine fois :</span> {e.prochaine}</p>}
        </div>
      )}
      <p className="mt-2 text-[11px] text-stone-300">{timeAgo(e.at)}</p>
    </div>
  );
}

export default function JournalView({ onBack, onStart, onOpenMissions, prefill = null }) {
  const entries = useJournal();
  const goal = useWeeklyGoal();
  const [adding, setAdding] = useState(!!prefill);
  const [showAllBadges, setShowAllBadges] = useState(false);
  const [ioMsg, setIoMsg] = useState(null);

  const stats = useMemo(() => computeStats(entries), [entries]);
  const review = useMemo(() => computeWeekReview(entries), [entries]);
  const points = useMemo(() => computeConfidencePoints(entries), [entries]);
  const badges = useMemo(() => computeBadges(entries), [entries]);

  const goalPct = Math.min(100, Math.round((stats.thisWeekCount / goal) * 100));
  const goalReached = stats.thisWeekCount >= goal;

  const doExport = () => {
    try {
      const blob = new Blob([exportData()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `smoltolk-cahier-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove();
      URL.revokeObjectURL(url);
    } catch { setIoMsg("Export impossible."); }
  };

  const doImport = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const res = importData(reader.result);
      setIoMsg(res.ok ? `Import réussi — ${res.added} entrée${res.added > 1 ? "s" : ""} ajoutée${res.added > 1 ? "s" : ""}.` : res.error);
      setTimeout(() => setIoMsg(null), 3500);
    };
    reader.readAsText(file);
  };

  const earned = badges.filter((b) => b.done);
  const nextBadges = badges.filter((b) => !b.done);
  const shownBadges = showAllBadges ? badges : [...earned, ...nextBadges].slice(0, 4);

  const empty = entries.length === 0;

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900 flex-1">Mon cahier de bord</span>
        {stats.currentStreak > 0 && (
          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1">
            <Flame size={13} strokeWidth={2.5} className="fill-orange-400 text-orange-500" /> {stats.currentStreak} j
          </span>
        )}
        {onOpenMissions && (
          <button onClick={onOpenMissions} className="inline-flex items-center gap-1 text-[12px] font-semibold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1 hover:bg-amber-100 active:scale-95 transition-colors">
            <Trophy size={13} strokeWidth={2.5} /> Défis
          </button>
        )}
      </header>

      <div className="px-5 pb-28 pt-5 max-w-[720px] mx-auto">
        {empty ? (
          <div className="flex flex-col items-center text-center py-16">
            <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mb-5"><Sparkles size={28} strokeWidth={1.8} /></span>
            <h2 className="font-serif-guide text-[22px] font-semibold text-stone-900">Ton cahier de bord</h2>
            <p className="mt-2 text-sm text-stone-500 max-w-[38ch] leading-relaxed">
              À chaque fois que tu oses aborder quelqu'un, note-le ici. Pas pour juger le résultat — juste pour voir que tu t'y mets. C'est le volume qui progresse, pas la perfection.
            </p>
            <p className="mt-3 text-[12px] text-stone-400 max-w-[36ch]">Tout reste sur ton appareil. Rien n'est partagé, personne ne voit.</p>
            <button onClick={() => setAdding(true)} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white text-[15px] font-semibold hover:bg-emerald-700 active:scale-[0.98] transition-colors">
              <Plus size={18} strokeWidth={2.5} /> Ma première fois
            </button>
            {onStart && (
              <button onClick={onStart} className="mt-3 text-[13px] font-medium text-stone-500 hover:text-stone-800 transition-colors">
                Pas encore ? Trouve d'abord une accroche →
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="flex gap-2.5">
              <Stat icon={Sparkles} value={stats.total} label={stats.total > 1 ? "tentatives" : "tentative"} tint="bg-emerald-100 text-emerald-600" />
              <Stat icon={Flame} value={stats.currentStreak} label="jours d'affilée" tint="bg-orange-100 text-orange-600" />
              <Stat icon={CalendarDays} value={stats.thisWeekCount} label="cette semaine" tint="bg-blue-100 text-blue-600" />
              <Stat icon={Star} value={stats.avgRessenti ? stats.avgRessenti.toFixed(1) : "—"} label="ressenti moyen" tint="bg-amber-100 text-amber-600" />
            </div>

            {/* Objectif de la semaine */}
            <div className={`mt-4 rounded-2xl border p-4 ${goalReached ? "border-emerald-200 bg-emerald-50/60" : "border-stone-200 bg-white"}`}>
              <div className="flex items-center justify-between mb-2.5">
                <span className={`inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide ${goalReached ? "text-emerald-600" : "text-stone-500"}`}>
                  <Target size={13} strokeWidth={2.5} /> Objectif de la semaine
                </span>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setWeeklyGoal(goal - 1)} className="w-7 h-7 rounded-lg border border-stone-200 bg-white flex items-center justify-center text-stone-500 hover:bg-stone-50 active:scale-90 transition-colors" aria-label="Moins"><Minus size={13} strokeWidth={2.5} /></button>
                  <span className="w-6 text-center text-[15px] font-bold text-stone-900">{goal}</span>
                  <button onClick={() => setWeeklyGoal(goal + 1)} className="w-7 h-7 rounded-lg border border-stone-200 bg-white flex items-center justify-center text-stone-500 hover:bg-stone-50 active:scale-90 transition-colors" aria-label="Plus"><Plus size={13} strokeWidth={2.5} /></button>
                </div>
              </div>
              <div className="h-2.5 rounded-full bg-stone-100 overflow-hidden">
                <div className={`h-full rounded-full transition-all duration-500 ${goalReached ? "bg-emerald-500" : "bg-blue-500"}`} style={{ width: `${goalPct}%` }} />
              </div>
              <p className="mt-2 text-[13px] text-stone-500">
                {goalReached
                  ? <span className="text-emerald-600 font-semibold">Objectif atteint cette semaine 🎉 — tout ce qui vient en plus est du bonus.</span>
                  : <><b className="text-stone-800">{stats.thisWeekCount}</b> / {goal} cette semaine — encore <b className="text-stone-800">{goal - stats.thisWeekCount}</b> pour y être.</>}
              </p>
            </div>

            {/* Courbe de confiance */}
            {points.length >= 2 && (
              <div className="mt-4 rounded-2xl border border-stone-200 bg-white p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-emerald-600"><TrendingUp size={13} strokeWidth={2.5} /> Ta confiance</span>
                  <span className="text-[11px] text-stone-400">{points.length} derniers jours notés</span>
                </div>
                <Sparkline points={points} />
                <p className="mt-1 text-[11px] text-stone-400">Moyenne de ton ressenti, jour après jour.</p>
              </div>
            )}

            {/* Rétro hebdo */}
            {review.count > 0 && (
              <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/60 p-4">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-blue-600 mb-2"><CalendarDays size={13} strokeWidth={2.5} /> Ta semaine</span>
                <p className="text-[14px] text-stone-700 leading-relaxed">
                  <b className="text-stone-900">{review.count} tentative{review.count > 1 ? "s" : ""}</b> sur {review.daysTouched} jour{review.daysTouched > 1 ? "s" : ""}
                  {review.lieux.length > 0 && <> — {review.lieux.slice(0, 3).join(", ")}{review.lieux.length > 3 ? "…" : ""}</>}.
                  {review.delta > 0 && <span className="text-emerald-600 font-semibold"> +{review.delta} vs la semaine passée 📈</span>}
                  {review.delta < 0 && <span className="text-stone-400"> {review.delta} vs la semaine passée</span>}
                </p>
              </div>
            )}

            {/* Badges */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-violet-600"><Award size={13} strokeWidth={2.5} /> Parcours</span>
                <span className="text-[11px] text-stone-400">{earned.length}/{badges.length}</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {shownBadges.map((b) => (
                  <div key={b.key} className={`rounded-2xl border p-3 flex items-start gap-2.5 ${b.done ? "border-violet-200 bg-violet-50/50" : "border-stone-200 bg-white"}`}>
                    <span className={`text-[22px] leading-none ${b.done ? "" : "grayscale opacity-40"}`}>{b.emoji}</span>
                    <div className="min-w-0">
                      <p className={`text-[13px] font-semibold leading-tight ${b.done ? "text-stone-900" : "text-stone-500"}`}>{b.label}</p>
                      <p className="text-[11px] text-stone-400 leading-tight mt-0.5">{b.done ? b.desc : b.progress}</p>
                    </div>
                  </div>
                ))}
              </div>
              {badges.length > 4 && (
                <button onClick={() => setShowAllBadges((v) => !v)} className="mt-2.5 w-full flex items-center justify-center gap-1 text-[12px] font-semibold text-stone-500 hover:text-stone-800 transition-colors">
                  {showAllBadges ? "Réduire" : `Voir les ${badges.length} badges`}
                  <ChevronDown size={13} strokeWidth={2.5} className={`transition-transform ${showAllBadges ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>

            {/* Timeline */}
            <div className="mt-6">
              <p className="text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2.5">Historique</p>
              <div className="flex flex-col gap-2.5">
                {entries.map((e) => <EntryRow key={e.id} e={e} />)}
              </div>
            </div>

            {/* Sauvegarde */}
            <div className="mt-8 pt-5 border-t border-stone-200">
              <p className="text-[11px] text-stone-400 mb-2.5 leading-snug">
                Ton cahier vit uniquement sur cet appareil. Exporte-le de temps en temps pour ne rien perdre (changement de téléphone, nettoyage du navigateur…).
              </p>
              <div className="flex gap-2.5">
                <button onClick={doExport} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[13px] font-semibold text-stone-600 hover:bg-stone-50 active:scale-[0.98] transition-colors">
                  <Download size={14} strokeWidth={2} /> Exporter
                </button>
                <label className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[13px] font-semibold text-stone-600 hover:bg-stone-50 active:scale-[0.98] transition-colors cursor-pointer">
                  <Upload size={14} strokeWidth={2} /> Importer
                  <input type="file" accept="application/json,.json" onChange={doImport} className="hidden" />
                </label>
              </div>
              {ioMsg && <p className="mt-2.5 text-[12px] font-medium text-stone-600">{ioMsg}</p>}
            </div>
          </>
        )}
      </div>

      {/* Bouton flottant « J'ai osé » */}
      {!empty && (
        <button
          onClick={() => setAdding(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white text-[15px] font-semibold shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 active:scale-95 transition-all"
        >
          <Plus size={19} strokeWidth={2.5} /> J'ai osé
        </button>
      )}

      {adding && <AddForm onClose={() => setAdding(false)} initial={prefill || {}} />}
    </div>
  );
}
