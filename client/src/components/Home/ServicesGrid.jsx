export function ServicesGrid() {
  return (
    <section class='px-6 py-24 lg:px-10'>
      <div class='mx-auto max-w-7xl'>
        <div class='mb-16 flex flex-col items-center text-center'>
          <h2 class='mb-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl'>
            Servicios Especializados
          </h2>
          <div class='mb-8 h-1.5 w-20 rounded-full bg-primary'></div>
          <p class='max-w-2xl text-lg text-slate-600 dark:text-slate-400'>
            Diseñamos soluciones financieras de alta fidelidad para inversores individuales e institucionales.
          </p>
        </div>
        <div class='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div class='group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-2xl dark:border-white/10 dark:bg-white/5'>
            <div class='mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background-dark'>
              <span class='material-symbols-outlined scale-125'>memory</span>
            </div>
            <h3 class='mb-3 text-xl font-extrabold text-slate-900 dark:text-white'>Trading Algorítmico</h3>
            <p class='mb-6 text-slate-600 dark:text-slate-400'>
              Ejecuta estrategias complejas con nuestros motores de alta frecuencia. Automatización total
              basada en parámetros técnicos avanzados.
            </p>
            <a class='flex items-center gap-2 text-sm font-bold text-primary' href='#'>
              Saber más
              <span class='material-symbols-outlined text-sm'>arrow_forward</span>
            </a>
          </div>
          <div class='group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-2xl dark:border-white/10 dark:bg-white/5'>
            <div class='mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background-dark'>
              <span class='material-symbols-outlined scale-125'>pie_chart</span>
            </div>
            <h3 class='mb-3 text-xl font-extrabold text-slate-900 dark:text-white'>Gestión de Portafolio</h3>
            <p class='mb-6 text-slate-600 dark:text-slate-400'>
              Diversificación inteligente asistida por IA. Analizamos millones de puntos de datos para
              optimizar tu perfil de riesgo-recompensa.
            </p>
            <a class='flex items-center gap-2 text-sm font-bold text-primary' href='#'>
              Saber más
              <span class='material-symbols-outlined text-sm'>arrow_forward</span>
            </a>
          </div>
          <div class='group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-2xl dark:border-white/10 dark:bg-white/5'>
            <div class='mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background-dark'>
              <span class='material-symbols-outlined scale-125'>query_stats</span>
            </div>
            <h3 class='mb-3 text-xl font-extrabold text-slate-900 dark:text-white'>Análisis de Mercado</h3>
            <p class='mb-6 text-slate-600 dark:text-slate-400'>
              Gráficos profesionales, indicadores propietarios y noticias en tiempo real. Todo lo que
              necesitas para tomar decisiones informadas.
            </p>
            <a class='flex items-center gap-2 text-sm font-bold text-primary' href='#'>
              Saber más
              <span class='material-symbols-outlined text-sm'>arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
