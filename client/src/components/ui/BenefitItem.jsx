const BenefitItem = ({ icon, title, description, buttonText }) => (
  <div className='group flex gap-5 items-start'>
    <div className='flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors'>
      <span className='text-2xl'>{icon}</span>
    </div>
    <div className='flex-grow'>
      <h3 className='text-xl font-bold text-white mb-1'>{title}</h3>
      <p className='text-slate-400 mb-3'>{description}</p>
      <button className='px-4 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 text-xs font-bold rounded-lg transition-all'>
        {buttonText}
      </button>
    </div>
  </div>
)

export default BenefitItem
