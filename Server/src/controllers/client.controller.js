// controllers/clientController.js
import Client from '../models/clientModel.js'

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
