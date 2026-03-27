import axios from 'axios'

const API_BASE_URL = import.meta.env.API_URL || 'http://localhost:3000/'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, //
  withCredentials: true, // Permite cookies
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor para errores
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Cookie expirada o no válida
      window.location.href = '/login'
    }

    if (error.response?.status === 403) {
      // Sin permisos
      console.error('Acceso denegado')
    }

    return Promise.reject(error)
  }
)

export default apiClient
