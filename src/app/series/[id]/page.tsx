import { getSeriesById } from "@/actions/get";
import { OfficialWebsite } from "@/components/OfficialWebsite";
import { SeriesHero } from "@/app/series/_components/SeriesHero";
import { SeriesOverview } from "@/app/series/_components/SeriesOverview";
import { SeriesDetailsGrid } from "@/app/series/_components/SeriesDetailsGrid";
import { SeriesCreators } from "@/app/series/_components/SeriesCreators";
import { SeriesEpisodeSection } from "@/app/series/_components/SeriesEpisodeSection";
import { SeriesSeasons } from "@/app/series/_components/SeriesSeasons";
import { SeriesNetworks } from "@/app/series/_components/SeriesNetworks";
import { SeriesProductionCompanies } from "@/app/series/_components/SeriesProductionCompanies";
import { SeriesAdditionalInfo } from "@/app/series/_components/SeriesAdditionalInfo";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export const revalidate = 86400;
const imageBase = "https://image.tmdb.org/t/p/";

export default async function page({ params }: Props) {
  const { id } = await params;
  const tvShow = await getSeriesById(id);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <SeriesHero tvShow={tvShow} imageBase={imageBase} />

      <div className="max-w-8xl mx-auto px-8 py-12 space-y-12">
        <SeriesOverview overview={tvShow?.overview} />
        <SeriesDetailsGrid tvShow={tvShow} />
        <SeriesCreators creators={tvShow?.created_by} imageBase={imageBase} />
        <Link
          href={`/series/${id}/season/${tvShow?.last_episode_to_air?.season_number}?episode=${tvShow?.last_episode_to_air?.episode_number}`}
        >
          <SeriesEpisodeSection
            title="Last Episode"
            episode={tvShow?.last_episode_to_air}
            imageBase={imageBase}
          />
        </Link>
        <SeriesEpisodeSection
          title="Next Episode"
          episode={tvShow?.next_episode_to_air}
          imageBase={imageBase}
          variant="gradient"
        />
        <SeriesSeasons
          seasons={tvShow?.seasons}
          imageBase={imageBase}
          id={id}
        />
        <SeriesNetworks networks={tvShow?.networks} imageBase={imageBase} />
        <SeriesProductionCompanies
          companies={tvShow?.production_companies}
          imageBase={imageBase}
        />
        <SeriesAdditionalInfo tvShow={tvShow} />
        <OfficialWebsite homepageLink={tvShow?.homepage} />
      </div>
    </div>
  );
}
