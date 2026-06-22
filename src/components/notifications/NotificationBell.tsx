"use client";
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { Notification } from "@/types";

export default function NotificationBell({ userId }: { userId: string }) {
  const [notifs, setNotifs] = useState<Notification[]>([]);
  const [open, setOpen] = useState(false);
  const unread = notifs.filter((n) => !n.read).length;

  useEffect(() => {
    const supabase = createClient();
    supabase.from("notifications").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(20).then(({ data }) => setNotifs(data ?? []));
  }, [userId]);

  const markRead = async () => {
    const supabase = createClient();
    await supabase.from("notifications").update({ read: true }).eq("user_id", userId).eq("read", false);
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="relative">
      <button onClick={() => { setOpen(!open); if (!open && unread > 0) markRead(); }} className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors" aria-label={`${unread} notifications`}>
        <Bell size={18} />
        {unread > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-brand-orange rounded-full" />}
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-1 w-72 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-white/10 shadow-lg z-50 overflow-hidden">
          <p className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100 dark:border-white/10">Notifications</p>
          {notifs.length === 0 ? (
            <p className="px-3 py-4 text-sm text-gray-400 text-center">Aucune notification</p>
          ) : (
            notifs.map((n) => (
              <div key={n.id} className="px-3 py-2 text-sm border-b border-gray-50 dark:border-white/5 last:border-0">
                {String(n.payload?.message ?? "Nouvelle notification")}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
