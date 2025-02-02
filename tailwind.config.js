/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "oresta-blue": "#2F4857",
        "oresta-moss": "#A4C7BC",
        "oresta-moss-2": "#93BDB0",
        "oresta-gray": "#E6E6E6",
        "oresta-blue-gray": "#B6BEC4",
        "oresta-blue-gray-hover": "#AAB4BB",
        "oresta-orange": "#F59756",
        "oresta-orange-hover": "#F48A3E"
      }
    },
  },
  plugins: [],
}
