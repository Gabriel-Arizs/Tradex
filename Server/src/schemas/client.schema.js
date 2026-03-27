import { z } from 'zod'

const clientRegistrationSchema = z.object({
  name: z
    .string()
    .min(3, 'El nombre debe contener al menos 3 caracteres')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),
  lastname: z
    .string()
    .min(3, 'El apellido debe tener al menos 3 caracteres.')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El apellido solo puede contener letras'),
  email: z.string().email('Correo Invalido'),
  phone: z
    .string()
    .min(10, 'El número de teléfono debe tener al menos 10 dígitos.')
    .regex(/^[0-9]+$/, 'El teléfono solo debe contener números')
})

export default clientRegistrationSchema
