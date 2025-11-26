interface VideoPlayerType {
  imdb_id: number;
  title?: string;
}

interface SeriesPlayer extends VideoPlayerType {
  episode: number;
  season: number;
}

export const VideoPlayer = ({ imdb_id, title }: VideoPlayerType) => {
  const embedUrl = `https://vidsrc.xyz/embed/movie/${imdb_id}`;

  return (
    <iframe
      title={title}
      className="w-full lg:flex-grow lg:h-auto h-96 rounded-lg"
      src={embedUrl}
      allowFullScreen
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerPolicy="origin"
    />
  );
};

export const SeriesVideoPlayer = ({
  imdb_id,
  title,
  episode = 1,
  season = 1,
}: SeriesPlayer) => {
  const embedUrl = `https://vidsrc-embed.ru/embed/tv?tmdb=${imdb_id}&season=${season}&episode=${episode}`;

  return (
    <iframe
      title={title}
      className="w-full lg:flex-grow lg:h-auto h-96 rounded-lg"
      src={embedUrl}
      allowFullScreen
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerPolicy="origin"
    />
  );
};
