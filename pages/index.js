import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Layout from "./../components/Layout";

const Page = (props) => {
  return (
    <Layout props={props} menu={props.menu}>
      {JSON.stringify(props)}
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic

// export async function getStaticProps({
//   preview, 
//   previewData,
//   locale,
//   locales,
// }) {
//   return useGetStaticProps({
//     client: Client(),
//     uid: 'home', 
//     queryType: 'single',
//     apiParams() {
//       return {
//         lang: 'it-it',
//       }
//     },
//   })
// }

export const getStaticProps = useGetStaticProps({
    client: Client(),
    queryType: 'repeat',
    type: 'page',
    apiParams() {
      return {
        lang: 'it-it',
        uid: 'home',
      }
    },
  })


  

export default Page;
