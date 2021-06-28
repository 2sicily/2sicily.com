import React from "react";
import Head from "next/head";
import HeaderPrismic from './HeaderPrismic'
import FooterPrismic from './FooterPrismic'
import { RichText } from "prismic-reactjs";

const Layout = ({ children, props, menu, footer }) => {
  const info = require('../data/info.json');
  if (props && props.data) {
    const meta_title = props.data.meta_title
    const meta_desc = props.data.meta_description
    
    return (
      <div className="bg-brand-white min-h-screen">
        <Head>
          <title>{info.name}&nbsp;{meta_title && `| ${meta_title}`}</title>
          <meta 
            name='description' 
            content = {meta_desc}
          />
        </Head>
        
        <HeaderPrismic menu={menu} />
        <main>{children}</main>
        <FooterPrismic footer={footer} />
      </div>
    );
  };
}

export default Layout;
