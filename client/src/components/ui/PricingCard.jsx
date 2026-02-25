import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { CircleCheck, CircleX } from 'lucide-react'

export function PricingCard({ plan, price, description, features, buttonText, isPopular = false, customVariant }) {
  const cardRef = useRef(null)

  // --- Lógica de Tilt 3D ---
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Suavizado del movimiento para que se sienta orgánico
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  // Mapeo de posición a grados de rotación
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  // Variantes de animación para la entrada
  const cardAnimationVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: isPopular ? 1.05 : 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  const handleMouseMove = e => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    // Normalizamos la posición del mouse entre -0.5 y 0.5 respecto al centro
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={customVariant}
      variants={cardAnimationVariants}
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d' // Crucial para que el hijo flote
      }}
      className={`flex flex-col rounded-4xl p-10 transition-colors duration-500 ${
        isPopular
          ? 'relative bg-deep-blue/80 backdrop-blur-md border-2 border-accent cyan-glow z-10'
          : 'glass-card border border-white/10 bg-white/5 backdrop-blur-sm'
      }`}
    >
      {/* El contenido lleva translateZ para el efecto de profundidad */}
      <div style={{ transform: 'translateZ(60px)', transformStyle: 'preserve-3d' }} className='flex flex-col h-full'>
        {isPopular && (
          <div className='absolute -top-12 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-dark-navy shadow-lg shadow-accent/20'>
            Más Popular
          </div>
        )}

        <div className='mb-8'>
          <h3 className='text-xl font-bold text-white'>{plan}</h3>
          <div className='mt-4 flex items-baseline gap-1'>
            <span className='text-4xl font-black text-white'>${price}</span>
            <span className='text-slate-400'>/mes</span>
          </div>
          <p className='mt-4 text-sm text-slate-400 leading-relaxed'>{description}</p>
        </div>

        <ul className='mb-10 flex flex-1 flex-col gap-4'>
          {features.map((f, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className={`flex items-center gap-3 ${f.included ? 'text-slate-200' : 'text-slate-600'}`}
            >
              <span className={`text-xl ${f.included ? (isPopular ? 'text-accent' : 'text-primary') : ''}`}>
                {f.included ? <CircleCheck size={20} /> : <CircleX size={20} />}
              </span>
              <span className={`text-sm ${!f.included ? 'line-through' : ''}`}>{f.text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full rounded-xl py-4 font-bold text-white transition-all ${
            isPopular
              ? 'bg-primary shadow-lg shadow-primary/30 hover:bg-blue-500'
              : 'border border-slate-700 bg-white/5 hover:bg-white/10'
          }`}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default PricingCard
