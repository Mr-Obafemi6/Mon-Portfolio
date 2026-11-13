import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiChevronDown,
  FiFileText,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceIcon from '../components/ServiceIcon'
import SocialLinks from '../components/SocialLinks'
import TechIcon from '../components/TechIcon'
import { heroBadges, profile, services, stats, technologies } from '../data/site'
import { projects } from '../data/projects'
import { asset } from '../lib/assets'
import { btn, cn } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

const techNames = Object.fromEntries(technologies.map((technology) => [technology.key, technology.name]))

const heroLogos = [
  { tech: 'php', position: 'left-[7%] top-[24%]', delay: '0s', size: 'text-3xl' },
  { tech: 'react', position: 'left-[13%] top-[58%]', delay: '1.8s', size: 'text-2xl' },
  { tech: 'mysql', position: 'right-[9%] top-[22%]', delay: '0.9s', size: 'text-3xl' },
  { tech: 'laravel', position: 'right-[15%] top-[55%]', delay: '2.6s', size: 'text-2xl' },
  { tech: 'github', position: 'left-[24%] top-[13%]', delay: '2.1s', size: 'text-2xl' },
  { tech: 'symfony', position: 'right-[26%] top-[12%]', delay: '1.2s', size: 'text-2xl' },
]

export default function Home() {
  const [selected, setSelected] = useState(null)
  const closeModal = useCallback(() => setSelected(null), [])
  const featured = projects.filter((project) => project.featured).slice(0, 3)

  usePageMeta(
    'TCHALLA Obafemi Gérard | Développeur Web & Applications',
    'Portfolio de TCHALLA Obafemi Gérard, développeur web et applications à Lomé : projets, compétences et parcours.',
  )

  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-24 sm:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-80 dark:opacity-60" />
          <div className="absolute inset-0 bg-dots opacity-40" />
          <div className="absolute -left-24 top-1/3 h-80 w-80 animate-blob rounded-full bg-blue-400/25 blur-[90px] dark:bg-blue-500/20" />
          <div className="absolute -right-20 top-16 h-72 w-72 animate-blob rounded-full bg-cyan-300/25 blur-[90px] [animation-delay:4s] dark:bg-cyan-400/10" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-blob rounded-full bg-indigo-400/20 blur-[90px] [animation-delay:8s] dark:bg-indigo-500/15" />

          {heroLogos.map((logo) => (
            <span
              key={logo.tech}
              className={cn(
                'absolute hidden animate-float rounded-2xl border border-white/70 bg-white/60 p-3 text-gray-700 shadow-lg backdrop-blur-md md:grid dark:border-white/10 dark:bg-white/5 dark:text-gray-200',
                logo.position,
              )}
              style={{ animationDelay: logo.delay }}
            >
              <TechIcon name={logo.tech} colored className={logo.size} />
            </span>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="flex justify-center">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 opacity-30 blur-xl"
                />
                <img
                  src={asset(profile.avatar)}
                  alt={`Portrait de ${profile.name}`}
                  className="relative h-28 w-28 rounded-full border-4 border-white object-cover shadow-2xl sm:h-36 sm:w-36 dark:border-white/10"
                  width="144"
                  height="144"
                />
              </div>
            </Reveal>

            <Reveal delay={60}>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
                Bonjour, je suis
              </p>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                TCHALLA <span className="text-gradient">Obafemi Gérard</span>
              </h1>
              <p className="mt-4 text-lg font-semibold text-gray-700 sm:text-xl dark:text-gray-200">
                {profile.role}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                {profile.shortBio}
              </p>
            </Reveal>

            <Reveal delay={130}>
              <ul className="mt-7 flex flex-wrap justify-center gap-2" aria-label="Technologies utilisées">
                {heroBadges.map((badge) => (
                  <li key={badge.label}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-400/40 dark:hover:text-blue-300">
                      <TechIcon name={badge.tech} colored className="text-sm" />
                      {badge.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link to="/realisations" className={btn('primary', 'lg')}>
                  Voir mes projets
                  <FiArrowRight aria-hidden="true" />
                </Link>
                <Link to="/parcours/cv" className={btn('outline', 'lg')}>
                  <FiFileText aria-hidden="true" />
                  Voir mon CV
                </Link>
                <Link to="/contact" className={btn('ghost', 'lg')}>
                  <FiMail aria-hidden="true" />
                  Me contacter
                </Link>
              </div>
            </Reveal>

            <Reveal delay={260} className="mt-7 flex flex-col items-center gap-3">
              <SocialLinks />
              <p className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                <FiMapPin aria-hidden="true" />
                {profile.location}
              </p>
            </Reveal>
          </div>
        </div>

        <a
          href="#stats"
          aria-label="Découvrir la suite"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-gray-500 transition hover:text-blue-700 sm:flex dark:text-gray-400 dark:hover:text-blue-300"
        >
          Découvrir
          <FiChevronDown aria-hidden="true" className="animate-bounce text-lg" />
        </a>
      </section>

      <section id="stats" className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-3 divide-x divide-gray-200/70 rounded-2xl glass p-5 text-center sm:p-7 dark:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <strong className="block text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                    {stat.value}
                  </strong>
                  <span className="mt-1 block text-[11px] font-medium leading-tight text-gray-600 sm:text-xs dark:text-gray-300">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          kicker="01 / Savoir-faire"
          title="Des interfaces claires, des applications utiles."
          intro="Je combine le web, les bases de données et les systèmes de gestion pour construire des solutions concrètes."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600/10 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300 dark:group-hover:bg-blue-500">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-200/60 pt-3 dark:border-white/10">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      role="img"
                      aria-label={techNames[tech] ?? tech}
                      title={techNames[tech] ?? tech}
                      className="grid h-8 w-8 place-items-center rounded-lg bg-white/75 text-lg shadow-sm ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
                    >
                      <TechIcon name={tech} colored />
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-7">
          <Link to="/expertise" className={btn('soft', 'md')}>
            Explorer mon expertise
            <FiArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            kicker="02 / Réalisations"
            title="Quelques projets récents"
            intro="Des projets web et des applications de gestion construits autour de besoins réels."
          />
          <Reveal delay={80}>
            <Link to="/realisations" className={btn('outline', 'sm')}>
              Tous les projets
              <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} onDetails={setSelected} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-4 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 px-6 py-12 text-center text-white shadow-2xl shadow-blue-900/20 sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-100">
                Disponible pour échanger
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Un projet en tête ? Construisons-le ensemble.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
                Que ce soit un site, une application de gestion ou une interface à moderniser,
                parlons de vos besoins et de la meilleure façon d’y répondre.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  <FiMail aria-hidden="true" />
                  Me contacter
                </Link>
                <Link
                  to="/realisations/tous"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Voir tous les projets
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <ProjectModal project={selected} onClose={closeModal} />
    </>
  )
}
