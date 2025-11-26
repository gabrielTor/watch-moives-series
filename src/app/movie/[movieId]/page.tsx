import getSrc from "@/utils/getFullImgSrc";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import { MovieTrailers } from "@/components/YoutubeTrailer";
import { MovieInfo } from "@/components/Information";
import { getMovieById, getReviews } from "@/actions/get";
import { MovieReviews } from "@/components/Reviews";
import { Metadata } from "next";
import { MovieHero } from "@/components/MovieHero";

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
    <div className="min-h-screen bg-gray-950 text-white">
      <MovieHero movie={movie!} />

      <div className="max-w-8xl mx-auto p-4">
        <div className="flex flex-wrap mb-6">
          {/* Left Column - Poster */}
          <div className="w-full lg:w-1/3">
            <Image
              src={getSrc(movie?.poster_path ?? movie?.backdrop_path)}
              alt={movie?.title as string}
              className="rounded-lg w-full"
              width={500}
              height={750}
              placeholder="blur"
              blurDataURL={movie?.blurredImage}
            />
          </div>

          {/* Right Column - Info & Player */}
          <div className="w-full lg:w-2/3 lg:pl-4 flex flex-col">
            <MovieInfo movie={movie!} />
            <VideoPlayer imdb_id={movie!.id} title={movie?.title} />
          </div>
        </div>

        {/* Full Width Sections */}
        <MovieReviews reviews={reviews!} />
        <MovieTrailers videos={movie?.videos?.results ?? []} />
      </div>
    </div>
  );
}
