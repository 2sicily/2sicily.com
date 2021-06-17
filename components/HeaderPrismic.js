/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
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
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { hrefResolver } from '../prismic-configuration'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ menu }) {
  const solutions = [
    {
      name: 'Analytics',
      description: 'Get a better understanding of where your traffic is coming from.',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      description: 'Speak directly to your customers in a more meaningful way.',
      href: '#',
      icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
      name: 'Integrations',
      description: "Connect with third-party tools that you're already using.",
      href: '#',
      icon: ViewGridIcon,
    },
    {
      name: 'Automations',
      description: 'Build strategic funnels that will drive your customers to convert',
      href: '#',
      icon: RefreshIcon,
    },
  ]
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: SupportIcon,
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkAltIcon,
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
  ]

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex-col items-end py-6 md:justify-start">
              <div className="flex justify-center py-4 w-full">
                <div className="flex-none w-10 -mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-three">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="flex-1 flex justify-center">
                <Link className="" href="/">
                  <a>
                    <span className="sr-only">2 Sicily</span>
                    <img
                      className="h-12 w-auto sm:h-20"
                      src={menu.data.logo.url}
                      alt=""
                    />
                  </a>
                </Link>
                </div>
                <div className="flex-none w-10"></div>
              </div>
              
              <Popover.Group as="nav" className="hidden md:flex space-x-10 justify-center z-50">
                {menu.data.body.map((item) => (
                  item.slice_type === "Primary Pages" ?
                  item.items.map((primaryPage) => (
                  <Link href={hrefResolver(primaryPage.link)}>
                  <a 
                  key={primaryPage.link.uid}
                  className="text-base font-light capitalize text-gray-500 hover:text-gray-900"
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
                            open ? 'text-gray-900' : 'text-gray-500',
                            'relative px-2 group bg-white rounded-md inline-flex items-center text-base font-light hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-three'
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
                          className="w-screen absolute top-0 left-0 z-30 mt-10 -ml-2 transform max-w-xs -translate-x-1/4"
                        >
                          <div className="bg-white rounded-lg shadow-lg ring-1 ring-brand-three ring-opacity-100 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            
                              {item.items.map((menu_item) => (
                                <Menu.Item>
                                <Link href={hrefResolver(menu_item.third_level_link)}>
                               
                                  <a
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  key={menu_item.third_level_link.uid}
                                  >
                                    <p className="text-base font-light text-gray-900">{menu_item.third_level_link_text}</p>
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
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-three">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                          <span className="ml-3 text-base font-light text-gray-900">{item.name}</span>
                        </a>
                      ))}
                      {menu.data.body.map((item) => (
                  item.slice_type === "Primary Pages" ?
                  item.items.map((primaryPage) => (
                  <Link
                  href={hrefResolver(primaryPage.link)}
                  >
                  <a key={primaryPage.link.uid} className="text-base font-light capitalize text-gray-500 hover:text-gray-900">
                    {primaryPage.linktext}
                  </a>
                  </Link>
                  ))
                  :
                  item.slice_type === "Dropdown" ?
                  <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'px-2 group bg-white rounded-md inline-flex items-center text-base font-light hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-three'
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
                      </Popover.Button>

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
                        <Popover.Panel
                          static
                          className="absolute z-30 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="bg-white rounded-lg shadow-lg ring-1 ring-brand-three ring-opacity-100 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {item.items.map((menu_item) => (
                                <Link href={hrefResolver(menu_item.third_level_link)}
                                >
                                  <a
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  key={menu_item.third_level_link.uid}
                                  >
                                    <p className="text-base font-light text-gray-900">{menu_item.third_level_link_text}</p>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                  :
                  "Error"
                ))
                }
                    </nav>
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


