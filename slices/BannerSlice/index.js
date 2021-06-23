import React from 'react';
import { RichText } from 'prismic-reactjs';
import {hrefResolver} from '../../prismic-configuration'
import Link from 'next/link';

const MySlice = ({ slice }) => (
  <section className="bg-brand-six text-brand-gray py-12 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="border-t border-brand-gray w-24 mx-auto pb-8"></div>
    <div className="font-serif uppercase text-center text-3xl">
      {
        slice.primary.heading &&
        <p>{slice.primary.heading}</p>
      }
    </div>
    <div className="text-lg text-center max-w-xl mx-auto py-6 font-light">
      {
        slice.primary.description &&
        <p>{slice.primary.description}</p>
      }
    </div>
    {slice.primary.linktext && slice.primary.link &&
    <div className="w-full flex">
      <Link href={hrefResolver(slice.primary.link)}>
      <a className="mx-auto">
      <button className="mx-auto  text-lg bg-brand-gray border border-brand-five text-brand-six px-3 py-2 font-serif hover:bg-opacity-90">
            <p>{slice.primary.linktext}</p>
      </button>
      </a>
      </Link>
    </div>
    }
  </div>
</section>
);

export default MySlice;
