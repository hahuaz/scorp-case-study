module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e63946',
        secondary: '#f1faee',
        third: '#a8dadc',
        fourth: '#457b9d',
        fifth: '#1d3557',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        '-30': '-30',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  module: 'jit',
  prefix: 't-',
}
