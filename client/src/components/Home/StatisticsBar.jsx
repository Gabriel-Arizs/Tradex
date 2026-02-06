export function StatisticsBar() {
  return (
    <section class='border-y border-slate-200 bg-white py-12 dark:border-white/5 dark:bg-background-dark/50'>
      <div class='mx-auto max-w-7xl px-6 lg:px-10'>
        <div class='grid grid-cols-2 gap-8 md:grid-cols-4'>
          <div class='flex flex-col gap-1'>
            <p class='text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400'>
              Usuarios Activos
            </p>
            <div class='flex items-baseline gap-2'>
              <span class='text-3xl font-black text-slate-900 dark:text-white'>500K+</span>
              <span class='text-sm font-bold text-primary'>+15.4%</span>
            </div>
          </div>
          <div class='flex flex-col gap-1'>
            <p class='text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400'>
              Volumen 24h
            </p>
            <div class='flex items-baseline gap-2'>
              <span class='text-3xl font-black text-slate-900 dark:text-white'>$12B+</span>
              <span class='text-sm font-bold text-primary'>+22.1%</span>
            </div>
          </div>
          <div class='flex flex-col gap-1'>
            <p class='text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400'>
              Mercados Activos
            </p>
            <div class='flex items-baseline gap-2'>
              <span class='text-3xl font-black text-slate-900 dark:text-white'>50+</span>
              <span class='material-symbols-outlined text-sm text-primary'>public</span>
            </div>
          </div>
          <div class='flex flex-col gap-1'>
            <p class='text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400'>
              Latencia Promedio
            </p>
            <div class='flex items-baseline gap-2'>
              <span class='text-3xl font-black text-slate-900 dark:text-white'>0.2ms</span>
              <span class='material-symbols-outlined text-sm text-primary'>bolt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsBar
