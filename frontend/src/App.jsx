import Navbar from './components/Navbar.jsx'
import HeroScroller from './components/HeroScroller.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050a07] text-white selection:bg-cyan-500 selection:text-[#050a07]">
      <Navbar />
      <main>
        <HeroScroller />
        <About />
        <Projects />
        <Team />
      </main>
      <Footer />
    </div>
  )
}