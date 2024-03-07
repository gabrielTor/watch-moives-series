import { getMovieDetails, getMovies } from "@/_actions/getAction";
import Movies from "@/components/Movies";

export default async function Home() {
  const movies = await getMovies();

  return (
    <main className="">
      <Movies movies={movies} />
    </main>
  );
}
