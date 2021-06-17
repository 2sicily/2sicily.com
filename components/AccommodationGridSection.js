/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { hrefResolver } from '../prismic-configuration'

export default function AccommodationGridSection({ props }) {
  return (
    <div className="max-w-7xl mx-auto p-4">
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {props.map((item) => (
        <Link href={hrefResolver(item)}>
        <li
          key={item.uid}
          className="hover:bg-brand-three cursor-pointer col-span-1 flex flex-col text-center bg-brand-white shadow border border-brand-zero p-4"
        >
        <div className="flex-none w-full h-60 mb-2 overflow-hidden">
          {item.data.primary_image.url ? 
          <img className="bg-gray-100 object-cover" src={item.data.primary_image.url} alt="" />
          :
          <div className="bg-gray-100 h-60"></div>
          }
          
        </div>
          <div className="flex-1 flex py-2">
            <span className="flex-none text-gray-900 text-sm font-serif">{item.data.accommodation_name}</span>
            <span className="flex-1"></span>
            <span className="flex-none text-gray-900 text-sm font-light">{item.data.location_headline}</span>
          </div>
          <div className="flex-1 flex py-2">
            <span className="flex-none text-gray-900 text-sm font-light">{item.data.sleeps} guests</span>
            <span className="flex-1"></span>
            <span className="flex-none text-gray-900 text-sm font-light">{item.data.location_headline}</span>
          </div>
        </li>
        </Link>
      ))}
    </ul>
    </div>
    
  )
}
