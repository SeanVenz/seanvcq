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
        tertiary: '#34353A',
        accent: '#FFCB6C'
      },
      backgroundColor:{
        main: '#34353A',
        secondary: '#F0BF6C',
        tertiary: '#3D3E42',
        accent: '#FFCB6C',
        quaternary: '#5E5F62'
      },
      borderColor:{
        accent: '#FFCB6C'
      },
      animation: {
        dots: "dots 1s infinite linear",
      },
      keyframes: {
        dots: {
          "20%": {
            backgroundPosition: "0% 0%, 50% 50%, 100% 50%",
          },
          "40%": {
            backgroundPosition: "0% 100%, 50% 0%, 100% 50%",
          },
          "60%": {
            backgroundPosition: "0% 50%, 50% 100%, 100% 0%",
          },
          "80%": {
            backgroundPosition: "0% 50%, 50% 50%, 100% 100%",
          },
        },
      },
    },
  },
  plugins: [],
};
