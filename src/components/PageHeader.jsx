import Reveal from './Reveal'

export default function PageHeader({ kicker, title, intro, children }) {
  return (
    <header className="no-print relative overflow-hidden pb-10 pt-32 sm:pb-14 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10"
      />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          {kicker && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              {kicker}
            </p>
          )}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </header>
  )
}
