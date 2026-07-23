// Favoris persistants (localStorage, sans compte). Un favori = une accroche
// enregistrée avec son contexte. Store minimal compatible useSyncExternalStore.

import { useSyncExternalStore } from "react";

const KEY = "smoltolk.favorites.v1";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

let cache = load();
const listeners = new Set();

function persist(next) {
  cache = next;
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* quota / mode privé */ }
  listeners.forEach((l) => l());
}

export function subscribe(l) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function getFavorites() { return cache; }
export function isFavorite(accroche) { return cache.some((f) => f.accroche === accroche); }

export function toggleFavorite(fav) {
  const i = cache.findIndex((f) => f.accroche === fav.accroche);
  if (i >= 0) persist(cache.filter((_, j) => j !== i));
  else persist([{ ...fav, savedAt: Date.now() }, ...cache]);
}

export function removeFavorite(accroche) {
  persist(cache.filter((f) => f.accroche !== accroche));
}

// Synchronisation entre onglets
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === KEY) { cache = load(); listeners.forEach((l) => l()); }
  });
}

// Hooks
export function useFavorites() { return useSyncExternalStore(subscribe, getFavorites); }
export function useFavoriteCount() { return useSyncExternalStore(subscribe, () => cache.length); }
export function useIsFavorite(accroche) {
  return useSyncExternalStore(subscribe, () => cache.some((f) => f.accroche === accroche));
}
