import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function LandingPage({ onStart }) {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen bg-slate-950 overflow-hidden px-5 py-10">

      {/* Animated blurred color orbs */}
      <div
        className="pointer-events-none absolute top-[-80px] left-[-60px] w-72 h-72 rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-[30%] right-[-80px] w-64 h-64 rounded-full blur-3xl opacity-25 animate-pulse"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", animationDelay: "1s" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-60px] left-[10%] w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)", animationDelay: "2s" }}
      />

      {/* Top spacer */}
      <div />

      {/* Center content */}
      <div className="relative flex flex-col items-center text-center gap-6 w-full max-w-sm">

        {/* App icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30"
          style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)" }}
        >
          <MessageCircle size={38} strokeWidth={1.75} className="text-white" />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <h1
            className="text-3xl font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Small Talk Universel
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Les bons mots pour chaque micro-situation du quotidien
          </p>
        </div>

        {/* Feature bullets */}
        <div
          className="w-full rounded-2xl border border-white/10 px-5 py-4 flex flex-col gap-3"
          style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
        >
          {[
            { emoji: "⚡", text: "Scripts adaptés à ton énergie du moment" },
            { emoji: "📍", text: "Contextualisés selon le lieu et le profil" },
            { emoji: "🔄", text: "Plusieurs variations pour chaque situation" },
          ].map(({ emoji, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-lg leading-none">{emoji}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={onStart}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-white text-base font-bold shadow-lg active:scale-95 transition-transform duration-150"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            boxShadow: "0 0 24px rgba(139,92,246,0.45), 0 4px 16px rgba(59,130,246,0.3)",
          }}
        >
          Commencer
          <ArrowRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Footer */}
      <p className="relative text-xs text-slate-600 text-center mt-4">
        100% gratuit · Aucun compte requis
      </p>
    </div>
  );
}
