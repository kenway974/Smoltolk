function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden">
      <div className="aspect-video shimmer-bg" />
      <div className="px-3 pt-3 pb-3.5 space-y-2">
        <div className="h-4 shimmer-bg rounded-full w-3/4" />
        <div className="h-3 shimmer-bg rounded-full w-full" />
        <div className="h-3 shimmer-bg rounded-full w-1/2" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="h-8 shimmer-bg rounded-full w-48 mb-8" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => <CardSkeleton key={i} />)}
      </div>
    </div>
  );
}
