import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail, FiTrendingUp } from 'react-icons/fi'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceIcon from '../components/ServiceIcon'
import TechIcon from '../components/TechIcon'
import { learning, services, stats, technologies, tools } from '../data/site'
import { btn } from '../lib/styles'
import { usePageMeta } from '../lib/usePageMeta'

export default function Expertise() {
  usePageMeta(
    'Expertise | TCHALLA Obafemi Gérard',
    'Services, technologies et outils de TCHALLA Obafemi Gérard : développement web, applications de gestion et bases de données.',
  )

  return (
    <>
      <PageHeader
        kicker="02 / Savoir-faire"
        title="Ce que je peux faire"
        intro="Du site vitrine à l’application de gestion, je construis des interfaces web claires, responsives et reliées à des données."
      />

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 60}>
              <article className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600/10 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300 dark:group-hover:bg-blue-500">
                  <ServiceIcon name={service.icon} />
                </span>
                <h2 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <SectionHeading
          kicker="03 / Boîte à outils"
          title="Technologies que j’utilise"
          intro="Les technologies sur lesquelles je m’appuie au quotidien pour développer et livrer mes projets."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <Reveal key={technology.name} delay={index * 50}>
              <article className="h-full rounded-2xl glass p-5 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/70 text-3xl shadow-sm dark:bg-white/5">
                  <TechIcon name={technology.key} colored />
                </span>
                <h3 className="mt-3 text-sm font-bold text-gray-900 dark:text-white">{technology.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                  {technology.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-12 text-sm font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Mes outils
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {tools.map((tool, index) => (
            <Reveal key={tool.name} delay={index * 60}>
              <article className="flex h-full items-start gap-4 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/70 text-2xl shadow-sm dark:bg-white/5">
                  <TechIcon name={tool.key} colored />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{tool.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                    {tool.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <SectionHeading
          kicker="04 / Progression"
          title="Actuellement en apprentissage"
          intro="Deux technologies que j’étudie progressivement, sans les présenter comme maîtrisées."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {learning.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <article className="flex h-full items-start gap-4 rounded-2xl glass p-6">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600/10 text-3xl dark:bg-blue-500/10">
                  <TechIcon name={item.key} colored />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 dark:text-amber-300">
                      <FiTrendingUp aria-hidden="true" />
                      En apprentissage
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
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

        <Reveal delay={100} className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/realisations" className={btn('primary', 'md')}>
            Voir mes réalisations
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link to="/contact" className={btn('outline', 'md')}>
            <FiMail aria-hidden="true" />
            Discuter d’un projet
          </Link>
        </Reveal>
      </section>
    </>
  )
}
