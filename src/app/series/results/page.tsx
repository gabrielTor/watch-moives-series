import { getSearchedSeries } from "@/actions/get";
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
  const data = await getSearchedSeries(searchParams.search, searchParams.page);

  return (
    <section className="p-4 max-w-8xl mx-auto">
      {data?.total_results === 0 && (
        <div className="grid place-items-center h-[70dvh] text-xl font-bold">
          <article>Sorry no TV shows found with {searchParams.search}</article>
        </div>
      )}
      <Movies movies={data?.results} path="series" />
      <PageNumbers amountOfPages={data!.total_pages} currentPage={data!.page} />
    </section>
  );
}
