export function FooterColumn({ title, links }) {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-bold text-white text-base'>{title}</h4>
      <ul className='flex flex-col gap-3'>
        {links.map(link => (
          <li key={link}>
            <a
              href='#'
              className='text-sm text-slate-400 hover:text-accent transition-all hover:translate-x-1 inline-block'
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
