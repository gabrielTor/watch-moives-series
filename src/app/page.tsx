import { getMovies } from "@/_actions/getAction";
import Movies from "@/components/Movies";

export default async function Home() {
  const movies = await getMovies();

  return (
    <main className="p-4 bg-slate-700">
      <Movies movies={movies} />
    </main>
  );
}
