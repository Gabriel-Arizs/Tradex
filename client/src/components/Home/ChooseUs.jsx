import ReasonCard from '../ui/ReasonCard'

const REASONS = [
  {
    id: 'security',
    icon: 'security',
    title: 'Seguridad',
    description: 'Cifrado de grado militar y almacenamiento en frío para proteger tus activos digitales 24/7.'
  },
  {
    id: 'tech',
    icon: 'speed',
    title: 'Tecnología',
    description: 'Motores de emparejamiento de latencia ultrabaja capaces de procesar millones de órdenes por segundo.'
  },
  {
    id: 'support',
    icon: 'headset_mic',
    title: 'Soporte',
    description: 'Equipo multilingüe de expertos financieros disponibles en tiempo real para resolver cualquier duda.'
  },
  {
    id: 'regulation',
    icon: 'verified_user',
    title: 'Regulación',
    description: 'Operamos bajo los más estrictos marcos regulatorios internacionales para tu tranquilidad legal.'
  }
]

export function ChooseUs() {
  return (
    <section className='py-24 px-6 lg:px-10 bg-deep-blue relative overflow-hidden'>
      <div
        className='absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none'
        aria-hidden='true'
      />

      <div className='mx-auto max-w-7xl relative z-10'>
        <div className='mb-16 flex flex-col items-center text-center'>
          <h2 className='mb-4 text-4xl font-black tracking-tight text-white md:text-5xl'>¿Por Qué Elegirnos?</h2>
          <div className='h-1.5 w-20 rounded-full bg-accent mb-8'></div>
          <p className='max-w-2xl text-lg text-slate-400'>
            Nuestra infraestructura está diseñada para superar los estándares más exigentes del mercado financiero
            global.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {REASONS.map(reason => (
            <ReasonCard key={reason.id} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
