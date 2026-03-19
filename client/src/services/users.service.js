import apiClient from '../api/client'

export const usersService = {
  async getAll(page, limit) {
    const { data } = await apiClient.get('/users', { params: { page, limit } })
    return data
  },

  async register(userData) {
    const { data } = await apiClient.post('/clients/register-client', userData)
    console.log(data)
    return data
  },

  async update(id, updates) {
    const { data } = await apiClient.put(`/users/${id}`, updates)
    return data
  },

  async delete(id) {
    await apiClient.delete(`/users/${id}`)
  }
}
