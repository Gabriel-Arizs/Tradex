// controllers/clientController.js
import { getAllBrokers } from '../models/broker.model.js'
import Client from '../models/clientModel.js'
import { getAllPlans } from '../models/plan.model.js'

export const getRegistrationOptions = async (req, res) => {
  try {
    const [plans, brokers] = await Promise.all([getAllPlans(), getAllBrokers()])
    res.json({ plans, brokers })
  } catch (error) {
    res.status(500).json({ message: 'something goes wrong' })
  }
}

export const registerClient = async (req, res) => {
  try {
    const { name, email, lastName, phone, country, planId, paymentMethod, platform } = req.body

    const image = req.file ? { url: req.file.path, publicId: req.file.filename } : null

    const result = await Client.registerClient({
      name,
      lastName,
      email,
      phone,
      country,
      planId,
      platform,
      receiptUrl: image?.url ?? null,
      paymentMethod
    })

    return res.status(201).json({
      success: true,
      message: 'Client registered successfully',
      clientId: result.id,
      name,
      lastName
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      message: 'Something goes wrong',
      error: e.message
    })
  }
}
