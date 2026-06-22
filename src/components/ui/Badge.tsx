import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
      {
        "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/70": variant === "default",
        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400": variant === "success",
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400": variant === "warning",
        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": variant === "danger",
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400": variant === "info",
      },
      className
    )}>
      {children}
    </span>
  );
}
