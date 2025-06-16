// tailwind.config.js - (Your existing animations)
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          'fade-in-up': { /* ... */ },
          'fade-in-left': { /* ... */ },
          'fade-in-right': { /* ... */ },
          'fade-in-down': { /* ... */ },
          'zoom-in': { /* ... */ },
          'bounce': { /* ... */ }
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
          'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
          'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
          'fade-in-down': 'fade-in-down 0.3s ease-out forwards',
          'zoom-in': 'zoom-in 0.5s ease-out forwards',
          'bounce': 'bounce 1s infinite',
          // Delayed animations (using animation-delay)
          'fade-in-up-delay-200': 'fade-in-up 0.6s ease-out 0.2s forwards',
          'fade-in-up-delay-400': 'fade-in-up 0.6s ease-out 0.4s forwards',
          'fade-in-up-delay-600': 'fade-in-up 0.6s ease-out 0.6s forwards',
          'fade-in-up-delay-800': 'fade-in-up 0.6s ease-out 0.8s forwards',
        },
      },
    },
    plugins: [],
  }