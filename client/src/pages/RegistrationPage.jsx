import { Bitcoin, ChartNoAxesCombined, CircleDollarSign, CreditCard, Mail, UserRound } from 'lucide-react'
import InputField from '../components/ui/InputField'
import BenefitItem from '../components/ui/BenefitItem'
import Button from '../components/ui/Button'
import Label from '../components/ui/Label'
import SelectField from '../components/ui/SelectField'

const RegistrationPage = () => {
  return (
    <section className='py-24 px-6 lg:px-10 grow flex items-center justify-center bg-slate-950'>
      <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch'>
        {/* COLUMNA IZQUIERDA: FORMULARIO */}
        <section className='bg-dark-navy/50 rounded-xl order-2 lg:order-1'>
          <div className='glass-panel p-8 md:p-10 rounded-xl shadow-2xl border border-slate-800 bg-slate-900/30'>
            <div className='mb-8'>
              <h1 className='text-3xl md:text-4xl font-extrabold text-white mb-2'>Únete a la élite del Trading</h1>
              <p className='text-slate-400'>Comienza tu viaje con herramientas profesionales de grado institucional.</p>
            </div>

            <form className='space-y-5' onSubmit={e => e.preventDefault()}>
              <SelectField
                label='Eligé tu plan'
                placeholder='Selecciona un plan'
                icon={<UserRound size={24} />}
                options={[
                  { id: 1, label: 'Plan 1', value: 'plan1' },
                  { id: 2, label: 'Plan 2', value: 'plan2' },
                  { id: 3, label: 'Plan 3', value: 'plan3' }
                ]}
              />

              <SelectField
                label='Elige tu broker'
                placeholder='Selecciona tu broker'
                icon={<ChartNoAxesCombined size={24} />}
                options={[
                  { id: 1, label: 'Broker 1', value: 'broker1' },
                  { id: 2, label: 'Broker 2', value: 'broker2' },
                  { id: 3, label: 'Broker 3', value: 'broker3' }
                ]}
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <InputField label='Nombre' icon={<UserRound size={24} />} placeholder='Ej. Juan' />
                <InputField label='Apellido' icon={<UserRound size={24} />} placeholder='Ej. Pérez' />
              </div>

              <InputField
                label='Correo electrónico'
                icon={<Mail size={24} />}
                type='email'
                placeholder='usuario@trading.com'
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <InputField label='Telefono' icon={<UserRound size={24} />} placeholder='44 1234 5678' />
                <InputField label='Pais' icon={<UserRound size={24} />} placeholder='Ej. Argentina' />
              </div>

              <div className='flex flex-col items-start gap-2'>
                <Label>Sube tu comprobante</Label>
                <Button className='ml-1' type='button'>
                  Subir archivo
                </Button>
              </div>

              <div className='flex items-start gap-3'>
                <input
                  id='terms'
                  type='checkbox'
                  className='mt-1 rounded border-slate-700 bg-slate-900 text-primary focus:ring-primary'
                />
                <label htmlFor='terms' className='text-xs text-slate-400 leading-relaxed'>
                  Al registrarme, acepto los{' '}
                  <a className='text-primary hover:underline' href='#'>
                    Términos de Servicio
                  </a>{' '}
                  y la{' '}
                  <a className='text-primary hover:underline' href='#'>
                    Política de Privacidad
                  </a>
                  .
                </label>
              </div>

              <button
                type='submit'
                className='w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:scale-[0.98]'
              >
                Registrarme
              </button>
            </form>
          </div>
        </section>

        {/* COLUMNA DERECHA: BENEFICIOS E IMAGEN NIVELADA */}
        <section className='order-1 lg:order-2 flex flex-col justify-between lg:pl-12'>
          {/* Contenedor Superior */}
          <div className='flex flex-col gap-8'>
            <div className='space-y-8'>
              <BenefitItem
                icon={<CreditCard size={24} />}
                title='Pago con Tarjeta'
                description='Realiza tu pago de forma segura con tarjeta. Selecciona pagar para contactar con un asesor que te ayudara en el proceso.'
                buttonText='Pagar'
              />
              <BenefitItem
                icon={<Bitcoin size={24} />}
                title='Pago con Cripto'
                description='Aceptamos USDT (Red TRC20). Al realizar tu pago asegurate de enviar lo suficiente para cubrir las tarifas de comisión. luego de realizar el pago sube tu comprobante y ponte en contacto con un asesor para que podamos verificarlo y activar tu cuenta.'
                buttonText='Ver Wallet'
              />
            </div>

            {/* Formas de Pago */}
            <div className='pt-8 border-t border-slate-800'>
              <h4 className='text-sm font-bold text-slate-400 uppercase tracking-widest mb-6'>Formas de Pago</h4>
              <div className='flex flex-wrap gap-6 items-center opacity-80'>
                <PaymentBadge icon={<CreditCard size={24} />} label='VISA/MC' color='text-white' />
                <PaymentBadge icon={<Bitcoin size={24} />} label='BTC' color='text-primary' />
                <PaymentBadge icon={<CircleDollarSign size={24} />} label='USDT' color='text-emerald-400' />
              </div>
            </div>
            <div className='pt-8 border-t border-slate-800'></div>
          </div>

          {/* Tarjeta Decorativa Inferior*/}
          <div className='relative mt-12 lg:mt-0 rounded-xl overflow-hidden shadow-2xl border border-slate-800'>
            <div
              className='aspect-video w-full bg-cover bg-center brightness-[60%]'
              style={{
                backgroundImage: `url("/imageForm.jpg")` // Verifica que la ruta sea correcta desde public
              }}
              role='img'
              aria-label='Stock market financial trading charts'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent' />
            <div className='absolute bottom-4 left-4 right-4 p-4 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-lg'>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                  <span className='text-[10px] uppercase tracking-widest text-primary font-bold'>
                    Live Profit Tracker
                  </span>
                  <span className='text-lg font-bold text-white'>+$2,485.12</span>
                </div>
                <div className='h-8 px-3 bg-primary/20 rounded-md flex items-center justify-center'>
                  <span className='text-primary font-bold text-xs'>+12.4% Today</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

// Sub-componente interno para los badges de pago
const PaymentBadge = ({ icon, label, color }) => (
  <div className='flex items-center gap-2 group transition-all hover:opacity-100 cursor-default'>
    <span className={`${color} text-3xl`}>{icon}</span>
    <span className='text-[10px] font-bold text-slate-500 group-hover:text-white'>{label}</span>
  </div>
)

export default RegistrationPage
