import React from 'react'
import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export function NavLink({ to, children, className = '', ...props }) {
  // Colores TRADEX por defecto
  const activeStyles = 'text-accent'
  const inactiveStyles = 'text-slate-400 hover:text-accent'

  return (
    <NavLinkReactRouter
      {...props}
      to={to}
      className={({ isActive }) => {
        const stateClass = isActive ? activeStyles : inactiveStyles
        return `${stateClass} ${className} transition-colors`.trim()
      }}
    >
      {children}
    </NavLinkReactRouter>
  )
}

export default NavLink
