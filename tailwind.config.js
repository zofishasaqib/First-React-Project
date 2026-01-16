/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index-react.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff1493',
        'primary-light': '#ff69b4',
      },
      animation: {
        'pulse-cart': 'pulse-cart 2s ease-in-out infinite',
        'bounce-badge': 'bounce-badge 0.5s ease',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-cart': {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(255, 20, 147, 0.4)' },
          '50%': { boxShadow: '0 4px 30px rgba(255, 20, 147, 0.7)' },
        },
        'bounce-badge': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 20, 147, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
