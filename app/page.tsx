import Hero from './components/hero'
import Skills from './components/skills'
import Projects from './components/projects'
import AcademicTimeline from './components/academic-timeline'
import ProfessionalTimeline from './components/professional-timeline'
import Approach from './components/approach'
import Experience from './components/experience'
import Contact from './components/contact'

export default function Home() {
  return (
    <main>
      <section id="about">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <AcademicTimeline />
        <ProfessionalTimeline />
        <Experience />
      </section>
      <Approach />
      <Contact />
    </main>
  )
}

