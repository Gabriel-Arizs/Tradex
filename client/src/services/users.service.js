import apiClient from '../api/client'

export const usersService = {
  async getRegistrationOptions() {
    const { data } = await apiClient.get('/api/clients/registration/options')
    console.log(data)
    return data
  },

  async register(data) {
    const formData = new FormData()

    // Agrega todos los campos de texto
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'image') formData.append(key, value)
    })

    // Agrega la imagen si existe
    if (data.image) formData.append('image', data.image)

    const { data: response } = await apiClient.post('/api/clients/register', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response
  }
}
