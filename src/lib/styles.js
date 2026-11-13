/** Concatène des classes conditionnelles. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-offset-night'

const variants = {
  primary:
    'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30',
  outline:
    'border border-gray-300 bg-white/60 text-gray-800 backdrop-blur hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 dark:border-white/15 dark:bg-white/5 dark:text-gray-100 dark:hover:border-blue-400 dark:hover:text-blue-300',
  soft: 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/20',
  ghost:
    'text-gray-700 hover:bg-gray-900/5 dark:text-gray-200 dark:hover:bg-white/10',
  danger:
    'bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600',
}

const sizes = {
  sm: 'px-3.5 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
  icon: 'h-10 w-10 p-0',
}

/** Retourne la liste de classes d'un bouton. */
export function btn(variant = 'primary', size = 'md', extra = '') {
  return cn(base, variants[variant] ?? variants.primary, sizes[size] ?? sizes.md, extra)
}

export const fieldClass = 'field'
export const labelClass = 'field-label'
