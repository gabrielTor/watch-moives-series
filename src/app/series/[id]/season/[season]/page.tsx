import { getEpisodesBySeason } from "@/actions/get";
import Show from "@/app/series/_components/Show";

interface Props {
  params: { season: string; id: string };
}

export default async function page({ params: { id, season } }: Props) {
  const episodes = await getEpisodesBySeason(id, season);

  return <Show />;
}
