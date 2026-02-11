import User from '../models/User.js';

export const registrarAdmin = async (req, res) => {
  const { usuario, password, correo } = req.body;

  try {

    const resultado = await User.registrarUsuario({
      usuario,
      password,
      id_rol: 1,
      correo
    });

    return res.status(201).json({
      message: "Administrador creado exitosamente",
      id: resultado.insertId
    });

  } catch (error) {

    return res.status(400).json({ error: error.message });
  }

};

export const login = async (req, res) => {

  const { usuario, password } = req.body;

  try {
    // Le pedimos al Modelo que busque al usuario y verifique la contraseña con bcrypt
    const resultado = await User.login(usuario, password);

    //  Si el modelo devuelve un error (usuario no existe o clave mal), paramos aquí
    if (resultado.error) {
      return res.status(401).json({ message: resultado.error });
    }

    //  SI TODO ESTÁ BIEN: Generamos el Token.
    // Usamos la clave secreta de .env
    const token = jwt.sign(
      { id: resultado.user.id, nombre: resultado.user.usuario },
      process.env.JWT_SECRET,
      { expiresIn: '2h' } // El token dejará de funcionar en 2 horas
    );

    // 5. Enviamos la respuesta al cliente.
    // El cliente (React) debe guardar este token para usarlo después.
    return res.status(200).json({
      message: 'Login exitoso',
      token: token,
      user: {
        id: resultado.user.id,
        nombre: resultado.user.usuario
      }
    });

  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};