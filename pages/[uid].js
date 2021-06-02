import { Client } from "../utils/prismicHelpers";
import SliceZone from "next-slicezone";
import { queryRepeatableDocuments } from '../utils/queries';
import { useGetStaticPaths, useGetStaticProps } from 'next-slicezone/hooks'

import resolver from "../sm-resolver.js";
import Layout from "../components/Layout";

const Page = (props) => {
  return (
    
    <Layout props={props} menu={props.menu}>
      {JSON.stringify(props)}
      <SliceZone {...props} resolver={resolver} />
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

export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams({ params }) {
    return {
      uid: params.uid,
      lang: 'it-it'
    }
  },
})

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
        lang: prismicDocument.lang,
      },
    }
  },
})



export default Page;


