## React Router


### Routing
- Multi page Application에서 페이지가 이동하는 것
- react-router-dom : 리액트에서 라우터를 쓰기 위해 사용하는 라이브러리 -> Client Side Routing을 가능하게 한다.

### 실습
- 1. Route로 여러 페이지 구분해 주기
- 2. NavLink로 페이지 이동해도 유지되는 Header 만들기
- 3. Url애 id 등의 값에 따라 바뀌는 dynamic Route. Link 연결
- 4. 에러 발생 시 나타나는 페이지 만들기

```jsx
// App.js
import { createBrowserRouter } from 'react-router-dom' // createBrowserRouter를 사용
import { RouterProvider } from 'react-router-dom'      // RouterProvider를 사용

import RootElement from './components/RootElement'
import Welcome from './components/Welcome'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([   // Router 생성
  {
    path: '/',                    // 상위 path (root path)
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [                   // 하위 path (child path)
      {
        path: '/welcome', 
        element: <Welcome />,
      },
      {
        path: '/products', 
        element: <Products />,
      },
      {
        path: '/products/:productId',   // 주소의 파라메터를 세부페이지로 사용
        element: <ProductDetail />,
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />   {/* router를 사용 */}
    </>
  )
}

export default App

```

```jsx
// RootElement.js
import React from 'react'
import { Outlet } from 'react-router-dom'  // <**중첩된 라우트(Nested Routes)**를 렌더링하는 역할을 함.
import MainHeader from './MainHeader'

const RootElement = () => {
  return (
    <div>
      <MainHeader />                      // MainHeader
      <p>This is  root</p>
      <Outlet />                          // <Outlet />은 현재 라우트의 자식 라우트가 렌더링될 자리를 의미
    </div>
  )
}

export default RootElement
```

```jsx
// Products.js
import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
      <section>
        <nav>
          <ul>
            <li> <Link to='/products/p1'>1번 상품</Link> </li>
            <li> <Link to='/products/p2'>2번 상품</Link> </li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Products
```

```jsx
// ProductDetail.js
import React from 'react'
import { useParams } from 'react-router-dom'   // useParams 파라미터를 받는 hook

const ProductDetail = () => {
  const params = useParams()                // useParams()를 통해 파라메터를 받아와서 params에 저장

  return (
    <section>
      <p>{params.productId}</p>             // 받아온 params의 productId를 화면에 출력
    </section>
  );
};

export default ProductDetail ;
```
```jsx
// MainHeader.js
import React from 'react'
import { NavLink } from 'react-router-dom'

function MainHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li> <NavLink to='/welcome'>Welcome</NavLink> </li>
          <li> <NavLink to='/products'>Products</NavLink> </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
```
