/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "BrunoAce": ["Bruno Ace SC", 'serif'],
        "Tourney":["Tourney", 'serif'],
        "Tektur":["Tektur", 'serif'],
        "Poppins":["Poppins", 'serif'],
        "Lekton":["Lekton", 'serif'],
      }
    },
  },
  plugins: [],
}

