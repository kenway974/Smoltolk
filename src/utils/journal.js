// Cahier de bord personnel (localStorage, sans compte, 100 % local).
// Une entrée = une tentative sociale consignée : « j'ai osé ».
// Aucune donnée ne quitte l'appareil — pas de compte, pas de partage.
//
// Store minimal compatible useSyncExternalStore, calqué sur favorites.js.

import { useSyncExternalStore } from "react";

const KEY = "smoltolk.journal.v1";
const GOAL_KEY = "smoltolk.journal.goal.v1";      // objectif hebdo (nombre)
const MISSIONS_KEY = "smoltolk.journal.missions.v1"; // défis validés (map id -> timestamp)

// ---- Vocabulaire des résultats (du plus positif au plus rude) -------------
export const RESULTATS = [
  { key: "top",    label: "Ça a accroché",   emoji: "✨", tint: "bg-emerald-100 text-emerald-700 border-emerald-200", active: "bg-emerald-600 text-white border-emerald-600" },
  { key: "ok",     label: "Correct",         emoji: "🙂", tint: "bg-sky-100 text-sky-700 border-sky-200",             active: "bg-sky-500 text-white border-sky-500" },
  { key: "court",  label: "Coupé court",     emoji: "😬", tint: "bg-amber-100 text-amber-700 border-amber-200",       active: "bg-amber-500 text-white border-amber-500" },
  { key: "ose",    label: "Osé, sans suite", emoji: "🫡", tint: "bg-violet-100 text-violet-700 border-violet-200",    active: "bg-violet-600 text-white border-violet-600" },
];
export const RESULTAT_BY_KEY = Object.fromEntries(RESULTATS.map((r) => [r.key, r]));

// ---- Persistance ----------------------------------------------------------
function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

let cache = load();
const listeners = new Set();

function persist(next) {
  // Toujours trié du plus récent au plus ancien.
  cache = [...next].sort((a, b) => b.at - a.at);
  try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch { /* quota / mode privé */ }
  listeners.forEach((l) => l());
}

export function subscribe(l) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function getEntries() { return cache; }

// id sans dépendance à Math.random (interdit ici) : timestamp + compteur.
let seq = 0;
function makeId(at) { return `${at.toString(36)}-${(seq++).toString(36)}`; }

export function addEntry(entry) {
  const at = entry.at ?? Date.now();
  persist([{ ...entry, id: entry.id || makeId(at), at }, ...cache]);
}

export function updateEntry(id, patch) {
  persist(cache.map((e) => (e.id === id ? { ...e, ...patch } : e)));
}

export function removeEntry(id) {
  persist(cache.filter((e) => e.id !== id));
}

