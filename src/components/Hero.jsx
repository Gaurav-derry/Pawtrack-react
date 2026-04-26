import { dogs } from '../assets/dogs'

export default function Hero() {
  const scrollToHow = (e) => {
    e.preventDefault()
    document.querySelector('#how')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Background blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      {/* Decorative paw prints */}
      <div className="paw-deco" style={{ top: '18%', left: '8%',  animationDelay: '0s'  }}>🐾</div>
      <div className="paw-deco" style={{ top: '72%', left: '14%', animationDelay: '-3s' }}>🐾</div>
      <div className="paw-deco" style={{ top: '28%', right: '6%', animationDelay: '-6s', fontSize: 16 }}>🐾</div>
      <div className="paw-deco" style={{ top: '80%', right: '12%', animationDelay: '-9s', fontSize: 14 }}>🐾</div>

      {/* Text content */}
      <div className="hero-content">
        <div className="hero-eyebrow">🐾 The #1 Dog Wellness App</div>
        <h1 className="hero-title">
          Every Wag<br />
          Tells a <em>Story</em>
        </h1>
        <p className="hero-sub">
          PawTrack helps you understand your dog's health, happiness, and habits — so you can give them their best life, every single day.
        </p>
        <div className="hero-cta">
          <a href="#how" className="btn-secondary" onClick={scrollToHow}>
            See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Hero dog with floating badges */}
      <div className="hero-dog-wrap">
        <div className="float-badge" style={{ top: '6%',    left: '-12%', '--rot': '-4deg', '--delay': '0s'    }}>
          <div className="badge-dot" style={{ background: 'var(--mint-500)' }} />
          Health Score: 92/100
        </div>
        <div className="float-badge" style={{ top: '24%',   right: '-8%', '--rot': '3deg',  '--delay': '-1.5s', '--bd': '3.5s' }}>
          <div className="badge-dot" style={{ background: 'var(--coral)' }} />
          Walk: 45 mins today
        </div>
        <div className="float-badge" style={{ bottom: '24%', left: '-12%', '--rot': '2deg',  '--delay': '-3s',   '--bd': '4s' }}>
          <div className="badge-dot" style={{ background: 'var(--blue-500)' }} />
          Sleep: 10 hrs 😴
        </div>
        <div className="float-badge" style={{ bottom: '6%',  right: '-5%', '--rot': '-3deg', '--delay': '-2s'   }}>
          🏆 Hydration Hero!
        </div>

        <div className="hero-dog-pad">
          <img className="hero-dog-img" src={dogs.sit} alt="PawTrack mascot" />
          <div className="hero-shadow" />
        </div>
      </div>
    </section>
  )
}
