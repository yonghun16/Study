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
