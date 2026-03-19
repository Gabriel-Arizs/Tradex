import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routesUsuario from './src/routes/routesUsuario.js'
import routesClients from './src/routes/client.routes.js'

const app = express()

// --- MIDDLEWARES GLOBALES ---
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true // Por si luego usan cookies o sesiones
  })
)

app.use(cookieParser())
app.use(express.json())

// --CONFIGURACIONES DEL SERVIDOR--

app.set('trust proxy', true)

// --- RUTAS ---
app.use('/Users', routesUsuario)
app.use('/clients', routesClients)

export default app
