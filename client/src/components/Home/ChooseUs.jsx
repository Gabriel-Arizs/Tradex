import { motion } from 'framer-motion'
import ReasonCard from '../ui/ReasonCard'
import { Gauge, Headset, ShieldCheck, ShieldPlus } from 'lucide-react'

const REASONS = [
  {
    id: 'security',
    icon: <ShieldPlus />,
    title: 'Seguridad',
    description: 'Cifrado de grado militar y almacenamiento en frío para proteger tus activos digitales 24/7.'
  },
  {
    id: 'tech',
    icon: <Gauge />,
    title: 'Tecnología',
    description: 'Motores de emparejamiento de latencia ultrabaja capaces de procesar millones de órdenes por segundo.'
  },
  {
    id: 'support',
    icon: <Headset />,
    title: 'Soporte',
    description: 'Equipo multilingüe de expertos financieros disponibles en tiempo real para resolver cualquier duda.'
  },
  {
    id: 'regulation',
    icon: <ShieldCheck />,
    title: 'Regulación',
    description: 'Operamos bajo los más estrictos marcos regulatorios internacionales para tu tranquilidad legal.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const staticFadeVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

export function ChooseUs() {
  return (
    <section className='py-24 px-6 lg:px-10 bg-deep-blue relative overflow-hidden'>
      <div
        className='absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none'
        aria-hidden='true'
      />

      <div className='mx-auto max-w-7xl relative z-10'>
        <motion.div
          variants={staticFadeVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-16 flex flex-col items-center text-center'
        >
          <h2 className='mb-4 text-4xl font-black tracking-tight text-white md:text-5xl'>¿Por Qué Elegirnos?</h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '5rem' }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='h-1.5 w-20 rounded-full bg-accent mb-8'
          ></motion.div>

          <p className='max-w-2xl text-lg text-slate-400'>
            Nuestra infraestructura está diseñada para superar los estándares más exigentes del mercado financiero
            global.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {REASONS.map(reason => (
            <ReasonCard key={reason.id} {...reason} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ChooseUs
