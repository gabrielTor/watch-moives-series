import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface SeriesHeroProps {
  tvShow?: TVShow;
  imageBase: string;
}

export function SeriesHero({ tvShow, imageBase }: SeriesHeroProps) {
  if (!tvShow) return null;

  const backdropUrl = tvShow.backdrop_path
    ? `${imageBase}original${tvShow.backdrop_path}`
    : null;

  const posterUrl = tvShow.poster_path
    ? `${imageBase}w500${tvShow.poster_path}`
    : null;

  return (
    <div className="relative h-[70vh] w-full">
      {backdropUrl && (
        <>
          <Image
            src={backdropUrl}
            alt={tvShow.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8">
          {posterUrl && (
            <div className="flex-shrink-0">
              <div className="relative w-48 h-72 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={posterUrl}
                  alt={tvShow.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex-1 flex flex-col justify-end">
            <h1 className="text-5xl font-bold mb-2">{tvShow.name}</h1>
            {tvShow.tagline && (
              <p className="text-xl text-gray-300 italic mb-4">
                &quot;{tvShow.tagline}&quot;
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                <FaStar className="w-5 h-5 fill-current" />
                <span>{tvShow.vote_average.toFixed(1)}</span>
              </div>
              <span className="text-gray-300">
                {tvShow.vote_count.toLocaleString()} votes
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">{tvShow.status}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">
                {tvShow.number_of_seasons} Season
                {tvShow.number_of_seasons !== 1 ? "s" : ""}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-300">
                {tvShow.number_of_episodes} Episodes
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {tvShow.genres.map((genre) => (
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
  );
}
