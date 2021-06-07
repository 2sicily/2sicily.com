import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section className="bg-brand-gray text-gray-800 py-12 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1"></div>
      <div className="col-span-1 p-4">
      <div className="border-t border-brand-one w-24 pb-8"></div>
      <span className="font-serif uppercase text-left text-3xl">
        {
          slice.primary.heading ?
          <p>{slice.primary.heading}</p>
          : <p>Template slice, update me!</p>
        }
      </span>
      <div className="text-base text-left py-4 font-light">
        {
          slice.primary.description ?
          <p>{slice.primary.description}</p>
          : <p>Template slice, update me!</p>
        }
      </div>
      <button className="text-brand-gray border border-brand-two bg-brand-one px-3 py-2 font-serif hover:bg-opacity-90">
      {slice.primary.linktext ?
        <p>{slice.primary.linktext}</p>
        : <p>Template slice, update me!</p>
      }
      </button>
      </div>
    </div>
    
  </div>
</section>
  
);

export default MySlice;
