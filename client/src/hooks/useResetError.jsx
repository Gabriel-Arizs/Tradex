import { useEffect } from 'react'

export const useResetError = ({ isError, reset }) => {
  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        reset()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isError])

  return { isError }
}
