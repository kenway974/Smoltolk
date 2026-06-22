"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const PULL_THRESHOLD = 80;

export function usePullToRefresh(onRefresh: () => Promise<void> | void) {
  const [pulling, setPulling] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (window.scrollY === 0) startY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(async (e: TouchEvent) => {
    const delta = e.changedTouches[0].clientY - startY.current;
    setPulling(false);
    if (delta > PULL_THRESHOLD && window.scrollY === 0) {
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    }
  }, [onRefresh]);

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);

  return { pulling, refreshing };
}
