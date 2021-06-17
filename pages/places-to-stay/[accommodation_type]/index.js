import SliceZone from "next-slicezone";
import { queryRepeatableDocuments } from '../../../utils/queries';
import { Client, manageLocal } from '../../../utils/prismicHelpers';

import resolver from "../../../sm-resolver.js";
import Layout from "../../../components/Layout";
import AccommodationGridSection from "../../../components/AccommodationGridSection";

const Page = (props) => {
  return (
    <Layout props={props.doc} menu={props.menu} footer={props.footer}>
      <SliceZone slices={props.doc.data.body} resolver={resolver} />
      <AccommodationGridSection props={props.documents} />
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
    (await client.getByUID(
      'grid_page',
      params.accommodation_type,
      { lang: locale }
    )) || {};
  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale)
  const menu =
    (await client.getSingle('menu', { lang: locale })) ||
    {};
  const footer =
    (await client.getSingle('footer_navigation', { lang: locale })) ||
    {};
  if (params.accommodation_type === 'all') {
    const documents = await queryRepeatableDocuments(
      (doc) => doc.type === 'accommodation_page' && doc.data.accommodation_type !== params.accommodation_type
      );
      return {
        props: {
          menu,
          footer,
          doc,
          lang:{
            currentLang,
            isMyMainLanguage,
          },
          documents
        },
      };
  } else {
    const documents = await queryRepeatableDocuments(
      (doc) => doc.type === 'accommodation_page' && doc.data.accommodation_type === params.accommodation_type
      );
      return {
        props: {
          menu,
          footer,
          doc,
          lang:{
            currentLang,
            isMyMainLanguage,
          },
          documents
        },
      };
  }
  

  

  
}


export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === 'grid_page'
  );
  return {
    paths: documents.map((doc) => {
      return { params: { accommodation_type: doc.uid }, locale: doc.lang };
    }),
    fallback: false,
  };
}


export default Page;


