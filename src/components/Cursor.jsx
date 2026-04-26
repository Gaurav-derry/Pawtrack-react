import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }

    const onEnter = () => {
      cursor.style.width  = '38px'
      cursor.style.height = '38px'
      cursor.style.background = '#7FC1B8'
    }

    const onLeave = () => {
      cursor.style.width  = '20px'
      cursor.style.height = '20px'
      cursor.style.background = '#5BA89E'
    }

    document.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a, button, .feature-card, .nav-cta')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return <div ref={cursorRef} className="cur" />
}
