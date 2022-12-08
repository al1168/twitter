/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
        TweetBoxIconHover: '#1d9bf01a',
        HeartIconHover: '#F91880',
        RetweetIconHover: '#00BA7C',
        CommentIconHover: '#1D9BF0',
        ShareIconHover: '#1D9BF0',
        twitterColor: '#00ADED',
      },
      fontFamily: {
        chirp: ['chrip'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
