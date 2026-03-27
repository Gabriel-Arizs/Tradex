export const SelectField = ({ label, icon, placeholder, options = [], name, register, validation, error }) => (
  <div className='space-y-2'>
    <label className='text-sm font-medium text-slate-300 ml-1'>{label}</label>
    <div className='relative'>
      <span className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl pointer-events-none'>
        {icon}
      </span>
      <select
        {...(register ? register(name, validation) : {})}
        className={`w-full bg-slate-900/50 border ${error ? 'border-red-500' : 'border-slate-700'} rounded-lg py-3.5 pl-12 pr-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer`}
      >
        <option value=''>{placeholder}</option>
        {options.map(opt => (
          <option key={opt.id} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
    {error && <span className='text-xs text-red-400 ml-1'>{error.message}</span>}
  </div>
)

export default SelectField
