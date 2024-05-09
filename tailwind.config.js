/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}",
  "./public/index.html",],
  theme: {
    extend: {
      colors: {
        'text': '#050315',
        'background': '#fbfbfe',
        'primary': '#2f27ce',
        'secondary': '#dedcff',
        'accent': '#433bff',
       },       
    },
  },
  plugins: [],
}

