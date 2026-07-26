// Carnet de contacts personnel (localStorage, 100 % local, privé).
// L'idée : après une rencontre, noter un prénom + où + UN détail à rappeler
// la prochaine fois. C'est le carburant des « callbacks » du guide.

import { useSyncExternalStore } from "react";

const KEY = "smoltolk.contacts.v1";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

let cache = load();
const listeners = new Set();

function persist(next) {
  cache = [...next].sort((a, b) => b.at - a.at);
  try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch { /* quota */ }
  listeners.forEach((l) => l());
}

export function subscribe(l) { listeners.add(l); return () => listeners.delete(l); }
export function getContacts() { return cache; }

let seq = 0;
function makeId(at) { return `c-${at.toString(36)}-${(seq++).toString(36)}`; }

export function addContact(c) {
  const at = c.at ?? Date.now();
  persist([{ ...c, id: c.id || makeId(at), at }, ...cache]);
}
export function updateContact(id, patch) {
  persist(cache.map((c) => (c.id === id ? { ...c, ...patch } : c)));
}
export function removeContact(id) {
  persist(cache.filter((c) => c.id !== id));
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === KEY) { cache = load(); listeners.forEach((l) => l()); }
  });
}

export function useContacts() { return useSyncExternalStore(subscribe, getContacts); }
export function useContactCount() { return useSyncExternalStore(subscribe, () => cache.length); }
