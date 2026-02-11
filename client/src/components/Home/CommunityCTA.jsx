import TelegramIcon from '../Icons/TelegramIcon'
import CommunityStat from '../ui/CommunityStat'
import { Send } from 'lucide-react'

const STATS = [
  { label: 'Señales', value: 'Trading Real-time', offset: false },
  { label: 'Impacto', value: '+85% Win Rate', offset: true },
  { label: 'Análisis', value: 'Reportes Diarios', offset: false },
  { label: 'Soporte', value: '24/7 Mentoría', offset: true }
]

export function CommunityCTA() {
  return (
    <section className='py-24 px-6 lg:px-10 bg-deep-blue relative'>
      <div className='mx-auto max-w-7xl'>
        <div className='relative overflow-hidden rounded-[3rem] bg-linear-to-br from-blue-900/40 via-deep-blue to-accent/10 p-8 md:p-16 border border-white/10 shadow-2xl'>
          <div className='absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/20 blur-[100px] pointer-events-none'></div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
              <div className='mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary shadow-2xl shadow-primary/40 group transition-transform hover:scale-110'>
                <TelegramIcon className='h-10 w-10 text-white transition-transform group-hover:rotate-12' />
              </div>

              <h2 className='mb-4 text-4xl font-black text-white leading-tight md:text-5xl'>
                Únete a nuestra <span className='text-accent'>comunidad</span>
              </h2>

              <p className='mb-8 max-w-lg text-lg text-slate-300 leading-relaxed'>
                Accede gratis a señales en tiempo real, análisis técnico diario y una red de más de 15,000 inversores.
              </p>

              <button className='group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-dark-navy transition-all hover:bg-accent hover:text-white hover:scale-105 active:scale-95'>
                <span className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300'>
                  <Send />
                </span>
                Unirse Ahora
              </button>
            </div>

            <div className='hidden lg:flex justify-center items-center'>
              <div className='grid grid-cols-2 gap-6'>
                {STATS.map((stat, index) => (
                  <CommunityStat key={index} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityCTA
