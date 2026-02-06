import React from 'react'
import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export function NavLink({ to, children, className, ...props }) {
  const classNav = isActive =>
    isActive ? 'text-violet-600 dark:text-violet-400' : 'hover:text-violet-600 dark:hover:text-violet-400'

  return (
    <NavLinkReactRouter
      {...props}
      className={({ isActive }) => {
        return `${classNav(isActive)} ${className}`
      }}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}

export default NavLink
