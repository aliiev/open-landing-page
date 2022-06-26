import VideoPlayer from '../components/VideoPlayer'

const Hero = () => (
  <section className="flex flex-col gap-4 md:gap-7 md:w-1/2 text-center mx-auto mt-12 md:mt-20">
    <h2 className="text-neutral-50 text-3xl md:text-5xl font-extrabold">Landing template for startups</h2>
    <p className="text-neutral-300 text-base md:text-xl">Our landing page template works on all devices, so you only have to <br /> set it up once, and get beautiful results forever.</p>
    <div className="flex justify-center items-center gap-3">
      <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-600 rounded-lg text-white text-sm md:text-base font-medium px-4 md:px-8 py-2 md:py-3">Start free trial</button>
      <button className="w-full md:w-auto bg-neutral-700 hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-700 rounded-lg text-neutral-300 text-sm md:text-base font-medium px-4 md:px-8 py-2 md:py-3">Learn more</button>
    </div>
    <VideoPlayer />
  </section>
)

export default Hero