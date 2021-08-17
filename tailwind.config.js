module.exports = {
  server: {
    host: true
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        primary: {
          450: '#06163A',
          dark: '#00091D'
        },      
      }
    }
  },
  variants: {
    extend: {
      textColor: ['last']
    },
  },
  plugins: [],
}
