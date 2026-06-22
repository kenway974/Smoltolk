"use client";
import { Bell, BellOff, BellRing } from "lucide-react";
import { usePushNotifications } from "@/lib/hooks/usePushNotifications";

export default function PushToggle({ userId }: { userId: string }) {
  const { state, subscribed, loading, subscribe, unsubscribe } = usePushNotifications(userId);
  if (state === "unsupported") return null;
  return (
    <button onClick={subscribed ? unsubscribe : subscribe} disabled={loading || state === "denied"} className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/70 hover:text-brand-teal transition-colors disabled:opacity-50">
      {subscribed ? <BellOff size={16} /> : state === "granted" ? <BellRing size={16} /> : <Bell size={16} />}
      {subscribed ? "Désactiver les notifications" : "Activer les notifications"}
    </button>
  );
}
