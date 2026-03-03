import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import NavLink from './ui/NavLink'
import { Link } from 'react-router-dom'
import { ChartNetwork } from 'lucide-react'

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
    <header className='sticky top-0 z-50 w-full border-b border-blue-900/30 bg-dark-navy bg-linear-to-tr from-blue-800/60 via-deep-blue/90 to-blue-900/30 backdrop-blur-md'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white'>
            <span className='font-bold'>
              <ChartNetwork />
            </span>
          </div>
          <span className='text-xl font-extrabold tracking-tight text-white uppercase'>
            TRADEX<span className='text-accent'>.</span>
          </span>
        </div>

        {/* Navegación - Usando tu NavLink personalizado */}
        <nav className='hidden flex-1 justify-center gap-8 md:flex'>
          {[
            { name: 'Mercados', path: '/mercados' },
            { name: 'Servicios', path: '/servicios' },
            { name: 'Precios', path: '/precios' },
            { name: 'Sobre Nosotros', path: '/nosotros' }
          ].map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className='text-sm font-semibold' // Solo clases estructurales
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Botón de Acción */}
        <div className='flex items-center gap-4'>
          <NavLink
            to='/register'
            className='rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-blue-500 hover:text-white transition-all'
          >
            Empieza Ahora
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default NavBar
