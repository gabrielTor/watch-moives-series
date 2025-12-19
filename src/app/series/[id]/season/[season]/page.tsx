import { getEpisodesBySeason } from "@/actions/get";
import { SeasonHeader } from "./_components/SeasonHeader";
import { NowPlayingInfo } from "./_components/NowPlayingInfo";
import { SeriesVideoPlayer } from "@/components/VideoPlayer";
import { EpisodeCard } from "./_components/EpisodeCard";

interface Props {
  params: { season: string; id: string };
  searchParams: { episode?: string };
}

const imageBase = "https://image.tmdb.org/t/p/";

export const revalidate = 3600 * 24;

export default async function page({
  params: { id, season },
  searchParams,
}: Props) {
  const seasonData = await getEpisodesBySeason(id, season);
  const currentEpisode = searchParams.episode
    ? parseInt(searchParams.episode)
    : 1;

  if (!seasonData) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-xl text-gray-400">Season not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-8xl mx-auto px-4 py-8">
        <SeasonHeader seasonData={seasonData} />

        <div className="mb-8">
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-900">
            <SeriesVideoPlayer
              imdb_id={id}
              season={season}
              episode={currentEpisode}
            />
          </div>
          <NowPlayingInfo
            episode={seasonData.episodes[currentEpisode - 1]}
            currentEpisode={currentEpisode}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>
          <div className="space-y-3">
            {seasonData.episodes?.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
                isPlaying={episode.episode_number === currentEpisode}
                imageBase={imageBase}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
