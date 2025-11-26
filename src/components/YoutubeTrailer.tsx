export default function YoutubeTrailer({
  trailerId,
}: Readonly<{ trailerId: string }>) {
  return (
    <iframe
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${trailerId}`}
      className="rounded-lg"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export function MovieTrailers({ videos }: { videos: VideoResult[] }) {
  if (!videos.length) return null;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold bg-navy rounded-lg p-4 mb-4">
        Trailers & Shorts
      </h3>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <YoutubeTrailer key={video.id} trailerId={video.key} />
        ))}
      </div>
    </div>
  );
}
