function Label({ children, className = '' }) {
  return <label className={`text-sm font-medium text-slate-300 ml-1 ${className}`}>{children}</label>
}

export default Label
