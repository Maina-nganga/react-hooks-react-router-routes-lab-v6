import React from "react";
import { NavLink } from "react-router-dom";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <nav className="navbar" role="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/directors">Directors</NavLink>
      </nav>
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
