import { getMovieById, getReviews } from "@/actions/get";
import { Metadata } from "next";
import VideoPlayer from "@/components/VideoPlayer";
import YoutubeTrailer from "@/components/YoutubeTrailer";
import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import Information from "@/components/Information";
import { Reviews } from "@/components/Reviews";

interface Props {
  params: { movieId: string };
}

export const revalidate = 3600 * 24;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie = await getMovieById(params.movieId);

  return {
    openGraph: {
      siteName: "Ctrl+Stream",
      images: [
        {
          url: getSrc(movie?.poster_path ?? movie?.backdrop_path),
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL}/movie/${params.movieId}`,
      title: movie?.original_title,
      description: movie?.overview,
    },
  };
}

export default async function page({ params }: Props) {
  const [movie, reviews] = await Promise.all([
    getMovieById(params.movieId),
    getReviews(params.movieId),
  ]);
  return (
    <div className="max-w-8xl mx-auto p-4 text-white">
      <h2 className="text-3xl font-bold mb-4 bg-navy rounded-lg p-4">
        {movie?.title}
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <Image
            src={getSrc(movie?.poster_path ?? movie?.backdrop_path)}
            alt={movie?.title as string}
            className="rounded-lg mb-4 w-full"
            width={5000}
            height={5000}
            placeholder="blur"
            blurDataURL={movie?.blurredImage}
          />
        </div>
        <div className="w-full lg:w-2/3 lg:pl-4 flex flex-col">
          <Information {...movie} />
          <VideoPlayer imdb_id={movie!.id} title={movie?.title} />
        </div>
        <Reviews {...reviews!} />
        {movie?.videos?.results?.length ? (
          <h3 className="text-xl font-semibold bg-navy rounded-lg p-4 w-full">
            Trailers & Shorts
          </h3>
        ) : (
          <></>
        )}
        <div className="mt-4 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full">
          {movie?.videos?.results.map((video) => (
            <YoutubeTrailer trailerId={video.key} key={video.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
