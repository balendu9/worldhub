export default function Loading() {
  return (
    <div className="min-h-screen text-white pb-20">
      {/* Profile Header Skeleton */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse" />
          <div className="text-center space-y-2">
            <div className="h-8 w-32 bg-gray-300 rounded animate-pulse mx-auto" />
            <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mx-auto" />
          </div>
          <div className="flex gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-1">
                <div className="h-8 w-16 bg-gray-300 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-300 rounded animate-pulse" />
              </div>
            ))}
          </div>
          <div className="h-10 w-32 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>

      {/* Settings Sections Skeleton */}
      <div className="p-4 space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-[#2a2f35] rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
                <div className="h-6 w-32 bg-gray-300 rounded animate-pulse" />
              </div>
              <div className="w-10 h-6 bg-gray-300 rounded animate-pulse" />
            </div>
          </div>
        ))}
        <div className="h-12 w-full bg-gray-300 rounded animate-pulse mt-8" />
      </div>
    </div>
  );
}
