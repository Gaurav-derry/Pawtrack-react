import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import DogDivider from './components/DogDivider'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DogDivider />
      <Contact />
      <Footer />
    </>
  )
}
