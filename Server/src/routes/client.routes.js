import { Router } from 'express'
import { registerClient } from '../controllers/client.controller.js'
import createUploadMiddleware from '../middleware/upload.middleware.js'

const router = Router()

const uploadProduct = createUploadMiddleware('products')

router.post('/register-client', uploadProduct.single('image'), registerClient)

export default router
