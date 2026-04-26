import { useEffect, useState } from 'react'
import { dogs } from '../assets/dogs'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, hash) => {
    e.preventDefault()
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">
        <img src={dogs.sit} alt="PawTrack" />
        PawTrack
      </div>
      <div className="nav-links">
        <a href="#features"  onClick={(e) => scrollTo(e, '#features')}>Features</a>
        <a href="#how"       onClick={(e) => scrollTo(e, '#how')}>How it Works</a>
        <a href="#contact"   onClick={(e) => scrollTo(e, '#contact')}>Contact</a>
      </div>
      <a href="#contact" className="nav-cta" onClick={(e) => scrollTo(e, '#contact')}>
        Get Started 🐾
      </a>
    </nav>
  )
}
