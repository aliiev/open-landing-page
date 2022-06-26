import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import About from './sections/About'
import Feedback from './sections/Feedback'

const App = () => (
  <div className="container mx-auto mt-8 px-6 md:px-0">
    <Navbar />
    <Hero />
    <Features />
    <About />
    <Feedback />
  </div>
)

export default App