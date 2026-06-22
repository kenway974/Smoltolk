"use client";
import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <p style={{ fontSize: 48 }}>⚠️</p>
          <h2>Une erreur est survenue</h2>
          <button onClick={reset} style={{ padding: "8px 16px", background: "#2d6a4f", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>Réessayer</button>
        </div>
      </body>
    </html>
  );
}
