import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section>
    <span className="font-medium text-2xl text-red-600">
    {
        slice.primary.title &&
        <RichText render={slice.primary.title}/>
    }
    </span>
    {
      slice.primary.description &&
      <RichText render={slice.primary.description}/>
    }
    {
      slice.primary.email &&
      <RichText render={slice.primary.email}/>
    }
    {
      slice.primary.phone &&
      <RichText render={slice.primary.phone}/>
    }
    {
      slice.primary.address &&
      <RichText render={slice.primary.address}/>
    }
  </section>
);

export default MySlice;
