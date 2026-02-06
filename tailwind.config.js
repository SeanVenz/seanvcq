/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0F',
        surface: '#12121A',
        'surface-alt': '#1A1A25',
        'surface-hover': '#22222F',
        accent: '#6CB4FF',
        'accent-dim': '#4A8FD4',
        'accent-glow': 'rgba(108, 180, 255, 0.2)',
        'accent-bright': '#A0D4FF',
        aurora: '#4CFFC0',
        'aurora-glow': 'rgba(76, 255, 192, 0.2)',
        border: '#2A2A3A',
        'border-accent': 'rgba(108, 180, 255, 0.13)',
      },
      textColor: {
        primary: '#E8E8ED',
        secondary: '#8888A0',
        tertiary: '#55556A',
      },
      backgroundColor: {
        void: '#0A0A0F',
        surface: '#12121A',
        'surface-alt': '#1A1A25',
        'surface-hover': '#22222F',
      },
      borderColor: {
        DEFAULT: '#2A2A3A',
        accent: '#6CB4FF',
        'accent-subtle': 'rgba(108, 180, 255, 0.13)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h2: ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        caption: ['0.875rem', { lineHeight: '1.4' }],
        mono: ['0.8125rem', { lineHeight: '1.4' }],
      },
      animation: {
        'ticker': 'ticker 40s linear infinite',
        'ticker-reverse': 'ticker-reverse 40s linear infinite',
        'float': 'float 20s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -15px)' },
          '50%': { transform: 'translate(-5px, 10px)' },
          '75%': { transform: 'translate(15px, 5px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.5' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(108, 180, 255, 0.2), 0 0 60px rgba(108, 180, 255, 0.1)',
        'glow-sm': '0 0 10px rgba(108, 180, 255, 0.15)',
        'card': '0 0 30px rgba(108, 180, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
