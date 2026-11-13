import { FaGithub } from 'react-icons/fa6'
import { FiCalendar, FiExternalLink, FiEye } from 'react-icons/fi'
import { asset } from '../lib/assets'
import { btn, cn } from '../lib/styles'
import TechIcon from './TechIcon'

const categoryLabels = {
  web: 'Site web',
  gestion: 'Gestion',
  application: 'Application',
}

export default function ProjectCard({ project, onDetails, className }) {
  const visibleTags = project.tags.slice(0, 4)
  const hiddenCount = project.tags.length - visibleTags.length

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/5">
        <img
          src={asset(project.image)}
          alt={project.alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-gray-950/65 via-gray-950/5 to-transparent"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-gray-800 shadow-sm backdrop-blur dark:bg-night-soft/85 dark:text-gray-100">
          {project.label}
        </span>
        <span className="absolute bottom-3 left-4 rounded-full bg-gray-950/45 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {categoryLabels[project.category] ?? project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-white">{project.title}</h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-gray-500 dark:text-gray-400">
            <FiCalendar aria-hidden="true" />
            {project.date}
          </span>
        </div>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <span key={tag} className="tag">
              <TechIcon name={tag} className="text-sm" />
              {tagLabel(tag)}
            </span>
          ))}
          {hiddenCount > 0 && <span className="tag">+{hiddenCount}</span>}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-5">
          {onDetails ? (
            <button type="button" onClick={() => onDetails(project)} className={btn('soft', 'sm')}>
              <FiEye aria-hidden="true" />
              Voir les détails
            </button>
          ) : (
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {project.github ? 'Code source disponible' : 'Lien GitHub non identifié'}
            </span>
          )}

          <div className="flex items-center gap-1">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir la démo de ${project.title}`}
                title="Voir la démo"
                className={btn('ghost', 'icon')}
              >
                <FiExternalLink aria-hidden="true" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir le code source de ${project.title}`}
                title="Code source"
                className={btn('ghost', 'icon')}
              >
                <FaGithub aria-hidden="true" className="text-base" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
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
  tailwind: 'Tailwind',
  vite: 'Vite',
  pwa: 'PWA',
}

function tagLabel(tag) {
  return tagLabels[tag] ?? tag
}
