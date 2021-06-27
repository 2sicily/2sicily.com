import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section className="bg-brand-white text-black py-12 px-8">
    <div className="max-w-prose mx-auto">
      <div className="border-t border-brand-zero w-24 mx-auto pb-8"></div>
      <div className="font-serif uppercase text-center text-3xl">
        {
          slice.primary.heading &&
          <p>{slice.primary.heading}</p>
        }
      </div>
      <div className="text-lg text-center max-w-prose mx-auto py-6 font-light">
        {
          slice.primary.description &&
          <p>{slice.primary.description}</p>
        }
      </div>
    </div>
  </section>
);

export default MySlice;
