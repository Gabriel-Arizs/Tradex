import { useEffect, useState } from 'react'

export const useErrorTimer = () => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isError])

  return { isError, setIsError }
}
