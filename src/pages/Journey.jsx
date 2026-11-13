import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiCode, FiDatabase, FiEye, FiLayers, FiPrinter, FiZap } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import TechIcon from '../components/TechIcon'
import SectionHeading from '../components/SectionHeading'
import { timeline } from '../data/site'
import { btn } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

const timelineIcons = {
  graduation: FiAward,
  code: FiCode,
  zap: FiZap,
  database: FiDatabase,
  layers: FiLayers,
}

export default function Journey() {
  usePageMeta(
    'Parcours | TCHALLA Obafemi Gérard',
    'Formation, compétences et évolution de TCHALLA Obafemi Gérard, développeur web et applications.',
  )

  return (
    <>
      <PageHeader
        kicker="05 / Parcours"
        title="Mon évolution"
        intro="Les étapes qui ont construit mon profil, des fondations du web aux applications de gestion, jusqu’à React et React Native."
      />

      <section className="mx-auto w-full max-w-4xl px-5 pb-16 sm:px-8">
        <ol className="relative space-y-5 before:absolute before:bottom-4 before:left-[1.35rem] before:top-4 before:w-px before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-transparent sm:before:left-6">
          {timeline.map((step, index) => {
            const Icon = timelineIcons[step.icon]
            return (
              <Reveal key={step.title} as="li" delay={index * 60} className="relative pl-14 sm:pl-20">
                <span className="absolute left-0 top-3 z-10 grid h-11 w-11 place-items-center rounded-xl border border-white/70 bg-white/80 text-lg text-blue-600 shadow-md backdrop-blur sm:h-12 sm:w-12 dark:border-white/10 dark:bg-night-soft/90 dark:text-blue-300">
                  {Icon ? <Icon aria-hidden="true" /> : <TechIcon name={step.icon} colored />}
                </span>
                <div className="rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                      {step.label}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500">
                      Étape {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-2 text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                    {step.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
        <Reveal>
          <div className="rounded-3xl glass p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  06 / Parcours professionnel
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                  Mon CV
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Consultez la version en ligne ou téléchargez le document pour retrouver mon
                  parcours et mes compétences.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/parcours/cv" className={btn('primary', 'md')}>
                  <FiEye aria-hidden="true" />
                  Voir mon CV
                </Link>
                <Link to="/parcours/cv" className={btn('outline', 'md')}>
                  <FiPrinter aria-hidden="true" />
                  Version imprimable
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <SectionHeading
          kicker="Et ensuite ?"
          title="Continuer à construire et à apprendre"
          intro="Les projets et l’apprentissage continu restent le meilleur moyen de faire progresser la qualité de ce que je livre."
        />
        <Reveal delay={80} className="mt-7">
          <Link to="/realisations" className={btn('soft', 'md')}>
            Découvrir mes réalisations
            <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
