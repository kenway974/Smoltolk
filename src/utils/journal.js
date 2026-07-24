// Cahier de bord personnel (localStorage, sans compte, 100 % local).
// Une entrée = une tentative sociale consignée : « j'ai osé ».
// Aucune donnée ne quitte l'appareil — pas de compte, pas de partage.
//
// Store minimal compatible useSyncExternalStore, calqué sur favorites.js.

import { useSyncExternalStore } from "react";
import { MISSIONS, MISSION_BY_ID } from "../data/missions";
import { BOSSES, BOSS_BY_ID } from "../data/bosses";

const KEY = "smoltolk.journal.v1";
const GOAL_KEY = "smoltolk.journal.goal.v1";      // objectif hebdo (nombre)
const MISSIONS_KEY = "smoltolk.journal.missions.v1"; // défis validés (map id -> timestamp)
const BOSSES_KEY = "smoltolk.journal.bosses.v1";     // boss validés (map id -> timestamp)

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

// ---- Boss (défis costauds, débloqués par niveau) --------------------------
function loadBosses() {
  try { return JSON.parse(localStorage.getItem(BOSSES_KEY)) || {}; }
  catch { return {}; }
}
let bossesCache = loadBosses();
export function getDoneBosses() { return bossesCache; }
export function isBossDone(id) { return !!bossesCache[id]; }
export function toggleBoss(id) {
  const next = { ...bossesCache };
  if (next[id]) delete next[id];
  else next[id] = Date.now();
  bossesCache = next;
  try { localStorage.setItem(BOSSES_KEY, JSON.stringify(next)); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

// ---- Export / import (sauvegarde locale) ----------------------------------
export function exportData() {
  return JSON.stringify(
    { version: 1, exportedAt: Date.now(), entries: cache, goal: goalCache, missions: missionsCache, bosses: bossesCache },
    null,
    2
  );
}

// ---- Export chiffré (optionnel, mot de passe) — AES-GCM + PBKDF2 ----------
function b64(buf) {
  let s = ""; const bytes = new Uint8Array(buf);
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}
function unb64(s) { return Uint8Array.from(atob(s), (c) => c.charCodeAt(0)); }

async function deriveKey(password, salt) {
  const km = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 150000, hash: "SHA-256" },
    km, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
  );
}

export async function exportEncrypted(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(exportData()));
  return JSON.stringify({ smoltolk: "encrypted", v: 1, salt: b64(salt), iv: b64(iv), data: b64(cipher) });
}

export function isEncryptedExport(text) {
  try { return JSON.parse(text)?.smoltolk === "encrypted"; } catch { return false; }
}

