import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Definimos los Lazy Components aquí o en archivos separados
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazyRegisterPage = lazy(() => import('./pages/RegistrationPage.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LazyHomePage />
      },
      {
        path: 'register',
        element: <LazyRegisterPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
