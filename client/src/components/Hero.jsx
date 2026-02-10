export function Hero() {
  return (
    <section className='relative flex min-h-[85vh] items-center justify-center px-6 lg:px-10 overflow-hidden bg-dark-navy'>
      {/* Background Blobs */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-linear-to-b from-blue-900/20 to-transparent'></div>
        <div className='absolute -top-[30%] -right-[10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]'></div>
        <div className='absolute -bottom-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]'></div>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div className='flex flex-col gap-8'>
          <div className='inline-flex fits-content items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-accent w-fit'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-accent'></span>
            </span>
            <span className='text-xs font-bold tracking-widest uppercase'>Seguridad Institucional</span>
          </div>

          <h1 className='text-5xl font-black leading-tight tracking-tight text-white md:text-7xl'>
            Maximiza tus Inversiones con <br />
            <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-accent'>Confianza</span>
          </h1>

          <p className='max-w-xl text-lg leading-relaxed text-slate-400'>
            Opera en los mercados globales con la plataforma más avanzada. Ejecución ultrarrápida e IA para el inversor
            moderno.
          </p>

          <div className='flex flex-wrap gap-4'>
            <button className='rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:bg-blue-500'>
              Empieza Ahora
            </button>
            <button className='flex items-center gap-2 rounded-xl border border-slate-700 bg-deep-blue/50 px-8 py-4 text-lg font-bold text-white hover:bg-deep-blue transition-all'>
              <span className='material-symbols-outlined text-accent'>play_circle</span>
              Ver Demo
            </button>
          </div>
        </div>

        <div className='hidden lg:block relative'>
          <div className='relative rounded-2xl border border-blue-900/30 bg-deep-blue p-4 shadow-2xl shadow-primary/10'>
            <div className='absolute -top-6 -left-6 bg-accent/20 p-4 rounded-xl backdrop-blur-md border border-accent/30'>
              <span className='material-symbols-outlined text-accent scale-150'>trending_up</span>
            </div>
            <img
              src='/dashboard-preview.png'
              alt='Trading Dashboard'
              className='w-full rounded-xl border border-slate-800'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
