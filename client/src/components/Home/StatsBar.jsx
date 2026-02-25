import { motion } from 'framer-motion'
import StatItem from '../ui/StatItem'
import { Earth, Zap } from 'lucide-react'

const statsItems = [
  <StatItem key='1' label='Usuarios Activos' value='500K+' trend='+15.4%' />,
  <StatItem key='2' label='Volumen 24h' value='$12B+' trend='+22.1%' />,
  <StatItem key='3' label='Mercados Activos' value='50+' icon={<Earth />} />,
  <StatItem key='4' label='Latencia' value='0.2ms' icon={<Zap />} iconColor='text-accent' />
]

export const StatsBar = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Un stagger ligeramente más corto (0.3s) suele sentirse más fluido
        staggerChildren: 0.3,
        // Retraso inicial para que no empiece apenas carga la sección
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      filter: 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  }

  return (
    <section className='bg-deep-blue py-12 border-y border-blue-900/30'>
      <div className='mx-auto max-w-7xl px-6 lg:px-10'>
        <motion.div
          className='grid grid-cols-2 gap-8 md:grid-cols-4'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
