import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { cn } from '../lib/styles'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut de la page"
      className={cn(
        'no-print fixed bottom-24 right-5 z-40 grid h-11 w-11 place-items-center rounded-xl border border-gray-200/70 bg-white/80 text-gray-700 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-700 dark:border-white/10 dark:bg-night-soft/80 dark:text-gray-200 dark:hover:text-blue-300',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <FiArrowUp className="text-lg" aria-hidden="true" />
    </button>
  )
}
