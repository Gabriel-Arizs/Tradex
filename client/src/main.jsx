import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Definimos los Lazy Components aquí o en archivos separados
const LazyHome = lazy(() => import('./pages/Home.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LazyHome />
      }
      /* Aquí añadirías más rutas hijas:
      {
        path: "contacto",
        element: <Contacto />,
      }, 
      */
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
