// Thème clair / sombre / auto (suit le système). 100 % local.
import { useSyncExternalStore } from "react";

const KEY = "smoltolk.theme"; // "system" | "light" | "dark"
const listeners = new Set();

export function getTheme() {
  try { return localStorage.getItem(KEY) || "system"; } catch { return "system"; }
}

function prefersDark() {
  return typeof window !== "undefined"
    && window.matchMedia
    && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function resolvedIsDark(t = getTheme()) {
  return t === "dark" || (t === "system" && prefersDark());
}

export function applyTheme(t = getTheme()) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", resolvedIsDark(t));
}

export function setTheme(t) {
  try { localStorage.setItem(KEY, t); } catch { /* ignore */ }
  applyTheme(t);
  listeners.forEach((l) => l());
}

// Réagit aux changements système quand on est en mode "auto".
if (typeof window !== "undefined" && window.matchMedia) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => { if (getTheme() === "system") { applyTheme(); listeners.forEach((l) => l()); } };
  mq.addEventListener ? mq.addEventListener("change", onChange) : mq.addListener(onChange);
  // Synchro entre onglets
  window.addEventListener("storage", (e) => { if (e.key === KEY) { applyTheme(); listeners.forEach((l) => l()); } });
}

function subscribe(l) { listeners.add(l); return () => listeners.delete(l); }
export function useTheme() { return useSyncExternalStore(subscribe, getTheme, () => "system"); }
