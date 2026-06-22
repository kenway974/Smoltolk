"use client";
import { useState, useRef, useEffect, useCallback } from "react";

interface BottomSheetProps {
  snapPoints?: number[];
  initialSnap?: number;
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export default function BottomSheet({ snapPoints = [0.15, 0.5, 0.92], initialSnap = 0, children, open = true, onClose }: BottomSheetProps) {
  const [snap, setSnap] = useState(initialSnap);
  const sheetRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const startSnap = useRef(snap);

  const height = `${snapPoints[snap] * 100}vh`;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    startSnap.current = snap;
  }, [snap]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const delta = startY.current - e.changedTouches[0].clientY;
    if (delta > 50 && snap < snapPoints.length - 1) setSnap((s) => s + 1);
    else if (delta < -50) {
      if (snap === 0) onClose?.();
      else setSnap((s) => s - 1);
    }
  }, [snap, snapPoints.length, onClose]);

  if (!open) return null;
  return (
    <div ref={sheetRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
      style={{ height, transition: "height 0.3s ease" }}
      className="fixed bottom-0 left-0 right-0 z-30 bg-white dark:bg-[#1a1a1a] rounded-t-2xl shadow-2xl overflow-hidden"
    >
      <div className="w-10 h-1 bg-gray-300 dark:bg-white/20 rounded-full mx-auto mt-3" />
      <div className="h-full overflow-y-auto pb-safe">{children}</div>
    </div>
  );
}
