/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor:{
        main: '#FCFCFC',
        secondary: '#5B5C60',
        tertiary: '#34353A',
        accent: '#FFCB6C',
        'light-main': '#34353A',
        'light-secondary': '#5B5C60',
        'light-tertiary': '#FCFCFC',
        'light-accent': '#F0BF6C'
      },
      backgroundColor:{
        main: '#34353A',
        secondary: '#F0BF6C',
        tertiary: '#3D3E42',
        accent: '#FFCB6C',
        quaternary: '#5E5F62',
        'light-main': '#FCFCFC',
        'light-secondary': '#F0BF6C',
        'light-tertiary': '#F5F5F5',
        'light-accent': '#F0BF6C',
        'light-quaternary': '#E0E0E0'
      },
      borderColor:{
        accent: '#FFCB6C',
        'light-accent': '#F0BF6C'
      },
      animation: {
        dots: "dots 1s infinite linear",
        wave: "wave 8s ease-in-out infinite",
        "wave-delayed": "wave 8s ease-in-out infinite 4s",
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
        wave: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        main: ['DM Serif Text', 'serif'],
        secondary: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
