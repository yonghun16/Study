# Nested Routing

### V5와 V6의 차이점
- 1. 중첩 라우팅 방식 
  - V5 : \<Route> 중첩 & 수동으로 props.childern 관리
  - V6 : route config 기반 자동 중첩 렌더링
- 2. Switch vs Routes 
  - V5 : \<Switch> 사용
  - V6 : \<Outlet> 사용
```jsx
#### V5 예제
// App.js (v5)
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

// Dashboard.js
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';

function Dashboard({ match }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Switch>
        <Route path={`${match.path}/home`} component={Home} />
        <Route path={`${match.path}/settings`} component={Settings} />
      </Switch>
    </div>
  );
}
```
#### V6 예제
```jsx
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Dashboard from './Dashboard';
import Home from './Home';
import Settings from './Settings';

const router = createBrowserRouter([
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Dashboard.jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* 자식 라우트가 이곳에 렌더링됨 */}
    </div>
  );
}

export default Dashboard;
```
