import Image from "next/image";
import { FaStar } from "react-icons/fa";

type EpisodeVariant = "default" | "gradient";

interface SeriesEpisodeSectionProps {
  title: string;
  episode?: Episode | null;
  imageBase: string;
  variant?: EpisodeVariant;
}

export function SeriesEpisodeSection({
  title,
  episode,
  imageBase,
  variant = "default",
}: SeriesEpisodeSectionProps) {
  if (!episode) {
    return null;
  }

  const wrapperClasses =
    variant === "gradient"
      ? "bg-gradient-to-r from-blue-900 to-purple-900"
      : "bg-gray-900";

  const textColor = variant === "gradient" ? "text-blue-200" : "text-gray-400";

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div
        className={`${wrapperClasses} rounded-lg overflow-hidden flex flex-col md:flex-row`}
      >
        {episode.still_path && (
          <div className="relative w-full md:w-80 h-48">
            <Image
              src={`${imageBase}w500${episode.still_path}`}
              alt={episode.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={textColor}>
              S{episode.season_number}E{episode.episode_number}
            </span>
            <span className={textColor}>•</span>
            <span className={textColor}>
              {new Date(episode.air_date).toLocaleDateString()}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-3">{episode.name}</h3>
          <p
            className={
              variant === "gradient" ? "text-blue-100" : "text-gray-300"
            }
          >
            {episode.overview}
          </p>

          {variant === "default" &&
            typeof episode.vote_average === "number" &&
            !Number.isNaN(episode.vote_average) && (
              <div className="flex items-center gap-2 mt-3">
                <FaStar className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span>{episode.vote_average.toFixed(1)}</span>
                <span className="text-gray-400">
                  ({episode.vote_count} votes)
                </span>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
