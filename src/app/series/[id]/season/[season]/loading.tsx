export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-8xl mx-auto px-4 py-8">
        {/* Season Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-64 bg-navy rounded mb-2 animate-pulse" />
          <div className="space-y-2 mb-3">
            <div className="h-4 w-full max-w-3xl bg-navy/70 rounded animate-pulse" />
            <div className="h-4 w-2/3 max-w-2xl bg-navy/70 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="h-5 w-20 bg-navy/70 rounded animate-pulse" />
            <div className="h-5 w-24 bg-navy/70 rounded animate-pulse" />
            <div className="h-5 w-16 bg-navy/70 rounded animate-pulse" />
          </div>
        </div>

        {/* Video Player Skeleton */}
        <div className="mb-8">
          <div className="aspect-video w-full rounded-xl bg-gray-900 animate-pulse" />

          {/* Currently Playing Info Skeleton */}
          <div className="bg-gray-900 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-2 mb-2">
              <div className="h-4 w-32 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-48 bg-gray-800 rounded animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-800 rounded animate-pulse" />
              <div className="h-3 w-3/4 bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* Episodes List Skeleton */}
        <div>
          <div className="h-8 w-32 bg-navy rounded mb-4 animate-pulse" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row">
                  {/* Episode Image Skeleton */}
                  <div className="relative w-full sm:w-64 h-36 flex-shrink-0 bg-gray-800 animate-pulse">
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                      <div className="h-3 w-16 bg-gray-700 rounded animate-pulse" />
                    </div>
                  </div>

                  {/* Episode Info Skeleton */}
                  <div className="flex-1 p-4">
                    <div className="h-5 w-3/4 bg-gray-800 rounded mb-2 animate-pulse" />

                    {/* Episode Meta Skeleton */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <div className="h-4 w-24 bg-gray-800 rounded animate-pulse" />
                      <div className="h-4 w-20 bg-gray-800 rounded animate-pulse" />
                      <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
                    </div>

                    {/* Overview Skeleton */}
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-gray-800 rounded animate-pulse" />
                      <div className="h-3 w-full bg-gray-800 rounded animate-pulse" />
                      <div className="h-3 w-2/3 bg-gray-800 rounded animate-pulse" />
                    </div>

                    {/* Guest Stars Skeleton */}
                    <div className="mt-2">
                      <div className="h-3 w-3/4 bg-gray-800 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
