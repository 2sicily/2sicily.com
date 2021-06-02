import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";
import Layout from "../components/Layout";

const Page = (props) => {
  return (
    
    <Layout props={props} menu={props.menu}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  )
};

// Fetch content from prismic
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   uid: ({ params }) => params.uid
// });

// export const getStaticPaths = useGetStaticPaths({
//   client: Client(),
//   type: "page",
//   fallback: process.env.NODE_ENV === "development",
//   formatPath: ({ uid }) => ({ params: { uid } }),
// });
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams({ params }) {
    return {
      lang: params.lang,
      uid: params.uid,
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


