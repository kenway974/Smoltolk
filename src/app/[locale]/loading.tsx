export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
        >
          <div className="h-48 rounded-t-xl bg-gray-300 dark:bg-gray-600" />
          <div className="p-4">
            <div className="mb-2 h-4 rounded bg-gray-300 dark:bg-gray-600" />
            <div className="h-3 w-2/3 rounded bg-gray-300 dark:bg-gray-600" />
          </div>
        </div>
      ))}
    </div>
  )
}
