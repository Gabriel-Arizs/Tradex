import db from '../database/db.js'
import bcrypt from 'bcrypt'
class User {
  static async registerUser({ username, password, role_id, email }) {
    try {
      // Check if user already exists
      const [rows] = await db.query('SELECT user_id FROM users WHERE email = ?', [email])

      if (rows.length > 0) {
        throw new Error('Email already registered')
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      // Insert the new user
      const sql = 'INSERT INTO users (username, password, role_id, email) VALUES (?, ?, ?, ?)'
      const [result] = await db.query(sql, [username, hashedPassword, role_id, email])

      return result
    } catch (error) {
      throw error
    }
  }

  static async login(usuario, password) {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario])

    if (rows.length === 0) {
      return { error: 'Usuario no encontrado' }
    }

    const user = rows[0]

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return { error: 'Contraseña incorrecta' }
    }

    const { password: _, ...userWithoutPassword } = user
    return { success: true, user: userWithoutPassword }
  }
}

export default User
