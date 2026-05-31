import Movies from "@/components/Movies";
import dynamic from "next/dynamic";
import { getSeries } from "@/actions/get";
import { getValidPage, maxPageNumber } from "@/utils/getValidPage";
import HeroSection from "@/components/HeroSection";
import PageHeader from "@/components/PageHeader";
import { Suspense } from "react";

const PageNumbers = dynamic(() => import("@/components/PageNumbers"));

interface Props {
  searchParams: Promise<{ page: string }>;
}

export default async function page({ searchParams }: Readonly<Props>) {
  const { page: pageParam } = await searchParams;
  const page = getValidPage(pageParam);
  const tv = await getSeries(page);

  const featured = tv?.results?.[0];
  const showHero = page === "1" && !!featured;

  return (
    <div>
      {showHero && <HeroSection item={featured!} path="series" />}

      <section className="p-4 md:p-6 max-w-8xl mx-auto">
        <PageHeader title="Popular TV Shows" />
        <Movies movies={tv?.results} path="series" />
        <Suspense>
          <PageNumbers amountOfPages={maxPageNumber} currentPage={+page} />
        </Suspense>
      </section>
    </div>
  );
}
