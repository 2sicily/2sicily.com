import Link from 'next/link'
import {hrefResolver} from '../../prismic-configuration'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ slice }) {
  return (
    <div className="relative bg-brand-four">
      <main className="lg:relative">
        
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-left lg:py-24">
          <div className="ml-auto lg:w-1/2 px-8 xl:pl-16">
          <div className="border-t border-brand-six w-24 pb-8"></div>
          <span className="font-serif uppercase text-left text-3xl">
            {
              slice.primary.heading &&
              <p>{slice.primary.heading}</p>
            }
          </span>
          <div className="text-lg text-left pt-4 font-light pb-8">
            {
              slice.primary.description &&
              <p>{slice.primary.description}</p>
            }
          </div>
          <Link href={hrefResolver(slice.primary.link)}>
          <a className="text-brand-gray text-lg border border-brand-five bg-brand-six px-3 py-2 font-serif hover:bg-opacity-90">
          {slice.primary.linktext &&
            slice.primary.linktext
          }
          </a>
          </Link>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={`${slice.primary.image.url}`}
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
