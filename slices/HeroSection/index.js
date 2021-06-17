import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image'
import Link from 'next/link';
import {hrefResolver} from '../../prismic-configuration'

const MySlice = ({ slice }) => (
  <section className="bg-brand-zero text-brand-gray">
    <div className="w-full overflow-hidden z-0">
      <img
          className="w-full overflow-hidden z-0 bg-cover"
          src={`${slice.primary.image.url}`}
        />
    </div>
    
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="border-t border-brand-gray w-24 mx-auto pb-8"></div>
      <span className="font-serif uppercase text-center text-3xl">
        {
          slice.primary.heading &&
          <p>{slice.primary.heading}</p>
        }
      </span>
      <div className="text-base text-center max-w-xl mx-auto py-6 font-light">
        {
          slice.primary.description &&
          <p>{slice.primary.description}</p>
        }
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center place-items-center lg:space-x-2">
        {slice.items.map((item) => (
        <Link href={hrefResolver(item.link)}>
        <a className="bg-brand-gray border border-brand-two text-brand-zero px-3 py-2 font-serif hover:bg-opacity-90 max-w-sm text-center mb-2">
        {
          item.linktext &&
          <p>{item.linktext}</p>
        }
        </a>
        </Link>
      ))}
      </div>
    </div>
  </section>
);

export default MySlice;
