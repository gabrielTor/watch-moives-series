import Image from "next/image";
import Link from "next/link";

interface Props {
  movies?: Movie[];
}

export default function Movies({ movies }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies?.map((movie) => (
        <Link
          href={`/details/${movie._id}`}
          key={movie._id}
          className="group bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
        >
          <Image
            //@ts-ignore
            src={movie.poster}
            alt={movie.title}
            className="w-full h-48 object-cover"
            width={5000}
            height={5000}
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-700">{movie.plot_overview}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
