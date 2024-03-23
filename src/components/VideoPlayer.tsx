const VideoPlayer = ({
  imdb_id,
  title,
}: {
  imdb_id: number;
  title?: string;
}) => {
  const embedUrl = `https://vidsrc.to/embed/movie/${imdb_id}`;

  return (
    <iframe
      title={title}
      className="w-full my-4 lg:flex-grow lg:h-auto h-96"
      src={embedUrl}
      allowFullScreen
      allow="autoplay; encrypted-media; picture-in-picture"
    />
  );
};

export default VideoPlayer;
