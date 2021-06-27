import Link from 'next/link'
import {hrefResolver} from '../prismic-configuration'


  export default function Example({ footer }) {
    return (
      <footer className="bg-white border-t border-brand-five" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-8 lg:py-16">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="h-16"
                src={footer.data.logo.url}
                alt="Company name"
              />
               
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
            {footer.data.body[0] &&
              <div>
                <h3 className="text-sm font-normal text-gray-400 tracking-wider uppercase">{footer.data.body[0].primary.section_heading}</h3>
                <ul className="mt-4 space-y-4">
                  {footer.data.body[0].items.map((item) => (
                    <li key={item.link.uid}>
                    <Link href={hrefResolver(item.link)}>
                        <a className="font-light text-base text-gray-500 hover:text-black">
                        {item.linktext}
                        </a>
                    </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
            {footer.data.body[1] &&
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-normal text-gray-400 tracking-wider uppercase">{footer.data.body[1].primary.section_heading}</h3>
                <ul className="mt-4 space-y-4">
                  {footer.data.body[1].items.map((item) => (
                    <li key={item.link.uid}>
                    <Link href={hrefResolver(item.link)}>
                        <a className="font-light text-base text-gray-500 hover:text-black">
                        {item.linktext}
                        </a>
                    </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
            {footer.data.body[2] &&
              <div>
                <h3 className="text-sm font-normal text-gray-400 tracking-wider uppercase">{footer.data.body[2].primary.section_heading}</h3>
                <ul className="mt-4 space-y-4">
                  {footer.data.body[2].items.map((item) => (
                    <li key={item.link.uid}>
                    <Link href={hrefResolver(item.link)}>
                        <a className="font-light text-base text-gray-500 hover:text-black">
                        {item.linktext}
                        </a>
                    </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
            {footer.data.body[3] &&
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-normal text-gray-400 tracking-wider uppercase">{footer.data.body[3].primary.section_heading}</h3>
                <ul className="mt-4 space-y-4">
                {footer.data.body[2].items.map((item) => (
                    <li key={item.link.uid}>
                    <Link href={hrefResolver(item.link)}>
                        <a className="font-light text-base text-gray-500 hover:text-black">
                        {item.linktext}
                        </a>
                    </Link>
                    </li>
                  ))}
                </ul>
              </div>
            }

          </div>
        </div>
          
        </div>
        <div className="mt-12 pt-8">
            <p className="text-base font-light text-gray-400 xl:text-center">{`${footer.data.copyright} ${new Date().getFullYear()}.`}</p>
          </div>
          </div>
          </footer>
    )
  }
  