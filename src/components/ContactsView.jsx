import React, { useState } from "react";
import { ArrowLeft, Plus, X, Check, Trash2, Pencil, MapPin, UserPlus, Lightbulb } from "lucide-react";
import { useContacts, addContact, updateContact, removeContact } from "../utils/contacts";

function timeAgo(ts) {
  const j = Math.floor((Date.now() - ts) / 86400000);
  if (j <= 0) return "aujourd'hui";
  if (j === 1) return "hier";
  if (j < 30) return `il y a ${j} j`;
  return new Date(ts).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

function Form({ contact, onClose }) {
  const [nom, setNom] = useState(contact?.nom || "");
  const [lieu, setLieu] = useState(contact?.lieu || "");
  const [detail, setDetail] = useState(contact?.detail || "");
  const canSave = nom.trim() || detail.trim();

  const save = () => {
    if (!canSave) return;
    const payload = { nom: nom.trim(), lieu: lieu.trim(), detail: detail.trim() };
    if (contact) updateContact(contact.id, payload); else addContact(payload);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center bg-stone-900/40 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full sm:max-w-[480px] bg-[#f5f3ef] rounded-t-3xl sm:rounded-3xl border border-stone-200 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="px-5 py-4 flex items-center justify-between border-b border-stone-200">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-blue-600 text-white"><UserPlus size={16} strokeWidth={2.5} /></span>
            <h2 className="text-[15px] font-semibold text-stone-900">{contact ? "Modifier" : "Nouvelle rencontre"}</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-stone-400 hover:bg-stone-200/60 active:scale-90 transition-colors"><X size={18} /></button>
        </div>
        <div className="px-5 py-5 flex flex-col gap-4">
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Prénom / qui</label>
            <input value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Léa, le voisin du 3e, le barista…" className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Où / quand</label>
            <input value={lieu} onChange={(e) => setLieu(e.target.value)} placeholder="Salle de sport, soirée de Sam…" className="w-full rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-wide text-stone-400 mb-2">Un détail à rappeler</label>
            <textarea value={detail} onChange={(e) => setDetail(e.target.value)} rows={2} placeholder="Part au Japon en mai · a un chien qui s'appelle Miso…" className="w-full resize-none rounded-xl border border-stone-200 bg-white px-3.5 py-2.5 text-[15px] text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-blue-400" />
            <p className="mt-1.5 text-[11px] text-stone-400">Le petit truc à ressortir la prochaine fois — ça fait toute la différence.</p>
          </div>
        </div>
        <div className="px-5 py-4 border-t border-stone-200 flex gap-3">
          <button onClick={onClose} className="px-4 py-2.5 rounded-xl text-[14px] font-medium text-stone-500 hover:bg-stone-200/60 transition-colors">Annuler</button>
          <button onClick={save} disabled={!canSave} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-blue-600 enabled:hover:bg-blue-700 disabled:opacity-40 transition-colors active:scale-[0.98]"><Check size={16} strokeWidth={2.5} /> Enregistrer</button>
        </div>
      </div>
    </div>
  );
}

export default function ContactsView({ onBack }) {
  const contacts = useContacts();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(null);

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 bg-[#f5f3ef]/95 backdrop-blur-sm border-b border-stone-200 px-5 py-3.5 flex items-center gap-3">
        <button onClick={onBack} className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-stone-200 text-stone-500 hover:bg-stone-50 active:scale-95 transition-colors" aria-label="Retour">
          <ArrowLeft size={17} strokeWidth={2} />
        </button>
        <span className="text-sm font-semibold text-stone-900 flex-1">Carnet de rencontres</span>
        <button onClick={() => setAdding(true)} className="inline-flex items-center gap-1 text-[12px] font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-1 hover:bg-blue-100 active:scale-95 transition-colors">
          <Plus size={13} strokeWidth={2.5} /> Ajouter
        </button>
      </header>

      <div className="px-5 pb-24 pt-5 max-w-[720px] mx-auto">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center text-center py-16">
            <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-5"><UserPlus size={28} strokeWidth={1.8} /></span>
            <h2 className="font-serif-guide text-[22px] font-semibold text-stone-900">Ton carnet de rencontres</h2>
            <p className="mt-2 text-sm text-stone-500 max-w-[36ch] leading-relaxed">Après avoir parlé à quelqu'un, note un prénom et un détail. La prochaine fois, tu le ressors — et là, ça devient un lien.</p>
            <p className="mt-3 text-[12px] text-stone-400">Privé, sur ton appareil. Personne d'autre ne le voit.</p>
            <button onClick={() => setAdding(true)} className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 active:scale-[0.98] transition-colors"><Plus size={18} strokeWidth={2.5} /> Première rencontre</button>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {contacts.map((c) => (
              <div key={c.id} className="rounded-2xl border border-stone-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-stone-900">{c.nom || "—"}</p>
                    {c.lieu && <p className="inline-flex items-center gap-1 text-[12px] text-stone-400 mt-0.5"><MapPin size={11} strokeWidth={2} />{c.lieu}</p>}
                  </div>
                  <div className="flex items-center gap-0.5 -mr-1 -mt-1 flex-shrink-0">
                    <button onClick={() => setEditing(c)} className="p-1.5 rounded-lg text-stone-300 hover:text-stone-700 hover:bg-stone-100 transition-colors active:scale-90"><Pencil size={14} strokeWidth={2} /></button>
                    <button onClick={() => removeContact(c.id)} className="p-1.5 rounded-lg text-stone-300 hover:text-rose-500 hover:bg-rose-50 transition-colors active:scale-90"><Trash2 size={14} strokeWidth={2} /></button>
                  </div>
                </div>
                {c.detail && (
                  <div className="mt-2 flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-100 px-3 py-2">
                    <Lightbulb size={14} strokeWidth={2} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-[13px] text-stone-700 leading-relaxed">{c.detail}</p>
                  </div>
                )}
                <p className="mt-2 text-[11px] text-stone-300">{timeAgo(c.at)}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {adding && <Form onClose={() => setAdding(false)} />}
      {editing && <Form contact={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}
