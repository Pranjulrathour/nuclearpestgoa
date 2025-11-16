/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#d02023', // Nuclear Red
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        gunmetal: '#7A7A7C',
        'deep-black': '#111111',
        'pure-white': '#FFFFFF',
        'hazard-yellow': '#FFDD36',
        'soft-silver': '#C7C7C7',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
