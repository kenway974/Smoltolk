"use client";
import { useState, useEffect } from "react";

const KEY = "sr_recently_viewed";
const MAX = 10;

export interface RecentlyViewedItem {
  id: string;
  title: string;
  category: string;
  viewedAt: number;
}

export function useRecentlyViewed() {
  const [items, setItems] = useState<RecentlyViewedItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  function add(item: Omit<RecentlyViewedItem, "viewedAt">) {
    setItems((prev) => {
      const next = [{ ...item, viewedAt: Date.now() }, ...prev.filter((i) => i.id !== item.id)].slice(0, MAX);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  function remove(id: string) {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== id);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  return { items, add, remove };
}
