import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import { FaStar, FaClock, FaCalendar } from "react-icons/fa";

export const MovieHero = ({ movie }: { movie: MovieData }) => {
  return (
    <div className="relative h-[60vh] w-full mb-8">
      <Image
        src={getSrc(movie.backdrop_path)}
        alt={movie.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{movie.title}</h1>
          {movie.tagline && (
            <p className="text-lg text-gray-300 italic mb-3">
              &quot;{movie.tagline}&quot;
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
            <div className="flex items-center gap-1 bg-yellow-500 text-black px-2 py-1 rounded font-semibold">
              <FaStar />
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
            <span className="text-gray-400">
              {movie.vote_count.toLocaleString()} votes
            </span>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-1 text-gray-400">
              <FaClock />
              <span>{movie.runtime} min</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-1 text-gray-400">
              <FaCalendar />
              <span>{new Date(movie.release_date).getFullYear()}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie?.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-gray-800/80 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
