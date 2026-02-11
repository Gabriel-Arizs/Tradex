import ServiceCard from '../ui/ServiceCard'
import { BrainCog, ChartNetwork, ChartPie } from 'lucide-react'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    title: 'Trading Algorítmico',
    description:
      'Ejecuta estrategias complejas con nuestros motores de alta frecuencia. Automatización total basada en parámetros avanzados.',
    icon: <BrainCog />,
    link: '#'
  },
  {
    title: 'Gestión de Portafolio',
    description:
      'Diversificación inteligente asistida por IA. Analizamos millones de puntos de datos para optimizar tu riesgo-recompensa.',
    icon: <ChartPie />,
    link: '#'
  },
  {
    title: 'Análisis de Mercado',
    description:
      'Gráficos profesionales, indicadores propietarios y noticias en tiempo real. Todo lo necesario para decisiones informadas.',
    icon: <ChartNetwork />,
    link: '#'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Retraso entre cada card
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export function ServicesGrid() {
  return (
    <motion.section
      className='py-24 px-6 lg:px-10 bg-dark-navy'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2, margin: '-100px' }}
    >
      <div className='mx-auto max-w-7xl'>
        {/* Animamos el encabezado por separado para que tenga estilo */}
        <motion.div variants={itemVariants} className='mb-16 flex flex-col items-center text-center'>
          <h2 className='mb-4 text-4xl font-black tracking-tight text-white md:text-5xl'>Servicios Especializados</h2>
          <div className='h-1.5 w-20 rounded-full bg-primary mb-8 shadow-lg shadow-primary/20'></div>
          <p className='max-w-2xl text-lg text-slate-400 leading-relaxed'>
            Diseñamos soluciones financieras de alta fidelidad para inversores individuales e institucionales.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {SERVICES.map((service, index) => (
            // 3. Envolvemos cada card en un motion.div que hereda el stagger
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ServicesGrid
