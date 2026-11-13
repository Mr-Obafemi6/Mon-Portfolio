import { useEffect } from 'react'

/** Met à jour le titre et la description de la page courante. */
export function usePageMeta(title, description) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', description)
    }
  }, [title, description])
}
