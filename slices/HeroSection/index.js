import React from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image'

const MySlice = ({ slice }) => (
  <section className="bg-brand-zero text-brand-gray">
    <div className="w-full overflow-hidden">
      <Image
          src={`${slice.primary.image.url}`}
          layout="responsive"
          alt="Picture of the author"
          width={`${slice.primary.image.dimensions.width}`}
          height={`${slice.primary.image.dimensions.height}`}
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
      <div className="space-x-4 w-full flex justify-center">
        {slice.items.map((item) => (
        <button className="bg-brand-gray border border-brand-two text-brand-zero px-3 py-2 font-serif hover:bg-opacity-90">
        {
          item.linktext &&
          <p>{item.linktext}</p>
        }
        </button>
      ))}
      </div>
    </div>
  </section>
);

export default MySlice;
