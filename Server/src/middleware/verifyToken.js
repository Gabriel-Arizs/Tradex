import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const token = req.cookies?.token
  if (!token) {
    return res.status(403).json({ message: 'Acceso denegado: No se proporcionó un token' })
  }

  try {
    // Verificamos el token usando la clave de .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //  Guardamos los datos del usuario dentro de 'req' para que la siguiente función los use
    req.user = decoded

    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado' })
  }
}
