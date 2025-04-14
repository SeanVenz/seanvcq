/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        main: '#FCFCFC',              // White – stays the same
        secondary: '#B0B3B8',         // Softer gray for better readability
        tertiary: '#A0A0A5',          // Even softer for less prominent text
        accent: '#FFCB6C',            // Golden yellow – stays the same
        'light-main': '#34353A',      // Stays the same
        'light-secondary': '#4C4D52', // Darker tone for better light theme contrast
        'light-tertiary': '#7C7D82',  // Subtle muted gray
        'light-accent': '#F8C878'     // Slightly brighter for light mode
      },
      
      backgroundColor: {
        main: '#34353A',              // Dark gray – stays the same
        secondary: '#3D3E42',         // Slight contrast with main (was #F0BF6C)
        tertiary: '#2A2B2F',          // Darker background layer
        accent: '#FFCB6C',            // Stays the same
        quaternary: '#1E1F23',        // Deepest layer or footer
      
        'light-main': '#FCFCFC',      // White – stays the same
        'light-secondary': '#F5F5F5', // Soft light gray for cards
        'light-tertiary': '#E8E8E8',  // Light border/shadow backgrounds
        'light-accent': '#FFD580',    // Brighter golden for contrast
        'light-quaternary': '#DADADA' // Subtle border background
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
      transform: {
        'perspective-1000': 'perspective(1000px)',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
};