// ---- Objectif hebdomadaire (nombre de tentatives visé) --------------------
function loadGoal() {
  try { const v = parseInt(localStorage.getItem(GOAL_KEY), 10); return Number.isFinite(v) ? v : 3; }
  catch { return 3; }
}
let goalCache = loadGoal();
export function getWeeklyGoal() { return goalCache; }
export function setWeeklyGoal(n) {
  goalCache = Math.max(1, Math.min(21, n | 0));
  try { localStorage.setItem(GOAL_KEY, String(goalCache)); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

// ---- Défis / missions validés ---------------------------------------------
function loadMissions() {
  try { return JSON.parse(localStorage.getItem(MISSIONS_KEY)) || {}; }
  catch { return {}; }
}
let missionsCache = loadMissions();
export function getDoneMissions() { return missionsCache; }
export function isMissionDone(id) { return !!missionsCache[id]; }
export function toggleMission(id) {
  const next = { ...missionsCache };
  if (next[id]) delete next[id];
  else next[id] = Date.now();
  missionsCache = next;
  try { localStorage.setItem(MISSIONS_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

// ---- Export / import (sauvegarde locale) ----------------------------------
export function exportData() {
  return JSON.stringify(
    { version: 1, exportedAt: Date.now(), entries: cache, goal: goalCache, missions: missionsCache },
    null,
    2
  );
}

// Fusionne un export sans écraser : entrées dédupliquées par id, missions unies.
export function importData(json) {
  let data;
  try { data = typeof json === "string" ? JSON.parse(json) : json; }
  catch { return { ok: false, error: "Fichier illisible." }; }
  if (!data || !Array.isArray(data.entries)) return { ok: false, error: "Format non reconnu." };

  const byId = new Map(cache.map((e) => [e.id, e]));
  let added = 0;
  for (const e of data.entries) {
    if (!e || !e.id) continue;
    if (!byId.has(e.id)) { byId.set(e.id, e); added++; }
  }
  persist([...byId.values()]);

  if (data.missions && typeof data.missions === "object") {
    missionsCache = { ...data.missions, ...missionsCache };
    try { localStorage.setItem(MISSIONS_KEY, JSON.stringify(missionsCache)); } catch { /* ignore */ }
  }
  if (Number.isFinite(data.goal)) setWeeklyGoal(data.goal);
  listeners.forEach((l) => l());
  return { ok: true, added, total: byId.size };
}

// ---- Dérivés (streaks, semaine, badges…) ----------------------------------

// Indice de jour absolu basé sur minuit local (pour comparer des jours consécutifs).
function localDayIndex(ts) {
  const d = new Date(ts);
  const midnight = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  return Math.round(midnight / 86400000);
}

function startOfWeek(ts) {
  const d = new Date(ts);
  const dow = (d.getDay() + 6) % 7; // lundi = 0
  const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - dow);
  return monday.getTime();
}

export function computeStats(entries = cache, now = Date.now()) {
  const total = entries.length;

  // Jours distincts avec au moins une entrée.
  const dayIdx = [...new Set(entries.map((e) => localDayIndex(e.at)))].sort((a, b) => b - a);

  // Streak courant : à partir d'aujourd'hui (ou hier), en remontant sans trou.
  const today = localDayIndex(now);
  let current = 0;
  if (dayIdx.length) {
    let cursor = dayIdx[0] === today || dayIdx[0] === today - 1 ? dayIdx[0] : null;
    if (cursor !== null) {
      current = 1;
      for (let i = 1; i < dayIdx.length; i++) {
        if (dayIdx[i] === cursor - 1) { current++; cursor = dayIdx[i]; }
        else break;
      }
    }
  }

  // Meilleur streak historique.
  let best = 0, run = 0, prev = null;
  for (const d of [...dayIdx].sort((a, b) => a - b)) {
    if (prev !== null && d === prev + 1) run++;
    else run = 1;
    best = Math.max(best, run);
    prev = d;
  }

  // Cette semaine (depuis lundi).
  const weekStart = startOfWeek(now);
  const thisWeek = entries.filter((e) => e.at >= weekStart);

  // Ressenti moyen global (entrées notées).
  const notes = entries.filter((e) => typeof e.ressenti === "number");
  const avgRessenti = notes.length
    ? notes.reduce((s, e) => s + e.ressenti, 0) / notes.length
    : null;

  return {
    total,
    daysActive: dayIdx.length,
    currentStreak: current,
    bestStreak: best,
    thisWeekCount: thisWeek.length,
    weekStart,
    avgRessenti,
  };
}

// Rétrospective de la semaine en cours.
export function computeWeekReview(entries = cache, now = Date.now()) {
  const weekStart = startOfWeek(now);
  const week = entries.filter((e) => e.at >= weekStart);
  const prevWeek = entries.filter((e) => e.at >= weekStart - 7 * 86400000 && e.at < weekStart);

  const byResultat = {};
  for (const e of week) if (e.resultat) byResultat[e.resultat] = (byResultat[e.resultat] || 0) + 1;

  const lieux = [...new Set(week.map((e) => e.lieu).filter(Boolean))];
  const notes = week.filter((e) => typeof e.ressenti === "number");
  const avg = notes.length ? notes.reduce((s, e) => s + e.ressenti, 0) / notes.length : null;
  const daysTouched = new Set(week.map((e) => localDayIndex(e.at))).size;

  return {
    count: week.length,
    prevCount: prevWeek.length,
    delta: week.length - prevWeek.length,
    byResultat,
    lieux,
    avg,
    daysTouched,
  };
}

// Courbe de confiance : ressenti moyen par jour (chronologique), N derniers points.
export function computeConfidencePoints(entries = cache, maxPoints = 14) {
  const byDay = new Map();
  for (const e of entries) {
    if (typeof e.ressenti !== "number") continue;
    const k = localDayIndex(e.at);
    const cur = byDay.get(k) || { sum: 0, n: 0, at: e.at };
    cur.sum += e.ressenti; cur.n += 1; cur.at = Math.max(cur.at, e.at);
    byDay.set(k, cur);
  }
  const points = [...byDay.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, v]) => ({ value: v.sum / v.n, at: v.at }));
  return points.slice(-maxPoints);
}

// ---- Badges de parcours ---------------------------------------------------
// Chaque badge : atteint ou non, avec une progression lisible.
export const BADGES = [
  { key: "first",   emoji: "🌱", label: "Premier pas",     desc: "Consigner une première tentative",        test: (s) => s.total >= 1,           goal: (s) => `${Math.min(s.total, 1)}/1` },
  { key: "five",    emoji: "🖐️", label: "Ça roule",         desc: "5 tentatives consignées",                 test: (s) => s.total >= 5,           goal: (s) => `${Math.min(s.total, 5)}/5` },
  { key: "twenty",  emoji: "💪", label: "Le volume",        desc: "20 tentatives — le volume paie",          test: (s) => s.total >= 20,          goal: (s) => `${Math.min(s.total, 20)}/20` },
  { key: "fifty",   emoji: "🔥", label: "Rodé",             desc: "50 tentatives consignées",                test: (s) => s.total >= 50,          goal: (s) => `${Math.min(s.total, 50)}/50` },
  { key: "streak3", emoji: "📆", label: "Trois jours",      desc: "3 jours d'affilée",                       test: (s) => s.bestStreak >= 3,      goal: (s) => `${Math.min(s.bestStreak, 3)}/3` },
  { key: "streak7", emoji: "🏆", label: "Une semaine",      desc: "7 jours d'affilée",                       test: (s) => s.bestStreak >= 7,      goal: (s) => `${Math.min(s.bestStreak, 7)}/7` },
  { key: "places",  emoji: "🧭", label: "Explorateur",      desc: "Oser dans 5 lieux différents",            test: (s) => s.distinctLieux >= 5,   goal: (s) => `${Math.min(s.distinctLieux, 5)}/5` },
  { key: "week",    emoji: "⭐", label: "Semaine active",   desc: "5 tentatives sur une même semaine",       test: (s) => s.thisWeekCount >= 5,   goal: (s) => `${Math.min(s.thisWeekCount, 5)}/5` },
];

export function computeBadges(entries = cache, now = Date.now()) {
  const stats = computeStats(entries, now);
  const distinctLieux = new Set(entries.map((e) => e.lieu).filter(Boolean)).size;
  const ctx = { ...stats, distinctLieux };
  return BADGES.map((b) => ({ ...b, done: b.test(ctx), progress: b.goal(ctx) }));
}

// ---- Synchronisation entre onglets ----------------------------------------
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === KEY) cache = load();
    else if (e.key === GOAL_KEY) goalCache = loadGoal();
    else if (e.key === MISSIONS_KEY) missionsCache = loadMissions();
    else return;
    listeners.forEach((l) => l());
  });
}

// ---- Hooks ----------------------------------------------------------------
export function useJournal() { return useSyncExternalStore(subscribe, getEntries); }
export function useJournalCount() { return useSyncExternalStore(subscribe, () => cache.length); }
export function useWeeklyGoal() { return useSyncExternalStore(subscribe, getWeeklyGoal); }
export function useDoneMissions() { return useSyncExternalStore(subscribe, getDoneMissions); }
