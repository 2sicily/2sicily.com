const withTM = require("next-transpile-modules")(["next-slicezone"]);

module.exports = withTM({
  modules: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-gb'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-gb',
  },
  images: {
    domains: ['images.prismic.io', 'twosicily.cdn.prismic.io'],
  },
})