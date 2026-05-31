import { FaSearch } from "react-icons/fa";

interface Props {
  query: string;
  totalResults: number;
  mediaType?: "movies" | "TV shows";
}

export default function SearchResultsHeader({
  query,
  totalResults,
  mediaType = "movies",
}: Readonly<Props>) {
  const found = totalResults > 0;

  return (
    <div className="mb-8 pt-2">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 w-9 h-9 rounded-full bg-liteBlue/15 flex items-center justify-center flex-shrink-0 border border-liteBlue/20">
          <FaSearch className="text-liteBlue text-sm" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white">
            {found ? "Results for " : "No results for "}
            <span className="text-liteBlue">&ldquo;{query}&rdquo;</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {found
              ? `Found ${totalResults.toLocaleString()} ${mediaType}`
              : `We couldn't find any ${mediaType} matching your search. Try different keywords.`}
          </p>
        </div>
      </div>
    </div>
  );
}
