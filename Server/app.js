import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routesUsuario from './src/routes/routesUsuario.js'
import routesClients from './src/routes/routesClients.js'

const app = express()

// --- MIDDLEWARES GLOBALES ---
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Por si luego usan cookies o sesiones
  })
)

app.use(cookieParser())
app.use(express.json())
app.set('trust proxy', true)

// --- RUTAS ---
app.use('/Users', routesUsuario)
app.use('/Clients', routesClients)

export default app
