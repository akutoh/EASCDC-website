import HeroSection      from '../components/HeroSection'
import ValueProps       from '../components/ValueProps'
import FeaturedProjects from '../components/FeaturedProjects'
import Testimonials     from '../components/Testimonials'
import CTABanner        from '../components/CTABanner'

/**
 * Home page — assembles all landing-page sections in order
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner />
    </>
  )
}
