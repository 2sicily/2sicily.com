/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { hrefResolver } from '../prismic-configuration'

export default function AccommodationGridSection({ props }) {
  return (
    <div className="max-w-7xl mx-auto p-4">
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-8">
        {props.map((item) => (
        <Link href={hrefResolver(item)}>
        <li
          key={item.uid}
          className="group hover:bg-brand-three cursor-pointer col-span-1 flex flex-col text-center bg-brand-white shadow border border-brand-zero p-4"
        >
        <div className="flex-none w-full mb-2 overflow-hidden">
          {item.data.primary_image.url ? 
          <div className="relative w-full">
          <img className="bg-gray-100 object-cover h-60 w-full border border-brand-zero" src={item.data.primary_image.url} alt="" />
            <div className="absolute right-0 top-0 bg-brand-white group-hover:bg-brand-three py-2 px-2 rounded-none border-brand-zero border-l border-b space-x-1 flex-auto text-gray-900 text-sm font-light inline-flex items-center justify-end w-auto">
              
              <svg className="flex-none stroke-current stroke-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="">{item.data.location_headline}</span>
              
            </div>
          </div>
          :
          <div className="relative w-full">
          <div className="bg-gray-100 object-cover h-60 w-full border border-brand-zero" src={item.data.primary_image.url} alt=""></div>
            <div className="absolute right-0 top-0 bg-brand-white group-hover:bg-brand-three py-2 px-2 rounded-none border-brand-zero border-l border-b space-x-1 flex-auto text-gray-900 text-sm font-light inline-flex items-center justify-end w-auto">
              
              <svg className="flex-none stroke-current stroke-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="">{item.data.location_headline}</span>
              
            </div>
          </div>
          }
          
        </div>
          <div className="flex-1 flex sm:flex-row pt-2 w-full flex-col">
            <div className="py-0.5 text-base text-left flex-auto text-gray-900 font-serif truncate w-full">{item.data.accommodation_name}</div>
            <div className="flex-1"></div>
            {/* <div className="py-0.5 space-x-1 flex-auto text-gray-900 text-sm font-light inline-flex items-center justify-start sm:justify-end w-full sm:w-auto sm:mt-0 mt-1">
              
              <svg className="flex-none stroke-current stroke-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="">{item.data.location_headline}</span>
              
            </div> */}
          </div>
          <div className="flex-1 flex sm:flex-row pb-2 w-full flex-col">
            <div className="py-0.5 space-x-1 flex-auto text-gray-900 text-sm font-light inline-flex items-center justify-start sm:justify-start w-full sm:mt-0">
              
              <svg className="stroke-current stroke-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 20H22.5V18C22.5 16.3431 21.1569 15 19.5 15C18.5444 15 17.6931 15.4468 17.1438 16.1429M17.5 20H7.5M17.5 20V18C17.5 17.3438 17.3736 16.717 17.1438 16.1429M7.5 20H2.5V18C2.5 16.3431 3.84315 15 5.5 15C6.45561 15 7.30686 15.4468 7.85625 16.1429M7.5 20V18C7.5 17.3438 7.62642 16.717 7.85625 16.1429M7.85625 16.1429C8.5935 14.301 10.3948 13 12.5 13C14.6052 13 16.4065 14.301 17.1438 16.1429M15.5 7C15.5 8.65685 14.1569 10 12.5 10C10.8431 10 9.5 8.65685 9.5 7C9.5 5.34315 10.8431 4 12.5 4C14.1569 4 15.5 5.34315 15.5 7ZM21.5 10C21.5 11.1046 20.6046 12 19.5 12C18.3954 12 17.5 11.1046 17.5 10C17.5 8.89543 18.3954 8 19.5 8C20.6046 8 21.5 8.89543 21.5 10ZM7.5 10C7.5 11.1046 6.60457 12 5.5 12C4.39543 12 3.5 11.1046 3.5 10C3.5 8.89543 4.39543 8 5.5 8C6.60457 8 7.5 8.89543 7.5 10Z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <span className="">{item.data.sleeps} guests</span>
              
            </div>
            <span className="flex-1"></span>
            <span className="py-0.5 flex-auto truncate text-gray-900 text-sm font-light inline-flex items-center justify-start sm:justify-end w-full sm:mt-0 mt-1">€{item.data.price_per_night} / night</span>
          </div>
        </li>
        </Link>
      ))}
    </ul>
    </div>
    
  )
}
