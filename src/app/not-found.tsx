import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <p style={{ fontSize: 80, margin: 0 }}>🌋</p>
          <h1 style={{ fontSize: 24, margin: 0 }}>Page introuvable</h1>
          <Link href="/fr" style={{ color: "#2d6a4f", textDecoration: "underline" }}>Retour à l'accueil</Link>
        </div>
      </body>
    </html>
  );
}
