import React from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import { linkResolver } from '../../prismic-configuration';

const MySlice = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title &&
        <RichText render={slice.primary.title}/>
      }
    </span>
    {
      slice.primary.description &&
      <RichText render={slice.primary.description}/>
    }
    {slice.items.map((item) => (
      <div className="bg-green-400 m-4">
        {item.title && <div>{item.title}</div>}
        {item.description && <div>{item.description}</div>}
        {
          item.buttonlink && item.buttonlabel &&
          <Link href={linkResolver(item.buttonlink)}>
            <a>
            <RichText render={item.buttonlabel} />
            </a>
          </Link>
        }
      </div>
        

    ))}
  </section>
);

export default MySlice;
