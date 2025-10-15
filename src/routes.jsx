import App from "./App";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movie from "./components/Movie";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oops! Looks like something went wrong.</h1>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/actors", element: <Actors /> },
      { path: "/directors", element: <Directors /> },
      { path: "/movie/:id", element: <Movie /> },
      { path: "*", element: <h1>Oops! Looks like something went wrong.</h1> },
    ],
  },
];

export default routes;
