/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        // Neutral
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)',
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)'],
    },
  },
  plugins: [],
}
