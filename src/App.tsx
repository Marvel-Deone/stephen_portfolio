import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactFooter } from './components/ContactFooter'
import { ExperienceSection } from './components/ExperienceSection'
import { FocusTicker } from './components/FocusTicker'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Reveal } from './components/Reveal'
import { ResearchSection } from './components/ResearchSection'
import { SiteHeader } from './components/SiteHeader'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#17332d]">
      <SiteHeader />
      <Reveal><HeroSection /></Reveal>
      <FocusTicker />
      <Reveal><AboutSection /></Reveal>
      <Reveal><ResearchSection /></Reveal>
      <Reveal><ProjectsSection /></Reveal>
      <Reveal><ExperienceSection /></Reveal>
      <Reveal><SkillsSection /></Reveal>
      <Reveal><ContactFooter /></Reveal>
    </main>
  )
}

export default App
