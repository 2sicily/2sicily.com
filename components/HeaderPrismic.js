/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition, Menu, Disclosure } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  ChevronRightIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { hrefResolver } from '../prismic-configuration'
import Image from 'next/image'
import LanguageDropdown from './LanguageDropdown'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ menu, lang }) {

  return (
    <Popover className="relative bg-white border-b border-brand-three">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex-col items-end py-6 md:justify-start">
              <div className="flex justify-center items-center py-4 w-full">
                <div className="flex-none w-10 -mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-three">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="flex-1 flex justify-center">
                <Link className="" href={hrefResolver(menu.data.link)}>
                  <a>
                    <span className="sr-only">2 Sicily</span>
                    <div className="h-auto w-auto">
                      <img
                      src={menu.data.logo.url}
                      className="object-contain h-14 sm:h-20 lg:h-24"
                      alt=""
                      // width={`${menu.data.logo.dimensions.width}`}
                      // height={`${menu.data.logo.dimensions.height}`}
                      />
                    </div>
                    
                  </a>
                </Link>
                </div>
                <div className="flex-none w-10"></div>
              </div>
              <div className="flex justify-center">
                <div className="flex-none w-48"></div>
                <div className="flex-1"></div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10 justify-center z-50 items-center">
                  {menu.data.body.map((item) => (
                    item.slice_type === "Primary Pages" ?
                    item.items.map((primaryPage) => (
                    <Link href={hrefResolver(primaryPage.link)}>
                    <a 
                    key={primaryPage.link.uid}
                    className="text-lg font-light capitalize text-gray-500 hover:text-black"
                    >
                      {primaryPage.linktext}
                    </a>
                    </Link>
                    ))
                    
                    :
                    item.slice_type === "Dropdown" ?
                    <>
                    <Menu className="relative">
                    {({ open }) => (
                      <>
                          <Menu.Button
                            className={classNames(
                              open ? 'text-black' : 'text-gray-500',
                              'relative px-2 group bg-white rounded-md inline-flex items-center text-lg font-light hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-three'
                            )}
                          >
                          <span>{item.primary.dropdown_label}</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                          />
                          <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Menu.Items
                            static
                            className="w-screen absolute top-0 left-0 z-30 mt-10 -ml-2 transform max-w-xs -translate-x-1/4 focus:outline-none"
                          >
                            <div className="bg-white rounded-lg shadow-lg ring-1 ring-brand-three focus:outline-none ring-opacity-100 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              
                                {item.items.map((menu_item) => (
                                  <Menu.Item>
                                  <Link href={hrefResolver(menu_item.third_level_link)}>
                                
                                    <a
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    key={menu_item.third_level_link.uid}
                                    >
                                      <p className="text-lg font-light text-black">{menu_item.third_level_link_text}</p>
                                    </a>
                                  </Link>
                                  </Menu.Item>
                                ))}
                              </div>
                            </div>
                          </Menu.Items>
                        </Transition>
                    
                        </Menu.Button>

                        </>
                    )}
                  </Menu>
                  
                </>
                    :
                    "Error"
                  ))
                  }
                </Popover.Group>
                <div className="flex-1"></div>
                <div className="hidden md:flex w-50"><LanguageDropdown lang={lang} /></div>
                
              </div>
              
              
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-three">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-2">
                      {menu.data.body.map((item) => (
                  item.slice_type === "Primary Pages" ?
                  item.items.map((primaryPage) => (
                  <Link
                  href={hrefResolver(primaryPage.link)}
                  >
                  <a key={primaryPage.link.uid} className="text-lg py-2 px-2 font-light capitalize text-gray-500 hover:text-black">
                    {primaryPage.linktext}
                  </a>
                  </Link>
                  ))
                  :
                  item.slice_type === "Dropdown" ?


                  <Disclosure>
                    {({ open }) => (
                      <>
                    <Disclosure.Button className="inline-flex items-center text-left py-2 px-2 text-lg font-light capitalize text-gray-500 hover:text-black">
                          <span className="flex-1">{item.primary.dropdown_label}</span>
                          
                          <ChevronRightIcon
                            className={`${open ? "transform rotate-90 " : ""}flex-none h-4 w-4`}
                          />
                        </Disclosure.Button>
                    <Disclosure.Panel className="-mt-1 text-gray-500 bg-gray-50 rounded-b-md">
                    {item.items.map((menu_item) => (
                                              <Link href={hrefResolver(menu_item.third_level_link)}
                                              >
                                                <a
                                                className="py-2 px-4 flex items-start hover:bg-gray-100"
                                                key={menu_item.third_level_link.uid}
                                                >
                                                  <p className="text-sm font-light text-black">{menu_item.third_level_link_text}</p>
                                                </a>
                                              </Link>
                                            ))}
                    </Disclosure.Panel>
                    </>
                    )}
                  </Disclosure>

                  :
                  "Error"
                ))
                }
                    </nav>
                    <div className="flex w-full justify-end"><LanguageDropdown lang={lang} /></div>
                  </div>
                </div>
                
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}


