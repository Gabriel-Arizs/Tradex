import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5 // Los datos se consideran "frescos" por 5 minutos
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
