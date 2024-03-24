import { getSeries } from "@/actions/get";
import PageNumbers from "@/components/PageNumbers";
import Series from "./_components/Series";

interface Props {
  searchParams: { page: string };
}

export default async function page({ searchParams }: Readonly<Props>) {
  const tv = await getSeries(searchParams.page);

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <Series shows={tv?.results} />
      <PageNumbers amountOfPages={tv!.total_pages} currentPage={tv!.page} />
    </section>
  );
}
