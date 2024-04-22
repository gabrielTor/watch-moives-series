import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import Link from "next/link";
import RatingComponent from "./Rating";

interface Props {
  movies?: MovieResults[];
  path?: string;
}

const truncateText = (text: string) => {
  if (text.length > 110) {
    return text.slice(0, 110) + "...";
  }
  return text;
};

export default function Movies({ movies, path = "movie" }: Readonly<Props>) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies?.map((movie) => (
        <Link
          href={`/${path}/${movie.id}`}
          key={movie.id}
          className="group bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-200"
        >
          <Image
            //@ts-ignore
            src={getSrc(movie.poster_path || movie.backdrop_path)}
            alt={movie?.title ?? movie?.name}
            className="w-full h-48 object-cover"
            width={800}
            height={800}
            loading="lazy"
          />
          <RatingComponent
            popularity={movie.popularity}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
          <div className="p-4 grid gap-2">
            <h2 className="text-xl font-bold truncate text-navy">
              {movie?.title ?? movie?.name}
            </h2>
            <p className="text-gray-700 leading-tight text-sm overflow-hidden max-h-24">
              {truncateText(movie.overview)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
