export function ServiceCard({ title, description, icon, link }) {
  return (
    <div className='group relative rounded-2xl border border-blue-900/30 bg-deep-blue p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1'>
      <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner'>
        <span className='material-symbols-outlined scale-125'>{icon}</span>
      </div>

      <h3 className='mb-3 text-xl font-extrabold text-white group-hover:text-accent transition-colors'>{title}</h3>

      <p className='mb-6 text-slate-400 leading-relaxed text-sm'>{description}</p>

      <a href={link} className='inline-flex items-center gap-2 text-sm font-bold text-accent group/link'>
        Saber más
        <span className='material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1'>
          arrow_forward
        </span>
      </a>
    </div>
  )
}

export default ServiceCard
