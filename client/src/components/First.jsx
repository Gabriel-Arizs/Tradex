export function First() {
  return (
    <section class='relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 lg:px-10'>
      <div class='absolute inset-0 z-0'>
        <div class='from-primary/5 absolute inset-0 bg-gradient-to-b to-transparent'></div>
        <div class='bg-primary/10 absolute -right-[10%] -top-[30%] h-[600px] w-[600px] rounded-full blur-[120px]'></div>
        <div class='bg-primary/5 absolute -bottom-[20%] -left-[10%] h-[400px] w-[400px] rounded-full blur-[100px]'></div>
      </div>
      <div class='relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2'>
        <div class='flex flex-col gap-8'>
          <div class='border-primary/20 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5'>
            <span class='relative flex h-2 w-2'>
              <span class='bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span class='bg-primary relative inline-flex h-2 w-2 rounded-full'></span>
            </span>
            <span class='text-xs font-bold uppercase tracking-widest'>Tecnología de Vanguardia</span>
          </div>
          <h1 class='text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white md:text-7xl'>
            Maximiza tus Inversiones con
            <span class='text-primary'>Precisión</span>
          </h1>
          <p class='max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400'>
            Opera en los mercados globales con la plataforma más avanzada y segura. Ejecución ultrarrápida,
            herramientas de IA y seguridad de grado bancario para traders exigentes.
          </p>
          <div class='flex flex-wrap gap-4'>
            <button class='bg-primary text-background-dark shadow-primary/30 rounded-xl px-8 py-4 text-lg font-bold shadow-xl transition-all hover:-translate-y-1'>
              Empieza Ahora
            </button>
            <button class='flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'>
              <span class='material-symbols-outlined'>play_circle</span>
              Ver Demo
            </button>
          </div>
        </div>
        <div class='relative hidden lg:block'>
          <div class='relative rounded-2xl border border-white/10 bg-slate-900/50 p-4 shadow-2xl backdrop-blur-sm'>
            <div class='bg-primary/20 border-primary/30 absolute -left-6 -top-6 rounded-xl border p-4 backdrop-blur-md'>
              <span class='material-symbols-outlined text-primary scale-150'>trending_up</span>
            </div>
            <img
              alt='Trading Dashboard'
              class='w-full rounded-xl border border-white/5 shadow-inner'
              data-alt='Modern dark financial dashboard with charts'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuBmHkHmWz4xznEt5CLfwQkMH7K7jsvAUK9bCyLQyk6_kSqCPU-JZLjL9DB8ktEWhOXveqEy5XkBzEtOELHT-2Hf9_vr3cDSgNO9hNpsHiLhT9BliKQClJGYTnUu49e0QAnYFH7NeLJZOjJydC0q5ZilahCFM4Tq-WjW36cm8FpVmk2URFqS5OJgyBUc2C9V3QKGhTUB7iDqs_acCwtKMkW_xKGK9qREhyhb0me98CJ5evZfu_Ug7-Nm9NfwwM8h7eM2ILjBZw1m_Gg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default First
