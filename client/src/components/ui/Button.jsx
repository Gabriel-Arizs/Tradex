export function Button({ children, onClick, type = 'button', className = '', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white 
        shadow-lg shadow-primary/20 hover:bg-blue-500 hover:text-white 
        transition-all active:scale-95 disabled:opacity-50 
        disabled:cursor-not-allowed ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button
