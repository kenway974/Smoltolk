"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export function useFavorites(userId: string | null) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) { setFavoriteIds(new Set()); return; }
    const supabase = createClient();
    supabase.from("favorites").select("activity_id").eq("user_id", userId).then(({ data }) => {
      if (data) setFavoriteIds(new Set(data.map((r) => r.activity_id)));
    });
  }, [userId]);

  async function toggle(activityId: string) {
    if (!userId) return;
    setLoading(true);
    const supabase = createClient();
    if (favoriteIds.has(activityId)) {
      await supabase.from("favorites").delete().eq("user_id", userId).eq("activity_id", activityId);
      setFavoriteIds((prev) => { const s = new Set(prev); s.delete(activityId); return s; });
    } else {
      await supabase.from("favorites").insert({ user_id: userId, activity_id: activityId });
      setFavoriteIds((prev) => new Set(Array.from(prev).concat(activityId)));
    }
    setLoading(false);
  }

  return { favoriteIds, toggle, loading };
}
