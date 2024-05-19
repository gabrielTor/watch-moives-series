import { getSearchedMovies } from "@/actions/get";
import Movies from "@/components/Movies";
import PageNumbers from "@/components/PageNumbers";

interface Props {
  searchParams: {
    search: string;
    page: string;
  };
}

export const revalidate = 3600 * 24;

export default async function page({ searchParams }: Props) {
  const data = await getSearchedMovies(searchParams.search, searchParams.page);

  return (
    <section className="p-4 max-w-8xl mx-auto">
      {!data?.results?.length && (
        <div className="grid place-items-center h-[70dvh] text-xl font-bold">
          <article>
            Sorry no movies/series found with {searchParams.search}
          </article>
        </div>
      )}
      <Movies movies={data?.results} />
      <PageNumbers amountOfPages={data!.total_pages} currentPage={data!.page} />
    </section>
  );
}
