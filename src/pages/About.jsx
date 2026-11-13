import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiCode, FiLayers, FiMail, FiMapPin, FiTarget, FiTrendingUp } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { aboutDetails, profile } from '../data/site'
import { btn } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

const detailIcons = {
  graduation: FiAward,
  'map-pin': FiMapPin,
  target: FiTarget,
}

const principles = [
  {
    title: 'Utilité avant tout',
    description:
      'Chaque interface et chaque fonctionnalité doit répondre à un besoin concret de l’utilisateur ou de l’organisation.',
    icon: FiTarget,
  },
  {
    title: 'Clarté et accessibilité',
    description:
      'Un code lisible, des parcours simples et des interfaces compréhensibles sur mobile comme sur desktop.',
    icon: FiLayers,
  },
  {
    title: 'Apprentissage continu',
    description:
      'Je consolide mes bases et j’explore progressivement de nouvelles technologies comme React et Symfony.',
    icon: FiTrendingUp,
  },
]

export default function About() {
  usePageMeta(
    'Profil | TCHALLA Obafemi Gérard',
    'Découvrez le profil, la formation et la démarche de TCHALLA Obafemi Gérard, développeur web et applications.',
  )

  return (
    <>
      <PageHeader
        kicker="01 / Profil"
        title="À propos de moi"
        intro="Développeur Web & Applications, je conçois des solutions utiles, responsives et adaptées aux besoins des utilisateurs."
      />

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="rounded-3xl glass p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              {profile.role}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Concevoir des applications qui servent vraiment.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
              <p>
                Spécialiste de la conception et du développement d’applications web modernes, je
                travaille sur des solutions utiles, responsives et adaptées aux besoins des
                utilisateurs.
              </p>
              <p>
                Ma formation en <strong className="font-semibold text-gray-900 dark:text-white">Développement Web & Applications</strong>{' '}
                à FORMATEC m’oriente vers le web, le mobile et les systèmes de gestion.
              </p>
              <p>
                J’aime partir d’un besoin concret, structurer les données, puis construire une
                interface claire qui rend le quotidien plus simple. React et Symfony font partie de
                mes apprentissages actuels, que je présente avec transparence.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/realisations" className={btn('primary', 'md')}>
                Voir mes projets
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/contact" className={btn('outline', 'md')}>
                <FiMail aria-hidden="true" />
                Me contacter
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {aboutDetails.map((detail, index) => {
              const Icon = detailIcons[detail.icon] ?? FiCode
              return (
                <Reveal key={detail.title} delay={80 + index * 70}>
                  <div className="flex h-full items-start gap-4 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600/10 text-xl text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                      <Icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">{detail.title}</h3>
                      {detail.lines.map((line) => (
                        <p key={line} className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {line}
                        </p>
                      ))}
                      {detail.highlight && (
                        <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">
                          {detail.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <SectionHeading
          kicker="Ma démarche"
          title="Ce qui guide mon travail"
          intro="Trois principes simples qui structurent ma façon de concevoir et de développer."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Reveal key={principle.title} delay={index * 70}>
                <article className="h-full rounded-2xl glass p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600/10 text-xl text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {principle.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
