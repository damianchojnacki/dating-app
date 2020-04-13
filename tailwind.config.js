module.exports = {
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1600px',
    },
    boxShadow: {
      sm: '0 0 4px 0 rgba(0, 0, 0, .5)',
      md: '0 0 10px 0 rgba(0, 0, 0, .66)',
      lg: '0 0 20px 0 rgba(0, 0, 0, .5)',
    },
    extend: {
      colors: {
        primary: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      },
      inset: {
        '1/2': '50%',
        '1/4': '25%',
        '1/8': '12.5%',
        '1/16': '6.25%',
        'full': '100%',
      },
      height: {
        "fit": "fit-content",
      },
      opacity: {
        "9": ".9",
      },
    }
  },
  variants: {},
  plugins: [],
};
