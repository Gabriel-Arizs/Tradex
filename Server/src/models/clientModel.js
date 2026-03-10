import db from '../database/db.js'

class Client {
  static async regisClient({
    nombre,
    apellido,
    email,
    telefono,
    pais,
    id_plan,
    plataforma,
    monto,
    comprobante,
    metodo_pago
  }) {
    let connection
    try {
      // Obtener conexión y empezar transacción
      connection = await db.getConnection()
      await connection.beginTransaction()

      //  Insertar el Cliente
      const sqlCliente = 'INSERT INTO clientes (nombre, apellido, email, telefono, pais) VALUES (?, ?, ?, ?, ?)'
      const [resultCliente] = await connection.query(sqlCliente, [nombre, apellido, email, telefono, pais])

      //  Obtener el ID generado
      const id_cliente_nuevo = resultCliente.insertId

      // Insertar el Pago
      const sqlPago =
        'INSERT INTO pagos (id_cliente, id_plan, monto, comprobante_url, metodo_pago, fecha_pago) VALUES (?, ?, ?, ?, ?, NOW())'
      await connection.query(sqlPago, [id_cliente_nuevo, id_plan, monto, comprobante, metodo_pago])
      //insertar platsforma y se crea la cuenta solo faltaria que se le asigne usuario y contraseña al comprobar el pago
      const sqlCuenta = `
      INSERT INTO cuentas_fondeo 
      (id_cliente, id_plan, plataforma, fecha_asignacion, enviado) 
      VALUES (?, ?, ?, NOW(), 0)`

      await connection.query(sqlCuenta, [id_cliente_nuevo, id_plan, plataforma])

      await connection.commit()

      return { success: true, id: id_cliente_nuevo }
    } catch (error) {
      // Si algo sale mal, revertimos todo lo que se haya hecho
      if (connection) await connection.rollback()

      console.error('Error en regisClient:', error)
      throw error // Re-lanzamos para que el controlador lo maneje
    } finally {
      // Importante: Siempre liberar la conexión al pool
      if (connection) connection.release()
    }
  }
}
export default Client
