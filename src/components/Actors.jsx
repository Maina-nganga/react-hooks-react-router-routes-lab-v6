import React from "react";

const ACTORS = [
  {
    id: 1,
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    id: 2,
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  { id: 3, name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] },
  {
    id: 4,
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {ACTORS.map((actor) => (
        <div key={actor.id}>
          <h3>{actor.name}</h3>
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
