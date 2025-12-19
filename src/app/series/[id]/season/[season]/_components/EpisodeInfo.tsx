import { EpisodeMeta } from "./EpisodeMeta";
import { EpisodeGuestStars } from "./EpisodeGuestStars";

interface Episode {
  name: string;
  overview?: string;
  air_date?: string;
  runtime?: number;
  vote_average?: number;
  vote_count?: number;
  episode_type?: string;
  guest_stars?: Array<{ name: string }>;
}

interface EpisodeInfoProps {
  episode: Episode;
}

export function EpisodeInfo({ episode }: EpisodeInfoProps) {
  return (
    <div className="flex-1 p-4">
      <h3 className="text-lg font-bold mb-1 line-clamp-1">{episode.name}</h3>

      <EpisodeMeta episode={episode} />

      {/* Overview */}
      <p className="text-sm text-gray-400 line-clamp-2 sm:line-clamp-3">
        {episode.overview || "No description available."}
      </p>

      <EpisodeGuestStars guestStars={episode.guest_stars} />
    </div>
  );
}
