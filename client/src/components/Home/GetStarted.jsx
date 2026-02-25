import { useState, useMemo } from 'react'

export function GetStarted({
  title = '¿Listo para transformar tu futuro financiero?',
  subtitle = 'Únete a miles de traders institucionales hoy mismo.'
}) {
  const [ripples, setRipples] = useState([])

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5
      })),
    []
  )

  const createRipple = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    // Corregido: event a e
    const y = e.clientY - rect.top - size / 2

    const newRipple = { x, y, size, id: Date.now() }
    setRipples(prev => [...prev, newRipple])
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 600)
  }

  return (
    <section className='py-24 px-6 lg:px-10 bg-deep-blue'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2.5rem] bg-deep-blue px-8 py-16 md:px-20 md:py-24 border border-blue-900/40 shadow-2xl'>
          <div className='absolute inset-0 z-0 pointer-events-none'>
            <div className='absolute -right-[10%] top-0 h-full w-1/2 bg-accent/10 blur-[120px]' />
            <div className='absolute -left-[10%] bottom-0 h-full w-1/3 bg-primary/10 blur-[120px]' />

            {particles.map(p => (
              <div
                key={p.id}
                className='absolute rounded-full bg-blue-200 animate-twinkle'
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  top: `${p.top}%`,
                  left: `${p.left}%`,
                  '--d': `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                  boxShadow: '0 0 8px rgba(191, 219, 254, 0.8)'
                }}
              />
            ))}
          </div>

          <div className='relative z-10 flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left'>
            <div className='max-w-xl'>
              <h2 className='mb-6 text-4xl font-black text-white md:text-5xl leading-tight'>{title}</h2>
              <p className='text-lg text-slate-300 font-medium'>{subtitle}</p>
            </div>

            <div className='flex flex-col gap-4 sm:flex-row w-full sm:w-auto'>
              {/* BOTÓN CON ANIMACIÓN DE CRECIMIENTO (animate-button-pulse) */}
              <button
                onMouseDown={createRipple}
                className='group relative overflow-hidden rounded-xl bg-primary px-10 py-5 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all cursor-pointer animate-button-pulse hover:animate-none hover:scale-105 active:scale-95'
              >
                <span className='relative z-10'>Crear Cuenta Gratis</span>
                <div className='absolute inset-0 bg-white/10 translate-y-full transition-transform group-hover:translate-y-0' />

                {ripples.map(r => (
                  <span
                    key={r.id}
                    className='absolute bg-white/40 rounded-full animate-ripple pointer-events-none'
                    style={{ top: r.y, left: r.x, width: r.size, height: r.size }}
                  />
                ))}
              </button>

              <button className='rounded-xl border border-blue-800 bg-blue-900/20 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-blue-900/40 hover:border-blue-700 active:scale-95 cursor-pointer'>
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
