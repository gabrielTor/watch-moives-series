import { getSearchedMovies } from "@/actions/get";
import Movies from "@/components/Movies";
import PageNumbers from "@/components/PageNumbers";

interface Props {
  searchParams: {
    search: string;
    page: string;
  };
}

export default async function page({ searchParams }: Props) {
  const data = await getSearchedMovies(searchParams.page, searchParams.search);

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <Movies movies={data?.results} />
      <PageNumbers amountOfPages={data!.total_pages} currentPage={data!.page} />
    </section>
  );
}
