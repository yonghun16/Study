# Router 

### BrowserRouter
- Router 밖에서는 Link를 render 할 수 없다. Link를 사용하려면 Link를 Router 안에 넣어야 한다. 
  - \<Link> 컴포넌트는 반드시 \<BrowserRouter>(또는 \<Router>) 내부에서 사용되어야 한다
```tsx
// Header.tsx
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
```
```tsx
//app.tsx
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
```

### createBrowserRouter
- 라우터 구성을 더 명시적이고 유연하게 정의할 수 있음
- 객체 기반으로 라우트 구성 배열함.
```tsx
// Router.tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";

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
    ],
  },
]);

export default router
```
```tsx
// Root.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
```

### errorElement
```tsx
// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useRouteError, RouteObject, } from "react-router-dom";

// Home 컴포넌트
function Home(): JSX.Element {
  return <h1>홈페이지</h1>;
}

// 일부러 오류를 발생시키는 컴포넌트
function About(): JSX.Element {
  throw new Error("이 페이지는 오류가 발생했습니다.");
}

// 에러 페이지 컴포넌트
function ErrorPage(): JSX.Element {
  const error = useRouteError() as Error;

  return (
    <div>
      <h2>⚠️ 오류 발생</h2>
      <p>{error?.message || "알 수 없는 오류입니다."}</p>
    </div>
  );
}

// 라우터 정의
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
] as RouteObject[]);

// 렌더링
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```


### useNavigate
- 프로그래밍 방식으로 페이지를 이동(navigation)하기 위해 사용. 
- 즉, 사용자의 직접적인 클릭 없이도 자바스크립트 코드로 라우팅을 제어할 수 있게 해줌
```tsx
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const onAboutClick = () => {
    navigate("/about");
  }
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  )
}

export default Header
```

### useParams
- useParams()는 URL 경로에서 :파라미터 형태로 정의된 값을 객체로 반환.
- 반환값은 항상 문자열(string) 이므로, 필요하면 숫자로 변환해야 함: Number(params.id) 등.
