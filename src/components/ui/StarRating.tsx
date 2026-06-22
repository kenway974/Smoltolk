"use client";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface StarRatingProps {
  value: number;
  onChange?: (v: number) => void;
  readonly?: boolean;
  size?: number;
  className?: string;
}

export default function StarRating({ value, onChange, readonly = false, size = 20, className }: StarRatingProps) {
  const [hover, setHover] = useState(0);
  return (
    <div className={cn("flex gap-0.5", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          className={cn("transition-colors", readonly ? "cursor-default" : "cursor-pointer hover:scale-110")}
          style={{ fontSize: size }}
        >
          <span className={cn((hover || value) >= star ? "text-brand-sand" : "text-gray-300")}>★</span>
        </button>
      ))}
    </div>
  );
}
