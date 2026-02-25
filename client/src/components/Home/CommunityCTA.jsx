import { useRef, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
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
  const containerRef = useRef(null)

  // Lógica para el brillo que sigue al mouse
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Creamos un degradado radial dinámico que sigue al mouse
  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(0, 242, 255, 0.15),
      transparent 80%
    )
  `

  return (
    <section className='py-24 px-6 lg:px-10 bg-dark-navy relative overflow-hidden'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='group relative overflow-hidden rounded-[3rem] bg-deep-blue/40 p-8 md:p-16 border border-white/10 shadow-2xl'
        >
          {/* Capa de Brillo Seguimiento (Glow Tracking) */}
          <motion.div
            className='pointer-events-none absolute -inset-px rounded-[3rem] transition duration-300 opacity-0 group-hover:opacity-100'
            style={{ background }}
          />

          {/* Decoración: Círculo de fondo con pulso */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className='absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/20 blur-[100px] pointer-events-none'
          />

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
              {/* Icono con sombra de neón */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className='mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary shadow-[0_0_30px_rgba(0,112,243,0.5)] group-hover:shadow-primary/60 transition-all'
              >
                <TelegramIcon className='h-10 w-10 text-white' />
              </motion.div>

              <h2 className='mb-4 text-4xl font-black text-white leading-tight md:text-5xl'>
                Únete a nuestra{' '}
                <span className='text-accent drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]'>comunidad</span>
              </h2>

              <p className='mb-8 max-w-lg text-lg text-slate-300 leading-relaxed'>
                Accede gratis a señales en tiempo real, análisis técnico diario y una red de más de 15,000 inversores.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='relative inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-dark-navy transition-all group/btn hover:bg-accent hover:text-white'
              >
                <Send className='transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1' />
                Unirse Ahora
              </motion.button>
            </div>

            <div className='hidden lg:flex justify-center items-center'>
              <div className='grid grid-cols-2 gap-6'>
                {STATS.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CommunityStat {...stat} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Borde de neón fino animado (Opcional: solo se ve en hover) */}
          <div className='absolute inset-0 rounded-[3rem] border-2 border-accent/0 group-hover:border-accent/20 transition-colors duration-500' />
        </motion.div>
      </div>
    </section>
  )
}

export default CommunityCTA
