import PricingCard from '../ui/PricingCard'
import { SectionHeader } from '../ui/SectionHeader'

export function PricingGrid() {
  // Estados iniciales para la animación de entrada
  const variants = {
    left: { opacity: 0, x: -60 },
    center: { opacity: 0, y: 60, scale: 0.9 },
    right: { opacity: 0, x: 60 }
  }

  return (
    <section className='py-24 px-6 lg:px-10 bg-dark-navy relative overflow-hidden'>
      {/* Glow decorativo de fondo */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[120px] pointer-events-none' />

      <div className='mx-auto max-w-7xl relative z-10'>
        <SectionHeader
          title='Planes de Suscripción'
          description='Elige el nivel de herramientas y soporte que mejor se adapte a tu estrategia de inversión.'
          accentColor='bg-accent'
        />

        {/* El contenedor necesita perspective para el efecto 3D */}
        <div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch mt-16'
          style={{ perspective: '1200px' }}
        >
          <PricingCard
            customVariant={variants.left}
            plan='Explorer'
            price='0'
            isPopular={false}
            description='Perfecto para dar tus primeros pasos en el mercado.'
            buttonText='Empezar Gratis'
            features={[
              { text: 'Gráficos en Tiempo Real', included: true },
              { text: 'Señales Diarias (Limitadas)', included: true },
              { text: 'Soporte por Comunidad', included: true },
              { text: 'Trading Algorítmico', included: false },
              { text: 'IA Predictiva', included: false }
            ]}
          />

          <PricingCard
            customVariant={variants.center}
            plan='Pro Trader'
            price='49'
            isPopular={true}
            description='Para traders activos que buscan una ventaja competitiva.'
            buttonText='Suscribirse Ahora'
            features={[
              { text: 'Todo en Explorer', included: true },
              { text: 'Trading Algorítmico', included: true },
              { text: 'Análisis de IA en tiempo real', included: true },
              { text: 'Soporte Prioritario 24/7', included: true },
              { text: 'Acceso API Ilimitado', included: false }
            ]}
          />

          <PricingCard
            customVariant={variants.right}
            plan='Elite Institutional'
            price='199'
            isPopular={false}
            description='Poder total para grandes volúmenes y firmas de inversión.'
            buttonText='Contactar Ventas'
            features={[
              { text: 'Todo en Pro Trader', included: true },
              { text: 'Ejecución de Latencia Cero', included: true },
              { text: 'Gestor de Cuentas Dedicado', included: true },
              { text: 'Terminal Multi-Pantalla', included: true },
              { text: 'Reportes de Auditoría', included: true }
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default PricingGrid
