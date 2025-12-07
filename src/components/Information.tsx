"use client";
import { ReactNode, useState } from "react";
import { FaLink } from "react-icons/fa";
import { OfficialWebsite } from "./OfficialWebsite";

export function MovieInfo({ movie }: { movie: MovieData }) {
  const [hasCopied, setHasCopied] = useState<null | ReactNode>(null);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window?.location?.href)
      .then(() => setHasCopied(<span>Link copied!</span>))
      .catch(console.error);
    setTimeout(() => setHasCopied(null), 5000);
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
          className={`inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors ${
            hasCopied ? "px-6 py-3" : "p-4"
          }`}
        >
          <FaLink />
          {hasCopied}
        </button>

        <OfficialWebsite homepageLink={movie?.homepage} />
      </div>
    </article>
  );
}
