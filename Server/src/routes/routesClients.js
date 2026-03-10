import { Router } from 'express'
import registroCliente from '../controllers/clientController.js'

const router = Router()

router.post('/registroCliente', registroCliente)

export default router
