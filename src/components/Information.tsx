"use client";
import { useState } from "react";
import { FaExternalLinkAlt, FaLink } from "react-icons/fa";

export default function Information({
  overview,
  runtime,
  release_date,
  genres,
  status,
}: Readonly<Partial<MovieData>>) {
  const [hasCopied, setHasCopied] = useState<string>("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window?.location?.href)
      .then(() => setHasCopied("Link copied!"))
      .catch(console.error);
  };

  return (
    <article className="bg-navy rounded-lg p-4 relative">
      <p>
        <strong>Plot Overview:</strong> {overview}
      </p>
      <p>
        <strong>Duration:</strong> {runtime} min
      </p>
      <p>
        <strong>Release Date:</strong> {release_date}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>Genres:</strong> {genres?.map((g) => g.name)?.join(", ")}
      </p>
      <span className="flex items-center gap-2 flex-wrap">
        <p className="sm:hidden">Copy and share this link</p>
        <button
          onClick={copyToClipboard}
          className="sm:absolute bottom-2 right-2 p-2 hover:bg-blue-900 rounded-lg flex items-center gap-2"
        >
          {hasCopied && <p className="sm:block hidden">{hasCopied}</p>}
          <FaLink className="text-lg" />
        </button>
        <p className="sm:hidden">{hasCopied}</p>
      </span>
    </article>
  );
}

export function MovieInfo({ movie }: { movie: MovieData }) {
  const [hasCopied, setHasCopied] = useState<string>("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window?.location?.href)
      .then(() => setHasCopied("Link copied!"))
      .catch(console.error);
  };

  return (
    <article className="bg-navy rounded-lg p-6 relative mb-6">
      <p className="mb-3">
        <strong>Plot Overview:</strong> {movie.overview}
      </p>
      <p className="mb-2">
        <strong>Duration:</strong> {movie.runtime} min
      </p>
      <p className="mb-2">
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p className="mb-2">
        <strong>Status:</strong> {movie.status}
      </p>
      <p className="mb-2">
        <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
      </p>

      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <FaLink />
          <span>{hasCopied}</span>
        </button>

        {movie.homepage && (
          <a
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Official Site</span>
          </a>
        )}
      </div>
    </article>
  );
}
