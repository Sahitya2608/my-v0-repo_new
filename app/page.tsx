import { Particles } from "@/components/particles"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Hobbies from "@/components/hobbies"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <CustomCursor />
      <Particles className="absolute inset-0 -z-10" quantity={100} />

      <Hero />

      <div className="container mx-auto px-4 py-8">
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Experience />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Education />
          <Certifications />
        </div>
        <Hobbies />
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
