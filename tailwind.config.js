/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paper-bg': '#f4e7d0',
        'paper-dark': '#e6d5b8',
        'ink': '#1a1a1a',
        'headline-red': '#9e1b1b',
        'gold': '#b8860b',
        'border': '#bca98c',
        'muted': '#6b6b6b',
        'paper-light': '#faf3e6',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'dash': 'dash 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        dash: {
          to: { strokeDashoffset: '-20' },
        },
      },
    },
  },
  plugins: [],
};
