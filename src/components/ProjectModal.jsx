import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FaGithub } from 'react-icons/fa6'
import { FiCalendar, FiExternalLink, FiFolder, FiX } from 'react-icons/fi'
import { asset } from '../lib/assets'
import { btn, cn } from '../lib/styles'
import TechIcon from './TechIcon'

const categoryLabels = {
  web: 'Site web',
  gestion: 'Gestion',
  application: 'Application',
}

const tagLabels = {
  html5: 'HTML',
  css3: 'CSS',
  javascript: 'JavaScript',
  php: 'PHP',
  mysql: 'MySQL',
  git: 'Git',
  github: 'GitHub',
  laravel: 'Laravel',
  symfony: 'Symfony',
  react: 'React',
  bootstrap: 'Bootstrap',
  vscode: 'VS Code',
  cpp: 'C++',
  csharp: 'C#',
  tailwind: 'Tailwind CSS',
  vite: 'Vite',
  pwa: 'PWA',
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = Array.from(panelRef.current.querySelectorAll(focusableSelector))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [project, onClose])

  if (!project) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-gray-950/65 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="pop-in relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl dark:bg-night-soft"
      >
        <div className="relative">
          <img
            src={asset(project.image)}
            alt={project.alt}
            className="h-56 w-full object-cover object-top sm:h-72"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/10 to-transparent"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer les détails du projet"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-lg text-gray-800 shadow-lg backdrop-blur transition hover:bg-white hover:text-blue-700 dark:bg-night-soft/85 dark:text-gray-100"
          >
            <FiX aria-hidden="true" />
          </button>
          <span className="absolute left-5 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-gray-800 shadow-sm backdrop-blur dark:bg-night-soft/85 dark:text-gray-100">
            {project.label}
          </span>
          <h2
            id="project-modal-title"
            className="absolute bottom-4 left-5 right-5 text-2xl font-bold text-white drop-shadow sm:text-3xl"
          >
            {project.title}
          </h2>
        </div>

        <div className="p-5 sm:p-7">
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
            {project.longDescription || project.description}
          </p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-white/10 dark:bg-white/5">
              <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <FiFolder aria-hidden="true" />
                Type
              </dt>
              <dd className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-100">
                {categoryLabels[project.category] ?? project.category}
              </dd>
            </div>
            <div className="rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-white/10 dark:bg-white/5">
              <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <FiCalendar aria-hidden="true" />
                Période
              </dt>
              <dd className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-100">{project.date}</dd>
            </div>
            <div className="rounded-xl border border-gray-200/70 bg-gray-50/70 p-3 dark:border-white/10 dark:bg-white/5">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Technologies
              </dt>
              <dd className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-100">
                {project.tags.length} outils
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                <TechIcon name={tag} className="text-sm" />
                {tagLabels[tag] ?? tag}
              </span>
            ))}
          </div>

          {project.features.length > 0 && (
            <div className="mt-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">Points clés</h3>
              <ul className="mt-2 space-y-1.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={btn('primary', 'md')}
              >
                <FaGithub aria-hidden="true" />
                Voir le code source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={btn('outline', 'md')}
              >
                <FiExternalLink aria-hidden="true" />
                Ouvrir la démo
              </a>
            )}
            {!project.github && !project.demo && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Aucun lien public n’est disponible pour ce projet.
              </span>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
