import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image'
import Link from 'next/link';
import {hrefResolver} from '../../prismic-configuration'

const MySlice = ({ slice }) => (
  <section className="bg-brand-zero text-brand-gray">
    <div className="w-full overflow-hidden z-0">
      <img
          src={`${slice.primary.image.url}`}
          layout="responsive"
          alt=""
          width={`${slice.primary.image.dimensions.width}`}
          height={`${slice.primary.image.dimensions.height}`}
        />
    </div>
    
    <div className="max-w-5xl mx-auto py-12 px-8">
      <div className="border-t border-brand-gray w-24 mx-auto pb-8"></div>
      <span className="font-serif uppercase text-center text-3xl">
        {
          slice.primary.heading &&
          <p>{slice.primary.heading}</p>
        }
      </span>
      <div className="text-lg text-center max-w-xl mx-auto py-6 font-light">
        {
          slice.primary.description &&
          <p>{slice.primary.description}</p>
        }
      </div>
      {slice.primary.link && slice.primary.linktext &&
      <div className="w-full flex flex-col lg:flex-row justify-center place-items-center lg:space-x-2">
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
      </div>
      }
    </div>
  </section>
);

export default MySlice;
