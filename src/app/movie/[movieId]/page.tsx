import { getMovieById } from "@/actions/get";
import VideoPlayer from "@/components/VideoPlayer";
import YoutubeTrailer from "@/components/YoutubeTrailer";
import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";

interface Props {
  params: { movieId: string };
}

export const revalidate = 3600 * 24;

export default async function page({ params }: Props) {
  const movie = await getMovieById(params.movieId);
  return (
    <div className="container mx-auto p-4 text-white">
      <h2 className="text-3xl font-bold mb-2">{movie?.title}</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <Image
            //@ts-ignore
            src={getSrc(movie?.poster_path)}
            alt={movie?.title as string}
            className="rounded-lg mb-4 w-full"
            width={5000}
            height={5000}
          />
        </div>
        <div className="w-full lg:w-2/3 lg:pl-4 flex flex-col">
          <p>
            <strong>Year:</strong> {movie?.release_date}
          </p>
          <p>
            <strong>Plot Overview:</strong> {movie?.overview}
          </p>
          <p>
            <strong>Duration:</strong> {movie?.runtime} min
          </p>
          <p>
            <strong>Release Date:</strong> {movie?.release_date}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie?.genres?.map((g) => g.name)?.join(", ")}
          </p>
          <VideoPlayer imdb_id={movie!.id} title={movie?.title} />
        </div>
        <h3 className="text-xl font-semibold">Trailers & Shorts</h3>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full">
          {movie?.videos?.results.map((video) => (
            <YoutubeTrailer trailerId={video.key} key={video.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
