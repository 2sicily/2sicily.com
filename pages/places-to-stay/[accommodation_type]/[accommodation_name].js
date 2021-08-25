import SliceZone from "next-slicezone";
import { queryRepeatableDocuments } from '../../../utils/queries';
import { Client, manageLocal } from '../../../utils/prismicHelpers';

import resolver from "../../../sm-resolver.js";
import Layout from "../../../components/Layout";

const Page = (props) => {
  return (

    // JSON.stringify(props.doc.data.meta_title)
    <Layout props={props.doc} menu={props.menu} footer={props.footer}>
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
  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale)


  const client = Client();
  const doc =
    (await client.getByUID(
      'accommodation_page',
      params.accommodation_name,
      { lang: currentLang }
    )) || {};
  const menu =
    (await client.getSingle('menu', { lang: locale })) ||
    {};
  const footer =
  (await client.getSingle('footer_navigation', { lang: locale })) ||
  {};

  

  return {
    props: {
      params,
      footer,
      menu,
      doc,
      lang:{
        currentLang,
        isMyMainLanguage,
      }
    },
  };
}


export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === 'accommodation_page'
  );
  return {
    paths: documents.map((doc) => {
      return { params: { accommodation_name: doc.uid, accommodation_type: doc.data.accommodation_type }, locale: doc.lang };
    }),
    fallback: false,
  };
}


export default Page;


