"use client";
import { useState, useEffect } from "react";
import { Bell, X } from "lucide-react";
import { usePushNotifications } from "@/lib/hooks/usePushNotifications";

const DISMISSED_KEY = "sr_push_dismissed";

export default function PushPrompt({ userId }: { userId: string }) {
  const [show, setShow] = useState(false);
  const { state, subscribed, subscribe } = usePushNotifications(userId);

  useEffect(() => {
    if (state === "default" && !subscribed && !localStorage.getItem(DISMISSED_KEY)) {
      const t = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(t);
    }
  }, [state, subscribed]);

  const dismiss = () => { setShow(false); localStorage.setItem(DISMISSED_KEY, "1"); };

  if (!show) return null;
  return (
    <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl p-4 flex items-start gap-3 border border-gray-100 dark:border-white/10">
      <Bell size={20} className="text-brand-teal flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-sm font-medium">Restez informé</p>
        <p className="text-xs text-gray-500 mt-0.5">Recevez les rappels la veille de vos événements favoris.</p>
        <div className="flex gap-2 mt-3">
          <button onClick={() => { subscribe(); dismiss(); }} className="text-xs font-medium text-brand-teal hover:underline">Activer</button>
          <button onClick={dismiss} className="text-xs text-gray-400 hover:underline">Plus tard</button>
        </div>
      </div>
      <button onClick={dismiss} className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded"><X size={14} /></button>
    </div>
  );
}
