import StatItem from '../ui/StatItem'
import { Earth, Zap } from 'lucide-react'

export const StatsBar = () => (
  <section className='bg-deep-blue py-12 border-y border-blue-900/30'>
    <div className='mx-auto max-w-7xl px-6 lg:px-10'>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
        {/* Ahora todos pasan el icono como un componente JSX */}
        <StatItem label='Usuarios Activos' value='500K+' trend='+15.4%' />
        <StatItem label='Volumen 24h' value='$12B+' trend='+22.1%' />
        <StatItem label='Mercados Activos' value='50+' icon={<Earth />} />
        <StatItem label='Latencia' value='0.2ms' icon={<Zap />} iconColor='text-accent' />
      </div>
    </div>
  </section>
)
