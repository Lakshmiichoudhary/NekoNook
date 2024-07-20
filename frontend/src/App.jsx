import React from 'react'
import Auth from './Components/Auth/Auth'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from './Components/Browse/Browse'

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path : "/",
      element : <Auth />
    },
    {
      path : "browse",
      element : <Browse />
    }
  ])

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default App
