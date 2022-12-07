import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import AddCart from "../Pages/AddCart/AddCart";
import BestItems from "../Pages/BestReating/BestItems";
import Home from "../Pages/Home/Home";
import Report from "../Pages/Report/Report";

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
      {
        path: "mycart",
        element: <AddCart />,
      },
      {
        path: "report",
        element: <Report />,
      },
    ],
  },
]);

export default routes;
