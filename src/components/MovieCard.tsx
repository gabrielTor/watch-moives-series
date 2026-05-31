import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaPlay } from "react-icons/fa";

interface Props {
  movie: MovieResults;
  path?: string;
}

export default function MovieCard({ movie, path = "movie" }: Readonly<Props>) {
  const title = movie.title ?? movie.name ?? "";

  return (
    <Link
      href={`/${path}/${movie.id}`}
      className="group relative flex flex-col rounded-xl overflow-hidden bg-gray-900 border border-white/5 shadow-md hover:shadow-xl hover:shadow-liteBlue/10 hover:border-liteBlue/25 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={getSrc(movie.poster_path || movie.backdrop_path)}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          loading="lazy"
        />

        {/* Persistent bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

        {/* Rating badge */}
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
          <FaStar className="text-yellow-400 text-[9px]" />
          <span className="text-white text-[11px] font-bold leading-none">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>

        {/* Hover play overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-liteBlue flex items-center justify-center shadow-lg shadow-liteBlue/50 scale-75 group-hover:scale-100 transition-transform duration-300">
            <FaPlay className="text-white text-sm ml-0.5" />
          </div>
        </div>
      </div>

      {/* Title footer */}
      <div className="px-3 py-2.5 bg-gray-900">
        <h2 className="font-semibold text-sm text-white truncate">{title}</h2>
        <p className="text-gray-500 text-xs mt-0.5">
          {movie.vote_count.toLocaleString()} votes
        </p>
      </div>
    </Link>
  );
}
