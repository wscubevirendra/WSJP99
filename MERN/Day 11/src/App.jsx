import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProductView from './pages/ProductView'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/:category_slug?",
      element: <Home />
    },
    {
      path: "/product-view/:id",
      element: <ProductView />
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
