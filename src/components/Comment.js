import IonIcon from '@reacticons/ionicons'

const Comment = ({ name, team, image }) => (
  <div className="flex flex-col items-start gap-3 lg:gap-5 bg-neutral-800 rounded-lg md:rounded-xl p-6">
    <div className="relative">
      <IonIcon className="absolute text-indigo-600 -top-2 -right-4" name="chatbubble" size="large" />
      <img className="w-12 h-12 object-cover rounded-full" src={ image } alt={ name } />
    </div>
    <p className="text-sm md:text-base lg:text-lg text-neutral-400 text-left">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</p>
    <span className="w-full border-b border-neutral-700"></span>
    <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center gap-1 text-xs md:text-sm lg:text-base text-left">
      <span className="text-neutral-50 font-medium">{ name }</span>
      <span className="text-neutral-700 md:hidden lg:block">/</span>
      <span className="text-indigo-600 font-medium">{ team }</span>
    </div>
  </div>
)

export default Comment