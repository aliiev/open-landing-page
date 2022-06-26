const Jumbotron = () => (
  <section className="py-0 md:py-20">
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 bg-gradient-to-tr from-indigo-600 to-indigo-700 rounded-lg md:rounded-xl px-6 md:px-12 py-8 md:py-16">
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-xl md:text-3xl text-neutral-50 font-bold">Stay in the loop</h3>
        <p className="text-sm md:text-lg text-neutral-300">Join our newsletter to get top news before anyone else.</p>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col md:flex-row justify-end items-center gap-2">
        <input className="w-full bg-indigo-700 hover:bg-indigo-800 focus:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-700 border-2 border-indigo-500 rounded-md text-sm md:text-base text-neutral-50 placeholder:text-indigo-300 px-2 md:px-4 py-1.5 md:py-3" type="text" placeholder="Your best email..." />
        <button className="w-full md:w-auto bg-neutral-50 hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-50 rounded-md text-sm md:text-base text-indigo-600 font-medium px-4 md:px-8 py-1.5 md:py-3">Subscribe</button>
      </div>
    </div>
  </section>
)

export default Jumbotron