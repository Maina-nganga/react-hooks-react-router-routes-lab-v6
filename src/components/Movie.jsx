// src/components/Movie.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { movies, } from "../data";

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  // ✅ Handle invalid or missing movie IDs gracefully
  if (!movie) {
    return (
      <div>
        <NavBar />
        <h1>Oops! Looks like something went wrong.</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <div>
        {movie.genres.map((genre) => (
          <span key={genre}>{genre}</span>
        ))}
      </div>
    </div>
  );
};

export default Movie;
