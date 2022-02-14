/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { removeLanguage } from '../prismic-configuration'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageDropdown(props) {
    const menu_items = [
        {
            language: 'English',
            param: 'en-gb'
        },
        {
            language: 'Italiano',
            param: 'it-it'
        },
        {
            language: 'Deútsche',
            param: 'de-de'
        }
    ]


  return (  
    <>
    <div className="flex items-center">
    <div className="text-sm font-light pr-2 text-gray-500">
      Language
    </div>
    <Menu as="div" className="w-30 relative inline-block text-left">
      
      <div>
        <Menu.Button className="inline-flex justify-center items-center w-full rounded-lg border border-brand-three shadow-sm px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-brand-three">
        {/* <div className="text-small font-light text-gray-500 pr-2">
        
        {props.lang == 'en-gb' ? 'EN' : props.lang == 'it-it' ? 'IT' : 'DE'} 
   
        </div> */}
        
        {props.lang == 'en-gb' ? 
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#FFF" d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
            <path fill="#C8102E" d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
            <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
            <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
        </svg>
        : props.lang == 'it-it' ? 
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
            <g fill-rule="evenodd" stroke-width="1pt">
                <path fill="#fff" d="M0 0h640v480H0z"/>
                <path fill="#009246" d="M0 0h213.3v480H0z"/>
                <path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/>
            </g>
        </svg> : 
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
            <path fill="#ffce00" d="M0 320h640v160H0z"/>
            <path d="M0 0h640v160H0z"/>
            <path fill="#d00" d="M0 160h640v160H0z"/>
        </svg>
        }
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-brand-three ring-opacity-100 focus:outline-none">
          <div className="py-1">
            {menu_items.map((item) => (
                <Menu.Item>
                {({ active }) => (
                    <Link
                    href={removeLanguage(window.location.pathname)}
                    locale={item.param}
                    >
                    <a className={classNames(
                        'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    )}
                    >
                        {item.language}
                    </a>
                    </Link>
                )}
                </Menu.Item>
            ))}
            
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
    </>
  )
}
