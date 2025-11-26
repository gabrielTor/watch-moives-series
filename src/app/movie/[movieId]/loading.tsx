export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Skeleton */}
      <div className="relative h-[60vh] w-full mb-8">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-800 to-gray-700 animate-pulse" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Title skeleton */}
            <div className="h-10 w-2/3 bg-navy rounded mb-3 animate-pulse" />
            {/* Tagline skeleton */}
            <div className="h-6 w-1/2 bg-navy/70 rounded mb-3 animate-pulse" />

            {/* Metadata skeleton */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="h-7 w-16 bg-yellow-500/50 rounded animate-pulse" />
              <div className="h-5 w-24 bg-navy/70 rounded animate-pulse" />
              <div className="h-5 w-20 bg-navy/70 rounded animate-pulse" />
              <div className="h-5 w-16 bg-navy/70 rounded animate-pulse" />
            </div>

            {/* Genres skeleton */}
            <div className="flex flex-wrap gap-2">
              <div className="h-7 w-20 bg-navy/70 rounded-full animate-pulse" />
              <div className="h-7 w-24 bg-navy/70 rounded-full animate-pulse" />
              <div className="h-7 w-28 bg-navy/70 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-6">
          {/* Left Column - Poster Skeleton */}
          <div className="w-full lg:w-1/3">
            <div className="w-full aspect-[2/3] bg-navy rounded-lg animate-pulse" />
          </div>

          {/* Right Column - Info & Player Skeleton */}
          <div className="w-full lg:w-2/3 flex flex-col">
            {/* Info Box Skeleton */}
            <div className="bg-navy rounded-lg p-6 mb-6">
              <div className="space-y-3">
                <div className="h-5 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-5 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-5 w-3/4 bg-gray-800 rounded animate-pulse" />
                <div className="h-5 w-1/3 bg-gray-800 rounded animate-pulse" />
                <div className="h-5 w-1/2 bg-gray-800 rounded animate-pulse" />
                <div className="h-5 w-2/3 bg-gray-800 rounded animate-pulse" />
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className="h-10 w-24 bg-gray-800 rounded-lg animate-pulse" />
                <div className="h-10 w-32 bg-gray-800 rounded-lg animate-pulse" />
              </div>
            </div>

            {/* Video Player Skeleton */}
            <div className="w-full aspect-video bg-navy rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Reviews Skeleton */}
        <div className="mt-6">
          <div className="h-12 w-32 bg-navy rounded-lg mb-4 animate-pulse" />
          <div className="space-y-4">
            <div className="bg-navy rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 animate-pulse" />
                <div className="flex-1">
                  <div className="h-5 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-24 bg-gray-800 rounded animate-pulse" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Trailers Skeleton */}
        <div className="mt-6">
          <div className="h-12 w-48 bg-navy rounded-lg mb-4 animate-pulse" />
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="w-full aspect-video bg-navy rounded-lg animate-pulse" />
            <div className="w-full aspect-video bg-navy rounded-lg animate-pulse" />
            <div className="w-full aspect-video bg-navy rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
