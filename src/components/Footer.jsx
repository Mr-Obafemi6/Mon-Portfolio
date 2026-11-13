import { Link } from 'react-router-dom'
import { FiFileText, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { navLinks, profile } from '../data/site'
import { asset } from '../lib/assets'
import { btn, cn } from '../lib/styles'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="no-print relative z-10 mt-24 border-t border-white/60 bg-white/45 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Retour à l'accueil">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/70 bg-white/80 shadow-sm dark:border-white/10 dark:bg-white/5">
                <img src={asset(profile.logo)} alt="" className="h-8 w-8 object-contain" aria-hidden="true" />
              </span>
              <span className="text-sm font-extrabold tracking-tight text-gray-900 dark:text-white">
                Obafemi<span className="text-blue-600 dark:text-blue-400">_dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Création de solutions web modernes, de systèmes de gestion et d’interfaces pensées pour les
              utilisateurs.
            </p>
            <SocialLinks className="mt-5" size="sm" />
          </div>

          <nav aria-label="Navigation de pied de page">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Navigation
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block rounded text-gray-600 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/realisations/tous"
                  className="inline-block rounded text-gray-600 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  Tous les projets
                </Link>
              </li>
              <li>
                <Link
                  to="/parcours/cv"
                  className="inline-block rounded text-gray-600 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  Mon CV
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 text-gray-600 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  <FiMail aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneRaw}`}
                  className="inline-flex items-center gap-2.5 text-gray-600 transition hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300"
                >
                  <FiPhone aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                  {profile.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-gray-600 dark:text-gray-300">
                <FiMapPin aria-hidden="true" className="text-blue-600 dark:text-blue-400" />
                {profile.location}
              </li>
            </ul>
            <Link
              to="/parcours/cv"
              className={cn(btn('outline', 'sm'), 'mt-4')}
            >
              <FiFileText aria-hidden="true" />
              Voir mon CV
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200/70 pt-6 text-xs text-gray-500 sm:flex-row dark:border-white/10 dark:text-gray-400">
          <p>
            © {year} TCHALLA Obafemi Gérard. Tous droits réservés.
          </p>
          <p>Conçu avec React, Vite et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
