import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import Link from "next/link";

interface Props {
  movies?: MovieResults[];
}

const truncateText = (text: string) => {
  if (text.length > 110) {
    return text.slice(0, 110) + "...";
  }
  return text;
};

export default function Movies({ movies }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies?.map((movie) => (
        <Link
          href={`/movie/${movie.id}`}
          key={movie.id}
          className="group bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
        >
          <Image
            //@ts-ignore
            src={getSrc(movie.poster_path || movie.backdrop_path)}
            alt={movie?.title || movie?.name}
            className="w-full h-48 object-cover"
            width={800}
            height={800}
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 truncate">
              {movie?.title || movie?.name}
            </h2>
            <p className="text-gray-700 overflow-hidden max-h-24">
              {truncateText(movie.overview)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
