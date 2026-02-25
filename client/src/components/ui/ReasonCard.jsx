import { motion } from 'framer-motion'

export function ReasonCard({ icon, title, description, variants }) {
  // Solo la lógica de interacción
  const interactionVariants = {
    rest: { scale: 1 },
    hovered: { scale: 1.03, transition: { type: 'spring', stiffness: 300 } }
  }

  const iconVariants = {
    rest: { rotate: 0 },
    hovered: { rotate: [0, -45, 45, -45, 45, 0] }
  }

  return (
    <motion.div variants={variants}>
      <motion.div
        initial='rest'
        whileHover='hovered'
        variants={interactionVariants}
        className='glass-card h-full w-full group rounded-[2.5rem] p-8 border border-white/5 bg-white/5 backdrop-blur-sm cursor-pointer hover:border-accent/40 transition-colors'
      >
        <motion.div
          variants={iconVariants}
          className='mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg'
        >
          {icon}
        </motion.div>
        <h3 className='mb-3 text-xl font-bold text-white'>{title}</h3>
        <p className='text-sm text-slate-400 leading-relaxed'>{description}</p>
      </motion.div>
    </motion.div>
  )
}

export default ReasonCard
