import SliceZone from "next-slicezone";
import { Client, manageLocal } from '../utils/prismicHelpers';

import resolver from "../sm-resolver.js";
import Layout from "../components/Layout";
import { homePageQuery } from "../utils/queries";

const Page = (props) => {
  return (

    // JSON.stringify(props.doc.data.meta_title)
    <Layout props={props.doc} menu={props.menu}>
      <SliceZone slices={props.doc.data.body} resolver={resolver} />
    </Layout>
  )
};

// Fetch content from prismic
///////////////////////

export async function getStaticProps({
  params,
  locale,
  locales,
}) {
  const client = Client();
  const doc =
  (await client.getSingle('home_page', { lang: locale })) ||
  {};
  const menu =
    (await client.getSingle('menu', { lang: locale })) ||
    {};

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale)

  return {
    props: {
      menu,
      doc,
      lang:{
        currentLang,
        isMyMainLanguage,
      }
    },
  };
}


export default Page;


