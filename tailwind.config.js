// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,jsx,ts,tsx}",
//     ],
//     theme: {
//       extend: {
//         keyframes: {
//           'fade-in-up': {
//             '0%': {
//               opacity: '0',
//               transform: 'translateY(20px)',
//             },
//             '100%': {
//               opacity: '1',
//               transform: 'translateY(0)',
//             },
//           },
//           'fade-in-left': {
//             '0%': {
//               opacity: '0',
//               transform: 'translateX(-20px)',
//             },
//             '100%': {
//               opacity: '1',
//               transform: 'translateX(0)',
//             },
//           },
//           'fade-in-right': {
//             '0%': {
//               opacity: '0',
//               transform: 'translateX(20px)',
//             },
//             '100%': {
//               opacity: '1',
//               transform: 'translateX(0)',
//             },
//           },
//           'fade-in-down': { // For mobile menu dropdown
//             '0%': {
//               opacity: '0',
//               transform: 'translateY(-10px)',
//             },
//             '100%': {
//               opacity: '1',
//               transform: 'translateY(0)',
//             },
//           },
//           'zoom-in': {
//             '0%': {
//               opacity: '0',
//               transform: 'scale(0.9)',
//             },
//             '100%': {
//               opacity: '1',
//               transform: 'scale(1)',
//             },
//           },
//           'bounce': { // For 404 page
//               '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
//               '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
//           }
//         },
//         animation: {
//           'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
//           'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
//           'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
//           'fade-in-down': 'fade-in-down 0.3s ease-out forwards',
//           'zoom-in': 'zoom-in 0.5s ease-out forwards',
//           'bounce': 'bounce 1s infinite', // For 404 page
//           // Delayed animations - these are used by directly setting `animation-delay` in components
//           'fade-in-up-delay-200': 'fade-in-up 0.6s ease-out 0.2s forwards',
//           'fade-in-up-delay-400': 'fade-in-up 0.6s ease-out 0.4s forwards',
//           'fade-in-up-delay-600': 'fade-in-up 0.6s ease-out 0.6s forwards',
//           'fade-in-up-delay-800': 'fade-in-up 0.6s ease-out 0.8s forwards',
//         },
//       },
//     },
//     plugins: [],
//   }