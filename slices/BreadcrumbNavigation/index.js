import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import { useRouter } from 'next/router';
import Link from 'next/link'
/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/outline'



export default function MySlice({ slice }) {
  const router = useRouter()
  let pages = []

  if (router.query.accommodation_type) {
    pages.push({name: 'Places To Stay', href: `/${router.locale ? router.locale : ''}/places-to-stay/all`})
    pages.push({name: router.query.accommodation_type.replaceAll('-', ' '), href: `/${router.locale ? router.locale : ''}/places-to-stay/${router.query.accommodation_type}`})
  }
  if (router.query.accommodation_name) {
    pages.push({name: router.query.accommodation_name.replaceAll('-', ' '), href: `/${router.locale ? router.locale : ''}/places-to-stay/${router.query.accommodation_type}/${router.query.accommodation_name}`})
  }
  if (router.query.information_page_url) {
    pages.push({name: 'Information', href: `/${router.locale ? router.locale : ''}/information/all`})
    pages.push({name: router.query.information_page_url.replaceAll('-', ' '), href: `/${router.locale ? router.locale : ''}/information/${router.query.information_page_url}`})
  }
  if (router.query.primary_page_url) {
    pages.push({name: router.query.primary_page_url.replaceAll('-', ' '), href: `/${router.locale ? router.locale : ''}/${router.query.primary_page_url}`})
  }


  return (
    <nav className="flex p-4 bg-white border-t border-b border-brand-three" aria-label="Breadcrumb">
      <ol className="max-w-7xl w-full mx-auto flex items-center space-x-4">
        <li>
          <div>
            <Link href={`/${router.locale}`}>
            <a className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 h-5 w-5 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link href={page.href}>
              <a
                className="ml-4 text-sm font-light text-gray-500 hover:text-gray-700 capitalize"
              >
                {page.name}
              </a>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
