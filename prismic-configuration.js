import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)");
}

module.exports = {
  // -- Prismic API endpoint
  // Determines which repository to query and fetch data from
  // Configure your site's access point here
  apiEndpoint: smConfig.apiEndpoint,

  // -- Access Token if the repository is not public
  // Generate a token in your dashboard and configure it here if your repository is private
  accessToken: '',
  
  // -- Link resolution rules
  // Manages links to internal Prismic documents
  // Modify as your project grows to handle any new routes you've made
  linkResolver: function(doc) {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`;
    }
    return '/';
  },

  // Additional helper function for Next/Link component
  hrefResolver: function(doc) {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`;
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`;
    }
    return '/';
  },
};