import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import MainLayout from './pages/MainLayout'
import CartPage from './pages/CartPage'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/:category_slug?",
          element: <Home />
        },
        {
          path: "/product-view/:id",
          element: <ProductView />
        }, {

          path: "/cart",
          element: <CartPage />
        }
      ]
    }

  ])
  return (
    <RouterProvider router={routers} />
  )
}
