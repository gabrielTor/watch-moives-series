import Link from "next/link";
import { EpisodeImage } from "./EpisodeImage";
import { EpisodeInfo } from "./EpisodeInfo";

interface EpisodeCardProps {
  episode: Episode;
  isPlaying: boolean;
  imageBase: string;
}

export function EpisodeCard({
  episode,
  isPlaying,
  imageBase,
}: EpisodeCardProps) {
  return (
    <Link
      href={`?episode=${episode.episode_number}`}
      className={`
        block bg-gray-900 rounded-lg overflow-hidden transition-all duration-200
        ${
          isPlaying
            ? "ring-2 ring-blue-600 shadow-lg shadow-blue-600/20"
            : "hover:bg-gray-800 hover:scale-[1.01]"
        }
      `}
    >
      <div className="flex flex-col sm:flex-row">
        <EpisodeImage
          episode={episode}
          isPlaying={isPlaying}
          imageBase={imageBase}
        />
        <EpisodeInfo episode={episode} />
      </div>
    </Link>
  );
}
