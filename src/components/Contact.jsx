import { dogs } from '../assets/dogs'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* Background decorative dogs */}
      <img className="contact-bg-dog left"  src={dogs.sleepy}  alt="" aria-hidden="true" />
      <img className="contact-bg-dog right" src={dogs.curious} alt="" aria-hidden="true" />

      <div className="contact-card reveal">
        <div className="contact-dog-wrap">
          <img src={dogs.surprised} alt="contact" />
        </div>

        <h2 className="contact-title">Get in Touch 🐾</h2>

        <p className="contact-sub">
          Have a question, a feature idea, or just want to share a photo of your pup?
          <br />
          We'd love to hear from you — we reply to every single message.
        </p>

        <a href="mailto:paw-track@saasholdco.com" className="contact-email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M2 8 L12 14 L22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          paw-track@saasholdco.com
        </a>

        <p className="contact-note">⚡ We typically respond within 24 hours</p>
      </div>
    </section>
  )
}
