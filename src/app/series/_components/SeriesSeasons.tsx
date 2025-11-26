import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface SeriesSeasonsProps {
  seasons?: Season[];
  imageBase: string;
}

export function SeriesSeasons({ seasons, imageBase }: SeriesSeasonsProps) {
  if (!seasons || seasons.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Seasons</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seasons.map((season) => (
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
  );
}
