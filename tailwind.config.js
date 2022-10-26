/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
        TweetBoxIconHover: '#1d9bf01a'
      },
      fontFamily: {
        chirp: ['chrip']
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
