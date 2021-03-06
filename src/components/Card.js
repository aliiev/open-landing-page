import IonIcon from '@reacticons/ionicons'

const Card = ({ image }) => (
  <div className="flex flex-col-reverse md:flex-row-reverse md:odd:flex-row justify-between items-center gap-8 lg:gap-16">
    <div className="w-full flex flex-col justify-between items-start text-left gap-2">
      <span className="text-sm md:text-base lg:text-xl text-indigo-600 font-serif">More speed. Less spend</span>
      <h4 className="text-lg md:text-xl lg:text-3xl text-neutral-50 font-bold">Keep projects on schedule</h4>
      <p className="text-base lg:text-xl text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ul className="text-sm lg:text-lg text-neutral-400 mt-2">
        <li className="flex items-center gap-2">
          <IonIcon className="text-emerald-500" name="checkmark" />
          Duis aute irure dolor in reprehenderit
        </li>
        <li className="flex items-center gap-2">
          <IonIcon className="text-emerald-500" name="checkmark" />
          Excepteur sint occaecat 
        </li>
        <li className="flex items-center gap-2">
          <IonIcon className="text-emerald-500" name="checkmark" />
          Amet consectetur adipiscing elit
        </li>
      </ul>
    </div>
    <div className="w-full">
      <img className="w-full rounded-lg md:rounded-xl" src={ image } alt="Keep projects on schedule" />
    </div>
  </div>
)

export default Card