import './App.css'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Toaster } from 'sonner'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='bg-slate-900'>
        <Suspense fallback={<h1>Loading...</h1>}>
          <section>
            <div>
              <Outlet />
            </div>
          </section>
        </Suspense>
      </main>
      <Toaster richColors />
    </>
  )
}

export default App
