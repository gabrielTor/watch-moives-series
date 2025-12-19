import Movies from "@/components/Movies";
import dynamic from "next/dynamic";
import { getSeries } from "@/actions/get";
import { getValidPage, maxPageNumber } from "@/utils/getValidPage";

const PageNumbers = dynamic(() => import("@/components/PageNumbers"), {
  ssr: false,
});

interface Props {
  searchParams: { page: string };
}

export default async function page({ searchParams }: Readonly<Props>) {
  const page = getValidPage(searchParams.page);
  const tv = await getSeries(page);

  return (
    <section className="p-4 max-w-8xl mx-auto">
      <Movies movies={tv?.results} path="series" />
      <PageNumbers amountOfPages={maxPageNumber} currentPage={+page} />
    </section>
  );
}
