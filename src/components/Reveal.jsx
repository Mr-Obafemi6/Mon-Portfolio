import { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/styles'

/** Anime l'apparition d'un bloc au scroll, avec respect de prefers-reduced-motion. */
export default function Reveal({
  as: Tag = 'div',
  className,
  delay = 0,
  style,
  children,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn('reveal', visible && 'is-visible', className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
