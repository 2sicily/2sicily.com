import React from "react";
import { RichText, Link as PLink } from 'prismic-reactjs'
import Link from "next/link";


const HeaderPrismic = ({ menu = [] }) => (
    <header className="site-header">
      <a href="/" className="logo">
        {RichText.asText(menu.data.title)}
      </a>
      <Links menuLinks={menu.data.menu_links} />
    </header>
);

const Links = ({menuLinks}) => {
  if (menuLinks) {
    return (
      <nav className="bg-red-600">
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <Link href={PLink.url(menuLink.link)}>
                {RichText.asText(menuLink.label)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

export default HeaderPrismic;
