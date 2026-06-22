"use client";
import { useState, useEffect, useRef } from "react";
import { Search, X, Clock } from "lucide-react";
import { useSearchHistory } from "@/lib/hooks/useSearchHistory";
import { cn } from "@/lib/utils/cn";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Rechercher un événement…", className }: SearchBarProps) {
  const [focused, setFocused] = useState(false);
  const { history, add, clear } = useSearchHistory();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (q: string) => {
    if (q.trim()) add(q.trim());
    onChange(q);
    setFocused(false);
    inputRef.current?.blur();
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
        />
        {value && (
          <button onClick={() => onChange("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
        )}
      </div>
      {focused && history.length > 0 && (
        <div className="absolute top-full mt-1 left-0 right-0 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-100 dark:border-white/10 shadow-lg z-50 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-500">
            <span>Recherches récentes</span>
            <button onClick={clear} className="hover:text-red-500">Effacer</button>
          </div>
          {history.map((q) => (
            <button key={q} onClick={() => handleSubmit(q)} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5 text-left">
              <Clock size={14} className="text-gray-400" />
              {q}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
