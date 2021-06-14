import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ slice }) {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-left lg:py-24">
          <div className="px-8 lg:w-1/2 xl:pr-16">
          <div className="border-t border-brand-one w-24 pb-8"></div>
          <span className="font-serif uppercase text-left text-3xl">
            {
              slice.primary.heading &&
              <p>{slice.primary.heading}</p>
            }
          </span>
          <div className="text-base text-left pt-4 font-light pb-8">
            {
              slice.primary.description &&
              <p>{slice.primary.description}</p>
            }
          </div>
          <Link href={`${slice.primary.link.uid}`}>
          <a className="text-brand-gray border border-brand-two bg-brand-one px-3 py-2 font-serif hover:bg-opacity-90">
          {slice.primary.linktext &&
            slice.primary.linktext
          }
          </a>
          </Link>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full overflow-hidden">
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
