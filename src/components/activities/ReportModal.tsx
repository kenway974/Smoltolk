"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import type { ContentType, ReportReason } from "@/types";

interface ReportModalProps {
  open: boolean;
  onClose: () => void;
  contentType: ContentType;
  contentId: string;
}

const REASONS: { key: ReportReason; label: string }[] = [
  { key: "spam",          label: "Spam ou pub"                },
  { key: "inappropriate", label: "Contenu inapproprié"        },
  { key: "misleading",    label: "Informations trompeuses"    },
  { key: "other",         label: "Autre"                      },
];

export default function ReportModal({ open, onClose, contentType, contentId }: ReportModalProps) {
  const [reason, setReason] = useState<ReportReason | "">("");
  const [detail, setDetail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!reason) return;
    setLoading(true);
    await fetch("/api/reports", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contentType, contentId, reason, detail }) });
    setDone(true); setLoading(false);
  };

  return (
    <Modal open={open} onClose={onClose} title="Signaler un contenu">
      {done ? (
        <p className="text-sm text-green-600 py-4 text-center">Merci, votre signalement a été envoyé.</p>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            {REASONS.map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="reason" value={key} checked={reason === key} onChange={() => setReason(key)} className="accent-brand-teal" />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
          {reason === "other" && (
            <textarea value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Précisez…" rows={3} className="w-full rounded-xl border border-gray-200 dark:border-white/10 p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal" />
          )}
          <Button className="w-full" loading={loading} disabled={!reason} onClick={submit}>Envoyer le signalement</Button>
        </div>
      )}
    </Modal>
  );
}
