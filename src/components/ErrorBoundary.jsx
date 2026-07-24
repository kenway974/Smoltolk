import React from "react";

// Filet de sécurité : si un écran plante, on affiche un repli propre
// plutôt qu'un écran blanc. Un rechargement suffit presque toujours.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Pas de service externe : on log en console, rien ne quitte l'appareil.
    if (typeof console !== "undefined") console.error("Smoltolk — erreur écran :", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="min-h-svh flex flex-col items-center justify-center text-center px-6">
        <span className="text-4xl mb-3">😕</span>
        <h1 className="font-serif-guide text-[22px] font-semibold text-stone-900">Oups, un pépin</h1>
        <p className="mt-2 text-sm text-stone-500 max-w-[34ch] leading-relaxed">
          Un écran n'a pas voulu s'afficher. Tes données sont en sécurité sur ton appareil — un rechargement remet tout d'aplomb.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-5 py-3 rounded-2xl bg-stone-900 text-white text-[15px] font-semibold hover:bg-stone-800 active:scale-[0.98] transition-colors"
        >
          Recharger
        </button>
      </div>
    );
  }
}
