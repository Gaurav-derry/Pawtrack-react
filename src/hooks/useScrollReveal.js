import { useEffect } from 'react'

/**
 * Adds .vis class to all .reveal elements as they enter the viewport.
 * Should be called once near the top of the app tree.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('vis'), i * 90)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.10 }
    )

    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
