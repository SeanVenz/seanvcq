/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      textColor:{
        main: '#FCFCFC',
        secondary: '#5B5C60',
        accent: '#FFCB6C'
      },
      backgroundColor:{
        main: '#34353A',
        secondary: '#F0BF6C',
        tertiary: '#3D3E42',
        accent: '#FFCB6C'
      }
    },
  },
  plugins: [],
};
