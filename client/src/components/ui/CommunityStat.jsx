export function CommunityStat({ label, value, offset = false }) {
  return (
    <div
      className={`
      glass-card rounded-2xl p-6 border border-accent/20 transition-all duration-500
      hover:border-accent/50 hover:bg-accent/5 hover:-translate-y-1
      ${offset ? 'lg:translate-y-8' : ''}
  `}
    >
      <p className='text-accent text-xs font-bold uppercase tracking-wider mb-1'>{label}</p>
      <p className='text-white font-bold whitespace-nowrap'>{value}</p>
    </div>
  )
}

export default CommunityStat
