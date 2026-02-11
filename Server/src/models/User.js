import db from '../database/db.js'
import bcrypt from 'bcrypt'
class User {

  static async registrarUsuario({ usuario, password, id_rol, correo }) {
    try {
      const [rows] = await db.query('SELECT id_user FROM usuarios WHERE correo = ?', [correo])

      if (rows.length > 0) {
        throw new Error('Correo ya registrado')
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      // Insertar el nuevo usuario
      const sql = 'INSERT INTO usuarios (usuario, password, id_rol, correo) VALUES (?, ?, ?, ?)'
      const [result] = await db.query(sql, [usuario, hashedPassword, id_rol, correo])

      return result
    } catch (error) {
      throw error
    }
  }


}

export default User
