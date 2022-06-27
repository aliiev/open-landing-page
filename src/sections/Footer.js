import IonIcon from '@reacticons/ionicons'
import Logo from '../resources/Logo.svg'

const footer = [{
  title: 'Products',
  links: [ 'Web Studio', 'DynamicBox Flex', 'Programming Forms' ]
}, {
  title: 'Resources',
  links: [ 'Nostrud exercitation', 'Visual mockups', 'Nostrud exercitation', 'Visual mockups', 'Nostrud exercitation' ]
}, {
  title: 'Company',
  links: [ 'Consectetur adipiscing', 'Labore et dolore', 'Consectetur adipiscing', 'Labore et dolore', 'Consectetur adipiscing' ]
}]

const Footer = () => (
  <footer className="flex flex-col gap-8 lg:gap-12 py-14 lg:py-20">
    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
      <div className="flex flex-col gap-3.5 w-full lg:w-1/2">
        <img className="w-8 h-8 object-contain" src={ Logo } alt="Open" />
        <p className="text-base text-neutral-400">Lorem ipsum is placeholder text commonly <br className="hidden lg:block" /> used in the graphic, print, and publishing <br className="hidden lg:block" /> industries for previewing layouts and visual <br className="hidden lg:block" /> mockups.</p>
      </div>
      { footer.map(col => (
        <div key={ col.title }>
          <h5 className="text-sm text-neutral-50 font-medium mb-1">{ col.title }</h5>
          <ul className="flex flex-col gap-1">
            { col.links.map((link, i) => (
              <li key={ i } className="text-sm text-neutral-400">
                <a className="" href="/">{ link }</a>
              </li>
              )) }
          </ul>
        </div> 
      )) }
    </div>
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 md:gap-6">
      <span className="text-sm text-neutral-400">© 2020 Open PRO. All rights reserved.</span>
      <div className="flex flex-row justify-between items-center gap-4">
        { [ 'logo-twitter', 'logo-github', 'logo-facebook', 'logo-instagram', 'logo-linkedin' ].map(social => (
          <a key={ social } className="flex bg-neutral-800 rounded-full text-xl text-indigo-600 p-2" href="/">
            <IonIcon name={ social } />
          </a>
        )) }
      </div>
    </div>
  </footer>
)

export default Footer