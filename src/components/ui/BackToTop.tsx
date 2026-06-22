"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop({ scrollContainerRef }: { scrollContainerRef?: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = scrollContainerRef?.current ?? window;
    const onScroll = () => setVisible((scrollContainerRef?.current?.scrollTop ?? window.scrollY) > 400);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);
  if (!visible) return null;
  return (
    <button
      onClick={() => (scrollContainerRef?.current ?? window).scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-4 z-40 bg-brand-teal text-white p-2.5 rounded-full shadow-lg hover:bg-brand-green transition-colors"
      aria-label="Retour en haut"
    >
      <ArrowUp size={18} />
    </button>
  );
}
