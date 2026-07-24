// Service worker Smoltolk — installation + hors-ligne.
// Stratégies : navigation & news = réseau d'abord (repli cache), assets = cache d'abord.

const VERSION = "smoltolk-v1";
const SHELL = [
  "/",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // on ne touche pas aux liens externes (sources d'actu)

  // Navigation (SPA) : réseau d'abord, repli sur l'app en cache → marche hors-ligne.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => { caches.open(VERSION).then((c) => c.put("/", res.clone())); return res; })
        .catch(() => caches.match("/", { ignoreSearch: true }))
    );
    return;
  }

  // Actu : réseau d'abord (fraîcheur), repli cache.
  if (url.pathname === "/news.json") {
    event.respondWith(
      fetch(request)
        .then((res) => { caches.open(VERSION).then((c) => c.put(request, res.clone())); return res; })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Reste (JS/CSS/images/polices) : cache d'abord, mise à jour en arrière-plan.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((res) => { if (res && res.ok) caches.open(VERSION).then((c) => c.put(request, res.clone())); return res; })
        .catch(() => cached);
      return cached || network;
    })
  );
});
