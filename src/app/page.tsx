import Movies from "@/components/Movies";
import dynamic from "next/dynamic";
import { getMovies } from "@/actions/get";
import { getValidPage, maxPageNumber } from "@/utils/getValidPage";

const PageNumbers = dynamic(() => import("@/components/PageNumbers"), {
  ssr: false,
});

interface Props {
  searchParams: { page?: string; type?: string };
}

export default async function Home({ searchParams }: Readonly<Props>) {
  const page = getValidPage(searchParams.page);
  const type = searchParams.type;
  const movies = await getMovies(page, type);

  return (
    <section className="p-4 max-w-8xl mx-auto">
      <Movies movies={movies?.results} />
      <PageNumbers amountOfPages={maxPageNumber} currentPage={+page} />
    </section>
  );
}
