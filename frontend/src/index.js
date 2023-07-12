import React from 'react'
import './index.css'
import Main from './App'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './Components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
