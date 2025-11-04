import { Navbar } from './components/Navbar'
import HeroSectionOne from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import './index.css' // Make sure CSS is imported
import Services from './components/Services'

function App() {
  return (
    <>
      <Navbar />
      <HeroSectionOne />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default App
