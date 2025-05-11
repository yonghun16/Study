# Outlet

### Outlet
- 현재 라우트의 자식 컴포넌트를 렌더링하는 자리 표시자.
    - 간단히 말해서, 부모 라우트가 자식 라우트를 렌더링할 위치를 지정하는 역할
- \<Outlet />은 부모 라우트 컴포넌트 내부에 위치.
- 현재 경로에 맞는 __자식 라우트가 있으면__ 그 컴포넌트를 \<Outlet /> 위치에 렌더링.
    - 자식 라우트가 없으면 아무것도 렌더링되지 않음.

### 기본 사용법
```tsx
// Router.tsx
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
    element: <Root />,                      // "<Root>"경로의 자식으로 <Home>, <About>, <User>
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
        element: <User />,                  // "<User>"경로의 자식으로 <Followrs>
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
```
```tsx
// User.tsx
import { Outlet, Link, useParams } from "react-router-dom";
import { users } from "../../db" ;

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId)-1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>             // followers 링크를 열면
      <Outlet />                                            // 현재 라우터의 자식 라우트 컴포넌트를 <outlet>을 통해 렌더함.
    </div>
  )
}

export default User;
```

### OutletContext
- OutletContext를 사용하면 부모 컴포넌트에서 Outlet을 통해 렌더링되는 자식 컴포넌트로 데이터를 전달할 수 있습니다.
```tsx
// User.tsx
import { Outlet, Link, useParams } from "react-router-dom";
import { users } from "../../db" ;

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>
        User with it {userId} is named: {users[Number(userId)-1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet 
        context={{                                              // Route에 context를 전달
          nameOfMyUser: users[Number(userId)-1].name,
      }}/>
    </div>
  )
}

export default User;
```
```tsx
// Followers.tsx
import { useOutletContext } from "react-router-dom";            // useOutletContext 사용

interface MyOutletContextType {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<MyOutletContextType>();  // useOutletContext을 사용하여 nameOfMyUser 상태 정의
  return <h1>Here are {nameOfMyUser}의 Followers</h1>;               // 출력
}

export default Followers;
```
```tsx
// Router.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // 메인 레이아웃 컴포넌트
import User from "./pages/User";
import Followers from "./pages/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 루트 레이아웃
    children: [
      {
        path: "user/:userId", // /user/1, /user/2 등
        element: <User />,
        children: [
          {
            path: "followers", // /user/1/followers
            element: <Followers />,
          },
        ],
      },
    ],
  },
]);

export default router;
```
### readSearchParms, setSearchPparms
- React Router v6에서 제공하는 훅(Hook)으로, URL의 쿼리 스트링(query string) 을 읽고 조작할 수 있도록 도와줌.
```tsx
// home.tsx
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  const [readSearchParms, setSearchPparms] = useSearchParams();
  console.log(readSearchParms.has("geo"));
  console.log(readSearchParms.get("geo"));
  setTimeout(() => {
    setSearchPparms({
      day: 'today',
      tomorrow: "1243a",
    })
  }, 3000);
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

