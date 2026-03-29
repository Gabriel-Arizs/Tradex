import db from '../database/db.js'

export const getAllBrokers = async () => {
  const [rows] = await db.query('SELECT broker_id as id, name, platform FROM brokers')
  return rows
}
