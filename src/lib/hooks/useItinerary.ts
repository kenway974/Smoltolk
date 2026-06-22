"use client";
import { useState, useCallback, useEffect } from "react";
import type { Activity } from "@/types";

const KEY = "sr_itinerary";

export interface ItineraryItem {
  id: string;
  title: string;
  date_start: string;
  time_start?: string | null;
  location?: string | null;
}

export function useItinerary() {
  const [items, setItems] = useState<ItineraryItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  const save = (next: ItineraryItem[]) => {
    setItems(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  };

  const add = useCallback((activity: Activity) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === activity.id)) return prev;
      const next = [...prev, { id: activity.id, title: activity.title, date_start: activity.date_start, time_start: activity.time_start, location: activity.location }];
      save(next); return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => { const next = prev.filter((i) => i.id !== id); save(next); return next; });
  }, []);

  const clear = useCallback(() => { save([]); }, []);

  return { items, add, remove, clear };
}
