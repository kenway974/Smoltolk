"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Shuffle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DiscoverButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "fr";

  const handleClick = async () => {
    setLoading(true);
    const res = await fetch("/api/activities/random");
    if (res.ok) {
      const { id } = await res.json();
      router.push(`/${locale}/activities/${id}`);
    } else {
      setLoading(false);
    }
  };

  return (
    <Button variant="secondary" loading={loading} onClick={handleClick} className="flex items-center gap-2">
      <Shuffle size={16} /> Surprise !
    </Button>
  );
}
