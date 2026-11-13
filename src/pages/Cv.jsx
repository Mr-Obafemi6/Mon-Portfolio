import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa6'
import {
  FiArrowLeft,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiMail,
  FiMapPin,
  FiMaximize2,
  FiPhone,
  FiPrinter,
  FiX,
} from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { learning, profile, technologies, tools } from '../data/site'
import { projects } from '../data/projects'
import { asset } from '../lib/assets'
import { btn } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

const sectionTitle =
  'text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300'

export default function Cv() {
  const [fullscreen, setFullscreen] = useState(false)
  const [pdfAvailable, setPdfAvailable] = useState(false)
  const cvUrl = asset(profile.cv)

  usePageMeta(
    'Mon CV | TCHALLA Obafemi Gérard',
    'Consultez, imprimez et téléchargez le CV de TCHALLA Obafemi Gérard, développeur web et applications.',
  )

  useEffect(() => {
    let active = true

    fetch(cvUrl)
      .then(async (response) => {
        if (!response.ok) return false
        const buffer = await response.arrayBuffer()
        const signature = String.fromCharCode(...new Uint8Array(buffer.slice(0, 5)))
        return signature === '%PDF-' && buffer.byteLength > 1024
      })
      .then((isPdf) => {
        if (active) setPdfAvailable(isPdf)
      })
      .catch(() => {
        if (active) setPdfAvailable(false)
      })

    return () => {
      active = false
    }
  }, [cvUrl])

  useEffect(() => {
    if (!fullscreen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setFullscreen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [fullscreen])

  return (
    <>
      <PageHeader kicker="Parcours / Curriculum Vitae" title="Mon CV" intro="Une version claire et imprimable de mon parcours, de mes compétences et de mes projets.">
        <div className="no-print mt-7 flex flex-wrap gap-3">
          <Link to="/parcours" className={btn('outline', 'sm')}>
            <FiArrowLeft aria-hidden="true" />
            Retour au parcours
          </Link>
          <button type="button" onClick={() => window.print()} className={btn('primary', 'sm')}>
            <FiPrinter aria-hidden="true" />
            Imprimer / Enregistrer en PDF
          </button>
          {pdfAvailable && (
            <a href={cvUrl} download className={btn('outline', 'sm')}>
              <FiDownload aria-hidden="true" />
              Télécharger le PDF
            </a>
          )}
        </div>
      </PageHeader>

      <section className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
        <Reveal>
          <article className="print-cv rounded-3xl glass p-6 sm:p-10">
            <header className="flex flex-col gap-5 border-b border-gray-200/70 pb-6 sm:flex-row sm:items-start sm:justify-between dark:border-white/10">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                  {profile.name}
                </h1>
                <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">{profile.role}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-600 dark:text-gray-300">
                  <li className="inline-flex items-center gap-1.5">
                    <FiMail aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                    <a href={`mailto:${profile.email}`} className="hover:underline">
                      {profile.email}
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <FiPhone aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                    <a href={`tel:${profile.phoneRaw}`} className="hover:underline">
                      {profile.phone}
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <FiMapPin aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                    {profile.location}
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <FaGithub aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/Mr-Obafemi6
                    </a>
                  </li>
                </ul>
              </div>
              <img
                src={asset(profile.avatar)}
                alt={`Portrait de ${profile.name}`}
                className="h-20 w-20 rounded-2xl border border-white/70 object-cover shadow-sm sm:h-24 sm:w-24 dark:border-white/10"
              />
            </header>

            <section className="mt-6">
              <h2 className={sectionTitle}>Profil</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Développeur Web & Applications formé à FORMATEC, spécialisé dans la conception
                d’applications web modernes, de systèmes de gestion et d’interfaces responsives.
                J’accorde une attention particulière à l’utilité, à la clarté du code et à
                l’adaptation aux besoins réels des utilisateurs.
              </p>
            </section>

            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              <section>
                <h2 className={sectionTitle}>Formation</h2>
                <div className="mt-2 rounded-xl border border-gray-200/70 p-4 dark:border-white/10">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    Développement Web & Applications
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                    FORMATEC
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                    Parcours orienté vers le web, le mobile et les systèmes de gestion.
                  </p>
                </div>
                <div className="mt-3 rounded-xl border border-gray-200/70 p-4 dark:border-white/10">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">Apprentissage continu</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                    {learning.map((item) => item.name).join(' · ')} — technologies étudiées
                    progressivement.
                  </p>
                </div>
              </section>

              <section>
                <h2 className={sectionTitle}>Compétences</h2>
                <ul className="mt-3 space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    <strong className="font-semibold text-gray-900 dark:text-white">Frontend :</strong>{' '}
                    HTML5, CSS3, JavaScript, React, Tailwind CSS, Bootstrap
                  </li>
                  <li>
                    <strong className="font-semibold text-gray-900 dark:text-white">Backend :</strong>{' '}
                    PHP, Laravel
                  </li>
                  <li>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      Base de données :
                    </strong>{' '}
                    MySQL, phpMyAdmin, Laragon, XAMPP
                  </li>
                  <li>
                    <strong className="font-semibold text-gray-900 dark:text-white">Conception :</strong>{' '}
                    MySQL Workbench, draw.io
                  </li>
                  <li>
                    <strong className="font-semibold text-gray-900 dark:text-white">Outils :</strong>{' '}
                    {tools.map((tool) => tool.name).join(', ')}
                  </li>
                  <li>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      En apprentissage :
                    </strong>{' '}
                    {learning.map((item) => item.name).join(', ')}
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {technologies.map((technology) => (
                    <span key={technology.name} className="tag">
                      {technology.name}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <section className="mt-7">
              <h2 className={sectionTitle}>Projets</h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {projects.map((project) => (
                  <li
                    key={project.id}
                    className="rounded-xl border border-gray-200/70 p-4 dark:border-white/10"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <span className="shrink-0 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                        {project.date}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <footer className="mt-7 border-t border-gray-200/70 pt-5 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
              <p>
                Portfolio en ligne et code source :{' '}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:underline dark:text-blue-300"
                >
                  github.com/Mr-Obafemi6
                </a>
              </p>
            </footer>
          </article>
        </Reveal>

        <Reveal delay={80} className="no-print mt-6">
          <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-blue-200/60 bg-blue-50/60 p-4 text-sm sm:flex-row sm:items-center dark:border-blue-400/20 dark:bg-blue-500/10">
            <p className="text-gray-700 dark:text-gray-300">
              <FiFileText aria-hidden="true" className="mr-1.5 inline text-blue-600 dark:text-blue-400" />
              Astuce : utilisez « Imprimer / Enregistrer en PDF » pour conserver une copie de cette page.
            </p>
            <button type="button" onClick={() => window.print()} className={btn('soft', 'sm')}>
              <FiPrinter aria-hidden="true" />
              Imprimer
            </button>
          </div>
        </Reveal>

        {pdfAvailable && (
          <Reveal delay={120} className="no-print mt-6 overflow-hidden rounded-3xl glass">
            <div className="flex items-center justify-between gap-3 border-b border-gray-200/70 p-5 dark:border-white/10">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white">Version PDF</h2>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setFullscreen(true)} className={btn('outline', 'sm')}>
                  <FiMaximize2 aria-hidden="true" />
                  Plein écran
                </button>
                <a href={cvUrl} target="_blank" rel="noopener noreferrer" className={btn('ghost', 'sm')}>
                  <FiExternalLink aria-hidden="true" />
                  Ouvrir
                </a>
              </div>
            </div>
            <iframe
              src={cvUrl}
              title={`CV PDF de ${profile.name}`}
              className="h-[70vh] min-h-[32rem] w-full bg-white"
            />
          </Reveal>
        )}
      </section>

      {fullscreen && (
        <div
          className="fixed inset-0 z-[70] flex flex-col bg-gray-950/80 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="CV en plein écran"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setFullscreen(false)
          }}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 pb-3 text-white">
            <p className="text-sm font-semibold">CV — {profile.name}</p>
            <div className="flex items-center gap-2">
              <a
                href={cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <FiDownload aria-hidden="true" />
                Télécharger
              </a>
              <button
                type="button"
                onClick={() => setFullscreen(false)}
                aria-label="Fermer le CV en plein écran"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-lg text-white backdrop-blur transition hover:bg-white/20"
              >
                <FiX aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-6xl flex-1 overflow-hidden rounded-2xl bg-white shadow-2xl">
            <iframe src={cvUrl} title={`CV plein écran de ${profile.name}`} className="h-full w-full" />
          </div>
        </div>
      )}
    </>
  )
}
