import { Router } from 'express'
import { registrarAdmin } from '../controllers/authController.js'


const router = Router();

router

  .post('/RegistroUsuario', registrarAdmin)

export default router;