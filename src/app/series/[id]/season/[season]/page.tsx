import Link from "next/link";
import Image from "next/image";
import { getEpisodesBySeason } from "@/actions/get";
import { SeriesVideoPlayer } from "@/components/VideoPlayer";
import { FaStar, FaClock, FaCalendar } from "react-icons/fa";

interface Props {
  params: { season: string; id: string };
  searchParams: { episode?: string };
}
const imageBase = "https://image.tmdb.org/t/p/";

export const revalidate = 3600 * 24;

export default async function page({
  params: { id, season },
  searchParams,
}: Props) {
  const seasonData = await getEpisodesBySeason(id, season);
  const currentEpisode = searchParams.episode
    ? parseInt(searchParams.episode)
    : 1;

  if (!seasonData) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-xl text-gray-400">Season not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-8xl mx-auto px-4 py-8">
        {/* Season Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{seasonData?.name}</h1>
          {seasonData?.overview && (
            <p className="text-gray-400 max-w-3xl">{seasonData?.overview}</p>
          )}
          <div className="flex items-center gap-4 mt-3 text-sm">
            {seasonData?.air_date && (
              <div className="flex items-center gap-1 text-gray-400">
                <FaCalendar />
                <span>{new Date(seasonData?.air_date).getFullYear()}</span>
              </div>
            )}
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">
              {seasonData?.episodes.length} Episodes
            </span>
            {seasonData?.vote_average > 0 && (
              <>
                <span className="text-gray-500">•</span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <span>{seasonData.vote_average.toFixed(1)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Video Player */}
        <div className="mb-8">
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-900">
            <SeriesVideoPlayer
              imdb_id={id}
              season={season}
              episode={currentEpisode}
            />
          </div>

          {/* Currently Playing Info */}
          {seasonData.episodes[currentEpisode - 1] && (
            <div className="bg-gray-900 rounded-lg p-4 mt-4">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-sm text-gray-400">Now Playing:</span>
                <span className="text-sm font-semibold">
                  Episode {currentEpisode} -{" "}
                  {seasonData.episodes[currentEpisode - 1].name}
                </span>
              </div>
              <p className="text-sm text-gray-400 line-clamp-2">
                {seasonData.episodes[currentEpisode - 1].overview}
              </p>
            </div>
          )}
        </div>

        {/* Episodes List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>
          <div className="space-y-3">
            {seasonData.episodes.map((episode) => {
              const isPlaying = episode.episode_number === currentEpisode;

              return (
                <Link
                  key={episode.id}
                  href={`?episode=${episode.episode_number}`}
                  scroll={false}
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
                    {/* Episode Image */}
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
                          <span className="text-3xl font-bold">
                            E{episode.episode_number}
                          </span>
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

                    {/* Episode Info */}
                    <div className="flex-1 p-4">
                      <h3 className="text-lg font-bold mb-1 line-clamp-1">
                        {episode.name}
                      </h3>

                      {/* Episode Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-2">
                        {episode.air_date && (
                          <div className="flex items-center gap-1">
                            <FaCalendar />
                            <span>
                              {new Date(episode.air_date).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        {episode.runtime && (
                          <div className="flex items-center gap-1">
                            <FaClock />
                            <span>{episode.runtime} min</span>
                          </div>
                        )}
                        {episode.vote_average > 0 && (
                          <div className="flex items-center gap-1 text-yellow-500">
                            <FaStar />
                            <span>{episode.vote_average.toFixed(1)}</span>
                            <span className="text-gray-500">
                              ({episode.vote_count})
                            </span>
                          </div>
                        )}
                        {episode.episode_type === "finale" && (
                          <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-semibold">
                            FINALE
                          </span>
                        )}
                      </div>

                      {/* Overview */}
                      <p className="text-sm text-gray-400 line-clamp-2 sm:line-clamp-3">
                        {episode.overview || "No description available."}
                      </p>

                      {/* Guest Stars */}
                      {episode.guest_stars &&
                        episode.guest_stars.length > 0 && (
                          <div className="mt-2 text-xs text-gray-500">
                            <span className="font-semibold">Guest Stars:</span>{" "}
                            {episode.guest_stars
                              .slice(0, 3)
                              .map((star) => star.name)
                              .join(", ")}
                            {episode.guest_stars.length > 3 && "..."}
                          </div>
                        )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
