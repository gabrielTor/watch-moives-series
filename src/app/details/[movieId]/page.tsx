import { getMovieById } from "@/_actions/getAction";
import { getYouTubeId } from "@/utils";
import Link from "next/link";

interface Props {
  params: { movieId: string };
}

export default async function page({ params }: Props) {
  const movie = await getMovieById(params.movieId);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">{movie?.title}</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3">
          <img
            src={movie?.poster}
            alt={movie?.title}
            className="rounded-lg mb-4"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-4">
          <p>
            <strong>Year:</strong> {movie?.year}
          </p>
          <p>
            <strong>Plot Overview:</strong> {movie?.plot_overview}
          </p>
          <p>
            <strong>Runtime Minutes:</strong> {movie?.runtime_minutes}
          </p>
          <p>
            <strong>Release Date:</strong> {movie?.release_date}
          </p>
          <p>
            <strong>Genres:</strong> {movie?.genre_names?.join(", ")}
          </p>
          <p>
            <strong>Type:</strong> {movie?.type}
          </p>
          {movie?.trailer && (
            <div className="mt-4">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  movie.trailer
                )}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <strong className="mt-4 block">Sources:</strong>
          <ul className="list-disc pl-4">
            {movie?.sources?.map((source, index) => (
              <li key={index}>
                <Link
                  href={source.web_url}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {source.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
