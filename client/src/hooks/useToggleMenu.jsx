import { useEffect, useState } from 'react'

export const useToggleMenu = ({ menuRef, buttonRef }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleOutsideClick = e => {
      if (menuRef.current && e.target !== buttonRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return { isOpen, toggleMenu }
}
