import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration'
import { htmlSerializer } from '../../utils/prismicHelpers';

const MySlice = ({ slice }) => (
  <section className="w-full mx-auto p-4 mb-16 max-w-prose break-words" style={{hyphens: "auto"}}>
    <span className="w-full overflow-hidden">
      {
        slice.primary.text &&
        <RichText render={slice.primary.text} linkResolver={linkResolver} htmlSerializer={htmlSerializer} />
      }
    </span>
  </section>
);

export default MySlice;
