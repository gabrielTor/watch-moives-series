import Movies from "@/components/Movies";
import SearchResultsHeader from "@/components/SearchResultsHeader";
import dynamic from "next/dynamic";
import { getSearchedSeries } from "@/actions/get";
import { Suspense } from "react";

const PageNumbers = dynamic(() => import("@/components/PageNumbers"));

interface Props {
  searchParams: Promise<{
    search: string;
    page: string;
  }>;
}

export const revalidate = 86400;

export default async function page({ searchParams }: Props) {
  const { search, page } = await searchParams;
  const data = await getSearchedSeries(search, page);

  return (
    <section className="p-4 md:p-6 max-w-8xl mx-auto">
      <SearchResultsHeader
        query={search}
        totalResults={data?.total_results ?? 0}
        mediaType="TV shows"
      />
      {(data?.total_results ?? 0) > 0 && (
        <>
          <Movies movies={data?.results} path="series" />
          <Suspense>
            <PageNumbers
              amountOfPages={data!.total_pages}
              currentPage={data!.page}
            />
          </Suspense>
        </>
      )}
    </section>
  );
}
