import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import NotAuthRoutes from "./componants/NotAuthRoutes";
import ProtectedRoutes from "./componants/ProtectedRoutes";

const App = lazy(() => import("./App"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ProtectedPage = lazy(() => import("./pages/ProtectedPage"));


// 라우터 컴포넌트
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        /* 로그인과 상관없이 갈 수 있는 경로 */
        path: "/",
        element: <LandingPage />,
      },
      {
        /* 로그인 하지 않은 사람은 못 들어감 */
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/protected",
            element: <ProtectedPage />,
          },
        ],
      },
      {
        /* 로그인한 사람은 못 들어감 */
        element: <NotAuthRoutes />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
