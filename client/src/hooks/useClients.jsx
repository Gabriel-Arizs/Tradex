import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { usersService } from '../services/users.service'

export const useGetRegistrationOptions = () => {
  return useQuery({
    queryKey: ['registrationOptionsClients'],
    queryFn: () => usersService.getRegistrationOptions(),
    placeholderData: { plans: [], brokers: [] }
  })
}

// MUTATIONS (Escritura)
export const useRegisterClient = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: data => usersService.register(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['registrationOptionsClients'] })
    }
  })
}
