import { dogs } from '../assets/dogs'

const FEATURES = [
  {
    img: dogs.excited,
    badge: 'Activity',
    title: 'Smart Activity Tracking',
    desc: 'Monitor walks, playtime, sleep, and crate time with beautiful daily charts. Know exactly how active your pup was today.',
  },
  {
    img: dogs.curious,
    badge: 'Health',
    title: 'Real Health Insights',
    desc: 'Get vet-approved health scores, milestone badges, and personalised tips from Nova — your AI dog wellness companion.',
  },
  {
    img: dogs.proud,
    badge: 'Reminders',
    title: 'Smart Reminders',
    desc: 'Never miss a vet appointment, medication, or grooming session. PawTrack keeps your dog\'s schedule perfectly organised.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features">
      <p className="section-eyebrow reveal">Why PawTrack</p>
      <h2 className="section-title reveal">
        Built for dogs.<br />Loved by owners.
      </h2>
      <p className="section-sub reveal">
        Everything your pup needs, beautifully tracked — all in one place.
      </p>

      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <div key={i} className={`feature-card fc-${i + 1} reveal`}>
            <div className="fc-dog-circle">
              <img src={f.img} alt={f.title} />
            </div>
            <div className="feature-badge">{f.badge}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
