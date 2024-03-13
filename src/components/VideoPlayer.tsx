const VideoPlayer = ({ imdb_id }: { imdb_id: number }) => {
  const embedUrl = `https://vidsrc.to/embed/movie/${imdb_id}`;

  return (
    <iframe
      className="w-full my-4 lg:flex-grow lg:h-auto h-96"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; encrypted-media; picture-in-picture"
    />
  );
};

export default VideoPlayer;
