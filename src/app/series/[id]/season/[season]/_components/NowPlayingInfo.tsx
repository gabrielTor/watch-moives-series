interface NowPlayingInfoProps {
  episode?: {
    name: string;
    overview?: string;
  };
  currentEpisode: number;
}

export function NowPlayingInfo({
  episode,
  currentEpisode,
}: NowPlayingInfoProps) {
  if (!episode) return null;

  return (
    <div className="bg-gray-900 rounded-lg p-4 mt-4">
      <div className="flex items-start gap-2 mb-2">
        <span className="text-sm text-gray-400">Now Playing:</span>
        <span className="text-sm font-semibold">
          Episode {currentEpisode} - {episode.name}
        </span>
      </div>
      <p className="text-sm text-gray-400 line-clamp-2">{episode.overview}</p>
    </div>
  );
}
