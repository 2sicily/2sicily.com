import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
<section className="bg-brand-zero py-12 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-brand-gray w-24 pb-4"></div>
      <div className="uppercase text-left text-base font-light pb-2 text-brand-gray">
        {
          slice.primary.pretitle ?
          <p>{slice.primary.pretitle}</p>
          : <p>Template slice, update me!</p>
        }
      </div>
      <div className="font-serif uppercase text-left text-3xl text-brand-gray">
        {
          slice.primary.heading ?
          <p>{slice.primary.heading}</p>
          : <p>Template slice, update me!</p>
        }
      </div>
      <div className="text-base text-left py-2 font-light text-brand-gray">
        {
          slice.primary.description ?
          <p>{slice.primary.description}</p>
          : <p>Template slice, update me!</p>
        }
      </div>
      <div className="space-x-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center py-4">
        {slice.items.map((item) => (
        <div className="border border-brand-three bg-brand-gray col-span-1 flex flex-col items-center p-4 shadow-md">
          <div className="text-lg font-light italic text-center">
                  {
                    item.testimonial ?
                    <p className="text-gray-800">"<br></br>{item.testimonial}</p>
                    : <p>Template slice, update me!</p>
                  }
          </div>
          <div className="text-base text-center py-4 font-light capitalize">
                  {
                    item.name ?
                    <p className="text-gray-800">{item.name}</p>
                    : <p>Template slice, update me!</p>
                  }
          </div>

        </div>
        
      ))}
      </div>
      <div className="flex flex-row-reverse">
      {slice.primary.linktext &&
      <button className="bg-brand-gray border border-brand-two text-brand-zero px-3 py-2 font-serif hover:bg-opacity-90">
            <p>{slice.primary.linktext}</p>
      </button>
      }
      </div>
      
    </div>
  </section>
);

export default MySlice;
