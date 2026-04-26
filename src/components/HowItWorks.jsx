import { dogs } from '../assets/dogs'

const STEPS = [
  {
    num: '01',
    tag: 'Set Up',
    title: 'Create Your Dog\'s Profile',
    desc: 'Add your dog\'s name, breed, age, and health goals. PawTrack instantly personalises every insight and tip just for them.',
    img: dogs.lookRight,
    alt: 'setup',
    rev: false,
  },
  {
    num: '02',
    tag: 'Track Daily',
    title: 'Log Activities in Seconds',
    desc: 'One tap to log walks, meals, sleep, and play. Watch beautiful charts fill up with your dog\'s daily story.',
    img: dogs.playful,
    alt: 'track',
    rev: true,
  },
  {
    num: '03',
    tag: 'Get Insights',
    title: 'Understand & Improve',
    desc: 'Weekly trends, health milestones, and Nova\'s personalised tips help you make every day better than the last.',
    img: dogs.alert,
    alt: 'insights',
    rev: false,
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="how">
      <p className="section-eyebrow reveal">Simple & Delightful</p>
      <h2 className="section-title reveal">
        Three easy steps to a<br />happier, healthier pup
      </h2>
      <p className="section-sub reveal">
        Set up in under 2 minutes. Your dog will thank you.
      </p>

      <div className="steps-wrap">
        {STEPS.map((s, i) => (
          <div key={i} className={`step-row s-${i + 1}${s.rev ? ' rev' : ''} reveal`}>
            <div className="step-num">{s.num}</div>
            <div className="step-body">
              <span className="step-tag">{s.tag}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
            <div className="step-dog-wrap">
              <img className="step-dog-img" src={s.img} alt={s.alt} />
              <div className="step-shadow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
