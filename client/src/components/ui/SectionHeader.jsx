export const SectionHeader = ({ title, description, accentColor = 'bg-primary' }) => (
  <div className='mb-16 flex flex-col items-center text-center'>
    <h2 className='mb-4 text-4xl font-black tracking-tight text-white md:text-5xl'>{title}</h2>
    <div className={`h-1.5 w-20 rounded-full ${accentColor} mb-8`}></div>
    <p className='max-w-2xl text-lg text-slate-400'>{description}</p>
  </div>
)
