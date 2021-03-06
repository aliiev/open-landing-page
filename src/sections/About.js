import Card from '../components/Card'
import AboutImage1 from '../resources/about/about-1.png'
import AboutImage2 from '../resources/about/about-2.png'
import AboutImage3 from '../resources/about/about-3.png'

const About = () => (
  <section className="flex flex-col items-center gap-2 lg:gap-4 border-b border-neutral-800 text-center py-14 lg:py-20">
    <span className="bg-emerald-200 rounded-xl text-xs lg:text-sm text-emerald-500 font-semibold px-3 py-1">Reach goals that matter</span>
    <h3 className="text-2xl md:text-3xl lg:text-4xl text-neutral-50 font-extrabold">One product, unlimited solutions</h3>
    <p className="text-base md:text-lg lg:text-xl text-neutral-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br className="hidden lg:block" /> deserunt mollit laborum — semper quis lectus nulla.</p>
    <div className="flex flex-col mt-8 lg:mt-16 gap-10 lg:gap-20">
      { [ AboutImage1, AboutImage2, AboutImage3 ].map((card, i) => (
        <Card key={ i } image={ card } />
      )) }

    </div>
  </section>
)

export default About