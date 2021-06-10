module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './slices/**/*.js', ],
  theme: {
    extend: {
      colors: {
        brand: {
          zero: '#4458BE',
          one: '#4B61D1',
          two: '#7889DD',
          three: '#EFF2FF',
          four: '#F8F6F0',
          five: '#DDBEA9',
          six: '#CB997E',
          white: '#FDFDFD',
          gray: '#FBFBFB'
        },
      },
    }, 
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['la_luxes_serifregular', 'serif'],
    },
  },
  variants: {},
  plugins: [],
}