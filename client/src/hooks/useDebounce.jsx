import { useEffect } from 'react'

export const useDebounce = ({ debounce, search, filter, currentPage }) => {
  useEffect(() => {
    if (search.trim() === '') return debounce.cancel()

    if (search) {
      debounce()
    }
  }, [search, filter, currentPage])
}
