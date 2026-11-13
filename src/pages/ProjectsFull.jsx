import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiMail } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import { btn } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

export default function ProjectsFull() {
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [])

  usePageMeta(
    'Tous les projets | TCHALLA Obafemi Gérard',
    'La liste complète des projets réalisés par TCHALLA Obafemi Gérard.',
  )

  return (
    <>
      <PageHeader
        kicker="Réalisations / Vue complète"
        title="Tous mes projets"
        intro="Chaque projet est présenté avec sa période, son type, ses technologies et les liens disponibles."
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/realisations" className={btn('outline', 'sm')}>
            <FiArrowLeft aria-hidden="true" />
            Retour aux réalisations
          </Link>
          <Link to="/contact" className={btn('soft', 'sm')}>
            <FiMail aria-hidden="true" />
            Proposer un projet
          </Link>
        </div>
      </PageHeader>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 50}>
              <ProjectCard project={project} onDetails={setSelected} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  )
}
