import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center">
    <div className="w-full p-4 mb-4">
      <div className="font-light text-xl mb-4">{slice.primary.heading}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full p-4 font-light text-brand-one border-brand-one border">
        <ul className="col-span-1 list-disc ml-6">
        {slice.items.slice(0,(slice.items.length / 2)).map((item) => (
          <li>{item.feature}</li>
        ))}
        </ul>
        <ul className="col-span-1 list-disc ml-6">
        {slice.items.slice((slice.items.length / 2)).map((item) => (
          <li>{item.feature}</li>
        ))}
        </ul>
      </div>
    </div>
  </section>
);

export default MySlice;
