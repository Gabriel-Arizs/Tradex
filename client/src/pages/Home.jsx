import First from '../components/First'
import { ServicesGrid } from '../components/Home/ServicesGrid'
import StatisticsBar from '../components/Home/StatisticsBar'

export function Home() {
  return (
    <>
      <First />
      <StatisticsBar />
      <ServicesGrid />
    </>
  )
}

export default Home
