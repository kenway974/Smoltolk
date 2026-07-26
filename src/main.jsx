import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { applyTheme } from './utils/theme.js'
import { applyFontScale } from './utils/fontscale.js'

// Applique les préférences d'affichage avant le rendu (évite un flash).
applyTheme()
applyFontScale()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)

// PWA : enregistre le service worker (installation + hors-ligne) et propose
// un rechargement quand une nouvelle version est disponible.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing
        if (!nw) return
        nw.addEventListener('statechange', () => {
          // Nouvelle version installée alors qu'une ancienne contrôlait déjà la page.
          if (nw.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner()
          }
        })
      })
    }).catch(() => { /* pas bloquant */ })
  })
}

function showUpdateBanner() {
  if (document.getElementById('sk-update')) return
  const bar = document.createElement('div')
  bar.id = 'sk-update'
  bar.setAttribute('role', 'status')
  bar.style.cssText = [
    'position:fixed', 'left:50%', 'bottom:16px', 'transform:translateX(-50%)',
    'z-index:9999', 'display:flex', 'align-items:center', 'gap:12px',
    'max-width:92vw', 'padding:10px 12px 10px 16px', 'border-radius:16px',
    'background:#1c1917', 'color:#fff', 'box-shadow:0 8px 24px rgba(0,0,0,.25)',
    'font:500 14px/1.3 system-ui,-apple-system,sans-serif',
  ].join(';')

  const label = document.createElement('span')
  label.textContent = 'Nouvelle version disponible'

  const btn = document.createElement('button')
  btn.textContent = 'Recharger'
  btn.style.cssText = [
    'flex:none', 'border:0', 'cursor:pointer', 'border-radius:10px',
    'padding:7px 14px', 'background:#fff', 'color:#1c1917', 'font:600 14px system-ui',
  ].join(';')
  btn.addEventListener('click', () => window.location.reload())

  const close = document.createElement('button')
  close.setAttribute('aria-label', 'Fermer')
  close.textContent = '×'
  close.style.cssText = 'flex:none;border:0;background:transparent;color:#a8a29e;cursor:pointer;font-size:20px;line-height:1;padding:0 4px'
  close.addEventListener('click', () => bar.remove())

  bar.append(label, btn, close)
  document.body.appendChild(bar)
}
