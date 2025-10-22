/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      backgroundImage: {
        'rainbow-gradient':
          'linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #3b82f6, #8b5cf6)',
      },
      textShadow: {
        glow: '0 0 10px rgba(59,130,246,0.8)',
      },
      animation: {
        'gradient-x': 'gradientX 6s ease infinite',
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  
}
