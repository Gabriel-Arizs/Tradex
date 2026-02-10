export function PricingCard({ plan, price, description, features, buttonText, isPopular = false }) {
  return (
    <div
      className={`flex flex-col rounded-4xl p-10 transition-all ${
        isPopular
          ? 'relative bg-deep-blue/80 backdrop-blur-md border-2 border-accent cyan-glow z-10 scale-105'
          : 'glass-card hover:-translate-y-1'
      }`}
    >
      {isPopular && (
        <div className='absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-black uppercase tracking-widest text-dark-navy'>
          Más Popular
        </div>
      )}
      <div className='mb-8'>
        <h3 className='text-xl font-bold text-white'>{plan}</h3>
        <div className='mt-4 flex items-baseline gap-1'>
          <span className='text-4xl font-black text-white'>${price}</span>
          <span className='text-slate-400'>/mes</span>
        </div>
        <p className='mt-4 text-sm text-slate-400'>{description}</p>
      </div>
      <ul className='mb-10 flex flex-1 flex-col gap-4'>
        {features.map((f, idx) => (
          <li key={idx} className={`flex items-center gap-3 ${f.included ? 'text-slate-200' : 'text-slate-600'}`}>
            <span
              className={`material-symbols-outlined text-xl ${f.included ? (isPopular ? 'text-accent' : 'text-primary') : ''}`}
            >
              {f.included ? 'check_circle' : 'cancel'}
            </span>
            <span className={`text-sm ${!f.included ? 'line-through' : ''}`}>{f.text}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full rounded-xl py-4 font-bold text-white transition-all ${
          isPopular
            ? 'bg-primary shadow-lg shadow-primary/30 hover:bg-blue-500'
            : 'border border-slate-700 bg-white/5 hover:bg-white/10'
        }`}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default PricingCard
