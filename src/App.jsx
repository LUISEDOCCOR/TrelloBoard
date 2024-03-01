import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
//Pages
import HomePage from "./pages/home"
import Board from "./pages/board"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/board/:key",
    element: <Board/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
