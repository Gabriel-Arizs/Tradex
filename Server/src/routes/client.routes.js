import { Router } from 'express'
import { registerClient } from '../controllers/client.controller.js'
import createUploadMiddleware from '../middleware/upload.middleware.js'
import { validateBody } from '../middleware/formValidations.middleware.js'
import clientSchema from '../schemas/client.schema.js'

const router = Router()

const uploadProduct = createUploadMiddleware('products')

router.post('/register-client', [validateBody(clientSchema)], uploadProduct.single('image'), registerClient)

router.post('/login', [validateLogin(loginSchema)], login, generateToken)
export default router
