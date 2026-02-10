export function StatItem({ label, value, trend, icon, iconColor = 'text-primary' }) {
  return (
    <div className='flex flex-col gap-1 group'>
      <p className='text-xs font-bold uppercase tracking-[0.1em] text-slate-500 group-hover:text-slate-400 transition-colors'>
        {label}
      </p>
      <div className='flex items-baseline gap-2'>
        <span className='text-3xl font-black text-white tabular-nums tracking-tight'>{value}</span>
        {trend && <span className='text-sm font-bold text-accent'>{trend}</span>}
        {icon && <span className={`material-symbols-outlined ${iconColor} text-sm`}>{icon}</span>}
      </div>
    </div>
  )
}

export default StatItem
