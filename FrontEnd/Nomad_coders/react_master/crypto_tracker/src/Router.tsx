import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

// 라우터 컴포넌트
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
      },
    ],
  },
]);

export default router;
