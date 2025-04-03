import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import RootElement from './components/RootElement'
import Welcome from './components/Welcome'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
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
        path: '/products/:productId', 
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
