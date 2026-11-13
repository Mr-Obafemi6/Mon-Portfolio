import { Link } from 'react-router-dom'
import { FiArrowLeft, FiHome, FiMail } from 'react-icons/fi'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Page introuvable | TCHALLA Obafemi Gérard', 'Cette page n’existe pas ou a été déplacée.')

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8">
      <p className="text-7xl font-extrabold tracking-tight text-gradient sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
        Cette page est introuvable
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        Le lien que vous avez suivi n’existe pas ou a été déplacé. Revenez à l’accueil ou explorez
        directement mes projets.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          <FiHome aria-hidden="true" />
          Retour à l’accueil
        </Link>
        <Link
          to="/realisations"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/60 px-5 py-2.5 text-sm font-semibold text-gray-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 dark:border-white/15 dark:bg-white/5 dark:text-gray-100 dark:hover:border-blue-400 dark:hover:text-blue-300"
        >
          <FiArrowLeft aria-hidden="true" />
          Voir les projets
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-900/5 dark:text-gray-200 dark:hover:bg-white/10"
        >
          <FiMail aria-hidden="true" />
          Me contacter
        </Link>
      </div>
    </section>
  )
}
