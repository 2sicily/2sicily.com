import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const MySlice = ({ slice }) => (
  <section className="bg-brand-gray text-gray-800 py-12 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-brand-six w-24 pb-4"></div>
      <div className="uppercase text-left text-base font-light pb-2">
        {
          slice.primary.pretitle &&
          <p>{slice.primary.pretitle}</p>
        }
      </div>
      <div className="font-serif uppercase text-left text-3xl">
        {
          slice.primary.heading &&
          <p>{slice.primary.heading}</p>
        }
      </div>
      <div className="text-base text-left py-2 font-light">
        {
          slice.primary.description &&
          <p>{slice.primary.description}</p>
        }
      </div>
      <div className="space-x-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center pt-4">
        {slice.items.map((item) => (
        <div className="border border-brand-six col-span-1 flex flex-col items-center p-4">
          <div className="w-full overflow-hidden h-72">
            <Image
                src={`${item.image.url}`}
                layout="responsive"
                alt="Picture of the author"
                width={`${item.image.dimensions.width}`}
                height={`${item.image.dimensions.height}`}
              />
          </div>
          <div className="pt-4 text-lg font-serif text-center font-light uppercase">
                  {
                    item.heading &&
                    <p>{item.heading}</p>
                  }
          </div>
          <div className="text-base text-center py-4 font-light capitalize">
                  {
                    item.description &&
                    <p>{item.description}</p>
                  }
          </div>
         
          <Link href={`/${item.link.uid}`}>
          <a className="bg-brand-gray border border-brand-five text-brand-six px-3 py-2 font-serif hover:bg-opacity-90">
          {
            item.linktext &&
            <p>{item.linktext}</p>
          }
          
          </a>
          </Link>
        </div>
        
      ))}
      </div>
    </div>
  </section>
);

export default MySlice;
