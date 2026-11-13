import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  FiBookOpen,
  FiCode,
  FiCpu,
  FiEye,
  FiFolder,
  FiMail,
  FiX,
} from 'react-icons/fi'

const actions = [
  { label: 'Mes projets', to: '/realisations', icon: FiFolder },
  { label: 'Mes compétences', to: '/expertise', icon: FiCode },
  { label: 'Ma formation', to: '/parcours', icon: FiBookOpen },
  { label: 'Mon CV', to: '/parcours/cv', icon: FiEye },
  { label: 'Me contacter', to: '/contact', icon: FiMail },
]

export default function Assistant() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return undefined
    closeRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const go = (to) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="assistant-panel"
        className="no-print fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600 py-2.5 pl-2 pr-4 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 dark:ring-offset-night"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15" aria-hidden="true">
          <FiCpu className="text-base" />
        </span>
        Obafemi AI
      </button>

      {open && (
        <aside
          id="assistant-panel"
          aria-labelledby="assistant-title"
          className="no-print pop-in fixed bottom-20 right-4 z-50 w-[min(92vw,22rem)] rounded-2xl glass-strong p-5 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300">
                <FiCpu aria-hidden="true" />
              </span>
              <h2 id="assistant-title" className="text-base font-bold text-gray-900 dark:text-white">
                Salut… 👋
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer l’assistant"
              className="grid h-8 w-8 place-items-center rounded-lg text-gray-500 transition hover:bg-gray-900/5 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            Je suis l’assistant de Mr. Obafemi. Je peux vous présenter son portfolio en quelques clics.
          </p>

          <div className="mt-4 grid gap-2">
            {actions.map((action) => {
              const Icon = action.icon
              return (
                <button
                  key={action.to}
                  type="button"
                  onClick={() => go(action.to)}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-200/70 bg-white/60 px-3.5 py-2.5 text-left text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-400/40 dark:hover:text-blue-300"
                >
                  <Icon aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                  {action.label}
                </button>
              )
            })}
          </div>
        </aside>
      )}
    </>
  )
}
