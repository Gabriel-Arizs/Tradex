import FacebookIcon from '../Icons/FacebookIcon'
import { InstagramIcon } from '../Icons/InstagramIcon'
import XIcon from '../Icons/XIcon'
import FooterColumn from '../ui/FooterColumn'
import { ChartNetwork } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: <FacebookIcon size={24} />, link: '#' },
  { name: 'X', icon: <XIcon size={18} />, link: '#' },
  { name: 'Instagram', icon: <InstagramIcon size={24} />, link: '#' }
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-dark-navy py-16 px-6 lg:px-10 border-t border-blue-900/30'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16'>
          {/* Columna de Marca y Social */}
          <div className='flex flex-col gap-6 lg:col-span-2'>
            <div className='flex items-center gap-3'>
              <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20'>
                <span className='text-xl font-bold'>
                  <ChartNetwork />
                </span>
              </div>
              <span className='text-xl font-black tracking-tight text-white'>
                TRADEX<span className='text-accent'>.</span>
              </span>
            </div>
            <p className='text-slate-400 text-sm leading-relaxed max-w-xs'>
              Plataforma de trading líder mundial. Regulada y auditada internacionalmente para garantizar la máxima
              seguridad de tus fondos.
            </p>

            {/* Redes Sociales con propiedades uniformes */}
            <div className='flex gap-4'>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.link}
                  aria-label={social.name}
                  className='h-10 w-10 flex items-center justify-center rounded-full bg-blue-900/20 border border-blue-800/50 text-slate-400 hover:text-accent hover:border-accent hover:bg-blue-900/40 transition-all duration-300'
                >
                  {/* El color se controla vía CSS gracias a fill="currentColor" */}
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title='Plataforma' links={['Mercados', 'Trading View', 'Apps Móviles', 'API']} />
          <FooterColumn title='Recursos' links={['Academia Tradex', 'Centro de Ayuda', 'Blog', 'Noticias']} />
          <FooterColumn title='Legal' links={['Privacidad', 'Términos', 'Riesgos', 'Cookies']} />
        </div>

        <div className='pt-8 border-t border-blue-900/30'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <p className='text-xs text-slate-500'>© {year} Tradex Global Limited. Todos los derechos reservados.</p>
            <div className='flex gap-6'>
              <span className='text-[10px] text-slate-600 uppercase tracking-widest font-bold'>FCA Regulated</span>
              <span className='text-[10px] text-slate-600 uppercase tracking-widest font-bold'>PCI DSS Compliant</span>
            </div>
          </div>

          <p className='mt-8 text-[11px] text-slate-600 leading-relaxed text-center md:text-left border-l-2 border-blue-900/50 pl-4'>
            <strong>Aviso de Riesgo:</strong> El trading de activos financieros conlleva un nivel de riesgo elevado y
            puede no ser adecuado para todos los inversores. El apalancamiento puede trabajar tanto a su favor como en
            su contra. Antes de invertir, asegúrese de comprender los riesgos involucrados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
