/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { hrefResolver } from '../prismic-configuration'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]

export default function AccommodationGridSection({ props }) {
  const router = useRouter()
  return (
    <div className="max-w-7xl mx-auto p-4">
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {props.map((item) => (
        <Link href={hrefResolver(item)}>
        <li
          key={item.uid}
          className="hover:bg-brand-three cursor-pointer col-span-1 flex flex-col text-center bg-brand-white shadow border border-brand-zero p-4"
        >
        
        {/* <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={item.imageUrl} alt="" /> */}
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
