import { cn } from '../lib/styles'
import Reveal from './Reveal'

export default function SectionHeading({ kicker, title, intro, align = 'left', className }) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {kicker && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {intro}
        </p>
      )}
    </Reveal>
  )
}
