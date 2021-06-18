import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration'
import { htmlSerializer } from '../../utils/prismicHelpers';

const MySlice = ({ slice }) => (
  <section className="max-w-7xl w-full mx-auto p-4">
    <span className="title">
      {
        slice.primary.text &&
        <RichText render={slice.primary.text} linkResolver={linkResolver} htmlSerializer={htmlSerializer} />
      }
    </span>
  </section>
);

export default MySlice;
