"use client";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Activity } from "@/types";

export function useRealtimeActivities(
  onInsert?: (activity: Activity) => void,
  onDelete?: (id: string) => void
) {
  useEffect(() => {
    const supabase = createClient();
    const channel = supabase
      .channel("activities-realtime")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "activities" }, (payload) => {
        onInsert?.(payload.new as Activity);
      })
      .on("postgres_changes", { event: "DELETE", schema: "public", table: "activities" }, (payload) => {
        onDelete?.(payload.old.id as string);
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [onInsert, onDelete]);
}
