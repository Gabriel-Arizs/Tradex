// controllers/clientController.js
import Client from '../models/clientModel.js'

const registroCliente = async (req, res) => {
  try {
    const { nombre, email, apellido, telefono, pais, id_plan, monto, comprobante, metodo_pago, plataforma } = req.body

    // 2. VALIDACIÓN EXTENDIDA (Importante para que no rompa la DB)
    // Si tu DB espera apellido o id_plan, debes validarlos aquí también.
    if (!nombre || !email || !id_plan || !plataforma) {
      return res.status(400).json({
        message: 'Faltan campos obligatorios (Nombre, Email, Plan y Plataforma)'
      })
    }

    // 3. LLAMADA AL MODELO
    // Pasamos el objeto completo 'req.body' que ya contiene todo lo necesario
    const result = await Client.regisClient(req.body)

    // 4. RESPUESTA ÉXITO
    return res.status(201).json({
      success: true,
      message: 'Cliente registrado correctamente',
      id_cliente: result.id
    })
  } catch (error) {
    // 5. LOG DE ERROR PARA TI (Como desarrollador)
    console.error('Error en el controlador de registro:', error)

    return res.status(500).json({
      success: false,
      message: 'Hubo un error interno al procesar el registro',
      error: error.message
    })
  }
}
export default registroCliente
