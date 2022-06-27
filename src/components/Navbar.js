import Logo from '../resources/Logo.svg'

const Navbar = () => (
  <nav className="relative flex justify-between items-center w-full">
    <a className="rounded-full focus:outline-none focus:ring-4 focus:ring-indigo-600" href="/">
      <img className="h-8" src={ Logo } alt="Open" />
    </a>
    <div className="flex gap-3 md:gap-6">
      <a className="rounded-lg focus:outline-none focus:ring-4 focus:ring-neutral-300 text-neutral-300 hover:text-white focus:text-white text-sm md:text-base px-4 md:px-5 py-2 md:py-2" href="/">Documentation</a>
      <a className="bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-600 rounded-lg text-white text-sm md:text-base font-medium px-4 md:px-5 py-2 md:py-2" href="/">Sign up</a>
    </div>
  </nav>
)

export default Navbar