export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Skeleton */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-800 to-gray-700 animate-pulse" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Poster skeleton */}
            <div className="flex-shrink-0">
              <div className="w-48 h-72 bg-navy rounded-lg animate-pulse" />
            </div>

            {/* Title and info skeleton */}
            <div className="flex-1 flex flex-col justify-end">
              {/* Title */}
              <div className="h-12 w-2/3 bg-navy rounded mb-2 animate-pulse" />
              {/* Tagline */}
              <div className="h-6 w-1/2 bg-navy/70 rounded mb-4 animate-pulse" />

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="h-8 w-16 bg-yellow-500/50 rounded-full animate-pulse" />
                <div className="h-5 w-24 bg-navy/70 rounded animate-pulse" />
                <div className="h-5 w-32 bg-navy/70 rounded animate-pulse" />
                <div className="h-5 w-28 bg-navy/70 rounded animate-pulse" />
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                <div className="h-8 w-20 bg-navy/70 rounded-full animate-pulse" />
                <div className="h-8 w-24 bg-navy/70 rounded-full animate-pulse" />
                <div className="h-8 w-28 bg-navy/70 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Overview Skeleton */}
        <section>
          <div className="h-8 w-32 bg-navy rounded mb-4 animate-pulse" />
          <div className="space-y-2">
            <div className="h-5 w-full bg-navy rounded animate-pulse" />
            <div className="h-5 w-full bg-navy rounded animate-pulse" />
            <div className="h-5 w-3/4 bg-navy rounded animate-pulse" />
          </div>
        </section>

        {/* Details Grid Skeleton */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="h-5 w-24 bg-gray-800 rounded mb-2 animate-pulse" />
            <div className="h-6 w-32 bg-gray-800 rounded animate-pulse" />
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="h-5 w-24 bg-gray-800 rounded mb-2 animate-pulse" />
            <div className="h-6 w-32 bg-gray-800 rounded animate-pulse" />
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="h-5 w-24 bg-gray-800 rounded mb-2 animate-pulse" />
            <div className="h-6 w-32 bg-gray-800 rounded animate-pulse" />
          </div>
        </section>

        {/* Created By Skeleton */}
        <section>
          <div className="h-8 w-32 bg-navy rounded mb-6 animate-pulse" />
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-800 animate-pulse" />
              <div>
                <div className="h-5 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
                <div className="h-4 w-20 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Last Episode Skeleton */}
        <section>
          <div className="h-8 w-40 bg-navy rounded mb-6 animate-pulse" />
          <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-80 h-48 bg-gray-800 animate-pulse" />
            <div className="p-6 flex-1">
              <div className="h-5 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
              <div className="h-6 w-3/4 bg-gray-800 rounded mb-3 animate-pulse" />
              <div className="space-y-2 mb-3">
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-800 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="h-5 w-24 bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </section>

        {/* Seasons Grid Skeleton */}
        <section>
          <div className="h-8 w-32 bg-navy rounded mb-6 animate-pulse" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="w-full h-80 bg-gray-800 animate-pulse" />
                <div className="p-4">
                  <div className="h-5 w-3/4 bg-gray-800 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-800 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Networks Skeleton */}
        <section>
          <div className="h-8 w-32 bg-navy rounded mb-6 animate-pulse" />
          <div className="flex flex-wrap gap-6">
            <div className="bg-gray-900 rounded-lg p-6 flex items-center gap-4">
              <div className="w-24 h-12 bg-gray-800 rounded animate-pulse" />
              <div>
                <div className="h-5 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
                <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 flex items-center gap-4">
              <div className="w-24 h-12 bg-gray-800 rounded animate-pulse" />
              <div>
                <div className="h-5 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
                <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Production Companies Skeleton */}
        <section>
          <div className="h-8 w-48 bg-navy rounded mb-6 animate-pulse" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-32 h-16 bg-gray-800 rounded mb-4 animate-pulse" />
                <div className="h-5 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
                <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info Skeleton */}
        <section className="bg-gray-900 rounded-lg p-6">
          <div className="h-6 w-48 bg-gray-800 rounded mb-4 animate-pulse" />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="h-4 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
              <div className="h-5 w-48 bg-gray-800 rounded animate-pulse" />
            </div>
            <div>
              <div className="h-4 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
              <div className="h-5 w-40 bg-gray-800 rounded animate-pulse" />
            </div>
            <div>
              <div className="h-4 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
              <div className="h-5 w-56 bg-gray-800 rounded animate-pulse" />
            </div>
            <div>
              <div className="h-4 w-32 bg-gray-800 rounded mb-2 animate-pulse" />
              <div className="h-5 w-44 bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
