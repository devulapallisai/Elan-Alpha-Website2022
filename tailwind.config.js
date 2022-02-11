const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["LemonMilk"],
        headingbold: ["LemonMilkbold"],
        text: ["Raleway", "sans-serif"],
      },
      colors:{
        startblue:'rgb(21,5,37)',
        gold:'#F5C470',
        headerwhite:'rgb(242,239,225)',
        team:'rgb(53,15,62)',
        events: '#80295D',
      },
      screens: {
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
