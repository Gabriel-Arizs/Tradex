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