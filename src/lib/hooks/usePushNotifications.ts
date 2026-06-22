"use client";
import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { VAPID_PUBLIC_KEY, urlBase64ToUint8Array } from "@/lib/utils/vapid";

type PushState = "unsupported" | "default" | "granted" | "denied";

export function usePushNotifications(userId: string) {
  const [state, setState] = useState<PushState>("default");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      setState("unsupported"); return;
    }
    setState(Notification.permission as PushState);
    const supabase = createClient();
    supabase.from("push_subscriptions").select("id").eq("user_id", userId).then(({ data }) => {
      setSubscribed(!!data?.length);
    });
  }, [userId]);

  const subscribe = useCallback(async () => {
    setLoading(true);
    try {
      const permission = await Notification.requestPermission();
      setState(permission as PushState);
      if (permission !== "granted") return;
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY) as unknown as ArrayBuffer,
      });
      const supabase = createClient();
      await supabase.from("push_subscriptions").insert({ user_id: userId, subscription: sub.toJSON() });
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const unsubscribe = useCallback(async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      await supabase.from("push_subscriptions").delete().eq("user_id", userId);
      setSubscribed(false);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return { state, subscribed, loading, subscribe, unsubscribe };
}
