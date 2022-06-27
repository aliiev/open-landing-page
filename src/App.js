import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import About from './sections/About'
import Feedback from './sections/Feedback'
import Jumbotron from './sections/Jumbotron'
import Footer from './sections/Footer'

const App = () => (
  <div className="container mx-auto mt-8 px-6 md:px-0">
    <div className="absolute bg-[url('./resources/shapes/shape-body.svg')] bg-contain bg-no-repeat bg-right-top w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 h-full top-0 right-0"></div>
    <Navbar />
    <Hero />
    <Features />
    <About />
    <Feedback />
    <Jumbotron />
    <Footer />
  </div>
)

export default App