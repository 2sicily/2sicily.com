/* This example requires Tailwind CSS v2.0+ */
const navigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
    
  }
  
  export default function Example({ footer }) {
    return (
      <footer className="bg-white" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="w-2/3"
                src={footer.data.logo.url}
                alt="Company name"
              />
              
              
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {footer.data.body.map((section) => (
                <div className="mt-8 md:mt-0">
                  <h3 className="text-sm font-normal text-gray-400 tracking-wider uppercase">{section.primary.section_heading}</h3>
                  <ul className="mt-4 space-y-4">
                    {section.items.map((item) => (
                      <li key={item.link.uid}>
                        <a href={item.link.uid} className="font-light text-base text-gray-500 hover:text-gray-900">
                          {item.linktext}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                ))}   
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">{`${footer.data.copyright} ${new Date().getFullYear()}.`}</p>
          </div>
        </div>
      </footer>
    )
  }
  