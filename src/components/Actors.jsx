import React from "react";
import { NavLink } from "react-router-dom";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <nav className="navbar" role="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/directors">Directors</NavLink>
      </nav>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
