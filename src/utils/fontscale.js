// Taille de police : normal / grand / très grand. Appliquée via une classe
// sur <html> et des surcharges CSS ciblées (voir index.css). 100 % local.
import { useSyncExternalStore } from "react";

const KEY = "smoltolk.fontscale.v1"; // "normal" | "grand" | "xl"
const listeners = new Set();

export function getFontScale() {
  try { return localStorage.getItem(KEY) || "normal"; } catch { return "normal"; }
}
export function applyFontScale(v = getFontScale()) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("fs-grand", v === "grand");
  root.classList.toggle("fs-xl", v === "xl");
}
export function setFontScale(v) {
  try { localStorage.setItem(KEY, v); } catch { /* ignore */ }
  applyFontScale(v);
  listeners.forEach((l) => l());
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => { if (e.key === KEY) { applyFontScale(); listeners.forEach((l) => l()); } });
}

function subscribe(l) { listeners.add(l); return () => listeners.delete(l); }
export function useFontScale() { return useSyncExternalStore(subscribe, getFontScale, () => "normal"); }
