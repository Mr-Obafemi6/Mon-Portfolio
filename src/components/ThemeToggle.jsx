import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { cn } from '../lib/styles'

export default function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
      title={isDark ? 'Thème clair' : 'Thème sombre'}
      aria-pressed={isDark}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/70 bg-white/70 text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-400/40 dark:hover:text-blue-300',
        className,
      )}
    >
      {isDark ? <FiSun className="text-lg" aria-hidden="true" /> : <FiMoon className="text-lg" aria-hidden="true" />}
    </button>
  )
}
