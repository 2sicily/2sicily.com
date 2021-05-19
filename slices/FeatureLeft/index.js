import React from 'react';
import Link from 'next/link'
import { RichText } from 'prismic-reactjs';
import { customLink, linkResolver } from "../../prismic-configuration"

const MySlice = ({ slice }) => (
  <section>
    <span className="font-lg text-blue-600">
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
      slice.primary.image &&
      <div>Image</div>
    }
    {
      slice.primary.buttonlink && slice.primary.buttonlabel &&
      <Link href={linkResolver(slice.primary.buttonlink)}>
        <a>
        <RichText render={slice.primary.buttonlabel} />
        </a>
      </Link>
    }
  </section>
);

export default MySlice;
