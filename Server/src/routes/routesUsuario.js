import { Router } from 'express'
import { registrarAdmin, login } from '../controllers/authController.js'


const router = Router();

router

  .post('/RegistroUsuario', registrarAdmin)
  .post('/login', login);

export default router;