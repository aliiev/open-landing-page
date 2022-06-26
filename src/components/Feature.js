import IonIcon from '@reacticons/ionicons'

const Feature = ({ icon }) => (
  <div className="flex flex-col items-center gap-2">
    <IonIcon className="bg-indigo-600 rounded-full mb-2 p-5" name={ icon } size="large" />
    <h4 className="text-xl md:text-2xl text-neutral-50 font-bold">Instant Features</h4>
    <p className="text-base md:text-lg text-neutral-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
  </div>
)

export default Feature