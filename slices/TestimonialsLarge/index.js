import React from 'react';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <section>
      <div className="p-4 mb-16 max-w-5xl mx-auto gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center py-4">
        {slice.items.map((item) => (
        <div className="border border-brand-three bg-brand-gray col-span-1 flex flex-col items-center p-4 shadow-md">
          <div className="text-lg font-light italic text-center">
                  {
                    item.testimonial &&
                    <p className="text-black">"<br></br>{item.testimonial}</p>
                  }
          </div>
          <div className="text-base text-center py-4 font-light capitalize">
                  {
                    item.name &&
                    <p className="text-black">{item.name}</p>
                  }
          </div>

        </div>
        
      ))}
      </div>
  </section>
);

export default MySlice;
