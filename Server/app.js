import express from 'express'
import cors from 'cors'


import routesUsuario from './src/routes/routesUsuario.js'


const app = express();


// --- MIDDLEWARES GLOBALES ---
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.set('trust proxy', true);



// --- RUTAS ---
app.use('/Users', routesUsuario);

export default app;