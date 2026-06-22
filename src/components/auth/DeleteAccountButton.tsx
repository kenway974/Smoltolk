"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

export default function DeleteAccountButton() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "fr";

  const deleteAccount = async () => {
    setLoading(true);
    const supabase = createClient();
    const { data: { session } } = await supabase.auth.getSession();
    await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/delete-account`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${session?.access_token}`, "Content-Type": "application/json" },
    });
    await supabase.auth.signOut();
    router.push(`/${locale}`); router.refresh();
  };

  return (
    <>
      <Button variant="danger" size="sm" onClick={() => setOpen(true)}>Supprimer mon compte</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Supprimer mon compte">
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 rounded-xl p-3">
            <AlertTriangle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-400">Cette action est irréversible. Toutes vos données seront supprimées définitivement (RGPD).</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>Annuler</Button>
            <Button variant="danger" className="flex-1" loading={loading} onClick={deleteAccount}>Supprimer</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
