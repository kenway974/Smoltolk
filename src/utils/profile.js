// Profil local : prénom (optionnel) + objectif. Sert à personnaliser le ton
// et l'accueil. 100 % local, aucune donnée ne part.
import { useSyncExternalStore } from "react";

const KEY = "smoltolk.profile.v1";
const listeners = new Set();

export const OBJECTIFS = [
  { key: "reprendre", emoji: "🌱", label: "Reprendre doucement", hint: "Sortir de l'isolement, un petit pas à la fois." },
  { key: "timidite",  emoji: "🫣", label: "Vaincre ma timidité", hint: "Oser aborder sans que ça me terrifie." },
  { key: "reseauter", emoji: "🤝", label: "Élargir mon cercle",  hint: "Rencontrer plus de monde, me faire des liens." },
  { key: "papoter",   emoji: "☕", label: "Papoter plus, pour le plaisir", hint: "Juste rendre le quotidien plus vivant." },
  { key: "oser",      emoji: "✨", label: "Oser aborder",        hint: "Aller vers les gens qui m'attirent, avec tact." },
];
export const OBJECTIF_BY_KEY = Object.fromEntries(OBJECTIFS.map((o) => [o.key, o]));

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
  catch { return {}; }
}
let cache = load();

export function getProfile() { return cache; }
export function setProfile(patch) {
  cache = { ...cache, ...patch };
  try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => { if (e.key === KEY) { cache = load(); listeners.forEach((l) => l()); } });
}

function subscribe(l) { listeners.add(l); return () => listeners.delete(l); }
export function useProfile() { return useSyncExternalStore(subscribe, getProfile, () => ({})); }
