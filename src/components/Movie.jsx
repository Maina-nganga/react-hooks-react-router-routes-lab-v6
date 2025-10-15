import React from "react";
import { useParams } from "react-router-dom";

const MOVIES = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
  { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"] },
  { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"] },
];

function Movie() {
  const { id } = useParams();
  const movie = MOVIES.find((m) => String(m.id) === String(id));

  if (!movie) return <h1>Not Found!</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((g) => (
          <span key={g}>{g}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
