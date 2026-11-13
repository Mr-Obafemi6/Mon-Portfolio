import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiFilter } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'
import { projectCategories, projects } from '../data/projects'
import { btn, cn } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [])

  usePageMeta(
    'Réalisations | TCHALLA Obafemi Gérard',
    'Découvrez les projets web, applications de gestion et applications de TCHALLA Obafemi Gérard.',
  )

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  return (
    <>
      <PageHeader
        kicker="04 / Réalisations"
        title="Mes projets"
        intro="Une sélection de projets web et d’applications de gestion, avec leurs technologies et leur code source lorsqu’il est public."
      />

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
            <FiFilter aria-hidden="true" />
            Filtrer par type
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                aria-pressed={filter === category.id}
                className={cn(
                  'rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200',
                  filter === category.id
                    ? 'border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'border-gray-200/80 bg-white/60 text-gray-700 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-400/40 dark:hover:text-blue-300',
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={index * 60}>
              <ProjectCard project={project} onDetails={setSelected} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-2xl glass p-8 text-center text-sm text-gray-600 dark:text-gray-300">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}

        <Reveal className="mt-10 flex justify-center">
          <Link to="/realisations/tous" className={btn('outline', 'md')}>
            Voir la page complète des projets
            <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  )
}
