import Image from "next/image";

interface EpisodeImageProps {
  episode: Episode;
  isPlaying: boolean;
  imageBase: string;
}

export function EpisodeImage({
  episode,
  isPlaying,
  imageBase,
}: EpisodeImageProps) {
  return (
    <div className="relative w-full sm:w-64 flex-shrink-0 bg-gray-800">
      {episode.still_path ? (
        <Image
          src={`${imageBase}w300${episode.still_path}`}
          alt={episode.name}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-600">
          <span className="text-3xl font-bold">E{episode.episode_number}</span>
        </div>
      )}

      {/* Episode Number Badge */}
      <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
        Episode {episode.episode_number}
      </div>

      {/* Playing Indicator */}
      {isPlaying && (
        <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Playing
          </div>
        </div>
      )}
    </div>
  );
}
