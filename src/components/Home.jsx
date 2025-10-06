// src/components/Home.jsx
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Doctor Strange", time: 115 },
  { id: 2, title: "Interstellar", time: 169 },
  { id: 3, title: "Inception", time: 148 },
];

function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Info</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
