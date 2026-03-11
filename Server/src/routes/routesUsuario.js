import { Router } from 'express'
import { login, registerAdmin } from '../controllers/authController.js'

const router = Router()

router
  .post('/register-user', registerAdmin)

  .post('/login', login)

export default router
