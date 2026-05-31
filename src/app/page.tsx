import Movies from "@/components/Movies";
import dynamic from "next/dynamic";
import { getMovies } from "@/actions/get";
import { getValidPage, maxPageNumber } from "@/utils/getValidPage";
import HeroSection from "@/components/HeroSection";
import CategoryTabs from "@/components/CategoryTabs";
import PageHeader from "@/components/PageHeader";
import { Suspense } from "react";

const PageNumbers = dynamic(() => import("@/components/PageNumbers"));

interface Props {
  searchParams: Promise<{ page?: string; type?: string }>;
}

const sectionTitles: Record<string, string> = {
  upcoming: "Upcoming Movies",
  top_rated: "Top Rated Movies",
};

export default async function Home({ searchParams }: Readonly<Props>) {
  const { page: pageParam, type } = await searchParams;
  const page = getValidPage(pageParam);
  const movies = await getMovies(page, type);

  const featured = movies?.results?.[0];
  const showHero = page === "1" && !type && !!featured;

  return (
    <div>
      {showHero && <HeroSection item={featured!} />}

      <section className="p-4 md:p-6 max-w-8xl mx-auto">
        <PageHeader title={sectionTitles[type ?? ""] ?? "Trending Now"} />
        <CategoryTabs currentType={type ?? ""} />
        <Movies movies={movies?.results} />
        <Suspense>
          <PageNumbers amountOfPages={maxPageNumber} currentPage={+page} />
        </Suspense>
      </section>
    </div>
  );
}
