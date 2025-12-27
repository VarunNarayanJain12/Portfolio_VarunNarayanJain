/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        primary: '#ffffff',
        secondary: '#888888',
        accent: '#00ffff', // Cyan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Using Playfair Display as a placeholder for "Large serif accent"
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
