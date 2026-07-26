import React from "react";
import { ArrowLeft, Sun, Moon, SunMoon, Type, ShieldCheck, Download, ChevronRight, User } from "lucide-react";
import { useTheme, setTheme } from "../utils/theme";
import { useFontScale, setFontScale } from "../utils/fontscale";
import { useProfile, setProfile, OBJECTIFS } from "../utils/profile";
import { exportData } from "../utils/journal";

function Segmented({ options, value, onChange }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white p-1 w-full">
      {options.map((o) => {
        const active = value === o.key;
        const Icon = o.icon;
        return (
          <button key={o.key} onClick={() => onChange(o.key)} className={`flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-full text-[12px] font-medium transition-colors ${active ? "bg-stone-900 text-white" : "text-stone-500 hover:text-stone-800"}`}>
            {Icon && <Icon size={13} strokeWidth={2} />} {o.label}
          </button>
        );
      })}
    </div>
  );
}

function Card({ children }) {
  return <div className="rounded-2xl border border-stone-200 bg-white p-4">{children}</div>;
}
function Label({ icon: Icon, children }) {
  return <p className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-3"><Icon size={13} strokeWidth={2.5} /> {children}</p>;
}

export default function ReglagesView({ onBack, onOpenConfidentialite }) {
  const theme = useTheme();
  const fontScale = useFontScale();
  const profile = useProfile();

  const doExport = () => {
    try {
      const blob = new Blob([exportData()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `smoltolk-cahier-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    } catch { /* ignore */ }
  };

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900">Réglages</span>
      </header>

      <div className="px-5 pb-24 pt-5 max-w-[720px] mx-auto flex flex-col gap-4">
        {/* Profil */}
        <Card>
          <Label icon={User}>Toi</Label>
          <input
            value={profile.prenom || ""}
            onChange={(e) => setProfile({ prenom: e.target.value })}
            placeholder="Ton prénom (optionnel)"
            className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-400 mb-3"
          />
          <p className="text-[12px] text-stone-400 mb-2">Ton objectif du moment</p>
          <div className="flex flex-col gap-2">
            {OBJECTIFS.map((o) => {
              const active = profile.objectif === o.key;
              return (
                <button key={o.key} onClick={() => setProfile({ objectif: active ? null : o.key })} className={`w-full text-left rounded-xl border p-3 flex items-center gap-3 transition-colors active:scale-[0.99] ${active ? "border-stone-900 bg-stone-900 text-white" : "border-stone-200 bg-white hover:border-stone-300"}`}>
                  <span className="text-[20px]">{o.emoji}</span>
                  <div className="min-w-0">
                    <p className={`text-[14px] font-semibold ${active ? "text-white" : "text-stone-900"}`}>{o.label}</p>
                    <p className={`text-[12px] leading-snug ${active ? "text-white/70" : "text-stone-500"}`}>{o.hint}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Thème */}
        <Card>
          <Label icon={theme === "dark" ? Moon : Sun}>Apparence</Label>
          <Segmented
            value={theme}
            onChange={setTheme}
            options={[{ key: "system", icon: SunMoon, label: "Auto" }, { key: "light", icon: Sun, label: "Clair" }, { key: "dark", icon: Moon, label: "Sombre" }]}
          />
        </Card>

        {/* Taille de police */}
        <Card>
          <Label icon={Type}>Taille du texte</Label>
          <Segmented
            value={fontScale}
            onChange={setFontScale}
            options={[{ key: "normal", label: "Normal" }, { key: "grand", label: "Grand" }, { key: "xl", label: "Très grand" }]}
          />
        </Card>

        {/* Données */}
        <Card>
          <Label icon={ShieldCheck}>Tes données</Label>
          <p className="text-[13px] text-stone-500 leading-relaxed mb-3">Tout reste sur cet appareil. Pense à exporter de temps en temps.</p>
          <button onClick={doExport} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[14px] font-semibold text-stone-600 hover:bg-stone-50 active:scale-[0.98] transition-colors mb-2">
            <Download size={15} strokeWidth={2} /> Exporter mon cahier
          </button>
          <button onClick={onOpenConfidentialite} className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-[14px] font-semibold text-stone-600 hover:bg-stone-50 active:scale-[0.98] transition-colors">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={15} strokeWidth={2} /> Confidentialité</span>
            <ChevronRight size={15} strokeWidth={2} className="text-stone-300" />
          </button>
        </Card>

        <p className="text-center text-[11px] text-stone-300 pt-2">Smoltolk · 100 % local, sans compte</p>
      </div>
    </div>
  );
}
