import React from 'react'
import Auth from './Components/Auth/Auth'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from './Components/Browse/Browse'
import About from './pages/About'
import Contact from './pages/Contact'
import Questions from './pages/Questions'
import Sale from './pages/Sale'
import AdminDashboard from './Admin/AdminDashboard'
import NewDrop from './pages/NewDrop'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import NewestProducts from './Admin/NewestProducts'
import LimitedOffer from './Admin/LimitedOffer'
import AddBestSeller from './Admin/AddBestSeller'
import Products from './Admin/ProductsList'
import ProductDetail from './pages/ProductDetail'

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path : "/",
      element : <Auth />
    },
    {
      path : "browse",
      element : <Browse />
    },
    {
      path : "about",
      element : <About />
    },
    {
      path : "contact",
      element : <Contact />
    },
    {
      path : "FAQ's",
      element : <Questions />
    },
    {
      path : "sale",
      element : <Sale />
    },
    {
      path : "newDrop/ProductDetail",
      element : <ProductDetail />
    },
    {
      path : "Admin-Dashboard",
      element : <AdminDashboard />,
      children: [
        {
          index: true, 
          element: <AddBestSeller />,
        },
        {
          path: 'newest',
          element: <NewestProducts />,
        },
        {
          path: 'offer',
          element: <LimitedOffer />,
        },
        {
          path: "product",
          element : <Products />
        }
      ],
    },
    {
      path : "newDrop",
      element : <NewDrop />
    },
    {
      path : "wishlist",
      element : <WishList />
    },
    {
      path : "cart",
      element : <Cart />
    },

  ])

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default App
