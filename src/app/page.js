// Remove Navbar import if it's already in layout.js
import Carousel from '../components/Carousel'
import Introduction from '../components/Introduction'
import Mission from '../components/Mission'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <main>
        <Carousel />
        <Introduction />
        <Mission />
        <Projects />
        <Team />
      </main>
      <Footer />
    </>
  )
}