import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/site'
import { asset } from '../lib/assets'
import { btn, cn } from '../lib/styles'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'border-b transition-all duration-300',
          scrolled || open
            ? 'border-white/60 bg-white/85 shadow-lg shadow-gray-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-night/85'
            : 'border-transparent bg-white/45 backdrop-blur-md dark:bg-night/40',
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between gap-3 sm:h-20" aria-label="Navigation principale">
            <Link
              to="/"
              className="group flex items-center gap-2.5 rounded-xl focus-visible:outline-none"
              aria-label="Accueil — TCHALLA Obafemi Gérard"
            >
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
                <img src={asset(profile.logo)} alt="" className="h-8 w-8 object-contain" aria-hidden="true" />
              </span>
              <span className="hidden text-sm font-extrabold tracking-tight text-gray-900 sm:block dark:text-white">
                Obafemi<span className="text-blue-600 dark:text-blue-400">_dev</span>
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      cn(
                        'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                        isActive
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-gray-600 hover:bg-gray-900/5 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={cn(
                            'absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-blue-600 transition-opacity dark:bg-blue-400',
                            isActive ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link to="/contact" className={cn(btn('primary', 'sm'), 'hidden md:inline-flex')}>
                Me contacter
              </Link>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/70 bg-white/70 text-xl text-gray-700 shadow-sm transition hover:text-blue-700 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-blue-300"
              >
                {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              </button>
            </div>
          </nav>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            'overflow-hidden transition-all duration-300 ease-out lg:hidden',
            open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="mx-4 mb-4 rounded-2xl border border-white/70 bg-white/90 p-2 shadow-xl shadow-gray-900/5 backdrop-blur-xl sm:mx-6 dark:border-white/10 dark:bg-night-soft/95">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300'
                          : 'text-gray-700 hover:bg-gray-900/5 dark:text-gray-200 dark:hover:bg-white/5',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="/contact" className={cn(btn('primary', 'md'), 'mt-2 w-full')}>
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
