import FeaturedProjects from '@/components/shared/FeaturedProjects'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
import Skills from '@/components/shared/Skills'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Footer />
    </div>
  )
}
