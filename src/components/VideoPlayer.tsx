const VideoPlayer = ({
  imdb_id,
  title,
  isSeries,
}: {
  imdb_id: number;
  title?: string;
  isSeries?: boolean;
}) => {
  const path = isSeries ? "tv" : "movie";
  const embedUrl = `https://vidsrc.xyz/embed/${path}/${imdb_id}`;

  return (
    <iframe
      title={title}
      className="w-full my-4 lg:flex-grow lg:h-auto h-96 rounded-lg"
      src={embedUrl}
      allowFullScreen
      allow="autoplay; encrypted-media; picture-in-picture"
    />
  );
};

export default VideoPlayer;
