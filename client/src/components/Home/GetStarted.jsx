export function GetStarted({
  title = '¿Listo para transformar tu futuro financiero?',
  subtitle = 'Únete a miles de traders institucionales hoy mismo.'
}) {
  return (
    <section className='py-24 px-6 lg:px-10 bg-dark-navy'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2.5rem] bg-deep-blue px-8 py-16 md:px-20 md:py-24 border border-blue-900/40 shadow-2xl'>
          <div className='absolute inset-0 z-0 pointer-events-none'>
            <div className='absolute -right-[10%] top-0 h-full w-1/2 bg-accent/15 blur-[100px] opacity-50' />
            <div className='absolute -left-[10%] bottom-0 h-full w-1/3 bg-primary/15 blur-[100px] opacity-50' />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left'>
            <div className='max-w-xl'>
              <h2 className='mb-6 text-4xl font-black text-white md:text-5xl leading-tight'>{title}</h2>
              <p className='text-lg text-slate-300 font-medium'>{subtitle}</p>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row w-full sm:w-auto'>
              <button className='group relative overflow-hidden rounded-xl bg-primary px-10 py-5 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95'>
                <span className='relative z-10'>Crear Cuenta Gratis</span>
                <div className='absolute inset-0 bg-white/10 translate-y-full transition-transform group-hover:translate-y-0' />
              </button>

              <button className='rounded-xl border border-blue-800 bg-blue-900/20 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-blue-900/40 hover:border-blue-700 active:scale-95'>
                Hablar con un Experto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
