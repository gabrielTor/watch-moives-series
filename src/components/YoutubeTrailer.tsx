export default function YoutubeTrailer({
  trailerId,
}: Readonly<{ trailerId: string }>) {
  return (
    <iframe
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${trailerId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
