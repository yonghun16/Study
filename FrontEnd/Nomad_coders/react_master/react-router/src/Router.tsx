import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import User from "./screens/users/User";
import ErrorPage from "./screens/ErrorPage";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users/:userId",
        element: <User />,
        children : [
          {
            path: "followers",
            element: <Followers />
          }
        ]
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router
