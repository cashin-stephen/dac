import React from 'react'
import './index.css'
import Main from './App'
import Project from './pages/Project'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './Components/ErrorPage'

// try to refactor to take advantage of client side routing

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/>
  },
  {
    path: 'projects/',
    element: <Project />,
    errorElement: <ErrorPage/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
