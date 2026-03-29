import { Router } from 'express'
import { getRegistrationOptions, registerClient } from '../controllers/client.controller.js'
import createUploadMiddleware from '../middleware/upload.middleware.js'
import { validateBody } from '../middleware/formValidations.middleware.js'
import clientSchema from '../schemas/client.schema.js'

const router = Router()

const uploadProduct = createUploadMiddleware('clients')

router.get('/registration/options', getRegistrationOptions)

router.post('/registration', [validateBody(clientSchema), uploadProduct.single('image')], registerClient)

router.post('/login', [validateLogin(loginSchema)], login, generateToken)
export default router
