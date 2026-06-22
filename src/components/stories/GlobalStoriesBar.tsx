"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Story { id: string; user_id: string; media_url: string; caption?: string | null; created_at: string; }

export default function GlobalStoriesBar({ userId }: { userId?: string }) {
  const [stories, setStories] = useState<Story[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    createClient().from("global_stories").select("*").order("created_at", { ascending: false }).limit(30).then(({ data }) => setStories(data ?? []));
  }, []);

  const upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file || !userId) return;
    const supabase = createClient();
    const path = `${userId}/${Date.now()}_${file.name}`;
    const { error } = await supabase.storage.from("global-stories").upload(path, file);
    if (error) return;
    const { data: { publicUrl } } = supabase.storage.from("global-stories").getPublicUrl(path);
    await supabase.from("global_stories").insert({ user_id: userId, media_url: publicUrl });
    setStories((prev) => [{ id: Date.now().toString(), user_id: userId, media_url: publicUrl, created_at: new Date().toISOString() }, ...prev]);
    e.target.value = "";
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar py-2">
      {userId && (
        <>
          <button onClick={() => fileRef.current?.click()} className="flex-shrink-0 flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-full border-2 border-dashed border-brand-teal flex items-center justify-center bg-brand-teal/5 hover:bg-brand-teal/10 transition-colors">
              <Plus size={20} className="text-brand-teal" />
            </div>
            <span className="text-xs text-gray-500">Partager</span>
          </button>
          <input ref={fileRef} type="file" accept="image/*,video/*" className="hidden" onChange={upload} />
        </>
      )}
      {stories.map((story, i) => (
        <button key={story.id} onClick={() => setActive(i)} className="flex-shrink-0 flex flex-col items-center gap-1">
          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-brand-orange ring-offset-1">
            <Image src={story.media_url} alt="" width={56} height={56} className="w-full h-full object-cover" />
          </div>
        </button>
      ))}

      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button onClick={() => setActive(null)} className="absolute top-4 right-4 text-white"><X size={24} /></button>
          {active > 0 && <button onClick={() => setActive(active - 1)} className="absolute left-4 text-white"><ChevronLeft size={24} /></button>}
          {active < stories.length - 1 && <button onClick={() => setActive(active + 1)} className="absolute right-4 text-white"><ChevronRight size={24} /></button>}
          <Image src={stories[active].media_url} alt="" fill className="object-contain" />
          {stories[active].caption && <p className="absolute bottom-8 left-0 right-0 text-center text-white text-sm px-8">{stories[active].caption}</p>}
        </div>
      )}
    </div>
  );
}
