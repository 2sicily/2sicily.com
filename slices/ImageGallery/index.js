import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import Image from 'next/image'

export default function MySlice({ slice }) {
  const [ selectedImage, setSelectedImage ] = useState(slice.items[0].image)
  return (
    <section className="pb-8">
      <div className="w-full overflow-hidden z-0 max-w-7xl mx-auto border-2 border-brand-two">
        <Image
            src={`${selectedImage.url}`}
            layout="responsive"
            alt=""
            width={`${selectedImage.dimensions.width}`}
            height={`${selectedImage.dimensions.height}`}
          />
      </div>
      <div className="pt-2 max-w-7xl mx-auto grid grid-cols-5 h-min gap-2">
      {slice.items.map((item) => (
        <button className="hover:opacity-75 overflow-hidden col-span-1 focus:outline-none border-2 border-brand-two h-min" onClick={() => setSelectedImage(item.image)}>
        <Image
            src={`${item.image.url}`}
            layout="responsive"
            alt=""
            width={`${item.image.dimensions.width}`}
            height={`${item.image.dimensions.height}`}
          />
      </button>
      ))}
      </div>
      
    </section>
  )
}
