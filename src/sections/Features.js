import Feature from '../components/Feature'

const Features = () => (
  <section className="relative flex flex-col items-center gap-2 lg:gap-4 border-b border-neutral-800 text-center py-14 lg:py-20">
    <h3 className="text-2xl md:text-3xl lg:text-4xl text-neutral-50 font-extrabold ">Build up the whole picture</h3>
    <p className="text-base md:text-lg lg:text-xl text-neutral-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br className="hidden lg:block" /> mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-8 lg:mt-16">
      { [ 'star', 'document-text', 'globe', 'person', 'bulb', 'heart' ].map(feature => (
        <Feature key={ feature } icon={ feature } />
      )) }
    </div>
  </section>
)

export default Features