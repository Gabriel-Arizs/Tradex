import db from '../database/db.js'

export const getAllPlans = async () => {
  const [rows] = await db.query('SELECT plan_id AS id, name, price, description FROM plans')
  return rows
}
