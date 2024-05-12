// RatingComponent.tsx
import React from "react";

interface RatingComponentProps {
  voteAverage: number; // Float representing average votes
  voteCount: number; // Total number of votes
  popularity: number; // Float representing popularity
}

export default function RatingComponent({
  voteAverage,
  voteCount,
  popularity,
}: Readonly<RatingComponentProps>) {
  return (
    <div className="text-gray-300 p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Rating</h3>
        <span className="text-liteBlue text-xl font-bold">
          {voteAverage.toFixed(1)}{" "}
          <span className="text-liteBlue text-base">/ 10</span>
        </span>
      </div>
      <p className="text-xs">
        Votes:{" "}
        <span className="font-semibold">{voteCount.toLocaleString()}</span>
      </p>
      <p className="text-xs">
        Popularity:{" "}
        <span className="font-semibold">{popularity.toFixed(1)}</span>
      </p>
    </div>
  );
}
