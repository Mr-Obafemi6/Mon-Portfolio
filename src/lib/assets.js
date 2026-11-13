const BASE_URL = import.meta.env.BASE_URL || './'

/**
 * Construit une URL fiable vers un fichier du dossier public,
 * quel que soit le sous-dossier de déploiement (GitHub Pages, Vercel, etc.).
 */
export function asset(path) {
  const clean = String(path).replace(/^\/+/, '')
  return `${BASE_URL}${clean}`
}
