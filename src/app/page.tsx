import { getMovies } from "@/actions/get";
import Movies from "@/components/Movies";
import PageNumbers from "@/components/PageNumbers";

interface Props {
  searchParams: { page: string };
}

export default async function Home({ searchParams }: Props) {
  const movies = await getMovies(searchParams.page);

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <Movies movies={movies?.results} />
      <PageNumbers
        amountOfPages={movies!.total_pages}
        currentPage={movies!.page}
      />
    </section>
  );
}
