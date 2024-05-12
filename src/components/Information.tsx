"use client";
import { useState } from "react";
import { FaLink } from "react-icons/fa";

export default function Information({
  overview,
  runtime,
  release_date,
  genres,
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
