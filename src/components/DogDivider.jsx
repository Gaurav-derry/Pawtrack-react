import { dogs } from '../assets/dogs'

export default function DogDivider() {
  return (
    <div className="dog-divider">
      <div className="wd-paws">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}>🐾</span>
        ))}
      </div>
      <div className="wd-dog">
        <img src={dogs.excited} alt="walking" />
      </div>
      <div className="wd-dog wd-2">
        <img src={dogs.alert} alt="walking" />
      </div>
    </div>
  )
}
