import React from 'react';
import {hrefResolver} from '../../prismic-configuration'
import Link from 'next/link';

const MySlice = ({ slice }) => (
<section className="bg-brand-zero py-12 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-brand-gray w-24 pb-4"></div>
      <div className="uppercase text-left text-base font-light pb-2 text-brand-gray">
        {
          slice.primary.pretitle &&
          <p>{slice.primary.pretitle}</p>
        }
      </div>
      <div className="font-serif uppercase text-left text-3xl text-brand-gray">
        {
          slice.primary.heading &&
          <p>{slice.primary.heading}</p>
        }
      </div>
      <div className="text-lg text-left py-2 font-light text-brand-gray">
        {
          slice.primary.description &&
          <p>{slice.primary.description}</p>
        }
      </div>
      <div className="gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center py-4">
        {slice.items.map((item) => (
        <div className="border border-brand-three bg-brand-gray col-span-1 flex flex-col items-center p-4 shadow-md">
          <div className="text-lg font-light italic text-center">
                  {
                    item.testimonial &&
                    <p className="text-black">"<br></br>{item.testimonial}</p>
                  }
          </div>
          <div className="text-base text-center py-4 font-light capitalize">
                  {
                    item.name &&
                    <p className="text-black">{item.name}</p>
                  }
          </div>

        </div>
        
      ))}
      </div>
      <div className="flex flex-row-reverse">
      {slice.primary.linktext && slice.primary.link &&
      <Link href={hrefResolver(slice.primary.link)}>
      <a className="text-lg text-brand-white font-sans italic hover:text-opacity-70 flex items-center">
      <div>
      {slice.primary.linktext &&
        slice.primary.linktext
      }
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
      </a>
      </Link>
      }
      </div>
      
    </div>
  </section>
);

export default MySlice;
