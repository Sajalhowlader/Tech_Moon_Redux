import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import BestItems from "../Pages/BestReating/BestItems";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "best_items",
        element: <BestItems />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
