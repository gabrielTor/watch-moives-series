"use client";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { OfficialWebsite } from "./OfficialWebsite";

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

        <OfficialWebsite homepageLink={movie?.homepage} />
      </div>
    </article>
  );
}
