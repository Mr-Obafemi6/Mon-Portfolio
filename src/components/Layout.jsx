import { Outlet } from 'react-router-dom'
import Assistant from './Assistant'
import BackToTop from './BackToTop'
import Background from './Background'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Aller au contenu
      </a>
      <Background />
      <ScrollToTop />
      <Navbar />
      <main id="main" className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <Assistant />
    </div>
  )
}
