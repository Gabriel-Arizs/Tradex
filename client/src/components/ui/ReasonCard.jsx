export function ReasonCard({ icon, title, description }) {
  return (
    <div className='glass-card rounded-[2.5rem] p-8 transition-all hover:border-accent/40 group border border-white/5 bg-white/5 backdrop-blur-sm'>
      <div className='mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg'>
        <span className='material-symbols-outlined scale-125'>{icon}</span>
      </div>
      <h3 className='mb-3 text-xl font-bold text-white'>{title}</h3>
      <p className='text-sm text-slate-400 leading-relaxed'>{description}</p>
    </div>
  )
}

export default ReasonCard
