import { getMovies } from "@/actions/get";
import Movies from "@/components/Movies";
import PageNumbers from "@/components/PageNumbers";

interface Props {
  searchParams: { page?: string; type?: string };
}

const maxPageNumber = 500;

export default async function Home({ searchParams }: Readonly<Props>) {
  const rawPage = Number(searchParams.page) || 1;
  const page = Math.max(1, Math.min(rawPage, maxPageNumber));
  const type = searchParams.type;

  const movies = await getMovies(String(page), type);

  return (
    <section className="p-4 max-w-8xl mx-auto">
      <Movies movies={movies?.results} />
      <PageNumbers amountOfPages={maxPageNumber} currentPage={page} />
    </section>
  );
}
