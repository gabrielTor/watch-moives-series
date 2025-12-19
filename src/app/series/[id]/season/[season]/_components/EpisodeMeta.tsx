import { FaStar, FaClock, FaCalendar } from "react-icons/fa";

interface Episode {
  air_date?: string;
  runtime?: number;
  vote_average?: number;
  vote_count?: number;
  episode_type?: string;
}

interface EpisodeMetaProps {
  episode: Episode;
}

export function EpisodeMeta({ episode }: EpisodeMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-2">
      {episode.air_date && (
        <div className="flex items-center gap-1">
          <FaCalendar />
          <span>{new Date(episode.air_date).toLocaleDateString()}</span>
        </div>
      )}
      {episode.runtime && (
        <div className="flex items-center gap-1">
          <FaClock />
          <span>{episode.runtime} min</span>
        </div>
      )}
      {episode.vote_average && episode.vote_average > 0 && (
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span>{episode.vote_average.toFixed(1)}</span>
          <span className="text-gray-500">({episode.vote_count})</span>
        </div>
      )}
      {episode.episode_type === "finale" && (
        <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
          FINALE
        </span>
      )}
    </div>
  );
}
