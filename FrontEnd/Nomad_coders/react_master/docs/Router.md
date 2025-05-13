# Router 

### BrowserRouter (v5)
- Router 밖에서는 Link를 render 할 수 없다. Link를 사용하려면 Link를 Router 안에 넣어야 한다. 
  - \<Link> 컴포넌트는 반드시 \<BrowserRouter>(또는 \<Router>) 내부에서 사용되어야 한다
```tsx
//app.tsx
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";
import About from "./screens/About";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
```
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

### createBrowserRouter (v6)
- 라우터 구성을 더 명시적이고 유연하게 정의할 수 있음
- 객체 기반으로 라우트 구성 배열함.
```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
```
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
```tsx
// Home.tsx
import { Link } from "react-router-dom";
import { users } from "../db";

function Home() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</ Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
```
```tsx
// user.tsx
import { useParams } from "react-router-dom";
import { users } from "../../db" ;

function User() {
  const { userId } = useParams();
  return (
    <h1>
      User with it {userId} is named: {users[Number(userId)-1].name}
    </h1>
  )
}

export default User;
```

### useLocation
- useLocation()은 React Router에서 제공하는 훅으로, 현재 URL에 대한 정보를 가져옴.
- useLocation()이 하는 일
 - 현재 브라우저의 경로 (pathname)
 - 검색 쿼리 (search)
 - 해시 (hash)
 - Link나 navigate()로 전달된 state 값
- 등을 포함하는 location 객체를 반환합니다.

```tsx
    <Link 
      to={{
        pathname: `/${coin.id}`
      }} 
      state={{ name: coin.name }}  // state를 따로 전달
    >
      <Img 
        src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${coin.symbol.toLowerCase()}.png`} 
      />
      {coin.name} &rarr;
    </Link>
```
```tsx
import { useLocation } from "react-router-dom";

function CoinDetail() {
  // const location = useLocation();
  const { state } = useLocation() as { state: { name: string } };   // 타입 정의
  console.log(location.state);   // { name: "Bitcoin" } 같은 데이터가 들어옴

  return <h1>{location.state?.name} 페이지</h1>;
}
```

### useMatch
#### 사용법
- match는 현재 경로가 /about와 일치하면 **match 객체**, 아니면 **null**을 반환.
- 따라서 if (match)로 불리언처럼 사용할 수는 있지만, 실제 반환값은 객체 or null.

```tsx
import { useMatch } from "react-router-dom";

const match = useMatch("/about");
```
#### 반환되는 match 객체 예시
```tsx
{
  params: {},           // 동적 세그먼트가 있을 경우 경로 변수
  pathname: "/about",   // 일치한 경로
  pathnameBase: "/about",
  pattern: { path: "/about", caseSensitive: false, end: true }
}
```
