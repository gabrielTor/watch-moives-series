import { getMovies } from "@/actions/get";
import Movies from "@/components/Movies";

export default async function Home() {
  const movies = await getMovies();

  return (
    <section className="p-4">
      <Movies movies={movies?.results} />
    </section>
  );
}
