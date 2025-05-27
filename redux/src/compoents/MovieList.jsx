import React from "react";
import { useSelector } from "react-redux";

function MovieList() {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div>
      <h1>MovieList</h1>
      {movies.map((m) => (
        <div key={m.id}>
          <h2>{m.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
