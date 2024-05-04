import App from "../../App";
import About from "../pages/about";
import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/contact";
import Hero from "../pages/hero";
import Projects from "../pages/projects";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);
