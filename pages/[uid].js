import SliceZone from "next-slicezone";
import { useGetStaticPaths, useGetStaticProps } from 'next-slicezone/hooks'
import { queryRepeatableDocuments } from '../utils/queries';
import { Client, manageLocal } from '../utils/prismicHelpers';

import resolver from "../sm-resolver.js";
import Layout from "../components/Layout";

const Page = (props) => {
  return (

    // JSON.stringify(props.doc.data.meta_title)
    <Layout props={props.doc} menu={props.menu}>
      
      <SliceZone slices={props.doc.data.body} resolver={resolver} />
    </Layout>
  )
};

// Fetch content from prismic
// export async function getStaticProps({
//   params,
//   locale,
//   locales,
// }) {
//   const client = Client();
//   const doc =
//     (await client.getByUID(
//       'page',
//       params.uid,
//       { lang: locale }
//     )) || {};

//   return {
//     props: {
//       doc,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const documents = await queryRepeatableDocuments(
//     (doc) => doc.type === 'page'
//   );
//   return {
//     paths: documents.map((doc) => {
//       return { params: { uid: doc.uid }, locale: doc.lang };
//     }),
//     fallback: false,
//   };
// }
///////////////////////
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   apiParams({ params }) {
//     return {
//       uid: params.uid,
//       lang: 'it-it'
//     }
//   },
// })

// export const getStaticPaths = useGetStaticPaths({
//   client: Client(),
//   formatPath: (prismicDocument) => {
//     return {
//       params: {
//         uid: prismicDocument.uid,
//         lang: prismicDocument.lang,
//       },
//     }
//   },
// })
///////////////////////

export async function getStaticProps({
  params,
  locale,
  locales,
}) {
  const client = Client();
  const doc =
    (await client.getByUID(
      'page',
      params.uid,
      { lang: locale }
    )) || {};
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


export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === 'page'
  );
  return {
    paths: documents.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang };
    }),
    fallback: false,
  };
}


export default Page;


