"use client";
import { Users2 } from "lucide-react";
import { useGoingStatus } from "@/lib/hooks/useGoingStatus";
import Button from "@/components/ui/Button";

interface GoingButtonProps { activityId: string; userId: string | null; }

export default function GoingButton({ activityId, userId }: GoingButtonProps) {
  const { going, count, loading, toggle } = useGoingStatus(activityId, userId);
  return (
    <Button
      variant={going ? "primary" : "secondary"}
      size="sm"
      loading={loading}
      onClick={toggle}
      className="flex items-center gap-1.5"
    >
      <Users2 size={15} />
      {going ? "J'y vais !" : "Je veux y aller"}
      {count > 0 && <span className="opacity-70">· {count}</span>}
    </Button>
  );
}
