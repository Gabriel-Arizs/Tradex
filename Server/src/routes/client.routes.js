import { Router } from 'express'
import { getRegistrationOptions, registerClient } from '../controllers/client.controller.js'
import createUploadMiddleware from '../middleware/upload.middleware.js'

const router = Router()

const uploadProduct = createUploadMiddleware('clients')

router.get('/registration/options', getRegistrationOptions)

router.post('/registration', uploadProduct.single('image'), registerClient)

export default router
