import { dogs } from '../assets/dogs'

export default function Footer() {
  const scrollTo = (e, hash) => {
    e.preventDefault()
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={dogs.sit} alt="PawTrack" />
        PawTrack
      </div>

      <p className="footer-copy">
        Made with <span className="footer-heart">❤️</span> for dogs everywhere · © {new Date().getFullYear()} PawTrack
      </p>

      <div className="footer-links">
        <a href="#features" onClick={(e) => scrollTo(e, '#features')}>Features</a>
        <a href="#how"      onClick={(e) => scrollTo(e, '#how')}>How It Works</a>
        <a href="mailto:paw-track@saasholdco.com">Contact</a>
      </div>
    </footer>
  )
}
