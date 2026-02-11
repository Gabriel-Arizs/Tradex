import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  // Buscamos el token en los encabezados (Headers)
  const authHeader = req.headers['authorization'];

  // El formato estándar es "Bearer TOKEN", así que separamos la palabra 'Bearer'
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: "Acceso denegado: No se proporcionó un token" });
  }

  try {
    // Verificamos el token usando la clave de .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //  Guardamos los datos del usuario dentro de 'req' para que la siguiente función los use
    req.user = decoded;


    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};