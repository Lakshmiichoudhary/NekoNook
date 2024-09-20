import React from 'react'
import Auth from './Components/Auth/Auth'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from './Components/Browse/Browse'
import About from './pages/About'
import Contact from './pages/Contact'
import Questions from './pages/Questions'

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
    }
  ])

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default App
