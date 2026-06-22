"use client";
import { useState, useEffect } from "react";

const KEY = "sr_search_history";
const MAX = 10;

export function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setHistory(JSON.parse(raw));
    } catch {}
  }, []);

  function add(query: string) {
    if (!query.trim()) return;
    setHistory((prev) => {
      const next = [query, ...prev.filter((q) => q !== query)].slice(0, MAX);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  function clear() {
    setHistory([]);
    try { localStorage.removeItem(KEY); } catch {}
  }

  return { history, add, clear };
}
