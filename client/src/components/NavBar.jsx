import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import NavLink from './ui/NavLink'
import { Link } from 'react-router-dom'

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export function NavBar({ handleClick }) {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('isDarkMode')) ?? window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    return isDarkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  return (
    <nav class='bg-background-light/80 dark:bg-background-dark/80 sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-md'>
      <div class='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10'>
        <div class='flex items-center gap-3'>
          <div class='bg-primary text-background-dark flex h-10 w-10 items-center justify-center rounded-lg'>
            <span class='material-symbols-outlined font-bold'></span>
          </div>
          <span class='text-xl font-extrabold tracking-tight text-slate-900 dark:text-white'>
            TRADEX<span class='text-primary'>.</span>
          </span>
        </div>
        <nav class='hidden flex-1 justify-center gap-8 md:flex'>
          <a
            class='hover:text-primary dark:hover:text-primary text-sm font-semibold text-slate-600 transition-colors dark:text-slate-300'
            href='#'
          >
            Mercados
          </a>
          <a
            class='hover:text-primary dark:hover:text-primary text-sm font-semibold text-slate-600 transition-colors dark:text-slate-300'
            href='#'
          >
            Servicios
          </a>
          <a
            class='hover:text-primary dark:hover:text-primary text-sm font-semibold text-slate-600 transition-colors dark:text-slate-300'
            href='#'
          >
            Precios
          </a>
          <a
            class='hover:text-primary dark:hover:text-primary text-sm font-semibold text-slate-600 transition-colors dark:text-slate-300'
            href='#'
          >
            Sobre Nosotros
          </a>
        </nav>
        <div class='flex items-center gap-4'>
          <button class='hidden text-sm font-bold text-slate-900 dark:text-white sm:block'>Iniciar Sesión</button>
          <button class='bg-primary text-background-dark shadow-primary/20 rounded-lg px-5 py-2.5 text-sm font-bold shadow-lg transition-transform hover:scale-105'>
            Empieza Ahora
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
