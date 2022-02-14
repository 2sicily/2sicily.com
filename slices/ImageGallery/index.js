import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image'

export default function MySlice({ slice }) {
  const [ selectedImage, setSelectedImage ] = useState(slice.items[0].image)
  return (
    <section className="pb-8 p-4 max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto">
      <div className="z-0 border-2 border-brand-two aspect-w-16 aspect-h-9">
        <img
            src={`${selectedImage.url}`}
            alt=""
            className="object-cover"
          />
      </div>
      </div>
      <div className="pt-2 max-w-7xl mx-auto grid grid-cols-5 h-min gap-2">
      {slice.items.map((item) => (
        <button className="hover:opacity-75 overflow-hidden col-span-1 focus:outline-none border-2 border-brand-two h-min aspect-w-16 aspect-h-9" onClick={() => setSelectedImage(item.image)}>
        <img
            src={`${item.image.url}`}
            // layout="responsive"
            alt=""
            className="object-cover"
            // width={`${item.image.dimensions.width}`}
            // height={`${item.image.dimensions.height}`}
          />
      </button>
      ))}
      </div>
      
    </section>
  )
}
