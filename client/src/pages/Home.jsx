import Hero from '../components/Hero'
import ChooseUs from '../components/Home/ChooseUs'
import CommunityCTA from '../components/Home/CommunityCTA'
import Footer from '../components/Home/Footer'
import GetStarted from '../components/Home/GetStarted'
import PricingGrid from '../components/Home/PricingGrid'
import ServicesGrid from '../components/Home/ServicesGrid'
import { StatsBar } from '../components/Home/StatsBar'

export function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <ChooseUs />
      <PricingGrid />
      <GetStarted />
      <CommunityCTA />
      <Footer />
    </>
  )
}

export default Home
