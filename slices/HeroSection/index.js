import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section className="bg-brand-zero text-brand-gray py-12 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="border-t border-brand-gray w-24 mx-auto pb-8"></div>
      <span className="font-serif uppercase text-center text-3xl">
        {
          slice.primary.heading ?
          <p>{slice.primary.heading}</p>
          : <p>Template slice, update me!</p>
        }
      </span>
      <div className="text-base text-center max-w-xl mx-auto py-6 font-light">
        {
          slice.primary.description ?
          <p>{slice.primary.description}</p>
          : <p>Template slice, update me!</p>
        }
      </div>
      <div className="space-x-4 w-full flex justify-center">
        {slice.items.map((item) => (
        <button className="bg-brand-gray border border-brand-two text-brand-zero px-3 py-2 font-serif hover:bg-opacity-90">
        {
          item.linktext ?
          <p>{item.linktext}</p>
          : <p>Template slice, update me!</p>
        }
        </button>
      ))}
      </div>
    </div>
  </section>
);

export default MySlice;
