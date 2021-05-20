import React from "react";
import Head from "next/head";
import HeaderPrismic from './HeaderPrismic'
import { RichText } from "prismic-reactjs";

const Layout = ({ children, props, menu }) => {
  if (props && props.data) {
    const meta_title = props.data.meta_title
    const meta_desc = props.data.meta_description
  
    return (
      <div>
        <Head>
          <title>2Sicily&nbsp;{meta_title && `| ${meta_title}`}</title>
          <meta 
            name='description' 
            content = {meta_desc}
          />
        </Head>
        
        <HeaderPrismic menu={menu} />
        <main>{children}</main>
      </div>
    );
  };
}

export default Layout;
