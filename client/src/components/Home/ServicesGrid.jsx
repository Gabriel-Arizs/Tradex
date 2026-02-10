import ServiceCard from '../ui/ServiceCard'

const SERVICES = [
  {
    title: 'Trading Algorítmico',
    description:
      'Ejecuta estrategias complejas con nuestros motores de alta frecuencia. Automatización total basada en parámetros avanzados.',
    icon: 'memory',
    link: '#'
  },
  {
    title: 'Gestión de Portafolio',
    description:
      'Diversificación inteligente asistida por IA. Analizamos millones de puntos de datos para optimizar tu riesgo-recompensa.',
    icon: 'pie_chart',
    link: '#'
  },
  {
    title: 'Análisis de Mercado',
    description:
      'Gráficos profesionales, indicadores propietarios y noticias en tiempo real. Todo lo necesario para decisiones informadas.',
    icon: 'query_stats',
    link: '#'
  }
]

export function ServicesGrid() {
  return (
    <section className='py-24 px-6 lg:px-10 bg-dark-navy'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-16 flex flex-col items-center text-center'>
          <h2 className='mb-4 text-4xl font-black tracking-tight text-white md:text-5xl'>Servicios Especializados</h2>
          <div className='h-1.5 w-20 rounded-full bg-primary mb-8 shadow-lg shadow-primary/20'></div>
          <p className='max-w-2xl text-lg text-slate-400 leading-relaxed'>
            Diseñamos soluciones financieras de alta fidelidad para inversores individuales e institucionales.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
