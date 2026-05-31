import MovieCard from "./MovieCard";

interface Props {
  movies?: MovieResults[];
  path?: string;
}

export default function Movies({ movies, path = "movie" }: Readonly<Props>) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} path={path} />
      ))}
    </div>
  );
}
