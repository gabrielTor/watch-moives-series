import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import Link from "next/link";
import RatingComponent from "./Rating";
import { truncateText } from "@/utils/truncate";

interface Props {
  movies?: MovieResults[];
  path?: string;
}

export default function Movies({ movies, path = "movie" }: Readonly<Props>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies?.map((movie) => (
        <Link
          href={`/${path}/${movie.id}`}
          key={movie.id}
          className="group bg-blue-50 rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
        >
          <Image
            src={getSrc(movie.poster_path || movie.backdrop_path)}
            alt={movie?.title ?? movie?.name}
            className="w-full h-48 object-cover"
            width={800}
            height={800}
            loading="lazy"
          />
          <section className="bg-gradient-to-b from-navy via-blue-400 to-blue-50">
            <RatingComponent
              popularity={movie.popularity}
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
            />
            <div className="p-4 pt-0 grid gap-2">
              <h2 className="text-xl font-bold truncate text-navy">
                {movie?.title ?? movie?.name}
              </h2>
              <p className="text-gray-900 leading-tight text-sm overflow-hidden max-h-24">
                {truncateText(movie.overview)}
              </p>
            </div>
          </section>
        </Link>
      ))}
    </div>
  );
}
