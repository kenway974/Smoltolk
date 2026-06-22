"use client";
import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

export function useGoingStatus(activityId: string, userId: string | null) {
  const [going, setGoing] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.from("registrations").select("id", { count: "exact" }).eq("activity_id", activityId).then(({ count: c }) => {
      setCount(c ?? 0);
    });
    if (userId) {
      supabase.from("registrations").select("id").eq("activity_id", activityId).eq("user_id", userId).single().then(({ data }) => {
        setGoing(!!data);
      });
    }
  }, [activityId, userId]);

  const toggle = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    const supabase = createClient();
    if (going) {
      await supabase.from("registrations").delete().eq("activity_id", activityId).eq("user_id", userId);
      setGoing(false); setCount((c) => Math.max(0, c - 1));
    } else {
      await supabase.from("registrations").insert({ activity_id: activityId, user_id: userId });
      setGoing(true); setCount((c) => c + 1);
    }
    setLoading(false);
  }, [going, activityId, userId]);

  return { going, count, loading, toggle };
}
