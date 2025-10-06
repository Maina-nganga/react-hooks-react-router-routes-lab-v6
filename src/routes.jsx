// src/routes.jsx
import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movie from "./components/Movie";
import ErrorPage from "./components/ErrorPage";
import App from "./App";

const routes = [
  {
    path: "/", // Root route
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "actors",
        element: <Actors />,
      },
      {
        path: "directors",
        element: <Directors />,
      },
      {
        path: "movie/:id", // ✅ Matches your tests (singular)
        element: <Movie />,
      },
    ],
  },
];

export default routes;
