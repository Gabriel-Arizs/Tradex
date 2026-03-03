import './App.css'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Toaster } from 'sonner'
import NavBar from './components/NavBar'
import Footer from './components/Home/Footer'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className='bg-slate-900'>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Toaster richColors />
    </>
  )
}

export default App
