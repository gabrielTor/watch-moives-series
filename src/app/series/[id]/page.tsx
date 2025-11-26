import Image from "next/image";
import { getSeriesById } from "@/actions/get";
import { FaCalendar, FaClock, FaPlay, FaStar } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

interface Props {
  params: { id: string };
}

export const revalidate = 3600 * 24;

export default async function page({ params }: Props) {
  const tvShow = await getSeriesById(params.id);

  const imageBase = "https://image.tmdb.org/t/p/";
  const backdropUrl = tvShow?.backdrop_path
    ? `${imageBase}original${tvShow?.backdrop_path}`
    : null;
  const posterUrl = tvShow?.poster_path
    ? `${imageBase}w500${tvShow?.poster_path}`
    : null;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[70vh] w-full">
        {backdropUrl && (
          <>
            <Image
              src={backdropUrl}
              alt={tvShow?.name ?? ""}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
          </>
        )}

        {/* Main Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Poster */}
            {posterUrl && (
              <div className="flex-shrink-0">
                <div className="relative w-48 h-72 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={posterUrl}
                    alt={tvShow?.name ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {/* Title and Quick Info */}
            <div className="flex-1 flex flex-col justify-end">
              <h1 className="text-5xl font-bold mb-2">{tvShow?.name}</h1>
              {tvShow?.tagline && (
                <p className="text-xl text-gray-300 italic mb-4">
                  &quot;{tvShow?.tagline}&quot;
                </p>
              )}

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                  <FaStar className="w-5 h-5 fill-current" />
                  <span>{tvShow?.vote_average.toFixed(1)}</span>
                </div>
                <span className="text-gray-300">
                  {tvShow?.vote_count.toLocaleString()} votes
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">{tvShow?.status}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">
                  {tvShow?.number_of_seasons} Season
                  {tvShow?.number_of_seasons !== 1 ? "s" : ""}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">
                  {tvShow?.number_of_episodes} Episodes
                </span>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">
                {tvShow?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {tvShow?.overview}
          </p>
        </section>

        {/* Details Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <FaCalendar className="w-5 h-5" />
              <span className="font-semibold">First Aired</span>
            </div>
            <p className="text-xl">
              {new Date(tvShow?.first_air_date ?? "").toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>

          {tvShow?.last_air_date && (
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <FaCalendar className="w-5 h-5" />
                <span className="font-semibold">Last Aired</span>
              </div>
              <p className="text-xl">
                {new Date(tvShow?.last_air_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          )}

          {tvShow && tvShow?.episode_run_time?.length > 0 && (
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <FaClock className="w-5 h-5" />
                <span className="font-semibold">Episode Runtime</span>
              </div>
              <p className="text-xl">
                {tvShow?.episode_run_time.join(", ")} min
              </p>
            </div>
          )}

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <FiTrendingUp className="w-5 h-5" />
              <span className="font-semibold">Popularity</span>
            </div>
            <p className="text-xl">{tvShow?.popularity.toFixed(0)}</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <span className="font-semibold">Type</span>
            </div>
            <p className="text-xl">{tvShow?.type}</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <span className="font-semibold">Original Language</span>
            </div>
            <p className="text-xl uppercase">{tvShow?.original_language}</p>
          </div>
        </section>

        {/* Created By */}
        {tvShow?.created_by && tvShow?.created_by.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Created By</h2>
            <div className="flex flex-wrap gap-6">
              {tvShow?.created_by.map((creator) => (
                <div key={creator.id} className="flex items-center gap-4">
                  {creator.profile_path ? (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={`${imageBase}w185${creator.profile_path}`}
                        alt={creator.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold">
                        {creator.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-lg">{creator.name}</p>
                    <p className="text-gray-400 text-sm">Creator</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Last Episode */}
        {tvShow?.last_episode_to_air && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Last Episode</h2>
            <div className="bg-gray-900 rounded-lg overflow-hidden flex flex-col md:flex-row">
              {tvShow?.last_episode_to_air.still_path && (
                <div className="relative w-full md:w-80 h-48">
                  <Image
                    src={`${imageBase}w500${tvShow?.last_episode_to_air.still_path}`}
                    alt={tvShow?.last_episode_to_air.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-400">
                    S{tvShow?.last_episode_to_air.season_number}E
                    {tvShow?.last_episode_to_air.episode_number}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">
                    {new Date(
                      tvShow?.last_episode_to_air.air_date
                    ).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {tvShow?.last_episode_to_air.name}
                </h3>
                <p className="text-gray-300 mb-3">
                  {tvShow?.last_episode_to_air.overview}
                </p>
                <div className="flex items-center gap-2">
                  <FaStar className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span>
                    {tvShow?.last_episode_to_air.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-400">
                    ({tvShow?.last_episode_to_air.vote_count} votes)
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Next Episode */}
        {tvShow?.next_episode_to_air && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Next Episode</h2>
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg overflow-hidden flex flex-col md:flex-row">
              {tvShow?.next_episode_to_air.still_path && (
                <div className="relative w-full md:w-80 h-48">
                  <Image
                    src={`${imageBase}w500${tvShow?.next_episode_to_air.still_path}`}
                    alt={tvShow?.next_episode_to_air.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-blue-200">
                    S{tvShow?.next_episode_to_air.season_number}E
                    {tvShow?.next_episode_to_air.episode_number}
                  </span>
                  <span className="text-blue-200">•</span>
                  <span className="text-blue-200">
                    {new Date(
                      tvShow?.next_episode_to_air.air_date
                    ).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {tvShow?.next_episode_to_air.name}
                </h3>
                <p className="text-blue-100">
                  {tvShow?.next_episode_to_air.overview}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Seasons */}
        {tvShow?.seasons && tvShow?.seasons.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Seasons</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tvShow?.seasons.map((season) => (
                <div
                  key={season.id}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer"
                >
                  {season.poster_path ? (
                    <div className="relative w-full h-80">
                      <Image
                        src={`${imageBase}w500${season.poster_path}`}
                        alt={season.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-80 bg-gray-800 flex items-center justify-center">
                      <FaPlay className="w-16 h-16 text-gray-600" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{season.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {season.episode_count} Episodes
                    </p>
                    {season.air_date && (
                      <p className="text-gray-500 text-sm">
                        {new Date(season.air_date).getFullYear()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Networks */}
        {tvShow?.networks && tvShow?.networks.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Networks</h2>
            <div className="flex flex-wrap gap-6">
              {tvShow?.networks.map((network) => (
                <div
                  key={network.id}
                  className="bg-gray-900 rounded-lg p-6 flex items-center gap-4"
                >
                  {network.logo_path && (
                    <div className="relative w-24 h-12">
                      <Image
                        src={`${imageBase}w185${network.logo_path}`}
                        alt={network.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{network.name}</p>
                    <p className="text-gray-400 text-sm">
                      {network.origin_country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Production Companies */}
        {tvShow?.production_companies &&
          tvShow?.production_companies.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold mb-6">Production Companies</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tvShow?.production_companies.map((company) => (
                  <div
                    key={company.id}
                    className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center"
                  >
                    {company.logo_path && (
                      <div className="relative w-32 h-16 mb-4">
                        <Image
                          src={`${imageBase}w185${company.logo_path}`}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <p className="font-semibold">{company.name}</p>
                    <p className="text-gray-400 text-sm">
                      {company.origin_country}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* Additional Info */}
        <section className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-400 mb-2">
                Original Title
              </h3>
              <p>{tvShow?.original_name}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-400 mb-2">
                Production Status
              </h3>
              <p>{tvShow?.in_production ? "In Production" : "Completed"}</p>
            </div>
            {tvShow && tvShow?.production_countries.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-400 mb-2">Countries</h3>
                <p>
                  {tvShow?.production_countries.map((c) => c.name).join(", ")}
                </p>
              </div>
            )}
            {tvShow && tvShow?.spoken_languages.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-400 mb-2">Languages</h3>
                <p>
                  {tvShow?.spoken_languages
                    .map((l) => l.english_name)
                    .join(", ")}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Homepage Link */}
        {tvShow?.homepage && (
          <section>
            <a
              href={tvShow?.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Official Website
              <FaPlay className="w-5 h-5" />
            </a>
          </section>
        )}
      </div>
    </div>
  );
}