export async function decryptExport(text, password) {
  const obj = JSON.parse(text);
  const key = await deriveKey(password, unb64(obj.salt));
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(obj.iv) }, key, unb64(obj.data));
  return new TextDecoder().decode(plain);
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
  if (data.bosses && typeof data.bosses === "object") {
    bossesCache = { ...data.bosses, ...bossesCache };
    try { localStorage.setItem(BOSSES_KEY, JSON.stringify(bossesCache)); } catch { /* ignore */ }
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

// ---- XP & niveaux ---------------------------------------------------------
// L'XP vient de deux gestes : consigner une tentative (le cœur), et relever
// des défis. Un débrief rempli donne un petit bonus (on récompense la réflexion).
const XP_PER_ENTRY = 12;
const XP_DEBRIEF_BONUS = 8;

export const LEVELS = [
  { min: 0,    titre: "Premiers pas",       emoji: "🌱" },
  { min: 60,   titre: "Ça s'échauffe",       emoji: "🙂" },
  { min: 150,  titre: "En mouvement",        emoji: "🚶" },
  { min: 300,  titre: "Dans le bain",        emoji: "🌊" },
  { min: 500,  titre: "Prend le rythme",     emoji: "🎵" },
  { min: 800,  titre: "À l'aise",            emoji: "😎" },
  { min: 1200, titre: "Ancré",               emoji: "🧭" },
  { min: 1800, titre: "Chez toi partout",    emoji: "✨" },
];

export function computeXP(entries = cache, doneMissions = missionsCache, doneBosses = bossesCache) {
  let xp = 0;
  for (const e of entries) {
    xp += XP_PER_ENTRY;
    if (e.marche || e.prochaine) xp += XP_DEBRIEF_BONUS;
  }
  for (const id of Object.keys(doneMissions || {})) {
    const m = MISSION_BY_ID[id];
    if (m) xp += m.xp;
  }
  for (const id of Object.keys(doneBosses || {})) {
    const b = BOSS_BY_ID[id];
    if (b) xp += b.xp;
  }
  return xp;
}

export function computeLevel(xp = computeXP()) {
  let i = 0;
  for (let k = 0; k < LEVELS.length; k++) if (xp >= LEVELS[k].min) i = k;
  const cur = LEVELS[i];
  const next = LEVELS[i + 1] || null;
  const into = xp - cur.min;
  const span = next ? next.min - cur.min : null;
  const pct = next ? Math.min(100, Math.round((into / span) * 100)) : 100;
  return { level: i + 1, titre: cur.titre, emoji: cur.emoji, xp, into, span, next, pct, toNext: next ? next.min - xp : 0 };
}

// ---- Défi du jour ---------------------------------------------------------
// Choix déterministe par jour, biaisé vers les défis pas encore relevés les
// plus accessibles (les missions sont déjà rangées du plus facile au plus dur).
export function computeDailyMission(doneMissions = missionsCache, now = Date.now()) {
  const pool = MISSIONS.filter((m) => !doneMissions[m.id]);
  if (!pool.length) return null; // tout est relevé
  const window = pool.slice(0, Math.min(pool.length, 5));
  const idx = localDayIndex(now) % window.length;
  return window[idx];
}

// ---- Inactivité (relance douce, en app, sans notification) ----------------
export function daysSinceLastEntry(entries = cache, now = Date.now()) {
  if (!entries.length) return null;
  const last = Math.max(...entries.map((e) => e.at));
  return Math.floor((now - last) / 86400000);
}

// ---- Boss du jour (débloqué au niveau 3) ----------------------------------
export function computeDailyBoss(doneBosses = bossesCache, now = Date.now()) {
  const pool = BOSSES.filter((b) => !doneBosses[b.id]);
  if (!pool.length) return null;
  const idx = localDayIndex(now) % pool.length;
  return pool[idx];
}

// ---- Récompenses / déblocages par niveau ----------------------------------
// Ce qui s'ouvre en montant de niveau — donne un cap concret à la progression.
export const REWARDS = [
  { level: 2, key: "defi",     emoji: "🎯", titre: "Défi du jour",       desc: "Un défi choisi pour toi chaque jour." },
  { level: 3, key: "boss",     emoji: "🐉", titre: "Boss du jour",       desc: "Un défi costaud quand tu es prêt." },
  { level: 4, key: "victoires",emoji: "🏅", titre: "Mur des victoires",  desc: "Tes meilleurs moments réunis." },
  { level: 5, key: "confiance",emoji: "📈", titre: "Confiance affinée",  desc: "Assez de recul pour lire ta courbe." },
  { level: 6, key: "aise",     emoji: "😎", titre: "Le déclic",          desc: "Aborder devient un réflexe, plus une épreuve." },
];
export function rewardsState(level) {
  return REWARDS.map((r) => ({ ...r, unlocked: level >= r.level }));
}

// ---- Mur des victoires (entrées marquantes) -------------------------------
// Un « win » = ça a accroché, ou un ressenti à 4-5. Purement local, privé.
export function computeWins(entries = cache) {
  return entries.filter((e) => e.resultat === "top" || (typeof e.ressenti === "number" && e.ressenti >= 4));
}

// ---- Synchronisation entre onglets ----------------------------------------
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === KEY) cache = load();
    else if (e.key === GOAL_KEY) goalCache = loadGoal();
    else if (e.key === MISSIONS_KEY) missionsCache = loadMissions();
    else if (e.key === BOSSES_KEY) bossesCache = loadBosses();
    else return;
    listeners.forEach((l) => l());
  });
}

// ---- Hooks ----------------------------------------------------------------
export function useJournal() { return useSyncExternalStore(subscribe, getEntries); }
export function useJournalCount() { return useSyncExternalStore(subscribe, () => cache.length); }
export function useWeeklyGoal() { return useSyncExternalStore(subscribe, getWeeklyGoal); }
export function useDoneMissions() { return useSyncExternalStore(subscribe, getDoneMissions); }
export function useDoneBosses() { return useSyncExternalStore(subscribe, getDoneBosses); }
