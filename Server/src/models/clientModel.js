import db from '../database/db.js'

class Client {
  static async registerClient({ name, lastName, email, phone, country, planId, platform, receiptUrl, paymentMethod }) {
    let connection
    try {
      // Get connection and start transaction
      connection = await db.getConnection()
      await connection.beginTransaction()

      const clientSql = 'INSERT INTO clients (name, last_name, email, phone, country) VALUES (?, ?, ?, ?, ?)'

      const [clientResult] = await connection.query(clientSql, [name, lastName, email, phone, country])

      const newClientId = clientResult.insertId

      // Insert Payment
      const paymentSql =
        'INSERT INTO payments (client_id, plan_id, receipt_url, payment_method, payment_date) VALUES (?, ?, ?, ?, NOW())'
      await connection.query(paymentSql, [newClientId, planId, receiptUrl, paymentMethod])

      // Insert platform; the account is created, but username and password
      // assignment is pending payment verification.
      const accountSql = `
      INSERT INTO funding_accounts 
      (client_id, plan_id, platform, assignment_date, sent) 
      VALUES (?, ?, ?, NOW(), 0)`

      await connection.query(accountSql, [newClientId, planId, platform])

      await connection.commit()

      return { success: true, id: newClientId }
    } catch (error) {
      // If something goes wrong, roll back all changes
      if (connection) await connection.rollback()
      throw error // Re-throw so the controller can handle it
    } finally {
      // Always release the connection back to the pool
      if (connection) connection.release()
    }
  }
}

export default Client
