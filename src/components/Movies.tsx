import React from "react";

interface Props {
  movies?: any[];
}

export default function Movies({ movies }: Props) {
  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie._id}>{movie.title}</li>
      ))}
    </ul>
  );
}
